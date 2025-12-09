# `drainElasticsearch` Submodule <a name="`drainElasticsearch` Submodule" id="@clevercloud/cdktf-bindings.drainElasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrainElasticsearch <a name="DrainElasticsearch" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch clevercloud_drain_elasticsearch}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.drain_elasticsearch.DrainElasticsearch;

DrainElasticsearch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .index(java.lang.String)
    .password(java.lang.String)
    .resourceId(java.lang.String)
    .url(java.lang.String)
    .username(java.lang.String)
//  .kind(java.lang.String)
//  .tlsVerification(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.index">index</a></code> | <code>java.lang.String</code> | Elasticsearch index name. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Elasticsearch password. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Application or product ID which support logs drains. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Elasticsearch URL. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Elasticsearch username. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | either LOG, ACCESSLOG or AUDITLOG. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.tlsVerification">tlsVerification</a></code> | <code>java.lang.String</code> | TLS verification mode: DEFAULT or TRUSTFUL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.index"></a>

- *Type:* java.lang.String

Elasticsearch index name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#index DrainElasticsearch#index}

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Elasticsearch password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#password DrainElasticsearch#password}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Application or product ID which support logs drains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#resource_id DrainElasticsearch#resource_id}

---

##### `url`<sup>Required</sup> <a name="url" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Elasticsearch URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#url DrainElasticsearch#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Elasticsearch username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#username DrainElasticsearch#username}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

either LOG, ACCESSLOG or AUDITLOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#kind DrainElasticsearch#kind}

---

##### `tlsVerification`<sup>Optional</sup> <a name="tlsVerification" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.Initializer.parameter.tlsVerification"></a>

- *Type:* java.lang.String

TLS verification mode: DEFAULT or TRUSTFUL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#tls_verification DrainElasticsearch#tls_verification}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetTlsVerification">resetTlsVerification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKind` <a name="resetKind" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetKind"></a>

```java
public void resetKind()
```

##### `resetTlsVerification` <a name="resetTlsVerification" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.resetTlsVerification"></a>

```java
public void resetTlsVerification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DrainElasticsearch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isConstruct"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.drain_elasticsearch.DrainElasticsearch;

DrainElasticsearch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.drain_elasticsearch.DrainElasticsearch;

DrainElasticsearch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformResource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.drain_elasticsearch.DrainElasticsearch;

DrainElasticsearch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.drain_elasticsearch.DrainElasticsearch;

DrainElasticsearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DrainElasticsearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DrainElasticsearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DrainElasticsearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DrainElasticsearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DrainElasticsearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerificationInput">tlsVerificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerification">tlsVerification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `tlsVerificationInput`<sup>Optional</sup> <a name="tlsVerificationInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerificationInput"></a>

```java
public java.lang.String getTlsVerificationInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `tlsVerification`<sup>Required</sup> <a name="tlsVerification" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tlsVerification"></a>

```java
public java.lang.String getTlsVerification();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DrainElasticsearchConfig <a name="DrainElasticsearchConfig" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.drain_elasticsearch.DrainElasticsearchConfig;

DrainElasticsearchConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .index(java.lang.String)
    .password(java.lang.String)
    .resourceId(java.lang.String)
    .url(java.lang.String)
    .username(java.lang.String)
//  .kind(java.lang.String)
//  .tlsVerification(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.index">index</a></code> | <code>java.lang.String</code> | Elasticsearch index name. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.password">password</a></code> | <code>java.lang.String</code> | Elasticsearch password. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Application or product ID which support logs drains. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.url">url</a></code> | <code>java.lang.String</code> | Elasticsearch URL. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.username">username</a></code> | <code>java.lang.String</code> | Elasticsearch username. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | either LOG, ACCESSLOG or AUDITLOG. |
| <code><a href="#@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.tlsVerification">tlsVerification</a></code> | <code>java.lang.String</code> | TLS verification mode: DEFAULT or TRUSTFUL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Elasticsearch index name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#index DrainElasticsearch#index}

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Elasticsearch password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#password DrainElasticsearch#password}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Application or product ID which support logs drains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#resource_id DrainElasticsearch#resource_id}

---

##### `url`<sup>Required</sup> <a name="url" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Elasticsearch URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#url DrainElasticsearch#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Elasticsearch username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#username DrainElasticsearch#username}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

either LOG, ACCESSLOG or AUDITLOG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#kind DrainElasticsearch#kind}

---

##### `tlsVerification`<sup>Optional</sup> <a name="tlsVerification" id="@clevercloud/cdktf-bindings.drainElasticsearch.DrainElasticsearchConfig.property.tlsVerification"></a>

```java
public java.lang.String getTlsVerification();
```

- *Type:* java.lang.String

TLS verification mode: DEFAULT or TRUSTFUL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#tls_verification DrainElasticsearch#tls_verification}

---



