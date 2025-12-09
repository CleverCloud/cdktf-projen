# `provider` Submodule <a name="`provider` Submodule" id="@clevercloud/cdktf-bindings.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClevercloudProvider <a name="ClevercloudProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs clevercloud}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new ClevercloudProvider(Construct Scope, string Id, ClevercloudProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig">ClevercloudProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetConsumerKey` <a name="ResetConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey"></a>

```csharp
private void ResetConsumerKey()
```

##### `ResetConsumerSecret` <a name="ResetConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret"></a>

```csharp
private void ResetConsumerSecret()
```

##### `ResetDisableNetworkgroups` <a name="ResetDisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups"></a>

```csharp
private void ResetDisableNetworkgroups()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetOrganisation` <a name="ResetOrganisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation"></a>

```csharp
private void ResetOrganisation()
```

##### `ResetSecret` <a name="ResetSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetToken` <a name="ResetToken" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken"></a>

```csharp
private void ResetToken()
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

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

ClevercloudProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

ClevercloudProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

ClevercloudProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

ClevercloudProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClevercloudProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClevercloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ClevercloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput">DisableNetworkgroupsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput">OrganisationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups">DisableNetworkgroups</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation">Organisation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput"></a>

```csharp
public string ConsumerKeyInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput"></a>

```csharp
public string ConsumerSecretInput { get; }
```

- *Type:* string

---

##### `DisableNetworkgroupsInput`<sup>Optional</sup> <a name="DisableNetworkgroupsInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput"></a>

```csharp
public bool|IResolvable DisableNetworkgroupsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `OrganisationInput`<sup>Optional</sup> <a name="OrganisationInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput"></a>

```csharp
public string OrganisationInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Optional</sup> <a name="ConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Optional</sup> <a name="ConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `DisableNetworkgroups`<sup>Optional</sup> <a name="DisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups"></a>

```csharp
public bool|IResolvable DisableNetworkgroups { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Organisation`<sup>Optional</sup> <a name="Organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation"></a>

```csharp
public string Organisation { get; }
```

- *Type:* string

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClevercloudProviderConfig <a name="ClevercloudProviderConfig" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new ClevercloudProviderConfig {
    string Alias = null,
    string ConsumerKey = null,
    string ConsumerSecret = null,
    bool|IResolvable DisableNetworkgroups = null,
    string Endpoint = null,
    string Organisation = null,
    string Secret = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups">DisableNetworkgroups</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Disable netorkgroups features. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Clever Cloud API endpoint, default to https://api.clever-cloud.com. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation">Organisation</a></code> | <code>string</code> | Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret">Secret</a></code> | <code>string</code> | Clever Cloud OAuth1 secret, can be took from clever-tools after login. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token">Token</a></code> | <code>string</code> | Clever Cloud OAuth1 token, can be took from clever-tools after login. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}

---

##### `ConsumerKey`<sup>Optional</sup> <a name="ConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; set; }
```

- *Type:* string

Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}

---

##### `ConsumerSecret`<sup>Optional</sup> <a name="ConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; set; }
```

- *Type:* string

CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}

---

##### `DisableNetworkgroups`<sup>Optional</sup> <a name="DisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups"></a>

```csharp
public bool|IResolvable DisableNetworkgroups { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Disable netorkgroups features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Clever Cloud API endpoint, default to https://api.clever-cloud.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}

---

##### `Organisation`<sup>Optional</sup> <a name="Organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation"></a>

```csharp
public string Organisation { get; set; }
```

- *Type:* string

Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces.

This parameter can also be provided via CC_ORGANISATION environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Clever Cloud OAuth1 secret, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_SECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Clever Cloud OAuth1 token, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}

---



