# `ruby` Submodule <a name="`ruby` Submodule" id="@clevercloud/cdktf-bindings.ruby"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ruby <a name="Ruby" id="@clevercloud/cdktf-bindings.ruby.Ruby"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby clevercloud_ruby}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

new ruby.Ruby(scope: Construct, id: string, config: RubyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig">RubyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.ruby.Ruby.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig">RubyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts">putVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetAppFolder">resetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetBuildFlavor">resetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableGzipCompression">resetEnableGzipCompression</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableSidekiq">resetEnableSidekiq</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetExposedEnvironment">resetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetGzipTypes">resetGzipTypes</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetHooks">resetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetHttpBasicAuth">resetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBuffers">resetNginxProxyBuffers</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBufferSize">resetNginxProxyBufferSize</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxReadTimeout">resetNginxReadTimeout</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRackEnv">resetRackEnv</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRackupServer">resetRackupServer</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRailsEnv">resetRailsEnv</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRakeGoals">resetRakeGoals</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRedirectHttps">resetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetRubyVersion">resetRubyVersion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetSidekiqFiles">resetSidekiqFiles</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticFilesPath">resetStaticFilesPath</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticUrlPrefix">resetStaticUrlPrefix</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticWebroot">resetStaticWebroot</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.resetVhosts">resetVhosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.ruby.Ruby.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.ruby.Ruby.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.ruby.Ruby.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.ruby.Ruby.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.ruby.Ruby.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.Ruby.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment"></a>

```typescript
public putDeployment(value: RubyDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>

---

##### `putHooks` <a name="putHooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.putHooks"></a>

```typescript
public putHooks(value: RubyHooks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups"></a>

```typescript
public putNetworkgroups(value: IResolvable | RubyNetworkgroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

---

##### `putVhosts` <a name="putVhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts"></a>

```typescript
public putVhosts(value: IResolvable | RubyVhosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.ruby.Ruby.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

---

##### `resetAppFolder` <a name="resetAppFolder" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetAppFolder"></a>

```typescript
public resetAppFolder(): void
```

##### `resetBuildFlavor` <a name="resetBuildFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetBuildFlavor"></a>

```typescript
public resetBuildFlavor(): void
```

##### `resetDependencies` <a name="resetDependencies" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDependencies"></a>

```typescript
public resetDependencies(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetDescription` <a name="resetDescription" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableGzipCompression` <a name="resetEnableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableGzipCompression"></a>

```typescript
public resetEnableGzipCompression(): void
```

##### `resetEnableSidekiq` <a name="resetEnableSidekiq" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnableSidekiq"></a>

```typescript
public resetEnableSidekiq(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetExposedEnvironment` <a name="resetExposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetExposedEnvironment"></a>

```typescript
public resetExposedEnvironment(): void
```

##### `resetGzipTypes` <a name="resetGzipTypes" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetGzipTypes"></a>

```typescript
public resetGzipTypes(): void
```

##### `resetHooks` <a name="resetHooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetHooks"></a>

```typescript
public resetHooks(): void
```

##### `resetHttpBasicAuth` <a name="resetHttpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetHttpBasicAuth"></a>

```typescript
public resetHttpBasicAuth(): void
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNetworkgroups"></a>

```typescript
public resetNetworkgroups(): void
```

##### `resetNginxProxyBuffers` <a name="resetNginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBuffers"></a>

```typescript
public resetNginxProxyBuffers(): void
```

##### `resetNginxProxyBufferSize` <a name="resetNginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxProxyBufferSize"></a>

```typescript
public resetNginxProxyBufferSize(): void
```

##### `resetNginxReadTimeout` <a name="resetNginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetNginxReadTimeout"></a>

```typescript
public resetNginxReadTimeout(): void
```

##### `resetRackEnv` <a name="resetRackEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRackEnv"></a>

```typescript
public resetRackEnv(): void
```

##### `resetRackupServer` <a name="resetRackupServer" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRackupServer"></a>

```typescript
public resetRackupServer(): void
```

##### `resetRailsEnv` <a name="resetRailsEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRailsEnv"></a>

```typescript
public resetRailsEnv(): void
```

##### `resetRakeGoals` <a name="resetRakeGoals" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRakeGoals"></a>

```typescript
public resetRakeGoals(): void
```

##### `resetRedirectHttps` <a name="resetRedirectHttps" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRedirectHttps"></a>

```typescript
public resetRedirectHttps(): void
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRubyVersion` <a name="resetRubyVersion" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetRubyVersion"></a>

```typescript
public resetRubyVersion(): void
```

##### `resetSidekiqFiles` <a name="resetSidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetSidekiqFiles"></a>

```typescript
public resetSidekiqFiles(): void
```

##### `resetStaticFilesPath` <a name="resetStaticFilesPath" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticFilesPath"></a>

```typescript
public resetStaticFilesPath(): void
```

##### `resetStaticUrlPrefix` <a name="resetStaticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticUrlPrefix"></a>

```typescript
public resetStaticUrlPrefix(): void
```

##### `resetStaticWebroot` <a name="resetStaticWebroot" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStaticWebroot"></a>

```typescript
public resetStaticWebroot(): void
```

##### `resetStickySessions` <a name="resetStickySessions" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetStickySessions"></a>

```typescript
public resetStickySessions(): void
```

##### `resetVhosts` <a name="resetVhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.resetVhosts"></a>

```typescript
public resetVhosts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ruby resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.ruby.Ruby.isConstruct"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

ruby.Ruby.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

ruby.Ruby.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

ruby.Ruby.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.ruby.Ruby.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

ruby.Ruby.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ruby resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ruby to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ruby that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ruby to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference">RubyDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deployUrl">deployUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference">RubyHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList">RubyNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList">RubyVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolderInput">appFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavorInput">biggestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavorInput">buildFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependenciesInput">dependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompressionInput">enableGzipCompressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiqInput">enableSidekiqInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironmentInput">exposedEnvironmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypesInput">gzipTypesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.hooksInput">hooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuthInput">httpBasicAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroupsInput">networkgroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffersInput">nginxProxyBuffersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSizeInput">nginxProxyBufferSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeoutInput">nginxReadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnvInput">rackEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServerInput">rackupServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnvInput">railsEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoalsInput">rakeGoalsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttpsInput">redirectHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersionInput">rubyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFilesInput">sidekiqFilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavorInput">smallestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPathInput">staticFilesPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefixInput">staticUrlPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebrootInput">staticWebrootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessionsInput">stickySessionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.vhostsInput">vhostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolder">appFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.dependencies">dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompression">enableGzipCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiq">enableSidekiq</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypes">gzipTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuth">httpBasicAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffers">nginxProxyBuffers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSize">nginxProxyBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeout">nginxReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnv">rackEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServer">rackupServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnv">railsEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoals">rakeGoals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFiles">sidekiqFiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPath">staticFilesPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefix">staticUrlPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebroot">staticWebroot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deployment"></a>

```typescript
public readonly deployment: RubyDeploymentOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference">RubyDeploymentOutputReference</a>

---

##### `deployUrl`<sup>Required</sup> <a name="deployUrl" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deployUrl"></a>

```typescript
public readonly deployUrl: string;
```

- *Type:* string

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.hooks"></a>

```typescript
public readonly hooks: RubyHooksOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference">RubyHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroups"></a>

```typescript
public readonly networkgroups: RubyNetworkgroupsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList">RubyNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.vhosts"></a>

```typescript
public readonly vhosts: RubyVhostsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList">RubyVhostsList</a>

---

##### `appFolderInput`<sup>Optional</sup> <a name="appFolderInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolderInput"></a>

```typescript
public readonly appFolderInput: string;
```

- *Type:* string

---

##### `biggestFlavorInput`<sup>Optional</sup> <a name="biggestFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavorInput"></a>

```typescript
public readonly biggestFlavorInput: string;
```

- *Type:* string

---

##### `buildFlavorInput`<sup>Optional</sup> <a name="buildFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavorInput"></a>

```typescript
public readonly buildFlavorInput: string;
```

- *Type:* string

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: string[];
```

- *Type:* string[]

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: RubyDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a> | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableGzipCompressionInput`<sup>Optional</sup> <a name="enableGzipCompressionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompressionInput"></a>

```typescript
public readonly enableGzipCompressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSidekiqInput`<sup>Optional</sup> <a name="enableSidekiqInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiqInput"></a>

```typescript
public readonly enableSidekiqInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironmentInput`<sup>Optional</sup> <a name="exposedEnvironmentInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironmentInput"></a>

```typescript
public readonly exposedEnvironmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gzipTypesInput`<sup>Optional</sup> <a name="gzipTypesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypesInput"></a>

```typescript
public readonly gzipTypesInput: string;
```

- *Type:* string

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.hooksInput"></a>

```typescript
public readonly hooksInput: RubyHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a> | cdktf.IResolvable

---

##### `httpBasicAuthInput`<sup>Optional</sup> <a name="httpBasicAuthInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuthInput"></a>

```typescript
public readonly httpBasicAuthInput: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.networkgroupsInput"></a>

```typescript
public readonly networkgroupsInput: IResolvable | RubyNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

---

##### `nginxProxyBuffersInput`<sup>Optional</sup> <a name="nginxProxyBuffersInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffersInput"></a>

```typescript
public readonly nginxProxyBuffersInput: string;
```

- *Type:* string

---

##### `nginxProxyBufferSizeInput`<sup>Optional</sup> <a name="nginxProxyBufferSizeInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSizeInput"></a>

```typescript
public readonly nginxProxyBufferSizeInput: string;
```

- *Type:* string

---

##### `nginxReadTimeoutInput`<sup>Optional</sup> <a name="nginxReadTimeoutInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeoutInput"></a>

```typescript
public readonly nginxReadTimeoutInput: number;
```

- *Type:* number

---

##### `rackEnvInput`<sup>Optional</sup> <a name="rackEnvInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnvInput"></a>

```typescript
public readonly rackEnvInput: string;
```

- *Type:* string

---

##### `rackupServerInput`<sup>Optional</sup> <a name="rackupServerInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServerInput"></a>

```typescript
public readonly rackupServerInput: string;
```

- *Type:* string

---

##### `railsEnvInput`<sup>Optional</sup> <a name="railsEnvInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnvInput"></a>

```typescript
public readonly railsEnvInput: string;
```

- *Type:* string

---

##### `rakeGoalsInput`<sup>Optional</sup> <a name="rakeGoalsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoalsInput"></a>

```typescript
public readonly rakeGoalsInput: string;
```

- *Type:* string

---

##### `redirectHttpsInput`<sup>Optional</sup> <a name="redirectHttpsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttpsInput"></a>

```typescript
public readonly redirectHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rubyVersionInput`<sup>Optional</sup> <a name="rubyVersionInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersionInput"></a>

```typescript
public readonly rubyVersionInput: string;
```

- *Type:* string

---

##### `sidekiqFilesInput`<sup>Optional</sup> <a name="sidekiqFilesInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFilesInput"></a>

```typescript
public readonly sidekiqFilesInput: string;
```

- *Type:* string

---

##### `smallestFlavorInput`<sup>Optional</sup> <a name="smallestFlavorInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavorInput"></a>

```typescript
public readonly smallestFlavorInput: string;
```

- *Type:* string

---

##### `staticFilesPathInput`<sup>Optional</sup> <a name="staticFilesPathInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPathInput"></a>

```typescript
public readonly staticFilesPathInput: string;
```

- *Type:* string

---

##### `staticUrlPrefixInput`<sup>Optional</sup> <a name="staticUrlPrefixInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefixInput"></a>

```typescript
public readonly staticUrlPrefixInput: string;
```

- *Type:* string

---

##### `staticWebrootInput`<sup>Optional</sup> <a name="staticWebrootInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebrootInput"></a>

```typescript
public readonly staticWebrootInput: string;
```

- *Type:* string

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessionsInput"></a>

```typescript
public readonly stickySessionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vhostsInput`<sup>Optional</sup> <a name="vhostsInput" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.vhostsInput"></a>

```typescript
public readonly vhostsInput: IResolvable | RubyVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

---

##### `appFolder`<sup>Required</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

---

##### `buildFlavor`<sup>Required</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableGzipCompression`<sup>Required</sup> <a name="enableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableGzipCompression"></a>

```typescript
public readonly enableGzipCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSidekiq`<sup>Required</sup> <a name="enableSidekiq" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.enableSidekiq"></a>

```typescript
public readonly enableSidekiq: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironment`<sup>Required</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gzipTypes`<sup>Required</sup> <a name="gzipTypes" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.gzipTypes"></a>

```typescript
public readonly gzipTypes: string;
```

- *Type:* string

---

##### `httpBasicAuth`<sup>Required</sup> <a name="httpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: string;
```

- *Type:* string

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nginxProxyBuffers`<sup>Required</sup> <a name="nginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBuffers"></a>

```typescript
public readonly nginxProxyBuffers: string;
```

- *Type:* string

---

##### `nginxProxyBufferSize`<sup>Required</sup> <a name="nginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxProxyBufferSize"></a>

```typescript
public readonly nginxProxyBufferSize: string;
```

- *Type:* string

---

##### `nginxReadTimeout`<sup>Required</sup> <a name="nginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.nginxReadTimeout"></a>

```typescript
public readonly nginxReadTimeout: number;
```

- *Type:* number

---

##### `rackEnv`<sup>Required</sup> <a name="rackEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackEnv"></a>

```typescript
public readonly rackEnv: string;
```

- *Type:* string

---

##### `rackupServer`<sup>Required</sup> <a name="rackupServer" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rackupServer"></a>

```typescript
public readonly rackupServer: string;
```

- *Type:* string

---

##### `railsEnv`<sup>Required</sup> <a name="railsEnv" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.railsEnv"></a>

```typescript
public readonly railsEnv: string;
```

- *Type:* string

---

##### `rakeGoals`<sup>Required</sup> <a name="rakeGoals" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rakeGoals"></a>

```typescript
public readonly rakeGoals: string;
```

- *Type:* string

---

##### `redirectHttps`<sup>Required</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rubyVersion`<sup>Required</sup> <a name="rubyVersion" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

---

##### `sidekiqFiles`<sup>Required</sup> <a name="sidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.sidekiqFiles"></a>

```typescript
public readonly sidekiqFiles: string;
```

- *Type:* string

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

---

##### `staticFilesPath`<sup>Required</sup> <a name="staticFilesPath" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticFilesPath"></a>

```typescript
public readonly staticFilesPath: string;
```

- *Type:* string

---

##### `staticUrlPrefix`<sup>Required</sup> <a name="staticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticUrlPrefix"></a>

```typescript
public readonly staticUrlPrefix: string;
```

- *Type:* string

---

##### `staticWebroot`<sup>Required</sup> <a name="staticWebroot" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.staticWebroot"></a>

```typescript
public readonly staticWebroot: string;
```

- *Type:* string

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.Ruby.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.ruby.Ruby.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RubyConfig <a name="RubyConfig" id="@clevercloud/cdktf-bindings.ruby.RubyConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

const rubyConfig: ruby.RubyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.name">name</a></code> | <code>string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.appFolder">appFolder</a></code> | <code>string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependencies">dependencies</a></code> | <code>string[]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.description">description</a></code> | <code>string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableGzipCompression">enableGzipCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to gzip-compress through Nginx. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableSidekiq">enableSidekiq</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Sidekiq background process. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.gzipTypes">gzipTypes</a></code> | <code>string</code> | Set the mime types to compress (default: 'text/* application/json application/xml application/javascript image/svg+xml'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.httpBasicAuth">httpBasicAuth</a></code> | <code>string</code> | Restrict HTTP access to your application (format: 'login:password'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBuffers">nginxProxyBuffers</a></code> | <code>string</code> | Sets the number and size of the buffers used for reading a response from the proxied server. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBufferSize">nginxProxyBufferSize</a></code> | <code>string</code> | Sets the size of the buffer used for reading the first part of the response received from the proxied server. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxReadTimeout">nginxReadTimeout</a></code> | <code>number</code> | Read timeout in seconds (default: 300). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackEnv">rackEnv</a></code> | <code>string</code> | Rack environment variable. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackupServer">rackupServer</a></code> | <code>string</code> | Server to use for serving the Ruby application (default: puma). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.railsEnv">railsEnv</a></code> | <code>string</code> | Rails environment variable. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rakeGoals">rakeGoals</a></code> | <code>string</code> | Comma-separated list of rake goals to execute (e.g., 'db:migrate,assets:precompile'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.region">region</a></code> | <code>string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | Ruby version to use (e.g., '3.3', '3.3.1'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.sidekiqFiles">sidekiqFiles</a></code> | <code>string</code> | Specify a list of Sidekiq configuration files (e.g., './config/sidekiq_1.yml,./config/sidekiq_2.yml'). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticFilesPath">staticFilesPath</a></code> | <code>string</code> | Relative path to where your static files are stored. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticUrlPrefix">staticUrlPrefix</a></code> | <code>string</code> | The URL path under which you want to serve static files, usually /public. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticWebroot">staticWebroot</a></code> | <code>string</code> | Path to the web content to serve, relative to the root of your application. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#biggest_flavor Ruby#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#max_instance_count Ruby#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#min_instance_count Ruby#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#name Ruby#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#smallest_flavor Ruby#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#app_folder Ruby#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#build_flavor Ruby#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#dependencies Ruby#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.deployment"></a>

```typescript
public readonly deployment: RubyDeployment;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#deployment Ruby#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#description Ruby#description}

---

##### `enableGzipCompression`<sup>Optional</sup> <a name="enableGzipCompression" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableGzipCompression"></a>

```typescript
public readonly enableGzipCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to gzip-compress through Nginx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_gzip_compression Ruby#enable_gzip_compression}

---

##### `enableSidekiq`<sup>Optional</sup> <a name="enableSidekiq" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.enableSidekiq"></a>

```typescript
public readonly enableSidekiq: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Sidekiq background process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_sidekiq Ruby#enable_sidekiq}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#environment Ruby#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#exposed_environment Ruby#exposed_environment}

---

##### `gzipTypes`<sup>Optional</sup> <a name="gzipTypes" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.gzipTypes"></a>

```typescript
public readonly gzipTypes: string;
```

- *Type:* string

Set the mime types to compress (default: 'text/* application/json application/xml application/javascript image/svg+xml').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#gzip_types Ruby#gzip_types}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.hooks"></a>

```typescript
public readonly hooks: RubyHooks;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#hooks Ruby#hooks}

---

##### `httpBasicAuth`<sup>Optional</sup> <a name="httpBasicAuth" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: string;
```

- *Type:* string

Restrict HTTP access to your application (format: 'login:password').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#http_basic_auth Ruby#http_basic_auth}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.networkgroups"></a>

```typescript
public readonly networkgroups: IResolvable | RubyNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroups Ruby#networkgroups}

---

##### `nginxProxyBuffers`<sup>Optional</sup> <a name="nginxProxyBuffers" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBuffers"></a>

```typescript
public readonly nginxProxyBuffers: string;
```

- *Type:* string

Sets the number and size of the buffers used for reading a response from the proxied server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffers Ruby#nginx_proxy_buffers}

---

##### `nginxProxyBufferSize`<sup>Optional</sup> <a name="nginxProxyBufferSize" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxProxyBufferSize"></a>

```typescript
public readonly nginxProxyBufferSize: string;
```

- *Type:* string

Sets the size of the buffer used for reading the first part of the response received from the proxied server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffer_size Ruby#nginx_proxy_buffer_size}

---

##### `nginxReadTimeout`<sup>Optional</sup> <a name="nginxReadTimeout" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.nginxReadTimeout"></a>

```typescript
public readonly nginxReadTimeout: number;
```

- *Type:* number

Read timeout in seconds (default: 300).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_read_timeout Ruby#nginx_read_timeout}

---

##### `rackEnv`<sup>Optional</sup> <a name="rackEnv" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackEnv"></a>

```typescript
public readonly rackEnv: string;
```

- *Type:* string

Rack environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rack_env Ruby#rack_env}

---

##### `rackupServer`<sup>Optional</sup> <a name="rackupServer" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rackupServer"></a>

```typescript
public readonly rackupServer: string;
```

- *Type:* string

Server to use for serving the Ruby application (default: puma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rackup_server Ruby#rackup_server}

---

##### `railsEnv`<sup>Optional</sup> <a name="railsEnv" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.railsEnv"></a>

```typescript
public readonly railsEnv: string;
```

- *Type:* string

Rails environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rails_env Ruby#rails_env}

---

##### `rakeGoals`<sup>Optional</sup> <a name="rakeGoals" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rakeGoals"></a>

```typescript
public readonly rakeGoals: string;
```

- *Type:* string

Comma-separated list of rake goals to execute (e.g., 'db:migrate,assets:precompile').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rake_goals Ruby#rake_goals}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#redirect_https Ruby#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#region Ruby#region}

---

##### `rubyVersion`<sup>Optional</sup> <a name="rubyVersion" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

Ruby version to use (e.g., '3.3', '3.3.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#ruby_version Ruby#ruby_version}

---

##### `sidekiqFiles`<sup>Optional</sup> <a name="sidekiqFiles" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.sidekiqFiles"></a>

```typescript
public readonly sidekiqFiles: string;
```

- *Type:* string

Specify a list of Sidekiq configuration files (e.g., './config/sidekiq_1.yml,./config/sidekiq_2.yml').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sidekiq_files Ruby#sidekiq_files}

---

##### `staticFilesPath`<sup>Optional</sup> <a name="staticFilesPath" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticFilesPath"></a>

```typescript
public readonly staticFilesPath: string;
```

- *Type:* string

Relative path to where your static files are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_files_path Ruby#static_files_path}

---

##### `staticUrlPrefix`<sup>Optional</sup> <a name="staticUrlPrefix" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticUrlPrefix"></a>

```typescript
public readonly staticUrlPrefix: string;
```

- *Type:* string

The URL path under which you want to serve static files, usually /public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_url_prefix Ruby#static_url_prefix}

---

##### `staticWebroot`<sup>Optional</sup> <a name="staticWebroot" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.staticWebroot"></a>

```typescript
public readonly staticWebroot: string;
```

- *Type:* string

Path to the web content to serve, relative to the root of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_webroot Ruby#static_webroot}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sticky_sessions Ruby#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.ruby.RubyConfig.property.vhosts"></a>

```typescript
public readonly vhosts: IResolvable | RubyVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#vhosts Ruby#vhosts}

---

### RubyDeployment <a name="RubyDeployment" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

const rubyDeployment: ruby.RubyDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.commit">commit</a></code> | <code>string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.repository">repository</a></code> | <code>string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authenticationBasic`<sup>Optional</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#authentication_basic Ruby#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#commit Ruby#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.ruby.RubyDeployment.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#repository Ruby#repository}

---

### RubyHooks <a name="RubyHooks" id="@clevercloud/cdktf-bindings.ruby.RubyHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

const rubyHooks: ruby.RubyHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.postBuild">postBuild</a></code> | <code>string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preBuild">preBuild</a></code> | <code>string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preRun">preRun</a></code> | <code>string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runFailed">runFailed</a></code> | <code>string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runSucceed">runSucceed</a></code> | <code>string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `postBuild`<sup>Optional</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#post_build Ruby#post_build}

---

##### `preBuild`<sup>Optional</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_build Ruby#pre_build}

---

##### `preRun`<sup>Optional</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_run Ruby#pre_run}

---

##### `runFailed`<sup>Optional</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_failed Ruby#run_failed}

---

##### `runSucceed`<sup>Optional</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooks.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_succeed Ruby#run_succeed}

---

### RubyNetworkgroups <a name="RubyNetworkgroups" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

const rubyNetworkgroups: ruby.RubyNetworkgroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.fqdn">fqdn</a></code> | <code>string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroup_id Ruby#networkgroup_id}

---

### RubyVhosts <a name="RubyVhosts" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

const rubyVhosts: ruby.RubyVhosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.fqdn">fqdn</a></code> | <code>string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.pathBegin">pathBegin</a></code> | <code>string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}

---

##### `pathBegin`<sup>Optional</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhosts.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#path_begin Ruby#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### RubyDeploymentOutputReference <a name="RubyDeploymentOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

new ruby.RubyDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetAuthenticationBasic">resetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationBasic` <a name="resetAuthenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetAuthenticationBasic"></a>

```typescript
public resetAuthenticationBasic(): void
```

##### `resetCommit` <a name="resetCommit" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetRepository` <a name="resetRepository" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasicInput">authenticationBasicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationBasicInput`<sup>Optional</sup> <a name="authenticationBasicInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasicInput"></a>

```typescript
public readonly authenticationBasicInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `authenticationBasic`<sup>Required</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.ruby.RubyDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RubyDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyDeployment">RubyDeployment</a> | cdktf.IResolvable

---


### RubyHooksOutputReference <a name="RubyHooksOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

new ruby.RubyHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPostBuild">resetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreBuild">resetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreRun">resetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunFailed">resetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunSucceed">resetRunSucceed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostBuild` <a name="resetPostBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPostBuild"></a>

```typescript
public resetPostBuild(): void
```

##### `resetPreBuild` <a name="resetPreBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreBuild"></a>

```typescript
public resetPreBuild(): void
```

##### `resetPreRun` <a name="resetPreRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetPreRun"></a>

```typescript
public resetPreRun(): void
```

##### `resetRunFailed` <a name="resetRunFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunFailed"></a>

```typescript
public resetRunFailed(): void
```

##### `resetRunSucceed` <a name="resetRunSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.resetRunSucceed"></a>

```typescript
public resetRunSucceed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuildInput">postBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuildInput">preBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRunInput">preRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailedInput">runFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceedInput">runSucceedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuild">postBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuild">preBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRun">preRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailed">runFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceed">runSucceed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postBuildInput`<sup>Optional</sup> <a name="postBuildInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuildInput"></a>

```typescript
public readonly postBuildInput: string;
```

- *Type:* string

---

##### `preBuildInput`<sup>Optional</sup> <a name="preBuildInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuildInput"></a>

```typescript
public readonly preBuildInput: string;
```

- *Type:* string

---

##### `preRunInput`<sup>Optional</sup> <a name="preRunInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRunInput"></a>

```typescript
public readonly preRunInput: string;
```

- *Type:* string

---

##### `runFailedInput`<sup>Optional</sup> <a name="runFailedInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailedInput"></a>

```typescript
public readonly runFailedInput: string;
```

- *Type:* string

---

##### `runSucceedInput`<sup>Optional</sup> <a name="runSucceedInput" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceedInput"></a>

```typescript
public readonly runSucceedInput: string;
```

- *Type:* string

---

##### `postBuild`<sup>Required</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

---

##### `preBuild`<sup>Required</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

---

##### `preRun`<sup>Required</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

---

##### `runFailed`<sup>Required</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

---

##### `runSucceed`<sup>Required</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.ruby.RubyHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RubyHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyHooks">RubyHooks</a> | cdktf.IResolvable

---


### RubyNetworkgroupsList <a name="RubyNetworkgroupsList" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

new ruby.RubyNetworkgroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get"></a>

```typescript
public get(index: number): RubyNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RubyNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a>[]

---


### RubyNetworkgroupsOutputReference <a name="RubyNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

new ruby.RubyNetworkgroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```typescript
public readonly networkgroupIdInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.ruby.RubyNetworkgroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RubyNetworkgroups | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyNetworkgroups">RubyNetworkgroups</a> | cdktf.IResolvable

---


### RubyVhostsList <a name="RubyVhostsList" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

new ruby.RubyVhostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get"></a>

```typescript
public get(index: number): RubyVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RubyVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a>[]

---


### RubyVhostsOutputReference <a name="RubyVhostsOutputReference" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer"></a>

```typescript
import { ruby } from '@clevercloud/cdktf-bindings'

new ruby.RubyVhostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resetPathBegin">resetPathBegin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathBegin` <a name="resetPathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.resetPathBegin"></a>

```typescript
public resetPathBegin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBeginInput">pathBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBegin">pathBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `pathBeginInput`<sup>Optional</sup> <a name="pathBeginInput" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBeginInput"></a>

```typescript
public readonly pathBeginInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `pathBegin`<sup>Required</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.ruby.RubyVhostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RubyVhosts | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.ruby.RubyVhosts">RubyVhosts</a> | cdktf.IResolvable

---



