const { CdktfProviderProject } = require('@cdktf/provider-project');

const project = new CdktfProviderProject({
  terraformProvider: "CleverCloud/clevercloud@~> 1.7.1",
  cdktfVersion: "^0.21.0",
  constructsVersion: "^10.4.2",
  githubNamespace: 'clevercloud',
  name: '@clevercloud/cdktf-bindings',
  author: 'Clever Cloud',
  authorAddress: 'https://clever-cloud.com',
  repositoryUrl: 'https://github.com/clevercloud/cdktf-projen.git',
  defaultReleaseBranch: 'master',
  workflowNodeVersion: '20.x',
  minNodeVersion: '20.9.0',
  mavenOrg: 'clevercloud',
  mavenGroupId: 'com.clevercloud',
  nugetOrg: 'CleverCloud',
  packageInfo: {
    npm: {},
    python: {
      distName: 'cdktf-provider-clevercloud',
      module: 'cdktf_provider_clevercloud'
    },
    publishToNuget: {
      dotnetNamespace: 'CleverCloud.Cdktf.Providers.Clevercloud',
      packageId: 'CleverCloud.Cdktf.Providers.Clevercloud'
    },
    publishToMaven: {
      javaPackage: 'com.clevercloud.cdktf.providers.clevercloud',
      mavenGroupId: 'com.clevercloud',
      mavenArtifactId: 'cdktf-provider-clevercloud'
    },
    publishToGo: {
      moduleName: 'github.com/clevercloud/cdktf-provider-clevercloud-go'
    }
  }
});

// Add @cdktf/provider-project as a dev dependency to avoid module not found errors
project.addDevDeps('@cdktf/provider-project@^0.7.23');

// Override the package name to use @clevercloud/cdktf-bindings instead of auto-generated name
project.package.addField('name', '@clevercloud/cdktf-bindings');

// Fix the release workflow to use master branch instead of main
project.postSynthesize = () => {
  const fs = require('fs');
  const path = require('path');

  // Fix release workflow
  const releaseYmlPath = path.join(project.outdir, '.github/workflows/release.yml');
  if (fs.existsSync(releaseYmlPath)) {
    fs.chmodSync(releaseYmlPath, 0o644);
    let content = fs.readFileSync(releaseYmlPath, 'utf8');

    // Replace main with master in the branches section
    content = content.replace(/branches:\n      - main/g, 'branches:\n      - master');
    // Replace package name in npm deprecate command
    content = content.replace(/@clevercloud\/provider-clevercloud/g, '@clevercloud/cdktf-bindings');

    // Add NPM_TRUSTED_PUBLISHER to env if not present
    if (!content.includes('NPM_TRUSTED_PUBLISHER')) {
      content = content.replace(
        /(workflow_dispatch: \{\}\nconcurrency:)/,
        'workflow_dispatch: {}\nenv:\n  NPM_TRUSTED_PUBLISHER: true\nconcurrency:'
      );
    }

    // Add global permissions for OIDC (Trusted Publishers)
    if (!content.includes('permissions:\n  id-token: write')) {
      content = content.replace(
        /(env:\n  NPM_TRUSTED_PUBLISHER: true\nconcurrency:)/,
        'env:\n  NPM_TRUSTED_PUBLISHER: true\npermissions:\n  id-token: write  # Required for OIDC\n  contents: read\nconcurrency:'
      );
    }

    // Replace publib-pypi with official PyPI publish action (supports Trusted Publishers)
    content = content.replace(
      /(- name: Release\n        (?:env:\n          TWINE_USERNAME: \$\{\{ secrets\.TWINE_USERNAME \}\}\n          TWINE_PASSWORD: \$\{\{ secrets\.TWINE_PASSWORD \}\}\n        )?run: npx -p publib@latest publib-pypi)/,
      '- name: Release\n        uses: pypa/gh-action-pypi-publish@release/v1\n        with:\n          packages-dir: dist/python/'
    );

    // Replace publib-npm with npm publish using OIDC Trusted Publishers (no token needed)
    content = content.replace(
      /(- name: Release\n        env:\n          NPM_DIST_TAG: latest\n          NPM_REGISTRY: registry\.npmjs\.org\n          NPM_TOKEN: \$\{\{ secrets\.NPM_TOKEN \}\}\n        run: npx -p publib@latest publib-npm)/,
      '- name: Setup Node.js with npm registry\n        uses: actions/setup-node@cdca7365b2dadb8aad0a33bc7601856ffabcc48e\n        with:\n          node-version: 20.x\n          registry-url: https://registry.npmjs.org\n      - name: Update npm to latest version\n        run: npm install -g npm@latest\n      - name: Release\n        run: npm publish dist/js/*.tgz --tag latest --access public --provenance'
    );

    // Add id-token permission to npm and pypi jobs (they override global permissions)
    content = content.replace(
      /(release_npm:[\s\S]*?permissions:\n      contents: read\n      issues: write)\n    if:/,
      '$1\n      id-token: write\n    if:'
    );
    content = content.replace(
      /(release_pypi:[\s\S]*?permissions:\n      contents: read\n      issues: write)\n    if:/,
      '$1\n      id-token: write\n    if:'
    );

    fs.writeFileSync(releaseYmlPath, content);
    fs.chmodSync(releaseYmlPath, 0o444);
  }

  // Fix Python distName in package.json
  const packageJsonPath = path.join(project.outdir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Fix Python package distName to match .projenrc.js configuration
    if (packageJson.jsii && packageJson.jsii.targets && packageJson.jsii.targets.python) {
      if (packageJson.jsii.targets.python.distName !== 'cdktf-provider-clevercloud') {
        packageJson.jsii.targets.python.distName = 'cdktf-provider-clevercloud';
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
      }
    }
  }
};

project.synth();
