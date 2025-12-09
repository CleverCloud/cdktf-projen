# `php` Submodule <a name="`php` Submodule" id="@clevercloud/cdktf-bindings.php"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Php <a name="Php" id="@clevercloud/cdktf-bindings.php.Php"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php clevercloud_php}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.php.Php.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.Php(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  biggest_flavor: str,
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float],
  name: str,
  smallest_flavor: str,
  app_folder: str = None,
  build_flavor: str = None,
  dependencies: typing.List[str] = None,
  deployment: PhpDeployment = None,
  description: str = None,
  dev_dependencies: bool | IResolvable = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: PhpHooks = None,
  networkgroups: IResolvable | typing.List[PhpNetworkgroups] = None,
  php_version: str = None,
  redirect_https: bool | IResolvable = None,
  redis_sessions: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[PhpVhosts] = None,
  webroot: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.devDependencies">dev_dependencies</a></code> | <code>bool \| cdktf.IResolvable</code> | Install development dependencies. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.phpVersion">php_version</a></code> | <code>str</code> | PHP version (Default: 8). |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.redisSessions">redis_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Use a linked Redis instance to store sessions (Default: false). |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]</code> | List of virtual hosts. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.webroot">webroot</a></code> | <code>str</code> | Define the DocumentRoot of your project (default: "."). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.biggestFlavor"></a>

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#biggest_flavor Php#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#max_instance_count Php#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#min_instance_count Php#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.name"></a>

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#name Php#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.smallestFlavor"></a>

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#smallest_flavor Php#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.appFolder"></a>

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#app_folder Php#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.buildFlavor"></a>

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#build_flavor Php#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.dependencies"></a>

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#dependencies Php#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#deployment Php#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.description"></a>

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#description Php#description}

---

##### `dev_dependencies`<sup>Optional</sup> <a name="dev_dependencies" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.devDependencies"></a>

- *Type:* bool | cdktf.IResolvable

Install development dependencies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#dev_dependencies Php#dev_dependencies}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#environment Php#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.exposedEnvironment"></a>

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#exposed_environment Php#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#hooks Php#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.networkgroups"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#networkgroups Php#networkgroups}

---

##### `php_version`<sup>Optional</sup> <a name="php_version" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.phpVersion"></a>

- *Type:* str

