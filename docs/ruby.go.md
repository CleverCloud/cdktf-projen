# `ruby` Submodule <a name="`ruby` Submodule" id="@clevercloud/cdktf-bindings.ruby"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ruby <a name="Ruby" id="@clevercloud/cdktf-bindings.ruby.Ruby"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby clevercloud_ruby}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.NewRuby(scope Construct, id *string, config RubyConfig) Ruby
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig">RubyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@clevercloud/cdktf-bindings.ruby.Ruby.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@clevercloud/cdktf-bindings.ruby.Ruby.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@clevercloud/cdktf-bindings.ruby.Ruby.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@clevercloud/cdktf-bindings.ruby.Ruby.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployment` <a name="PutDeployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment"></a>

```go
func PutDeployment(value RubyDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>

---

##### `PutHooks` <a name="PutHooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.putHooks"></a>

```go
func PutHooks(value RubyHooks)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>

---

##### `PutNetworkgroups` <a name="PutNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups"></a>

```go
func PutNetworkgroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVhosts` <a name="PutVhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts"></a>

```go
func PutVhosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppFolder` <a name="ResetAppFolder" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetAppFolder"></a>

```go
func ResetAppFolder()
```

##### `ResetBuildFlavor` <a name="ResetBuildFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetBuildFlavor"></a>

```go
func ResetBuildFlavor()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetDescription` <a name="ResetDescription" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableGzipCompression` <a name="ResetEnableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableGzipCompression"></a>

```go
func ResetEnableGzipCompression()
```

##### `ResetEnableSidekiq` <a name="ResetEnableSidekiq" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableSidekiq"></a>

```go
func ResetEnableSidekiq()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetExposedEnvironment` <a name="ResetExposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetExposedEnvironment"></a>

```go
func ResetExposedEnvironment()
```

##### `ResetGzipTypes` <a name="ResetGzipTypes" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetGzipTypes"></a>

```go
func ResetGzipTypes()
```

##### `ResetHooks` <a name="ResetHooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetHooks"></a>

```go
func ResetHooks()
```

##### `ResetHttpBasicAuth` <a name="ResetHttpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetHttpBasicAuth"></a>

```go
func ResetHttpBasicAuth()
```

##### `ResetNetworkgroups` <a name="ResetNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNetworkgroups"></a>

```go
func ResetNetworkgroups()
```

##### `ResetNginxProxyBuffers` <a name="ResetNginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBuffers"></a>

```go
func ResetNginxProxyBuffers()
```

##### `ResetNginxProxyBufferSize` <a name="ResetNginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBufferSize"></a>

```go
func ResetNginxProxyBufferSize()
```

##### `ResetNginxReadTimeout` <a name="ResetNginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxReadTimeout"></a>

```go
func ResetNginxReadTimeout()
```

##### `ResetRackEnv` <a name="ResetRackEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRackEnv"></a>

```go
func ResetRackEnv()
```

##### `ResetRackupServer` <a name="ResetRackupServer" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRackupServer"></a>

```go
func ResetRackupServer()
```

##### `ResetRailsEnv` <a name="ResetRailsEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRailsEnv"></a>

```go
func ResetRailsEnv()
```

##### `ResetRakeGoals` <a name="ResetRakeGoals" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRakeGoals"></a>

```go
func ResetRakeGoals()
```

##### `ResetRedirectHttps` <a name="ResetRedirectHttps" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRedirectHttps"></a>

```go
func ResetRedirectHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRubyVersion` <a name="ResetRubyVersion" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRubyVersion"></a>

```go
func ResetRubyVersion()
```

##### `ResetSidekiqFiles` <a name="ResetSidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetSidekiqFiles"></a>

```go
func ResetSidekiqFiles()
```

##### `ResetStaticFilesPath` <a name="ResetStaticFilesPath" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticFilesPath"></a>

```go
func ResetStaticFilesPath()
```

##### `ResetStaticUrlPrefix` <a name="ResetStaticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticUrlPrefix"></a>

```go
func ResetStaticUrlPrefix()
```

##### `ResetStaticWebroot` <a name="ResetStaticWebroot" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticWebroot"></a>

```go
func ResetStaticWebroot()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStickySessions"></a>

