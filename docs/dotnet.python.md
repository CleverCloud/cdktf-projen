# `dotnet` Submodule <a name="`dotnet` Submodule" id="@clevercloud/cdktf-bindings.dotnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dotnet <a name="Dotnet" id="@clevercloud/cdktf-bindings.dotnet.Dotnet"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet clevercloud_dotnet}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.Dotnet(
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
  deployment: DotnetDeployment = None,
  description: str = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: DotnetHooks = None,
  networkgroups: IResolvable | typing.List[DotnetNetworkgroups] = None,
  profile: str = None,
  proj: str = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  tfm: str = None,
  version: str = None,
  vhosts: IResolvable | typing.List[DotnetVhosts] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Override the build configuration settings in your project. Default: Release. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.proj">proj</a></code> | <code>str</code> | The name of your project file to use for the build, without the .csproj / .fsproj / .vbproj extension. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.tfm">tfm</a></code> | <code>str</code> | Compiles for a specific framework. The framework must be defined in the project file. Example : net5.0. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.version">version</a></code> | <code>str</code> | Choose the .NET Core version between 6.0, 8.0, 9.0. Default: '8.0'. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]</code> | List of virtual hosts. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.biggestFlavor"></a>

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#biggest_flavor Dotnet#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#max_instance_count Dotnet#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#min_instance_count Dotnet#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.name"></a>

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#name Dotnet#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.smallestFlavor"></a>

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#smallest_flavor Dotnet#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.appFolder"></a>

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#app_folder Dotnet#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.buildFlavor"></a>

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#build_flavor Dotnet#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.dependencies"></a>

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#dependencies Dotnet#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#deployment Dotnet#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.description"></a>

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#description Dotnet#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#environment Dotnet#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.exposedEnvironment"></a>

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#exposed_environment Dotnet#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#hooks Dotnet#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.networkgroups"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#networkgroups Dotnet#networkgroups}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.profile"></a>

- *Type:* str

Override the build configuration settings in your project. Default: Release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#profile Dotnet#profile}

---

##### `proj`<sup>Optional</sup> <a name="proj" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.proj"></a>

- *Type:* str

The name of your project file to use for the build, without the .csproj / .fsproj / .vbproj extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#proj Dotnet#proj}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.redirectHttps"></a>

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#redirect_https Dotnet#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.region"></a>

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#region Dotnet#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.stickySessions"></a>

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#sticky_sessions Dotnet#sticky_sessions}

---

##### `tfm`<sup>Optional</sup> <a name="tfm" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.tfm"></a>

- *Type:* str

Compiles for a specific framework. The framework must be defined in the project file. Example : net5.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#tfm Dotnet#tfm}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.version"></a>

- *Type:* str

Choose the .NET Core version between 6.0, 8.0, 9.0. Default: '8.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#version Dotnet#version}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.vhosts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#vhosts Dotnet#vhosts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks">put_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putNetworkgroups">put_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putVhosts">put_vhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetAppFolder">reset_app_folder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetBuildFlavor">reset_build_flavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetExposedEnvironment">reset_exposed_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetHooks">reset_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetNetworkgroups">reset_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProj">reset_proj</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRedirectHttps">reset_redirect_https</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetStickySessions">reset_sticky_sessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetTfm">reset_tfm</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVhosts">reset_vhosts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment` <a name="put_deployment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment"></a>

```python
def put_deployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
) -> None
```

###### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment.parameter.authenticationBasic"></a>

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#authentication_basic Dotnet#authentication_basic}

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment.parameter.commit"></a>

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#commit Dotnet#commit}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment.parameter.repository"></a>

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#repository Dotnet#repository}

---

##### `put_hooks` <a name="put_hooks" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks"></a>

```python
def put_hooks(
  post_build: str = None,
  pre_build: str = None,
  pre_run: str = None,
  run_failed: str = None,
  run_succeed: str = None
) -> None
```

###### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks.parameter.postBuild"></a>

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#post_build Dotnet#post_build}

---

###### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks.parameter.preBuild"></a>

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#pre_build Dotnet#pre_build}

---

###### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks.parameter.preRun"></a>

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#pre_run Dotnet#pre_run}

---

###### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks.parameter.runFailed"></a>

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#run_failed Dotnet#run_failed}

---

###### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks.parameter.runSucceed"></a>

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#run_succeed Dotnet#run_succeed}

---

##### `put_networkgroups` <a name="put_networkgroups" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putNetworkgroups"></a>

