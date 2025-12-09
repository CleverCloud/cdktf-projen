# `keycloak` Submodule <a name="`keycloak` Submodule" id="@clevercloud/cdktf-bindings.keycloak"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Keycloak <a name="Keycloak" id="@clevercloud/cdktf-bindings.keycloak.Keycloak"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/keycloak clevercloud_keycloak}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new Keycloak(Construct Scope, string Id, KeycloakConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig">KeycloakConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig">KeycloakConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Keycloak resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Keycloak.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Keycloak.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.isTerraformResource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Keycloak.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Keycloak.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Keycloak resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Keycloak to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Keycloak that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/keycloak#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Keycloak to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Host`<sup>Required</sup> <a name="Host" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.Keycloak.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.keycloak.Keycloak.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeycloakConfig <a name="KeycloakConfig" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new KeycloakConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.name">Name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.region">Region</a></code> | <code>string</code> | Geographical region where the data will be stored. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/keycloak#name Keycloak#name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.keycloak.KeycloakConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/keycloak#region Keycloak#region}

---