```go
func ResetStickySessions()
```

##### `ResetVhosts` <a name="ResetVhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetVhosts"></a>

```go
func ResetVhosts()
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

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.Ruby_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.ruby.Ruby.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.Ruby_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.Ruby_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.Ruby_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Ruby resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ruby to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ruby that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Ruby to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference">RubyDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deployUrl">DeployUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference">RubyHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroups">Networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList">RubyNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.vhosts">Vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList">RubyVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolderInput">AppFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavorInput">BiggestFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavorInput">BuildFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependenciesInput">DependenciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deploymentInput">DeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompressionInput">EnableGzipCompressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiqInput">EnableSidekiqInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironmentInput">ExposedEnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypesInput">GzipTypesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.hooksInput">HooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuthInput">HttpBasicAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroupsInput">NetworkgroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffersInput">NginxProxyBuffersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSizeInput">NginxProxyBufferSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeoutInput">NginxReadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnvInput">RackEnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServerInput">RackupServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnvInput">RailsEnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoalsInput">RakeGoalsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttpsInput">RedirectHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersionInput">RubyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFilesInput">SidekiqFilesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavorInput">SmallestFlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPathInput">StaticFilesPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefixInput">StaticUrlPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebrootInput">StaticWebrootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessionsInput">StickySessionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.vhostsInput">VhostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolder">AppFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavor">BiggestFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavor">BuildFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompression">EnableGzipCompression</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiq">EnableSidekiq</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypes">GzipTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuth">HttpBasicAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffers">NginxProxyBuffers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSize">NginxProxyBufferSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeout">NginxReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnv">RackEnv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServer">RackupServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnv">RailsEnv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoals">RakeGoals</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttps">RedirectHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersion">RubyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFiles">SidekiqFiles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavor">SmallestFlavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPath">StaticFilesPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefix">StaticUrlPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebroot">StaticWebroot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessions">StickySessions</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deployment"></a>

```go
func Deployment() RubyDeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference">RubyDeploymentOutputReference</a>

---

##### `DeployUrl`<sup>Required</sup> <a name="DeployUrl" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deployUrl"></a>

```go
func DeployUrl() *string
```

- *Type:* *string

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.hooks"></a>

```go
func Hooks() RubyHooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference">RubyHooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Networkgroups`<sup>Required</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroups"></a>

```go
func Networkgroups() RubyNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList">RubyNetworkgroupsList</a>

---

##### `Vhosts`<sup>Required</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.vhosts"></a>

```go
func Vhosts() RubyVhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList">RubyVhostsList</a>

---

##### `AppFolderInput`<sup>Optional</sup> <a name="AppFolderInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolderInput"></a>

```go
func AppFolderInput() *string
```

- *Type:* *string

---

##### `BiggestFlavorInput`<sup>Optional</sup> <a name="BiggestFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavorInput"></a>

```go
func BiggestFlavorInput() *string
```

- *Type:* *string

---

##### `BuildFlavorInput`<sup>Optional</sup> <a name="BuildFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavorInput"></a>

```go
func BuildFlavorInput() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependenciesInput"></a>

```go
func DependenciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deploymentInput"></a>

```go
func DeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableGzipCompressionInput`<sup>Optional</sup> <a name="EnableGzipCompressionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompressionInput"></a>

```go
func EnableGzipCompressionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSidekiqInput`<sup>Optional</sup> <a name="EnableSidekiqInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiqInput"></a>

```go
func EnableSidekiqInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExposedEnvironmentInput`<sup>Optional</sup> <a name="ExposedEnvironmentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironmentInput"></a>

```go
func ExposedEnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GzipTypesInput`<sup>Optional</sup> <a name="GzipTypesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypesInput"></a>

```go
func GzipTypesInput() *string
```

- *Type:* *string

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.hooksInput"></a>

```go
func HooksInput() interface{}
```

- *Type:* interface{}

---

##### `HttpBasicAuthInput`<sup>Optional</sup> <a name="HttpBasicAuthInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuthInput"></a>

```go
func HttpBasicAuthInput() *string
```

