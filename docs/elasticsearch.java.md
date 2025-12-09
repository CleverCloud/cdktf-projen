# `elasticsearch` Submodule <a name="`elasticsearch` Submodule" id="@clevercloud/cdktf-bindings.elasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticsearch <a name="Elasticsearch" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch clevercloud_elasticsearch}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.Elasticsearch;

Elasticsearch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .apm(java.lang.Boolean|IResolvable)
//  .encryption(java.lang.Boolean|IResolvable)
//  .kibana(java.lang.Boolean|IResolvable)
//  .networkgroups(IResolvable|java.util.List<ElasticsearchNetworkgroups>)
//  .plugins(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the elasticsearch. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.apm">apm</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable APM (Application Performance Monitoring) for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.encryption">encryption</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable at-rest encryption. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.kibana">kibana</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable Kibana for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>></code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plugins">plugins</a></code> | <code>java.util.List<java.lang.String></code> | List of plugins to install. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Elasticsearch version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#name Elasticsearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plan Elasticsearch#plan}

---

##### `apm`<sup>Optional</sup> <a name="apm" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.apm"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable APM (Application Performance Monitoring) for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#apm Elasticsearch#apm}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.encryption"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable at-rest encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#encryption Elasticsearch#encryption}

---

##### `kibana`<sup>Optional</sup> <a name="kibana" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.kibana"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable Kibana for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#kibana Elasticsearch#kibana}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.networkgroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>>

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroups Elasticsearch#networkgroups}

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.plugins"></a>

- *Type:* java.util.List<java.lang.String>

List of plugins to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plugins Elasticsearch#plugins}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#region Elasticsearch#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Elasticsearch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#version Elasticsearch#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.putNetworkgroups">putNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetApm">resetApm</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetKibana">resetKibana</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetNetworkgroups">resetNetworkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetPlugins">resetPlugins</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.putNetworkgroups"></a>

```java
public void putNetworkgroups(IResolvable|java.util.List<ElasticsearchNetworkgroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.putNetworkgroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>>

---

##### `resetApm` <a name="resetApm" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetApm"></a>

```java
public void resetApm()
```

##### `resetEncryption` <a name="resetEncryption" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetKibana` <a name="resetKibana" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetKibana"></a>

```java
public void resetKibana()
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetNetworkgroups"></a>

```java
public void resetNetworkgroups()
```

##### `resetPlugins` <a name="resetPlugins" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetPlugins"></a>

```java
public void resetPlugins()
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetVersion` <a name="resetVersion" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Elasticsearch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isConstruct"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.Elasticsearch;

Elasticsearch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.Elasticsearch;

Elasticsearch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformResource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.Elasticsearch;

Elasticsearch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.Elasticsearch;

Elasticsearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Elasticsearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Elasticsearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Elasticsearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Elasticsearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Elasticsearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmHost">apmHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmPassword">apmPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmToken">apmToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmUser">apmUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaHost">kibanaHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaPassword">kibanaPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaUser">kibanaUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList">ElasticsearchNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmInput">apmInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryptionInput">encryptionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaInput">kibanaInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroupsInput">networkgroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.pluginsInput">pluginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apm">apm</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryption">encryption</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibana">kibana</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plugins">plugins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmHost`<sup>Required</sup> <a name="apmHost" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmHost"></a>

```java
public java.lang.String getApmHost();
```

- *Type:* java.lang.String

---

##### `apmPassword`<sup>Required</sup> <a name="apmPassword" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmPassword"></a>

```java
public java.lang.String getApmPassword();
```

- *Type:* java.lang.String

---

##### `apmToken`<sup>Required</sup> <a name="apmToken" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmToken"></a>

```java
public java.lang.String getApmToken();
```

- *Type:* java.lang.String

---

##### `apmUser`<sup>Required</sup> <a name="apmUser" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmUser"></a>

```java
public java.lang.String getApmUser();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `kibanaHost`<sup>Required</sup> <a name="kibanaHost" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaHost"></a>

```java
public java.lang.String getKibanaHost();
```

- *Type:* java.lang.String

---

##### `kibanaPassword`<sup>Required</sup> <a name="kibanaPassword" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaPassword"></a>

```java
public java.lang.String getKibanaPassword();
```

- *Type:* java.lang.String

---

##### `kibanaUser`<sup>Required</sup> <a name="kibanaUser" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaUser"></a>

```java
public java.lang.String getKibanaUser();
```

- *Type:* java.lang.String

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroups"></a>

```java
public ElasticsearchNetworkgroupsList getNetworkgroups();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList">ElasticsearchNetworkgroupsList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `apmInput`<sup>Optional</sup> <a name="apmInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apmInput"></a>

