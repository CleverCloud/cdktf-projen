# `drainElasticsearch` Submodule <a name="`drainElasticsearch` Submodule" id="@clevercloud/cdktf-bindings.drainElasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrainElasticsearch <a name="DrainElasticsearch" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch clevercloud_drain_elasticsearch}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DrainElasticsearch(Construct Scope, string Id, DrainElasticsearchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig">DrainElasticsearchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig">DrainElasticsearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetTlsVerification">ResetTlsVerification</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetKind` <a name="ResetKind" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetTlsVerification` <a name="ResetTlsVerification" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetTlsVerification"></a>

```csharp
private void ResetTlsVerification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DrainElasticsearch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainElasticsearch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainElasticsearch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformResource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainElasticsearch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainElasticsearch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DrainElasticsearch resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrainElasticsearch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrainElasticsearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DrainElasticsearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerificationInput">TlsVerificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerification">TlsVerification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TlsVerificationInput`<sup>Optional</sup> <a name="TlsVerificationInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerificationInput"></a>

```csharp
public string TlsVerificationInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `TlsVerification`<sup>Required</sup> <a name="TlsVerification" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerification"></a>

```csharp
public string TlsVerification { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrainElasticsearchConfig <a name="DrainElasticsearchConfig" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DrainElasticsearchConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Index,
    string Password,
    string ResourceId,
    string Url,
    string Username,
    string Kind = null,
    string TlsVerification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.index">Index</a></code> | <code>string</code> | Elasticsearch index name. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.password">Password</a></code> | <code>string</code> | Elasticsearch password. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Application or product ID which support logs drains. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.url">Url</a></code> | <code>string</code> | Elasticsearch URL. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.username">Username</a></code> | <code>string</code> | Elasticsearch username. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.kind">Kind</a></code> | <code>string</code> | either LOG, ACCESSLOG or AUDITLOG. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.tlsVerification">TlsVerification</a></code> | <code>string</code> | TLS verification mode: DEFAULT or TRUSTFUL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Elasticsearch index name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#index DrainElasticsearch#index}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Elasticsearch password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#password DrainElasticsearch#password}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Application or product ID which support logs drains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#resource_id DrainElasticsearch#resource_id}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Elasticsearch URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#url DrainElasticsearch#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Elasticsearch username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#username DrainElasticsearch#username}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

either LOG, ACCESSLOG or AUDITLOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#kind DrainElasticsearch#kind}

---

##### `TlsVerification`<sup>Optional</sup> <a name="TlsVerification" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.tlsVerification"></a>

```csharp
public string TlsVerification { get; set; }
```

- *Type:* string

TLS verification mode: DEFAULT or TRUSTFUL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#tls_verification DrainElasticsearch#tls_verification}

---