- *Type:* *string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkgroupsInput`<sup>Optional</sup> <a name="NetworkgroupsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroupsInput"></a>

```go
func NetworkgroupsInput() interface{}
```

- *Type:* interface{}

---

##### `NginxProxyBuffersInput`<sup>Optional</sup> <a name="NginxProxyBuffersInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffersInput"></a>

```go
func NginxProxyBuffersInput() *string
```

- *Type:* *string

---

##### `NginxProxyBufferSizeInput`<sup>Optional</sup> <a name="NginxProxyBufferSizeInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSizeInput"></a>

```go
func NginxProxyBufferSizeInput() *string
```

- *Type:* *string

---

##### `NginxReadTimeoutInput`<sup>Optional</sup> <a name="NginxReadTimeoutInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeoutInput"></a>

```go
func NginxReadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `RackEnvInput`<sup>Optional</sup> <a name="RackEnvInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnvInput"></a>

```go
func RackEnvInput() *string
```

- *Type:* *string

---

##### `RackupServerInput`<sup>Optional</sup> <a name="RackupServerInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServerInput"></a>

```go
func RackupServerInput() *string
```

- *Type:* *string

---

##### `RailsEnvInput`<sup>Optional</sup> <a name="RailsEnvInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnvInput"></a>

```go
func RailsEnvInput() *string
```

- *Type:* *string

---

##### `RakeGoalsInput`<sup>Optional</sup> <a name="RakeGoalsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoalsInput"></a>

```go
func RakeGoalsInput() *string
```

- *Type:* *string

---

##### `RedirectHttpsInput`<sup>Optional</sup> <a name="RedirectHttpsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttpsInput"></a>

```go
func RedirectHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RubyVersionInput`<sup>Optional</sup> <a name="RubyVersionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersionInput"></a>

```go
func RubyVersionInput() *string
```

- *Type:* *string

---

##### `SidekiqFilesInput`<sup>Optional</sup> <a name="SidekiqFilesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFilesInput"></a>

```go
func SidekiqFilesInput() *string
```

- *Type:* *string

---

##### `SmallestFlavorInput`<sup>Optional</sup> <a name="SmallestFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavorInput"></a>

```go
func SmallestFlavorInput() *string
```

- *Type:* *string

---

##### `StaticFilesPathInput`<sup>Optional</sup> <a name="StaticFilesPathInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPathInput"></a>

```go
func StaticFilesPathInput() *string
```

- *Type:* *string

---

##### `StaticUrlPrefixInput`<sup>Optional</sup> <a name="StaticUrlPrefixInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefixInput"></a>

```go
func StaticUrlPrefixInput() *string
```

- *Type:* *string

---

##### `StaticWebrootInput`<sup>Optional</sup> <a name="StaticWebrootInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebrootInput"></a>

```go
func StaticWebrootInput() *string
```

- *Type:* *string

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessionsInput"></a>

```go
func StickySessionsInput() interface{}
```

- *Type:* interface{}

---

##### `VhostsInput`<sup>Optional</sup> <a name="VhostsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.vhostsInput"></a>

```go
func VhostsInput() interface{}
```

- *Type:* interface{}

---

##### `AppFolder`<sup>Required</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolder"></a>

```go
func AppFolder() *string
```

- *Type:* *string

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavor"></a>

```go
func BiggestFlavor() *string
```

- *Type:* *string

---

##### `BuildFlavor`<sup>Required</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavor"></a>

```go
func BuildFlavor() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependencies"></a>

```go
func Dependencies() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableGzipCompression`<sup>Required</sup> <a name="EnableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompression"></a>

```go
func EnableGzipCompression() interface{}
```

- *Type:* interface{}

---

##### `EnableSidekiq`<sup>Required</sup> <a name="EnableSidekiq" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiq"></a>

```go
func EnableSidekiq() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExposedEnvironment`<sup>Required</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironment"></a>

```go
func ExposedEnvironment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GzipTypes`<sup>Required</sup> <a name="GzipTypes" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypes"></a>

```go
func GzipTypes() *string
```

- *Type:* *string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuth"></a>

```go
func HttpBasicAuth() *string
```

- *Type:* *string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NginxProxyBuffers`<sup>Required</sup> <a name="NginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffers"></a>

