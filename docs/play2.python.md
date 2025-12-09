# `play2` Submodule <a name="`play2` Submodule" id="@clevercloud/cdktf-bindings.play2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Play2 <a name="Play2" id="@clevercloud/cdktf-bindings.play2.Play2"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2 clevercloud_play2}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2(
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
  deployment: Play2Deployment = None,
  description: str = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: Play2Hooks = None,
  networkgroups: IResolvable | typing.List[Play2Networkgroups] = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[Play2Vhosts] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]</code> | List of virtual hosts. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.biggestFlavor"></a>

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#biggest_flavor Play2#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#max_instance_count Play2#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#min_instance_count Play2#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.name"></a>

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#name Play2#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.smallestFlavor"></a>

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#smallest_flavor Play2#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.appFolder"></a>

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#app_folder Play2#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.buildFlavor"></a>

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#build_flavor Play2#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.dependencies"></a>

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#dependencies Play2#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#deployment Play2#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.description"></a>

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#description Play2#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#environment Play2#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.exposedEnvironment"></a>

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#exposed_environment Play2#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#hooks Play2#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.networkgroups"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#networkgroups Play2#networkgroups}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.redirectHttps"></a>

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#redirect_https Play2#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.region"></a>

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#region Play2#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.stickySessions"></a>

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#sticky_sessions Play2#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.vhosts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#vhosts Play2#vhosts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putHooks">put_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putNetworkgroups">put_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putVhosts">put_vhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetAppFolder">reset_app_folder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetBuildFlavor">reset_build_flavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetExposedEnvironment">reset_exposed_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetHooks">reset_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetNetworkgroups">reset_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetRedirectHttps">reset_redirect_https</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetStickySessions">reset_sticky_sessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetVhosts">reset_vhosts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.play2.Play2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.play2.Play2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.play2.Play2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.play2.Play2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.play2.Play2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.play2.Play2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.play2.Play2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.play2.Play2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.play2.Play2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@clevercloud/cdktf-bindings.play2.Play2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.play2.Play2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@clevercloud/cdktf-bindings.play2.Play2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@clevercloud/cdktf-bindings.play2.Play2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.play2.Play2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@clevercloud/cdktf-bindings.play2.Play2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@clevercloud/cdktf-bindings.play2.Play2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.play2.Play2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.play2.Play2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@clevercloud/cdktf-bindings.play2.Play2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment` <a name="put_deployment" id="@clevercloud/cdktf-bindings.play2.Play2.putDeployment"></a>

```python
def put_deployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
) -> None
```

###### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.play2.Play2.putDeployment.parameter.authenticationBasic"></a>

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#authentication_basic Play2#authentication_basic}

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.play2.Play2.putDeployment.parameter.commit"></a>

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#commit Play2#commit}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.play2.Play2.putDeployment.parameter.repository"></a>

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#repository Play2#repository}

---

##### `put_hooks` <a name="put_hooks" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks"></a>

```python
def put_hooks(
  post_build: str = None,
  pre_build: str = None,
  pre_run: str = None,
  run_failed: str = None,
  run_succeed: str = None
) -> None
```

###### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks.parameter.postBuild"></a>

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#post_build Play2#post_build}

---

###### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks.parameter.preBuild"></a>

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_build Play2#pre_build}

---

###### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks.parameter.preRun"></a>

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_run Play2#pre_run}

---

###### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks.parameter.runFailed"></a>

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_failed Play2#run_failed}

---

###### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks.parameter.runSucceed"></a>

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_succeed Play2#run_succeed}

---

##### `put_networkgroups` <a name="put_networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2.putNetworkgroups"></a>

