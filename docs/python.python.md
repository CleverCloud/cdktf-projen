# `python` Submodule <a name="`python` Submodule" id="@clevercloud/cdktf-bindings.python"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Python <a name="Python" id="@clevercloud/cdktf-bindings.python.Python"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python clevercloud_python}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.Python.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.Python(
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
  deployment: PythonDeployment = None,
  description: str = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: PythonHooks = None,
  networkgroups: IResolvable | typing.List[PythonNetworkgroups] = None,
  pip_requirements: str = None,
  python_version: str = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[PythonVhosts] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.pipRequirements">pip_requirements</a></code> | <code>str</code> | Define a custom requirements.txt file (default: requirements.txt). |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.pythonVersion">python_version</a></code> | <code>str</code> | Python version >= 2.7. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]</code> | List of virtual hosts. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.biggestFlavor"></a>

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#biggest_flavor Python#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#max_instance_count Python#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#min_instance_count Python#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.name"></a>

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#name Python#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.smallestFlavor"></a>

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#smallest_flavor Python#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.appFolder"></a>

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#app_folder Python#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.buildFlavor"></a>

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#build_flavor Python#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.dependencies"></a>

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#dependencies Python#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#deployment Python#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.description"></a>

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#description Python#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#environment Python#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.exposedEnvironment"></a>

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#exposed_environment Python#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#hooks Python#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.networkgroups"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#networkgroups Python#networkgroups}

---

##### `pip_requirements`<sup>Optional</sup> <a name="pip_requirements" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.pipRequirements"></a>

- *Type:* str

