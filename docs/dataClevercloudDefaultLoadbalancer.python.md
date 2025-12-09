# `dataClevercloudDefaultLoadbalancer` Submodule <a name="`dataClevercloudDefaultLoadbalancer` Submodule" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataClevercloudDefaultLoadbalancer <a name="DataClevercloudDefaultLoadbalancer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer clevercloud_default_loadbalancer}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import data_clevercloud_default_loadbalancer

dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The application ID for which to fetch the load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.applicationId"></a>

- *Type:* str

The application ID for which to fetch the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#application_id DataClevercloudDefaultLoadbalancer#application_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import data_clevercloud_default_loadbalancer

dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import data_clevercloud_default_loadbalancer

dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource"></a>

```python
from clevercloud_cdktf_provider_clevercloud import data_clevercloud_default_loadbalancer

dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import data_clevercloud_default_loadbalancer

dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataClevercloudDefaultLoadbalancer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataClevercloudDefaultLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataClevercloudDefaultLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers">servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cname`<sup>Required</sup> <a name="cname" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataClevercloudDefaultLoadbalancerConfig <a name="DataClevercloudDefaultLoadbalancerConfig" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import data_clevercloud_default_loadbalancer

dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId">application_id</a></code> | <code>str</code> | The application ID for which to fetch the load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The application ID for which to fetch the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#application_id DataClevercloudDefaultLoadbalancer#application_id}

---