```python
def put_networkgroups(
  value: IResolvable | typing.List[Play2Networkgroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]

---

##### `put_vhosts` <a name="put_vhosts" id="@clevercloud/cdktf-bindings.play2.Play2.putVhosts"></a>

```python
def put_vhosts(
  value: IResolvable | typing.List[Play2Vhosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]

---

##### `reset_app_folder` <a name="reset_app_folder" id="@clevercloud/cdktf-bindings.play2.Play2.resetAppFolder"></a>

```python
def reset_app_folder() -> None
```

##### `reset_build_flavor` <a name="reset_build_flavor" id="@clevercloud/cdktf-bindings.play2.Play2.resetBuildFlavor"></a>

```python
def reset_build_flavor() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@clevercloud/cdktf-bindings.play2.Play2.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@clevercloud/cdktf-bindings.play2.Play2.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_description` <a name="reset_description" id="@clevercloud/cdktf-bindings.play2.Play2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment` <a name="reset_environment" id="@clevercloud/cdktf-bindings.play2.Play2.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_exposed_environment` <a name="reset_exposed_environment" id="@clevercloud/cdktf-bindings.play2.Play2.resetExposedEnvironment"></a>

```python
def reset_exposed_environment() -> None
```

##### `reset_hooks` <a name="reset_hooks" id="@clevercloud/cdktf-bindings.play2.Play2.resetHooks"></a>

```python
def reset_hooks() -> None
```

##### `reset_networkgroups` <a name="reset_networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2.resetNetworkgroups"></a>

```python
def reset_networkgroups() -> None
```

##### `reset_redirect_https` <a name="reset_redirect_https" id="@clevercloud/cdktf-bindings.play2.Play2.resetRedirectHttps"></a>

```python
def reset_redirect_https() -> None
```

##### `reset_region` <a name="reset_region" id="@clevercloud/cdktf-bindings.play2.Play2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sticky_sessions` <a name="reset_sticky_sessions" id="@clevercloud/cdktf-bindings.play2.Play2.resetStickySessions"></a>

```python
def reset_sticky_sessions() -> None
```

##### `reset_vhosts` <a name="reset_vhosts" id="@clevercloud/cdktf-bindings.play2.Play2.resetVhosts"></a>

```python
def reset_vhosts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Play2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.play2.Play2.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.play2.Play2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformResource"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Play2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Play2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Play2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Play2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference">Play2DeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.deployUrl">deploy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference">Play2HooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList">Play2NetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList">Play2VhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.appFolderInput">app_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavorInput">biggest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavorInput">build_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.dependenciesInput">dependencies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.deploymentInput">deployment_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironmentInput">exposed_environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.hooksInput">hooks_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.networkgroupsInput">networkgroups_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttpsInput">redirect_https_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavorInput">smallest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.stickySessionsInput">sticky_sessions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.vhostsInput">vhosts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.appFolder">app_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavor">build_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.play2.Play2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.play2.Play2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.play2.Play2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.play2.Play2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@clevercloud/cdktf-bindings.play2.Play2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.play2.Play2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.play2.Play2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.play2.Play2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.play2.Play2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.play2.Play2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.play2.Play2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.play2.Play2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.play2.Play2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.play2.Play2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.play2.Play2.property.deployment"></a>

```python
deployment: Play2DeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference">Play2DeploymentOutputReference</a>

---

##### `deploy_url`<sup>Required</sup> <a name="deploy_url" id="@clevercloud/cdktf-bindings.play2.Play2.property.deployUrl"></a>

```python
deploy_url: str
```

- *Type:* str

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.play2.Play2.property.hooks"></a>

```python
hooks: Play2HooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference">Play2HooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2.property.networkgroups"></a>

```python
networkgroups: Play2NetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList">Play2NetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.play2.Play2.property.vhosts"></a>

```python
vhosts: Play2VhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList">Play2VhostsList</a>

---

##### `app_folder_input`<sup>Optional</sup> <a name="app_folder_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.appFolderInput"></a>

```python
app_folder_input: str
```

- *Type:* str

---

##### `biggest_flavor_input`<sup>Optional</sup> <a name="biggest_flavor_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavorInput"></a>

```python
biggest_flavor_input: str
```

- *Type:* str

---

##### `build_flavor_input`<sup>Optional</sup> <a name="build_flavor_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavorInput"></a>

```python
build_flavor_input: str
```

- *Type:* str

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.dependenciesInput"></a>

```python
dependencies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.deploymentInput"></a>

```python
deployment_input: Play2Deployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a> | cdktf.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment_input`<sup>Optional</sup> <a name="exposed_environment_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironmentInput"></a>

```python
exposed_environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hooks_input`<sup>Optional</sup> <a name="hooks_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.hooksInput"></a>

```python
hooks_input: Play2Hooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a> | cdktf.IResolvable

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkgroups_input`<sup>Optional</sup> <a name="networkgroups_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.networkgroupsInput"></a>

```python
networkgroups_input: IResolvable | typing.List[Play2Networkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]

---

##### `redirect_https_input`<sup>Optional</sup> <a name="redirect_https_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttpsInput"></a>

```python
redirect_https_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `smallest_flavor_input`<sup>Optional</sup> <a name="smallest_flavor_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavorInput"></a>

```python
smallest_flavor_input: str
```

- *Type:* str

---

##### `sticky_sessions_input`<sup>Optional</sup> <a name="sticky_sessions_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.stickySessionsInput"></a>

```python
sticky_sessions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `vhosts_input`<sup>Optional</sup> <a name="vhosts_input" id="@clevercloud/cdktf-bindings.play2.Play2.property.vhostsInput"></a>

```python
vhosts_input: IResolvable | typing.List[Play2Vhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]

---

##### `app_folder`<sup>Required</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.play2.Play2.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

---

##### `build_flavor`<sup>Required</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.play2.Play2.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.play2.Play2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.play2.Play2.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment`<sup>Required</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.play2.Play2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_https`<sup>Required</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.play2.Play2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

---

##### `sticky_sessions`<sup>Required</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.play2.Play2.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.play2.Play2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Play2Config <a name="Play2Config" id="@clevercloud/cdktf-bindings.play2.Play2Config"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Config.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2Config(
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
  deployment: Play2Deployment = None,
  description: str = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: Play2Hooks = None,
  networkgroups: IResolvable | typing.List[Play2Networkgroups] = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[Play2Vhosts] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#biggest_flavor Play2#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#max_instance_count Play2#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#min_instance_count Play2#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#name Play2#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#smallest_flavor Play2#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#app_folder Play2#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#build_flavor Play2#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#dependencies Play2#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.deployment"></a>

```python
deployment: Play2Deployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#deployment Play2#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#description Play2#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#environment Play2#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#exposed_environment Play2#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.hooks"></a>

```python
hooks: Play2Hooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#hooks Play2#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.networkgroups"></a>

```python
networkgroups: IResolvable | typing.List[Play2Networkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#networkgroups Play2#networkgroups}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#redirect_https Play2#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#region Play2#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#sticky_sessions Play2#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.vhosts"></a>

```python
vhosts: IResolvable | typing.List[Play2Vhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#vhosts Play2#vhosts}

---

### Play2Deployment <a name="Play2Deployment" id="@clevercloud/cdktf-bindings.play2.Play2Deployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2Deployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment.property.commit">commit</a></code> | <code>str</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment.property.repository">repository</a></code> | <code>str</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#authentication_basic Play2#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.property.commit"></a>

```python
commit: str
```

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#commit Play2#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#repository Play2#repository}

---

### Play2Hooks <a name="Play2Hooks" id="@clevercloud/cdktf-bindings.play2.Play2Hooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2Hooks(
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
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.postBuild">post_build</a></code> | <code>str</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preBuild">pre_build</a></code> | <code>str</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preRun">pre_run</a></code> | <code>str</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runFailed">run_failed</a></code> | <code>str</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runSucceed">run_succeed</a></code> | <code>str</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#post_build Play2#post_build}

---

##### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_build Play2#pre_build}

---

##### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_run Play2#pre_run}

---

##### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_failed Play2#run_failed}

---

##### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_succeed Play2#run_succeed}

---

### Play2Networkgroups <a name="Play2Networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2Networkgroups(
  fqdn: str,
  networkgroup_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.fqdn">fqdn</a></code> | <code>str</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#fqdn Play2#fqdn}

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#networkgroup_id Play2#networkgroup_id}

---

### Play2Vhosts <a name="Play2Vhosts" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2Vhosts(
  fqdn: str,
  path_begin: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.pathBegin">path_begin</a></code> | <code>str</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#fqdn Play2#fqdn}

---

##### `path_begin`<sup>Optional</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#path_begin Play2#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### Play2DeploymentOutputReference <a name="Play2DeploymentOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2DeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetAuthenticationBasic">reset_authentication_basic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_basic` <a name="reset_authentication_basic" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetAuthenticationBasic"></a>

```python
def reset_authentication_basic() -> None
```

##### `reset_commit` <a name="reset_commit" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_repository` <a name="reset_repository" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasicInput">authentication_basic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_basic_input`<sup>Optional</sup> <a name="authentication_basic_input" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasicInput"></a>

```python
authentication_basic_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `authentication_basic`<sup>Required</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.internalValue"></a>

```python
internal_value: Play2Deployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a> | cdktf.IResolvable

---


### Play2HooksOutputReference <a name="Play2HooksOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2HooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPostBuild">reset_post_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreBuild">reset_pre_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreRun">reset_pre_run</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunFailed">reset_run_failed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunSucceed">reset_run_succeed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_post_build` <a name="reset_post_build" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPostBuild"></a>

```python
def reset_post_build() -> None
```

##### `reset_pre_build` <a name="reset_pre_build" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreBuild"></a>

```python
def reset_pre_build() -> None
```

##### `reset_pre_run` <a name="reset_pre_run" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreRun"></a>

```python
def reset_pre_run() -> None
```

##### `reset_run_failed` <a name="reset_run_failed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunFailed"></a>

```python
def reset_run_failed() -> None
```

##### `reset_run_succeed` <a name="reset_run_succeed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunSucceed"></a>

```python
def reset_run_succeed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuildInput">post_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuildInput">pre_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRunInput">pre_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailedInput">run_failed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceedInput">run_succeed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuild">post_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuild">pre_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRun">pre_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailed">run_failed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceed">run_succeed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_build_input`<sup>Optional</sup> <a name="post_build_input" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuildInput"></a>

```python
post_build_input: str
```

- *Type:* str

---

##### `pre_build_input`<sup>Optional</sup> <a name="pre_build_input" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuildInput"></a>

```python
pre_build_input: str
```

- *Type:* str

---

##### `pre_run_input`<sup>Optional</sup> <a name="pre_run_input" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRunInput"></a>

```python
pre_run_input: str
```

- *Type:* str

---

##### `run_failed_input`<sup>Optional</sup> <a name="run_failed_input" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailedInput"></a>

```python
run_failed_input: str
```

- *Type:* str

---

##### `run_succeed_input`<sup>Optional</sup> <a name="run_succeed_input" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceedInput"></a>

```python
run_succeed_input: str
```

- *Type:* str

---

##### `post_build`<sup>Required</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

---

##### `pre_build`<sup>Required</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

---

##### `pre_run`<sup>Required</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

---

##### `run_failed`<sup>Required</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

---

##### `run_succeed`<sup>Required</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.internalValue"></a>

```python
internal_value: Play2Hooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a> | cdktf.IResolvable

---


### Play2NetworkgroupsList <a name="Play2NetworkgroupsList" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2NetworkgroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Play2NetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Play2Networkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a>]

---


### Play2NetworkgroupsOutputReference <a name="Play2NetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2NetworkgroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupIdInput">networkgroup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `networkgroup_id_input`<sup>Optional</sup> <a name="networkgroup_id_input" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```python
networkgroup_id_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.internalValue"></a>

```python
internal_value: Play2Networkgroups | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups">Play2Networkgroups</a> | cdktf.IResolvable

---


### Play2VhostsList <a name="Play2VhostsList" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2VhostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Play2VhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Play2Vhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a>]

---


### Play2VhostsOutputReference <a name="Play2VhostsOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import play2

play2.Play2VhostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resetPathBegin">reset_path_begin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path_begin` <a name="reset_path_begin" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resetPathBegin"></a>

```python
def reset_path_begin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBeginInput">path_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBegin">path_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `path_begin_input`<sup>Optional</sup> <a name="path_begin_input" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBeginInput"></a>

```python
path_begin_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `path_begin`<sup>Required</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.internalValue"></a>

```python
internal_value: Play2Vhosts | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts">Play2Vhosts</a> | cdktf.IResolvable

---



