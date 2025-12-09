# `nodejs` Submodule <a name="`nodejs` Submodule" id="@clevercloud/cdktf-bindings.nodejs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Nodejs <a name="Nodejs" id="@clevercloud/cdktf-bindings.nodejs.Nodejs"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs clevercloud_nodejs}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.Nodejs;

Nodejs.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .biggestFlavor(java.lang.String)
    .maxInstanceCount(java.lang.Number)
    .minInstanceCount(java.lang.Number)
    .name(java.lang.String)
    .smallestFlavor(java.lang.String)
//  .appFolder(java.lang.String)
//  .buildFlavor(java.lang.String)
//  .dependencies(java.util.List<java.lang.String>)
//  .deployment(NodejsDeployment)
//  .description(java.lang.String)
//  .devDependencies(java.lang.Boolean|IResolvable)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .exposedEnvironment(java.util.Map<java.lang.String, java.lang.String>)
//  .hooks(NodejsHooks)
//  .networkgroups(IResolvable|java.util.List<NodejsNetworkgroups>)
//  .packageManager(java.lang.String)
//  .redirectHttps(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .registry(java.lang.String)
//  .registryToken(java.lang.String)
//  .startScript(java.lang.String)
//  .stickySessions(java.lang.Boolean|IResolvable)
//  .vhosts(IResolvable|java.util.List<NodejsVhosts>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.appFolder">appFolder</a></code> | <code>java.lang.String</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.devDependencies">devDependencies</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Install development dependencies specified in package.json. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>></code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.packageManager">packageManager</a></code> | <code>java.lang.String</code> | Either npm, npm-ci, bun, pnpm, yarn-berry or custom. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.registry">registry</a></code> | <code>java.lang.String</code> | The host of your private repository, available values: github or the registry host. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.registryToken">registryToken</a></code> | <code>java.lang.String</code> | Private repository token. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.startScript">startScript</a></code> | <code>java.lang.String</code> | Set custom start script, instead of `npm start`. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.vhosts">vhosts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>></code> | List of virtual hosts. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.biggestFlavor"></a>

- *Type:* java.lang.String

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#biggest_flavor Nodejs#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.maxInstanceCount"></a>

- *Type:* java.lang.Number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#max_instance_count Nodejs#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.minInstanceCount"></a>

- *Type:* java.lang.Number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#min_instance_count Nodejs#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#name Nodejs#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.smallestFlavor"></a>

- *Type:* java.lang.String

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#smallest_flavor Nodejs#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.appFolder"></a>

- *Type:* java.lang.String

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#app_folder Nodejs#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.buildFlavor"></a>

- *Type:* java.lang.String

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#build_flavor Nodejs#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.dependencies"></a>

- *Type:* java.util.List<java.lang.String>

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#dependencies Nodejs#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#deployment Nodejs#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#description Nodejs#description}

---

##### `devDependencies`<sup>Optional</sup> <a name="devDependencies" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.devDependencies"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Install development dependencies specified in package.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#dev_dependencies Nodejs#dev_dependencies}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.environment"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#environment Nodejs#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.exposedEnvironment"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#exposed_environment Nodejs#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#hooks Nodejs#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.networkgroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>>

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#networkgroups Nodejs#networkgroups}

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.packageManager"></a>

- *Type:* java.lang.String

Either npm, npm-ci, bun, pnpm, yarn-berry or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#package_manager Nodejs#package_manager}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.redirectHttps"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#redirect_https Nodejs#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#region Nodejs#region}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.registry"></a>

- *Type:* java.lang.String

The host of your private repository, available values: github or the registry host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#registry Nodejs#registry}

---

##### `registryToken`<sup>Optional</sup> <a name="registryToken" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.registryToken"></a>

- *Type:* java.lang.String

Private repository token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#registry_token Nodejs#registry_token}

---

##### `startScript`<sup>Optional</sup> <a name="startScript" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.startScript"></a>

- *Type:* java.lang.String

Set custom start script, instead of `npm start`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#start_script Nodejs#start_script}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.stickySessions"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#sticky_sessions Nodejs#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.Initializer.parameter.vhosts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>>

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#vhosts Nodejs#vhosts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.putVhosts">putVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetAppFolder">resetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetBuildFlavor">resetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDevDependencies">resetDevDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetExposedEnvironment">resetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetHooks">resetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetPackageManager">resetPackageManager</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRedirectHttps">resetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRegistry">resetRegistry</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRegistryToken">resetRegistryToken</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetStartScript">resetStartScript</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.resetVhosts">resetVhosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putDeployment"></a>