PHP version (Default: 8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#php_version Php#php_version}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.redirectHttps"></a>

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#redirect_https Php#redirect_https}

---

##### `redis_sessions`<sup>Optional</sup> <a name="redis_sessions" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.redisSessions"></a>

- *Type:* bool | cdktf.IResolvable

Use a linked Redis instance to store sessions (Default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#redis_sessions Php#redis_sessions}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.region"></a>

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#region Php#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.stickySessions"></a>

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#sticky_sessions Php#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.vhosts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#vhosts Php#vhosts}

---

##### `webroot`<sup>Optional</sup> <a name="webroot" id="@clevercloud/cdktf-bindings.php.Php.Initializer.parameter.webroot"></a>

- *Type:* str

Define the DocumentRoot of your project (default: ".").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#webroot Php#webroot}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.putHooks">put_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.putNetworkgroups">put_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.putVhosts">put_vhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetAppFolder">reset_app_folder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetBuildFlavor">reset_build_flavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetDevDependencies">reset_dev_dependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetExposedEnvironment">reset_exposed_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetHooks">reset_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetNetworkgroups">reset_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetPhpVersion">reset_php_version</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetRedirectHttps">reset_redirect_https</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetRedisSessions">reset_redis_sessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetStickySessions">reset_sticky_sessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetVhosts">reset_vhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.resetWebroot">reset_webroot</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.php.Php.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.php.Php.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.php.Php.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.php.Php.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.php.Php.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.php.Php.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.php.Php.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.php.Php.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.php.Php.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.php.Php.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@clevercloud/cdktf-bindings.php.Php.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.php.Php.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.php.Php.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.php.Php.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.php.Php.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.php.Php.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.php.Php.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.php.Php.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.php.Php.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.php.Php.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.php.Php.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@clevercloud/cdktf-bindings.php.Php.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@clevercloud/cdktf-bindings.php.Php.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.php.Php.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.php.Php.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.php.Php.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.Php.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@clevercloud/cdktf-bindings.php.Php.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.php.Php.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@clevercloud/cdktf-bindings.php.Php.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.php.Php.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.php.Php.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@clevercloud/cdktf-bindings.php.Php.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.php.Php.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment` <a name="put_deployment" id="@clevercloud/cdktf-bindings.php.Php.putDeployment"></a>

```python
def put_deployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
) -> None
```

###### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.php.Php.putDeployment.parameter.authenticationBasic"></a>

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#authentication_basic Php#authentication_basic}

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.php.Php.putDeployment.parameter.commit"></a>

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#commit Php#commit}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.php.Php.putDeployment.parameter.repository"></a>

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#repository Php#repository}

---

##### `put_hooks` <a name="put_hooks" id="@clevercloud/cdktf-bindings.php.Php.putHooks"></a>

```python
def put_hooks(
  post_build: str = None,
  pre_build: str = None,
  pre_run: str = None,
  run_failed: str = None,
  run_succeed: str = None
) -> None
```

###### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.php.Php.putHooks.parameter.postBuild"></a>

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#post_build Php#post_build}

---

###### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.php.Php.putHooks.parameter.preBuild"></a>

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#pre_build Php#pre_build}

---

###### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.php.Php.putHooks.parameter.preRun"></a>

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#pre_run Php#pre_run}

---

###### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.php.Php.putHooks.parameter.runFailed"></a>

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#run_failed Php#run_failed}

---

###### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.php.Php.putHooks.parameter.runSucceed"></a>

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#run_succeed Php#run_succeed}

---

##### `put_networkgroups` <a name="put_networkgroups" id="@clevercloud/cdktf-bindings.php.Php.putNetworkgroups"></a>

```python
def put_networkgroups(
  value: IResolvable | typing.List[PhpNetworkgroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.php.Php.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]

---

##### `put_vhosts` <a name="put_vhosts" id="@clevercloud/cdktf-bindings.php.Php.putVhosts"></a>

```python
def put_vhosts(
  value: IResolvable | typing.List[PhpVhosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.php.Php.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]

---

##### `reset_app_folder` <a name="reset_app_folder" id="@clevercloud/cdktf-bindings.php.Php.resetAppFolder"></a>

```python
def reset_app_folder() -> None
```

##### `reset_build_flavor` <a name="reset_build_flavor" id="@clevercloud/cdktf-bindings.php.Php.resetBuildFlavor"></a>

```python
def reset_build_flavor() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@clevercloud/cdktf-bindings.php.Php.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@clevercloud/cdktf-bindings.php.Php.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_description` <a name="reset_description" id="@clevercloud/cdktf-bindings.php.Php.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dev_dependencies` <a name="reset_dev_dependencies" id="@clevercloud/cdktf-bindings.php.Php.resetDevDependencies"></a>

```python
def reset_dev_dependencies() -> None
```

##### `reset_environment` <a name="reset_environment" id="@clevercloud/cdktf-bindings.php.Php.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_exposed_environment` <a name="reset_exposed_environment" id="@clevercloud/cdktf-bindings.php.Php.resetExposedEnvironment"></a>

```python
def reset_exposed_environment() -> None
```

##### `reset_hooks` <a name="reset_hooks" id="@clevercloud/cdktf-bindings.php.Php.resetHooks"></a>

```python
def reset_hooks() -> None
```

##### `reset_networkgroups` <a name="reset_networkgroups" id="@clevercloud/cdktf-bindings.php.Php.resetNetworkgroups"></a>

```python
def reset_networkgroups() -> None
```

##### `reset_php_version` <a name="reset_php_version" id="@clevercloud/cdktf-bindings.php.Php.resetPhpVersion"></a>

```python
def reset_php_version() -> None
```

##### `reset_redirect_https` <a name="reset_redirect_https" id="@clevercloud/cdktf-bindings.php.Php.resetRedirectHttps"></a>

```python
def reset_redirect_https() -> None
```

##### `reset_redis_sessions` <a name="reset_redis_sessions" id="@clevercloud/cdktf-bindings.php.Php.resetRedisSessions"></a>

```python
def reset_redis_sessions() -> None
```

##### `reset_region` <a name="reset_region" id="@clevercloud/cdktf-bindings.php.Php.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sticky_sessions` <a name="reset_sticky_sessions" id="@clevercloud/cdktf-bindings.php.Php.resetStickySessions"></a>

```python
def reset_sticky_sessions() -> None
```

##### `reset_vhosts` <a name="reset_vhosts" id="@clevercloud/cdktf-bindings.php.Php.resetVhosts"></a>

```python
def reset_vhosts() -> None
```

##### `reset_webroot` <a name="reset_webroot" id="@clevercloud/cdktf-bindings.php.Php.resetWebroot"></a>

```python
def reset_webroot() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Php resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.php.Php.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.Php.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.php.Php.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.php.Php.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.Php.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.php.Php.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@clevercloud/cdktf-bindings.php.Php.isTerraformResource"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.Php.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.php.Php.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.php.Php.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.Php.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Php resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.php.Php.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.php.Php.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Php to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.php.Php.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Php that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.php.Php.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Php to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference">PhpDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.deployUrl">deploy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference">PhpHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList">PhpNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList">PhpVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.appFolderInput">app_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.biggestFlavorInput">biggest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.buildFlavorInput">build_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.dependenciesInput">dependencies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.deploymentInput">deployment_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.devDependenciesInput">dev_dependencies_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.exposedEnvironmentInput">exposed_environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.hooksInput">hooks_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.networkgroupsInput">networkgroups_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.phpVersionInput">php_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.redirectHttpsInput">redirect_https_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.redisSessionsInput">redis_sessions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.smallestFlavorInput">smallest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.stickySessionsInput">sticky_sessions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.vhostsInput">vhosts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.webrootInput">webroot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.appFolder">app_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.buildFlavor">build_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.devDependencies">dev_dependencies</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.phpVersion">php_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.redisSessions">redis_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.webroot">webroot</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.php.Php.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.php.Php.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.php.Php.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.php.Php.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@clevercloud/cdktf-bindings.php.Php.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.php.Php.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.php.Php.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.php.Php.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.php.Php.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.php.Php.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.php.Php.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.php.Php.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.php.Php.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.php.Php.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.php.Php.property.deployment"></a>

```python
deployment: PhpDeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference">PhpDeploymentOutputReference</a>

---

##### `deploy_url`<sup>Required</sup> <a name="deploy_url" id="@clevercloud/cdktf-bindings.php.Php.property.deployUrl"></a>

```python
deploy_url: str
```

- *Type:* str

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.php.Php.property.hooks"></a>

```python
hooks: PhpHooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference">PhpHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.php.Php.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.php.Php.property.networkgroups"></a>

```python
networkgroups: PhpNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList">PhpNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.php.Php.property.vhosts"></a>

```python
vhosts: PhpVhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList">PhpVhostsList</a>

---

##### `app_folder_input`<sup>Optional</sup> <a name="app_folder_input" id="@clevercloud/cdktf-bindings.php.Php.property.appFolderInput"></a>

```python
app_folder_input: str
```

- *Type:* str

---

##### `biggest_flavor_input`<sup>Optional</sup> <a name="biggest_flavor_input" id="@clevercloud/cdktf-bindings.php.Php.property.biggestFlavorInput"></a>

```python
biggest_flavor_input: str
```

- *Type:* str

---

##### `build_flavor_input`<sup>Optional</sup> <a name="build_flavor_input" id="@clevercloud/cdktf-bindings.php.Php.property.buildFlavorInput"></a>

```python
build_flavor_input: str
```

- *Type:* str

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@clevercloud/cdktf-bindings.php.Php.property.dependenciesInput"></a>

```python
dependencies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@clevercloud/cdktf-bindings.php.Php.property.deploymentInput"></a>

```python
deployment_input: PhpDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a> | cdktf.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@clevercloud/cdktf-bindings.php.Php.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dev_dependencies_input`<sup>Optional</sup> <a name="dev_dependencies_input" id="@clevercloud/cdktf-bindings.php.Php.property.devDependenciesInput"></a>

```python
dev_dependencies_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@clevercloud/cdktf-bindings.php.Php.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment_input`<sup>Optional</sup> <a name="exposed_environment_input" id="@clevercloud/cdktf-bindings.php.Php.property.exposedEnvironmentInput"></a>

```python
exposed_environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hooks_input`<sup>Optional</sup> <a name="hooks_input" id="@clevercloud/cdktf-bindings.php.Php.property.hooksInput"></a>

```python
hooks_input: PhpHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a> | cdktf.IResolvable

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@clevercloud/cdktf-bindings.php.Php.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@clevercloud/cdktf-bindings.php.Php.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@clevercloud/cdktf-bindings.php.Php.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkgroups_input`<sup>Optional</sup> <a name="networkgroups_input" id="@clevercloud/cdktf-bindings.php.Php.property.networkgroupsInput"></a>

```python
networkgroups_input: IResolvable | typing.List[PhpNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]

---

##### `php_version_input`<sup>Optional</sup> <a name="php_version_input" id="@clevercloud/cdktf-bindings.php.Php.property.phpVersionInput"></a>

```python
php_version_input: str
```

- *Type:* str

---

##### `redirect_https_input`<sup>Optional</sup> <a name="redirect_https_input" id="@clevercloud/cdktf-bindings.php.Php.property.redirectHttpsInput"></a>

```python
redirect_https_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `redis_sessions_input`<sup>Optional</sup> <a name="redis_sessions_input" id="@clevercloud/cdktf-bindings.php.Php.property.redisSessionsInput"></a>

```python
redis_sessions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@clevercloud/cdktf-bindings.php.Php.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `smallest_flavor_input`<sup>Optional</sup> <a name="smallest_flavor_input" id="@clevercloud/cdktf-bindings.php.Php.property.smallestFlavorInput"></a>

```python
smallest_flavor_input: str
```

- *Type:* str

---

##### `sticky_sessions_input`<sup>Optional</sup> <a name="sticky_sessions_input" id="@clevercloud/cdktf-bindings.php.Php.property.stickySessionsInput"></a>

```python
sticky_sessions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `vhosts_input`<sup>Optional</sup> <a name="vhosts_input" id="@clevercloud/cdktf-bindings.php.Php.property.vhostsInput"></a>

```python
vhosts_input: IResolvable | typing.List[PhpVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]

---

##### `webroot_input`<sup>Optional</sup> <a name="webroot_input" id="@clevercloud/cdktf-bindings.php.Php.property.webrootInput"></a>

```python
webroot_input: str
```

- *Type:* str

---

##### `app_folder`<sup>Required</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.php.Php.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.php.Php.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

---

##### `build_flavor`<sup>Required</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.php.Php.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.php.Php.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.php.Php.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dev_dependencies`<sup>Required</sup> <a name="dev_dependencies" id="@clevercloud/cdktf-bindings.php.Php.property.devDependencies"></a>

```python
dev_dependencies: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.php.Php.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment`<sup>Required</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.php.Php.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.php.Php.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.php.Php.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.php.Php.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `php_version`<sup>Required</sup> <a name="php_version" id="@clevercloud/cdktf-bindings.php.Php.property.phpVersion"></a>

```python
php_version: str
```

- *Type:* str

---

##### `redirect_https`<sup>Required</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.php.Php.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `redis_sessions`<sup>Required</sup> <a name="redis_sessions" id="@clevercloud/cdktf-bindings.php.Php.property.redisSessions"></a>

```python
redis_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.php.Php.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.php.Php.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

---

##### `sticky_sessions`<sup>Required</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.php.Php.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `webroot`<sup>Required</sup> <a name="webroot" id="@clevercloud/cdktf-bindings.php.Php.property.webroot"></a>

```python
webroot: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.Php.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.php.Php.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PhpConfig <a name="PhpConfig" id="@clevercloud/cdktf-bindings.php.PhpConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.php.PhpConfig.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  biggest_flavor: str,
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float],
  name: str,
  smallest_flavor: str,
  app_folder: str = None,
  build_flavor: str = None,
  dependencies: typing.List[str] = None,
  deployment: PhpDeployment = None,
  description: str = None,
  dev_dependencies: bool | IResolvable = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: PhpHooks = None,
  networkgroups: IResolvable | typing.List[PhpNetworkgroups] = None,
  php_version: str = None,
  redirect_https: bool | IResolvable = None,
  redis_sessions: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[PhpVhosts] = None,
  webroot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.devDependencies">dev_dependencies</a></code> | <code>bool \| cdktf.IResolvable</code> | Install development dependencies. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.phpVersion">php_version</a></code> | <code>str</code> | PHP version (Default: 8). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.redisSessions">redis_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Use a linked Redis instance to store sessions (Default: false). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]</code> | List of virtual hosts. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpConfig.property.webroot">webroot</a></code> | <code>str</code> | Define the DocumentRoot of your project (default: "."). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#biggest_flavor Php#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#max_instance_count Php#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#min_instance_count Php#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#name Php#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#smallest_flavor Php#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#app_folder Php#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#build_flavor Php#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#dependencies Php#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.deployment"></a>

```python
deployment: PhpDeployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#deployment Php#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#description Php#description}

---

##### `dev_dependencies`<sup>Optional</sup> <a name="dev_dependencies" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.devDependencies"></a>

```python
dev_dependencies: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Install development dependencies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#dev_dependencies Php#dev_dependencies}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#environment Php#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#exposed_environment Php#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.hooks"></a>

```python
hooks: PhpHooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#hooks Php#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.networkgroups"></a>

```python
networkgroups: IResolvable | typing.List[PhpNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#networkgroups Php#networkgroups}

---

##### `php_version`<sup>Optional</sup> <a name="php_version" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.phpVersion"></a>

```python
php_version: str
```

- *Type:* str

PHP version (Default: 8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#php_version Php#php_version}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#redirect_https Php#redirect_https}

---

##### `redis_sessions`<sup>Optional</sup> <a name="redis_sessions" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.redisSessions"></a>

```python
redis_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Use a linked Redis instance to store sessions (Default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#redis_sessions Php#redis_sessions}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#region Php#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#sticky_sessions Php#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.vhosts"></a>

```python
vhosts: IResolvable | typing.List[PhpVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#vhosts Php#vhosts}

---

##### `webroot`<sup>Optional</sup> <a name="webroot" id="@clevercloud/cdktf-bindings.php.PhpConfig.property.webroot"></a>

```python
webroot: str
```

- *Type:* str

Define the DocumentRoot of your project (default: ".").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#webroot Php#webroot}

---

### PhpDeployment <a name="PhpDeployment" id="@clevercloud/cdktf-bindings.php.PhpDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.php.PhpDeployment.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpDeployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeployment.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeployment.property.commit">commit</a></code> | <code>str</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeployment.property.repository">repository</a></code> | <code>str</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.php.PhpDeployment.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#authentication_basic Php#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.php.PhpDeployment.property.commit"></a>

```python
commit: str
```

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#commit Php#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.php.PhpDeployment.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#repository Php#repository}

---

### PhpHooks <a name="PhpHooks" id="@clevercloud/cdktf-bindings.php.PhpHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.php.PhpHooks.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpHooks(
  post_build: str = None,
  pre_build: str = None,
  pre_run: str = None,
  run_failed: str = None,
  run_succeed: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks.property.postBuild">post_build</a></code> | <code>str</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks.property.preBuild">pre_build</a></code> | <code>str</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks.property.preRun">pre_run</a></code> | <code>str</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks.property.runFailed">run_failed</a></code> | <code>str</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks.property.runSucceed">run_succeed</a></code> | <code>str</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.php.PhpHooks.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#post_build Php#post_build}

---

##### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.php.PhpHooks.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#pre_build Php#pre_build}

---

##### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.php.PhpHooks.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#pre_run Php#pre_run}

---

##### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.php.PhpHooks.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#run_failed Php#run_failed}

---

##### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.php.PhpHooks.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#run_succeed Php#run_succeed}

---

### PhpNetworkgroups <a name="PhpNetworkgroups" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroups.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpNetworkgroups(
  fqdn: str,
  networkgroup_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups.property.fqdn">fqdn</a></code> | <code>str</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroups.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#fqdn Php#fqdn}

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroups.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#networkgroup_id Php#networkgroup_id}

---

### PhpVhosts <a name="PhpVhosts" id="@clevercloud/cdktf-bindings.php.PhpVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.php.PhpVhosts.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpVhosts(
  fqdn: str,
  path_begin: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhosts.property.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhosts.property.pathBegin">path_begin</a></code> | <code>str</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.php.PhpVhosts.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#fqdn Php#fqdn}

---

##### `path_begin`<sup>Optional</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.php.PhpVhosts.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#path_begin Php#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### PhpDeploymentOutputReference <a name="PhpDeploymentOutputReference" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resetAuthenticationBasic">reset_authentication_basic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_basic` <a name="reset_authentication_basic" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resetAuthenticationBasic"></a>

```python
def reset_authentication_basic() -> None
```

##### `reset_commit` <a name="reset_commit" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_repository` <a name="reset_repository" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.authenticationBasicInput">authentication_basic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_basic_input`<sup>Optional</sup> <a name="authentication_basic_input" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.authenticationBasicInput"></a>

```python
authentication_basic_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `authentication_basic`<sup>Required</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.php.PhpDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: PhpDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpDeployment">PhpDeployment</a> | cdktf.IResolvable

---


### PhpHooksOutputReference <a name="PhpHooksOutputReference" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetPostBuild">reset_post_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetPreBuild">reset_pre_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetPreRun">reset_pre_run</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetRunFailed">reset_run_failed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetRunSucceed">reset_run_succeed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_post_build` <a name="reset_post_build" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetPostBuild"></a>

```python
def reset_post_build() -> None
```

##### `reset_pre_build` <a name="reset_pre_build" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetPreBuild"></a>

```python
def reset_pre_build() -> None
```

##### `reset_pre_run` <a name="reset_pre_run" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetPreRun"></a>

```python
def reset_pre_run() -> None
```

##### `reset_run_failed` <a name="reset_run_failed" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetRunFailed"></a>

```python
def reset_run_failed() -> None
```

##### `reset_run_succeed` <a name="reset_run_succeed" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.resetRunSucceed"></a>

```python
def reset_run_succeed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.postBuildInput">post_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preBuildInput">pre_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preRunInput">pre_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runFailedInput">run_failed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runSucceedInput">run_succeed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.postBuild">post_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preBuild">pre_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preRun">pre_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runFailed">run_failed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runSucceed">run_succeed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_build_input`<sup>Optional</sup> <a name="post_build_input" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.postBuildInput"></a>

```python
post_build_input: str
```

- *Type:* str

---

##### `pre_build_input`<sup>Optional</sup> <a name="pre_build_input" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preBuildInput"></a>

```python
pre_build_input: str
```

- *Type:* str

---

##### `pre_run_input`<sup>Optional</sup> <a name="pre_run_input" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preRunInput"></a>

```python
pre_run_input: str
```

- *Type:* str

---

##### `run_failed_input`<sup>Optional</sup> <a name="run_failed_input" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runFailedInput"></a>

```python
run_failed_input: str
```

- *Type:* str

---

##### `run_succeed_input`<sup>Optional</sup> <a name="run_succeed_input" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runSucceedInput"></a>

```python
run_succeed_input: str
```

- *Type:* str

---

##### `post_build`<sup>Required</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

---

##### `pre_build`<sup>Required</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

---

##### `pre_run`<sup>Required</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

---

##### `run_failed`<sup>Required</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

---

##### `run_succeed`<sup>Required</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.php.PhpHooksOutputReference.property.internalValue"></a>

```python
internal_value: PhpHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpHooks">PhpHooks</a> | cdktf.IResolvable

---


### PhpNetworkgroupsList <a name="PhpNetworkgroupsList" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpNetworkgroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PhpNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PhpNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a>]

---


### PhpNetworkgroupsOutputReference <a name="PhpNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpNetworkgroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `networkgroup_id_input`<sup>Optional</sup> <a name="networkgroup_id_input" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```python
networkgroup_id_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.php.PhpNetworkgroupsOutputReference.property.internalValue"></a>

```python
internal_value: PhpNetworkgroups | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpNetworkgroups">PhpNetworkgroups</a> | cdktf.IResolvable

---


### PhpVhostsList <a name="PhpVhostsList" id="@clevercloud/cdktf-bindings.php.PhpVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpVhostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PhpVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.php.PhpVhostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PhpVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a>]

---


### PhpVhostsOutputReference <a name="PhpVhostsOutputReference" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import php

php.PhpVhostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.resetPathBegin">reset_path_begin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path_begin` <a name="reset_path_begin" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.resetPathBegin"></a>

```python
def reset_path_begin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.pathBeginInput">path_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.pathBegin">path_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `path_begin_input`<sup>Optional</sup> <a name="path_begin_input" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.pathBeginInput"></a>

```python
path_begin_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `path_begin`<sup>Required</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.php.PhpVhostsOutputReference.property.internalValue"></a>

```python
internal_value: PhpVhosts | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.php.PhpVhosts">PhpVhosts</a> | cdktf.IResolvable

---



