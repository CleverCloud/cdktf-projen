# `elasticsearch` Submodule <a name="`elasticsearch` Submodule" id="@clevercloud/cdktf-bindings.elasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticsearch <a name="Elasticsearch" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch clevercloud_elasticsearch}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.Elasticsearch(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  plan: str,
  apm: bool | IResolvable = None,
  encryption: bool | IResolvable = None,
  kibana: bool | IResolvable = None,
  networkgroups: IResolvable | typing.List[ElasticsearchNetworkgroups] = None,
  plugins: typing.List[str] = None,
  region: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the elasticsearch. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plan">plan</a></code> | <code>str</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.apm">apm</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable APM (Application Performance Monitoring) for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.encryption">encryption</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable at-rest encryption. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.kibana">kibana</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable Kibana for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]</code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plugins">plugins</a></code> | <code>typing.List[str]</code> | List of plugins to install. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.region">region</a></code> | <code>str</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.version">version</a></code> | <code>str</code> | Elasticsearch version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.name"></a>

- *Type:* str

Name of the elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#name Elasticsearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plan"></a>

- *Type:* str

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plan Elasticsearch#plan}

---

##### `apm`<sup>Optional</sup> <a name="apm" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.apm"></a>

- *Type:* bool | cdktf.IResolvable

Enable APM (Application Performance Monitoring) for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#apm Elasticsearch#apm}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.encryption"></a>

- *Type:* bool | cdktf.IResolvable

Enable at-rest encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#encryption Elasticsearch#encryption}

---

##### `kibana`<sup>Optional</sup> <a name="kibana" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.kibana"></a>

- *Type:* bool | cdktf.IResolvable

Enable Kibana for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#kibana Elasticsearch#kibana}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.networkgroups"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroups Elasticsearch#networkgroups}

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plugins"></a>

- *Type:* typing.List[str]

List of plugins to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plugins Elasticsearch#plugins}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.region"></a>

- *Type:* str

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#region Elasticsearch#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.version"></a>

- *Type:* str

Elasticsearch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#version Elasticsearch#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.putNetworkgroups">put_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetApm">reset_apm</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetKibana">reset_kibana</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetNetworkgroups">reset_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetPlugins">reset_plugins</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_networkgroups` <a name="put_networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.putNetworkgroups"></a>

```python
def put_networkgroups(
  value: IResolvable | typing.List[ElasticsearchNetworkgroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]

---

##### `reset_apm` <a name="reset_apm" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetApm"></a>

```python
def reset_apm() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_kibana` <a name="reset_kibana" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetKibana"></a>

```python
def reset_kibana() -> None
```

##### `reset_networkgroups` <a name="reset_networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetNetworkgroups"></a>

```python
def reset_networkgroups() -> None
```

##### `reset_plugins` <a name="reset_plugins" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetPlugins"></a>

```python
def reset_plugins() -> None
```

##### `reset_region` <a name="reset_region" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_version` <a name="reset_version" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Elasticsearch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.Elasticsearch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.Elasticsearch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformResource"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.Elasticsearch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.Elasticsearch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Elasticsearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Elasticsearch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Elasticsearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Elasticsearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmHost">apm_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmPassword">apm_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmToken">apm_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmUser">apm_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaHost">kibana_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaPassword">kibana_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaUser">kibana_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList">ElasticsearchNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmInput">apm_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryptionInput">encryption_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaInput">kibana_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroupsInput">networkgroups_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.pluginsInput">plugins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apm">apm</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryption">encryption</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibana">kibana</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plugins">plugins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `apm_host`<sup>Required</sup> <a name="apm_host" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmHost"></a>

```python
apm_host: str
```

- *Type:* str

---

##### `apm_password`<sup>Required</sup> <a name="apm_password" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmPassword"></a>

```python
apm_password: str
```

- *Type:* str

---

##### `apm_token`<sup>Required</sup> <a name="apm_token" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmToken"></a>

```python
apm_token: str
```

- *Type:* str

---

##### `apm_user`<sup>Required</sup> <a name="apm_user" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmUser"></a>

