# `pulsar` Submodule <a name="`pulsar` Submodule" id="@clevercloud/cdktf-bindings.pulsar"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pulsar <a name="Pulsar" id="@clevercloud/cdktf-bindings.pulsar.Pulsar"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar clevercloud_pulsar}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.pulsar.Pulsar;

Pulsar.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .region(java.lang.String)
//  .retentionPeriod(java.lang.Number)
//  .retentionSize(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Pulsar. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | Pulsar namespace retention policy in minutes. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.retentionSize">retentionSize</a></code> | <code>java.lang.Number</code> | Pulsar namespace retention policy in bytes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Pulsar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#name Pulsar#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#region Pulsar#region}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.retentionPeriod"></a>

- *Type:* java.lang.Number

Pulsar namespace retention policy in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#retention_period Pulsar#retention_period}

---

##### `retentionSize`<sup>Optional</sup> <a name="retentionSize" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.Initializer.parameter.retentionSize"></a>

- *Type:* java.lang.Number

Pulsar namespace retention policy in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#retention_size Pulsar#retention_size}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.resetRetentionSize">resetRetentionSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.resetRetentionPeriod"></a>

```java
public void resetRetentionPeriod()
```

##### `resetRetentionSize` <a name="resetRetentionSize" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.resetRetentionSize"></a>

```java
public void resetRetentionSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Pulsar resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.isConstruct"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.pulsar.Pulsar;

Pulsar.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.pulsar.Pulsar;

Pulsar.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.isTerraformResource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.pulsar.Pulsar;

Pulsar.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.pulsar.Pulsar;

Pulsar.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Pulsar.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Pulsar resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Pulsar to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Pulsar that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Pulsar to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.binaryUrl">binaryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.httpUrl">httpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionSizeInput">retentionSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionSize">retentionSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `binaryUrl`<sup>Required</sup> <a name="binaryUrl" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.binaryUrl"></a>

```java
public java.lang.String getBinaryUrl();
```

- *Type:* java.lang.String

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.httpUrl"></a>

```java
public java.lang.String getHttpUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionPeriodInput"></a>

```java
public java.lang.Number getRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `retentionSizeInput`<sup>Optional</sup> <a name="retentionSizeInput" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionSizeInput"></a>

```java
public java.lang.Number getRetentionSizeInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `retentionSize`<sup>Required</sup> <a name="retentionSize" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.retentionSize"></a>

```java
public java.lang.Number getRetentionSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.Pulsar.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.pulsar.Pulsar.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PulsarConfig <a name="PulsarConfig" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.pulsar.PulsarConfig;

PulsarConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .region(java.lang.String)
//  .retentionPeriod(java.lang.Number)
//  .retentionSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Pulsar. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | Pulsar namespace retention policy in minutes. |
| <code><a href="#@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.retentionSize">retentionSize</a></code> | <code>java.lang.Number</code> | Pulsar namespace retention policy in bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Pulsar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#name Pulsar#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#region Pulsar#region}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

Pulsar namespace retention policy in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#retention_period Pulsar#retention_period}

---

##### `retentionSize`<sup>Optional</sup> <a name="retentionSize" id="@clevercloud/cdktf-bindings.pulsar.PulsarConfig.property.retentionSize"></a>

```java
public java.lang.Number getRetentionSize();
```

- *Type:* java.lang.Number

Pulsar namespace retention policy in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#retention_size Pulsar#retention_size}

---



