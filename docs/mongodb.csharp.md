# `mongodb` Submodule <a name="`mongodb` Submodule" id="@clevercloud/cdktf-bindings.mongodb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mongodb <a name="Mongodb" id="@clevercloud/cdktf-bindings.mongodb.Mongodb"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb clevercloud_mongodb}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new Mongodb(Construct Scope, string Id, MongodbConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig">MongodbConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig">MongodbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.putNetworkgroups">PutNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.resetNetworkgroups">ResetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.putNetworkgroups"></a>

```csharp
private void PutNetworkgroups(IResolvable|MongodbNetworkgroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.putNetworkgroups.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>[]

---

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.resetNetworkgroups"></a>

```csharp
private void ResetNetworkgroups()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Mongodb resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Mongodb.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Mongodb.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.isTerraformResource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Mongodb.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Mongodb.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Mongodb resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Mongodb to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Mongodb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Mongodb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.creationDate">CreationDate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList">MongodbNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.creationDate"></a>

```csharp
public double CreationDate { get; }
```

- *Type:* double

---

##### `Database`<sup>Required</sup> <a name="Database" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.networkgroups"></a>

```csharp
public MongodbNetworkgroupsList Networkgroups { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList">MongodbNetworkgroupsList</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.networkgroupsInput"></a>

```csharp
public IResolvable|MongodbNetworkgroups[] NetworkgroupsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>[]

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.Mongodb.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.mongodb.Mongodb.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbConfig <a name="MongodbConfig" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new MongodbConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Plan,
    IResolvable|MongodbNetworkgroups[] Networkgroups = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.name">Name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.plan">Plan</a></code> | <code>string</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.networkgroups">Networkgroups</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>[]</code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.region">Region</a></code> | <code>string</code> | Geographical region where the data will be stored. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb#name Mongodb#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb#plan Mongodb#plan}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.networkgroups"></a>

```csharp
public IResolvable|MongodbNetworkgroups[] Networkgroups { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>[]

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb#networkgroups Mongodb#networkgroups}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.mongodb.MongodbConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb#region Mongodb#region}

---

### MongodbNetworkgroups <a name="MongodbNetworkgroups" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new MongodbNetworkgroups {
    string Fqdn,
    string NetworkgroupId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups.property.fqdn">Fqdn</a></code> | <code>string</code> | domain name which will resolve to addon instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

domain name which will resolve to addon instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb#fqdn Mongodb#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; set; }
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mongodb#networkgroup_id Mongodb#networkgroup_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MongodbNetworkgroupsList <a name="MongodbNetworkgroupsList" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new MongodbNetworkgroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.get"></a>

```csharp
private MongodbNetworkgroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsList.property.internalValue"></a>

```csharp
public IResolvable|MongodbNetworkgroups[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>[]

---


### MongodbNetworkgroupsOutputReference <a name="MongodbNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new MongodbNetworkgroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```csharp
public string NetworkgroupIdInput { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroupsOutputReference.property.internalValue"></a>

```csharp
public MongodbNetworkgroups|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mongodb.MongodbNetworkgroups">MongodbNetworkgroups</a>|HashiCorp.Cdktf.IResolvable

---



