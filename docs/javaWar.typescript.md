# `javaWar` Submodule <a name="`javaWar` Submodule" id="@clevercloud/cdktf-bindings.javaWar"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JavaWar <a name="JavaWar" id="@clevercloud/cdktf-bindings.javaWar.JavaWar"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war clevercloud_java_war}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

new javaWar.JavaWar(scope: Construct, id: string, config: JavaWarConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig">JavaWarConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig">JavaWarConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.putVhosts">putVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetAppFolder">resetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetBuildFlavor">resetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetExposedEnvironment">resetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetHooks">resetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetRedirectHttps">resetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.resetVhosts">resetVhosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putDeployment"></a>

```typescript
public putDeployment(value: JavaWarDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment">JavaWarDeployment</a>

---

##### `putHooks` <a name="putHooks" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putHooks"></a>

```typescript
public putHooks(value: JavaWarHooks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks">JavaWarHooks</a>

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putNetworkgroups"></a>

```typescript
public putNetworkgroups(value: IResolvable | JavaWarNetworkgroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a>[]

---

##### `putVhosts` <a name="putVhosts" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putVhosts"></a>

```typescript
public putVhosts(value: IResolvable | JavaWarVhosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a>[]

---

##### `resetAppFolder` <a name="resetAppFolder" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetAppFolder"></a>

```typescript
public resetAppFolder(): void
```

##### `resetBuildFlavor` <a name="resetBuildFlavor" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetBuildFlavor"></a>

```typescript
public resetBuildFlavor(): void
```

##### `resetDependencies` <a name="resetDependencies" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetDependencies"></a>

```typescript
public resetDependencies(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetDescription` <a name="resetDescription" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetExposedEnvironment` <a name="resetExposedEnvironment" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetExposedEnvironment"></a>

```typescript
public resetExposedEnvironment(): void
```

##### `resetHooks` <a name="resetHooks" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetHooks"></a>

```typescript
public resetHooks(): void
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetJavaVersion"></a>

```typescript
public resetJavaVersion(): void
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetNetworkgroups"></a>

```typescript
public resetNetworkgroups(): void
```

##### `resetRedirectHttps` <a name="resetRedirectHttps" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetRedirectHttps"></a>

```typescript
public resetRedirectHttps(): void
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStickySessions` <a name="resetStickySessions" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetStickySessions"></a>

```typescript
public resetStickySessions(): void
```

##### `resetVhosts` <a name="resetVhosts" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.resetVhosts"></a>

```typescript
public resetVhosts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JavaWar resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.isConstruct"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

javaWar.JavaWar.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.isTerraformElement"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

javaWar.JavaWar.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.isTerraformResource"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

javaWar.JavaWar.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.generateConfigForImport"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

javaWar.JavaWar.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a JavaWar resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JavaWar to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JavaWar that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JavaWar to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference">JavaWarDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.deployUrl">deployUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference">JavaWarHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList">JavaWarNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList">JavaWarVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.appFolderInput">appFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.biggestFlavorInput">biggestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.buildFlavorInput">buildFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.dependenciesInput">dependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment">JavaWarDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.exposedEnvironmentInput">exposedEnvironmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.hooksInput">hooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks">JavaWarHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.networkgroupsInput">networkgroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.redirectHttpsInput">redirectHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.smallestFlavorInput">smallestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.stickySessionsInput">stickySessionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.vhostsInput">vhostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.appFolder">appFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.dependencies">dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.deployment"></a>

```typescript
public readonly deployment: JavaWarDeploymentOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference">JavaWarDeploymentOutputReference</a>

---

##### `deployUrl`<sup>Required</sup> <a name="deployUrl" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.deployUrl"></a>

```typescript
public readonly deployUrl: string;
```

- *Type:* string

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.hooks"></a>

```typescript
public readonly hooks: JavaWarHooksOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference">JavaWarHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.networkgroups"></a>

```typescript
public readonly networkgroups: JavaWarNetworkgroupsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList">JavaWarNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.vhosts"></a>

```typescript
public readonly vhosts: JavaWarVhostsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList">JavaWarVhostsList</a>

---

##### `appFolderInput`<sup>Optional</sup> <a name="appFolderInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.appFolderInput"></a>

```typescript
public readonly appFolderInput: string;
```

- *Type:* string

---

##### `biggestFlavorInput`<sup>Optional</sup> <a name="biggestFlavorInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.biggestFlavorInput"></a>

```typescript
public readonly biggestFlavorInput: string;
```

- *Type:* string

---

##### `buildFlavorInput`<sup>Optional</sup> <a name="buildFlavorInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.buildFlavorInput"></a>

```typescript
public readonly buildFlavorInput: string;
```

- *Type:* string

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: string[];
```

- *Type:* string[]

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: JavaWarDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment">JavaWarDeployment</a> | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironmentInput`<sup>Optional</sup> <a name="exposedEnvironmentInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.exposedEnvironmentInput"></a>

```typescript
public readonly exposedEnvironmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.hooksInput"></a>

```typescript
public readonly hooksInput: JavaWarHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks">JavaWarHooks</a> | cdktf.IResolvable

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.networkgroupsInput"></a>

```typescript
public readonly networkgroupsInput: IResolvable | JavaWarNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a>[]

---

##### `redirectHttpsInput`<sup>Optional</sup> <a name="redirectHttpsInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.redirectHttpsInput"></a>

```typescript
public readonly redirectHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `smallestFlavorInput`<sup>Optional</sup> <a name="smallestFlavorInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.smallestFlavorInput"></a>

```typescript
public readonly smallestFlavorInput: string;
```

- *Type:* string

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.stickySessionsInput"></a>

```typescript
public readonly stickySessionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vhostsInput`<sup>Optional</sup> <a name="vhostsInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.vhostsInput"></a>

```typescript
public readonly vhostsInput: IResolvable | JavaWarVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a>[]

---

##### `appFolder`<sup>Required</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

---

##### `buildFlavor`<sup>Required</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironment`<sup>Required</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectHttps`<sup>Required</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWar.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.javaWar.JavaWar.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JavaWarConfig <a name="JavaWarConfig" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

const javaWarConfig: javaWar.JavaWarConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.name">name</a></code> | <code>string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.appFolder">appFolder</a></code> | <code>string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.dependencies">dependencies</a></code> | <code>string[]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment">JavaWarDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.description">description</a></code> | <code>string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks">JavaWarHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.javaVersion">javaVersion</a></code> | <code>string</code> | Choose the JVM version between 7 to 24 for OpenJDK or graalvm-ce for GraalVM 21.0.0.2 (based on OpenJDK 11.0). |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a>[]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.region">region</a></code> | <code>string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a>[]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#biggest_flavor JavaWar#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#max_instance_count JavaWar#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#min_instance_count JavaWar#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#name JavaWar#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#smallest_flavor JavaWar#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#app_folder JavaWar#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#build_flavor JavaWar#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#dependencies JavaWar#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.deployment"></a>

```typescript
public readonly deployment: JavaWarDeployment;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment">JavaWarDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#deployment JavaWar#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#description JavaWar#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#environment JavaWar#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#exposed_environment JavaWar#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.hooks"></a>

```typescript
public readonly hooks: JavaWarHooks;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks">JavaWarHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#hooks JavaWar#hooks}

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

Choose the JVM version between 7 to 24 for OpenJDK or graalvm-ce for GraalVM 21.0.0.2 (based on OpenJDK 11.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#java_version JavaWar#java_version}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.networkgroups"></a>

```typescript
public readonly networkgroups: IResolvable | JavaWarNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a>[]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#networkgroups JavaWar#networkgroups}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#redirect_https JavaWar#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#region JavaWar#region}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#sticky_sessions JavaWar#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.javaWar.JavaWarConfig.property.vhosts"></a>

```typescript
public readonly vhosts: IResolvable | JavaWarVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a>[]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#vhosts JavaWar#vhosts}

---

### JavaWarDeployment <a name="JavaWarDeployment" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

const javaWarDeployment: javaWar.JavaWarDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment.property.commit">commit</a></code> | <code>string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment.property.repository">repository</a></code> | <code>string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authenticationBasic`<sup>Optional</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#authentication_basic JavaWar#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#commit JavaWar#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#repository JavaWar#repository}

---

### JavaWarHooks <a name="JavaWarHooks" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

const javaWarHooks: javaWar.JavaWarHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.postBuild">postBuild</a></code> | <code>string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.preBuild">preBuild</a></code> | <code>string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.preRun">preRun</a></code> | <code>string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.runFailed">runFailed</a></code> | <code>string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.runSucceed">runSucceed</a></code> | <code>string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `postBuild`<sup>Optional</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#post_build JavaWar#post_build}

---

##### `preBuild`<sup>Optional</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#pre_build JavaWar#pre_build}

---

##### `preRun`<sup>Optional</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#pre_run JavaWar#pre_run}

---

##### `runFailed`<sup>Optional</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#run_failed JavaWar#run_failed}

---

##### `runSucceed`<sup>Optional</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooks.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#run_succeed JavaWar#run_succeed}

---

### JavaWarNetworkgroups <a name="JavaWarNetworkgroups" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

const javaWarNetworkgroups: javaWar.JavaWarNetworkgroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups.property.fqdn">fqdn</a></code> | <code>string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#fqdn JavaWar#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#networkgroup_id JavaWar#networkgroup_id}

---

### JavaWarVhosts <a name="JavaWarVhosts" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

const javaWarVhosts: javaWar.JavaWarVhosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts.property.fqdn">fqdn</a></code> | <code>string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts.property.pathBegin">pathBegin</a></code> | <code>string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#fqdn JavaWar#fqdn}

---

##### `pathBegin`<sup>Optional</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/java_war#path_begin JavaWar#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### JavaWarDeploymentOutputReference <a name="JavaWarDeploymentOutputReference" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

new javaWar.JavaWarDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resetAuthenticationBasic">resetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationBasic` <a name="resetAuthenticationBasic" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resetAuthenticationBasic"></a>

```typescript
public resetAuthenticationBasic(): void
```

##### `resetCommit` <a name="resetCommit" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetRepository` <a name="resetRepository" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.authenticationBasicInput">authenticationBasicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment">JavaWarDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationBasicInput`<sup>Optional</sup> <a name="authenticationBasicInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.authenticationBasicInput"></a>

```typescript
public readonly authenticationBasicInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `authenticationBasic`<sup>Required</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.javaWar.JavaWarDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JavaWarDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarDeployment">JavaWarDeployment</a> | cdktf.IResolvable

---


### JavaWarHooksOutputReference <a name="JavaWarHooksOutputReference" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

new javaWar.JavaWarHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetPostBuild">resetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetPreBuild">resetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetPreRun">resetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetRunFailed">resetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetRunSucceed">resetRunSucceed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostBuild` <a name="resetPostBuild" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetPostBuild"></a>

```typescript
public resetPostBuild(): void
```

##### `resetPreBuild` <a name="resetPreBuild" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetPreBuild"></a>

```typescript
public resetPreBuild(): void
```

##### `resetPreRun` <a name="resetPreRun" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetPreRun"></a>

```typescript
public resetPreRun(): void
```

##### `resetRunFailed` <a name="resetRunFailed" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetRunFailed"></a>

```typescript
public resetRunFailed(): void
```

##### `resetRunSucceed` <a name="resetRunSucceed" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.resetRunSucceed"></a>

```typescript
public resetRunSucceed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.postBuildInput">postBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preBuildInput">preBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preRunInput">preRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runFailedInput">runFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runSucceedInput">runSucceedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.postBuild">postBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preBuild">preBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preRun">preRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runFailed">runFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runSucceed">runSucceed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks">JavaWarHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postBuildInput`<sup>Optional</sup> <a name="postBuildInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.postBuildInput"></a>

```typescript
public readonly postBuildInput: string;
```

- *Type:* string

---

##### `preBuildInput`<sup>Optional</sup> <a name="preBuildInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preBuildInput"></a>

```typescript
public readonly preBuildInput: string;
```

- *Type:* string

---

##### `preRunInput`<sup>Optional</sup> <a name="preRunInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preRunInput"></a>

```typescript
public readonly preRunInput: string;
```

- *Type:* string

---

##### `runFailedInput`<sup>Optional</sup> <a name="runFailedInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runFailedInput"></a>

```typescript
public readonly runFailedInput: string;
```

- *Type:* string

---

##### `runSucceedInput`<sup>Optional</sup> <a name="runSucceedInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runSucceedInput"></a>

```typescript
public readonly runSucceedInput: string;
```

- *Type:* string

---

##### `postBuild`<sup>Required</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

---

##### `preBuild`<sup>Required</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

---

##### `preRun`<sup>Required</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

---

##### `runFailed`<sup>Required</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

---

##### `runSucceed`<sup>Required</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.javaWar.JavaWarHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JavaWarHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarHooks">JavaWarHooks</a> | cdktf.IResolvable

---


### JavaWarNetworkgroupsList <a name="JavaWarNetworkgroupsList" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

new javaWar.JavaWarNetworkgroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.get"></a>

```typescript
public get(index: number): JavaWarNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JavaWarNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a>[]

---


### JavaWarNetworkgroupsOutputReference <a name="JavaWarNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

new javaWar.JavaWarNetworkgroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```typescript
public readonly networkgroupIdInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JavaWarNetworkgroups | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarNetworkgroups">JavaWarNetworkgroups</a> | cdktf.IResolvable

---


### JavaWarVhostsList <a name="JavaWarVhostsList" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

new javaWar.JavaWarVhostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.get"></a>

```typescript
public get(index: number): JavaWarVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JavaWarVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a>[]

---


### JavaWarVhostsOutputReference <a name="JavaWarVhostsOutputReference" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer"></a>

```typescript
import { javaWar } from '@clevercloud/cdktf-bindings'

new javaWar.JavaWarVhostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.resetPathBegin">resetPathBegin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathBegin` <a name="resetPathBegin" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.resetPathBegin"></a>

```typescript
public resetPathBegin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.pathBeginInput">pathBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.pathBegin">pathBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `pathBeginInput`<sup>Optional</sup> <a name="pathBeginInput" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.pathBeginInput"></a>

```typescript
public readonly pathBeginInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `pathBegin`<sup>Required</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.javaWar.JavaWarVhostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JavaWarVhosts | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.javaWar.JavaWarVhosts">JavaWarVhosts</a> | cdktf.IResolvable

---



