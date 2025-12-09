# `drainSyslogTcp` Submodule <a name="`drainSyslogTcp` Submodule" id="@clevercloud/cdktf-bindings.drainSyslogTcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrainSyslogTcp <a name="DrainSyslogTcp" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp clevercloud_drain_syslog_tcp}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DrainSyslogTcp(Construct Scope, string Id, DrainSyslogTcpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig">DrainSyslogTcpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig">DrainSyslogTcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetKind` <a name="ResetKind" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetToken` <a name="ResetToken" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DrainSyslogTcp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainSyslogTcp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainSyslogTcp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformResource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainSyslogTcp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DrainSyslogTcp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DrainSyslogTcp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrainSyslogTcp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrainSyslogTcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DrainSyslogTcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrainSyslogTcpConfig <a name="DrainSyslogTcpConfig" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DrainSyslogTcpConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceId,
    string Url,
    string Kind = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Application or product ID which support logs drains. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.url">Url</a></code> | <code>string</code> | Syslog TCP destination URL. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.kind">Kind</a></code> | <code>string</code> | either LOG, ACCESSLOG or AUDITLOG. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.token">Token</a></code> | <code>string</code> | Authentication token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Application or product ID which support logs drains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#resource_id DrainSyslogTcp#resource_id}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Syslog TCP destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#url DrainSyslogTcp#url}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

either LOG, ACCESSLOG or AUDITLOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#kind DrainSyslogTcp#kind}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#token DrainSyslogTcp#token}

---



