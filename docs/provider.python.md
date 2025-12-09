# `provider` Submodule <a name="`provider` Submodule" id="@clevercloud/cdktf-bindings.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClevercloudProvider <a name="ClevercloudProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs clevercloud}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import provider

provider.ClevercloudProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  consumer_key: str = None,
  consumer_secret: str = None,
  disable_networkgroups: bool | IResolvable = None,
  endpoint: str = None,
  organisation: str = None,
  secret: str = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerKey">consumer_key</a></code> | <code>str</code> | Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerSecret">consumer_secret</a></code> | <code>str</code> | CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.disableNetworkgroups">disable_networkgroups</a></code> | <code>bool \| cdktf.IResolvable</code> | Disable netorkgroups features. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Clever Cloud API endpoint, default to https://api.clever-cloud.com. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.organisation">organisation</a></code> | <code>str</code> | Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.secret">secret</a></code> | <code>str</code> | Clever Cloud OAuth1 secret, can be took from clever-tools after login. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Clever Cloud OAuth1 token, can be took from clever-tools after login. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}

---

##### `consumer_key`<sup>Optional</sup> <a name="consumer_key" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerKey"></a>

- *Type:* str

Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}

---

##### `consumer_secret`<sup>Optional</sup> <a name="consumer_secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerSecret"></a>

- *Type:* str

CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}

---

##### `disable_networkgroups`<sup>Optional</sup> <a name="disable_networkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.disableNetworkgroups"></a>

- *Type:* bool | cdktf.IResolvable

Disable netorkgroups features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.endpoint"></a>

- *Type:* str

Clever Cloud API endpoint, default to https://api.clever-cloud.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.organisation"></a>

- *Type:* str

Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces.

This parameter can also be provided via CC_ORGANISATION environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.secret"></a>

- *Type:* str

Clever Cloud OAuth1 secret, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_SECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.token"></a>

- *Type:* str

Clever Cloud OAuth1 token, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey">reset_consumer_key</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret">reset_consumer_secret</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups">reset_disable_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation">reset_organisation</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_consumer_key` <a name="reset_consumer_key" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey"></a>

```python
def reset_consumer_key() -> None
```

##### `reset_consumer_secret` <a name="reset_consumer_secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret"></a>

```python
def reset_consumer_secret() -> None
```

##### `reset_disable_networkgroups` <a name="reset_disable_networkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups"></a>

```python
def reset_disable_networkgroups() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_organisation` <a name="reset_organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation"></a>

```python
def reset_organisation() -> None
```

##### `reset_secret` <a name="reset_secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_token` <a name="reset_token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import provider

provider.ClevercloudProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import provider

provider.ClevercloudProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider"></a>

```python
from clevercloud_cdktf_provider_clevercloud import provider

provider.ClevercloudProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import provider

provider.ClevercloudProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ClevercloudProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ClevercloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClevercloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput">disable_networkgroups_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput">organisation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups">disable_networkgroups</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation">organisation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `disable_networkgroups_input`<sup>Optional</sup> <a name="disable_networkgroups_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput"></a>

```python
disable_networkgroups_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `organisation_input`<sup>Optional</sup> <a name="organisation_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput"></a>

```python
organisation_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `consumer_key`<sup>Optional</sup> <a name="consumer_key" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Optional</sup> <a name="consumer_secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `disable_networkgroups`<sup>Optional</sup> <a name="disable_networkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups"></a>

```python
disable_networkgroups: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation"></a>

```python
organisation: str
```

- *Type:* str

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClevercloudProviderConfig <a name="ClevercloudProviderConfig" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import provider

provider.ClevercloudProviderConfig(
  alias: str = None,
  consumer_key: str = None,
  consumer_secret: str = None,
  disable_networkgroups: bool | IResolvable = None,
  endpoint: str = None,
  organisation: str = None,
  secret: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey">consumer_key</a></code> | <code>str</code> | Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups">disable_networkgroups</a></code> | <code>bool \| cdktf.IResolvable</code> | Disable netorkgroups features. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Clever Cloud API endpoint, default to https://api.clever-cloud.com. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation">organisation</a></code> | <code>str</code> | Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret">secret</a></code> | <code>str</code> | Clever Cloud OAuth1 secret, can be took from clever-tools after login. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token">token</a></code> | <code>str</code> | Clever Cloud OAuth1 token, can be took from clever-tools after login. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}

---

##### `consumer_key`<sup>Optional</sup> <a name="consumer_key" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}

---

##### `consumer_secret`<sup>Optional</sup> <a name="consumer_secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}

---

##### `disable_networkgroups`<sup>Optional</sup> <a name="disable_networkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups"></a>

```python
disable_networkgroups: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disable netorkgroups features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Clever Cloud API endpoint, default to https://api.clever-cloud.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation"></a>

```python
organisation: str
```

- *Type:* str

Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces.

This parameter can also be provided via CC_ORGANISATION environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Clever Cloud OAuth1 secret, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_SECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Clever Cloud OAuth1 token, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}

---



