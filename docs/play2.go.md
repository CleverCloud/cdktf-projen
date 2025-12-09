# `play2` Submodule <a name="`play2` Submodule" id="@clevercloud/cdktf-bindings.play2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Play2 <a name="Play2" id="@clevercloud/cdktf-bindings.play2.Play2"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2 clevercloud_play2}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.NewPlay2(scope Construct, id *string, config Play2Config) Play2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config">Play2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.play2.Play2.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Config">Play2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putHooks">PutHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putNetworkgroups">PutNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.putVhosts">PutVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetAppFolder">ResetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetBuildFlavor">ResetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetExposedEnvironment">ResetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetHooks">ResetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetNetworkgroups">ResetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetRedirectHttps">ResetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetStickySessions">ResetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.resetVhosts">ResetVhosts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.play2.Play2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.play2.Play2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.play2.Play2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.play2.Play2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.play2.Play2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.play2.Play2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.play2.Play2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.play2.Play2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.play2.Play2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.play2.Play2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.play2.Play2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.play2.Play2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.play2.Play2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.play2.Play2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.play2.Play2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.play2.Play2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.play2.Play2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.play2.Play2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.play2.Play2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.play2.Play2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployment` <a name="PutDeployment" id="@clevercloud/cdktf-bindings.play2.Play2.putDeployment"></a>

```go
func PutDeployment(value Play2Deployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a>

---

##### `PutHooks` <a name="PutHooks" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks"></a>

```go
func PutHooks(value Play2Hooks)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a>

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.play2.Play2.putNetworkgroups"></a>

```go
func PutNetworkgroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.putNetworkgroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVhosts` <a name="PutVhosts" id="@clevercloud/cdktf-bindings.play2.Play2.putVhosts"></a>

```go
func PutVhosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.play2.Play2.putVhosts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppFolder` <a name="ResetAppFolder" id="@clevercloud/cdktf-bindings.play2.Play2.resetAppFolder"></a>

```go
func ResetAppFolder()
```

##### `ResetBuildFlavor` <a name="ResetBuildFlavor" id="@clevercloud/cdktf-bindings.play2.Play2.resetBuildFlavor"></a>

```go
func ResetBuildFlavor()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@clevercloud/cdktf-bindings.play2.Play2.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@clevercloud/cdktf-bindings.play2.Play2.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetDescription` <a name="ResetDescription" id="@clevercloud/cdktf-bindings.play2.Play2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@clevercloud/cdktf-bindings.play2.Play2.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetExposedEnvironment` <a name="ResetExposedEnvironment" id="@clevercloud/cdktf-bindings.play2.Play2.resetExposedEnvironment"></a>

```go
func ResetExposedEnvironment()
```

##### `ResetHooks` <a name="ResetHooks" id="@clevercloud/cdktf-bindings.play2.Play2.resetHooks"></a>

```go
func ResetHooks()
```

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.play2.Play2.resetNetworkgroups"></a>

```go
func ResetNetworkgroups()
```

##### `ResetRedirectHttps` <a name="ResetRedirectHttps" id="@clevercloud/cdktf-bindings.play2.Play2.resetRedirectHttps"></a>

```go
func ResetRedirectHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.play2.Play2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@clevercloud/cdktf-bindings.play2.Play2.resetStickySessions"></a>

```go
func ResetStickySessions()
```

##### `ResetVhosts` <a name="ResetVhosts" id="@clevercloud/cdktf-bindings.play2.Play2.resetVhosts"></a>

```go
func ResetVhosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Play2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.play2.Play2.isConstruct"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.Play2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.play2.Play2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformElement"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.Play2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformResource"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.Play2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.play2.Play2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.Play2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Play2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Play2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Play2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.play2.Play2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Play2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference">Play2DeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.deployUrl">DeployUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference">Play2HooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList">Play2NetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.vhosts">Vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList">Play2VhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.appFolderInput">AppFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavorInput">BiggestFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavorInput">BuildFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.dependenciesInput">DependenciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.deploymentInput">DeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironmentInput">ExposedEnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.hooksInput">HooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttpsInput">RedirectHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavorInput">SmallestFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.stickySessionsInput">StickySessionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.vhostsInput">VhostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.appFolder">AppFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavor">BiggestFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavor">BuildFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttps">RedirectHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavor">SmallestFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.stickySessions">StickySessions</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.play2.Play2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.play2.Play2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.play2.Play2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.play2.Play2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.play2.Play2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.play2.Play2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.play2.Play2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.play2.Play2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.play2.Play2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.play2.Play2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.play2.Play2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.play2.Play2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.play2.Play2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.play2.Play2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.play2.Play2.property.deployment"></a>

