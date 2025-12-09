# `frankenphp` Submodule <a name="`frankenphp` Submodule" id="@clevercloud/cdktf-bindings.frankenphp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frankenphp <a name="Frankenphp" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp clevercloud_frankenphp}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.Frankenphp;

Frankenphp.Builder.create(Construct scope, java.lang.String id)
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
//  .deployment(FrankenphpDeployment)
//  .description(java.lang.String)
//  .devDependencies(java.lang.Boolean|IResolvable)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .exposedEnvironment(java.util.Map<java.lang.String, java.lang.String>)
//  .hooks(FrankenphpHooks)
//  .networkgroups(IResolvable|java.util.List<FrankenphpNetworkgroups>)
//  .redirectHttps(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .stickySessions(java.lang.Boolean|IResolvable)
//  .vhosts(IResolvable|java.util.List<FrankenphpVhosts>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.appFolder">appFolder</a></code> | <code>java.lang.String</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.devDependencies">devDependencies</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Install development dependencies (Default: false). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>></code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.vhosts">vhosts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>></code> | List of virtual hosts. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.biggestFlavor"></a>

- *Type:* java.lang.String

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#biggest_flavor Frankenphp#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.maxInstanceCount"></a>

- *Type:* java.lang.Number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#max_instance_count Frankenphp#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.minInstanceCount"></a>

- *Type:* java.lang.Number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#min_instance_count Frankenphp#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#name Frankenphp#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.smallestFlavor"></a>

- *Type:* java.lang.String

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#smallest_flavor Frankenphp#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.appFolder"></a>

- *Type:* java.lang.String

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#app_folder Frankenphp#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.buildFlavor"></a>

- *Type:* java.lang.String

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#build_flavor Frankenphp#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.dependencies"></a>

- *Type:* java.util.List<java.lang.String>

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dependencies Frankenphp#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#deployment Frankenphp#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#description Frankenphp#description}

---

##### `devDependencies`<sup>Optional</sup> <a name="devDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.devDependencies"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Install development dependencies (Default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dev_dependencies Frankenphp#dev_dependencies}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.environment"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#environment Frankenphp#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.exposedEnvironment"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#exposed_environment Frankenphp#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#hooks Frankenphp#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.networkgroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>>

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#networkgroups Frankenphp#networkgroups}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.redirectHttps"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#redirect_https Frankenphp#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#region Frankenphp#region}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.stickySessions"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#sticky_sessions Frankenphp#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.vhosts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>>

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#vhosts Frankenphp#vhosts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts">putVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetAppFolder">resetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetBuildFlavor">resetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDevDependencies">resetDevDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetExposedEnvironment">resetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetHooks">resetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRedirectHttps">resetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetVhosts">resetVhosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment"></a>

