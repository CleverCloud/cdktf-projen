# `drainSyslogTcp` Submodule <a name="`drainSyslogTcp` Submodule" id="@clevercloud/cdktf-bindings.drainSyslogTcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrainSyslogTcp <a name="DrainSyslogTcp" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp clevercloud_drain_syslog_tcp}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer"></a>

```typescript
import { drainSyslogTcp } from '@clevercloud/cdktf-bindings'

new drainSyslogTcp.DrainSyslogTcp(scope: Construct, id: string, config: DrainSyslogTcpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig">DrainSyslogTcpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig">DrainSyslogTcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKind` <a name="resetKind" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetToken` <a name="resetToken" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DrainSyslogTcp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isConstruct"></a>

```typescript
import { drainSyslogTcp } from '@clevercloud/cdktf-bindings'

drainSyslogTcp.DrainSyslogTcp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformElement"></a>

```typescript
import { drainSyslogTcp } from '@clevercloud/cdktf-bindings'

drainSyslogTcp.DrainSyslogTcp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformResource"></a>

```typescript
import { drainSyslogTcp } from '@clevercloud/cdktf-bindings'

drainSyslogTcp.DrainSyslogTcp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport"></a>

```typescript
import { drainSyslogTcp } from '@clevercloud/cdktf-bindings'

drainSyslogTcp.DrainSyslogTcp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DrainSyslogTcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrainSyslogTcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrainSyslogTcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DrainSyslogTcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrainSyslogTcpConfig <a name="DrainSyslogTcpConfig" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.Initializer"></a>

```typescript
import { drainSyslogTcp } from '@clevercloud/cdktf-bindings'

const drainSyslogTcpConfig: drainSyslogTcp.DrainSyslogTcpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Application or product ID which support logs drains. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.url">url</a></code> | <code>string</code> | Syslog TCP destination URL. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.kind">kind</a></code> | <code>string</code> | either LOG, ACCESSLOG or AUDITLOG. |
| <code><a href="#@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.token">token</a></code> | <code>string</code> | Authentication token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Application or product ID which support logs drains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#resource_id DrainSyslogTcp#resource_id}

---

##### `url`<sup>Required</sup> <a name="url" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Syslog TCP destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#url DrainSyslogTcp#url}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

either LOG, ACCESSLOG or AUDITLOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#kind DrainSyslogTcp#kind}

---

##### `token`<sup>Optional</sup> <a name="token" id="@clevercloud/cdktf-bindings.drainSyslogTcp.DrainSyslogTcpConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#token DrainSyslogTcp#token}

---



