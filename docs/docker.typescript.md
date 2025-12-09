# `docker` Submodule <a name="`docker` Submodule" id="@clevercloud/cdktf-bindings.docker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Docker <a name="Docker" id="@clevercloud/cdktf-bindings.docker.Docker"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker clevercloud_docker}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

new docker.Docker(scope: Construct, id: string, config: DockerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.config">config</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig">DockerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.config"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerConfig">DockerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putVhosts">putVhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetAppFolder">resetAppFolder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetBuildFlavor">resetBuildFlavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetContainerPortTcp">resetContainerPortTcp</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDaemonSocketMount">resetDaemonSocketMount</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDockerfile">resetDockerfile</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetEnableIpv6">resetEnableIpv6</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetExposedEnvironment">resetExposedEnvironment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetHooks">resetHooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetIpv6Cidr">resetIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRedirectHttps">resetRedirectHttps</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegistryPassword">resetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUrl">resetRegistryUrl</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUser">resetRegistryUser</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetVhosts">resetVhosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.Docker.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.docker.Docker.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.docker.Docker.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.docker.Docker.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.docker.Docker.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.docker.Docker.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.docker.Docker.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.docker.Docker.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment"></a>

```typescript
public putDeployment(value: DockerDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>

---

##### `putHooks` <a name="putHooks" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks"></a>

```typescript
public putHooks(value: DockerHooks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups"></a>

```typescript
public putNetworkgroups(value: IResolvable | DockerNetworkgroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>[]

---

##### `putVhosts` <a name="putVhosts" id="@clevercloud/cdktf-bindings.docker.Docker.putVhosts"></a>

```typescript
public putVhosts(value: IResolvable | DockerVhosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>[]

---

##### `resetAppFolder` <a name="resetAppFolder" id="@clevercloud/cdktf-bindings.docker.Docker.resetAppFolder"></a>

```typescript
public resetAppFolder(): void
```

##### `resetBuildFlavor` <a name="resetBuildFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.resetBuildFlavor"></a>

```typescript
public resetBuildFlavor(): void
```

##### `resetContainerPort` <a name="resetContainerPort" id="@clevercloud/cdktf-bindings.docker.Docker.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetContainerPortTcp` <a name="resetContainerPortTcp" id="@clevercloud/cdktf-bindings.docker.Docker.resetContainerPortTcp"></a>

```typescript
public resetContainerPortTcp(): void
```

##### `resetDaemonSocketMount` <a name="resetDaemonSocketMount" id="@clevercloud/cdktf-bindings.docker.Docker.resetDaemonSocketMount"></a>

```typescript
public resetDaemonSocketMount(): void
```

##### `resetDependencies` <a name="resetDependencies" id="@clevercloud/cdktf-bindings.docker.Docker.resetDependencies"></a>

```typescript
public resetDependencies(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@clevercloud/cdktf-bindings.docker.Docker.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetDescription` <a name="resetDescription" id="@clevercloud/cdktf-bindings.docker.Docker.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDockerfile` <a name="resetDockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.resetDockerfile"></a>

```typescript
public resetDockerfile(): void
```

##### `resetEnableIpv6` <a name="resetEnableIpv6" id="@clevercloud/cdktf-bindings.docker.Docker.resetEnableIpv6"></a>

```typescript
public resetEnableIpv6(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@clevercloud/cdktf-bindings.docker.Docker.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetExposedEnvironment` <a name="resetExposedEnvironment" id="@clevercloud/cdktf-bindings.docker.Docker.resetExposedEnvironment"></a>

```typescript
public resetExposedEnvironment(): void
```

##### `resetHooks` <a name="resetHooks" id="@clevercloud/cdktf-bindings.docker.Docker.resetHooks"></a>

```typescript
public resetHooks(): void
```

##### `resetIpv6Cidr` <a name="resetIpv6Cidr" id="@clevercloud/cdktf-bindings.docker.Docker.resetIpv6Cidr"></a>

```typescript
public resetIpv6Cidr(): void
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.resetNetworkgroups"></a>

```typescript
public resetNetworkgroups(): void
```

##### `resetRedirectHttps` <a name="resetRedirectHttps" id="@clevercloud/cdktf-bindings.docker.Docker.resetRedirectHttps"></a>

```typescript
public resetRedirectHttps(): void
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRegistryPassword` <a name="resetRegistryPassword" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryPassword"></a>

```typescript
public resetRegistryPassword(): void
```

##### `resetRegistryUrl` <a name="resetRegistryUrl" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUrl"></a>

```typescript
public resetRegistryUrl(): void
```

##### `resetRegistryUser` <a name="resetRegistryUser" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUser"></a>

```typescript
public resetRegistryUser(): void
```

##### `resetStickySessions` <a name="resetStickySessions" id="@clevercloud/cdktf-bindings.docker.Docker.resetStickySessions"></a>

```typescript
public resetStickySessions(): void
```

##### `resetVhosts` <a name="resetVhosts" id="@clevercloud/cdktf-bindings.docker.Docker.resetVhosts"></a>

```typescript
public resetVhosts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Docker resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.docker.Docker.isConstruct"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

docker.Docker.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.docker.Docker.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

docker.Docker.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

docker.Docker.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

docker.Docker.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Docker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Docker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Docker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Docker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference">DockerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deployUrl">deployUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference">DockerHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList">DockerNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList">DockerVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.appFolderInput">appFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavorInput">biggestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavorInput">buildFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcpInput">containerPortTcpInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMountInput">daemonSocketMountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependenciesInput">dependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dockerfileInput">dockerfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6Input">enableIpv6Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironmentInput">exposedEnvironmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.hooksInput">hooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.ipv6CidrInput">ipv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.networkgroupsInput">networkgroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttpsInput">redirectHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryPasswordInput">registryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUrlInput">registryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUserInput">registryUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavorInput">smallestFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.stickySessionsInput">stickySessionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.vhostsInput">vhostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.appFolder">appFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcp">containerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMount">daemonSocketMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependencies">dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dockerfile">dockerfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6">enableIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryPassword">registryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUrl">registryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUser">registryUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.docker.Docker.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.docker.Docker.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.Docker.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.docker.Docker.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.Docker.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.Docker.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.docker.Docker.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.Docker.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.Docker.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.Docker.property.deployment"></a>

```typescript
public readonly deployment: DockerDeploymentOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference">DockerDeploymentOutputReference</a>

---

##### `deployUrl`<sup>Required</sup> <a name="deployUrl" id="@clevercloud/cdktf-bindings.docker.Docker.property.deployUrl"></a>

```typescript
public readonly deployUrl: string;
```

- *Type:* string

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.Docker.property.hooks"></a>

```typescript
public readonly hooks: DockerHooksOutputReference;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference">DockerHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.property.networkgroups"></a>

```typescript
public readonly networkgroups: DockerNetworkgroupsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList">DockerNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.Docker.property.vhosts"></a>

```typescript
public readonly vhosts: DockerVhostsList;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList">DockerVhostsList</a>

---

##### `appFolderInput`<sup>Optional</sup> <a name="appFolderInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.appFolderInput"></a>

```typescript
public readonly appFolderInput: string;
```

- *Type:* string

---

##### `biggestFlavorInput`<sup>Optional</sup> <a name="biggestFlavorInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavorInput"></a>

```typescript
public readonly biggestFlavorInput: string;
```

- *Type:* string

---

##### `buildFlavorInput`<sup>Optional</sup> <a name="buildFlavorInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavorInput"></a>

```typescript
public readonly buildFlavorInput: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `containerPortTcpInput`<sup>Optional</sup> <a name="containerPortTcpInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcpInput"></a>

```typescript
public readonly containerPortTcpInput: number;
```

- *Type:* number

---

##### `daemonSocketMountInput`<sup>Optional</sup> <a name="daemonSocketMountInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMountInput"></a>

```typescript
public readonly daemonSocketMountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: string[];
```

- *Type:* string[]

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: DockerDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dockerfileInput`<sup>Optional</sup> <a name="dockerfileInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.dockerfileInput"></a>

```typescript
public readonly dockerfileInput: string;
```

- *Type:* string

---

##### `enableIpv6Input`<sup>Optional</sup> <a name="enableIpv6Input" id="@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6Input"></a>

```typescript
public readonly enableIpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironmentInput`<sup>Optional</sup> <a name="exposedEnvironmentInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironmentInput"></a>

```typescript
public readonly exposedEnvironmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.hooksInput"></a>

```typescript
public readonly hooksInput: DockerHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> | cdktf.IResolvable

---

##### `ipv6CidrInput`<sup>Optional</sup> <a name="ipv6CidrInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.ipv6CidrInput"></a>

```typescript
public readonly ipv6CidrInput: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.networkgroupsInput"></a>

```typescript
public readonly networkgroupsInput: IResolvable | DockerNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>[]

---

##### `redirectHttpsInput`<sup>Optional</sup> <a name="redirectHttpsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttpsInput"></a>

```typescript
public readonly redirectHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `registryPasswordInput`<sup>Optional</sup> <a name="registryPasswordInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryPasswordInput"></a>

```typescript
public readonly registryPasswordInput: string;
```

- *Type:* string

---

##### `registryUrlInput`<sup>Optional</sup> <a name="registryUrlInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUrlInput"></a>

```typescript
public readonly registryUrlInput: string;
```

- *Type:* string

---

##### `registryUserInput`<sup>Optional</sup> <a name="registryUserInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUserInput"></a>

```typescript
public readonly registryUserInput: string;
```

- *Type:* string

---

##### `smallestFlavorInput`<sup>Optional</sup> <a name="smallestFlavorInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavorInput"></a>

```typescript
public readonly smallestFlavorInput: string;
```

- *Type:* string

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.stickySessionsInput"></a>

```typescript
public readonly stickySessionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vhostsInput`<sup>Optional</sup> <a name="vhostsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.vhostsInput"></a>

```typescript
public readonly vhostsInput: IResolvable | DockerVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>[]

---

##### `appFolder`<sup>Required</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.docker.Docker.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

---

##### `buildFlavor`<sup>Required</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `containerPortTcp`<sup>Required</sup> <a name="containerPortTcp" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcp"></a>

```typescript
public readonly containerPortTcp: number;
```

- *Type:* number

---

##### `daemonSocketMount`<sup>Required</sup> <a name="daemonSocketMount" id="@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMount"></a>

```typescript
public readonly daemonSocketMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.Docker.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dockerfile`<sup>Required</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* string

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.Docker.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exposedEnvironment`<sup>Required</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ipv6Cidr`<sup>Required</sup> <a name="ipv6Cidr" id="@clevercloud/cdktf-bindings.docker.Docker.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string;
```

- *Type:* string

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.Docker.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectHttps`<sup>Required</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.Docker.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `registryPassword`<sup>Required</sup> <a name="registryPassword" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryPassword"></a>

```typescript
public readonly registryPassword: string;
```

- *Type:* string

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

---

##### `registryUser`<sup>Required</sup> <a name="registryUser" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUser"></a>

```typescript
public readonly registryUser: string;
```

- *Type:* string

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.docker.Docker.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.docker.Docker.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DockerConfig <a name="DockerConfig" id="@clevercloud/cdktf-bindings.docker.DockerConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerConfig.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

const dockerConfig: docker.DockerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.biggestFlavor">biggestFlavor</a></code> | <code>string</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.name">name</a></code> | <code>string</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.smallestFlavor">smallestFlavor</a></code> | <code>string</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.appFolder">appFolder</a></code> | <code>string</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.buildFlavor">buildFlavor</a></code> | <code>string</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPort">containerPort</a></code> | <code>number</code> | Set to custom HTTP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPortTcp">containerPortTcp</a></code> | <code>number</code> | Set to custom TCP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.daemonSocketMount">daemonSocketMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to access the host Docker socket from inside your container. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependencies">dependencies</a></code> | <code>string[]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.description">description</a></code> | <code>string</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dockerfile">dockerfile</a></code> | <code>string</code> | The name of the Dockerfile to build. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.enableIpv6">enableIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.exposedEnvironment">exposedEnvironment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string</code> | Activate the support of IPv6 with an IPv6 subnet int the docker daemon. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>[]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.redirectHttps">redirectHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.region">region</a></code> | <code>string</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryPassword">registryPassword</a></code> | <code>string</code> | The password of your username. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUrl">registryUrl</a></code> | <code>string</code> | The server of your private registry (optional).	Docker’s public registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUser">registryUser</a></code> | <code>string</code> | The username to login to a private registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.stickySessions">stickySessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>[]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.biggestFlavor"></a>

```typescript
public readonly biggestFlavor: string;
```

- *Type:* string

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#biggest_flavor Docker#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#max_instance_count Docker#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#min_instance_count Docker#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#name Docker#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.smallestFlavor"></a>

```typescript
public readonly smallestFlavor: string;
```

- *Type:* string

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#smallest_flavor Docker#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.appFolder"></a>

```typescript
public readonly appFolder: string;
```

- *Type:* string

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#app_folder Docker#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.buildFlavor"></a>

```typescript
public readonly buildFlavor: string;
```

- *Type:* string

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#build_flavor Docker#build_flavor}

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Set to custom HTTP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port Docker#container_port}

---

##### `containerPortTcp`<sup>Optional</sup> <a name="containerPortTcp" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPortTcp"></a>

```typescript
public readonly containerPortTcp: number;
```

- *Type:* number

Set to custom TCP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port_tcp Docker#container_port_tcp}

---

##### `daemonSocketMount`<sup>Optional</sup> <a name="daemonSocketMount" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.daemonSocketMount"></a>

```typescript
public readonly daemonSocketMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to access the host Docker socket from inside your container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#daemon_socket_mount Docker#daemon_socket_mount}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dependencies Docker#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.deployment"></a>

```typescript
public readonly deployment: DockerDeployment;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#deployment Docker#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#description Docker#description}

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* string

The name of the Dockerfile to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dockerfile Docker#dockerfile}

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#environment Docker#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.exposedEnvironment"></a>

```typescript
public readonly exposedEnvironment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#exposed_environment Docker#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.hooks"></a>

```typescript
public readonly hooks: DockerHooks;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#hooks Docker#hooks}

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string;
```

- *Type:* string

Activate the support of IPv6 with an IPv6 subnet int the docker daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#ipv6_cidr Docker#ipv6_cidr}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.networkgroups"></a>

```typescript
public readonly networkgroups: IResolvable | DockerNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>[]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroups Docker#networkgroups}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.redirectHttps"></a>

```typescript
public readonly redirectHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#redirect_https Docker#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#region Docker#region}

---

##### `registryPassword`<sup>Optional</sup> <a name="registryPassword" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryPassword"></a>

```typescript
public readonly registryPassword: string;
```

- *Type:* string

The password of your username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_password Docker#registry_password}

---

##### `registryUrl`<sup>Optional</sup> <a name="registryUrl" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

The server of your private registry (optional).	Docker’s public registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_url Docker#registry_url}

---

##### `registryUser`<sup>Optional</sup> <a name="registryUser" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUser"></a>

```typescript
public readonly registryUser: string;
```

- *Type:* string

The username to login to a private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_user Docker#registry_user}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.stickySessions"></a>

```typescript
public readonly stickySessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#sticky_sessions Docker#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.vhosts"></a>

```typescript
public readonly vhosts: IResolvable | DockerVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>[]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#vhosts Docker#vhosts}

---

### DockerDeployment <a name="DockerDeployment" id="@clevercloud/cdktf-bindings.docker.DockerDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

const dockerDeployment: docker.DockerDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.commit">commit</a></code> | <code>string</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.repository">repository</a></code> | <code>string</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authenticationBasic`<sup>Optional</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#authentication_basic Docker#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#commit Docker#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#repository Docker#repository}

---

### DockerHooks <a name="DockerHooks" id="@clevercloud/cdktf-bindings.docker.DockerHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerHooks.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

const dockerHooks: docker.DockerHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.postBuild">postBuild</a></code> | <code>string</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.preBuild">preBuild</a></code> | <code>string</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.preRun">preRun</a></code> | <code>string</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.runFailed">runFailed</a></code> | <code>string</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.runSucceed">runSucceed</a></code> | <code>string</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `postBuild`<sup>Optional</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#post_build Docker#post_build}

---

##### `preBuild`<sup>Optional</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_build Docker#pre_build}

---

##### `preRun`<sup>Optional</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_run Docker#pre_run}

---

##### `runFailed`<sup>Optional</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_failed Docker#run_failed}

---

##### `runSucceed`<sup>Optional</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_succeed Docker#run_succeed}

---

### DockerNetworkgroups <a name="DockerNetworkgroups" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

const dockerNetworkgroups: docker.DockerNetworkgroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.fqdn">fqdn</a></code> | <code>string</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#fqdn Docker#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroup_id Docker#networkgroup_id}

---

### DockerVhosts <a name="DockerVhosts" id="@clevercloud/cdktf-bindings.docker.DockerVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

const dockerVhosts: docker.DockerVhosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts.property.fqdn">fqdn</a></code> | <code>string</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts.property.pathBegin">pathBegin</a></code> | <code>string</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#fqdn Docker#fqdn}

---

##### `pathBegin`<sup>Optional</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#path_begin Docker#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### DockerDeploymentOutputReference <a name="DockerDeploymentOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

new docker.DockerDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetAuthenticationBasic">resetAuthenticationBasic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationBasic` <a name="resetAuthenticationBasic" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetAuthenticationBasic"></a>

```typescript
public resetAuthenticationBasic(): void
```

##### `resetCommit` <a name="resetCommit" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetRepository` <a name="resetRepository" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasicInput">authenticationBasicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasic">authenticationBasic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationBasicInput`<sup>Optional</sup> <a name="authenticationBasicInput" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasicInput"></a>

```typescript
public readonly authenticationBasicInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `authenticationBasic`<sup>Required</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasic"></a>

```typescript
public readonly authenticationBasic: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DockerDeployment | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> | cdktf.IResolvable

---


### DockerHooksOutputReference <a name="DockerHooksOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

new docker.DockerHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPostBuild">resetPostBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreBuild">resetPreBuild</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreRun">resetPreRun</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunFailed">resetRunFailed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunSucceed">resetRunSucceed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostBuild` <a name="resetPostBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPostBuild"></a>

```typescript
public resetPostBuild(): void
```

##### `resetPreBuild` <a name="resetPreBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreBuild"></a>

```typescript
public resetPreBuild(): void
```

##### `resetPreRun` <a name="resetPreRun" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreRun"></a>

```typescript
public resetPreRun(): void
```

##### `resetRunFailed` <a name="resetRunFailed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunFailed"></a>

```typescript
public resetRunFailed(): void
```

##### `resetRunSucceed` <a name="resetRunSucceed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunSucceed"></a>

```typescript
public resetRunSucceed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuildInput">postBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuildInput">preBuildInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRunInput">preRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailedInput">runFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceedInput">runSucceedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuild">postBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuild">preBuild</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRun">preRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailed">runFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceed">runSucceed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postBuildInput`<sup>Optional</sup> <a name="postBuildInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuildInput"></a>

```typescript
public readonly postBuildInput: string;
```

- *Type:* string

---

##### `preBuildInput`<sup>Optional</sup> <a name="preBuildInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuildInput"></a>

```typescript
public readonly preBuildInput: string;
```

- *Type:* string

---

##### `preRunInput`<sup>Optional</sup> <a name="preRunInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRunInput"></a>

```typescript
public readonly preRunInput: string;
```

- *Type:* string

---

##### `runFailedInput`<sup>Optional</sup> <a name="runFailedInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailedInput"></a>

```typescript
public readonly runFailedInput: string;
```

- *Type:* string

---

##### `runSucceedInput`<sup>Optional</sup> <a name="runSucceedInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceedInput"></a>

```typescript
public readonly runSucceedInput: string;
```

- *Type:* string

---

##### `postBuild`<sup>Required</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuild"></a>

```typescript
public readonly postBuild: string;
```

- *Type:* string

---

##### `preBuild`<sup>Required</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuild"></a>

```typescript
public readonly preBuild: string;
```

- *Type:* string

---

##### `preRun`<sup>Required</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRun"></a>

```typescript
public readonly preRun: string;
```

- *Type:* string

---

##### `runFailed`<sup>Required</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailed"></a>

```typescript
public readonly runFailed: string;
```

- *Type:* string

---

##### `runSucceed`<sup>Required</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceed"></a>

```typescript
public readonly runSucceed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DockerHooks | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> | cdktf.IResolvable

---


### DockerNetworkgroupsList <a name="DockerNetworkgroupsList" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

new docker.DockerNetworkgroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get"></a>

```typescript
public get(index: number): DockerNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DockerNetworkgroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>[]

---


### DockerNetworkgroupsOutputReference <a name="DockerNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

new docker.DockerNetworkgroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```typescript
public readonly networkgroupIdInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupId"></a>

```typescript
public readonly networkgroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DockerNetworkgroups | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a> | cdktf.IResolvable

---


### DockerVhostsList <a name="DockerVhostsList" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

new docker.DockerVhostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.get"></a>

```typescript
public get(index: number): DockerVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DockerVhosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>[]

---


### DockerVhostsOutputReference <a name="DockerVhostsOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer"></a>

```typescript
import { docker } from '@clevercloud/cdktf-bindings'

new docker.DockerVhostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resetPathBegin">resetPathBegin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathBegin` <a name="resetPathBegin" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resetPathBegin"></a>

```typescript
public resetPathBegin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBeginInput">pathBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBegin">pathBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `pathBeginInput`<sup>Optional</sup> <a name="pathBeginInput" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBeginInput"></a>

```typescript
public readonly pathBeginInput: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `pathBegin`<sup>Required</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBegin"></a>

```typescript
public readonly pathBegin: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DockerVhosts | IResolvable;
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a> | cdktf.IResolvable

---