```java
public java.lang.Boolean|IResolvable getApmInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryptionInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `kibanaInput`<sup>Optional</sup> <a name="kibanaInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibanaInput"></a>

```java
public java.lang.Boolean|IResolvable getKibanaInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.networkgroupsInput"></a>

```java
public IResolvable|java.util.List<ElasticsearchNetworkgroups> getNetworkgroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `pluginsInput`<sup>Optional</sup> <a name="pluginsInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.pluginsInput"></a>

```java
public java.util.List<java.lang.String> getPluginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `apm`<sup>Required</sup> <a name="apm" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.apm"></a>

```java
public java.lang.Boolean|IResolvable getApm();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.encryption"></a>

```java
public java.lang.Boolean|IResolvable getEncryption();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `kibana`<sup>Required</sup> <a name="kibana" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.kibana"></a>

```java
public java.lang.Boolean|IResolvable getKibana();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.plugins"></a>

```java
public java.util.List<java.lang.String> getPlugins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.elasticsearch.Elasticsearch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchConfig <a name="ElasticsearchConfig" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.ElasticsearchConfig;

ElasticsearchConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
//  .apm(java.lang.Boolean|IResolvable)
//  .encryption(java.lang.Boolean|IResolvable)
//  .kibana(java.lang.Boolean|IResolvable)
//  .networkgroups(IResolvable|java.util.List<ElasticsearchNetworkgroups>)
//  .plugins(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the elasticsearch. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Database size and spec. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.apm">apm</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable APM (Application Performance Monitoring) for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.encryption">encryption</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable at-rest encryption. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.kibana">kibana</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable Kibana for this Elasticsearch add-on. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>></code> | List of networkgroups the addon must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plugins">plugins</a></code> | <code>java.util.List<java.lang.String></code> | List of plugins to install. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the data will be stored. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.version">version</a></code> | <code>java.lang.String</code> | Elasticsearch version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#name Elasticsearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Database size and spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plan Elasticsearch#plan}

---

##### `apm`<sup>Optional</sup> <a name="apm" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.apm"></a>

```java
public java.lang.Boolean|IResolvable getApm();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable APM (Application Performance Monitoring) for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#apm Elasticsearch#apm}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.encryption"></a>

```java
public java.lang.Boolean|IResolvable getEncryption();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable at-rest encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#encryption Elasticsearch#encryption}

---

##### `kibana`<sup>Optional</sup> <a name="kibana" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.kibana"></a>

```java
public java.lang.Boolean|IResolvable getKibana();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable Kibana for this Elasticsearch add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#kibana Elasticsearch#kibana}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.networkgroups"></a>

```java
public IResolvable|java.util.List<ElasticsearchNetworkgroups> getNetworkgroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>>

List of networkgroups the addon must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroups Elasticsearch#networkgroups}

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.plugins"></a>

```java
public java.util.List<java.lang.String> getPlugins();
```

- *Type:* java.util.List<java.lang.String>

List of plugins to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plugins Elasticsearch#plugins}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Geographical region where the data will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#region Elasticsearch#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Elasticsearch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#version Elasticsearch#version}

---

### ElasticsearchNetworkgroups <a name="ElasticsearchNetworkgroups" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.ElasticsearchNetworkgroups;

ElasticsearchNetworkgroups.builder()
    .fqdn(java.lang.String)
    .networkgroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | domain name which will resolve to addon instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

domain name which will resolve to addon instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#fqdn Elasticsearch#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroup_id Elasticsearch#networkgroup_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchNetworkgroupsList <a name="ElasticsearchNetworkgroupsList" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.ElasticsearchNetworkgroupsList;

new ElasticsearchNetworkgroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.get"></a>

```java
public ElasticsearchNetworkgroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticsearchNetworkgroups> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>>

---


### ElasticsearchNetworkgroupsOutputReference <a name="ElasticsearchNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.elasticsearch.ElasticsearchNetworkgroupsOutputReference;

new ElasticsearchNetworkgroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```java
public java.lang.String getNetworkgroupIdInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroupsOutputReference.property.internalValue"></a>

```java
public ElasticsearchNetworkgroups|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.elasticsearch.ElasticsearchNetworkgroups">ElasticsearchNetworkgroups</a>|com.hashicorp.cdktf.IResolvable

---



