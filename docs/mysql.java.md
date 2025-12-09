# `mysql` Submodule <a name="`mysql` Submodule" id="@clevercloud/cdktf-bindings.mysql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mysql <a name="Mysql" id="@clevercloud/cdktf-bindings.mysql.Mysql"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql clevercloud_mysql}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.Mysql;

Mysql.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .backup(java.lang.Boolean|IResolvable)
//  .networkgroups(IResolvable|java.util.List<MysqlNetworkgroups>)
//  .readOnlyUsers(IResolvable|java.util.List<MysqlReadOnlyUsers>)
//  .region(java.lang.String)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.backup">backup</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable backups for this MySQL add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>></code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.readOnlyUsers">readOnlyUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>></code> | MySQL users with read-only access. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | MySQL version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#name Mysql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#plan Mysql#plan}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.backup"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable backups for this MySQL add-on.

Since backups are included in the add-on price, disabling it has no impact on your billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#backup Mysql#backup}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.networkgroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>>

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#networkgroups Mysql#networkgroups}

---

##### `readOnlyUsers`<sup>Optional</sup> <a name="readOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.readOnlyUsers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>>

MySQL users with read-only access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#read_only_users Mysql#read_only_users}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#region Mysql#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.mysql.Mysql.Initializer.parameter.version"></a>

- *Type:* java.lang.String

MySQL version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#version Mysql#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.putReadOnlyUsers">putReadOnlyUsers</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetReadOnlyUsers">resetReadOnlyUsers</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.mysql.Mysql.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.mysql.Mysql.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.mysql.Mysql.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.mysql.Mysql.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.mysql.Mysql.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.mysql.Mysql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.mysql.Mysql.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.mysql.Mysql.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.mysql.Mysql.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.mysql.Mysql.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.mysql.Mysql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.mysql.Mysql.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.mysql.Mysql.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.mysql.Mysql.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.Mysql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.mysql.Mysql.putNetworkgroups"></a>