```go
func Deployment() Play2DeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference">Play2DeploymentOutputReference</a>

---

##### `DeployUrl`<sup>Required</sup> <a name="DeployUrl" id="@clevercloud/cdktf-bindings.play2.Play2.property.deployUrl"></a>

```go
func DeployUrl() *string
```

- *Type:* *string

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.play2.Play2.property.hooks"></a>

```go
func Hooks() Play2HooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference">Play2HooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.play2.Play2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2.property.networkgroups"></a>

```go
func Networkgroups() Play2NetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList">Play2NetworkgroupsList</a>

---

##### `Vhosts`<sup>Required</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.play2.Play2.property.vhosts"></a>

```go
func Vhosts() Play2VhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList">Play2VhostsList</a>

---

##### `AppFolderInput`<sup>Optional</sup> <a name="AppFolderInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.appFolderInput"></a>

```go
func AppFolderInput() *string
```

- *Type:* *string

---

##### `BiggestFlavorInput`<sup>Optional</sup> <a name="BiggestFlavorInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavorInput"></a>

```go
func BiggestFlavorInput() *string
```

- *Type:* *string

---

##### `BuildFlavorInput`<sup>Optional</sup> <a name="BuildFlavorInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavorInput"></a>

```go
func BuildFlavorInput() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.dependenciesInput"></a>

```go
func DependenciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.deploymentInput"></a>

```go
func DeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExposedEnvironmentInput`<sup>Optional</sup> <a name="ExposedEnvironmentInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironmentInput"></a>

```go
func ExposedEnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.hooksInput"></a>

```go
func HooksInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.networkgroupsInput"></a>

```go
func NetworkgroupsInput() interface{}
```

- *Type:* interface{}

---

##### `RedirectHttpsInput`<sup>Optional</sup> <a name="RedirectHttpsInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttpsInput"></a>

```go
func RedirectHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SmallestFlavorInput`<sup>Optional</sup> <a name="SmallestFlavorInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavorInput"></a>

```go
func SmallestFlavorInput() *string
```

- *Type:* *string

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.stickySessionsInput"></a>

```go
func StickySessionsInput() interface{}
```

- *Type:* interface{}

---

##### `VhostsInput`<sup>Optional</sup> <a name="VhostsInput" id="@clevercloud/cdktf-bindings.play2.Play2.property.vhostsInput"></a>

```go
func VhostsInput() interface{}
```

- *Type:* interface{}

---

##### `AppFolder`<sup>Required</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.play2.Play2.property.appFolder"></a>

```go
func AppFolder() *string
```

- *Type:* *string

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.play2.Play2.property.biggestFlavor"></a>

```go
func BiggestFlavor() *string
```

- *Type:* *string

---

##### `BuildFlavor`<sup>Required</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.play2.Play2.property.buildFlavor"></a>

```go
func BuildFlavor() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.play2.Play2.property.dependencies"></a>

```go
func Dependencies() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@clevercloud/cdktf-bindings.play2.Play2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.play2.Play2.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExposedEnvironment`<sup>Required</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.play2.Play2.property.exposedEnvironment"></a>

```go
func ExposedEnvironment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.play2.Play2.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.play2.Play2.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.play2.Play2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedirectHttps`<sup>Required</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.play2.Play2.property.redirectHttps"></a>

```go
func RedirectHttps() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.play2.Play2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.play2.Play2.property.smallestFlavor"></a>