```go
func NginxProxyBuffers() *string
```

- *Type:* *string

---

##### `NginxProxyBufferSize`<sup>Required</sup> <a name="NginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSize"></a>

```go
func NginxProxyBufferSize() *string
```

- *Type:* *string

---

##### `NginxReadTimeout`<sup>Required</sup> <a name="NginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeout"></a>

```go
func NginxReadTimeout() *f64
```

- *Type:* *f64

---

##### `RackEnv`<sup>Required</sup> <a name="RackEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnv"></a>

```go
func RackEnv() *string
```

- *Type:* *string

---

##### `RackupServer`<sup>Required</sup> <a name="RackupServer" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServer"></a>

```go
func RackupServer() *string
```

- *Type:* *string

---

##### `RailsEnv`<sup>Required</sup> <a name="RailsEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnv"></a>

```go
func RailsEnv() *string
```

- *Type:* *string

---

##### `RakeGoals`<sup>Required</sup> <a name="RakeGoals" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoals"></a>

```go
func RakeGoals() *string
```

- *Type:* *string

---

##### `RedirectHttps`<sup>Required</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttps"></a>

```go
func RedirectHttps() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RubyVersion`<sup>Required</sup> <a name="RubyVersion" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersion"></a>

```go
func RubyVersion() *string
```

- *Type:* *string

---

##### `SidekiqFiles`<sup>Required</sup> <a name="SidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFiles"></a>

```go
func SidekiqFiles() *string
```

- *Type:* *string

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavor"></a>

```go
func SmallestFlavor() *string
```

- *Type:* *string

---

##### `StaticFilesPath`<sup>Required</sup> <a name="StaticFilesPath" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPath"></a>

```go
func StaticFilesPath() *string
```

- *Type:* *string

---

##### `StaticUrlPrefix`<sup>Required</sup> <a name="StaticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefix"></a>

```go
func StaticUrlPrefix() *string
```

- *Type:* *string

---

##### `StaticWebroot`<sup>Required</sup> <a name="StaticWebroot" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebroot"></a>

```go
func StaticWebroot() *string
```

- *Type:* *string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessions"></a>