```python
def put_networkgroups(
  value: IResolvable | typing.List[DotnetNetworkgroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]

---

##### `put_vhosts` <a name="put_vhosts" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putVhosts"></a>

```python
def put_vhosts(
  value: IResolvable | typing.List[DotnetVhosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]

---

##### `reset_app_folder` <a name="reset_app_folder" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetAppFolder"></a>

```python
def reset_app_folder() -> None
```

##### `reset_build_flavor` <a name="reset_build_flavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetBuildFlavor"></a>

```python
def reset_build_flavor() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_description` <a name="reset_description" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment` <a name="reset_environment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_exposed_environment` <a name="reset_exposed_environment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetExposedEnvironment"></a>

```python
def reset_exposed_environment() -> None
```

##### `reset_hooks` <a name="reset_hooks" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetHooks"></a>

```python
def reset_hooks() -> None
```

##### `reset_networkgroups` <a name="reset_networkgroups" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetNetworkgroups"></a>

```python
def reset_networkgroups() -> None
```

##### `reset_profile` <a name="reset_profile" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_proj` <a name="reset_proj" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProj"></a>

```python
def reset_proj() -> None
```

##### `reset_redirect_https` <a name="reset_redirect_https" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRedirectHttps"></a>

```python
def reset_redirect_https() -> None
```

##### `reset_region` <a name="reset_region" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sticky_sessions` <a name="reset_sticky_sessions" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetStickySessions"></a>

```python
def reset_sticky_sessions() -> None
```

##### `reset_tfm` <a name="reset_tfm" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetTfm"></a>

```python
def reset_tfm() -> None
```

##### `reset_version` <a name="reset_version" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_vhosts` <a name="reset_vhosts" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVhosts"></a>

```python
def reset_vhosts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Dotnet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.Dotnet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.Dotnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformResource"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.Dotnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.Dotnet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Dotnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Dotnet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Dotnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Dotnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference">DotnetDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployUrl">deploy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference">DotnetHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList">DotnetNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList">DotnetVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolderInput">app_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavorInput">biggest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavorInput">build_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependenciesInput">dependencies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deploymentInput">deployment_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironmentInput">exposed_environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooksInput">hooks_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroupsInput">networkgroups_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.projInput">proj_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttpsInput">redirect_https_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavorInput">smallest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessionsInput">sticky_sessions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfmInput">tfm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhostsInput">vhosts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolder">app_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavor">build_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.proj">proj</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfm">tfm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployment"></a>

```python
deployment: DotnetDeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference">DotnetDeploymentOutputReference</a>

---

##### `deploy_url`<sup>Required</sup> <a name="deploy_url" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployUrl"></a>

```python
deploy_url: str
```

- *Type:* str

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooks"></a>

```python
hooks: DotnetHooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference">DotnetHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroups"></a>

```python
networkgroups: DotnetNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList">DotnetNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhosts"></a>

```python
vhosts: DotnetVhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList">DotnetVhostsList</a>

---

##### `app_folder_input`<sup>Optional</sup> <a name="app_folder_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolderInput"></a>

```python
app_folder_input: str
```

- *Type:* str

---

##### `biggest_flavor_input`<sup>Optional</sup> <a name="biggest_flavor_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavorInput"></a>

```python
biggest_flavor_input: str
```

- *Type:* str

---

##### `build_flavor_input`<sup>Optional</sup> <a name="build_flavor_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavorInput"></a>

```python
build_flavor_input: str
```

- *Type:* str

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependenciesInput"></a>

```python
dependencies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deploymentInput"></a>

```python
deployment_input: DotnetDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a> | cdktf.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment_input`<sup>Optional</sup> <a name="exposed_environment_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironmentInput"></a>

```python
exposed_environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hooks_input`<sup>Optional</sup> <a name="hooks_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooksInput"></a>

```python
hooks_input: DotnetHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a> | cdktf.IResolvable

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkgroups_input`<sup>Optional</sup> <a name="networkgroups_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroupsInput"></a>

```python
networkgroups_input: IResolvable | typing.List[DotnetNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `proj_input`<sup>Optional</sup> <a name="proj_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.projInput"></a>

```python
proj_input: str
```

- *Type:* str

---

##### `redirect_https_input`<sup>Optional</sup> <a name="redirect_https_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttpsInput"></a>

```python
redirect_https_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `smallest_flavor_input`<sup>Optional</sup> <a name="smallest_flavor_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavorInput"></a>

```python
smallest_flavor_input: str
```

- *Type:* str

---

##### `sticky_sessions_input`<sup>Optional</sup> <a name="sticky_sessions_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessionsInput"></a>

```python
sticky_sessions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tfm_input`<sup>Optional</sup> <a name="tfm_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfmInput"></a>

```python
tfm_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `vhosts_input`<sup>Optional</sup> <a name="vhosts_input" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhostsInput"></a>

```python
vhosts_input: IResolvable | typing.List[DotnetVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]

---

##### `app_folder`<sup>Required</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

---

##### `build_flavor`<sup>Required</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment`<sup>Required</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `proj`<sup>Required</sup> <a name="proj" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.proj"></a>

```python
proj: str
```

- *Type:* str

---

##### `redirect_https`<sup>Required</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

---

##### `sticky_sessions`<sup>Required</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tfm`<sup>Required</sup> <a name="tfm" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfm"></a>

```python
tfm: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DotnetConfig <a name="DotnetConfig" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetConfig(
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
  deployment: DotnetDeployment = None,
  description: str = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: DotnetHooks = None,
  networkgroups: IResolvable | typing.List[DotnetNetworkgroups] = None,
  profile: str = None,
  proj: str = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  tfm: str = None,
  version: str = None,
  vhosts: IResolvable | typing.List[DotnetVhosts] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.profile">profile</a></code> | <code>str</code> | Override the build configuration settings in your project. Default: Release. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.proj">proj</a></code> | <code>str</code> | The name of your project file to use for the build, without the .csproj / .fsproj / .vbproj extension. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.tfm">tfm</a></code> | <code>str</code> | Compiles for a specific framework. The framework must be defined in the project file. Example : net5.0. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.version">version</a></code> | <code>str</code> | Choose the .NET Core version between 6.0, 8.0, 9.0. Default: '8.0'. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#biggest_flavor Dotnet#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#max_instance_count Dotnet#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#min_instance_count Dotnet#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#name Dotnet#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#smallest_flavor Dotnet#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#app_folder Dotnet#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#build_flavor Dotnet#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#dependencies Dotnet#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.deployment"></a>

```python
deployment: DotnetDeployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#deployment Dotnet#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#description Dotnet#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#environment Dotnet#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#exposed_environment Dotnet#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.hooks"></a>

```python
hooks: DotnetHooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#hooks Dotnet#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.networkgroups"></a>

```python
networkgroups: IResolvable | typing.List[DotnetNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#networkgroups Dotnet#networkgroups}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Override the build configuration settings in your project. Default: Release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#profile Dotnet#profile}

---

##### `proj`<sup>Optional</sup> <a name="proj" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.proj"></a>

```python
proj: str
```

- *Type:* str

The name of your project file to use for the build, without the .csproj / .fsproj / .vbproj extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#proj Dotnet#proj}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#redirect_https Dotnet#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#region Dotnet#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#sticky_sessions Dotnet#sticky_sessions}

---

##### `tfm`<sup>Optional</sup> <a name="tfm" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.tfm"></a>

```python
tfm: str
```

- *Type:* str

Compiles for a specific framework. The framework must be defined in the project file. Example : net5.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#tfm Dotnet#tfm}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Choose the .NET Core version between 6.0, 8.0, 9.0. Default: '8.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#version Dotnet#version}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.vhosts"></a>

```python
vhosts: IResolvable | typing.List[DotnetVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#vhosts Dotnet#vhosts}

---

### DotnetDeployment <a name="DotnetDeployment" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetDeployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.commit">commit</a></code> | <code>str</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.repository">repository</a></code> | <code>str</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#authentication_basic Dotnet#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.commit"></a>

```python
commit: str
```

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#commit Dotnet#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#repository Dotnet#repository}

---

### DotnetHooks <a name="DotnetHooks" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetHooks(
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
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.postBuild">post_build</a></code> | <code>str</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preBuild">pre_build</a></code> | <code>str</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preRun">pre_run</a></code> | <code>str</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runFailed">run_failed</a></code> | <code>str</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runSucceed">run_succeed</a></code> | <code>str</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#post_build Dotnet#post_build}

---

##### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#pre_build Dotnet#pre_build}

---

##### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#pre_run Dotnet#pre_run}

---

##### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#run_failed Dotnet#run_failed}

---

##### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#run_succeed Dotnet#run_succeed}

---

### DotnetNetworkgroups <a name="DotnetNetworkgroups" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetNetworkgroups(
  fqdn: str,
  networkgroup_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.fqdn">fqdn</a></code> | <code>str</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#fqdn Dotnet#fqdn}

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#networkgroup_id Dotnet#networkgroup_id}

---

### DotnetVhosts <a name="DotnetVhosts" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetVhosts(
  fqdn: str,
  path_begin: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.pathBegin">path_begin</a></code> | <code>str</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#fqdn Dotnet#fqdn}

---

##### `path_begin`<sup>Optional</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#path_begin Dotnet#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### DotnetDeploymentOutputReference <a name="DotnetDeploymentOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetAuthenticationBasic">reset_authentication_basic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_basic` <a name="reset_authentication_basic" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetAuthenticationBasic"></a>

```python
def reset_authentication_basic() -> None
```

##### `reset_commit` <a name="reset_commit" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_repository` <a name="reset_repository" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasicInput">authentication_basic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_basic_input`<sup>Optional</sup> <a name="authentication_basic_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasicInput"></a>

```python
authentication_basic_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `authentication_basic`<sup>Required</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DotnetDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a> | cdktf.IResolvable

---


### DotnetHooksOutputReference <a name="DotnetHooksOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPostBuild">reset_post_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreBuild">reset_pre_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreRun">reset_pre_run</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunFailed">reset_run_failed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunSucceed">reset_run_succeed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_post_build` <a name="reset_post_build" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPostBuild"></a>

```python
def reset_post_build() -> None
```

##### `reset_pre_build` <a name="reset_pre_build" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreBuild"></a>

```python
def reset_pre_build() -> None
```

##### `reset_pre_run` <a name="reset_pre_run" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreRun"></a>

```python
def reset_pre_run() -> None
```

##### `reset_run_failed` <a name="reset_run_failed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunFailed"></a>

```python
def reset_run_failed() -> None
```

##### `reset_run_succeed` <a name="reset_run_succeed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunSucceed"></a>

```python
def reset_run_succeed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuildInput">post_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuildInput">pre_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRunInput">pre_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailedInput">run_failed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceedInput">run_succeed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuild">post_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuild">pre_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRun">pre_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailed">run_failed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceed">run_succeed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_build_input`<sup>Optional</sup> <a name="post_build_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuildInput"></a>

```python
post_build_input: str
```

- *Type:* str

---

##### `pre_build_input`<sup>Optional</sup> <a name="pre_build_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuildInput"></a>

```python
pre_build_input: str
```

- *Type:* str

---

##### `pre_run_input`<sup>Optional</sup> <a name="pre_run_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRunInput"></a>

```python
pre_run_input: str
```

- *Type:* str

---

##### `run_failed_input`<sup>Optional</sup> <a name="run_failed_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailedInput"></a>

```python
run_failed_input: str
```

- *Type:* str

---

##### `run_succeed_input`<sup>Optional</sup> <a name="run_succeed_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceedInput"></a>

```python
run_succeed_input: str
```

- *Type:* str

---

##### `post_build`<sup>Required</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

---

##### `pre_build`<sup>Required</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

---

##### `pre_run`<sup>Required</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

---

##### `run_failed`<sup>Required</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

---

##### `run_succeed`<sup>Required</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.internalValue"></a>

```python
internal_value: DotnetHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a> | cdktf.IResolvable

---


### DotnetNetworkgroupsList <a name="DotnetNetworkgroupsList" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetNetworkgroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DotnetNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DotnetNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>]

---


### DotnetNetworkgroupsOutputReference <a name="DotnetNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetNetworkgroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `networkgroup_id_input`<sup>Optional</sup> <a name="networkgroup_id_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```python
networkgroup_id_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.internalValue"></a>

```python
internal_value: DotnetNetworkgroups | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a> | cdktf.IResolvable

---


### DotnetVhostsList <a name="DotnetVhostsList" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetVhostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DotnetVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DotnetVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>]

---


### DotnetVhostsOutputReference <a name="DotnetVhostsOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import dotnet

dotnet.DotnetVhostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resetPathBegin">reset_path_begin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path_begin` <a name="reset_path_begin" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resetPathBegin"></a>

```python
def reset_path_begin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBeginInput">path_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBegin">path_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `path_begin_input`<sup>Optional</sup> <a name="path_begin_input" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBeginInput"></a>

```python
path_begin_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `path_begin`<sup>Required</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.internalValue"></a>

```python
internal_value: DotnetVhosts | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a> | cdktf.IResolvable

---