```go
func SmallestFlavor() *string
```

- *Type:* *string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.play2.Play2.property.stickySessions"></a>

```go
func StickySessions() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.play2.Play2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Play2Config <a name="Play2Config" id="@clevercloud/cdktf-bindings.play2.Play2Config"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Config.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

&play2.Play2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BiggestFlavor: *string,
	MaxInstanceCount: *f64,
	MinInstanceCount: *f64,
	Name: *string,
	SmallestFlavor: *string,
	AppFolder: *string,
	BuildFlavor: *string,
	Dependencies: *[]*string,
	Deployment: github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud.play2.Play2Deployment,
	Description: *string,
	Environment: *map[string]*string,
	ExposedEnvironment: *map[string]*string,
	Hooks: github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud.play2.Play2Hooks,
	Networkgroups: interface{},
	RedirectHttps: interface{},
	Region: *string,
	StickySessions: interface{},
	Vhosts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.biggestFlavor">BiggestFlavor</a></code> | <code>*string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.name">Name</a></code> | <code>*string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.smallestFlavor">SmallestFlavor</a></code> | <code>*string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.appFolder">AppFolder</a></code> | <code>*string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.buildFlavor">BuildFlavor</a></code> | <code>*string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.description">Description</a></code> | <code>*string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>*map[string]*string</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.networkgroups">Networkgroups</a></code> | <code>interface{}</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.redirectHttps">RedirectHttps</a></code> | <code>interface{}</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.region">Region</a></code> | <code>*string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.stickySessions">StickySessions</a></code> | <code>interface{}</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Config.property.vhosts">Vhosts</a></code> | <code>interface{}</code> | List of virtual hosts. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.biggestFlavor"></a>

```go
BiggestFlavor *string
```

- *Type:* *string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#biggest_flavor Play2#biggest_flavor}

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#max_instance_count Play2#max_instance_count}

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#min_instance_count Play2#min_instance_count}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#name Play2#name}

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.smallestFlavor"></a>

```go
SmallestFlavor *string
```

- *Type:* *string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#smallest_flavor Play2#smallest_flavor}

---

##### `AppFolder`<sup>Optional</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.appFolder"></a>

```go
AppFolder *string
```

- *Type:* *string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#app_folder Play2#app_folder}

---

##### `BuildFlavor`<sup>Optional</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.buildFlavor"></a>

```go
BuildFlavor *string
```

- *Type:* *string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#build_flavor Play2#build_flavor}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.dependencies"></a>

```go
Dependencies *[]*string
```

- *Type:* *[]*string

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#dependencies Play2#dependencies}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.deployment"></a>

```go
Deployment Play2Deployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment">Play2Deployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#deployment Play2#deployment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#description Play2#description}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#environment Play2#environment}

---

##### `ExposedEnvironment`<sup>Optional</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.exposedEnvironment"></a>

```go
ExposedEnvironment *map[string]*string
```

- *Type:* *map[string]*string

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#exposed_environment Play2#exposed_environment}

---

##### `Hooks`<sup>Optional</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.hooks"></a>