Define a custom requirements.txt file (default: requirements.txt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pip_requirements Python#pip_requirements}

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.pythonVersion"></a>

- *Type:* str

Python version >= 2.7.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#python_version Python#python_version}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.redirectHttps"></a>

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#redirect_https Python#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.region"></a>

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#region Python#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.stickySessions"></a>

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#sticky_sessions Python#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.vhosts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#vhosts Python#vhosts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putHooks">put_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putNetworkgroups">put_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putVhosts">put_vhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetAppFolder">reset_app_folder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetBuildFlavor">reset_build_flavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetExposedEnvironment">reset_exposed_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetHooks">reset_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetNetworkgroups">reset_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetPipRequirements">reset_pip_requirements</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetPythonVersion">reset_python_version</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetRedirectHttps">reset_redirect_https</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetStickySessions">reset_sticky_sessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetVhosts">reset_vhosts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.python.Python.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.python.Python.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.python.Python.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.python.Python.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.python.Python.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.python.Python.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.python.Python.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.python.Python.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.python.Python.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@clevercloud/cdktf-bindings.python.Python.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.python.Python.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.python.Python.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.python.Python.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.python.Python.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.python.Python.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@clevercloud/cdktf-bindings.python.Python.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@clevercloud/cdktf-bindings.python.Python.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.Python.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.python.Python.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.Python.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@clevercloud/cdktf-bindings.python.Python.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@clevercloud/cdktf-bindings.python.Python.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.python.Python.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.python.Python.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@clevercloud/cdktf-bindings.python.Python.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment` <a name="put_deployment" id="@clevercloud/cdktf-bindings.python.Python.putDeployment"></a>

```python
def put_deployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
) -> None
```

###### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.python.Python.putDeployment.parameter.authenticationBasic"></a>

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#authentication_basic Python#authentication_basic}

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.python.Python.putDeployment.parameter.commit"></a>

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#commit Python#commit}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.python.Python.putDeployment.parameter.repository"></a>

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#repository Python#repository}

---

##### `put_hooks` <a name="put_hooks" id="@clevercloud/cdktf-bindings.python.Python.putHooks"></a>

```python
def put_hooks(
  post_build: str = None,
  pre_build: str = None,
  pre_run: str = None,
  run_failed: str = None,
  run_succeed: str = None
) -> None
```

###### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.python.Python.putHooks.parameter.postBuild"></a>

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#post_build Python#post_build}

---

###### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.python.Python.putHooks.parameter.preBuild"></a>

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pre_build Python#pre_build}

---

###### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.python.Python.putHooks.parameter.preRun"></a>

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pre_run Python#pre_run}

---

###### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.python.Python.putHooks.parameter.runFailed"></a>

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#run_failed Python#run_failed}

---

###### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.python.Python.putHooks.parameter.runSucceed"></a>

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#run_succeed Python#run_succeed}

---

##### `put_networkgroups` <a name="put_networkgroups" id="@clevercloud/cdktf-bindings.python.Python.putNetworkgroups"></a>

```python
def put_networkgroups(
  value: IResolvable | typing.List[PythonNetworkgroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]

---

##### `put_vhosts` <a name="put_vhosts" id="@clevercloud/cdktf-bindings.python.Python.putVhosts"></a>

```python
def put_vhosts(
  value: IResolvable | typing.List[PythonVhosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]

---

##### `reset_app_folder` <a name="reset_app_folder" id="@clevercloud/cdktf-bindings.python.Python.resetAppFolder"></a>

```python
def reset_app_folder() -> None
```

##### `reset_build_flavor` <a name="reset_build_flavor" id="@clevercloud/cdktf-bindings.python.Python.resetBuildFlavor"></a>

```python
def reset_build_flavor() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@clevercloud/cdktf-bindings.python.Python.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@clevercloud/cdktf-bindings.python.Python.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_description` <a name="reset_description" id="@clevercloud/cdktf-bindings.python.Python.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment` <a name="reset_environment" id="@clevercloud/cdktf-bindings.python.Python.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_exposed_environment` <a name="reset_exposed_environment" id="@clevercloud/cdktf-bindings.python.Python.resetExposedEnvironment"></a>

```python
def reset_exposed_environment() -> None
```

##### `reset_hooks` <a name="reset_hooks" id="@clevercloud/cdktf-bindings.python.Python.resetHooks"></a>

```python
def reset_hooks() -> None
```

##### `reset_networkgroups` <a name="reset_networkgroups" id="@clevercloud/cdktf-bindings.python.Python.resetNetworkgroups"></a>

```python
def reset_networkgroups() -> None
```

##### `reset_pip_requirements` <a name="reset_pip_requirements" id="@clevercloud/cdktf-bindings.python.Python.resetPipRequirements"></a>

```python
def reset_pip_requirements() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@clevercloud/cdktf-bindings.python.Python.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```

##### `reset_redirect_https` <a name="reset_redirect_https" id="@clevercloud/cdktf-bindings.python.Python.resetRedirectHttps"></a>

```python
def reset_redirect_https() -> None
```

##### `reset_region` <a name="reset_region" id="@clevercloud/cdktf-bindings.python.Python.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sticky_sessions` <a name="reset_sticky_sessions" id="@clevercloud/cdktf-bindings.python.Python.resetStickySessions"></a>

```python
def reset_sticky_sessions() -> None
```

##### `reset_vhosts` <a name="reset_vhosts" id="@clevercloud/cdktf-bindings.python.Python.resetVhosts"></a>

```python
def reset_vhosts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Python resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.python.Python.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.Python.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.python.Python.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.python.Python.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.Python.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.python.Python.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@clevercloud/cdktf-bindings.python.Python.isTerraformResource"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.Python.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.python.Python.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.Python.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Python resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Python to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Python that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Python to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference">PythonDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.deployUrl">deploy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference">PythonHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList">PythonNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList">PythonVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.appFolderInput">app_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.biggestFlavorInput">biggest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.buildFlavorInput">build_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.dependenciesInput">dependencies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.deploymentInput">deployment_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironmentInput">exposed_environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.hooksInput">hooks_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.networkgroupsInput">networkgroups_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pipRequirementsInput">pip_requirements_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.redirectHttpsInput">redirect_https_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.smallestFlavorInput">smallest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.stickySessionsInput">sticky_sessions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.vhostsInput">vhosts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.appFolder">app_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.buildFlavor">build_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pipRequirements">pip_requirements</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.python.Python.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.python.Python.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.Python.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.python.Python.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@clevercloud/cdktf-bindings.python.Python.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.python.Python.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.python.Python.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.python.Python.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.python.Python.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.python.Python.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.python.Python.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.python.Python.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.Python.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.python.Python.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.python.Python.property.deployment"></a>

```python
deployment: PythonDeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference">PythonDeploymentOutputReference</a>

---

##### `deploy_url`<sup>Required</sup> <a name="deploy_url" id="@clevercloud/cdktf-bindings.python.Python.property.deployUrl"></a>

```python
deploy_url: str
```

- *Type:* str

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.python.Python.property.hooks"></a>

```python
hooks: PythonHooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference">PythonHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.python.Python.property.networkgroups"></a>

```python
networkgroups: PythonNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList">PythonNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.python.Python.property.vhosts"></a>

```python
vhosts: PythonVhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList">PythonVhostsList</a>

---

##### `app_folder_input`<sup>Optional</sup> <a name="app_folder_input" id="@clevercloud/cdktf-bindings.python.Python.property.appFolderInput"></a>

```python
app_folder_input: str
```

- *Type:* str

---

##### `biggest_flavor_input`<sup>Optional</sup> <a name="biggest_flavor_input" id="@clevercloud/cdktf-bindings.python.Python.property.biggestFlavorInput"></a>

```python
biggest_flavor_input: str
```

- *Type:* str

---

##### `build_flavor_input`<sup>Optional</sup> <a name="build_flavor_input" id="@clevercloud/cdktf-bindings.python.Python.property.buildFlavorInput"></a>

```python
build_flavor_input: str
```

- *Type:* str

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@clevercloud/cdktf-bindings.python.Python.property.dependenciesInput"></a>

```python
dependencies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@clevercloud/cdktf-bindings.python.Python.property.deploymentInput"></a>

```python
deployment_input: PythonDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> | cdktf.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@clevercloud/cdktf-bindings.python.Python.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@clevercloud/cdktf-bindings.python.Python.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment_input`<sup>Optional</sup> <a name="exposed_environment_input" id="@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironmentInput"></a>

```python
exposed_environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hooks_input`<sup>Optional</sup> <a name="hooks_input" id="@clevercloud/cdktf-bindings.python.Python.property.hooksInput"></a>

```python
hooks_input: PythonHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> | cdktf.IResolvable

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@clevercloud/cdktf-bindings.python.Python.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@clevercloud/cdktf-bindings.python.Python.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkgroups_input`<sup>Optional</sup> <a name="networkgroups_input" id="@clevercloud/cdktf-bindings.python.Python.property.networkgroupsInput"></a>

```python
networkgroups_input: IResolvable | typing.List[PythonNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]

---

##### `pip_requirements_input`<sup>Optional</sup> <a name="pip_requirements_input" id="@clevercloud/cdktf-bindings.python.Python.property.pipRequirementsInput"></a>

```python
pip_requirements_input: str
```

- *Type:* str

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@clevercloud/cdktf-bindings.python.Python.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `redirect_https_input`<sup>Optional</sup> <a name="redirect_https_input" id="@clevercloud/cdktf-bindings.python.Python.property.redirectHttpsInput"></a>

```python
redirect_https_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@clevercloud/cdktf-bindings.python.Python.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `smallest_flavor_input`<sup>Optional</sup> <a name="smallest_flavor_input" id="@clevercloud/cdktf-bindings.python.Python.property.smallestFlavorInput"></a>

```python
smallest_flavor_input: str
```

- *Type:* str

---

##### `sticky_sessions_input`<sup>Optional</sup> <a name="sticky_sessions_input" id="@clevercloud/cdktf-bindings.python.Python.property.stickySessionsInput"></a>

```python
sticky_sessions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `vhosts_input`<sup>Optional</sup> <a name="vhosts_input" id="@clevercloud/cdktf-bindings.python.Python.property.vhostsInput"></a>

```python
vhosts_input: IResolvable | typing.List[PythonVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]

---

##### `app_folder`<sup>Required</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.python.Python.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.python.Python.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

---

##### `build_flavor`<sup>Required</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.python.Python.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.python.Python.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.python.Python.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.python.Python.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment`<sup>Required</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.python.Python.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.python.Python.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pip_requirements`<sup>Required</sup> <a name="pip_requirements" id="@clevercloud/cdktf-bindings.python.Python.property.pipRequirements"></a>

```python
pip_requirements: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@clevercloud/cdktf-bindings.python.Python.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `redirect_https`<sup>Required</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.python.Python.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.python.Python.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.python.Python.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

---

##### `sticky_sessions`<sup>Required</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.python.Python.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.python.Python.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PythonConfig <a name="PythonConfig" id="@clevercloud/cdktf-bindings.python.PythonConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonConfig.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonConfig(
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
  deployment: PythonDeployment = None,
  description: str = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: PythonHooks = None,
  networkgroups: IResolvable | typing.List[PythonNetworkgroups] = None,
  pip_requirements: str = None,
  python_version: str = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[PythonVhosts] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.pipRequirements">pip_requirements</a></code> | <code>str</code> | Define a custom requirements.txt file (default: requirements.txt). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.pythonVersion">python_version</a></code> | <code>str</code> | Python version >= 2.7. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#biggest_flavor Python#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#max_instance_count Python#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#min_instance_count Python#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#name Python#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#smallest_flavor Python#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#app_folder Python#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#build_flavor Python#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#dependencies Python#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.deployment"></a>

```python
deployment: PythonDeployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#deployment Python#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#description Python#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#environment Python#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#exposed_environment Python#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.hooks"></a>

```python
hooks: PythonHooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#hooks Python#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.networkgroups"></a>

```python
networkgroups: IResolvable | typing.List[PythonNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#networkgroups Python#networkgroups}

---

##### `pip_requirements`<sup>Optional</sup> <a name="pip_requirements" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.pipRequirements"></a>

```python
pip_requirements: str
```

- *Type:* str

Define a custom requirements.txt file (default: requirements.txt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pip_requirements Python#pip_requirements}

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

Python version >= 2.7.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#python_version Python#python_version}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#redirect_https Python#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#region Python#region}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#sticky_sessions Python#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.vhosts"></a>

```python
vhosts: IResolvable | typing.List[PythonVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#vhosts Python#vhosts}

---

### PythonDeployment <a name="PythonDeployment" id="@clevercloud/cdktf-bindings.python.PythonDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonDeployment.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonDeployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment.property.commit">commit</a></code> | <code>str</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment.property.repository">repository</a></code> | <code>str</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.python.PythonDeployment.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#authentication_basic Python#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.python.PythonDeployment.property.commit"></a>

```python
commit: str
```

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#commit Python#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.python.PythonDeployment.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#repository Python#repository}

---

### PythonHooks <a name="PythonHooks" id="@clevercloud/cdktf-bindings.python.PythonHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonHooks.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonHooks(
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
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.postBuild">post_build</a></code> | <code>str</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.preBuild">pre_build</a></code> | <code>str</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.preRun">pre_run</a></code> | <code>str</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.runFailed">run_failed</a></code> | <code>str</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.runSucceed">run_succeed</a></code> | <code>str</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#post_build Python#post_build}

---

##### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pre_build Python#pre_build}

---

##### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pre_run Python#pre_run}

---

##### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#run_failed Python#run_failed}

---

##### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#run_succeed Python#run_succeed}

---

### PythonNetworkgroups <a name="PythonNetworkgroups" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonNetworkgroups(
  fqdn: str,
  networkgroup_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.fqdn">fqdn</a></code> | <code>str</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#fqdn Python#fqdn}

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#networkgroup_id Python#networkgroup_id}

---

### PythonVhosts <a name="PythonVhosts" id="@clevercloud/cdktf-bindings.python.PythonVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonVhosts.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonVhosts(
  fqdn: str,
  path_begin: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhosts.property.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhosts.property.pathBegin">path_begin</a></code> | <code>str</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonVhosts.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#fqdn Python#fqdn}

---

##### `path_begin`<sup>Optional</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.python.PythonVhosts.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#path_begin Python#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### PythonDeploymentOutputReference <a name="PythonDeploymentOutputReference" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetAuthenticationBasic">reset_authentication_basic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_basic` <a name="reset_authentication_basic" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetAuthenticationBasic"></a>

```python
def reset_authentication_basic() -> None
```

##### `reset_commit` <a name="reset_commit" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_repository` <a name="reset_repository" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasicInput">authentication_basic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_basic_input`<sup>Optional</sup> <a name="authentication_basic_input" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasicInput"></a>

```python
authentication_basic_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `authentication_basic`<sup>Required</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: PythonDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> | cdktf.IResolvable

---


### PythonHooksOutputReference <a name="PythonHooksOutputReference" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPostBuild">reset_post_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreBuild">reset_pre_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreRun">reset_pre_run</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunFailed">reset_run_failed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunSucceed">reset_run_succeed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_post_build` <a name="reset_post_build" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPostBuild"></a>

```python
def reset_post_build() -> None
```

##### `reset_pre_build` <a name="reset_pre_build" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreBuild"></a>

```python
def reset_pre_build() -> None
```

##### `reset_pre_run` <a name="reset_pre_run" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreRun"></a>

```python
def reset_pre_run() -> None
```

##### `reset_run_failed` <a name="reset_run_failed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunFailed"></a>

```python
def reset_run_failed() -> None
```

##### `reset_run_succeed` <a name="reset_run_succeed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunSucceed"></a>

```python
def reset_run_succeed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuildInput">post_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuildInput">pre_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRunInput">pre_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailedInput">run_failed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceedInput">run_succeed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuild">post_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuild">pre_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRun">pre_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailed">run_failed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceed">run_succeed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_build_input`<sup>Optional</sup> <a name="post_build_input" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuildInput"></a>

```python
post_build_input: str
```

- *Type:* str

---

##### `pre_build_input`<sup>Optional</sup> <a name="pre_build_input" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuildInput"></a>

```python
pre_build_input: str
```

- *Type:* str

---

##### `pre_run_input`<sup>Optional</sup> <a name="pre_run_input" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRunInput"></a>

```python
pre_run_input: str
```

- *Type:* str

---

##### `run_failed_input`<sup>Optional</sup> <a name="run_failed_input" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailedInput"></a>

```python
run_failed_input: str
```

- *Type:* str

---

##### `run_succeed_input`<sup>Optional</sup> <a name="run_succeed_input" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceedInput"></a>

```python
run_succeed_input: str
```

- *Type:* str

---

##### `post_build`<sup>Required</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

---

##### `pre_build`<sup>Required</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

---

##### `pre_run`<sup>Required</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

---

##### `run_failed`<sup>Required</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

---

##### `run_succeed`<sup>Required</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.internalValue"></a>

```python
internal_value: PythonHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> | cdktf.IResolvable

---


### PythonNetworkgroupsList <a name="PythonNetworkgroupsList" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonNetworkgroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PythonNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PythonNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>]

---


### PythonNetworkgroupsOutputReference <a name="PythonNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonNetworkgroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `networkgroup_id_input`<sup>Optional</sup> <a name="networkgroup_id_input" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```python
networkgroup_id_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.internalValue"></a>

```python
internal_value: PythonNetworkgroups | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a> | cdktf.IResolvable

---


### PythonVhostsList <a name="PythonVhostsList" id="@clevercloud/cdktf-bindings.python.PythonVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonVhostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PythonVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PythonVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>]

---


### PythonVhostsOutputReference <a name="PythonVhostsOutputReference" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import python

python.PythonVhostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resetPathBegin">reset_path_begin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path_begin` <a name="reset_path_begin" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resetPathBegin"></a>

```python
def reset_path_begin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBeginInput">path_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBegin">path_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `path_begin_input`<sup>Optional</sup> <a name="path_begin_input" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBeginInput"></a>

```python
path_begin_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `path_begin`<sup>Required</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.internalValue"></a>

```python
internal_value: PythonVhosts | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a> | cdktf.IResolvable

---



