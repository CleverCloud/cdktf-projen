# `drainSyslogUdp` Submodule <a name="`drainSyslogUdp` Submodule" id="@clevercloud/cdktf-bindings.drainSyslogUdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrainSyslogUdp <a name="DrainSyslogUdp" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_udp clevercloud_drain_syslog_udp}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.Initializer"></a>

```typescript
import { drainSyslogUdp } from '@clevercloud/cdktf-bindings'

new drainSyslogUdp.DrainSyslogUdp(scope: Construct, id: string, config: DrainSyslogUdpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig">DrainSyslogUdpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig">DrainSyslogUdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKind` <a name="resetKind" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetToken` <a name="resetToken" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DrainSyslogUdp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isConstruct"></a>

```typescript
import { drainSyslogUdp } from '@clevercloud/cdktf-bindings'

drainSyslogUdp.DrainSyslogUdp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isTerraformElement"></a>

```typescript
import { drainSyslogUdp } from '@clevercloud/cdktf-bindings'

drainSyslogUdp.DrainSyslogUdp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isTerraformResource"></a>

```typescript
import { drainSyslogUdp } from '@clevercloud/cdktf-bindings'

drainSyslogUdp.DrainSyslogUdp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.generateConfigForImport"></a>

```typescript
import { drainSyslogUdp } from '@clevercloud/cdktf-bindings'

drainSyslogUdp.DrainSyslogUdp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DrainSyslogUdp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrainSyslogUdp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrainSyslogUdp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_udp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DrainSyslogUdp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrainSyslogUdpConfig <a name="DrainSyslogUdpConfig" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.Initializer"></a>

```typescript
import { drainSyslogUdp } from '@clevercloud/cdktf-bindings'

const drainSyslogUdpConfig: drainSyslogUdp.DrainSyslogUdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Application or product ID which support logs drains. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.url">url</a></code> | <code>string</code> | Syslog UDP destination URL. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.kind">kind</a></code> | <code>string</code> | either LOG, ACCESSLOG or AUDITLOG. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.token">token</a></code> | <code>string</code> | Authentication token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Application or product ID which support logs drains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_udp#resource_id DrainSyslogUdp#resource_id}

---

##### `url`<sup>Required</sup> <a name="url" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Syslog UDP destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_udp#url DrainSyslogUdp#url}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

either LOG, ACCESSLOG or AUDITLOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_udp#kind DrainSyslogUdp#kind}

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.drainSyslogUdp.DrainSyslogUdpConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_udp#token DrainSyslogUdp#token}

---



