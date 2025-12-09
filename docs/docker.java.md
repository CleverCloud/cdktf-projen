# `docker` Submodule <a name="`docker` Submodule" id="@clevercloud/cdktf-bindings.docker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Docker <a name="Docker" id="@clevercloud/cdktf-bindings.docker.Docker"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker clevercloud_docker}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.Docker;

Docker.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .biggestFlavor(java.lang.String)
    .maxInstanceCount(java.lang.Number)
    .minInstanceCount(java.lang.Number)
    .name(java.lang.String)
    .smallestFlavor(java.lang.String)
//  .appFolder(java.lang.String)
//  .buildFlavor(java.lang.String)
//  .containerPort(java.lang.Number)
//  .containerPortTcp(java.lang.Number)
//  .daemonSocketMount(java.lang.Boolean|IResolvable)
//  .dependencies(java.util.List<java.lang.String>)
//  .deployment(DockerDeployment)
//  .description(java.lang.String)
//  .dockerfile(java.lang.String)
//  .enableIpv6(java.lang.Boolean|IResolvable)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .exposedEnvironment(java.util.Map<java.lang.String, java.lang.String>)
//  .hooks(DockerHooks)
//  .ipv6Cidr(java.lang.String)
//  .networkgroups(IResolvable|java.util.List<DockerNetworkgroups>)
//  .redirectHttps(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .registryPassword(java.lang.String)
//  .registryUrl(java.lang.String)
//  .registryUser(java.lang.String)
//  .stickySessions(java.lang.Boolean|IResolvable)
//  .vhosts(IResolvable|java.util.List<DockerVhosts>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.appFolder">appFolder</a></code> | <code>java.lang.String</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Set to custom HTTP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPortTcp">containerPortTcp</a></code> | <code>java.lang.Number</code> | Set to custom TCP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.daemonSocketMount">daemonSocketMount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to access the host Docker socket from inside your container. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dockerfile">dockerfile</a></code> | <code>java.lang.String</code> | The name of the Dockerfile to build. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.enableIpv6">enableIpv6</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.ipv6Cidr">ipv6Cidr</a></code> | <code>java.lang.String</code> | Activate the support of IPv6 with an IPv6 subnet int the docker daemon. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>></code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | The password of your username. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | The server of your private registry (optional).	Docker’s public registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUser">registryUser</a></code> | <code>java.lang.String</code> | The username to login to a private registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.vhosts">vhosts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>></code> | List of virtual hosts. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.biggestFlavor"></a>

- *Type:* java.lang.String

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#biggest_flavor Docker#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.maxInstanceCount"></a>

- *Type:* java.lang.Number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#max_instance_count Docker#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.minInstanceCount"></a>

- *Type:* java.lang.Number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#min_instance_count Docker#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#name Docker#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.smallestFlavor"></a>

- *Type:* java.lang.String

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#smallest_flavor Docker#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.appFolder"></a>

- *Type:* java.lang.String

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#app_folder Docker#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.buildFlavor"></a>

- *Type:* java.lang.String

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#build_flavor Docker#build_flavor}

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPort"></a>

- *Type:* java.lang.Number

Set to custom HTTP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port Docker#container_port}

---

##### `containerPortTcp`<sup>Optional</sup> <a name="containerPortTcp" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPortTcp"></a>

- *Type:* java.lang.Number

Set to custom TCP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port_tcp Docker#container_port_tcp}

---

##### `daemonSocketMount`<sup>Optional</sup> <a name="daemonSocketMount" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.daemonSocketMount"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to access the host Docker socket from inside your container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#daemon_socket_mount Docker#daemon_socket_mount}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependencies"></a>

- *Type:* java.util.List<java.lang.String>

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dependencies Docker#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#deployment Docker#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#description Docker#description}

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dockerfile"></a>

- *Type:* java.lang.String

The name of the Dockerfile to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dockerfile Docker#dockerfile}

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.enableIpv6"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.environment"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#environment Docker#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.exposedEnvironment"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#exposed_environment Docker#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#hooks Docker#hooks}

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.ipv6Cidr"></a>

