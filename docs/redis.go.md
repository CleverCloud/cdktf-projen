# `redis` Submodule <a name="`redis` Submodule" id="@clevercloud/cdktf-bindings.redis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Redis <a name="Redis" id="@clevercloud/cdktf-bindings.redis.Redis"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis clevercloud_redis}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.redis.Redis.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

redis.NewRedis(scope Construct, id *string, config RedisConfig) Redis
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig">RedisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.redis.Redis.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.redis.Redis.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.redis.Redis.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.redis.RedisConfig">RedisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.putNetworkgroups">PutNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.resetNetworkgroups">ResetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.redis.Redis.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.redis.Redis.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.redis.Redis.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.redis.Redis.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.redis.Redis.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.redis.Redis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.redis.Redis.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.redis.Redis.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.redis.Redis.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.redis.Redis.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.redis.Redis.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.redis.Redis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.redis.Redis.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.redis.Redis.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.redis.Redis.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.redis.Redis.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.Redis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.redis.Redis.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.redis.Redis.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.redis.Redis.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.redis.Redis.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.redis.Redis.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.redis.Redis.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.redis.Redis.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.redis.Redis.putNetworkgroups"></a>

```go
func PutNetworkgroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.redis.Redis.putNetworkgroups.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.redis.Redis.resetNetworkgroups"></a>

```go
func ResetNetworkgroups()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.redis.Redis.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Redis resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.redis.Redis.isConstruct"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

redis.Redis_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.redis.Redis.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.redis.Redis.isTerraformElement"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

redis.Redis_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.redis.Redis.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.redis.Redis.isTerraformResource"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

redis.Redis_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.redis.Redis.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.redis.Redis.generateConfigForImport"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

redis.Redis_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Redis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.redis.Redis.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.redis.Redis.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Redis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.redis.Redis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Redis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.redis.Redis.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Redis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.creationDate">CreationDate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList">RedisNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.redis.Redis.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.redis.Redis.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.redis.Redis.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.redis.Redis.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.redis.Redis.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.redis.Redis.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.redis.Redis.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.redis.Redis.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.redis.Redis.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.redis.Redis.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.redis.Redis.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.redis.Redis.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.redis.Redis.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.redis.Redis.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@clevercloud/cdktf-bindings.redis.Redis.property.creationDate"></a>

```go
func CreationDate() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@clevercloud/cdktf-bindings.redis.Redis.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.redis.Redis.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.redis.Redis.property.networkgroups"></a>

```go
func Networkgroups() RedisNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList">RedisNetworkgroupsList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@clevercloud/cdktf-bindings.redis.Redis.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Token`<sup>Required</sup> <a name="Token" id="@clevercloud/cdktf-bindings.redis.Redis.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.redis.Redis.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.redis.Redis.property.networkgroupsInput"></a>

```go
func NetworkgroupsInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@clevercloud/cdktf-bindings.redis.Redis.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.redis.Redis.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.redis.Redis.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@clevercloud/cdktf-bindings.redis.Redis.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.redis.Redis.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.Redis.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.redis.Redis.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisConfig <a name="RedisConfig" id="@clevercloud/cdktf-bindings.redis.RedisConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.redis.RedisConfig.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

&redis.RedisConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Plan: *string,
	Networkgroups: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.name">Name</a></code> | <code>*string</code> | Name of the service. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.plan">Plan</a></code> | <code>*string</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.networkgroups">Networkgroups</a></code> | <code>interface{}</code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisConfig.property.region">Region</a></code> | <code>*string</code> | Geographical region where the data will be stored. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#name Redis#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#plan Redis#plan}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.networkgroups"></a>

```go
Networkgroups interface{}
```

- *Type:* interface{}

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#networkgroups Redis#networkgroups}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.redis.RedisConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#region Redis#region}

---

### RedisNetworkgroups <a name="RedisNetworkgroups" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroups.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

&redis.RedisNetworkgroups {
	Fqdn: *string,
	NetworkgroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroups.property.fqdn">Fqdn</a></code> | <code>*string</code> | domain name which will resolve to addon instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroups.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

domain name which will resolve to addon instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#fqdn Redis#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroups.property.networkgroupId"></a>

```go
NetworkgroupId *string
```

- *Type:* *string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#networkgroup_id Redis#networkgroup_id}

---

## Classes <a name="Classes" id="Classes"></a>

### RedisNetworkgroupsList <a name="RedisNetworkgroupsList" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

redis.NewRedisNetworkgroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedisNetworkgroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.get"></a>

```go
func Get(index *f64) RedisNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisNetworkgroupsOutputReference <a name="RedisNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/redis"

redis.NewRedisNetworkgroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedisNetworkgroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```go
func NetworkgroupIdInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.networkgroupId"></a>

```go
func NetworkgroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.redis.RedisNetworkgroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



