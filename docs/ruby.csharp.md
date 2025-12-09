# `ruby` Submodule <a name="`ruby` Submodule" id="@clevercloud/cdktf-bindings.ruby"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ruby <a name="Ruby" id="@clevercloud/cdktf-bindings.ruby.Ruby"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby clevercloud_ruby}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new Ruby(Construct Scope, string Id, RubyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig">RubyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig">RubyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putHooks">PutHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups">PutNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts">PutVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetAppFolder">ResetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetBuildFlavor">ResetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableGzipCompression">ResetEnableGzipCompression</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableSidekiq">ResetEnableSidekiq</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetExposedEnvironment">ResetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetGzipTypes">ResetGzipTypes</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetHooks">ResetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetHttpBasicAuth">ResetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNetworkgroups">ResetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBuffers">ResetNginxProxyBuffers</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBufferSize">ResetNginxProxyBufferSize</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxReadTimeout">ResetNginxReadTimeout</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRackEnv">ResetRackEnv</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRackupServer">ResetRackupServer</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRailsEnv">ResetRailsEnv</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRakeGoals">ResetRakeGoals</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRedirectHttps">ResetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRubyVersion">ResetRubyVersion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetSidekiqFiles">ResetSidekiqFiles</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticFilesPath">ResetStaticFilesPath</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticUrlPrefix">ResetStaticUrlPrefix</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticWebroot">ResetStaticWebroot</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStickySessions">ResetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetVhosts">ResetVhosts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.Ruby.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.ruby.Ruby.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.ruby.Ruby.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.ruby.Ruby.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.ruby.Ruby.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployment` <a name="PutDeployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment"></a>

