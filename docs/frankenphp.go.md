# `frankenphp` Submodule <a name="`frankenphp` Submodule" id="@clevercloud/cdktf-bindings.frankenphp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frankenphp <a name="Frankenphp" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp clevercloud_frankenphp}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.NewFrankenphp(scope Construct, id *string, config FrankenphpConfig) Frankenphp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig">FrankenphpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployment` <a name="PutDeployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment"></a>

```go
func PutDeployment(value FrankenphpDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>

---

##### `PutHooks` <a name="PutHooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks"></a>

```go
func PutHooks(value FrankenphpHooks)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups"></a>

```go
func PutNetworkgroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putNetworkgroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVhosts` <a name="PutVhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts"></a>

```go
func PutVhosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.putVhosts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppFolder` <a name="ResetAppFolder" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetAppFolder"></a>

```go
func ResetAppFolder()
```

##### `ResetBuildFlavor` <a name="ResetBuildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetBuildFlavor"></a>

```go
func ResetBuildFlavor()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetDescription` <a name="ResetDescription" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDevDependencies` <a name="ResetDevDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetDevDependencies"></a>

```go
func ResetDevDependencies()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetExposedEnvironment` <a name="ResetExposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetExposedEnvironment"></a>

```go
func ResetExposedEnvironment()
```

##### `ResetHooks` <a name="ResetHooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetHooks"></a>

```go
func ResetHooks()
```

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetNetworkgroups"></a>

```go
func ResetNetworkgroups()
```

##### `ResetRedirectHttps` <a name="ResetRedirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRedirectHttps"></a>

```go
func ResetRedirectHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetStickySessions"></a>

```go
func ResetStickySessions()
```

##### `ResetVhosts` <a name="ResetVhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.resetVhosts"></a>

```go
func ResetVhosts()
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

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.Frankenphp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.Frankenphp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.Frankenphp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.Frankenphp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Frankenphp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Frankenphp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Frankenphp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Frankenphp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference">FrankenphpDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployUrl">DeployUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference">FrankenphpHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList">FrankenphpNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhosts">Vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList">FrankenphpVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolderInput">AppFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavorInput">BiggestFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavorInput">BuildFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependenciesInput">DependenciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deploymentInput">DeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependenciesInput">DevDependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironmentInput">ExposedEnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooksInput">HooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttpsInput">RedirectHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavorInput">SmallestFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessionsInput">StickySessionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhostsInput">VhostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolder">AppFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavor">BiggestFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavor">BuildFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependencies">DevDependencies</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttps">RedirectHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavor">SmallestFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessions">StickySessions</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployment"></a>

```go
func Deployment() FrankenphpDeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference">FrankenphpDeploymentOutputReference</a>

---

##### `DeployUrl`<sup>Required</sup> <a name="DeployUrl" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deployUrl"></a>

```go
func DeployUrl() *string
```

- *Type:* *string

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooks"></a>

```go
func Hooks() FrankenphpHooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference">FrankenphpHooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroups"></a>

```go
func Networkgroups() FrankenphpNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList">FrankenphpNetworkgroupsList</a>

---

##### `Vhosts`<sup>Required</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhosts"></a>

```go
func Vhosts() FrankenphpVhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList">FrankenphpVhostsList</a>

---

##### `AppFolderInput`<sup>Optional</sup> <a name="AppFolderInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolderInput"></a>

```go
func AppFolderInput() *string
```

- *Type:* *string

---

##### `BiggestFlavorInput`<sup>Optional</sup> <a name="BiggestFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavorInput"></a>

```go
func BiggestFlavorInput() *string
```

- *Type:* *string

---

##### `BuildFlavorInput`<sup>Optional</sup> <a name="BuildFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavorInput"></a>

```go
func BuildFlavorInput() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependenciesInput"></a>

```go
func DependenciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.deploymentInput"></a>

```go
func DeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DevDependenciesInput`<sup>Optional</sup> <a name="DevDependenciesInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependenciesInput"></a>

```go
func DevDependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExposedEnvironmentInput`<sup>Optional</sup> <a name="ExposedEnvironmentInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironmentInput"></a>

```go
func ExposedEnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.hooksInput"></a>