```java
public void putNetworkgroups(IResolvable|java.util.List<MysqlNetworkgroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.mysql.Mysql.putNetworkgroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>>

---

##### `putReadOnlyUsers` <a name="putReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.Mysql.putReadOnlyUsers"></a>

```java
public void putReadOnlyUsers(IResolvable|java.util.List<MysqlReadOnlyUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.mysql.Mysql.putReadOnlyUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>>

---

##### `resetBackup` <a name="resetBackup" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetNetworkgroups"></a>

```java
public void resetNetworkgroups()
```

##### `resetReadOnlyUsers` <a name="resetReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetReadOnlyUsers"></a>

```java
public void resetReadOnlyUsers()
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetVersion` <a name="resetVersion" id="@clevercloud/cdktf-bindings.mysql.Mysql.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.mysql.Mysql.isConstruct"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.Mysql;

Mysql.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.Mysql;

Mysql.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformResource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.Mysql;

Mysql.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.mysql.Mysql.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.Mysql;

Mysql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Mysql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Mysql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Mysql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.mysql.Mysql.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Mysql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.creationDate">creationDate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList">MysqlNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsers">readOnlyUsers</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList">MysqlReadOnlyUsersList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.backupInput">backupInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroupsInput">networkgroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsersInput">readOnlyUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.backup">backup</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.creationDate"></a>

```java
public java.lang.Number getCreationDate();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroups"></a>

```java
public MysqlNetworkgroupsList getNetworkgroups();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList">MysqlNetworkgroupsList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `readOnlyUsers`<sup>Required</sup> <a name="readOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsers"></a>

```java
public MysqlReadOnlyUsersList getReadOnlyUsers();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList">MysqlReadOnlyUsersList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.backupInput"></a>

```java
public java.lang.Boolean|IResolvable getBackupInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.networkgroupsInput"></a>

```java
public IResolvable|java.util.List<MysqlNetworkgroups> getNetworkgroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `readOnlyUsersInput`<sup>Optional</sup> <a name="readOnlyUsersInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.readOnlyUsersInput"></a>

```java
public IResolvable|java.util.List<MysqlReadOnlyUsers> getReadOnlyUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.backup"></a>

```java
public java.lang.Boolean|IResolvable getBackup();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.Mysql.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.mysql.Mysql.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlConfig <a name="MysqlConfig" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.MysqlConfig;

MysqlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .backup(java.lang.Boolean|IResolvable)
//  .networkgroups(IResolvable|java.util.List<MysqlNetworkgroups>)
//  .readOnlyUsers(IResolvable|java.util.List<MysqlReadOnlyUsers>)
//  .region(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.backup">backup</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable backups for this MySQL add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>></code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.readOnlyUsers">readOnlyUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>></code> | MySQL users with read-only access. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.version">version</a></code> | <code>java.lang.String</code> | MySQL version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#name Mysql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#plan Mysql#plan}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.backup"></a>

```java
public java.lang.Boolean|IResolvable getBackup();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable backups for this MySQL add-on.

Since backups are included in the add-on price, disabling it has no impact on your billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#backup Mysql#backup}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.networkgroups"></a>

```java
public IResolvable|java.util.List<MysqlNetworkgroups> getNetworkgroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>>

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#networkgroups Mysql#networkgroups}

---

##### `readOnlyUsers`<sup>Optional</sup> <a name="readOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.readOnlyUsers"></a>

```java
public IResolvable|java.util.List<MysqlReadOnlyUsers> getReadOnlyUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>>

MySQL users with read-only access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#read_only_users Mysql#read_only_users}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#region Mysql#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.mysql.MysqlConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

MySQL version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#version Mysql#version}

---

### MysqlNetworkgroups <a name="MysqlNetworkgroups" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.MysqlNetworkgroups;

MysqlNetworkgroups.builder()
    .fqdn(java.lang.String)
    .networkgroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | domain name which will resolve to addon instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

domain name which will resolve to addon instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#fqdn Mysql#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#networkgroup_id Mysql#networkgroup_id}

---

### MysqlReadOnlyUsers <a name="MysqlReadOnlyUsers" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.MysqlReadOnlyUsers;

MysqlReadOnlyUsers.builder()
    .password(java.lang.String)
    .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.password">password</a></code> | <code>java.lang.String</code> | Password for read-only user. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.user">user</a></code> | <code>java.lang.String</code> | Username for read-only access. |

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for read-only user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#password Mysql#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Username for read-only access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/mysql#user Mysql#user}

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlNetworkgroupsList <a name="MysqlNetworkgroupsList" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.MysqlNetworkgroupsList;

new MysqlNetworkgroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.get"></a>

```java
public MysqlNetworkgroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MysqlNetworkgroups> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>>

---


### MysqlNetworkgroupsOutputReference <a name="MysqlNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.MysqlNetworkgroupsOutputReference;

new MysqlNetworkgroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```java
public java.lang.String getNetworkgroupIdInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroupsOutputReference.property.internalValue"></a>

```java
public MysqlNetworkgroups|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mysql.MysqlNetworkgroups">MysqlNetworkgroups</a>|com.hashicorp.cdktf.IResolvable

---


### MysqlReadOnlyUsersList <a name="MysqlReadOnlyUsersList" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.MysqlReadOnlyUsersList;

new MysqlReadOnlyUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.get"></a>

```java
public MysqlReadOnlyUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MysqlReadOnlyUsers> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>>

---


### MysqlReadOnlyUsersOutputReference <a name="MysqlReadOnlyUsersOutputReference" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.mysql.MysqlReadOnlyUsersOutputReference;

new MysqlReadOnlyUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsersOutputReference.property.internalValue"></a>

```java
public MysqlReadOnlyUsers|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.mysql.MysqlReadOnlyUsers">MysqlReadOnlyUsers</a>|com.hashicorp.cdktf.IResolvable

---