- *Type:* java.lang.String

Activate the support of IPv6 with an IPv6 subnet int the docker daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#ipv6_cidr Docker#ipv6_cidr}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.networkgroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>>

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroups Docker#networkgroups}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.redirectHttps"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#redirect_https Docker#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#region Docker#region}

---

##### `registryPassword`<sup>Optional</sup> <a name="registryPassword" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryPassword"></a>

- *Type:* java.lang.String

The password of your username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_password Docker#registry_password}

---

##### `registryUrl`<sup>Optional</sup> <a name="registryUrl" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUrl"></a>

- *Type:* java.lang.String

The server of your private registry (optional).	Docker’s public registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_url Docker#registry_url}

---

##### `registryUser`<sup>Optional</sup> <a name="registryUser" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUser"></a>

- *Type:* java.lang.String

The username to login to a private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_user Docker#registry_user}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.stickySessions"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#sticky_sessions Docker#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.vhosts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>>

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#vhosts Docker#vhosts}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@clevercloud/cdktf-bindings.docker.Docker.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@clevercloud/cdktf-bindings.docker.Docker.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@clevercloud/cdktf-bindings.docker.Docker.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@clevercloud/cdktf-bindings.docker.Docker.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@clevercloud/cdktf-bindings.docker.Docker.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@clevercloud/cdktf-bindings.docker.Docker.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@clevercloud/cdktf-bindings.docker.Docker.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment"></a>