```go
func HooksInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.networkgroupsInput"></a>

```go
func NetworkgroupsInput() interface{}
```

- *Type:* interface{}

---

##### `RedirectHttpsInput`<sup>Optional</sup> <a name="RedirectHttpsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttpsInput"></a>

```go
func RedirectHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SmallestFlavorInput`<sup>Optional</sup> <a name="SmallestFlavorInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavorInput"></a>

```go
func SmallestFlavorInput() *string
```

- *Type:* *string

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessionsInput"></a>

```go
func StickySessionsInput() interface{}
```

- *Type:* interface{}

---

##### `VhostsInput`<sup>Optional</sup> <a name="VhostsInput" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.vhostsInput"></a>

```go
func VhostsInput() interface{}
```

- *Type:* interface{}

---

##### `AppFolder`<sup>Required</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.appFolder"></a>

```go
func AppFolder() *string
```

- *Type:* *string

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.biggestFlavor"></a>

```go
func BiggestFlavor() *string
```

- *Type:* *string

---

##### `BuildFlavor`<sup>Required</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.buildFlavor"></a>

```go
func BuildFlavor() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.dependencies"></a>

```go
func Dependencies() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DevDependencies`<sup>Required</sup> <a name="DevDependencies" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.devDependencies"></a>

```go
func DevDependencies() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExposedEnvironment`<sup>Required</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.exposedEnvironment"></a>

```go
func ExposedEnvironment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedirectHttps`<sup>Required</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.redirectHttps"></a>

```go
func RedirectHttps() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.smallestFlavor"></a>

```go
func SmallestFlavor() *string
```

- *Type:* *string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.stickySessions"></a>

```go
func StickySessions() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.frankenphp.Frankenphp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FrankenphpConfig <a name="FrankenphpConfig" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