```java
public void putDeployment(NodejsDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a>

---

##### `putHooks` <a name="putHooks" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putHooks"></a>

```java
public void putHooks(NodejsHooks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a>

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putNetworkgroups"></a>

```java
public void putNetworkgroups(IResolvable|java.util.List<NodejsNetworkgroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putNetworkgroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>>

---

##### `putVhosts` <a name="putVhosts" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putVhosts"></a>

```java
public void putVhosts(IResolvable|java.util.List<NodejsVhosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.putVhosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>>

---

##### `resetAppFolder` <a name="resetAppFolder" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetAppFolder"></a>

```java
public void resetAppFolder()
```

##### `resetBuildFlavor` <a name="resetBuildFlavor" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetBuildFlavor"></a>

```java
public void resetBuildFlavor()
```

##### `resetDependencies` <a name="resetDependencies" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDependencies"></a>

```java
public void resetDependencies()
```

##### `resetDeployment` <a name="resetDeployment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDeployment"></a>

```java
public void resetDeployment()
```

##### `resetDescription` <a name="resetDescription" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDevDependencies` <a name="resetDevDependencies" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetDevDependencies"></a>

```java
public void resetDevDependencies()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetExposedEnvironment` <a name="resetExposedEnvironment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetExposedEnvironment"></a>

```java
public void resetExposedEnvironment()
```

##### `resetHooks` <a name="resetHooks" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetHooks"></a>

```java
public void resetHooks()
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetNetworkgroups"></a>

```java
public void resetNetworkgroups()
```

##### `resetPackageManager` <a name="resetPackageManager" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetPackageManager"></a>

```java
public void resetPackageManager()
```

##### `resetRedirectHttps` <a name="resetRedirectHttps" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRedirectHttps"></a>

```java
public void resetRedirectHttps()
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRegistry` <a name="resetRegistry" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRegistry"></a>

```java
public void resetRegistry()
```

##### `resetRegistryToken` <a name="resetRegistryToken" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetRegistryToken"></a>

```java
public void resetRegistryToken()
```

##### `resetStartScript` <a name="resetStartScript" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetStartScript"></a>

```java
public void resetStartScript()
```

##### `resetStickySessions` <a name="resetStickySessions" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetStickySessions"></a>

```java
public void resetStickySessions()
```

##### `resetVhosts` <a name="resetVhosts" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.resetVhosts"></a>

```java
public void resetVhosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Nodejs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.isConstruct"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.Nodejs;

Nodejs.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.Nodejs;

Nodejs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.isTerraformResource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.Nodejs;

Nodejs.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.Nodejs;

Nodejs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Nodejs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Nodejs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Nodejs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Nodejs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Nodejs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference">NodejsDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.deployUrl">deployUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference">NodejsHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList">NodejsNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList">NodejsVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.appFolderInput">appFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.biggestFlavorInput">biggestFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.buildFlavorInput">buildFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.dependenciesInput">dependenciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.devDependenciesInput">devDependenciesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.environmentInput">environmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.exposedEnvironmentInput">exposedEnvironmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.hooksInput">hooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.networkgroupsInput">networkgroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.packageManagerInput">packageManagerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.redirectHttpsInput">redirectHttpsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registryInput">registryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registryTokenInput">registryTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.smallestFlavorInput">smallestFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.startScriptInput">startScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.stickySessionsInput">stickySessionsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.vhostsInput">vhostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.appFolder">appFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.devDependencies">devDependencies</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.packageManager">packageManager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registry">registry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registryToken">registryToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.startScript">startScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.deployment"></a>

```java
public NodejsDeploymentOutputReference getDeployment();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference">NodejsDeploymentOutputReference</a>

---

##### `deployUrl`<sup>Required</sup> <a name="deployUrl" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.deployUrl"></a>

```java
public java.lang.String getDeployUrl();
```

- *Type:* java.lang.String

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.hooks"></a>

```java
public NodejsHooksOutputReference getHooks();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference">NodejsHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.networkgroups"></a>

```java
public NodejsNetworkgroupsList getNetworkgroups();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList">NodejsNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.vhosts"></a>

```java
public NodejsVhostsList getVhosts();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList">NodejsVhostsList</a>

---

##### `appFolderInput`<sup>Optional</sup> <a name="appFolderInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.appFolderInput"></a>

```java
public java.lang.String getAppFolderInput();
```

- *Type:* java.lang.String

---

##### `biggestFlavorInput`<sup>Optional</sup> <a name="biggestFlavorInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.biggestFlavorInput"></a>

```java
public java.lang.String getBiggestFlavorInput();
```

- *Type:* java.lang.String

---

##### `buildFlavorInput`<sup>Optional</sup> <a name="buildFlavorInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.buildFlavorInput"></a>

```java
public java.lang.String getBuildFlavorInput();
```

- *Type:* java.lang.String

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.dependenciesInput"></a>

```java
public java.util.List<java.lang.String> getDependenciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.deploymentInput"></a>

```java
public NodejsDeployment|IResolvable getDeploymentInput();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a>|com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `devDependenciesInput`<sup>Optional</sup> <a name="devDependenciesInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.devDependenciesInput"></a>

```java
public java.lang.Boolean|IResolvable getDevDependenciesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.environmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `exposedEnvironmentInput`<sup>Optional</sup> <a name="exposedEnvironmentInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.exposedEnvironmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.hooksInput"></a>

```java
public NodejsHooks|IResolvable getHooksInput();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a>|com.hashicorp.cdktf.IResolvable

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.maxInstanceCountInput"></a>

```java
public java.lang.Number getMaxInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.networkgroupsInput"></a>

```java
public IResolvable|java.util.List<NodejsNetworkgroups> getNetworkgroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>>

---

##### `packageManagerInput`<sup>Optional</sup> <a name="packageManagerInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.packageManagerInput"></a>

```java
public java.lang.String getPackageManagerInput();
```

- *Type:* java.lang.String

---

##### `redirectHttpsInput`<sup>Optional</sup> <a name="redirectHttpsInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.redirectHttpsInput"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttpsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registryInput"></a>

```java
public java.lang.String getRegistryInput();
```

- *Type:* java.lang.String

---

##### `registryTokenInput`<sup>Optional</sup> <a name="registryTokenInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registryTokenInput"></a>

```java
public java.lang.String getRegistryTokenInput();
```

- *Type:* java.lang.String

---

##### `smallestFlavorInput`<sup>Optional</sup> <a name="smallestFlavorInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.smallestFlavorInput"></a>

```java
public java.lang.String getSmallestFlavorInput();
```

- *Type:* java.lang.String

---

##### `startScriptInput`<sup>Optional</sup> <a name="startScriptInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.startScriptInput"></a>

```java
public java.lang.String getStartScriptInput();
```

- *Type:* java.lang.String

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.stickySessionsInput"></a>

```java
public java.lang.Boolean|IResolvable getStickySessionsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `vhostsInput`<sup>Optional</sup> <a name="vhostsInput" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.vhostsInput"></a>

```java
public IResolvable|java.util.List<NodejsVhosts> getVhostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>>

---

##### `appFolder`<sup>Required</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.appFolder"></a>

```java
public java.lang.String getAppFolder();
```

- *Type:* java.lang.String

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.biggestFlavor"></a>

```java
public java.lang.String getBiggestFlavor();
```

- *Type:* java.lang.String

---

##### `buildFlavor`<sup>Required</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.buildFlavor"></a>

```java
public java.lang.String getBuildFlavor();
```

- *Type:* java.lang.String

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.dependencies"></a>

```java
public java.util.List<java.lang.String> getDependencies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.devDependencies"></a>

```java
public java.lang.Boolean|IResolvable getDevDependencies();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `exposedEnvironment`<sup>Required</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.exposedEnvironment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packageManager`<sup>Required</sup> <a name="packageManager" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.packageManager"></a>

```java
public java.lang.String getPackageManager();
```

- *Type:* java.lang.String

---

##### `redirectHttps`<sup>Required</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.redirectHttps"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttps();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `registry`<sup>Required</sup> <a name="registry" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

---

##### `registryToken`<sup>Required</sup> <a name="registryToken" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.registryToken"></a>

```java
public java.lang.String getRegistryToken();
```

- *Type:* java.lang.String

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.smallestFlavor"></a>

```java
public java.lang.String getSmallestFlavor();
```

- *Type:* java.lang.String

---

##### `startScript`<sup>Required</sup> <a name="startScript" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.startScript"></a>

```java
public java.lang.String getStartScript();
```

- *Type:* java.lang.String

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.stickySessions"></a>

```java
public java.lang.Boolean|IResolvable getStickySessions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.Nodejs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.nodejs.Nodejs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NodejsConfig <a name="NodejsConfig" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsConfig;

NodejsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .biggestFlavor(java.lang.String)
    .maxInstanceCount(java.lang.Number)
    .minInstanceCount(java.lang.Number)
    .name(java.lang.String)
    .smallestFlavor(java.lang.String)
//  .appFolder(java.lang.String)
//  .buildFlavor(java.lang.String)
//  .dependencies(java.util.List<java.lang.String>)
//  .deployment(NodejsDeployment)
//  .description(java.lang.String)
//  .devDependencies(java.lang.Boolean|IResolvable)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .exposedEnvironment(java.util.Map<java.lang.String, java.lang.String>)
//  .hooks(NodejsHooks)
//  .networkgroups(IResolvable|java.util.List<NodejsNetworkgroups>)
//  .packageManager(java.lang.String)
//  .redirectHttps(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .registry(java.lang.String)
//  .registryToken(java.lang.String)
//  .startScript(java.lang.String)
//  .stickySessions(java.lang.Boolean|IResolvable)
//  .vhosts(IResolvable|java.util.List<NodejsVhosts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.appFolder">appFolder</a></code> | <code>java.lang.String</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.description">description</a></code> | <code>java.lang.String</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.devDependencies">devDependencies</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Install development dependencies specified in package.json. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>></code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.packageManager">packageManager</a></code> | <code>java.lang.String</code> | Either npm, npm-ci, bun, pnpm, yarn-berry or custom. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.registry">registry</a></code> | <code>java.lang.String</code> | The host of your private repository, available values: github or the registry host. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.registryToken">registryToken</a></code> | <code>java.lang.String</code> | Private repository token. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.startScript">startScript</a></code> | <code>java.lang.String</code> | Set custom start script, instead of `npm start`. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.vhosts">vhosts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>></code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.biggestFlavor"></a>

```java
public java.lang.String getBiggestFlavor();
```

- *Type:* java.lang.String

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#biggest_flavor Nodejs#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#max_instance_count Nodejs#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#min_instance_count Nodejs#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#name Nodejs#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.smallestFlavor"></a>

```java
public java.lang.String getSmallestFlavor();
```

- *Type:* java.lang.String

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#smallest_flavor Nodejs#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.appFolder"></a>

```java
public java.lang.String getAppFolder();
```

- *Type:* java.lang.String

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#app_folder Nodejs#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.buildFlavor"></a>

```java
public java.lang.String getBuildFlavor();
```

- *Type:* java.lang.String

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#build_flavor Nodejs#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.dependencies"></a>

```java
public java.util.List<java.lang.String> getDependencies();
```

- *Type:* java.util.List<java.lang.String>

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#dependencies Nodejs#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.deployment"></a>

```java
public NodejsDeployment getDeployment();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#deployment Nodejs#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#description Nodejs#description}

---

##### `devDependencies`<sup>Optional</sup> <a name="devDependencies" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.devDependencies"></a>

```java
public java.lang.Boolean|IResolvable getDevDependencies();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Install development dependencies specified in package.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#dev_dependencies Nodejs#dev_dependencies}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#environment Nodejs#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.exposedEnvironment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#exposed_environment Nodejs#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.hooks"></a>

```java
public NodejsHooks getHooks();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#hooks Nodejs#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.networkgroups"></a>

```java
public IResolvable|java.util.List<NodejsNetworkgroups> getNetworkgroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>>

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#networkgroups Nodejs#networkgroups}

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.packageManager"></a>

```java
public java.lang.String getPackageManager();
```

- *Type:* java.lang.String

Either npm, npm-ci, bun, pnpm, yarn-berry or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#package_manager Nodejs#package_manager}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.redirectHttps"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttps();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#redirect_https Nodejs#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#region Nodejs#region}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

The host of your private repository, available values: github or the registry host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#registry Nodejs#registry}

---

##### `registryToken`<sup>Optional</sup> <a name="registryToken" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.registryToken"></a>

```java
public java.lang.String getRegistryToken();
```

- *Type:* java.lang.String

Private repository token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#registry_token Nodejs#registry_token}

---

##### `startScript`<sup>Optional</sup> <a name="startScript" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.startScript"></a>

```java
public java.lang.String getStartScript();
```

- *Type:* java.lang.String

Set custom start script, instead of `npm start`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#start_script Nodejs#start_script}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.stickySessions"></a>

```java
public java.lang.Boolean|IResolvable getStickySessions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#sticky_sessions Nodejs#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.nodejs.NodejsConfig.property.vhosts"></a>

```java
public IResolvable|java.util.List<NodejsVhosts> getVhosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>>

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#vhosts Nodejs#vhosts}

---

### NodejsDeployment <a name="NodejsDeployment" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeployment.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsDeployment;

NodejsDeployment.builder()
//  .authenticationBasic(java.lang.String)
//  .commit(java.lang.String)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment.property.authenticationBasic">authenticationBasic</a></code> | <code>java.lang.String</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment.property.commit">commit</a></code> | <code>java.lang.String</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authenticationBasic`<sup>Optional</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeployment.property.authenticationBasic"></a>

```java
public java.lang.String getAuthenticationBasic();
```

- *Type:* java.lang.String

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#authentication_basic Nodejs#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeployment.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#commit Nodejs#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeployment.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#repository Nodejs#repository}

---

### NodejsHooks <a name="NodejsHooks" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooks.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsHooks;

NodejsHooks.builder()
//  .postBuild(java.lang.String)
//  .preBuild(java.lang.String)
//  .preRun(java.lang.String)
//  .runFailed(java.lang.String)
//  .runSucceed(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.postBuild">postBuild</a></code> | <code>java.lang.String</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.preBuild">preBuild</a></code> | <code>java.lang.String</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.preRun">preRun</a></code> | <code>java.lang.String</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.runFailed">runFailed</a></code> | <code>java.lang.String</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.runSucceed">runSucceed</a></code> | <code>java.lang.String</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `postBuild`<sup>Optional</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.postBuild"></a>

```java
public java.lang.String getPostBuild();
```

- *Type:* java.lang.String

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#post_build Nodejs#post_build}

---

##### `preBuild`<sup>Optional</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.preBuild"></a>

```java
public java.lang.String getPreBuild();
```

- *Type:* java.lang.String

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#pre_build Nodejs#pre_build}

---

##### `preRun`<sup>Optional</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.preRun"></a>

```java
public java.lang.String getPreRun();
```

- *Type:* java.lang.String

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#pre_run Nodejs#pre_run}

---

##### `runFailed`<sup>Optional</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.runFailed"></a>

```java
public java.lang.String getRunFailed();
```

- *Type:* java.lang.String

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#run_failed Nodejs#run_failed}

---

##### `runSucceed`<sup>Optional</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooks.property.runSucceed"></a>

```java
public java.lang.String getRunSucceed();
```

- *Type:* java.lang.String

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#run_succeed Nodejs#run_succeed}

---

### NodejsNetworkgroups <a name="NodejsNetworkgroups" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsNetworkgroups;

NodejsNetworkgroups.builder()
    .fqdn(java.lang.String)
    .networkgroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#fqdn Nodejs#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#networkgroup_id Nodejs#networkgroup_id}

---

### NodejsVhosts <a name="NodejsVhosts" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhosts.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsVhosts;

NodejsVhosts.builder()
    .fqdn(java.lang.String)
//  .pathBegin(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts.property.pathBegin">pathBegin</a></code> | <code>java.lang.String</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhosts.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#fqdn Nodejs#fqdn}

---

##### `pathBegin`<sup>Optional</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhosts.property.pathBegin"></a>

```java
public java.lang.String getPathBegin();
```

- *Type:* java.lang.String

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/nodejs#path_begin Nodejs#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### NodejsDeploymentOutputReference <a name="NodejsDeploymentOutputReference" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsDeploymentOutputReference;

new NodejsDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resetAuthenticationBasic">resetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationBasic` <a name="resetAuthenticationBasic" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resetAuthenticationBasic"></a>

```java
public void resetAuthenticationBasic()
```

##### `resetCommit` <a name="resetCommit" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resetCommit"></a>

```java
public void resetCommit()
```

##### `resetRepository` <a name="resetRepository" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.authenticationBasicInput">authenticationBasicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.authenticationBasic">authenticationBasic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationBasicInput`<sup>Optional</sup> <a name="authenticationBasicInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.authenticationBasicInput"></a>

```java
public java.lang.String getAuthenticationBasicInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `authenticationBasic`<sup>Required</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.authenticationBasic"></a>

```java
public java.lang.String getAuthenticationBasic();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.nodejs.NodejsDeploymentOutputReference.property.internalValue"></a>

```java
public NodejsDeployment|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsDeployment">NodejsDeployment</a>|com.hashicorp.cdktf.IResolvable

---


### NodejsHooksOutputReference <a name="NodejsHooksOutputReference" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsHooksOutputReference;

new NodejsHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetPostBuild">resetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetPreBuild">resetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetPreRun">resetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetRunFailed">resetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetRunSucceed">resetRunSucceed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostBuild` <a name="resetPostBuild" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetPostBuild"></a>

```java
public void resetPostBuild()
```

##### `resetPreBuild` <a name="resetPreBuild" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetPreBuild"></a>

```java
public void resetPreBuild()
```

##### `resetPreRun` <a name="resetPreRun" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetPreRun"></a>

```java
public void resetPreRun()
```

##### `resetRunFailed` <a name="resetRunFailed" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetRunFailed"></a>

```java
public void resetRunFailed()
```

##### `resetRunSucceed` <a name="resetRunSucceed" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.resetRunSucceed"></a>

```java
public void resetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.postBuildInput">postBuildInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preBuildInput">preBuildInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preRunInput">preRunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runFailedInput">runFailedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runSucceedInput">runSucceedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.postBuild">postBuild</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preBuild">preBuild</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preRun">preRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runFailed">runFailed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runSucceed">runSucceed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postBuildInput`<sup>Optional</sup> <a name="postBuildInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.postBuildInput"></a>

```java
public java.lang.String getPostBuildInput();
```

- *Type:* java.lang.String

---

##### `preBuildInput`<sup>Optional</sup> <a name="preBuildInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preBuildInput"></a>

```java
public java.lang.String getPreBuildInput();
```

- *Type:* java.lang.String

---

##### `preRunInput`<sup>Optional</sup> <a name="preRunInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preRunInput"></a>

```java
public java.lang.String getPreRunInput();
```

- *Type:* java.lang.String

---

##### `runFailedInput`<sup>Optional</sup> <a name="runFailedInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runFailedInput"></a>

```java
public java.lang.String getRunFailedInput();
```

- *Type:* java.lang.String

---

##### `runSucceedInput`<sup>Optional</sup> <a name="runSucceedInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runSucceedInput"></a>

```java
public java.lang.String getRunSucceedInput();
```

- *Type:* java.lang.String

---

##### `postBuild`<sup>Required</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.postBuild"></a>

```java
public java.lang.String getPostBuild();
```

- *Type:* java.lang.String

---

##### `preBuild`<sup>Required</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preBuild"></a>

```java
public java.lang.String getPreBuild();
```

- *Type:* java.lang.String

---

##### `preRun`<sup>Required</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.preRun"></a>

```java
public java.lang.String getPreRun();
```

- *Type:* java.lang.String

---

##### `runFailed`<sup>Required</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runFailed"></a>

```java
public java.lang.String getRunFailed();
```

- *Type:* java.lang.String

---

##### `runSucceed`<sup>Required</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.runSucceed"></a>

```java
public java.lang.String getRunSucceed();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.nodejs.NodejsHooksOutputReference.property.internalValue"></a>

```java
public NodejsHooks|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsHooks">NodejsHooks</a>|com.hashicorp.cdktf.IResolvable

---


### NodejsNetworkgroupsList <a name="NodejsNetworkgroupsList" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsNetworkgroupsList;

new NodejsNetworkgroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.get"></a>

```java
public NodejsNetworkgroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NodejsNetworkgroups> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>>

---


### NodejsNetworkgroupsOutputReference <a name="NodejsNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsNetworkgroupsOutputReference;

new NodejsNetworkgroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```java
public java.lang.String getNetworkgroupIdInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroupsOutputReference.property.internalValue"></a>

```java
public NodejsNetworkgroups|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsNetworkgroups">NodejsNetworkgroups</a>|com.hashicorp.cdktf.IResolvable

---


### NodejsVhostsList <a name="NodejsVhostsList" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsVhostsList;

new NodejsVhostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.get"></a>

```java
public NodejsVhostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NodejsVhosts> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>>

---


### NodejsVhostsOutputReference <a name="NodejsVhostsOutputReference" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.nodejs.NodejsVhostsOutputReference;

new NodejsVhostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.resetPathBegin">resetPathBegin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathBegin` <a name="resetPathBegin" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.resetPathBegin"></a>

```java
public void resetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.pathBeginInput">pathBeginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.pathBegin">pathBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `pathBeginInput`<sup>Optional</sup> <a name="pathBeginInput" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.pathBeginInput"></a>

```java
public java.lang.String getPathBeginInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `pathBegin`<sup>Required</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.pathBegin"></a>

```java
public java.lang.String getPathBegin();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.nodejs.NodejsVhostsOutputReference.property.internalValue"></a>

```java
public NodejsVhosts|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.nodejs.NodejsVhosts">NodejsVhosts</a>|com.hashicorp.cdktf.IResolvable

---