```go
func StickySessions() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RubyConfig <a name="RubyConfig" id="@clevercloud/cdktf-bindings.ruby.RubyConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

&ruby.RubyConfig {
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
	Deployment: github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud.ruby.RubyDeployment,
	Description: *string,
	EnableGzipCompression: interface{},
	EnableSidekiq: interface{},
	Environment: *map[string]*string,
	ExposedEnvironment: *map[string]*string,
	GzipTypes: *string,
	Hooks: github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud.ruby.RubyHooks,
	HttpBasicAuth: *string,
	Networkgroups: interface{},
	NginxProxyBuffers: *string,
	NginxProxyBufferSize: *string,
	NginxReadTimeout: *f64,
	RackEnv: *string,
	RackupServer: *string,
	RailsEnv: *string,
	RakeGoals: *string,
	RedirectHttps: interface{},
	Region: *string,
	RubyVersion: *string,
	SidekiqFiles: *string,
	StaticFilesPath: *string,
	StaticUrlPrefix: *string,
	StaticWebroot: *string,
	StickySessions: interface{},
	Vhosts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.biggestFlavor">BiggestFlavor</a></code> | <code>*string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.name">Name</a></code> | <code>*string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.smallestFlavor">SmallestFlavor</a></code> | <code>*string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.appFolder">AppFolder</a></code> | <code>*string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.buildFlavor">BuildFlavor</a></code> | <code>*string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.deployment">Deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.description">Description</a></code> | <code>*string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableGzipCompression">EnableGzipCompression</a></code> | <code>interface{}</code> | Set to true to gzip-compress through Nginx. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableSidekiq">EnableSidekiq</a></code> | <code>interface{}</code> | Enable Sidekiq background process. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.exposedEnvironment">ExposedEnvironment</a></code> | <code>*map[string]*string</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.gzipTypes">GzipTypes</a></code> | <code>*string</code> | Set the mime types to compress (default: 'text/* application/json application/xml application/javascript image/svg+xml'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.hooks">Hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.httpBasicAuth">HttpBasicAuth</a></code> | <code>*string</code> | Restrict HTTP access to your application (format: 'login:password'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.networkgroups">Networkgroups</a></code> | <code>interface{}</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBuffers">NginxProxyBuffers</a></code> | <code>*string</code> | Sets the number and size of the buffers used for reading a response from the proxied server. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBufferSize">NginxProxyBufferSize</a></code> | <code>*string</code> | Sets the size of the buffer used for reading the first part of the response received from the proxied server. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxReadTimeout">NginxReadTimeout</a></code> | <code>*f64</code> | Read timeout in seconds (default: 300). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackEnv">RackEnv</a></code> | <code>*string</code> | Rack environment variable. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackupServer">RackupServer</a></code> | <code>*string</code> | Server to use for serving the Ruby application (default: puma). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.railsEnv">RailsEnv</a></code> | <code>*string</code> | Rails environment variable. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rakeGoals">RakeGoals</a></code> | <code>*string</code> | Comma-separated list of rake goals to execute (e.g., 'db:migrate,assets:precompile'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.redirectHttps">RedirectHttps</a></code> | <code>interface{}</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.region">Region</a></code> | <code>*string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rubyVersion">RubyVersion</a></code> | <code>*string</code> | Ruby version to use (e.g., '3.3', '3.3.1'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.sidekiqFiles">SidekiqFiles</a></code> | <code>*string</code> | Specify a list of Sidekiq configuration files (e.g., './config/sidekiq_1.yml,./config/sidekiq_2.yml'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticFilesPath">StaticFilesPath</a></code> | <code>*string</code> | Relative path to where your static files are stored. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticUrlPrefix">StaticUrlPrefix</a></code> | <code>*string</code> | The URL path under which you want to serve static files, usually /public. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticWebroot">StaticWebroot</a></code> | <code>*string</code> | Path to the web content to serve, relative to the root of your application. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.stickySessions">StickySessions</a></code> | <code>interface{}</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.vhosts">Vhosts</a></code> | <code>interface{}</code> | List of virtual hosts. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BiggestFlavor`<sup>Required</sup> <a name="BiggestFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.biggestFlavor"></a>

```go
BiggestFlavor *string
```

- *Type:* *string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#biggest_flavor Ruby#biggest_flavor}

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#max_instance_count Ruby#max_instance_count}

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#min_instance_count Ruby#min_instance_count}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#name Ruby#name}

---

##### `SmallestFlavor`<sup>Required</sup> <a name="SmallestFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.smallestFlavor"></a>

```go
SmallestFlavor *string
```

- *Type:* *string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#smallest_flavor Ruby#smallest_flavor}

---

##### `AppFolder`<sup>Optional</sup> <a name="AppFolder" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.appFolder"></a>

```go
AppFolder *string
```

- *Type:* *string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#app_folder Ruby#app_folder}

---

##### `BuildFlavor`<sup>Optional</sup> <a name="BuildFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.buildFlavor"></a>

```go
BuildFlavor *string
```

- *Type:* *string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#build_flavor Ruby#build_flavor}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependencies"></a>

```go
Dependencies *[]*string
```

- *Type:* *[]*string

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#dependencies Ruby#dependencies}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.deployment"></a>

```go
Deployment RubyDeployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#deployment Ruby#deployment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#description Ruby#description}

---

##### `EnableGzipCompression`<sup>Optional</sup> <a name="EnableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableGzipCompression"></a>

```go
EnableGzipCompression interface{}
```

- *Type:* interface{}

Set to true to gzip-compress through Nginx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_gzip_compression Ruby#enable_gzip_compression}

---

##### `EnableSidekiq`<sup>Optional</sup> <a name="EnableSidekiq" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableSidekiq"></a>

```go
EnableSidekiq interface{}
```

- *Type:* interface{}

Enable Sidekiq background process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_sidekiq Ruby#enable_sidekiq}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#environment Ruby#environment}

---

##### `ExposedEnvironment`<sup>Optional</sup> <a name="ExposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.exposedEnvironment"></a>

```go
ExposedEnvironment *map[string]*string
```

- *Type:* *map[string]*string

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#exposed_environment Ruby#exposed_environment}

---

##### `GzipTypes`<sup>Optional</sup> <a name="GzipTypes" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.gzipTypes"></a>

```go
GzipTypes *string
```

- *Type:* *string

Set the mime types to compress (default: 'text/* application/json application/xml application/javascript image/svg+xml').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#gzip_types Ruby#gzip_types}

---

##### `Hooks`<sup>Optional</sup> <a name="Hooks" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.hooks"></a>

```go
Hooks RubyHooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#hooks Ruby#hooks}