```go
Hooks Play2Hooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks">Play2Hooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#hooks Play2#hooks}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.networkgroups"></a>

```go
Networkgroups interface{}
```

- *Type:* interface{}

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#networkgroups Play2#networkgroups}

---

##### `RedirectHttps`<sup>Optional</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.redirectHttps"></a>

```go
RedirectHttps interface{}
```

- *Type:* interface{}

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#redirect_https Play2#redirect_https}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#region Play2#region}

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.stickySessions"></a>

```go
StickySessions interface{}
```

- *Type:* interface{}

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#sticky_sessions Play2#sticky_sessions}

---

##### `Vhosts`<sup>Optional</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.play2.Play2Config.property.vhosts"></a>

```go
Vhosts interface{}
```

- *Type:* interface{}

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#vhosts Play2#vhosts}

---

### Play2Deployment <a name="Play2Deployment" id="@clevercloud/cdktf-bindings.play2.Play2Deployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

&play2.Play2Deployment {
	AuthenticationBasic: *string,
	Commit: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment.property.authenticationBasic">AuthenticationBasic</a></code> | <code>*string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment.property.commit">Commit</a></code> | <code>*string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Deployment.property.repository">Repository</a></code> | <code>*string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `AuthenticationBasic`<sup>Optional</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.property.authenticationBasic"></a>

```go
AuthenticationBasic *string
```

- *Type:* *string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#authentication_basic Play2#authentication_basic}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.property.commit"></a>

```go
Commit *string
```

- *Type:* *string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#commit Play2#commit}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.play2.Play2Deployment.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#repository Play2#repository}

---

### Play2Hooks <a name="Play2Hooks" id="@clevercloud/cdktf-bindings.play2.Play2Hooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

&play2.Play2Hooks {
	PostBuild: *string,
	PreBuild: *string,
	PreRun: *string,
	RunFailed: *string,
	RunSucceed: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.postBuild">PostBuild</a></code> | <code>*string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preBuild">PreBuild</a></code> | <code>*string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preRun">PreRun</a></code> | <code>*string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runFailed">RunFailed</a></code> | <code>*string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runSucceed">RunSucceed</a></code> | <code>*string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `PostBuild`<sup>Optional</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.postBuild"></a>

```go
PostBuild *string
```

- *Type:* *string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#post_build Play2#post_build}

---

##### `PreBuild`<sup>Optional</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preBuild"></a>

```go
PreBuild *string
```

- *Type:* *string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_build Play2#pre_build}

---

##### `PreRun`<sup>Optional</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.preRun"></a>

```go
PreRun *string
```

- *Type:* *string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_run Play2#pre_run}

---

##### `RunFailed`<sup>Optional</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runFailed"></a>

```go
RunFailed *string
```

- *Type:* *string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_failed Play2#run_failed}

---

##### `RunSucceed`<sup>Optional</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.play2.Play2Hooks.property.runSucceed"></a>

```go
RunSucceed *string
```

- *Type:* *string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_succeed Play2#run_succeed}

---

### Play2Networkgroups <a name="Play2Networkgroups" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

&play2.Play2Networkgroups {
	Fqdn: *string,
	NetworkgroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.fqdn">Fqdn</a></code> | <code>*string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#fqdn Play2#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.play2.Play2Networkgroups.property.networkgroupId"></a>

```go
NetworkgroupId *string
```

- *Type:* *string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#networkgroup_id Play2#networkgroup_id}

---

### Play2Vhosts <a name="Play2Vhosts" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

&play2.Play2Vhosts {
	Fqdn: *string,
	PathBegin: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.fqdn">Fqdn</a></code> | <code>*string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.pathBegin">PathBegin</a></code> | <code>*string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#fqdn Play2#fqdn}

---

##### `PathBegin`<sup>Optional</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.play2.Play2Vhosts.property.pathBegin"></a>

```go
PathBegin *string
```

- *Type:* *string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#path_begin Play2#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### Play2DeploymentOutputReference <a name="Play2DeploymentOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.NewPlay2DeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Play2DeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetAuthenticationBasic">ResetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationBasic` <a name="ResetAuthenticationBasic" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetAuthenticationBasic"></a>

```go
func ResetAuthenticationBasic()
```

##### `ResetCommit` <a name="ResetCommit" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetCommit"></a>

```go
func ResetCommit()
```

##### `ResetRepository` <a name="ResetRepository" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasicInput">AuthenticationBasicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commitInput">CommitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasic">AuthenticationBasic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commit">Commit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationBasicInput`<sup>Optional</sup> <a name="AuthenticationBasicInput" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasicInput"></a>

```go
func AuthenticationBasicInput() *string
```

- *Type:* *string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commitInput"></a>

