# `dotnet` Submodule <a name="`dotnet` Submodule" id="@clevercloud/cdktf-bindings.dotnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dotnet <a name="Dotnet" id="@clevercloud/cdktf-bindings.dotnet.Dotnet"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet clevercloud_dotnet}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new Dotnet(Construct Scope, string Id, DotnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig">DotnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig">DotnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks">PutHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putNetworkgroups">PutNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.putVhosts">PutVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetAppFolder">ResetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetBuildFlavor">ResetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetExposedEnvironment">ResetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetHooks">ResetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetNetworkgroups">ResetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProj">ResetProj</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRedirectHttps">ResetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetStickySessions">ResetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetTfm">ResetTfm</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVhosts">ResetVhosts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployment` <a name="PutDeployment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment"></a>

```csharp
private void PutDeployment(DotnetDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>

---

##### `PutHooks` <a name="PutHooks" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks"></a>

```csharp
private void PutHooks(DotnetHooks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putNetworkgroups"></a>

```csharp
private void PutNetworkgroups(IResolvable|DotnetNetworkgroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putNetworkgroups.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>[]

---

##### `PutVhosts` <a name="PutVhosts" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putVhosts"></a>

```csharp
private void PutVhosts(IResolvable|DotnetVhosts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.putVhosts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>[]

---

##### `ResetAppFolder` <a name="ResetAppFolder" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetAppFolder"></a>

```csharp
private void ResetAppFolder()
```

##### `ResetBuildFlavor` <a name="ResetBuildFlavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetBuildFlavor"></a>

```csharp
private void ResetBuildFlavor()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDependencies"></a>

```csharp
private void ResetDependencies()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDeployment"></a>

```csharp
private void ResetDeployment()
```

##### `ResetDescription` <a name="ResetDescription" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetExposedEnvironment` <a name="ResetExposedEnvironment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetExposedEnvironment"></a>

```csharp
private void ResetExposedEnvironment()
```

##### `ResetHooks` <a name="ResetHooks" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetHooks"></a>

```csharp
private void ResetHooks()
```

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetNetworkgroups"></a>

```csharp
private void ResetNetworkgroups()
```

##### `ResetProfile` <a name="ResetProfile" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetProj` <a name="ResetProj" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetProj"></a>

```csharp
private void ResetProj()
```

##### `ResetRedirectHttps` <a name="ResetRedirectHttps" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRedirectHttps"></a>

```csharp
private void ResetRedirectHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetStickySessions"></a>

```csharp
private void ResetStickySessions()
```

##### `ResetTfm` <a name="ResetTfm" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetTfm"></a>

```csharp
private void ResetTfm()
```

##### `ResetVersion` <a name="ResetVersion" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetVhosts` <a name="ResetVhosts" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.resetVhosts"></a>

```csharp
private void ResetVhosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Dotnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Dotnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Dotnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformResource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Dotnet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Dotnet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Dotnet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Dotnet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Dotnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Dotnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference">DotnetDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployUrl">DeployUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference">DotnetHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList">DotnetNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhosts">Vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList">DotnetVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolderInput">AppFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavorInput">BiggestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavorInput">BuildFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependenciesInput">DependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironmentInput">ExposedEnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooksInput">HooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.projInput">ProjInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttpsInput">RedirectHttpsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavorInput">SmallestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessionsInput">StickySessionsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfmInput">TfmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhostsInput">VhostsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolder">AppFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavor">BiggestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavor">BuildFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependencies">Dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.proj">Proj</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttps">RedirectHttps</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavor">SmallestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessions">StickySessions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfm">Tfm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployment"></a>

```csharp
public DotnetDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference">DotnetDeploymentOutputReference</a>

---

##### `DeployUrl`<sup>Required</sup> <a name="DeployUrl" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deployUrl"></a>

```csharp
public string DeployUrl { get; }
```

- *Type:* string

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooks"></a>

```csharp
public DotnetHooksOutputReference Hooks { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference">DotnetHooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroups"></a>

```csharp
public DotnetNetworkgroupsList Networkgroups { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList">DotnetNetworkgroupsList</a>

---

##### `Vhosts`<sup>Required</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhosts"></a>

```csharp
public DotnetVhostsList Vhosts { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList">DotnetVhostsList</a>

---

##### `AppFolderInput`<sup>Optional</sup> <a name="AppFolderInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolderInput"></a>

```csharp
public string AppFolderInput { get; }
```

- *Type:* string

---

##### `BiggestFlavorInput`<sup>Optional</sup> <a name="BiggestFlavorInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavorInput"></a>

```csharp
public string BiggestFlavorInput { get; }
```

- *Type:* string

---

##### `BuildFlavorInput`<sup>Optional</sup> <a name="BuildFlavorInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavorInput"></a>

```csharp
public string BuildFlavorInput { get; }
```

- *Type:* string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependenciesInput"></a>

```csharp
public string[] DependenciesInput { get; }
```

- *Type:* string[]

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.deploymentInput"></a>

```csharp
public DotnetDeployment|IResolvable DeploymentInput { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>|HashiCorp.Cdktf.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExposedEnvironmentInput`<sup>Optional</sup> <a name="ExposedEnvironmentInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.hooksInput"></a>

```csharp
public DotnetHooks|IResolvable HooksInput { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>|HashiCorp.Cdktf.IResolvable

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.networkgroupsInput"></a>

```csharp
public IResolvable|DotnetNetworkgroups[] NetworkgroupsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>[]

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `ProjInput`<sup>Optional</sup> <a name="ProjInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.projInput"></a>

```csharp
public string ProjInput { get; }
```

- *Type:* string

---

##### `RedirectHttpsInput`<sup>Optional</sup> <a name="RedirectHttpsInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttpsInput"></a>

```csharp
public bool|IResolvable RedirectHttpsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SmallestFlavorInput`<sup>Optional</sup> <a name="SmallestFlavorInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavorInput"></a>

```csharp
public string SmallestFlavorInput { get; }
```

- *Type:* string

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessionsInput"></a>

```csharp
public bool|IResolvable StickySessionsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TfmInput`<sup>Optional</sup> <a name="TfmInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfmInput"></a>

```csharp
public string TfmInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VhostsInput`<sup>Optional</sup> <a name="VhostsInput" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.vhostsInput"></a>

```csharp
public IResolvable|DotnetVhosts[] VhostsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>[]

---

##### `AppFolder`<sup>Required</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.appFolder"></a>

```csharp
public string AppFolder { get; }
```

- *Type:* string

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.biggestFlavor"></a>

```csharp
public string BiggestFlavor { get; }
```

- *Type:* string

---

##### `BuildFlavor`<sup>Required</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.buildFlavor"></a>

```csharp
public string BuildFlavor { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.dependencies"></a>

```csharp
public string[] Dependencies { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExposedEnvironment`<sup>Required</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.exposedEnvironment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Proj`<sup>Required</sup> <a name="Proj" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.proj"></a>

```csharp
public string Proj { get; }
```

- *Type:* string

---

##### `RedirectHttps`<sup>Required</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.redirectHttps"></a>

```csharp
public bool|IResolvable RedirectHttps { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.smallestFlavor"></a>

```csharp
public string SmallestFlavor { get; }
```

- *Type:* string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.stickySessions"></a>

```csharp
public bool|IResolvable StickySessions { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Tfm`<sup>Required</sup> <a name="Tfm" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfm"></a>

```csharp
public string Tfm { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.dotnet.Dotnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DotnetConfig <a name="DotnetConfig" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetConfig {
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
    DotnetDeployment Deployment = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    System.Collections.Generic.IDictionary<string, string> ExposedEnvironment = null,
    DotnetHooks Hooks = null,
    IResolvable|DotnetNetworkgroups[] Networkgroups = null,
    string Profile = null,
    string Proj = null,
    bool|IResolvable RedirectHttps = null,
    string Region = null,
    bool|IResolvable StickySessions = null,
    string Tfm = null,
    string Version = null,
    IResolvable|DotnetVhosts[] Vhosts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.biggestFlavor">BiggestFlavor</a></code> | <code>string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.name">Name</a></code> | <code>string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.smallestFlavor">SmallestFlavor</a></code> | <code>string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.appFolder">AppFolder</a></code> | <code>string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.buildFlavor">BuildFlavor</a></code> | <code>string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependencies">Dependencies</a></code> | <code>string[]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.description">Description</a></code> | <code>string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.networkgroups">Networkgroups</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>[]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.profile">Profile</a></code> | <code>string</code> | Override the build configuration settings in your project. Default: Release. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.proj">Proj</a></code> | <code>string</code> | The name of your project file to use for the build, without the .csproj / .fsproj / .vbproj extension. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.redirectHttps">RedirectHttps</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.region">Region</a></code> | <code>string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.stickySessions">StickySessions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.tfm">Tfm</a></code> | <code>string</code> | Compiles for a specific framework. The framework must be defined in the project file. Example : net5.0. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.version">Version</a></code> | <code>string</code> | Choose the .NET Core version between 6.0, 8.0, 9.0. Default: '8.0'. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.vhosts">Vhosts</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>[]</code> | List of virtual hosts. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.biggestFlavor"></a>

```csharp
public string BiggestFlavor { get; set; }
```

- *Type:* string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#biggest_flavor Dotnet#biggest_flavor}

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#max_instance_count Dotnet#max_instance_count}

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#min_instance_count Dotnet#min_instance_count}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#name Dotnet#name}

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.smallestFlavor"></a>

```csharp
public string SmallestFlavor { get; set; }
```

- *Type:* string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#smallest_flavor Dotnet#smallest_flavor}

---

##### `AppFolder`<sup>Optional</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.appFolder"></a>

```csharp
public string AppFolder { get; set; }
```

- *Type:* string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#app_folder Dotnet#app_folder}

---

##### `BuildFlavor`<sup>Optional</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.buildFlavor"></a>

```csharp
public string BuildFlavor { get; set; }
```

- *Type:* string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#build_flavor Dotnet#build_flavor}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.dependencies"></a>

```csharp
public string[] Dependencies { get; set; }
```

- *Type:* string[]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#dependencies Dotnet#dependencies}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.deployment"></a>

```csharp
public DotnetDeployment Deployment { get; set; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#deployment Dotnet#deployment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#description Dotnet#description}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#environment Dotnet#environment}

---

##### `ExposedEnvironment`<sup>Optional</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.exposedEnvironment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#exposed_environment Dotnet#exposed_environment}

---

##### `Hooks`<sup>Optional</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.hooks"></a>

```csharp
public DotnetHooks Hooks { get; set; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#hooks Dotnet#hooks}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.networkgroups"></a>

```csharp
public IResolvable|DotnetNetworkgroups[] Networkgroups { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>[]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#networkgroups Dotnet#networkgroups}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Override the build configuration settings in your project. Default: Release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#profile Dotnet#profile}

---

##### `Proj`<sup>Optional</sup> <a name="Proj" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.proj"></a>

```csharp
public string Proj { get; set; }
```

- *Type:* string

The name of your project file to use for the build, without the .csproj / .fsproj / .vbproj extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#proj Dotnet#proj}

---

##### `RedirectHttps`<sup>Optional</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.redirectHttps"></a>

```csharp
public bool|IResolvable RedirectHttps { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#redirect_https Dotnet#redirect_https}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#region Dotnet#region}

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.stickySessions"></a>

```csharp
public bool|IResolvable StickySessions { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#sticky_sessions Dotnet#sticky_sessions}

---

##### `Tfm`<sup>Optional</sup> <a name="Tfm" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.tfm"></a>

```csharp
public string Tfm { get; set; }
```

- *Type:* string

Compiles for a specific framework. The framework must be defined in the project file. Example : net5.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#tfm Dotnet#tfm}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Choose the .NET Core version between 6.0, 8.0, 9.0. Default: '8.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#version Dotnet#version}

---

##### `Vhosts`<sup>Optional</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.dotnet.DotnetConfig.property.vhosts"></a>

```csharp
public IResolvable|DotnetVhosts[] Vhosts { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>[]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#vhosts Dotnet#vhosts}

---

### DotnetDeployment <a name="DotnetDeployment" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetDeployment {
    string AuthenticationBasic = null,
    string Commit = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.authenticationBasic">AuthenticationBasic</a></code> | <code>string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.commit">Commit</a></code> | <code>string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.repository">Repository</a></code> | <code>string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `AuthenticationBasic`<sup>Optional</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.authenticationBasic"></a>

```csharp
public string AuthenticationBasic { get; set; }
```

- *Type:* string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#authentication_basic Dotnet#authentication_basic}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#commit Dotnet#commit}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeployment.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#repository Dotnet#repository}

---

### DotnetHooks <a name="DotnetHooks" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetHooks {
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
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.postBuild">PostBuild</a></code> | <code>string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preBuild">PreBuild</a></code> | <code>string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preRun">PreRun</a></code> | <code>string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runFailed">RunFailed</a></code> | <code>string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runSucceed">RunSucceed</a></code> | <code>string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `PostBuild`<sup>Optional</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.postBuild"></a>

```csharp
public string PostBuild { get; set; }
```

- *Type:* string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#post_build Dotnet#post_build}

---

##### `PreBuild`<sup>Optional</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preBuild"></a>

```csharp
public string PreBuild { get; set; }
```

- *Type:* string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#pre_build Dotnet#pre_build}

---

##### `PreRun`<sup>Optional</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.preRun"></a>

```csharp
public string PreRun { get; set; }
```

- *Type:* string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#pre_run Dotnet#pre_run}

---

##### `RunFailed`<sup>Optional</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runFailed"></a>

```csharp
public string RunFailed { get; set; }
```

- *Type:* string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#run_failed Dotnet#run_failed}

---

##### `RunSucceed`<sup>Optional</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooks.property.runSucceed"></a>

```csharp
public string RunSucceed { get; set; }
```

- *Type:* string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#run_succeed Dotnet#run_succeed}

---

### DotnetNetworkgroups <a name="DotnetNetworkgroups" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetNetworkgroups {
    string Fqdn,
    string NetworkgroupId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.fqdn">Fqdn</a></code> | <code>string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#fqdn Dotnet#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; set; }
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#networkgroup_id Dotnet#networkgroup_id}

---

### DotnetVhosts <a name="DotnetVhosts" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetVhosts {
    string Fqdn,
    string PathBegin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.fqdn">Fqdn</a></code> | <code>string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.pathBegin">PathBegin</a></code> | <code>string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#fqdn Dotnet#fqdn}

---

##### `PathBegin`<sup>Optional</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhosts.property.pathBegin"></a>

```csharp
public string PathBegin { get; set; }
```

- *Type:* string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/dotnet#path_begin Dotnet#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### DotnetDeploymentOutputReference <a name="DotnetDeploymentOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetAuthenticationBasic">ResetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationBasic` <a name="ResetAuthenticationBasic" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetAuthenticationBasic"></a>

```csharp
private void ResetAuthenticationBasic()
```

##### `ResetCommit` <a name="ResetCommit" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetRepository` <a name="ResetRepository" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasicInput">AuthenticationBasicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasic">AuthenticationBasic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationBasicInput`<sup>Optional</sup> <a name="AuthenticationBasicInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasicInput"></a>

```csharp
public string AuthenticationBasicInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `AuthenticationBasic`<sup>Required</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.authenticationBasic"></a>

```csharp
public string AuthenticationBasic { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.dotnet.DotnetDeploymentOutputReference.property.internalValue"></a>

```csharp
public DotnetDeployment|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetDeployment">DotnetDeployment</a>|HashiCorp.Cdktf.IResolvable

---


### DotnetHooksOutputReference <a name="DotnetHooksOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPostBuild">ResetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreBuild">ResetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreRun">ResetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunFailed">ResetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunSucceed">ResetRunSucceed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostBuild` <a name="ResetPostBuild" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPostBuild"></a>

```csharp
private void ResetPostBuild()
```

##### `ResetPreBuild` <a name="ResetPreBuild" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreBuild"></a>

```csharp
private void ResetPreBuild()
```

##### `ResetPreRun` <a name="ResetPreRun" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetPreRun"></a>

```csharp
private void ResetPreRun()
```

##### `ResetRunFailed` <a name="ResetRunFailed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunFailed"></a>

```csharp
private void ResetRunFailed()
```

##### `ResetRunSucceed` <a name="ResetRunSucceed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.resetRunSucceed"></a>

```csharp
private void ResetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuildInput">PostBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuildInput">PreBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRunInput">PreRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailedInput">RunFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceedInput">RunSucceedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuild">PostBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuild">PreBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRun">PreRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailed">RunFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceed">RunSucceed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostBuildInput`<sup>Optional</sup> <a name="PostBuildInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuildInput"></a>

```csharp
public string PostBuildInput { get; }
```

- *Type:* string

---

##### `PreBuildInput`<sup>Optional</sup> <a name="PreBuildInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuildInput"></a>

```csharp
public string PreBuildInput { get; }
```

- *Type:* string

---

##### `PreRunInput`<sup>Optional</sup> <a name="PreRunInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRunInput"></a>

```csharp
public string PreRunInput { get; }
```

- *Type:* string

---

##### `RunFailedInput`<sup>Optional</sup> <a name="RunFailedInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailedInput"></a>

```csharp
public string RunFailedInput { get; }
```

- *Type:* string

---

##### `RunSucceedInput`<sup>Optional</sup> <a name="RunSucceedInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceedInput"></a>

```csharp
public string RunSucceedInput { get; }
```

- *Type:* string

---

##### `PostBuild`<sup>Required</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.postBuild"></a>

```csharp
public string PostBuild { get; }
```

- *Type:* string

---

##### `PreBuild`<sup>Required</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preBuild"></a>

```csharp
public string PreBuild { get; }
```

- *Type:* string

---

##### `PreRun`<sup>Required</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.preRun"></a>

```csharp
public string PreRun { get; }
```

- *Type:* string

---

##### `RunFailed`<sup>Required</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runFailed"></a>

```csharp
public string RunFailed { get; }
```

- *Type:* string

---

##### `RunSucceed`<sup>Required</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.runSucceed"></a>

```csharp
public string RunSucceed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.dotnet.DotnetHooksOutputReference.property.internalValue"></a>

```csharp
public DotnetHooks|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetHooks">DotnetHooks</a>|HashiCorp.Cdktf.IResolvable

---


### DotnetNetworkgroupsList <a name="DotnetNetworkgroupsList" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetNetworkgroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.get"></a>

```csharp
private DotnetNetworkgroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsList.property.internalValue"></a>

```csharp
public IResolvable|DotnetNetworkgroups[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>[]

---


### DotnetNetworkgroupsOutputReference <a name="DotnetNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetNetworkgroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```csharp
public string NetworkgroupIdInput { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroupsOutputReference.property.internalValue"></a>

```csharp
public DotnetNetworkgroups|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetNetworkgroups">DotnetNetworkgroups</a>|HashiCorp.Cdktf.IResolvable

---


### DotnetVhostsList <a name="DotnetVhostsList" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetVhostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.get"></a>

```csharp
private DotnetVhostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsList.property.internalValue"></a>

```csharp
public IResolvable|DotnetVhosts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>[]

---


### DotnetVhostsOutputReference <a name="DotnetVhostsOutputReference" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DotnetVhostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resetPathBegin">ResetPathBegin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathBegin` <a name="ResetPathBegin" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.resetPathBegin"></a>

```csharp
private void ResetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBeginInput">PathBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBegin">PathBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `PathBeginInput`<sup>Optional</sup> <a name="PathBeginInput" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBeginInput"></a>

```csharp
public string PathBeginInput { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `PathBegin`<sup>Required</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.pathBegin"></a>

```csharp
public string PathBegin { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.dotnet.DotnetVhostsOutputReference.property.internalValue"></a>

```csharp
public DotnetVhosts|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.dotnet.DotnetVhosts">DotnetVhosts</a>|HashiCorp.Cdktf.IResolvable

---



