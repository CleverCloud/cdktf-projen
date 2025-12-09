# `python` Submodule <a name="`python` Submodule" id="@clevercloud/cdktf-bindings.python"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Python <a name="Python" id="@clevercloud/cdktf-bindings.python.Python"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python clevercloud_python}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.Python.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

new python.Python(scope: Construct, id: string, config: PythonConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig">PythonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.python.Python.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonConfig">PythonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.putVhosts">putVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetAppFolder">resetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetBuildFlavor">resetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetExposedEnvironment">resetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetHooks">resetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetPipRequirements">resetPipRequirements</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetRedirectHttps">resetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.resetVhosts">resetVhosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.python.Python.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.python.Python.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.python.Python.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.python.Python.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.python.Python.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.python.Python.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.python.Python.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.python.Python.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.python.Python.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.python.Python.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.python.Python.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.python.Python.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.python.Python.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.python.Python.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.python.Python.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.python.Python.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.python.Python.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.Python.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.python.Python.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.Python.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.python.Python.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.python.Python.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.python.Python.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.python.Python.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.python.Python.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@clevercloud/cdktf-bindings.python.Python.putDeployment"></a>

```typescript
public putDeployment(value: PythonDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a>

---

##### `putHooks` <a name="putHooks" id="@clevercloud/cdktf-bindings.python.Python.putHooks"></a>

```typescript
public putHooks(value: PythonHooks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a>

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.python.Python.putNetworkgroups"></a>

```typescript
public putNetworkgroups(value: IResolvable | PythonNetworkgroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>[]

---

##### `putVhosts` <a name="putVhosts" id="@clevercloud/cdktf-bindings.python.Python.putVhosts"></a>

```typescript
public putVhosts(value: IResolvable | PythonVhosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.python.Python.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>[]

---

##### `resetAppFolder` <a name="resetAppFolder" id="@clevercloud/cdktf-bindings.python.Python.resetAppFolder"></a>

```typescript
public resetAppFolder(): void
```

##### `resetBuildFlavor` <a name="resetBuildFlavor" id="@clevercloud/cdktf-bindings.python.Python.resetBuildFlavor"></a>

```typescript
public resetBuildFlavor(): void
```

##### `resetDependencies` <a name="resetDependencies" id="@clevercloud/cdktf-bindings.python.Python.resetDependencies"></a>

```typescript
public resetDependencies(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@clevercloud/cdktf-bindings.python.Python.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetDescription` <a name="resetDescription" id="@clevercloud/cdktf-bindings.python.Python.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@clevercloud/cdktf-bindings.python.Python.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetExposedEnvironment` <a name="resetExposedEnvironment" id="@clevercloud/cdktf-bindings.python.Python.resetExposedEnvironment"></a>

```typescript
public resetExposedEnvironment(): void
```

##### `resetHooks` <a name="resetHooks" id="@clevercloud/cdktf-bindings.python.Python.resetHooks"></a>

```typescript
public resetHooks(): void
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.python.Python.resetNetworkgroups"></a>

```typescript
public resetNetworkgroups(): void
```

##### `resetPipRequirements` <a name="resetPipRequirements" id="@clevercloud/cdktf-bindings.python.Python.resetPipRequirements"></a>

```typescript
public resetPipRequirements(): void
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@clevercloud/cdktf-bindings.python.Python.resetPythonVersion"></a>

```typescript
public resetPythonVersion(): void
```

##### `resetRedirectHttps` <a name="resetRedirectHttps" id="@clevercloud/cdktf-bindings.python.Python.resetRedirectHttps"></a>

```typescript
public resetRedirectHttps(): void
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.python.Python.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStickySessions` <a name="resetStickySessions" id="@clevercloud/cdktf-bindings.python.Python.resetStickySessions"></a>

```typescript
public resetStickySessions(): void
```

##### `resetVhosts` <a name="resetVhosts" id="@clevercloud/cdktf-bindings.python.Python.resetVhosts"></a>

```typescript
public resetVhosts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Python resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.python.Python.isConstruct"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

python.Python.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.python.Python.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.python.Python.isTerraformElement"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

python.Python.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.python.Python.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.python.Python.isTerraformResource"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

python.Python.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.python.Python.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

python.Python.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Python resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Python to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Python that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.Python.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Python to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference">PythonDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.deployUrl">deployUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference">PythonHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList">PythonNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList">PythonVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.appFolderInput">appFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.biggestFlavorInput">biggestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.buildFlavorInput">buildFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.dependenciesInput">dependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironmentInput">exposedEnvironmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.hooksInput">hooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.networkgroupsInput">networkgroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pipRequirementsInput">pipRequirementsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pythonVersionInput">pythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.redirectHttpsInput">redirectHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.smallestFlavorInput">smallestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.stickySessionsInput">stickySessionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.vhostsInput">vhostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.appFolder">appFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.dependencies">dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pipRequirements">pipRequirements</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.python.Python.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.python.Python.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.Python.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.python.Python.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.python.Python.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.python.Python.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.python.Python.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.python.Python.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.python.Python.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.python.Python.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.python.Python.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.python.Python.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.Python.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.python.Python.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.python.Python.property.deployment"></a>

```typescript
public readonly deployment: PythonDeploymentOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference">PythonDeploymentOutputReference</a>

---

##### `deployUrl`<sup>Required</sup> <a name="deployUrl" id="@clevercloud/cdktf-bindings.python.Python.property.deployUrl"></a>

```typescript
public readonly deployUrl: string;
```

- *Type:* string

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.python.Python.property.hooks"></a>

```typescript
public readonly hooks: PythonHooksOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference">PythonHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.python.Python.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.python.Python.property.networkgroups"></a>

```typescript
public readonly networkgroups: PythonNetworkgroupsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList">PythonNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.python.Python.property.vhosts"></a>

```typescript
public readonly vhosts: PythonVhostsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList">PythonVhostsList</a>

---

##### `appFolderInput`<sup>Optional</sup> <a name="appFolderInput" id="@clevercloud/cdktf-bindings.python.Python.property.appFolderInput"></a>

```typescript
public readonly appFolderInput: string;
```

- *Type:* string

---

##### `biggestFlavorInput`<sup>Optional</sup> <a name="biggestFlavorInput" id="@clevercloud/cdktf-bindings.python.Python.property.biggestFlavorInput"></a>

```typescript
public readonly biggestFlavorInput: string;
```

- *Type:* string

---

##### `buildFlavorInput`<sup>Optional</sup> <a name="buildFlavorInput" id="@clevercloud/cdktf-bindings.python.Python.property.buildFlavorInput"></a>

```typescript
public readonly buildFlavorInput: string;
```

- *Type:* string

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@clevercloud/cdktf-bindings.python.Python.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: string[];
```

- *Type:* string[]

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@clevercloud/cdktf-bindings.python.Python.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: PythonDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@clevercloud/cdktf-bindings.python.Python.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@clevercloud/cdktf-bindings.python.Python.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironmentInput`<sup>Optional</sup> <a name="exposedEnvironmentInput" id="@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironmentInput"></a>

```typescript
public readonly exposedEnvironmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@clevercloud/cdktf-bindings.python.Python.property.hooksInput"></a>

```typescript
public readonly hooksInput: PythonHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> | cdktf.IResolvable

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@clevercloud/cdktf-bindings.python.Python.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.python.Python.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.python.Python.property.networkgroupsInput"></a>

```typescript
public readonly networkgroupsInput: IResolvable | PythonNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>[]

---

##### `pipRequirementsInput`<sup>Optional</sup> <a name="pipRequirementsInput" id="@clevercloud/cdktf-bindings.python.Python.property.pipRequirementsInput"></a>

```typescript
public readonly pipRequirementsInput: string;
```

- *Type:* string

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@clevercloud/cdktf-bindings.python.Python.property.pythonVersionInput"></a>

```typescript
public readonly pythonVersionInput: string;
```

- *Type:* string

---

##### `redirectHttpsInput`<sup>Optional</sup> <a name="redirectHttpsInput" id="@clevercloud/cdktf-bindings.python.Python.property.redirectHttpsInput"></a>

```typescript
public readonly redirectHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.python.Python.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `smallestFlavorInput`<sup>Optional</sup> <a name="smallestFlavorInput" id="@clevercloud/cdktf-bindings.python.Python.property.smallestFlavorInput"></a>

```typescript
public readonly smallestFlavorInput: string;
```

- *Type:* string

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@clevercloud/cdktf-bindings.python.Python.property.stickySessionsInput"></a>

```typescript
public readonly stickySessionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vhostsInput`<sup>Optional</sup> <a name="vhostsInput" id="@clevercloud/cdktf-bindings.python.Python.property.vhostsInput"></a>

```typescript
public readonly vhostsInput: IResolvable | PythonVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>[]

---

##### `appFolder`<sup>Required</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.python.Python.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.python.Python.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

---

##### `buildFlavor`<sup>Required</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.python.Python.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.python.Python.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.python.Python.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.python.Python.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironment`<sup>Required</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.python.Python.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.python.Python.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.python.Python.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.python.Python.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipRequirements`<sup>Required</sup> <a name="pipRequirements" id="@clevercloud/cdktf-bindings.python.Python.property.pipRequirements"></a>

```typescript
public readonly pipRequirements: string;
```

- *Type:* string

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@clevercloud/cdktf-bindings.python.Python.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `redirectHttps`<sup>Required</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.python.Python.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.python.Python.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.python.Python.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.python.Python.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.Python.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.python.Python.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PythonConfig <a name="PythonConfig" id="@clevercloud/cdktf-bindings.python.PythonConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonConfig.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

const pythonConfig: python.PythonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.name">name</a></code> | <code>string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.appFolder">appFolder</a></code> | <code>string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.dependencies">dependencies</a></code> | <code>string[]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.description">description</a></code> | <code>string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>[]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.pipRequirements">pipRequirements</a></code> | <code>string</code> | Define a custom requirements.txt file (default: requirements.txt). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | Python version >= 2.7. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.region">region</a></code> | <code>string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>[]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#biggest_flavor Python#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#max_instance_count Python#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#min_instance_count Python#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#name Python#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#smallest_flavor Python#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#app_folder Python#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#build_flavor Python#build_flavor}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#dependencies Python#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.deployment"></a>

```typescript
public readonly deployment: PythonDeployment;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#deployment Python#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#description Python#description}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#environment Python#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#exposed_environment Python#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.hooks"></a>

```typescript
public readonly hooks: PythonHooks;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#hooks Python#hooks}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.networkgroups"></a>

```typescript
public readonly networkgroups: IResolvable | PythonNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>[]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#networkgroups Python#networkgroups}

---

##### `pipRequirements`<sup>Optional</sup> <a name="pipRequirements" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.pipRequirements"></a>

```typescript
public readonly pipRequirements: string;
```

- *Type:* string

Define a custom requirements.txt file (default: requirements.txt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pip_requirements Python#pip_requirements}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

Python version >= 2.7.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#python_version Python#python_version}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#redirect_https Python#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#region Python#region}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#sticky_sessions Python#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.python.PythonConfig.property.vhosts"></a>

```typescript
public readonly vhosts: IResolvable | PythonVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>[]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#vhosts Python#vhosts}

---

### PythonDeployment <a name="PythonDeployment" id="@clevercloud/cdktf-bindings.python.PythonDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonDeployment.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

const pythonDeployment: python.PythonDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment.property.commit">commit</a></code> | <code>string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment.property.repository">repository</a></code> | <code>string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authenticationBasic`<sup>Optional</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.python.PythonDeployment.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#authentication_basic Python#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.python.PythonDeployment.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#commit Python#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.python.PythonDeployment.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#repository Python#repository}

---

### PythonHooks <a name="PythonHooks" id="@clevercloud/cdktf-bindings.python.PythonHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonHooks.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

const pythonHooks: python.PythonHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.postBuild">postBuild</a></code> | <code>string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.preBuild">preBuild</a></code> | <code>string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.preRun">preRun</a></code> | <code>string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.runFailed">runFailed</a></code> | <code>string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks.property.runSucceed">runSucceed</a></code> | <code>string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `postBuild`<sup>Optional</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#post_build Python#post_build}

---

##### `preBuild`<sup>Optional</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pre_build Python#pre_build}

---

##### `preRun`<sup>Optional</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#pre_run Python#pre_run}

---

##### `runFailed`<sup>Optional</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#run_failed Python#run_failed}

---

##### `runSucceed`<sup>Optional</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.python.PythonHooks.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#run_succeed Python#run_succeed}

---

### PythonNetworkgroups <a name="PythonNetworkgroups" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

const pythonNetworkgroups: python.PythonNetworkgroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.fqdn">fqdn</a></code> | <code>string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#fqdn Python#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroups.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#networkgroup_id Python#networkgroup_id}

---

### PythonVhosts <a name="PythonVhosts" id="@clevercloud/cdktf-bindings.python.PythonVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.python.PythonVhosts.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

const pythonVhosts: python.PythonVhosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhosts.property.fqdn">fqdn</a></code> | <code>string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhosts.property.pathBegin">pathBegin</a></code> | <code>string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonVhosts.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#fqdn Python#fqdn}

---

##### `pathBegin`<sup>Optional</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.python.PythonVhosts.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/python#path_begin Python#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### PythonDeploymentOutputReference <a name="PythonDeploymentOutputReference" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

new python.PythonDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetAuthenticationBasic">resetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationBasic` <a name="resetAuthenticationBasic" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetAuthenticationBasic"></a>

```typescript
public resetAuthenticationBasic(): void
```

##### `resetCommit` <a name="resetCommit" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetRepository` <a name="resetRepository" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasicInput">authenticationBasicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationBasicInput`<sup>Optional</sup> <a name="authenticationBasicInput" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasicInput"></a>

```typescript
public readonly authenticationBasicInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `authenticationBasic`<sup>Required</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.python.PythonDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PythonDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonDeployment">PythonDeployment</a> | cdktf.IResolvable

---


### PythonHooksOutputReference <a name="PythonHooksOutputReference" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

new python.PythonHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPostBuild">resetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreBuild">resetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreRun">resetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunFailed">resetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunSucceed">resetRunSucceed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostBuild` <a name="resetPostBuild" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPostBuild"></a>

```typescript
public resetPostBuild(): void
```

##### `resetPreBuild` <a name="resetPreBuild" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreBuild"></a>

```typescript
public resetPreBuild(): void
```

##### `resetPreRun` <a name="resetPreRun" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetPreRun"></a>

```typescript
public resetPreRun(): void
```

##### `resetRunFailed` <a name="resetRunFailed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunFailed"></a>

```typescript
public resetRunFailed(): void
```

##### `resetRunSucceed` <a name="resetRunSucceed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.resetRunSucceed"></a>

```typescript
public resetRunSucceed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuildInput">postBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuildInput">preBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRunInput">preRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailedInput">runFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceedInput">runSucceedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuild">postBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuild">preBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRun">preRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailed">runFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceed">runSucceed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postBuildInput`<sup>Optional</sup> <a name="postBuildInput" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuildInput"></a>

```typescript
public readonly postBuildInput: string;
```

- *Type:* string

---

##### `preBuildInput`<sup>Optional</sup> <a name="preBuildInput" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuildInput"></a>

```typescript
public readonly preBuildInput: string;
```

- *Type:* string

---

##### `preRunInput`<sup>Optional</sup> <a name="preRunInput" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRunInput"></a>

```typescript
public readonly preRunInput: string;
```

- *Type:* string

---

##### `runFailedInput`<sup>Optional</sup> <a name="runFailedInput" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailedInput"></a>

```typescript
public readonly runFailedInput: string;
```

- *Type:* string

---

##### `runSucceedInput`<sup>Optional</sup> <a name="runSucceedInput" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceedInput"></a>

```typescript
public readonly runSucceedInput: string;
```

- *Type:* string

---

##### `postBuild`<sup>Required</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

---

##### `preBuild`<sup>Required</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

---

##### `preRun`<sup>Required</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

---

##### `runFailed`<sup>Required</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

---

##### `runSucceed`<sup>Required</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.python.PythonHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PythonHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonHooks">PythonHooks</a> | cdktf.IResolvable

---


### PythonNetworkgroupsList <a name="PythonNetworkgroupsList" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

new python.PythonNetworkgroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.get"></a>

```typescript
public get(index: number): PythonNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PythonNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a>[]

---


### PythonNetworkgroupsOutputReference <a name="PythonNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

new python.PythonNetworkgroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```typescript
public readonly networkgroupIdInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.python.PythonNetworkgroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PythonNetworkgroups | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonNetworkgroups">PythonNetworkgroups</a> | cdktf.IResolvable

---


### PythonVhostsList <a name="PythonVhostsList" id="@clevercloud/cdktf-bindings.python.PythonVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

new python.PythonVhostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.get"></a>

```typescript
public get(index: number): PythonVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.python.PythonVhostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PythonVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a>[]

---


### PythonVhostsOutputReference <a name="PythonVhostsOutputReference" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer"></a>

```typescript
import { python } from '@clevercloud/cdktf-bindings'

new python.PythonVhostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resetPathBegin">resetPathBegin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathBegin` <a name="resetPathBegin" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.resetPathBegin"></a>

```typescript
public resetPathBegin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBeginInput">pathBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBegin">pathBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `pathBeginInput`<sup>Optional</sup> <a name="pathBeginInput" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBeginInput"></a>

```typescript
public readonly pathBeginInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `pathBegin`<sup>Required</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.python.PythonVhostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PythonVhosts | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.python.PythonVhosts">PythonVhosts</a> | cdktf.IResolvable

---