```go
func CommitInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `AuthenticationBasic`<sup>Required</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.authenticationBasic"></a>

```go
func AuthenticationBasic() *string
```

- *Type:* *string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.commit"></a>

```go
func Commit() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.play2.Play2DeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Play2HooksOutputReference <a name="Play2HooksOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.NewPlay2HooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Play2HooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPostBuild">ResetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreBuild">ResetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreRun">ResetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunFailed">ResetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunSucceed">ResetRunSucceed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostBuild` <a name="ResetPostBuild" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPostBuild"></a>

```go
func ResetPostBuild()
```

##### `ResetPreBuild` <a name="ResetPreBuild" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreBuild"></a>

```go
func ResetPreBuild()
```

##### `ResetPreRun` <a name="ResetPreRun" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetPreRun"></a>

```go
func ResetPreRun()
```

##### `ResetRunFailed` <a name="ResetRunFailed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunFailed"></a>

```go
func ResetRunFailed()
```

##### `ResetRunSucceed` <a name="ResetRunSucceed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.resetRunSucceed"></a>

```go
func ResetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuildInput">PostBuildInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuildInput">PreBuildInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRunInput">PreRunInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailedInput">RunFailedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceedInput">RunSucceedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuild">PostBuild</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuild">PreBuild</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRun">PreRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailed">RunFailed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceed">RunSucceed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostBuildInput`<sup>Optional</sup> <a name="PostBuildInput" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuildInput"></a>

```go
func PostBuildInput() *string
```

- *Type:* *string

---

##### `PreBuildInput`<sup>Optional</sup> <a name="PreBuildInput" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuildInput"></a>

```go
func PreBuildInput() *string
```

- *Type:* *string

---

##### `PreRunInput`<sup>Optional</sup> <a name="PreRunInput" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRunInput"></a>

```go
func PreRunInput() *string
```

- *Type:* *string

---

##### `RunFailedInput`<sup>Optional</sup> <a name="RunFailedInput" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailedInput"></a>

```go
func RunFailedInput() *string
```

- *Type:* *string

---

##### `RunSucceedInput`<sup>Optional</sup> <a name="RunSucceedInput" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceedInput"></a>

```go
func RunSucceedInput() *string
```

- *Type:* *string

---

##### `PostBuild`<sup>Required</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.postBuild"></a>

```go
func PostBuild() *string
```

- *Type:* *string

---

##### `PreBuild`<sup>Required</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preBuild"></a>

```go
func PreBuild() *string
```

- *Type:* *string

---

##### `PreRun`<sup>Required</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.preRun"></a>

```go
func PreRun() *string
```

- *Type:* *string

---

##### `RunFailed`<sup>Required</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runFailed"></a>

```go
func RunFailed() *string
```

- *Type:* *string

---

##### `RunSucceed`<sup>Required</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.runSucceed"></a>

```go
func RunSucceed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.play2.Play2HooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Play2NetworkgroupsList <a name="Play2NetworkgroupsList" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.NewPlay2NetworkgroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Play2NetworkgroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.get"></a>

```go
func Get(index *f64) Play2NetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Play2NetworkgroupsOutputReference <a name="Play2NetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.NewPlay2NetworkgroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Play2NetworkgroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```go
func NetworkgroupIdInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.networkgroupId"></a>

```go
func NetworkgroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.play2.Play2NetworkgroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Play2VhostsList <a name="Play2VhostsList" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.NewPlay2VhostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Play2VhostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.get"></a>

```go
func Get(index *f64) Play2VhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.play2.Play2VhostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Play2VhostsOutputReference <a name="Play2VhostsOutputReference" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/play2"

play2.NewPlay2VhostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Play2VhostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resetPathBegin">ResetPathBegin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathBegin` <a name="ResetPathBegin" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.resetPathBegin"></a>

```go
func ResetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBeginInput">PathBeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBegin">PathBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `PathBeginInput`<sup>Optional</sup> <a name="PathBeginInput" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBeginInput"></a>

```go
func PathBeginInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `PathBegin`<sup>Required</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.pathBegin"></a>

```go
func PathBegin() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.play2.Play2VhostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