```python
apm_user: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `kibana_host`<sup>Required</sup> <a name="kibana_host" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaHost"></a>

```python
kibana_host: str
```

- *Type:* str

---

##### `kibana_password`<sup>Required</sup> <a name="kibana_password" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaPassword"></a>

```python
kibana_password: str
```

- *Type:* str

---

##### `kibana_user`<sup>Required</sup> <a name="kibana_user" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaUser"></a>

```python
kibana_user: str
```

- *Type:* str

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroups"></a>

```python
networkgroups: ElasticsearchNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList">ElasticsearchNetworkgroupsList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `apm_input`<sup>Optional</sup> <a name="apm_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmInput"></a>

```python
apm_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryptionInput"></a>

```python
encryption_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `kibana_input`<sup>Optional</sup> <a name="kibana_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaInput"></a>

```python
kibana_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkgroups_input`<sup>Optional</sup> <a name="networkgroups_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroupsInput"></a>

```python
networkgroups_input: IResolvable | typing.List[ElasticsearchNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `plugins_input`<sup>Optional</sup> <a name="plugins_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.pluginsInput"></a>

```python
plugins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `apm`<sup>Required</sup> <a name="apm" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apm"></a>

```python
apm: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryption"></a>

```python
encryption: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `kibana`<sup>Required</sup> <a name="kibana" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibana"></a>

```python
kibana: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plugins"></a>

```python
plugins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchConfig <a name="ElasticsearchConfig" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.ElasticsearchConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  plan: str,
  apm: bool | IResolvable = None,
  encryption: bool | IResolvable = None,
  kibana: bool | IResolvable = None,
  networkgroups: IResolvable | typing.List[ElasticsearchNetworkgroups] = None,
  plugins: typing.List[str] = None,
  region: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.name">name</a></code> | <code>str</code> | Name of the elasticsearch. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plan">plan</a></code> | <code>str</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.apm">apm</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable APM (Application Performance Monitoring) for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.encryption">encryption</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable at-rest encryption. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.kibana">kibana</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable Kibana for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]</code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plugins">plugins</a></code> | <code>typing.List[str]</code> | List of plugins to install. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.region">region</a></code> | <code>str</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.version">version</a></code> | <code>str</code> | Elasticsearch version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#name Elasticsearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plan Elasticsearch#plan}

---

##### `apm`<sup>Optional</sup> <a name="apm" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.apm"></a>

```python
apm: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable APM (Application Performance Monitoring) for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#apm Elasticsearch#apm}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.encryption"></a>

```python
encryption: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable at-rest encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#encryption Elasticsearch#encryption}

---

##### `kibana`<sup>Optional</sup> <a name="kibana" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.kibana"></a>

```python
kibana: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable Kibana for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#kibana Elasticsearch#kibana}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.networkgroups"></a>

```python
networkgroups: IResolvable | typing.List[ElasticsearchNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroups Elasticsearch#networkgroups}

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plugins"></a>

```python
plugins: typing.List[str]
```

- *Type:* typing.List[str]

List of plugins to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plugins Elasticsearch#plugins}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#region Elasticsearch#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Elasticsearch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#version Elasticsearch#version}

---

### ElasticsearchNetworkgroups <a name="ElasticsearchNetworkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.ElasticsearchNetworkgroups(
  fqdn: str,
  networkgroup_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.fqdn">fqdn</a></code> | <code>str</code> | domain name which will resolve to addon instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

domain name which will resolve to addon instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#fqdn Elasticsearch#fqdn}

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroup_id Elasticsearch#networkgroup_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchNetworkgroupsList <a name="ElasticsearchNetworkgroupsList" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.ElasticsearchNetworkgroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticsearchNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticsearchNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>]

---


### ElasticsearchNetworkgroupsOutputReference <a name="ElasticsearchNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import elasticsearch

elasticsearch.ElasticsearchNetworkgroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `networkgroup_id_input`<sup>Optional</sup> <a name="networkgroup_id_input" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```python
networkgroup_id_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchNetworkgroups | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a> | cdktf.IResolvable

---



