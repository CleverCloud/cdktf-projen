# `frankenphp` Submodule <a name="`frankenphp` Submodule" id="@clevercloud/cdktf-bindings.frankenphp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frankenphp <a name="Frankenphp" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp clevercloud_frankenphp}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new Frankenphp(Construct Scope, string Id, FrankenphpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig">FrankenphpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig">FrankenphpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks">PutHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups">PutNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts">PutVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetAppFolder">ResetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetBuildFlavor">ResetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDevDependencies">ResetDevDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetExposedEnvironment">ResetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetHooks">ResetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetNetworkgroups">ResetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRedirectHttps">ResetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetStickySessions">ResetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetVhosts">ResetVhosts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployment` <a name="PutDeployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment"></a>

```csharp
private void PutDeployment(FrankenphpDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>

---

##### `PutHooks` <a name="PutHooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks"></a>

```csharp
private void PutHooks(FrankenphpHooks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups"></a>

```csharp
private void PutNetworkgroups(IResolvable|FrankenphpNetworkgroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>[]

---

##### `PutVhosts` <a name="PutVhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts"></a>

```csharp
private void PutVhosts(IResolvable|FrankenphpVhosts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>[]

---

##### `ResetAppFolder` <a name="ResetAppFolder" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetAppFolder"></a>

```csharp
private void ResetAppFolder()
```

##### `ResetBuildFlavor` <a name="ResetBuildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetBuildFlavor"></a>

```csharp
private void ResetBuildFlavor()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDependencies"></a>

```csharp
private void ResetDependencies()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDeployment"></a>

```csharp
private void ResetDeployment()
```

##### `ResetDescription` <a name="ResetDescription" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDevDependencies` <a name="ResetDevDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDevDependencies"></a>

```csharp
private void ResetDevDependencies()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetExposedEnvironment` <a name="ResetExposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetExposedEnvironment"></a>

```csharp
private void ResetExposedEnvironment()
```

##### `ResetHooks` <a name="ResetHooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetHooks"></a>

```csharp
private void ResetHooks()
```

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetNetworkgroups"></a>

```csharp
private void ResetNetworkgroups()
```

##### `ResetRedirectHttps` <a name="ResetRedirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRedirectHttps"></a>

```csharp
private void ResetRedirectHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetStickySessions"></a>

```csharp
private void ResetStickySessions()
```

##### `ResetVhosts` <a name="ResetVhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetVhosts"></a>

```csharp
private void ResetVhosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Frankenphp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Frankenphp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Frankenphp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Frankenphp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Frankenphp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Frankenphp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Frankenphp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Frankenphp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Frankenphp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference">FrankenphpDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployUrl">DeployUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference">FrankenphpHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList">FrankenphpNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhosts">Vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList">FrankenphpVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolderInput">AppFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavorInput">BiggestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavorInput">BuildFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependenciesInput">DependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependenciesInput">DevDependenciesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironmentInput">ExposedEnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooksInput">HooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttpsInput">RedirectHttpsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavorInput">SmallestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessionsInput">StickySessionsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhostsInput">VhostsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolder">AppFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavor">BiggestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavor">BuildFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependencies">Dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependencies">DevDependencies</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttps">RedirectHttps</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavor">SmallestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessions">StickySessions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployment"></a>

```csharp
public FrankenphpDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference">FrankenphpDeploymentOutputReference</a>

---

##### `DeployUrl`<sup>Required</sup> <a name="DeployUrl" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployUrl"></a>

```csharp
public string DeployUrl { get; }
```

- *Type:* string

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooks"></a>

```csharp
public FrankenphpHooksOutputReference Hooks { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference">FrankenphpHooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroups"></a>

```csharp
public FrankenphpNetworkgroupsList Networkgroups { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList">FrankenphpNetworkgroupsList</a>

---

##### `Vhosts`<sup>Required</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhosts"></a>

```csharp
public FrankenphpVhostsList Vhosts { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList">FrankenphpVhostsList</a>

---

##### `AppFolderInput`<sup>Optional</sup> <a name="AppFolderInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolderInput"></a>

```csharp
public string AppFolderInput { get; }
```

- *Type:* string

---

##### `BiggestFlavorInput`<sup>Optional</sup> <a name="BiggestFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavorInput"></a>

```csharp
public string BiggestFlavorInput { get; }
```

- *Type:* string

---

##### `BuildFlavorInput`<sup>Optional</sup> <a name="BuildFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavorInput"></a>

```csharp
public string BuildFlavorInput { get; }
```

- *Type:* string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependenciesInput"></a>

```csharp
public string[] DependenciesInput { get; }
```

- *Type:* string[]

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deploymentInput"></a>

```csharp
public FrankenphpDeployment|IResolvable DeploymentInput { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>|HashiCorp.Cdktf.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DevDependenciesInput`<sup>Optional</sup> <a name="DevDependenciesInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependenciesInput"></a>

```csharp
public bool|IResolvable DevDependenciesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExposedEnvironmentInput`<sup>Optional</sup> <a name="ExposedEnvironmentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooksInput"></a>

```csharp
public FrankenphpHooks|IResolvable HooksInput { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>|HashiCorp.Cdktf.IResolvable

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroupsInput"></a>

```csharp
public IResolvable|FrankenphpNetworkgroups[] NetworkgroupsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>[]

---

##### `RedirectHttpsInput`<sup>Optional</sup> <a name="RedirectHttpsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttpsInput"></a>

```csharp
public bool|IResolvable RedirectHttpsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SmallestFlavorInput`<sup>Optional</sup> <a name="SmallestFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavorInput"></a>

```csharp
public string SmallestFlavorInput { get; }
```

- *Type:* string

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessionsInput"></a>

```csharp
public bool|IResolvable StickySessionsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `VhostsInput`<sup>Optional</sup> <a name="VhostsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhostsInput"></a>

```csharp
public IResolvable|FrankenphpVhosts[] VhostsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>[]

---

##### `AppFolder`<sup>Required</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolder"></a>

```csharp
public string AppFolder { get; }
```

- *Type:* string

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavor"></a>

```csharp
public string BiggestFlavor { get; }
```

- *Type:* string

---

##### `BuildFlavor`<sup>Required</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavor"></a>

```csharp
public string BuildFlavor { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependencies"></a>

```csharp
public string[] Dependencies { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DevDependencies`<sup>Required</sup> <a name="DevDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependencies"></a>

```csharp
public bool|IResolvable DevDependencies { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExposedEnvironment`<sup>Required</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedirectHttps`<sup>Required</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttps"></a>

```csharp
public bool|IResolvable RedirectHttps { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavor"></a>

```csharp
public string SmallestFlavor { get; }
```

- *Type:* string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessions"></a>

```csharp
public bool|IResolvable StickySessions { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrankenphpConfig <a name="FrankenphpConfig" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BiggestFlavor,
    double MaxInstanceCount,
    double MinInstanceCount,
    string Name,
    string SmallestFlavor,
    string AppFolder = null,
    string BuildFlavor = null,
    string[] Dependencies = null,
    FrankenphpDeployment Deployment = null,
    string Description = null,
    bool|IResolvable DevDependencies = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    System.Collections.Generic.IDictionary<string, string> ExposedEnvironment = null,
    FrankenphpHooks Hooks = null,
    IResolvable|FrankenphpNetworkgroups[] Networkgroups = null,
    bool|IResolvable RedirectHttps = null,
    string Region = null,
    bool|IResolvable StickySessions = null,
    IResolvable|FrankenphpVhosts[] Vhosts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.biggestFlavor">BiggestFlavor</a></code> | <code>string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.name">Name</a></code> | <code>string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.smallestFlavor">SmallestFlavor</a></code> | <code>string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.appFolder">AppFolder</a></code> | <code>string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.buildFlavor">BuildFlavor</a></code> | <code>string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependencies">Dependencies</a></code> | <code>string[]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.description">Description</a></code> | <code>string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.devDependencies">DevDependencies</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Install development dependencies (Default: false). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.networkgroups">Networkgroups</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>[]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.redirectHttps">RedirectHttps</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.region">Region</a></code> | <code>string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.stickySessions">StickySessions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.vhosts">Vhosts</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>[]</code> | List of virtual hosts. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.biggestFlavor"></a>

```csharp
public string BiggestFlavor { get; set; }
```

- *Type:* string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#biggest_flavor Frankenphp#biggest_flavor}

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#max_instance_count Frankenphp#max_instance_count}

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#min_instance_count Frankenphp#min_instance_count}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#name Frankenphp#name}

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.smallestFlavor"></a>

```csharp
public string SmallestFlavor { get; set; }
```

- *Type:* string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#smallest_flavor Frankenphp#smallest_flavor}

---

##### `AppFolder`<sup>Optional</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.appFolder"></a>

```csharp
public string AppFolder { get; set; }
```

- *Type:* string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#app_folder Frankenphp#app_folder}

---

##### `BuildFlavor`<sup>Optional</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.buildFlavor"></a>

```csharp
public string BuildFlavor { get; set; }
```

- *Type:* string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#build_flavor Frankenphp#build_flavor}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependencies"></a>

```csharp
public string[] Dependencies { get; set; }
```

- *Type:* string[]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dependencies Frankenphp#dependencies}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.deployment"></a>

```csharp
public FrankenphpDeployment Deployment { get; set; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#deployment Frankenphp#deployment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#description Frankenphp#description}

---

##### `DevDependencies`<sup>Optional</sup> <a name="DevDependencies" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.devDependencies"></a>

```csharp
public bool|IResolvable DevDependencies { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Install development dependencies (Default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dev_dependencies Frankenphp#dev_dependencies}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#environment Frankenphp#environment}

---

##### `ExposedEnvironment`<sup>Optional</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.exposedEnvironment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#exposed_environment Frankenphp#exposed_environment}

---

##### `Hooks`<sup>Optional</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.hooks"></a>

```csharp
public FrankenphpHooks Hooks { get; set; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#hooks Frankenphp#hooks}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.networkgroups"></a>

```csharp
public IResolvable|FrankenphpNetworkgroups[] Networkgroups { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>[]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#networkgroups Frankenphp#networkgroups}

---

##### `RedirectHttps`<sup>Optional</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.redirectHttps"></a>

```csharp
public bool|IResolvable RedirectHttps { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#redirect_https Frankenphp#redirect_https}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#region Frankenphp#region}

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.stickySessions"></a>

```csharp
public bool|IResolvable StickySessions { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#sticky_sessions Frankenphp#sticky_sessions}

---

##### `Vhosts`<sup>Optional</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.vhosts"></a>

```csharp
public IResolvable|FrankenphpVhosts[] Vhosts { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>[]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#vhosts Frankenphp#vhosts}

---

### FrankenphpDeployment <a name="FrankenphpDeployment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpDeployment {
    string AuthenticationBasic = null,
    string Commit = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.authenticationBasic">AuthenticationBasic</a></code> | <code>string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.commit">Commit</a></code> | <code>string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.repository">Repository</a></code> | <code>string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `AuthenticationBasic`<sup>Optional</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.authenticationBasic"></a>

```csharp
public string AuthenticationBasic { get; set; }
```

- *Type:* string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#authentication_basic Frankenphp#authentication_basic}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#commit Frankenphp#commit}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#repository Frankenphp#repository}

---

### FrankenphpHooks <a name="FrankenphpHooks" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpHooks {
    string PostBuild = null,
    string PreBuild = null,
    string PreRun = null,
    string RunFailed = null,
    string RunSucceed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.postBuild">PostBuild</a></code> | <code>string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preBuild">PreBuild</a></code> | <code>string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preRun">PreRun</a></code> | <code>string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runFailed">RunFailed</a></code> | <code>string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runSucceed">RunSucceed</a></code> | <code>string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `PostBuild`<sup>Optional</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.postBuild"></a>

```csharp
public string PostBuild { get; set; }
```

- *Type:* string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#post_build Frankenphp#post_build}

---

##### `PreBuild`<sup>Optional</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preBuild"></a>

```csharp
public string PreBuild { get; set; }
```

- *Type:* string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#pre_build Frankenphp#pre_build}

---

##### `PreRun`<sup>Optional</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preRun"></a>

```csharp
public string PreRun { get; set; }
```

- *Type:* string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#pre_run Frankenphp#pre_run}

---

##### `RunFailed`<sup>Optional</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runFailed"></a>

```csharp
public string RunFailed { get; set; }
```

- *Type:* string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#run_failed Frankenphp#run_failed}

---

##### `RunSucceed`<sup>Optional</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runSucceed"></a>

```csharp
public string RunSucceed { get; set; }
```

- *Type:* string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#run_succeed Frankenphp#run_succeed}

---

### FrankenphpNetworkgroups <a name="FrankenphpNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpNetworkgroups {
    string Fqdn,
    string NetworkgroupId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.fqdn">Fqdn</a></code> | <code>string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#fqdn Frankenphp#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; set; }
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#networkgroup_id Frankenphp#networkgroup_id}

---

### FrankenphpVhosts <a name="FrankenphpVhosts" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpVhosts {
    string Fqdn,
    string PathBegin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.fqdn">Fqdn</a></code> | <code>string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.pathBegin">PathBegin</a></code> | <code>string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#fqdn Frankenphp#fqdn}

---

##### `PathBegin`<sup>Optional</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.pathBegin"></a>

```csharp
public string PathBegin { get; set; }
```

- *Type:* string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#path_begin Frankenphp#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### FrankenphpDeploymentOutputReference <a name="FrankenphpDeploymentOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetAuthenticationBasic">ResetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationBasic` <a name="ResetAuthenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetAuthenticationBasic"></a>

```csharp
private void ResetAuthenticationBasic()
```

##### `ResetCommit` <a name="ResetCommit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetRepository` <a name="ResetRepository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasicInput">AuthenticationBasicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasic">AuthenticationBasic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationBasicInput`<sup>Optional</sup> <a name="AuthenticationBasicInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasicInput"></a>

```csharp
public string AuthenticationBasicInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `AuthenticationBasic`<sup>Required</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasic"></a>

```csharp
public string AuthenticationBasic { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.internalValue"></a>

```csharp
public FrankenphpDeployment|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>|HashiCorp.Cdktf.IResolvable

---


### FrankenphpHooksOutputReference <a name="FrankenphpHooksOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPostBuild">ResetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreBuild">ResetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreRun">ResetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunFailed">ResetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunSucceed">ResetRunSucceed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostBuild` <a name="ResetPostBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPostBuild"></a>

```csharp
private void ResetPostBuild()
```

##### `ResetPreBuild` <a name="ResetPreBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreBuild"></a>

```csharp
private void ResetPreBuild()
```

##### `ResetPreRun` <a name="ResetPreRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreRun"></a>

```csharp
private void ResetPreRun()
```

##### `ResetRunFailed` <a name="ResetRunFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunFailed"></a>

```csharp
private void ResetRunFailed()
```

##### `ResetRunSucceed` <a name="ResetRunSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunSucceed"></a>

```csharp
private void ResetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuildInput">PostBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuildInput">PreBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRunInput">PreRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailedInput">RunFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceedInput">RunSucceedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuild">PostBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuild">PreBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRun">PreRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailed">RunFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceed">RunSucceed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostBuildInput`<sup>Optional</sup> <a name="PostBuildInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuildInput"></a>

```csharp
public string PostBuildInput { get; }
```

- *Type:* string

---

##### `PreBuildInput`<sup>Optional</sup> <a name="PreBuildInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuildInput"></a>

```csharp
public string PreBuildInput { get; }
```

- *Type:* string

---

##### `PreRunInput`<sup>Optional</sup> <a name="PreRunInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRunInput"></a>

```csharp
public string PreRunInput { get; }
```

- *Type:* string

---

##### `RunFailedInput`<sup>Optional</sup> <a name="RunFailedInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailedInput"></a>

```csharp
public string RunFailedInput { get; }
```

- *Type:* string

---

##### `RunSucceedInput`<sup>Optional</sup> <a name="RunSucceedInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceedInput"></a>

```csharp
public string RunSucceedInput { get; }
```

- *Type:* string

---

##### `PostBuild`<sup>Required</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuild"></a>

```csharp
public string PostBuild { get; }
```

- *Type:* string

---

##### `PreBuild`<sup>Required</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuild"></a>

```csharp
public string PreBuild { get; }
```

- *Type:* string

---

##### `PreRun`<sup>Required</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRun"></a>

```csharp
public string PreRun { get; }
```

- *Type:* string

---

##### `RunFailed`<sup>Required</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailed"></a>

```csharp
public string RunFailed { get; }
```

- *Type:* string

---

##### `RunSucceed`<sup>Required</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceed"></a>

```csharp
public string RunSucceed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.internalValue"></a>

```csharp
public FrankenphpHooks|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>|HashiCorp.Cdktf.IResolvable

---


### FrankenphpNetworkgroupsList <a name="FrankenphpNetworkgroupsList" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpNetworkgroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get"></a>

```csharp
private FrankenphpNetworkgroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.internalValue"></a>

```csharp
public IResolvable|FrankenphpNetworkgroups[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>[]

---


### FrankenphpNetworkgroupsOutputReference <a name="FrankenphpNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpNetworkgroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```csharp
public string NetworkgroupIdInput { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.internalValue"></a>

```csharp
public FrankenphpNetworkgroups|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups">FrankenphpNetworkgroups</a>|HashiCorp.Cdktf.IResolvable

---


### FrankenphpVhostsList <a name="FrankenphpVhostsList" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpVhostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get"></a>

```csharp
private FrankenphpVhostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.internalValue"></a>

```csharp
public IResolvable|FrankenphpVhosts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>[]

---


### FrankenphpVhostsOutputReference <a name="FrankenphpVhostsOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new FrankenphpVhostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resetPathBegin">ResetPathBegin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathBegin` <a name="ResetPathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resetPathBegin"></a>

```csharp
private void ResetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBeginInput">PathBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBegin">PathBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `PathBeginInput`<sup>Optional</sup> <a name="PathBeginInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBeginInput"></a>

```csharp
public string PathBeginInput { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `PathBegin`<sup>Required</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBegin"></a>

```csharp
public string PathBegin { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.internalValue"></a>

```csharp
public FrankenphpVhosts|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts">FrankenphpVhosts</a>|HashiCorp.Cdktf.IResolvable

---



