# `dataClevercloudDefaultLoadbalancer` Submodule <a name="`dataClevercloudDefaultLoadbalancer` Submodule" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataClevercloudDefaultLoadbalancer <a name="DataClevercloudDefaultLoadbalancer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer clevercloud_default_loadbalancer}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.data_clevercloud_default_loadbalancer.DataClevercloudDefaultLoadbalancer;

DataClevercloudDefaultLoadbalancer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID for which to fetch the load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The application ID for which to fetch the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#application_id DataClevercloudDefaultLoadbalancer#application_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.data_clevercloud_default_loadbalancer.DataClevercloudDefaultLoadbalancer;

DataClevercloudDefaultLoadbalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.data_clevercloud_default_loadbalancer.DataClevercloudDefaultLoadbalancer;

DataClevercloudDefaultLoadbalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.data_clevercloud_default_loadbalancer.DataClevercloudDefaultLoadbalancer;

DataClevercloudDefaultLoadbalancer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.data_clevercloud_default_loadbalancer.DataClevercloudDefaultLoadbalancer;

DataClevercloudDefaultLoadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataClevercloudDefaultLoadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataClevercloudDefaultLoadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataClevercloudDefaultLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataClevercloudDefaultLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname">cname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cname`<sup>Required</sup> <a name="cname" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataClevercloudDefaultLoadbalancerConfig <a name="DataClevercloudDefaultLoadbalancerConfig" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.data_clevercloud_default_loadbalancer.DataClevercloudDefaultLoadbalancerConfig;

DataClevercloudDefaultLoadbalancerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID for which to fetch the load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@clevercloud/cdktf-bindings.dataClevercloudDefaultLoadbalancer.DataClevercloudDefaultLoadbalancerConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The application ID for which to fetch the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#application_id DataClevercloudDefaultLoadbalancer#application_id}

---



