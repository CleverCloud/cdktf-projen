# `mysql` Submodule <a name="`mysql` Submodule" id="@clevercloud/cdktf-bindings.mysql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mysql <a name="Mysql" id="@clevercloud/cdktf-bindings.mysql.Mysql"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql clevercloud_mysql}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.NewMysql(scope Construct, id *string, config MysqlConfig) Mysql
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig">MysqlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig">MysqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.putNetworkgroups">PutNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.putReadOnlyUsers">PutReadOnlyUsers</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetBackup">ResetBackup</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetNetworkgroups">ResetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetReadOnlyUsers">ResetReadOnlyUsers</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mysql.Mysql.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.mysql.Mysql.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.mysql.Mysql.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.mysql.Mysql.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.mysql.Mysql.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.mysql.Mysql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.mysql.Mysql.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.mysql.Mysql.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.mysql.Mysql.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.mysql.Mysql.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.mysql.Mysql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.mysql.Mysql.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.mysql.Mysql.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.mysql.Mysql.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.mysql.Mysql.putNetworkgroups"></a>

```go
func PutNetworkgroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.mysql.Mysql.putNetworkgroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutReadOnlyUsers` <a name="PutReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.Mysql.putReadOnlyUsers"></a>

```go
func PutReadOnlyUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.mysql.Mysql.putReadOnlyUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackup` <a name="ResetBackup" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetBackup"></a>

```go
func ResetBackup()
```

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetNetworkgroups"></a>

```go
func ResetNetworkgroups()
```

##### `ResetReadOnlyUsers` <a name="ResetReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetReadOnlyUsers"></a>

```go
func ResetReadOnlyUsers()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetVersion` <a name="ResetVersion" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@clevercloud/cdktf-bindings.mysql.Mysql.isConstruct"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.Mysql_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.mysql.Mysql.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformElement"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.Mysql_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformResource"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.Mysql_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.Mysql_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Mysql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Mysql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Mysql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.creationDate">CreationDate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList">MysqlNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsers">ReadOnlyUsers</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList">MysqlReadOnlyUsersList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.backupInput">BackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsersInput">ReadOnlyUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.backup">Backup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.creationDate"></a>

```go
func CreationDate() *f64
```

- *Type:* *f64

---

##### `Database`<sup>Required</sup> <a name="Database" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroups"></a>

```go
func Networkgroups() MysqlNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList">MysqlNetworkgroupsList</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ReadOnlyUsers`<sup>Required</sup> <a name="ReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsers"></a>

```go
func ReadOnlyUsers() MysqlReadOnlyUsersList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList">MysqlReadOnlyUsersList</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.backupInput"></a>

```go
func BackupInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroupsInput"></a>

```go
func NetworkgroupsInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `ReadOnlyUsersInput`<sup>Optional</sup> <a name="ReadOnlyUsersInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsersInput"></a>

```go
func ReadOnlyUsersInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.backup"></a>

```go
func Backup() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlConfig <a name="MysqlConfig" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

&mysql.MysqlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Plan: *string,
	Backup: interface{},
	Networkgroups: interface{},
	ReadOnlyUsers: interface{},
	Region: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.name">Name</a></code> | <code>*string</code> | Name of the service. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.plan">Plan</a></code> | <code>*string</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.backup">Backup</a></code> | <code>interface{}</code> | Enable or disable backups for this MySQL add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.networkgroups">Networkgroups</a></code> | <code>interface{}</code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.readOnlyUsers">ReadOnlyUsers</a></code> | <code>interface{}</code> | MySQL users with read-only access. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.region">Region</a></code> | <code>*string</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.version">Version</a></code> | <code>*string</code> | MySQL version. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#name Mysql#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#plan Mysql#plan}

---

##### `Backup`<sup>Optional</sup> <a name="Backup" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.backup"></a>

```go
Backup interface{}
```

- *Type:* interface{}

Enable or disable backups for this MySQL add-on.

Since backups are included in the add-on price, disabling it has no impact on your billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#backup Mysql#backup}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.networkgroups"></a>

```go
Networkgroups interface{}
```

- *Type:* interface{}

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#networkgroups Mysql#networkgroups}

---

##### `ReadOnlyUsers`<sup>Optional</sup> <a name="ReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.readOnlyUsers"></a>

```go
ReadOnlyUsers interface{}
```

- *Type:* interface{}

MySQL users with read-only access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#read_only_users Mysql#read_only_users}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#region Mysql#region}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

MySQL version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#version Mysql#version}

---

### MysqlNetworkgroups <a name="MysqlNetworkgroups" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

&mysql.MysqlNetworkgroups {
	Fqdn: *string,
	NetworkgroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.fqdn">Fqdn</a></code> | <code>*string</code> | domain name which will resolve to addon instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

domain name which will resolve to addon instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#fqdn Mysql#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.networkgroupId"></a>

```go
NetworkgroupId *string
```

- *Type:* *string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#networkgroup_id Mysql#networkgroup_id}

---

### MysqlReadOnlyUsers <a name="MysqlReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

&mysql.MysqlReadOnlyUsers {
	Password: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.password">Password</a></code> | <code>*string</code> | Password for read-only user. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.user">User</a></code> | <code>*string</code> | Username for read-only access. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for read-only user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#password Mysql#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.user"></a>

```go
User *string
```

- *Type:* *string

Username for read-only access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#user Mysql#user}

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlNetworkgroupsList <a name="MysqlNetworkgroupsList" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.NewMysqlNetworkgroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MysqlNetworkgroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.get"></a>

```go
func Get(index *f64) MysqlNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MysqlNetworkgroupsOutputReference <a name="MysqlNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.NewMysqlNetworkgroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MysqlNetworkgroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```go
func NetworkgroupIdInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupId"></a>

```go
func NetworkgroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MysqlReadOnlyUsersList <a name="MysqlReadOnlyUsersList" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.NewMysqlReadOnlyUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MysqlReadOnlyUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.get"></a>

```go
func Get(index *f64) MysqlReadOnlyUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MysqlReadOnlyUsersOutputReference <a name="MysqlReadOnlyUsersOutputReference" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/mysql"

mysql.NewMysqlReadOnlyUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MysqlReadOnlyUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