---

##### `HttpBasicAuth`<sup>Optional</sup> <a name="HttpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.httpBasicAuth"></a>

```go
HttpBasicAuth *string
```

- *Type:* *string

Restrict HTTP access to your application (format: 'login:password').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#http_basic_auth Ruby#http_basic_auth}

---

##### `Networkgroups`<sup>Optional</sup> <a name="Networkgroups" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.networkgroups"></a>

```go
Networkgroups interface{}
```

- *Type:* interface{}

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroups Ruby#networkgroups}

---

##### `NginxProxyBuffers`<sup>Optional</sup> <a name="NginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBuffers"></a>

```go
NginxProxyBuffers *string
```

- *Type:* *string

Sets the number and size of the buffers used for reading a response from the proxied server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffers Ruby#nginx_proxy_buffers}

---

##### `NginxProxyBufferSize`<sup>Optional</sup> <a name="NginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBufferSize"></a>

```go
NginxProxyBufferSize *string
```

- *Type:* *string

Sets the size of the buffer used for reading the first part of the response received from the proxied server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffer_size Ruby#nginx_proxy_buffer_size}

---

##### `NginxReadTimeout`<sup>Optional</sup> <a name="NginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxReadTimeout"></a>

```go
NginxReadTimeout *f64
```

- *Type:* *f64

Read timeout in seconds (default: 300).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_read_timeout Ruby#nginx_read_timeout}

---

##### `RackEnv`<sup>Optional</sup> <a name="RackEnv" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackEnv"></a>

```go
RackEnv *string
```

- *Type:* *string

Rack environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rack_env Ruby#rack_env}

---

##### `RackupServer`<sup>Optional</sup> <a name="RackupServer" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackupServer"></a>

```go
RackupServer *string
```

- *Type:* *string

