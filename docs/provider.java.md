# `provider` Submodule <a name="`provider` Submodule" id="@clevercloud/cdktf-bindings.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClevercloudProvider <a name="ClevercloudProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs clevercloud}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.provider.ClevercloudProvider;

ClevercloudProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .consumerKey(java.lang.String)
//  .consumerSecret(java.lang.String)
//  .disableNetworkgroups(java.lang.Boolean|IResolvable)
//  .endpoint(java.lang.String)
//  .organisation(java.lang.String)
//  .secret(java.lang.String)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.disableNetworkgroups">disableNetworkgroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable netorkgroups features. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Clever Cloud API endpoint, default to https://api.clever-cloud.com. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.organisation">organisation</a></code> | <code>java.lang.String</code> | Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.secret">secret</a></code> | <code>java.lang.String</code> | Clever Cloud OAuth1 secret, can be took from clever-tools after login. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Clever Cloud OAuth1 token, can be took from clever-tools after login. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}

---

##### `consumerKey`<sup>Optional</sup> <a name="consumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerKey"></a>

- *Type:* java.lang.String

Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.consumerSecret"></a>

- *Type:* java.lang.String

CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}

---

##### `disableNetworkgroups`<sup>Optional</sup> <a name="disableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.disableNetworkgroups"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable netorkgroups features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

Clever Cloud API endpoint, default to https://api.clever-cloud.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.organisation"></a>

- *Type:* java.lang.String

Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces.

This parameter can also be provided via CC_ORGANISATION environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.secret"></a>

- *Type:* java.lang.String

Clever Cloud OAuth1 secret, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_SECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Clever Cloud OAuth1 token, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetConsumerKey` <a name="resetConsumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerKey"></a>

```java
public void resetConsumerKey()
```

##### `resetConsumerSecret` <a name="resetConsumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetConsumerSecret"></a>

```java
public void resetConsumerSecret()
```

##### `resetDisableNetworkgroups` <a name="resetDisableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetDisableNetworkgroups"></a>

```java
public void resetDisableNetworkgroups()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetOrganisation` <a name="resetOrganisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetOrganisation"></a>

```java
public void resetOrganisation()
```

##### `resetSecret` <a name="resetSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetToken` <a name="resetToken" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.resetToken"></a>

```java
public void resetToken()
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

```java
import com.clevercloud.cdktf.providers.clevercloud.provider.ClevercloudProvider;

ClevercloudProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.provider.ClevercloudProvider;

ClevercloudProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.provider.ClevercloudProvider;

ClevercloudProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.provider.ClevercloudProvider;

ClevercloudProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ClevercloudProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ClevercloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ClevercloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ClevercloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput">consumerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput">consumerSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput">disableNetworkgroupsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput">organisationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups">disableNetworkgroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation">organisation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKeyInput"></a>

```java
public java.lang.String getConsumerKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecretInput"></a>

```java
public java.lang.String getConsumerSecretInput();
```

- *Type:* java.lang.String

---

##### `disableNetworkgroupsInput`<sup>Optional</sup> <a name="disableNetworkgroupsInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroupsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableNetworkgroupsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `organisationInput`<sup>Optional</sup> <a name="organisationInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisationInput"></a>

```java
public java.lang.String getOrganisationInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `consumerKey`<sup>Optional</sup> <a name="consumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `disableNetworkgroups`<sup>Optional</sup> <a name="disableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.disableNetworkgroups"></a>

```java
public java.lang.Boolean|IResolvable getDisableNetworkgroups();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.organisation"></a>

```java
public java.lang.String getOrganisation();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.provider.ClevercloudProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClevercloudProviderConfig <a name="ClevercloudProviderConfig" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.provider.ClevercloudProviderConfig;

ClevercloudProviderConfig.builder()
//  .alias(java.lang.String)
//  .consumerKey(java.lang.String)
//  .consumerSecret(java.lang.String)
//  .disableNetworkgroups(java.lang.Boolean|IResolvable)
//  .endpoint(java.lang.String)
//  .organisation(java.lang.String)
//  .secret(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups">disableNetworkgroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable netorkgroups features. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Clever Cloud API endpoint, default to https://api.clever-cloud.com. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation">organisation</a></code> | <code>java.lang.String</code> | Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret">secret</a></code> | <code>java.lang.String</code> | Clever Cloud OAuth1 secret, can be took from clever-tools after login. |
| <code><a href="#@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Clever Cloud OAuth1 token, can be took from clever-tools after login. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}

---

##### `consumerKey`<sup>Optional</sup> <a name="consumerKey" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}

---

##### `consumerSecret`<sup>Optional</sup> <a name="consumerSecret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}

---

##### `disableNetworkgroups`<sup>Optional</sup> <a name="disableNetworkgroups" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.disableNetworkgroups"></a>

```java
public java.lang.Boolean|IResolvable getDisableNetworkgroups();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable netorkgroups features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Clever Cloud API endpoint, default to https://api.clever-cloud.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}

---

##### `organisation`<sup>Optional</sup> <a name="organisation" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.organisation"></a>

```java
public java.lang.String getOrganisation();
```

- *Type:* java.lang.String

Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces.

This parameter can also be provided via CC_ORGANISATION environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Clever Cloud OAuth1 secret, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_SECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.provider.ClevercloudProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Clever Cloud OAuth1 token, can be took from clever-tools after login.

This parameter can also be provided via CC_OAUTH_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}

---