&frankenphp.FrankenphpConfig {
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
	Deployment: github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud.frankenphp.FrankenphpDeployment,
	Description: *string,
	DevDependencies: interface{},
	Environment: *map[string]*string,
	ExposedEnvironment: *map[string]*string,
	Hooks: github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud.frankenphp.FrankenphpHooks,
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
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.biggestFlavor">BiggestFlavor</a></code> | <code>*string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.name">Name</a></code> | <code>*string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.smallestFlavor">SmallestFlavor</a></code> | <code>*string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.appFolder">AppFolder</a></code> | <code>*string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.buildFlavor">BuildFlavor</a></code> | <code>*string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.description">Description</a></code> | <code>*string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.devDependencies">DevDependencies</a></code> | <code>interface{}</code> | Install development dependencies (Default: false). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>*map[string]*string</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.networkgroups">Networkgroups</a></code> | <code>interface{}</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.redirectHttps">RedirectHttps</a></code> | <code>interface{}</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.region">Region</a></code> | <code>*string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.stickySessions">StickySessions</a></code> | <code>interface{}</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.vhosts">Vhosts</a></code> | <code>interface{}</code> | List of virtual hosts. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.biggestFlavor"></a>

```go
BiggestFlavor *string
```

- *Type:* *string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#biggest_flavor Frankenphp#biggest_flavor}

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#max_instance_count Frankenphp#max_instance_count}

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#min_instance_count Frankenphp#min_instance_count}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#name Frankenphp#name}

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.smallestFlavor"></a>

```go
SmallestFlavor *string
```

- *Type:* *string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#smallest_flavor Frankenphp#smallest_flavor}

---

##### `AppFolder`<sup>Optional</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.appFolder"></a>

```go
AppFolder *string
```

- *Type:* *string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#app_folder Frankenphp#app_folder}

---

##### `BuildFlavor`<sup>Optional</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.buildFlavor"></a>

```go
BuildFlavor *string
```

- *Type:* *string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#build_flavor Frankenphp#build_flavor}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.dependencies"></a>

```go
Dependencies *[]*string
```

- *Type:* *[]*string

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dependencies Frankenphp#dependencies}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.deployment"></a>

```go
Deployment FrankenphpDeployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment">FrankenphpDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#deployment Frankenphp#deployment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#description Frankenphp#description}

---

##### `DevDependencies`<sup>Optional</sup> <a name="DevDependencies" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.devDependencies"></a>

```go
DevDependencies interface{}
```

- *Type:* interface{}

Install development dependencies (Default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#dev_dependencies Frankenphp#dev_dependencies}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#environment Frankenphp#environment}

---

##### `ExposedEnvironment`<sup>Optional</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.exposedEnvironment"></a>

```go
ExposedEnvironment *map[string]*string
```

- *Type:* *map[string]*string

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#exposed_environment Frankenphp#exposed_environment}

---

##### `Hooks`<sup>Optional</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.hooks"></a>

```go
Hooks FrankenphpHooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks">FrankenphpHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#hooks Frankenphp#hooks}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.networkgroups"></a>

```go
Networkgroups interface{}
```

- *Type:* interface{}

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#networkgroups Frankenphp#networkgroups}

---

##### `RedirectHttps`<sup>Optional</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.redirectHttps"></a>

```go
RedirectHttps interface{}
```

- *Type:* interface{}

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#redirect_https Frankenphp#redirect_https}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#region Frankenphp#region}

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.stickySessions"></a>

```go
StickySessions interface{}
```

- *Type:* interface{}

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#sticky_sessions Frankenphp#sticky_sessions}

---

##### `Vhosts`<sup>Optional</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpConfig.property.vhosts"></a>

```go
Vhosts interface{}
```

- *Type:* interface{}

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#vhosts Frankenphp#vhosts}

---

### FrankenphpDeployment <a name="FrankenphpDeployment" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

&frankenphp.FrankenphpDeployment {
	AuthenticationBasic: *string,
	Commit: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.authenticationBasic">AuthenticationBasic</a></code> | <code>*string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.commit">Commit</a></code> | <code>*string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.repository">Repository</a></code> | <code>*string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `AuthenticationBasic`<sup>Optional</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.authenticationBasic"></a>

```go
AuthenticationBasic *string
```

- *Type:* *string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#authentication_basic Frankenphp#authentication_basic}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.commit"></a>

```go
Commit *string
```

- *Type:* *string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#commit Frankenphp#commit}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeployment.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#repository Frankenphp#repository}

---

### FrankenphpHooks <a name="FrankenphpHooks" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

&frankenphp.FrankenphpHooks {
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
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.postBuild">PostBuild</a></code> | <code>*string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preBuild">PreBuild</a></code> | <code>*string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preRun">PreRun</a></code> | <code>*string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runFailed">RunFailed</a></code> | <code>*string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runSucceed">RunSucceed</a></code> | <code>*string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `PostBuild`<sup>Optional</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.postBuild"></a>

```go
PostBuild *string
```

- *Type:* *string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#post_build Frankenphp#post_build}

---

##### `PreBuild`<sup>Optional</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preBuild"></a>

```go
PreBuild *string
```

- *Type:* *string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#pre_build Frankenphp#pre_build}

---

##### `PreRun`<sup>Optional</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.preRun"></a>

```go
PreRun *string
```

- *Type:* *string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#pre_run Frankenphp#pre_run}

---

##### `RunFailed`<sup>Optional</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runFailed"></a>

```go
RunFailed *string
```

- *Type:* *string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#run_failed Frankenphp#run_failed}

---

##### `RunSucceed`<sup>Optional</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooks.property.runSucceed"></a>

```go
RunSucceed *string
```

- *Type:* *string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#run_succeed Frankenphp#run_succeed}

---

### FrankenphpNetworkgroups <a name="FrankenphpNetworkgroups" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

&frankenphp.FrankenphpNetworkgroups {
	Fqdn: *string,
	NetworkgroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.fqdn">Fqdn</a></code> | <code>*string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#fqdn Frankenphp#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroups.property.networkgroupId"></a>

```go
NetworkgroupId *string
```

- *Type:* *string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#networkgroup_id Frankenphp#networkgroup_id}

---

### FrankenphpVhosts <a name="FrankenphpVhosts" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

&frankenphp.FrankenphpVhosts {
	Fqdn: *string,
	PathBegin: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.fqdn">Fqdn</a></code> | <code>*string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.pathBegin">PathBegin</a></code> | <code>*string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#fqdn Frankenphp#fqdn}

---

##### `PathBegin`<sup>Optional</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhosts.property.pathBegin"></a>

```go
PathBegin *string
```

- *Type:* *string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/frankenphp#path_begin Frankenphp#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### FrankenphpDeploymentOutputReference <a name="FrankenphpDeploymentOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.NewFrankenphpDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrankenphpDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationBasic` <a name="ResetAuthenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetAuthenticationBasic"></a>

```go
func ResetAuthenticationBasic()
```

##### `ResetCommit` <a name="ResetCommit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetCommit"></a>

```go
func ResetCommit()
```

##### `ResetRepository` <a name="ResetRepository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasicInput">AuthenticationBasicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commitInput">CommitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasic">AuthenticationBasic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commit">Commit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationBasicInput`<sup>Optional</sup> <a name="AuthenticationBasicInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasicInput"></a>

```go
func AuthenticationBasicInput() *string
```

- *Type:* *string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commitInput"></a>

```go
func CommitInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `AuthenticationBasic`<sup>Required</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.authenticationBasic"></a>

```go
func AuthenticationBasic() *string
```

- *Type:* *string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.commit"></a>

```go
func Commit() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrankenphpHooksOutputReference <a name="FrankenphpHooksOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.NewFrankenphpHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrankenphpHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostBuild` <a name="ResetPostBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPostBuild"></a>

```go
func ResetPostBuild()
```

##### `ResetPreBuild` <a name="ResetPreBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreBuild"></a>

```go
func ResetPreBuild()
```

##### `ResetPreRun` <a name="ResetPreRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetPreRun"></a>

```go
func ResetPreRun()
```

##### `ResetRunFailed` <a name="ResetRunFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunFailed"></a>

```go
func ResetRunFailed()
```

##### `ResetRunSucceed` <a name="ResetRunSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.resetRunSucceed"></a>

```go
func ResetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuildInput">PostBuildInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuildInput">PreBuildInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRunInput">PreRunInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailedInput">RunFailedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceedInput">RunSucceedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuild">PostBuild</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuild">PreBuild</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRun">PreRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailed">RunFailed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceed">RunSucceed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostBuildInput`<sup>Optional</sup> <a name="PostBuildInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuildInput"></a>

```go
func PostBuildInput() *string
```

- *Type:* *string

---

##### `PreBuildInput`<sup>Optional</sup> <a name="PreBuildInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuildInput"></a>

```go
func PreBuildInput() *string
```

- *Type:* *string

---

##### `PreRunInput`<sup>Optional</sup> <a name="PreRunInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRunInput"></a>

```go
func PreRunInput() *string
```

- *Type:* *string

---

##### `RunFailedInput`<sup>Optional</sup> <a name="RunFailedInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailedInput"></a>

```go
func RunFailedInput() *string
```

- *Type:* *string

---

##### `RunSucceedInput`<sup>Optional</sup> <a name="RunSucceedInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceedInput"></a>

```go
func RunSucceedInput() *string
```

- *Type:* *string

---

##### `PostBuild`<sup>Required</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.postBuild"></a>

```go
func PostBuild() *string
```

- *Type:* *string

---

##### `PreBuild`<sup>Required</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preBuild"></a>

```go
func PreBuild() *string
```

- *Type:* *string

---

##### `PreRun`<sup>Required</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.preRun"></a>

```go
func PreRun() *string
```

- *Type:* *string

---

##### `RunFailed`<sup>Required</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runFailed"></a>

```go
func RunFailed() *string
```

- *Type:* *string

---

##### `RunSucceed`<sup>Required</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.runSucceed"></a>

```go
func RunSucceed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrankenphpNetworkgroupsList <a name="FrankenphpNetworkgroupsList" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.NewFrankenphpNetworkgroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrankenphpNetworkgroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get"></a>

```go
func Get(index *f64) FrankenphpNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrankenphpNetworkgroupsOutputReference <a name="FrankenphpNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.NewFrankenphpNetworkgroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrankenphpNetworkgroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```go
func NetworkgroupIdInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.networkgroupId"></a>

```go
func NetworkgroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpNetworkgroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrankenphpVhostsList <a name="FrankenphpVhostsList" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.NewFrankenphpVhostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrankenphpVhostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get"></a>

```go
func Get(index *f64) FrankenphpVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrankenphpVhostsOutputReference <a name="FrankenphpVhostsOutputReference" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/frankenphp"

frankenphp.NewFrankenphpVhostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrankenphpVhostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathBegin` <a name="ResetPathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.resetPathBegin"></a>

```go
func ResetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBeginInput">PathBeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBegin">PathBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `PathBeginInput`<sup>Optional</sup> <a name="PathBeginInput" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBeginInput"></a>

```go
func PathBeginInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `PathBegin`<sup>Required</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.pathBegin"></a>

```go
func PathBegin() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.frankenphp.FrankenphpVhostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



