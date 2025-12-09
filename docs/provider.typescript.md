# `provider` Submodule <a name="`provider` Submodule" id="@clevercloud/cdktf-bindings.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClevercloudProvider <a name="ClevercloudProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs clevercloud}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer"></a>

```typescript
import { provider } from '@clevercloud/cdktf-bindings'

new provider.ClevercloudProvider(scope: Construct, id: string, config?: ClevercloudProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig">ClevercloudProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig">ClevercloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey">resetConsumerKey</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret">resetConsumerSecret</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups">resetDisableNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation">resetOrganisation</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConsumerKey` <a name="resetConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey"></a>

```typescript
public resetConsumerKey(): void
```

##### `resetConsumerSecret` <a name="resetConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret"></a>

```typescript
public resetConsumerSecret(): void
```

##### `resetDisableNetworkgroups` <a name="resetDisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups"></a>

```typescript
public resetDisableNetworkgroups(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetOrganisation` <a name="resetOrganisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation"></a>

```typescript
public resetOrganisation(): void
```

##### `resetSecret` <a name="resetSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetToken` <a name="resetToken" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isConstruct"></a>

```typescript
import { provider } from '@clevercloud/cdktf-bindings'

provider.ClevercloudProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement"></a>

```typescript
import { provider } from '@clevercloud/cdktf-bindings'

provider.ClevercloudProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@clevercloud/cdktf-bindings'

provider.ClevercloudProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@clevercloud/cdktf-bindings'

provider.ClevercloudProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClevercloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput">consumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput">consumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput">disableNetworkgroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput">organisationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups">disableNetworkgroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation">organisation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput"></a>

```typescript
public readonly consumerKeyInput: string;
```

- *Type:* string

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput"></a>

```typescript
public readonly consumerSecretInput: string;
```

- *Type:* string

---

##### `disableNetworkgroupsInput`<sup>Optional</sup> <a name="disableNetworkgroupsInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput"></a>

```typescript
public readonly disableNetworkgroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `organisationInput`<sup>Optional</sup> <a name="organisationInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput"></a>

```typescript
public readonly organisationInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Optional</sup> <a name="consumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `disableNetworkgroups`<sup>Optional</sup> <a name="disableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups"></a>

```typescript
public readonly disableNetworkgroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation"></a>

```typescript
public readonly organisation: string;
```

- *Type:* string

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClevercloudProviderConfig <a name="ClevercloudProviderConfig" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.Initializer"></a>

```typescript
import { provider } from '@clevercloud/cdktf-bindings'

const clevercloudProviderConfig: provider.ClevercloudProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey">consumerKey</a></code> | <code>string</code> | Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups">disableNetworkgroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable netorkgroups features. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint">endpoint</a></code> | <code>string</code> | Clever Cloud API endpoint, default to https://api.clever-cloud.com. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation">organisation</a></code> | <code>string</code> | Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret">secret</a></code> | <code>string</code> | Clever Cloud OAuth1 secret, can be took from clever-tools after login. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token">token</a></code> | <code>string</code> | Clever Cloud OAuth1 token, can be took from clever-tools after login. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}

---

##### `consumerKey`<sup>Optional</sup> <a name="consumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}

---

##### `disableNetworkgroups`<sup>Optional</sup> <a name="disableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups"></a>

```typescript
public readonly disableNetworkgroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable netorkgroups features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Clever Cloud API endpoint, default to https://api.clever-cloud.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation"></a>

```typescript
public readonly organisation: string;
```

- *Type:* string

Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces.

This parameter can also be provided via CC_ORGANISATION environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Clever Cloud OAuth1 secret, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_SECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Clever Cloud OAuth1 token, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}

---



