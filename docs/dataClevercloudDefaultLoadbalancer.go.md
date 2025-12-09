# `dataClevercloudDefaultLoadbalancer` Submodule <a name="`dataClevercloudDefaultLoadbalancer` Submodule" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataClevercloudDefaultLoadbalancer <a name="DataClevercloudDefaultLoadbalancer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer clevercloud_default_loadbalancer}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/datacleverclouddefaultloadbalancer"

datacleverclouddefaultloadbalancer.NewDataClevercloudDefaultLoadbalancer(scope Construct, id *string, config DataClevercloudDefaultLoadbalancerConfig) DataClevercloudDefaultLoadbalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig">DataClevercloudDefaultLoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/datacleverclouddefaultloadbalancer"

datacleverclouddefaultloadbalancer.DataClevercloudDefaultLoadbalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/datacleverclouddefaultloadbalancer"

datacleverclouddefaultloadbalancer.DataClevercloudDefaultLoadbalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/datacleverclouddefaultloadbalancer"

datacleverclouddefaultloadbalancer.DataClevercloudDefaultLoadbalancer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/datacleverclouddefaultloadbalancer"

datacleverclouddefaultloadbalancer.DataClevercloudDefaultLoadbalancer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataClevercloudDefaultLoadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataClevercloudDefaultLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataClevercloudDefaultLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers">Servers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers"></a>

```go
func Servers() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataClevercloudDefaultLoadbalancerConfig <a name="DataClevercloudDefaultLoadbalancerConfig" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/datacleverclouddefaultloadbalancer"

&datacleverclouddefaultloadbalancer.DataClevercloudDefaultLoadbalancerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | The application ID for which to fetch the load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

The application ID for which to fetch the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#application_id DataClevercloudDefaultLoadbalancer#application_id}

---



