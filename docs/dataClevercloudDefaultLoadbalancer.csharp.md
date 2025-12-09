# `dataClevercloudDefaultLoadbalancer` Submodule <a name="`dataClevercloudDefaultLoadbalancer` Submodule" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataClevercloudDefaultLoadbalancer <a name="DataClevercloudDefaultLoadbalancer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer clevercloud_default_loadbalancer}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DataClevercloudDefaultLoadbalancer(Construct Scope, string Id, DataClevercloudDefaultLoadbalancerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig">DataClevercloudDefaultLoadbalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig">DataClevercloudDefaultLoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DataClevercloudDefaultLoadbalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DataClevercloudDefaultLoadbalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DataClevercloudDefaultLoadbalancer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

DataClevercloudDefaultLoadbalancer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataClevercloudDefaultLoadbalancer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataClevercloudDefaultLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataClevercloudDefaultLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers">Servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers"></a>

```csharp
public string[] Servers { get; }
```

- *Type:* string[]

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataClevercloudDefaultLoadbalancerConfig <a name="DataClevercloudDefaultLoadbalancerConfig" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.Initializer"></a>

```csharp
using CleverCloud.Cdktf.Providers.Clevercloud;

new DataClevercloudDefaultLoadbalancerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The application ID for which to fetch the load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The application ID for which to fetch the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#application_id DataClevercloudDefaultLoadbalancer#application_id}

---



