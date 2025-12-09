# `provider` Submodule <a name="`provider` Submodule" id="@clevercloud/cdktf-bindings.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClevercloudProvider <a name="ClevercloudProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs clevercloud}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/provider"

provider.NewClevercloudProvider(scope Construct, id *string, config ClevercloudProviderConfig) ClevercloudProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig">ClevercloudProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig">ClevercloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey">ResetConsumerKey</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret">ResetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups">ResetDisableNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation">ResetOrganisation</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetConsumerKey` <a name="ResetConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey"></a>

```go
func ResetConsumerKey()
```

##### `ResetConsumerSecret` <a name="ResetConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret"></a>

```go
func ResetConsumerSecret()
```

##### `ResetDisableNetworkgroups` <a name="ResetDisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups"></a>

```go
func ResetDisableNetworkgroups()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetOrganisation` <a name="ResetOrganisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation"></a>

```go
func ResetOrganisation()
```

##### `ResetSecret` <a name="ResetSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetToken` <a name="ResetToken" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/provider"

provider.ClevercloudProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/provider"

provider.ClevercloudProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/provider"

provider.ClevercloudProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/provider"

provider.ClevercloudProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ClevercloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ClevercloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ClevercloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput">DisableNetworkgroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput">OrganisationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret">ConsumerSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups">DisableNetworkgroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation">Organisation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput"></a>

```go
func ConsumerKeyInput() *string
```

- *Type:* *string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput"></a>

```go
func ConsumerSecretInput() *string
```

- *Type:* *string

---

##### `DisableNetworkgroupsInput`<sup>Optional</sup> <a name="DisableNetworkgroupsInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput"></a>

```go
func DisableNetworkgroupsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `OrganisationInput`<sup>Optional</sup> <a name="OrganisationInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput"></a>

```go
func OrganisationInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `ConsumerKey`<sup>Optional</sup> <a name="ConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey"></a>

```go
func ConsumerKey() *string
```

- *Type:* *string

---

##### `ConsumerSecret`<sup>Optional</sup> <a name="ConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret"></a>

```go
func ConsumerSecret() *string
```

- *Type:* *string

---

##### `DisableNetworkgroups`<sup>Optional</sup> <a name="DisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups"></a>

```go
func DisableNetworkgroups() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Organisation`<sup>Optional</sup> <a name="Organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation"></a>

```go
func Organisation() *string
```

- *Type:* *string

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClevercloudProviderConfig <a name="ClevercloudProviderConfig" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/provider"

&provider.ClevercloudProviderConfig {
	Alias: *string,
	ConsumerKey: *string,
	ConsumerSecret: *string,
	DisableNetworkgroups: interface{},
	Endpoint: *string,
	Organisation: *string,
	Secret: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret">ConsumerSecret</a></code> | <code>*string</code> | CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups">DisableNetworkgroups</a></code> | <code>interface{}</code> | Disable netorkgroups features. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Clever Cloud API endpoint, default to https://api.clever-cloud.com. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation">Organisation</a></code> | <code>*string</code> | Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret">Secret</a></code> | <code>*string</code> | Clever Cloud OAuth1 secret, can be took from clever-tools after login. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token">Token</a></code> | <code>*string</code> | Clever Cloud OAuth1 token, can be took from clever-tools after login. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}

---

##### `ConsumerKey`<sup>Optional</sup> <a name="ConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey"></a>

```go
ConsumerKey *string
```

- *Type:* *string

Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}

---

##### `ConsumerSecret`<sup>Optional</sup> <a name="ConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret"></a>

```go
ConsumerSecret *string
```

- *Type:* *string

CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}

---

##### `DisableNetworkgroups`<sup>Optional</sup> <a name="DisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups"></a>

```go
DisableNetworkgroups interface{}
```

- *Type:* interface{}

Disable netorkgroups features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Clever Cloud API endpoint, default to https://api.clever-cloud.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}

---

##### `Organisation`<sup>Optional</sup> <a name="Organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation"></a>

```go
Organisation *string
```

- *Type:* *string

Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces.

This parameter can also be provided via CC_ORGANISATION environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Clever Cloud OAuth1 secret, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_SECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Clever Cloud OAuth1 token, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}

---