```java
public void putDeployment(FrankenphpDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>

---

##### `putHooks` <a name="putHooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks"></a>

```java
public void putHooks(FrankenphpHooks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups"></a>

```java
public void putNetworkgroups(IResolvable|java.util.List<FrankenphpNetworkgroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>>

---

##### `putVhosts` <a name="putVhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts"></a>

```java
public void putVhosts(IResolvable|java.util.List<FrankenphpVhosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>>

---

##### `resetAppFolder` <a name="resetAppFolder" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetAppFolder"></a>

```java
public void resetAppFolder()
```

##### `resetBuildFlavor` <a name="resetBuildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetBuildFlavor"></a>

```java
public void resetBuildFlavor()
```

##### `resetDependencies` <a name="resetDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDependencies"></a>

```java
public void resetDependencies()
```

##### `resetDeployment` <a name="resetDeployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDeployment"></a>

```java
public void resetDeployment()
```

##### `resetDescription` <a name="resetDescription" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDevDependencies` <a name="resetDevDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDevDependencies"></a>

```java
public void resetDevDependencies()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetExposedEnvironment` <a name="resetExposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetExposedEnvironment"></a>

```java
public void resetExposedEnvironment()
```

##### `resetHooks` <a name="resetHooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetHooks"></a>

```java
public void resetHooks()
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetNetworkgroups"></a>

```java
public void resetNetworkgroups()
```

##### `resetRedirectHttps` <a name="resetRedirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRedirectHttps"></a>

```java
public void resetRedirectHttps()
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStickySessions` <a name="resetStickySessions" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetStickySessions"></a>

```java
public void resetStickySessions()
```

##### `resetVhosts` <a name="resetVhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetVhosts"></a>

```java
public void resetVhosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Frankenphp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isConstruct"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.Frankenphp;

Frankenphp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.Frankenphp;

Frankenphp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.Frankenphp;

Frankenphp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.Frankenphp;

Frankenphp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Frankenphp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Frankenphp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Frankenphp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Frankenphp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Frankenphp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference">FrankenphpDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployUrl">deployUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference">FrankenphpHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList">FrankenphpNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList">FrankenphpVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolderInput">appFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavorInput">biggestFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavorInput">buildFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependenciesInput">dependenciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependenciesInput">devDependenciesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environmentInput">environmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironmentInput">exposedEnvironmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooksInput">hooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroupsInput">networkgroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttpsInput">redirectHttpsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavorInput">smallestFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessionsInput">stickySessionsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhostsInput">vhostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolder">appFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependencies">devDependencies</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployment"></a>

```java
public FrankenphpDeploymentOutputReference getDeployment();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference">FrankenphpDeploymentOutputReference</a>

---

##### `deployUrl`<sup>Required</sup> <a name="deployUrl" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployUrl"></a>

```java
public java.lang.String getDeployUrl();
```

- *Type:* java.lang.String

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooks"></a>

```java
public FrankenphpHooksOutputReference getHooks();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference">FrankenphpHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroups"></a>

```java
public FrankenphpNetworkgroupsList getNetworkgroups();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList">FrankenphpNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhosts"></a>

```java
public FrankenphpVhostsList getVhosts();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList">FrankenphpVhostsList</a>

---

##### `appFolderInput`<sup>Optional</sup> <a name="appFolderInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolderInput"></a>

```java
public java.lang.String getAppFolderInput();
```

- *Type:* java.lang.String

---

##### `biggestFlavorInput`<sup>Optional</sup> <a name="biggestFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavorInput"></a>

```java
public java.lang.String getBiggestFlavorInput();
```

- *Type:* java.lang.String

---

##### `buildFlavorInput`<sup>Optional</sup> <a name="buildFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavorInput"></a>

```java
public java.lang.String getBuildFlavorInput();
```

- *Type:* java.lang.String

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependenciesInput"></a>

```java
public java.util.List<java.lang.String> getDependenciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deploymentInput"></a>

```java
public FrankenphpDeployment|IResolvable getDeploymentInput();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>|com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `devDependenciesInput`<sup>Optional</sup> <a name="devDependenciesInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependenciesInput"></a>

```java
public java.lang.Boolean|IResolvable getDevDependenciesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `exposedEnvironmentInput`<sup>Optional</sup> <a name="exposedEnvironmentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooksInput"></a>

```java
public FrankenphpHooks|IResolvable getHooksInput();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>|com.hashicorp.cdktf.IResolvable

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCountInput"></a>

```java
public java.lang.Number getMaxInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroupsInput"></a>

```java
public IResolvable|java.util.List<FrankenphpNetworkgroups> getNetworkgroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>>

---

##### `redirectHttpsInput`<sup>Optional</sup> <a name="redirectHttpsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttpsInput"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttpsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `smallestFlavorInput`<sup>Optional</sup> <a name="smallestFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavorInput"></a>

```java
public java.lang.String getSmallestFlavorInput();
```

- *Type:* java.lang.String

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessionsInput"></a>

```java
public java.lang.Boolean|IResolvable getStickySessionsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `vhostsInput`<sup>Optional</sup> <a name="vhostsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhostsInput"></a>

```java
public IResolvable|java.util.List<FrankenphpVhosts> getVhostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>>

---

##### `appFolder`<sup>Required</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolder"></a>

```java
public java.lang.String getAppFolder();
```

- *Type:* java.lang.String

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavor"></a>

```java
public java.lang.String getBiggestFlavor();
```

- *Type:* java.lang.String

---

##### `buildFlavor`<sup>Required</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavor"></a>

```java
public java.lang.String getBuildFlavor();
```

- *Type:* java.lang.String

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependencies"></a>

```java
public java.util.List<java.lang.String> getDependencies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependencies"></a>

```java
public java.lang.Boolean|IResolvable getDevDependencies();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `exposedEnvironment`<sup>Required</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redirectHttps`<sup>Required</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttps"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttps();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavor"></a>

```java
public java.lang.String getSmallestFlavor();
```

- *Type:* java.lang.String

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessions"></a>

```java
public java.lang.Boolean|IResolvable getStickySessions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FrankenphpConfig <a name="FrankenphpConfig" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpConfig;

FrankenphpConfig.builder()
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
//  .deployment(FrankenphpDeployment)
//  .description(java.lang.String)
//  .devDependencies(java.lang.Boolean|IResolvable)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .exposedEnvironment(java.util.Map<java.lang.String, java.lang.String>)
//  .hooks(FrankenphpHooks)
//  .networkgroups(IResolvable|java.util.List<FrankenphpNetworkgroups>)
//  .redirectHttps(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .stickySessions(java.lang.Boolean|IResolvable)
//  .vhosts(IResolvable|java.util.List<FrankenphpVhosts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.appFolder">appFolder</a></code> | <code>java.lang.String</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.description">description</a></code> | <code>java.lang.String</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.devDependencies">devDependencies</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Install development dependencies (Default: false). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>></code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.vhosts">vhosts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>></code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.biggestFlavor"></a>

```java
public java.lang.String getBiggestFlavor();
```

- *Type:* java.lang.String

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#biggest_flavor Frankenphp#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#max_instance_count Frankenphp#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#min_instance_count Frankenphp#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#name Frankenphp#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.smallestFlavor"></a>

```java
public java.lang.String getSmallestFlavor();
```

- *Type:* java.lang.String

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#smallest_flavor Frankenphp#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.appFolder"></a>

```java
public java.lang.String getAppFolder();
```

- *Type:* java.lang.String

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#app_folder Frankenphp#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.buildFlavor"></a>

```java
public java.lang.String getBuildFlavor();
```

- *Type:* java.lang.String

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#build_flavor Frankenphp#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependencies"></a>

```java
public java.util.List<java.lang.String> getDependencies();
```

- *Type:* java.util.List<java.lang.String>

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dependencies Frankenphp#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.deployment"></a>

```java
public FrankenphpDeployment getDeployment();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#deployment Frankenphp#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#description Frankenphp#description}

---

##### `devDependencies`<sup>Optional</sup> <a name="devDependencies" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.devDependencies"></a>

```java
public java.lang.Boolean|IResolvable getDevDependencies();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Install development dependencies (Default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dev_dependencies Frankenphp#dev_dependencies}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#environment Frankenphp#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.exposedEnvironment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#exposed_environment Frankenphp#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.hooks"></a>

```java
public FrankenphpHooks getHooks();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#hooks Frankenphp#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.networkgroups"></a>

```java
public IResolvable|java.util.List<FrankenphpNetworkgroups> getNetworkgroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>>

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#networkgroups Frankenphp#networkgroups}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.redirectHttps"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttps();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#redirect_https Frankenphp#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#region Frankenphp#region}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.stickySessions"></a>

```java
public java.lang.Boolean|IResolvable getStickySessions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#sticky_sessions Frankenphp#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.vhosts"></a>

```java
public IResolvable|java.util.List<FrankenphpVhosts> getVhosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>>

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#vhosts Frankenphp#vhosts}

---

### FrankenphpDeployment <a name="FrankenphpDeployment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpDeployment;

FrankenphpDeployment.builder()
//  .authenticationBasic(java.lang.String)
//  .commit(java.lang.String)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.authenticationBasic">authenticationBasic</a></code> | <code>java.lang.String</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.commit">commit</a></code> | <code>java.lang.String</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authenticationBasic`<sup>Optional</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.authenticationBasic"></a>

```java
public java.lang.String getAuthenticationBasic();
```

- *Type:* java.lang.String

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#authentication_basic Frankenphp#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#commit Frankenphp#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#repository Frankenphp#repository}

---

### FrankenphpHooks <a name="FrankenphpHooks" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpHooks;

FrankenphpHooks.builder()
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
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.postBuild">postBuild</a></code> | <code>java.lang.String</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preBuild">preBuild</a></code> | <code>java.lang.String</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preRun">preRun</a></code> | <code>java.lang.String</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runFailed">runFailed</a></code> | <code>java.lang.String</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runSucceed">runSucceed</a></code> | <code>java.lang.String</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `postBuild`<sup>Optional</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.postBuild"></a>

```java
public java.lang.String getPostBuild();
```

- *Type:* java.lang.String

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#post_build Frankenphp#post_build}

---

##### `preBuild`<sup>Optional</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preBuild"></a>

```java
public java.lang.String getPreBuild();
```

- *Type:* java.lang.String

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#pre_build Frankenphp#pre_build}

---

##### `preRun`<sup>Optional</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preRun"></a>

```java
public java.lang.String getPreRun();
```

- *Type:* java.lang.String

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#pre_run Frankenphp#pre_run}

---

##### `runFailed`<sup>Optional</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runFailed"></a>

```java
public java.lang.String getRunFailed();
```

- *Type:* java.lang.String

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#run_failed Frankenphp#run_failed}

---

##### `runSucceed`<sup>Optional</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runSucceed"></a>

```java
public java.lang.String getRunSucceed();
```

- *Type:* java.lang.String

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#run_succeed Frankenphp#run_succeed}

---

### FrankenphpNetworkgroups <a name="FrankenphpNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpNetworkgroups;

FrankenphpNetworkgroups.builder()
    .fqdn(java.lang.String)
    .networkgroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#fqdn Frankenphp#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#networkgroup_id Frankenphp#networkgroup_id}

---

### FrankenphpVhosts <a name="FrankenphpVhosts" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpVhosts;

FrankenphpVhosts.builder()
    .fqdn(java.lang.String)
//  .pathBegin(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.pathBegin">pathBegin</a></code> | <code>java.lang.String</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#fqdn Frankenphp#fqdn}

---

##### `pathBegin`<sup>Optional</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.pathBegin"></a>

```java
public java.lang.String getPathBegin();
```

- *Type:* java.lang.String

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#path_begin Frankenphp#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### FrankenphpDeploymentOutputReference <a name="FrankenphpDeploymentOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpDeploymentOutputReference;

new FrankenphpDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetAuthenticationBasic">resetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationBasic` <a name="resetAuthenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetAuthenticationBasic"></a>

```java
public void resetAuthenticationBasic()
```

##### `resetCommit` <a name="resetCommit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetCommit"></a>

```java
public void resetCommit()
```

##### `resetRepository` <a name="resetRepository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasicInput">authenticationBasicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasic">authenticationBasic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationBasicInput`<sup>Optional</sup> <a name="authenticationBasicInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasicInput"></a>

```java
public java.lang.String getAuthenticationBasicInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `authenticationBasic`<sup>Required</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasic"></a>

```java
public java.lang.String getAuthenticationBasic();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.internalValue"></a>

```java
public FrankenphpDeployment|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>|com.hashicorp.cdktf.IResolvable

---


### FrankenphpHooksOutputReference <a name="FrankenphpHooksOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpHooksOutputReference;

new FrankenphpHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPostBuild">resetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreBuild">resetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreRun">resetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunFailed">resetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunSucceed">resetRunSucceed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostBuild` <a name="resetPostBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPostBuild"></a>

```java
public void resetPostBuild()
```

##### `resetPreBuild` <a name="resetPreBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreBuild"></a>

```java
public void resetPreBuild()
```

##### `resetPreRun` <a name="resetPreRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreRun"></a>

```java
public void resetPreRun()
```

##### `resetRunFailed` <a name="resetRunFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunFailed"></a>

```java
public void resetRunFailed()
```

##### `resetRunSucceed` <a name="resetRunSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunSucceed"></a>

```java
public void resetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuildInput">postBuildInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuildInput">preBuildInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRunInput">preRunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailedInput">runFailedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceedInput">runSucceedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuild">postBuild</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuild">preBuild</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRun">preRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailed">runFailed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceed">runSucceed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postBuildInput`<sup>Optional</sup> <a name="postBuildInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuildInput"></a>

```java
public java.lang.String getPostBuildInput();
```

- *Type:* java.lang.String

---

##### `preBuildInput`<sup>Optional</sup> <a name="preBuildInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuildInput"></a>

```java
public java.lang.String getPreBuildInput();
```

- *Type:* java.lang.String

---

##### `preRunInput`<sup>Optional</sup> <a name="preRunInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRunInput"></a>

```java
public java.lang.String getPreRunInput();
```

- *Type:* java.lang.String

---

##### `runFailedInput`<sup>Optional</sup> <a name="runFailedInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailedInput"></a>

```java
public java.lang.String getRunFailedInput();
```

- *Type:* java.lang.String

---

##### `runSucceedInput`<sup>Optional</sup> <a name="runSucceedInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceedInput"></a>

```java
public java.lang.String getRunSucceedInput();
```

- *Type:* java.lang.String

---

##### `postBuild`<sup>Required</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuild"></a>

```java
public java.lang.String getPostBuild();
```

- *Type:* java.lang.String

---

##### `preBuild`<sup>Required</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuild"></a>

```java
public java.lang.String getPreBuild();
```

- *Type:* java.lang.String

---

##### `preRun`<sup>Required</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRun"></a>

```java
public java.lang.String getPreRun();
```

- *Type:* java.lang.String

---

##### `runFailed`<sup>Required</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailed"></a>

```java
public java.lang.String getRunFailed();
```

- *Type:* java.lang.String

---

##### `runSucceed`<sup>Required</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceed"></a>

```java
public java.lang.String getRunSucceed();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.internalValue"></a>

```java
public FrankenphpHooks|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>|com.hashicorp.cdktf.IResolvable

---


### FrankenphpNetworkgroupsList <a name="FrankenphpNetworkgroupsList" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpNetworkgroupsList;

new FrankenphpNetworkgroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get"></a>

```java
public FrankenphpNetworkgroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrankenphpNetworkgroups> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>>

---


### FrankenphpNetworkgroupsOutputReference <a name="FrankenphpNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpNetworkgroupsOutputReference;

new FrankenphpNetworkgroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```java
public java.lang.String getNetworkgroupIdInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.internalValue"></a>

```java
public FrankenphpNetworkgroups|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>|com.hashicorp.cdktf.IResolvable

---


### FrankenphpVhostsList <a name="FrankenphpVhostsList" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpVhostsList;

new FrankenphpVhostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get"></a>

```java
public FrankenphpVhostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrankenphpVhosts> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>>

---


### FrankenphpVhostsOutputReference <a name="FrankenphpVhostsOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.frankenphp.FrankenphpVhostsOutputReference;

new FrankenphpVhostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resetPathBegin">resetPathBegin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathBegin` <a name="resetPathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resetPathBegin"></a>

```java
public void resetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBeginInput">pathBeginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBegin">pathBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `pathBeginInput`<sup>Optional</sup> <a name="pathBeginInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBeginInput"></a>

```java
public java.lang.String getPathBeginInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `pathBegin`<sup>Required</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBegin"></a>

```java
public java.lang.String getPathBegin();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.internalValue"></a>

```java
public FrankenphpVhosts|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>|com.hashicorp.cdktf.IResolvable

---