```csharp
private void PutDeployment(RubyDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>

---

##### `PutHooks` <a name="PutHooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.putHooks"></a>

```csharp
private void PutHooks(RubyHooks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups"></a>

```csharp
private void PutNetworkgroups(IResolvable|RubyNetworkgroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

---

##### `PutVhosts` <a name="PutVhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts"></a>

```csharp
private void PutVhosts(IResolvable|RubyVhosts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

---

##### `ResetAppFolder` <a name="ResetAppFolder" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetAppFolder"></a>

```csharp
private void ResetAppFolder()
```

##### `ResetBuildFlavor` <a name="ResetBuildFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetBuildFlavor"></a>

```csharp
private void ResetBuildFlavor()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDependencies"></a>

```csharp
private void ResetDependencies()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDeployment"></a>

```csharp
private void ResetDeployment()
```

##### `ResetDescription` <a name="ResetDescription" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableGzipCompression` <a name="ResetEnableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableGzipCompression"></a>

```csharp
private void ResetEnableGzipCompression()
```

##### `ResetEnableSidekiq` <a name="ResetEnableSidekiq" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableSidekiq"></a>

```csharp
private void ResetEnableSidekiq()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetExposedEnvironment` <a name="ResetExposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetExposedEnvironment"></a>

```csharp
private void ResetExposedEnvironment()
```

##### `ResetGzipTypes` <a name="ResetGzipTypes" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetGzipTypes"></a>

```csharp
private void ResetGzipTypes()
```

##### `ResetHooks` <a name="ResetHooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetHooks"></a>

```csharp
private void ResetHooks()
```

##### `ResetHttpBasicAuth` <a name="ResetHttpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetHttpBasicAuth"></a>

```csharp
private void ResetHttpBasicAuth()
```

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNetworkgroups"></a>

```csharp
private void ResetNetworkgroups()
```

##### `ResetNginxProxyBuffers` <a name="ResetNginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBuffers"></a>

```csharp
private void ResetNginxProxyBuffers()
```

##### `ResetNginxProxyBufferSize` <a name="ResetNginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBufferSize"></a>

```csharp
private void ResetNginxProxyBufferSize()
```

##### `ResetNginxReadTimeout` <a name="ResetNginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxReadTimeout"></a>

```csharp
private void ResetNginxReadTimeout()
```

##### `ResetRackEnv` <a name="ResetRackEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRackEnv"></a>

```csharp
private void ResetRackEnv()
```

##### `ResetRackupServer` <a name="ResetRackupServer" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRackupServer"></a>

```csharp
private void ResetRackupServer()
```

##### `ResetRailsEnv` <a name="ResetRailsEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRailsEnv"></a>

```csharp
private void ResetRailsEnv()
```

##### `ResetRakeGoals` <a name="ResetRakeGoals" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRakeGoals"></a>

```csharp
private void ResetRakeGoals()
```

##### `ResetRedirectHttps` <a name="ResetRedirectHttps" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRedirectHttps"></a>

```csharp
private void ResetRedirectHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRubyVersion` <a name="ResetRubyVersion" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRubyVersion"></a>

```csharp
private void ResetRubyVersion()
```

##### `ResetSidekiqFiles` <a name="ResetSidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetSidekiqFiles"></a>

```csharp
private void ResetSidekiqFiles()
```

##### `ResetStaticFilesPath` <a name="ResetStaticFilesPath" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticFilesPath"></a>

```csharp
private void ResetStaticFilesPath()
```

##### `ResetStaticUrlPrefix` <a name="ResetStaticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticUrlPrefix"></a>

```csharp
private void ResetStaticUrlPrefix()
```

##### `ResetStaticWebroot` <a name="ResetStaticWebroot" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticWebroot"></a>

```csharp
private void ResetStaticWebroot()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStickySessions"></a>

```csharp
private void ResetStickySessions()
```

##### `ResetVhosts` <a name="ResetVhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetVhosts"></a>

```csharp
private void ResetVhosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ruby resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.ruby.Ruby.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Ruby.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.ruby.Ruby.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Ruby.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Ruby.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

Ruby.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Ruby resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ruby to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ruby that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Ruby to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference">RubyDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deployUrl">DeployUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference">RubyHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList">RubyNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.vhosts">Vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList">RubyVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolderInput">AppFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavorInput">BiggestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavorInput">BuildFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependenciesInput">DependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompressionInput">EnableGzipCompressionInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiqInput">EnableSidekiqInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironmentInput">ExposedEnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypesInput">GzipTypesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.hooksInput">HooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuthInput">HttpBasicAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffersInput">NginxProxyBuffersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSizeInput">NginxProxyBufferSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeoutInput">NginxReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnvInput">RackEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServerInput">RackupServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnvInput">RailsEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoalsInput">RakeGoalsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttpsInput">RedirectHttpsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersionInput">RubyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFilesInput">SidekiqFilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavorInput">SmallestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPathInput">StaticFilesPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefixInput">StaticUrlPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebrootInput">StaticWebrootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessionsInput">StickySessionsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.vhostsInput">VhostsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolder">AppFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavor">BiggestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavor">BuildFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependencies">Dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompression">EnableGzipCompression</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiq">EnableSidekiq</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypes">GzipTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuth">HttpBasicAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffers">NginxProxyBuffers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSize">NginxProxyBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeout">NginxReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnv">RackEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServer">RackupServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnv">RailsEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoals">RakeGoals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttps">RedirectHttps</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersion">RubyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFiles">SidekiqFiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavor">SmallestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPath">StaticFilesPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefix">StaticUrlPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebroot">StaticWebroot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessions">StickySessions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deployment"></a>

```csharp
public RubyDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference">RubyDeploymentOutputReference</a>

---

##### `DeployUrl`<sup>Required</sup> <a name="DeployUrl" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deployUrl"></a>

```csharp
public string DeployUrl { get; }
```

- *Type:* string

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.hooks"></a>

```csharp
public RubyHooksOutputReference Hooks { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference">RubyHooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroups"></a>

```csharp
public RubyNetworkgroupsList Networkgroups { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList">RubyNetworkgroupsList</a>

---

##### `Vhosts`<sup>Required</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.vhosts"></a>

```csharp
public RubyVhostsList Vhosts { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList">RubyVhostsList</a>

---

##### `AppFolderInput`<sup>Optional</sup> <a name="AppFolderInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolderInput"></a>

```csharp
public string AppFolderInput { get; }
```

- *Type:* string

---

##### `BiggestFlavorInput`<sup>Optional</sup> <a name="BiggestFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavorInput"></a>

```csharp
public string BiggestFlavorInput { get; }
```

- *Type:* string

---

##### `BuildFlavorInput`<sup>Optional</sup> <a name="BuildFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavorInput"></a>

```csharp
public string BuildFlavorInput { get; }
```

- *Type:* string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependenciesInput"></a>

```csharp
public string[] DependenciesInput { get; }
```

- *Type:* string[]

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deploymentInput"></a>

```csharp
public RubyDeployment|IResolvable DeploymentInput { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>|HashiCorp.Cdktf.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableGzipCompressionInput`<sup>Optional</sup> <a name="EnableGzipCompressionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompressionInput"></a>

```csharp
public bool|IResolvable EnableGzipCompressionInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableSidekiqInput`<sup>Optional</sup> <a name="EnableSidekiqInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiqInput"></a>

```csharp
public bool|IResolvable EnableSidekiqInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExposedEnvironmentInput`<sup>Optional</sup> <a name="ExposedEnvironmentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GzipTypesInput`<sup>Optional</sup> <a name="GzipTypesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypesInput"></a>

```csharp
public string GzipTypesInput { get; }
```

- *Type:* string

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.hooksInput"></a>

```csharp
public RubyHooks|IResolvable HooksInput { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>|HashiCorp.Cdktf.IResolvable

---

##### `HttpBasicAuthInput`<sup>Optional</sup> <a name="HttpBasicAuthInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuthInput"></a>

```csharp
public string HttpBasicAuthInput { get; }
```

- *Type:* string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroupsInput"></a>

```csharp
public IResolvable|RubyNetworkgroups[] NetworkgroupsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

---

##### `NginxProxyBuffersInput`<sup>Optional</sup> <a name="NginxProxyBuffersInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffersInput"></a>

```csharp
public string NginxProxyBuffersInput { get; }
```

- *Type:* string

---

##### `NginxProxyBufferSizeInput`<sup>Optional</sup> <a name="NginxProxyBufferSizeInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSizeInput"></a>

```csharp
public string NginxProxyBufferSizeInput { get; }
```

- *Type:* string

---

##### `NginxReadTimeoutInput`<sup>Optional</sup> <a name="NginxReadTimeoutInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeoutInput"></a>

```csharp
public double NginxReadTimeoutInput { get; }
```

- *Type:* double

---

##### `RackEnvInput`<sup>Optional</sup> <a name="RackEnvInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnvInput"></a>

```csharp
public string RackEnvInput { get; }
```

- *Type:* string

---

##### `RackupServerInput`<sup>Optional</sup> <a name="RackupServerInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServerInput"></a>

```csharp
public string RackupServerInput { get; }
```

- *Type:* string

---

##### `RailsEnvInput`<sup>Optional</sup> <a name="RailsEnvInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnvInput"></a>

```csharp
public string RailsEnvInput { get; }
```

- *Type:* string

---

##### `RakeGoalsInput`<sup>Optional</sup> <a name="RakeGoalsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoalsInput"></a>

```csharp
public string RakeGoalsInput { get; }
```

- *Type:* string

---

##### `RedirectHttpsInput`<sup>Optional</sup> <a name="RedirectHttpsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttpsInput"></a>

```csharp
public bool|IResolvable RedirectHttpsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RubyVersionInput`<sup>Optional</sup> <a name="RubyVersionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersionInput"></a>

```csharp
public string RubyVersionInput { get; }
```

- *Type:* string

---

##### `SidekiqFilesInput`<sup>Optional</sup> <a name="SidekiqFilesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFilesInput"></a>

```csharp
public string SidekiqFilesInput { get; }
```

- *Type:* string

---

##### `SmallestFlavorInput`<sup>Optional</sup> <a name="SmallestFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavorInput"></a>

```csharp
public string SmallestFlavorInput { get; }
```

- *Type:* string

---

##### `StaticFilesPathInput`<sup>Optional</sup> <a name="StaticFilesPathInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPathInput"></a>

```csharp
public string StaticFilesPathInput { get; }
```

- *Type:* string

---

##### `StaticUrlPrefixInput`<sup>Optional</sup> <a name="StaticUrlPrefixInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefixInput"></a>

```csharp
public string StaticUrlPrefixInput { get; }
```

- *Type:* string

---

##### `StaticWebrootInput`<sup>Optional</sup> <a name="StaticWebrootInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebrootInput"></a>

```csharp
public string StaticWebrootInput { get; }
```

- *Type:* string

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessionsInput"></a>

```csharp
public bool|IResolvable StickySessionsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `VhostsInput`<sup>Optional</sup> <a name="VhostsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.vhostsInput"></a>

```csharp
public IResolvable|RubyVhosts[] VhostsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

---

##### `AppFolder`<sup>Required</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolder"></a>

```csharp
public string AppFolder { get; }
```

- *Type:* string

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavor"></a>

```csharp
public string BiggestFlavor { get; }
```

- *Type:* string

---

##### `BuildFlavor`<sup>Required</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavor"></a>

```csharp
public string BuildFlavor { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependencies"></a>

```csharp
public string[] Dependencies { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableGzipCompression`<sup>Required</sup> <a name="EnableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompression"></a>

```csharp
public bool|IResolvable EnableGzipCompression { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableSidekiq`<sup>Required</sup> <a name="EnableSidekiq" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiq"></a>

```csharp
public bool|IResolvable EnableSidekiq { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExposedEnvironment`<sup>Required</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GzipTypes`<sup>Required</sup> <a name="GzipTypes" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypes"></a>

```csharp
public string GzipTypes { get; }
```

- *Type:* string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuth"></a>

```csharp
public string HttpBasicAuth { get; }
```

- *Type:* string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NginxProxyBuffers`<sup>Required</sup> <a name="NginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffers"></a>

```csharp
public string NginxProxyBuffers { get; }
```

- *Type:* string

---

##### `NginxProxyBufferSize`<sup>Required</sup> <a name="NginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSize"></a>

```csharp
public string NginxProxyBufferSize { get; }
```

- *Type:* string

---

##### `NginxReadTimeout`<sup>Required</sup> <a name="NginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeout"></a>

```csharp
public double NginxReadTimeout { get; }
```

- *Type:* double

---

##### `RackEnv`<sup>Required</sup> <a name="RackEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnv"></a>

```csharp
public string RackEnv { get; }
```

- *Type:* string

---

##### `RackupServer`<sup>Required</sup> <a name="RackupServer" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServer"></a>

```csharp
public string RackupServer { get; }
```

- *Type:* string

---

##### `RailsEnv`<sup>Required</sup> <a name="RailsEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnv"></a>

```csharp
public string RailsEnv { get; }
```

- *Type:* string

---

##### `RakeGoals`<sup>Required</sup> <a name="RakeGoals" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoals"></a>

```csharp
public string RakeGoals { get; }
```

- *Type:* string

---

##### `RedirectHttps`<sup>Required</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttps"></a>

```csharp
public bool|IResolvable RedirectHttps { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RubyVersion`<sup>Required</sup> <a name="RubyVersion" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersion"></a>

```csharp
public string RubyVersion { get; }
```

- *Type:* string

---

##### `SidekiqFiles`<sup>Required</sup> <a name="SidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFiles"></a>

```csharp
public string SidekiqFiles { get; }
```

- *Type:* string

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavor"></a>

```csharp
public string SmallestFlavor { get; }
```

- *Type:* string

---

##### `StaticFilesPath`<sup>Required</sup> <a name="StaticFilesPath" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPath"></a>

```csharp
public string StaticFilesPath { get; }
```

- *Type:* string

---

##### `StaticUrlPrefix`<sup>Required</sup> <a name="StaticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefix"></a>

```csharp
public string StaticUrlPrefix { get; }
```

- *Type:* string

---

##### `StaticWebroot`<sup>Required</sup> <a name="StaticWebroot" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebroot"></a>

```csharp
public string StaticWebroot { get; }
```

- *Type:* string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessions"></a>

```csharp
public bool|IResolvable StickySessions { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RubyConfig <a name="RubyConfig" id="@clevercloud/cdktf-bindings.ruby.RubyConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyConfig {
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
    RubyDeployment Deployment = null,
    string Description = null,
    bool|IResolvable EnableGzipCompression = null,
    bool|IResolvable EnableSidekiq = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    System.Collections.Generic.IDictionary<string, string> ExposedEnvironment = null,
    string GzipTypes = null,
    RubyHooks Hooks = null,
    string HttpBasicAuth = null,
    IResolvable|RubyNetworkgroups[] Networkgroups = null,
    string NginxProxyBuffers = null,
    string NginxProxyBufferSize = null,
    double NginxReadTimeout = null,
    string RackEnv = null,
    string RackupServer = null,
    string RailsEnv = null,
    string RakeGoals = null,
    bool|IResolvable RedirectHttps = null,
    string Region = null,
    string RubyVersion = null,
    string SidekiqFiles = null,
    string StaticFilesPath = null,
    string StaticUrlPrefix = null,
    string StaticWebroot = null,
    bool|IResolvable StickySessions = null,
    IResolvable|RubyVhosts[] Vhosts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.biggestFlavor">BiggestFlavor</a></code> | <code>string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.name">Name</a></code> | <code>string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.smallestFlavor">SmallestFlavor</a></code> | <code>string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.appFolder">AppFolder</a></code> | <code>string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.buildFlavor">BuildFlavor</a></code> | <code>string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependencies">Dependencies</a></code> | <code>string[]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.description">Description</a></code> | <code>string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableGzipCompression">EnableGzipCompression</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true to gzip-compress through Nginx. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableSidekiq">EnableSidekiq</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable Sidekiq background process. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.gzipTypes">GzipTypes</a></code> | <code>string</code> | Set the mime types to compress (default: 'text/* application/json application/xml application/javascript image/svg+xml'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.httpBasicAuth">HttpBasicAuth</a></code> | <code>string</code> | Restrict HTTP access to your application (format: 'login:password'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.networkgroups">Networkgroups</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBuffers">NginxProxyBuffers</a></code> | <code>string</code> | Sets the number and size of the buffers used for reading a response from the proxied server. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBufferSize">NginxProxyBufferSize</a></code> | <code>string</code> | Sets the size of the buffer used for reading the first part of the response received from the proxied server. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxReadTimeout">NginxReadTimeout</a></code> | <code>double</code> | Read timeout in seconds (default: 300). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackEnv">RackEnv</a></code> | <code>string</code> | Rack environment variable. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackupServer">RackupServer</a></code> | <code>string</code> | Server to use for serving the Ruby application (default: puma). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.railsEnv">RailsEnv</a></code> | <code>string</code> | Rails environment variable. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rakeGoals">RakeGoals</a></code> | <code>string</code> | Comma-separated list of rake goals to execute (e.g., 'db:migrate,assets:precompile'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.redirectHttps">RedirectHttps</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.region">Region</a></code> | <code>string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rubyVersion">RubyVersion</a></code> | <code>string</code> | Ruby version to use (e.g., '3.3', '3.3.1'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.sidekiqFiles">SidekiqFiles</a></code> | <code>string</code> | Specify a list of Sidekiq configuration files (e.g., './config/sidekiq_1.yml,./config/sidekiq_2.yml'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticFilesPath">StaticFilesPath</a></code> | <code>string</code> | Relative path to where your static files are stored. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticUrlPrefix">StaticUrlPrefix</a></code> | <code>string</code> | The URL path under which you want to serve static files, usually /public. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticWebroot">StaticWebroot</a></code> | <code>string</code> | Path to the web content to serve, relative to the root of your application. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.stickySessions">StickySessions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.vhosts">Vhosts</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]</code> | List of virtual hosts. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.biggestFlavor"></a>

```csharp
public string BiggestFlavor { get; set; }
```

- *Type:* string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#biggest_flavor Ruby#biggest_flavor}

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#max_instance_count Ruby#max_instance_count}

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#min_instance_count Ruby#min_instance_count}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#name Ruby#name}

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.smallestFlavor"></a>

```csharp
public string SmallestFlavor { get; set; }
```

- *Type:* string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#smallest_flavor Ruby#smallest_flavor}

---

##### `AppFolder`<sup>Optional</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.appFolder"></a>

```csharp
public string AppFolder { get; set; }
```

- *Type:* string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#app_folder Ruby#app_folder}

---

##### `BuildFlavor`<sup>Optional</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.buildFlavor"></a>

```csharp
public string BuildFlavor { get; set; }
```

- *Type:* string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#build_flavor Ruby#build_flavor}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependencies"></a>

```csharp
public string[] Dependencies { get; set; }
```

- *Type:* string[]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#dependencies Ruby#dependencies}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.deployment"></a>

```csharp
public RubyDeployment Deployment { get; set; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#deployment Ruby#deployment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#description Ruby#description}

---

##### `EnableGzipCompression`<sup>Optional</sup> <a name="EnableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableGzipCompression"></a>

```csharp
public bool|IResolvable EnableGzipCompression { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true to gzip-compress through Nginx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_gzip_compression Ruby#enable_gzip_compression}

---

##### `EnableSidekiq`<sup>Optional</sup> <a name="EnableSidekiq" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableSidekiq"></a>

```csharp
public bool|IResolvable EnableSidekiq { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable Sidekiq background process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_sidekiq Ruby#enable_sidekiq}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#environment Ruby#environment}

---

##### `ExposedEnvironment`<sup>Optional</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.exposedEnvironment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExposedEnvironment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#exposed_environment Ruby#exposed_environment}

---

##### `GzipTypes`<sup>Optional</sup> <a name="GzipTypes" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.gzipTypes"></a>

```csharp
public string GzipTypes { get; set; }
```

- *Type:* string

Set the mime types to compress (default: 'text/* application/json application/xml application/javascript image/svg+xml').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#gzip_types Ruby#gzip_types}

---

##### `Hooks`<sup>Optional</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.hooks"></a>

```csharp
public RubyHooks Hooks { get; set; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#hooks Ruby#hooks}

---

##### `HttpBasicAuth`<sup>Optional</sup> <a name="HttpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.httpBasicAuth"></a>

```csharp
public string HttpBasicAuth { get; set; }
```

- *Type:* string

Restrict HTTP access to your application (format: 'login:password').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#http_basic_auth Ruby#http_basic_auth}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.networkgroups"></a>

```csharp
public IResolvable|RubyNetworkgroups[] Networkgroups { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroups Ruby#networkgroups}

---

##### `NginxProxyBuffers`<sup>Optional</sup> <a name="NginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBuffers"></a>

```csharp
public string NginxProxyBuffers { get; set; }
```

- *Type:* string

Sets the number and size of the buffers used for reading a response from the proxied server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffers Ruby#nginx_proxy_buffers}

---

##### `NginxProxyBufferSize`<sup>Optional</sup> <a name="NginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBufferSize"></a>

```csharp
public string NginxProxyBufferSize { get; set; }
```

- *Type:* string

Sets the size of the buffer used for reading the first part of the response received from the proxied server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffer_size Ruby#nginx_proxy_buffer_size}

---

##### `NginxReadTimeout`<sup>Optional</sup> <a name="NginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxReadTimeout"></a>

```csharp
public double NginxReadTimeout { get; set; }
```

- *Type:* double

Read timeout in seconds (default: 300).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_read_timeout Ruby#nginx_read_timeout}

---

##### `RackEnv`<sup>Optional</sup> <a name="RackEnv" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackEnv"></a>

```csharp
public string RackEnv { get; set; }
```

- *Type:* string

Rack environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rack_env Ruby#rack_env}

---

##### `RackupServer`<sup>Optional</sup> <a name="RackupServer" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackupServer"></a>

```csharp
public string RackupServer { get; set; }
```

- *Type:* string

Server to use for serving the Ruby application (default: puma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rackup_server Ruby#rackup_server}

---

##### `RailsEnv`<sup>Optional</sup> <a name="RailsEnv" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.railsEnv"></a>

```csharp
public string RailsEnv { get; set; }
```

- *Type:* string

Rails environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rails_env Ruby#rails_env}

---

##### `RakeGoals`<sup>Optional</sup> <a name="RakeGoals" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rakeGoals"></a>

```csharp
public string RakeGoals { get; set; }
```

- *Type:* string

Comma-separated list of rake goals to execute (e.g., 'db:migrate,assets:precompile').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rake_goals Ruby#rake_goals}

---

##### `RedirectHttps`<sup>Optional</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.redirectHttps"></a>

```csharp
public bool|IResolvable RedirectHttps { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#redirect_https Ruby#redirect_https}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#region Ruby#region}

---

##### `RubyVersion`<sup>Optional</sup> <a name="RubyVersion" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rubyVersion"></a>

```csharp
public string RubyVersion { get; set; }
```

- *Type:* string

Ruby version to use (e.g., '3.3', '3.3.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#ruby_version Ruby#ruby_version}

---

##### `SidekiqFiles`<sup>Optional</sup> <a name="SidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.sidekiqFiles"></a>

```csharp
public string SidekiqFiles { get; set; }
```

- *Type:* string

Specify a list of Sidekiq configuration files (e.g., './config/sidekiq_1.yml,./config/sidekiq_2.yml').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sidekiq_files Ruby#sidekiq_files}

---

##### `StaticFilesPath`<sup>Optional</sup> <a name="StaticFilesPath" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticFilesPath"></a>

```csharp
public string StaticFilesPath { get; set; }
```

- *Type:* string

Relative path to where your static files are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_files_path Ruby#static_files_path}

---

##### `StaticUrlPrefix`<sup>Optional</sup> <a name="StaticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticUrlPrefix"></a>

```csharp
public string StaticUrlPrefix { get; set; }
```

- *Type:* string

The URL path under which you want to serve static files, usually /public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_url_prefix Ruby#static_url_prefix}

---

##### `StaticWebroot`<sup>Optional</sup> <a name="StaticWebroot" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticWebroot"></a>

```csharp
public string StaticWebroot { get; set; }
```

- *Type:* string

Path to the web content to serve, relative to the root of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_webroot Ruby#static_webroot}

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.stickySessions"></a>

```csharp
public bool|IResolvable StickySessions { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sticky_sessions Ruby#sticky_sessions}

---

##### `Vhosts`<sup>Optional</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.vhosts"></a>

```csharp
public IResolvable|RubyVhosts[] Vhosts { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#vhosts Ruby#vhosts}

---

### RubyDeployment <a name="RubyDeployment" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyDeployment {
    string AuthenticationBasic = null,
    string Commit = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.authenticationBasic">AuthenticationBasic</a></code> | <code>string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.commit">Commit</a></code> | <code>string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.repository">Repository</a></code> | <code>string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `AuthenticationBasic`<sup>Optional</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.authenticationBasic"></a>

```csharp
public string AuthenticationBasic { get; set; }
```

- *Type:* string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#authentication_basic Ruby#authentication_basic}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#commit Ruby#commit}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#repository Ruby#repository}

---

### RubyHooks <a name="RubyHooks" id="@clevercloud/cdktf-bindings.ruby.RubyHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyHooks {
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
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.postBuild">PostBuild</a></code> | <code>string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preBuild">PreBuild</a></code> | <code>string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preRun">PreRun</a></code> | <code>string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runFailed">RunFailed</a></code> | <code>string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runSucceed">RunSucceed</a></code> | <code>string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `PostBuild`<sup>Optional</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.postBuild"></a>

```csharp
public string PostBuild { get; set; }
```

- *Type:* string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#post_build Ruby#post_build}

---

##### `PreBuild`<sup>Optional</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preBuild"></a>

```csharp
public string PreBuild { get; set; }
```

- *Type:* string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_build Ruby#pre_build}

---

##### `PreRun`<sup>Optional</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preRun"></a>

```csharp
public string PreRun { get; set; }
```

- *Type:* string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_run Ruby#pre_run}

---

##### `RunFailed`<sup>Optional</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runFailed"></a>

```csharp
public string RunFailed { get; set; }
```

- *Type:* string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_failed Ruby#run_failed}

---

##### `RunSucceed`<sup>Optional</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runSucceed"></a>

```csharp
public string RunSucceed { get; set; }
```

- *Type:* string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_succeed Ruby#run_succeed}

---

### RubyNetworkgroups <a name="RubyNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyNetworkgroups {
    string Fqdn,
    string NetworkgroupId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.fqdn">Fqdn</a></code> | <code>string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; set; }
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroup_id Ruby#networkgroup_id}

---

### RubyVhosts <a name="RubyVhosts" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyVhosts {
    string Fqdn,
    string PathBegin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.fqdn">Fqdn</a></code> | <code>string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.pathBegin">PathBegin</a></code> | <code>string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}

---

##### `PathBegin`<sup>Optional</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.pathBegin"></a>

```csharp
public string PathBegin { get; set; }
```

- *Type:* string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#path_begin Ruby#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### RubyDeploymentOutputReference <a name="RubyDeploymentOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetAuthenticationBasic">ResetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationBasic` <a name="ResetAuthenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetAuthenticationBasic"></a>

```csharp
private void ResetAuthenticationBasic()
```

##### `ResetCommit` <a name="ResetCommit" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetRepository` <a name="ResetRepository" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasicInput">AuthenticationBasicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasic">AuthenticationBasic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationBasicInput`<sup>Optional</sup> <a name="AuthenticationBasicInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasicInput"></a>

```csharp
public string AuthenticationBasicInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `AuthenticationBasic`<sup>Required</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasic"></a>

```csharp
public string AuthenticationBasic { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.internalValue"></a>

```csharp
public RubyDeployment|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>|HashiCorp.Cdktf.IResolvable

---


### RubyHooksOutputReference <a name="RubyHooksOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPostBuild">ResetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreBuild">ResetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreRun">ResetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunFailed">ResetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunSucceed">ResetRunSucceed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostBuild` <a name="ResetPostBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPostBuild"></a>

```csharp
private void ResetPostBuild()
```

##### `ResetPreBuild` <a name="ResetPreBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreBuild"></a>

```csharp
private void ResetPreBuild()
```

##### `ResetPreRun` <a name="ResetPreRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreRun"></a>

```csharp
private void ResetPreRun()
```

##### `ResetRunFailed` <a name="ResetRunFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunFailed"></a>

```csharp
private void ResetRunFailed()
```

##### `ResetRunSucceed` <a name="ResetRunSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunSucceed"></a>

```csharp
private void ResetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuildInput">PostBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuildInput">PreBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRunInput">PreRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailedInput">RunFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceedInput">RunSucceedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuild">PostBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuild">PreBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRun">PreRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailed">RunFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceed">RunSucceed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostBuildInput`<sup>Optional</sup> <a name="PostBuildInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuildInput"></a>

```csharp
public string PostBuildInput { get; }
```

- *Type:* string

---

##### `PreBuildInput`<sup>Optional</sup> <a name="PreBuildInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuildInput"></a>

```csharp
public string PreBuildInput { get; }
```

- *Type:* string

---

##### `PreRunInput`<sup>Optional</sup> <a name="PreRunInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRunInput"></a>

```csharp
public string PreRunInput { get; }
```

- *Type:* string

---

##### `RunFailedInput`<sup>Optional</sup> <a name="RunFailedInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailedInput"></a>

```csharp
public string RunFailedInput { get; }
```

- *Type:* string

---

##### `RunSucceedInput`<sup>Optional</sup> <a name="RunSucceedInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceedInput"></a>

```csharp
public string RunSucceedInput { get; }
```

- *Type:* string

---

##### `PostBuild`<sup>Required</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuild"></a>

```csharp
public string PostBuild { get; }
```

- *Type:* string

---

##### `PreBuild`<sup>Required</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuild"></a>

```csharp
public string PreBuild { get; }
```

- *Type:* string

---

##### `PreRun`<sup>Required</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRun"></a>

```csharp
public string PreRun { get; }
```

- *Type:* string

---

##### `RunFailed`<sup>Required</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailed"></a>

```csharp
public string RunFailed { get; }
```

- *Type:* string

---

##### `RunSucceed`<sup>Required</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceed"></a>

```csharp
public string RunSucceed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.internalValue"></a>

```csharp
public RubyHooks|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>|HashiCorp.Cdktf.IResolvable

---


### RubyNetworkgroupsList <a name="RubyNetworkgroupsList" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyNetworkgroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get"></a>

```csharp
private RubyNetworkgroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.internalValue"></a>

```csharp
public IResolvable|RubyNetworkgroups[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

---


### RubyNetworkgroupsOutputReference <a name="RubyNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyNetworkgroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```csharp
public string NetworkgroupIdInput { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupId"></a>

```csharp
public string NetworkgroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.internalValue"></a>

```csharp
public RubyNetworkgroups|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>|HashiCorp.Cdktf.IResolvable

---


### RubyVhostsList <a name="RubyVhostsList" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyVhostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get"></a>

```csharp
private RubyVhostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.internalValue"></a>

```csharp
public IResolvable|RubyVhosts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

---


### RubyVhostsOutputReference <a name="RubyVhostsOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new RubyVhostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resetPathBegin">ResetPathBegin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathBegin` <a name="ResetPathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resetPathBegin"></a>

```csharp
private void ResetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBeginInput">PathBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBegin">PathBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `PathBeginInput`<sup>Optional</sup> <a name="PathBeginInput" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBeginInput"></a>

```csharp
public string PathBeginInput { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `PathBegin`<sup>Required</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBegin"></a>

```csharp
public string PathBegin { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.internalValue"></a>

```csharp
public RubyVhosts|IResolvable InternalValue { get; }
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>|HashiCorp.Cdktf.IResolvable

---