Server to use for serving the Ruby application (default: puma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rackup_server Ruby#rackup_server}

---

##### `RailsEnv`<sup>Optional</sup> <a name="RailsEnv" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.railsEnv"></a>

```go
RailsEnv *string
```

- *Type:* *string

Rails environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rails_env Ruby#rails_env}

---

##### `RakeGoals`<sup>Optional</sup> <a name="RakeGoals" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rakeGoals"></a>

```go
RakeGoals *string
```

- *Type:* *string

Comma-separated list of rake goals to execute (e.g., 'db:migrate,assets:precompile').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rake_goals Ruby#rake_goals}

---

##### `RedirectHttps`<sup>Optional</sup> <a name="RedirectHttps" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.redirectHttps"></a>

```go
RedirectHttps interface{}
```

- *Type:* interface{}

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#redirect_https Ruby#redirect_https}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#region Ruby#region}

---

##### `RubyVersion`<sup>Optional</sup> <a name="RubyVersion" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rubyVersion"></a>

```go
RubyVersion *string
```

- *Type:* *string

Ruby version to use (e.g., '3.3', '3.3.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#ruby_version Ruby#ruby_version}

---

##### `SidekiqFiles`<sup>Optional</sup> <a name="SidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.sidekiqFiles"></a>

```go
SidekiqFiles *string
```

- *Type:* *string

Specify a list of Sidekiq configuration files (e.g., './config/sidekiq_1.yml,./config/sidekiq_2.yml').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sidekiq_files Ruby#sidekiq_files}

---

##### `StaticFilesPath`<sup>Optional</sup> <a name="StaticFilesPath" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticFilesPath"></a>

```go
StaticFilesPath *string
```

- *Type:* *string

Relative path to where your static files are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_files_path Ruby#static_files_path}

---

##### `StaticUrlPrefix`<sup>Optional</sup> <a name="StaticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticUrlPrefix"></a>

```go
StaticUrlPrefix *string
```

- *Type:* *string

The URL path under which you want to serve static files, usually /public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_url_prefix Ruby#static_url_prefix}

---

##### `StaticWebroot`<sup>Optional</sup> <a name="StaticWebroot" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticWebroot"></a>

```go
StaticWebroot *string
```

- *Type:* *string

Path to the web content to serve, relative to the root of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_webroot Ruby#static_webroot}

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.stickySessions"></a>

```go
StickySessions interface{}
```

- *Type:* interface{}

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sticky_sessions Ruby#sticky_sessions}

---

##### `Vhosts`<sup>Optional</sup> <a name="Vhosts" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.vhosts"></a>

```go
Vhosts interface{}
```

- *Type:* interface{}

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#vhosts Ruby#vhosts}

---

### RubyDeployment <a name="RubyDeployment" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

&ruby.RubyDeployment {
	AuthenticationBasic: *string,
	Commit: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.authenticationBasic">AuthenticationBasic</a></code> | <code>*string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.commit">Commit</a></code> | <code>*string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.repository">Repository</a></code> | <code>*string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `AuthenticationBasic`<sup>Optional</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.authenticationBasic"></a>

```go
AuthenticationBasic *string
```

- *Type:* *string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#authentication_basic Ruby#authentication_basic}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.commit"></a>

```go
Commit *string
```

- *Type:* *string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#commit Ruby#commit}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#repository Ruby#repository}

---

### RubyHooks <a name="RubyHooks" id="@clevercloud/cdktf-bindings.ruby.RubyHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

&ruby.RubyHooks {
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
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.postBuild">PostBuild</a></code> | <code>*string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preBuild">PreBuild</a></code> | <code>*string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preRun">PreRun</a></code> | <code>*string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runFailed">RunFailed</a></code> | <code>*string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runSucceed">RunSucceed</a></code> | <code>*string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `PostBuild`<sup>Optional</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.postBuild"></a>

```go
PostBuild *string
```

- *Type:* *string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#post_build Ruby#post_build}

---

##### `PreBuild`<sup>Optional</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preBuild"></a>

```go
PreBuild *string
```

- *Type:* *string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_build Ruby#pre_build}

---

##### `PreRun`<sup>Optional</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preRun"></a>

```go
PreRun *string
```

- *Type:* *string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_run Ruby#pre_run}

---

##### `RunFailed`<sup>Optional</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runFailed"></a>

```go
RunFailed *string
```

- *Type:* *string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_failed Ruby#run_failed}

---

##### `RunSucceed`<sup>Optional</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runSucceed"></a>

```go
RunSucceed *string
```

- *Type:* *string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_succeed Ruby#run_succeed}

---

### RubyNetworkgroups <a name="RubyNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

&ruby.RubyNetworkgroups {
	Fqdn: *string,
	NetworkgroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.fqdn">Fqdn</a></code> | <code>*string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | ID of the networkgroup. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.networkgroupId"></a>

```go
NetworkgroupId *string
```

- *Type:* *string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroup_id Ruby#networkgroup_id}

---

### RubyVhosts <a name="RubyVhosts" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

&ruby.RubyVhosts {
	Fqdn: *string,
	PathBegin: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.fqdn">Fqdn</a></code> | <code>*string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.pathBegin">PathBegin</a></code> | <code>*string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}

---

##### `PathBegin`<sup>Optional</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.pathBegin"></a>

```go
PathBegin *string
```

- *Type:* *string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#path_begin Ruby#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### RubyDeploymentOutputReference <a name="RubyDeploymentOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.NewRubyDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RubyDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationBasic` <a name="ResetAuthenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetAuthenticationBasic"></a>

```go
func ResetAuthenticationBasic()
```

##### `ResetCommit` <a name="ResetCommit" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetCommit"></a>

```go
func ResetCommit()
```

##### `ResetRepository` <a name="ResetRepository" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasicInput">AuthenticationBasicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commitInput">CommitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasic">AuthenticationBasic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commit">Commit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationBasicInput`<sup>Optional</sup> <a name="AuthenticationBasicInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasicInput"></a>

```go
func AuthenticationBasicInput() *string
```

- *Type:* *string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commitInput"></a>

```go
func CommitInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `AuthenticationBasic`<sup>Required</sup> <a name="AuthenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasic"></a>

```go
func AuthenticationBasic() *string
```

- *Type:* *string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commit"></a>

```go
func Commit() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RubyHooksOutputReference <a name="RubyHooksOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.NewRubyHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RubyHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostBuild` <a name="ResetPostBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPostBuild"></a>

```go
func ResetPostBuild()
```

##### `ResetPreBuild` <a name="ResetPreBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreBuild"></a>

```go
func ResetPreBuild()
```

##### `ResetPreRun` <a name="ResetPreRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreRun"></a>

```go
func ResetPreRun()
```

##### `ResetRunFailed` <a name="ResetRunFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunFailed"></a>

```go
func ResetRunFailed()
```

##### `ResetRunSucceed` <a name="ResetRunSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunSucceed"></a>

```go
func ResetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuildInput">PostBuildInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuildInput">PreBuildInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRunInput">PreRunInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailedInput">RunFailedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceedInput">RunSucceedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuild">PostBuild</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuild">PreBuild</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRun">PreRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailed">RunFailed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceed">RunSucceed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostBuildInput`<sup>Optional</sup> <a name="PostBuildInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuildInput"></a>

```go
func PostBuildInput() *string
```

- *Type:* *string

---

##### `PreBuildInput`<sup>Optional</sup> <a name="PreBuildInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuildInput"></a>

```go
func PreBuildInput() *string
```

- *Type:* *string

---

##### `PreRunInput`<sup>Optional</sup> <a name="PreRunInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRunInput"></a>

```go
func PreRunInput() *string
```

- *Type:* *string

---

##### `RunFailedInput`<sup>Optional</sup> <a name="RunFailedInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailedInput"></a>

```go
func RunFailedInput() *string
```

- *Type:* *string

---

##### `RunSucceedInput`<sup>Optional</sup> <a name="RunSucceedInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceedInput"></a>

```go
func RunSucceedInput() *string
```

- *Type:* *string

---

##### `PostBuild`<sup>Required</sup> <a name="PostBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuild"></a>

```go
func PostBuild() *string
```

- *Type:* *string

---

##### `PreBuild`<sup>Required</sup> <a name="PreBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuild"></a>

```go
func PreBuild() *string
```

- *Type:* *string

---

##### `PreRun`<sup>Required</sup> <a name="PreRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRun"></a>

```go
func PreRun() *string
```

- *Type:* *string

---

##### `RunFailed`<sup>Required</sup> <a name="RunFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailed"></a>

```go
func RunFailed() *string
```

- *Type:* *string

---

##### `RunSucceed`<sup>Required</sup> <a name="RunSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceed"></a>

```go
func RunSucceed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RubyNetworkgroupsList <a name="RubyNetworkgroupsList" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.NewRubyNetworkgroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RubyNetworkgroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get"></a>

```go
func Get(index *f64) RubyNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RubyNetworkgroupsOutputReference <a name="RubyNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.NewRubyNetworkgroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RubyNetworkgroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupIdInput">NetworkgroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupId">NetworkgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `NetworkgroupIdInput`<sup>Optional</sup> <a name="NetworkgroupIdInput" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```go
func NetworkgroupIdInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `NetworkgroupId`<sup>Required</sup> <a name="NetworkgroupId" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupId"></a>

```go
func NetworkgroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RubyVhostsList <a name="RubyVhostsList" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.NewRubyVhostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RubyVhostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get"></a>

```go
func Get(index *f64) RubyVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RubyVhostsOutputReference <a name="RubyVhostsOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer"></a>

```go
import "github.com/clevercloud/cdktf-provider-clevercloud-go/clevercloud/ruby"

ruby.NewRubyVhostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RubyVhostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathBegin` <a name="ResetPathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resetPathBegin"></a>

```go
func ResetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBeginInput">PathBeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBegin">PathBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `PathBeginInput`<sup>Optional</sup> <a name="PathBeginInput" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBeginInput"></a>

```go
func PathBeginInput() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `PathBegin`<sup>Required</sup> <a name="PathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBegin"></a>

```go
func PathBegin() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