```java
public void putDeployment(DockerDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>

---

##### `putHooks` <a name="putHooks" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks"></a>

```java
public void putHooks(DockerHooks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks.parameter.value"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>

---

##### `putNetworkgroups` <a name="putNetworkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups"></a>

```java
public void putNetworkgroups(IResolvable|java.util.List<DockerNetworkgroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>>

---

##### `putVhosts` <a name="putVhosts" id="@clevercloud/cdktf-bindings.docker.Docker.putVhosts"></a>

```java
public void putVhosts(IResolvable|java.util.List<DockerVhosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putVhosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>>

---

##### `resetAppFolder` <a name="resetAppFolder" id="@clevercloud/cdktf-bindings.docker.Docker.resetAppFolder"></a>

```java
public void resetAppFolder()
```

##### `resetBuildFlavor` <a name="resetBuildFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.resetBuildFlavor"></a>

```java
public void resetBuildFlavor()
```

##### `resetContainerPort` <a name="resetContainerPort" id="@clevercloud/cdktf-bindings.docker.Docker.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetContainerPortTcp` <a name="resetContainerPortTcp" id="@clevercloud/cdktf-bindings.docker.Docker.resetContainerPortTcp"></a>

```java
public void resetContainerPortTcp()
```

##### `resetDaemonSocketMount` <a name="resetDaemonSocketMount" id="@clevercloud/cdktf-bindings.docker.Docker.resetDaemonSocketMount"></a>

```java
public void resetDaemonSocketMount()
```

##### `resetDependencies` <a name="resetDependencies" id="@clevercloud/cdktf-bindings.docker.Docker.resetDependencies"></a>

```java
public void resetDependencies()
```

##### `resetDeployment` <a name="resetDeployment" id="@clevercloud/cdktf-bindings.docker.Docker.resetDeployment"></a>

```java
public void resetDeployment()
```

##### `resetDescription` <a name="resetDescription" id="@clevercloud/cdktf-bindings.docker.Docker.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDockerfile` <a name="resetDockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.resetDockerfile"></a>

```java
public void resetDockerfile()
```

##### `resetEnableIpv6` <a name="resetEnableIpv6" id="@clevercloud/cdktf-bindings.docker.Docker.resetEnableIpv6"></a>

```java
public void resetEnableIpv6()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@clevercloud/cdktf-bindings.docker.Docker.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetExposedEnvironment` <a name="resetExposedEnvironment" id="@clevercloud/cdktf-bindings.docker.Docker.resetExposedEnvironment"></a>

```java
public void resetExposedEnvironment()
```

##### `resetHooks` <a name="resetHooks" id="@clevercloud/cdktf-bindings.docker.Docker.resetHooks"></a>

```java
public void resetHooks()
```

##### `resetIpv6Cidr` <a name="resetIpv6Cidr" id="@clevercloud/cdktf-bindings.docker.Docker.resetIpv6Cidr"></a>

```java
public void resetIpv6Cidr()
```

##### `resetNetworkgroups` <a name="resetNetworkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.resetNetworkgroups"></a>

```java
public void resetNetworkgroups()
```

##### `resetRedirectHttps` <a name="resetRedirectHttps" id="@clevercloud/cdktf-bindings.docker.Docker.resetRedirectHttps"></a>

```java
public void resetRedirectHttps()
```

##### `resetRegion` <a name="resetRegion" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRegistryPassword` <a name="resetRegistryPassword" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryPassword"></a>

```java
public void resetRegistryPassword()
```

##### `resetRegistryUrl` <a name="resetRegistryUrl" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUrl"></a>

```java
public void resetRegistryUrl()
```

##### `resetRegistryUser` <a name="resetRegistryUser" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUser"></a>

```java
public void resetRegistryUser()
```

##### `resetStickySessions` <a name="resetStickySessions" id="@clevercloud/cdktf-bindings.docker.Docker.resetStickySessions"></a>

```java
public void resetStickySessions()
```

##### `resetVhosts` <a name="resetVhosts" id="@clevercloud/cdktf-bindings.docker.Docker.resetVhosts"></a>

```java
public void resetVhosts()
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

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.Docker;

Docker.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.Docker;

Docker.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.Docker;

Docker.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.Docker;

Docker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Docker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Docker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Docker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Docker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Docker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference">DockerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deployUrl">deployUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference">DockerHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList">DockerNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList">DockerVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.appFolderInput">appFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavorInput">biggestFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavorInput">buildFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcpInput">containerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMountInput">daemonSocketMountInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependenciesInput">dependenciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dockerfileInput">dockerfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6Input">enableIpv6Input</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.environmentInput">environmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironmentInput">exposedEnvironmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.hooksInput">hooksInput</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.ipv6CidrInput">ipv6CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.networkgroupsInput">networkgroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttpsInput">redirectHttpsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryPasswordInput">registryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUrlInput">registryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUserInput">registryUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavorInput">smallestFlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.stickySessionsInput">stickySessionsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.vhostsInput">vhostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.appFolder">appFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcp">containerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMount">daemonSocketMount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dockerfile">dockerfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6">enableIpv6</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.ipv6Cidr">ipv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUser">registryUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.docker.Docker.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@clevercloud/cdktf-bindings.docker.Docker.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.Docker.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@clevercloud/cdktf-bindings.docker.Docker.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.Docker.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.Docker.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.docker.Docker.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.Docker.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.Docker.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.Docker.property.deployment"></a>

```java
public DockerDeploymentOutputReference getDeployment();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference">DockerDeploymentOutputReference</a>

---

##### `deployUrl`<sup>Required</sup> <a name="deployUrl" id="@clevercloud/cdktf-bindings.docker.Docker.property.deployUrl"></a>

```java
public java.lang.String getDeployUrl();
```

- *Type:* java.lang.String

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.Docker.property.hooks"></a>

```java
public DockerHooksOutputReference getHooks();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference">DockerHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.property.networkgroups"></a>

```java
public DockerNetworkgroupsList getNetworkgroups();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList">DockerNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.Docker.property.vhosts"></a>

```java
public DockerVhostsList getVhosts();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList">DockerVhostsList</a>

---

##### `appFolderInput`<sup>Optional</sup> <a name="appFolderInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.appFolderInput"></a>

```java
public java.lang.String getAppFolderInput();
```

- *Type:* java.lang.String

---

##### `biggestFlavorInput`<sup>Optional</sup> <a name="biggestFlavorInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavorInput"></a>

```java
public java.lang.String getBiggestFlavorInput();
```

- *Type:* java.lang.String

---

##### `buildFlavorInput`<sup>Optional</sup> <a name="buildFlavorInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavorInput"></a>

```java
public java.lang.String getBuildFlavorInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `containerPortTcpInput`<sup>Optional</sup> <a name="containerPortTcpInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcpInput"></a>

```java
public java.lang.Number getContainerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `daemonSocketMountInput`<sup>Optional</sup> <a name="daemonSocketMountInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMountInput"></a>

```java
public java.lang.Boolean|IResolvable getDaemonSocketMountInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependenciesInput"></a>

```java
public java.util.List<java.lang.String> getDependenciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.deploymentInput"></a>

```java
public DockerDeployment|IResolvable getDeploymentInput();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>|com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dockerfileInput`<sup>Optional</sup> <a name="dockerfileInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.dockerfileInput"></a>

```java
public java.lang.String getDockerfileInput();
```

- *Type:* java.lang.String

---

##### `enableIpv6Input`<sup>Optional</sup> <a name="enableIpv6Input" id="@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6Input"></a>

```java
public java.lang.Boolean|IResolvable getEnableIpv6Input();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.environmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `exposedEnvironmentInput`<sup>Optional</sup> <a name="exposedEnvironmentInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.hooksInput"></a>

```java
public DockerHooks|IResolvable getHooksInput();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>|com.hashicorp.cdktf.IResolvable

---

##### `ipv6CidrInput`<sup>Optional</sup> <a name="ipv6CidrInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.ipv6CidrInput"></a>

```java
public java.lang.String getIpv6CidrInput();
```

- *Type:* java.lang.String

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCountInput"></a>

```java
public java.lang.Number getMaxInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkgroupsInput`<sup>Optional</sup> <a name="networkgroupsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.networkgroupsInput"></a>

```java
public IResolvable|java.util.List<DockerNetworkgroups> getNetworkgroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>>

---

##### `redirectHttpsInput`<sup>Optional</sup> <a name="redirectHttpsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttpsInput"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttpsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `registryPasswordInput`<sup>Optional</sup> <a name="registryPasswordInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryPasswordInput"></a>

```java
public java.lang.String getRegistryPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryUrlInput`<sup>Optional</sup> <a name="registryUrlInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUrlInput"></a>

```java
public java.lang.String getRegistryUrlInput();
```

- *Type:* java.lang.String

---

##### `registryUserInput`<sup>Optional</sup> <a name="registryUserInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUserInput"></a>

```java
public java.lang.String getRegistryUserInput();
```

- *Type:* java.lang.String

---

##### `smallestFlavorInput`<sup>Optional</sup> <a name="smallestFlavorInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavorInput"></a>

```java
public java.lang.String getSmallestFlavorInput();
```

- *Type:* java.lang.String

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.stickySessionsInput"></a>

```java
public java.lang.Boolean|IResolvable getStickySessionsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `vhostsInput`<sup>Optional</sup> <a name="vhostsInput" id="@clevercloud/cdktf-bindings.docker.Docker.property.vhostsInput"></a>

```java
public IResolvable|java.util.List<DockerVhosts> getVhostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>>

---

##### `appFolder`<sup>Required</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.docker.Docker.property.appFolder"></a>

```java
public java.lang.String getAppFolder();
```

- *Type:* java.lang.String

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavor"></a>

```java
public java.lang.String getBiggestFlavor();
```

- *Type:* java.lang.String

---

##### `buildFlavor`<sup>Required</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavor"></a>

```java
public java.lang.String getBuildFlavor();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `containerPortTcp`<sup>Required</sup> <a name="containerPortTcp" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcp"></a>

```java
public java.lang.Number getContainerPortTcp();
```

- *Type:* java.lang.Number

---

##### `daemonSocketMount`<sup>Required</sup> <a name="daemonSocketMount" id="@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMount"></a>

```java
public java.lang.Boolean|IResolvable getDaemonSocketMount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependencies"></a>

```java
public java.util.List<java.lang.String> getDependencies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.Docker.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dockerfile`<sup>Required</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.property.dockerfile"></a>

```java
public java.lang.String getDockerfile();
```

- *Type:* java.lang.String

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6"></a>

```java
public java.lang.Boolean|IResolvable getEnableIpv6();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.Docker.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `exposedEnvironment`<sup>Required</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ipv6Cidr`<sup>Required</sup> <a name="ipv6Cidr" id="@clevercloud/cdktf-bindings.docker.Docker.property.ipv6Cidr"></a>

```java
public java.lang.String getIpv6Cidr();
```

- *Type:* java.lang.String

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.Docker.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redirectHttps`<sup>Required</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttps"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttps();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.Docker.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `registryPassword`<sup>Required</sup> <a name="registryPassword" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

---

##### `registryUser`<sup>Required</sup> <a name="registryUser" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUser"></a>

```java
public java.lang.String getRegistryUser();
```

- *Type:* java.lang.String

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavor"></a>

```java
public java.lang.String getSmallestFlavor();
```

- *Type:* java.lang.String

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.docker.Docker.property.stickySessions"></a>

```java
public java.lang.Boolean|IResolvable getStickySessions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.docker.Docker.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DockerConfig <a name="DockerConfig" id="@clevercloud/cdktf-bindings.docker.DockerConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerConfig.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerConfig;

DockerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .biggestFlavor(java.lang.String)
    .maxInstanceCount(java.lang.Number)
    .minInstanceCount(java.lang.Number)
    .name(java.lang.String)
    .smallestFlavor(java.lang.String)
//  .appFolder(java.lang.String)
//  .buildFlavor(java.lang.String)
//  .containerPort(java.lang.Number)
//  .containerPortTcp(java.lang.Number)
//  .daemonSocketMount(java.lang.Boolean|IResolvable)
//  .dependencies(java.util.List<java.lang.String>)
//  .deployment(DockerDeployment)
//  .description(java.lang.String)
//  .dockerfile(java.lang.String)
//  .enableIpv6(java.lang.Boolean|IResolvable)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .exposedEnvironment(java.util.Map<java.lang.String, java.lang.String>)
//  .hooks(DockerHooks)
//  .ipv6Cidr(java.lang.String)
//  .networkgroups(IResolvable|java.util.List<DockerNetworkgroups>)
//  .redirectHttps(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .registryPassword(java.lang.String)
//  .registryUrl(java.lang.String)
//  .registryUser(java.lang.String)
//  .stickySessions(java.lang.Boolean|IResolvable)
//  .vhosts(IResolvable|java.util.List<DockerVhosts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.biggestFlavor">biggestFlavor</a></code> | <code>java.lang.String</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.smallestFlavor">smallestFlavor</a></code> | <code>java.lang.String</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.appFolder">appFolder</a></code> | <code>java.lang.String</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.buildFlavor">buildFlavor</a></code> | <code>java.lang.String</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Set to custom HTTP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPortTcp">containerPortTcp</a></code> | <code>java.lang.Number</code> | Set to custom TCP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.daemonSocketMount">daemonSocketMount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to access the host Docker socket from inside your container. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependencies">dependencies</a></code> | <code>java.util.List<java.lang.String></code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dockerfile">dockerfile</a></code> | <code>java.lang.String</code> | The name of the Dockerfile to build. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.enableIpv6">enableIpv6</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.exposedEnvironment">exposedEnvironment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.ipv6Cidr">ipv6Cidr</a></code> | <code>java.lang.String</code> | Activate the support of IPv6 with an IPv6 subnet int the docker daemon. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.networkgroups">networkgroups</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>></code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.redirectHttps">redirectHttps</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | The password of your username. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | The server of your private registry (optional).	Docker’s public registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUser">registryUser</a></code> | <code>java.lang.String</code> | The username to login to a private registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.stickySessions">stickySessions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.vhosts">vhosts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>></code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `biggestFlavor`<sup>Required</sup> <a name="biggestFlavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.biggestFlavor"></a>

```java
public java.lang.String getBiggestFlavor();
```

- *Type:* java.lang.String

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#biggest_flavor Docker#biggest_flavor}

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#max_instance_count Docker#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#min_instance_count Docker#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#name Docker#name}

---

##### `smallestFlavor`<sup>Required</sup> <a name="smallestFlavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.smallestFlavor"></a>

```java
public java.lang.String getSmallestFlavor();
```

- *Type:* java.lang.String

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#smallest_flavor Docker#smallest_flavor}

---

##### `appFolder`<sup>Optional</sup> <a name="appFolder" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.appFolder"></a>

```java
public java.lang.String getAppFolder();
```

- *Type:* java.lang.String

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#app_folder Docker#app_folder}

---

##### `buildFlavor`<sup>Optional</sup> <a name="buildFlavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.buildFlavor"></a>

```java
public java.lang.String getBuildFlavor();
```

- *Type:* java.lang.String

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#build_flavor Docker#build_flavor}

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Set to custom HTTP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port Docker#container_port}

---

##### `containerPortTcp`<sup>Optional</sup> <a name="containerPortTcp" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPortTcp"></a>

```java
public java.lang.Number getContainerPortTcp();
```

- *Type:* java.lang.Number

Set to custom TCP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port_tcp Docker#container_port_tcp}

---

##### `daemonSocketMount`<sup>Optional</sup> <a name="daemonSocketMount" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.daemonSocketMount"></a>

```java
public java.lang.Boolean|IResolvable getDaemonSocketMount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to access the host Docker socket from inside your container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#daemon_socket_mount Docker#daemon_socket_mount}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependencies"></a>

```java
public java.util.List<java.lang.String> getDependencies();
```

- *Type:* java.util.List<java.lang.String>

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dependencies Docker#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.deployment"></a>

```java
public DockerDeployment getDeployment();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#deployment Docker#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#description Docker#description}

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dockerfile"></a>

```java
public java.lang.String getDockerfile();
```

- *Type:* java.lang.String

The name of the Dockerfile to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dockerfile Docker#dockerfile}

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.enableIpv6"></a>

```java
public java.lang.Boolean|IResolvable getEnableIpv6();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#environment Docker#environment}

---

##### `exposedEnvironment`<sup>Optional</sup> <a name="exposedEnvironment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.exposedEnvironment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExposedEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#exposed_environment Docker#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.hooks"></a>

```java
public DockerHooks getHooks();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#hooks Docker#hooks}

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.ipv6Cidr"></a>

```java
public java.lang.String getIpv6Cidr();
```

- *Type:* java.lang.String

Activate the support of IPv6 with an IPv6 subnet int the docker daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#ipv6_cidr Docker#ipv6_cidr}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.networkgroups"></a>

```java
public IResolvable|java.util.List<DockerNetworkgroups> getNetworkgroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>>

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroups Docker#networkgroups}

---

##### `redirectHttps`<sup>Optional</sup> <a name="redirectHttps" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.redirectHttps"></a>

```java
public java.lang.Boolean|IResolvable getRedirectHttps();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#redirect_https Docker#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#region Docker#region}

---

##### `registryPassword`<sup>Optional</sup> <a name="registryPassword" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

The password of your username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_password Docker#registry_password}

---

##### `registryUrl`<sup>Optional</sup> <a name="registryUrl" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

The server of your private registry (optional).	Docker’s public registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_url Docker#registry_url}

---

##### `registryUser`<sup>Optional</sup> <a name="registryUser" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUser"></a>

```java
public java.lang.String getRegistryUser();
```

- *Type:* java.lang.String

The username to login to a private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_user Docker#registry_user}

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.stickySessions"></a>

```java
public java.lang.Boolean|IResolvable getStickySessions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#sticky_sessions Docker#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.vhosts"></a>

```java
public IResolvable|java.util.List<DockerVhosts> getVhosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>>

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#vhosts Docker#vhosts}

---

### DockerDeployment <a name="DockerDeployment" id="@clevercloud/cdktf-bindings.docker.DockerDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerDeployment;

DockerDeployment.builder()
//  .authenticationBasic(java.lang.String)
//  .commit(java.lang.String)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.authenticationBasic">authenticationBasic</a></code> | <code>java.lang.String</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.commit">commit</a></code> | <code>java.lang.String</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authenticationBasic`<sup>Optional</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.authenticationBasic"></a>

```java
public java.lang.String getAuthenticationBasic();
```

- *Type:* java.lang.String

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#authentication_basic Docker#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#commit Docker#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#repository Docker#repository}

---

### DockerHooks <a name="DockerHooks" id="@clevercloud/cdktf-bindings.docker.DockerHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerHooks.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerHooks;

DockerHooks.builder()
//  .postBuild(java.lang.String)
//  .preBuild(java.lang.String)
//  .preRun(java.lang.String)
//  .runFailed(java.lang.String)
//  .runSucceed(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.postBuild">postBuild</a></code> | <code>java.lang.String</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.preBuild">preBuild</a></code> | <code>java.lang.String</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.preRun">preRun</a></code> | <code>java.lang.String</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.runFailed">runFailed</a></code> | <code>java.lang.String</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.runSucceed">runSucceed</a></code> | <code>java.lang.String</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `postBuild`<sup>Optional</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.postBuild"></a>

```java
public java.lang.String getPostBuild();
```

- *Type:* java.lang.String

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#post_build Docker#post_build}

---

##### `preBuild`<sup>Optional</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.preBuild"></a>

```java
public java.lang.String getPreBuild();
```

- *Type:* java.lang.String

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_build Docker#pre_build}

---

##### `preRun`<sup>Optional</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.preRun"></a>

```java
public java.lang.String getPreRun();
```

- *Type:* java.lang.String

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_run Docker#pre_run}

---

##### `runFailed`<sup>Optional</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.runFailed"></a>

```java
public java.lang.String getRunFailed();
```

- *Type:* java.lang.String

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_failed Docker#run_failed}

---

##### `runSucceed`<sup>Optional</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.runSucceed"></a>

```java
public java.lang.String getRunSucceed();
```

- *Type:* java.lang.String

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_succeed Docker#run_succeed}

---

### DockerNetworkgroups <a name="DockerNetworkgroups" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerNetworkgroups;

DockerNetworkgroups.builder()
    .fqdn(java.lang.String)
    .networkgroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#fqdn Docker#fqdn}

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroup_id Docker#networkgroup_id}

---

### DockerVhosts <a name="DockerVhosts" id="@clevercloud/cdktf-bindings.docker.DockerVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerVhosts;

DockerVhosts.builder()
    .fqdn(java.lang.String)
//  .pathBegin(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts.property.pathBegin">pathBegin</a></code> | <code>java.lang.String</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#fqdn Docker#fqdn}

---

##### `pathBegin`<sup>Optional</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.property.pathBegin"></a>

```java
public java.lang.String getPathBegin();
```

- *Type:* java.lang.String

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#path_begin Docker#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### DockerDeploymentOutputReference <a name="DockerDeploymentOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerDeploymentOutputReference;

new DockerDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationBasic` <a name="resetAuthenticationBasic" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetAuthenticationBasic"></a>

```java
public void resetAuthenticationBasic()
```

##### `resetCommit` <a name="resetCommit" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetCommit"></a>

```java
public void resetCommit()
```

##### `resetRepository` <a name="resetRepository" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasicInput">authenticationBasicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasic">authenticationBasic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationBasicInput`<sup>Optional</sup> <a name="authenticationBasicInput" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasicInput"></a>

```java
public java.lang.String getAuthenticationBasicInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `authenticationBasic`<sup>Required</sup> <a name="authenticationBasic" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasic"></a>

```java
public java.lang.String getAuthenticationBasic();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.internalValue"></a>

```java
public DockerDeployment|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>|com.hashicorp.cdktf.IResolvable

---


### DockerHooksOutputReference <a name="DockerHooksOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerHooksOutputReference;

new DockerHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostBuild` <a name="resetPostBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPostBuild"></a>

```java
public void resetPostBuild()
```

##### `resetPreBuild` <a name="resetPreBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreBuild"></a>

```java
public void resetPreBuild()
```

##### `resetPreRun` <a name="resetPreRun" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreRun"></a>

```java
public void resetPreRun()
```

##### `resetRunFailed` <a name="resetRunFailed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunFailed"></a>

```java
public void resetRunFailed()
```

##### `resetRunSucceed` <a name="resetRunSucceed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunSucceed"></a>

```java
public void resetRunSucceed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuildInput">postBuildInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuildInput">preBuildInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRunInput">preRunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailedInput">runFailedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceedInput">runSucceedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuild">postBuild</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuild">preBuild</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRun">preRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailed">runFailed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceed">runSucceed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postBuildInput`<sup>Optional</sup> <a name="postBuildInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuildInput"></a>

```java
public java.lang.String getPostBuildInput();
```

- *Type:* java.lang.String

---

##### `preBuildInput`<sup>Optional</sup> <a name="preBuildInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuildInput"></a>

```java
public java.lang.String getPreBuildInput();
```

- *Type:* java.lang.String

---

##### `preRunInput`<sup>Optional</sup> <a name="preRunInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRunInput"></a>

```java
public java.lang.String getPreRunInput();
```

- *Type:* java.lang.String

---

##### `runFailedInput`<sup>Optional</sup> <a name="runFailedInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailedInput"></a>

```java
public java.lang.String getRunFailedInput();
```

- *Type:* java.lang.String

---

##### `runSucceedInput`<sup>Optional</sup> <a name="runSucceedInput" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceedInput"></a>

```java
public java.lang.String getRunSucceedInput();
```

- *Type:* java.lang.String

---

##### `postBuild`<sup>Required</sup> <a name="postBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuild"></a>

```java
public java.lang.String getPostBuild();
```

- *Type:* java.lang.String

---

##### `preBuild`<sup>Required</sup> <a name="preBuild" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuild"></a>

```java
public java.lang.String getPreBuild();
```

- *Type:* java.lang.String

---

##### `preRun`<sup>Required</sup> <a name="preRun" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRun"></a>

```java
public java.lang.String getPreRun();
```

- *Type:* java.lang.String

---

##### `runFailed`<sup>Required</sup> <a name="runFailed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailed"></a>

```java
public java.lang.String getRunFailed();
```

- *Type:* java.lang.String

---

##### `runSucceed`<sup>Required</sup> <a name="runSucceed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceed"></a>

```java
public java.lang.String getRunSucceed();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.internalValue"></a>

```java
public DockerHooks|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>|com.hashicorp.cdktf.IResolvable

---


### DockerNetworkgroupsList <a name="DockerNetworkgroupsList" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerNetworkgroupsList;

new DockerNetworkgroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get"></a>

```java
public DockerNetworkgroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DockerNetworkgroups> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>>

---


### DockerNetworkgroupsOutputReference <a name="DockerNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerNetworkgroupsOutputReference;

new DockerNetworkgroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupId">networkgroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `networkgroupIdInput`<sup>Optional</sup> <a name="networkgroupIdInput" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```java
public java.lang.String getNetworkgroupIdInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `networkgroupId`<sup>Required</sup> <a name="networkgroupId" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupId"></a>

```java
public java.lang.String getNetworkgroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.internalValue"></a>

```java
public DockerNetworkgroups|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>|com.hashicorp.cdktf.IResolvable

---


### DockerVhostsList <a name="DockerVhostsList" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerVhostsList;

new DockerVhostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.get"></a>

```java
public DockerVhostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DockerVhosts> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>>

---


### DockerVhostsOutputReference <a name="DockerVhostsOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer"></a>

```java
import com.clevercloud.cdktf.providers.clevercloud.docker.DockerVhostsOutputReference;

new DockerVhostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathBegin` <a name="resetPathBegin" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resetPathBegin"></a>

```java
public void resetPathBegin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBeginInput">pathBeginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBegin">pathBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `pathBeginInput`<sup>Optional</sup> <a name="pathBeginInput" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBeginInput"></a>

```java
public java.lang.String getPathBeginInput();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `pathBegin`<sup>Required</sup> <a name="pathBegin" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBegin"></a>

```java
public java.lang.String getPathBegin();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.internalValue"></a>

```java
public DockerVhosts|IResolvable getInternalValue();
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>|com.hashicorp.cdktf.IResolvable

---



