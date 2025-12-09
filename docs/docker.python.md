# `docker` Submodule <a name="`docker` Submodule" id="@clevercloud/cdktf-bindings.docker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Docker <a name="Docker" id="@clevercloud/cdktf-bindings.docker.Docker"></a>

Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker clevercloud_docker}.

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.Docker(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  biggest_flavor: str,
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float],
  name: str,
  smallest_flavor: str,
  app_folder: str = None,
  build_flavor: str = None,
  container_port: typing.Union[int, float] = None,
  container_port_tcp: typing.Union[int, float] = None,
  daemon_socket_mount: bool | IResolvable = None,
  dependencies: typing.List[str] = None,
  deployment: DockerDeployment = None,
  description: str = None,
  dockerfile: str = None,
  enable_ipv6: bool | IResolvable = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: DockerHooks = None,
  ipv6_cidr: str = None,
  networkgroups: IResolvable | typing.List[DockerNetworkgroups] = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  registry_password: str = None,
  registry_url: str = None,
  registry_user: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[DockerVhosts] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | Set to custom HTTP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPortTcp">container_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Set to custom TCP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.daemonSocketMount">daemon_socket_mount</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to access the host Docker socket from inside your container. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dockerfile">dockerfile</a></code> | <code>str</code> | The name of the Dockerfile to build. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.enableIpv6">enable_ipv6</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.ipv6Cidr">ipv6_cidr</a></code> | <code>str</code> | Activate the support of IPv6 with an IPv6 subnet int the docker daemon. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryPassword">registry_password</a></code> | <code>str</code> | The password of your username. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUrl">registry_url</a></code> | <code>str</code> | The server of your private registry (optional).	Docker’s public registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUser">registry_user</a></code> | <code>str</code> | The username to login to a private registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]</code> | List of virtual hosts. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.biggestFlavor"></a>

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#biggest_flavor Docker#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#max_instance_count Docker#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#min_instance_count Docker#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.name"></a>

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#name Docker#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.smallestFlavor"></a>

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#smallest_flavor Docker#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.appFolder"></a>

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#app_folder Docker#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.buildFlavor"></a>

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#build_flavor Docker#build_flavor}

---

##### `container_port`<sup>Optional</sup> <a name="container_port" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPort"></a>

- *Type:* typing.Union[int, float]

Set to custom HTTP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port Docker#container_port}

---

##### `container_port_tcp`<sup>Optional</sup> <a name="container_port_tcp" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.containerPortTcp"></a>

- *Type:* typing.Union[int, float]

Set to custom TCP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port_tcp Docker#container_port_tcp}

---

##### `daemon_socket_mount`<sup>Optional</sup> <a name="daemon_socket_mount" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.daemonSocketMount"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to access the host Docker socket from inside your container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#daemon_socket_mount Docker#daemon_socket_mount}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dependencies"></a>

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dependencies Docker#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#deployment Docker#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.description"></a>

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#description Docker#description}

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.dockerfile"></a>

- *Type:* str

The name of the Dockerfile to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dockerfile Docker#dockerfile}

---

##### `enable_ipv6`<sup>Optional</sup> <a name="enable_ipv6" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.enableIpv6"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#environment Docker#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.exposedEnvironment"></a>

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#exposed_environment Docker#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#hooks Docker#hooks}

---

##### `ipv6_cidr`<sup>Optional</sup> <a name="ipv6_cidr" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.ipv6Cidr"></a>

- *Type:* str

Activate the support of IPv6 with an IPv6 subnet int the docker daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#ipv6_cidr Docker#ipv6_cidr}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.networkgroups"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroups Docker#networkgroups}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.redirectHttps"></a>

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#redirect_https Docker#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.region"></a>

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#region Docker#region}

---

##### `registry_password`<sup>Optional</sup> <a name="registry_password" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryPassword"></a>

- *Type:* str

The password of your username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_password Docker#registry_password}

---

##### `registry_url`<sup>Optional</sup> <a name="registry_url" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUrl"></a>

- *Type:* str

The server of your private registry (optional).	Docker’s public registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_url Docker#registry_url}

---

##### `registry_user`<sup>Optional</sup> <a name="registry_user" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.registryUser"></a>

- *Type:* str

The username to login to a private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_user Docker#registry_user}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.stickySessions"></a>

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#sticky_sessions Docker#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.Docker.Initializer.parameter.vhosts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#vhosts Docker#vhosts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putHooks">put_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups">put_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.putVhosts">put_vhosts</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetAppFolder">reset_app_folder</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetBuildFlavor">reset_build_flavor</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetContainerPort">reset_container_port</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetContainerPortTcp">reset_container_port_tcp</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDaemonSocketMount">reset_daemon_socket_mount</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetDockerfile">reset_dockerfile</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetEnableIpv6">reset_enable_ipv6</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetExposedEnvironment">reset_exposed_environment</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetHooks">reset_hooks</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetIpv6Cidr">reset_ipv6_cidr</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetNetworkgroups">reset_networkgroups</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRedirectHttps">reset_redirect_https</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegistryPassword">reset_registry_password</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUrl">reset_registry_url</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUser">reset_registry_user</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetStickySessions">reset_sticky_sessions</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.resetVhosts">reset_vhosts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.docker.Docker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@clevercloud/cdktf-bindings.docker.Docker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@clevercloud/cdktf-bindings.docker.Docker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@clevercloud/cdktf-bindings.docker.Docker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@clevercloud/cdktf-bindings.docker.Docker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@clevercloud/cdktf-bindings.docker.Docker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.docker.Docker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@clevercloud/cdktf-bindings.docker.Docker.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.Docker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@clevercloud/cdktf-bindings.docker.Docker.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.Docker.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@clevercloud/cdktf-bindings.docker.Docker.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment` <a name="put_deployment" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment"></a>

```python
def put_deployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
) -> None
```

###### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment.parameter.authenticationBasic"></a>

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#authentication_basic Docker#authentication_basic}

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment.parameter.commit"></a>

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#commit Docker#commit}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.docker.Docker.putDeployment.parameter.repository"></a>

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#repository Docker#repository}

---

##### `put_hooks` <a name="put_hooks" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks"></a>

```python
def put_hooks(
  post_build: str = None,
  pre_build: str = None,
  pre_run: str = None,
  run_failed: str = None,
  run_succeed: str = None
) -> None
```

###### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks.parameter.postBuild"></a>

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#post_build Docker#post_build}

---

###### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks.parameter.preBuild"></a>

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_build Docker#pre_build}

---

###### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks.parameter.preRun"></a>

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_run Docker#pre_run}

---

###### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks.parameter.runFailed"></a>

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_failed Docker#run_failed}

---

###### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.docker.Docker.putHooks.parameter.runSucceed"></a>

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_succeed Docker#run_succeed}

---

##### `put_networkgroups` <a name="put_networkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups"></a>

```python
def put_networkgroups(
  value: IResolvable | typing.List[DockerNetworkgroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putNetworkgroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]

---

##### `put_vhosts` <a name="put_vhosts" id="@clevercloud/cdktf-bindings.docker.Docker.putVhosts"></a>

```python
def put_vhosts(
  value: IResolvable | typing.List[DockerVhosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@clevercloud/cdktf-bindings.docker.Docker.putVhosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]

---

##### `reset_app_folder` <a name="reset_app_folder" id="@clevercloud/cdktf-bindings.docker.Docker.resetAppFolder"></a>

```python
def reset_app_folder() -> None
```

##### `reset_build_flavor` <a name="reset_build_flavor" id="@clevercloud/cdktf-bindings.docker.Docker.resetBuildFlavor"></a>

```python
def reset_build_flavor() -> None
```

##### `reset_container_port` <a name="reset_container_port" id="@clevercloud/cdktf-bindings.docker.Docker.resetContainerPort"></a>

```python
def reset_container_port() -> None
```

##### `reset_container_port_tcp` <a name="reset_container_port_tcp" id="@clevercloud/cdktf-bindings.docker.Docker.resetContainerPortTcp"></a>

```python
def reset_container_port_tcp() -> None
```

##### `reset_daemon_socket_mount` <a name="reset_daemon_socket_mount" id="@clevercloud/cdktf-bindings.docker.Docker.resetDaemonSocketMount"></a>

```python
def reset_daemon_socket_mount() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@clevercloud/cdktf-bindings.docker.Docker.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@clevercloud/cdktf-bindings.docker.Docker.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_description` <a name="reset_description" id="@clevercloud/cdktf-bindings.docker.Docker.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dockerfile` <a name="reset_dockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.resetDockerfile"></a>

```python
def reset_dockerfile() -> None
```

##### `reset_enable_ipv6` <a name="reset_enable_ipv6" id="@clevercloud/cdktf-bindings.docker.Docker.resetEnableIpv6"></a>

```python
def reset_enable_ipv6() -> None
```

##### `reset_environment` <a name="reset_environment" id="@clevercloud/cdktf-bindings.docker.Docker.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_exposed_environment` <a name="reset_exposed_environment" id="@clevercloud/cdktf-bindings.docker.Docker.resetExposedEnvironment"></a>

```python
def reset_exposed_environment() -> None
```

##### `reset_hooks` <a name="reset_hooks" id="@clevercloud/cdktf-bindings.docker.Docker.resetHooks"></a>

```python
def reset_hooks() -> None
```

##### `reset_ipv6_cidr` <a name="reset_ipv6_cidr" id="@clevercloud/cdktf-bindings.docker.Docker.resetIpv6Cidr"></a>

```python
def reset_ipv6_cidr() -> None
```

##### `reset_networkgroups` <a name="reset_networkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.resetNetworkgroups"></a>

```python
def reset_networkgroups() -> None
```

##### `reset_redirect_https` <a name="reset_redirect_https" id="@clevercloud/cdktf-bindings.docker.Docker.resetRedirectHttps"></a>

```python
def reset_redirect_https() -> None
```

##### `reset_region` <a name="reset_region" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_registry_password` <a name="reset_registry_password" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryPassword"></a>

```python
def reset_registry_password() -> None
```

##### `reset_registry_url` <a name="reset_registry_url" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUrl"></a>

```python
def reset_registry_url() -> None
```

##### `reset_registry_user` <a name="reset_registry_user" id="@clevercloud/cdktf-bindings.docker.Docker.resetRegistryUser"></a>

```python
def reset_registry_user() -> None
```

##### `reset_sticky_sessions` <a name="reset_sticky_sessions" id="@clevercloud/cdktf-bindings.docker.Docker.resetStickySessions"></a>

```python
def reset_sticky_sessions() -> None
```

##### `reset_vhosts` <a name="reset_vhosts" id="@clevercloud/cdktf-bindings.docker.Docker.resetVhosts"></a>

```python
def reset_vhosts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Docker resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@clevercloud/cdktf-bindings.docker.Docker.isConstruct"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.Docker.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.Docker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.Docker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@clevercloud/cdktf-bindings.docker.Docker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.Docker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Docker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Docker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@clevercloud/cdktf-bindings.docker.Docker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

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
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference">DockerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deployUrl">deploy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference">DockerHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.networkgroups">networkgroups</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList">DockerNetworkgroupsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.vhosts">vhosts</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList">DockerVhostsList</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.appFolderInput">app_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavorInput">biggest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavorInput">build_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcpInput">container_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMountInput">daemon_socket_mount_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependenciesInput">dependencies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.deploymentInput">deployment_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dockerfileInput">dockerfile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6Input">enable_ipv6_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironmentInput">exposed_environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.hooksInput">hooks_input</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.ipv6CidrInput">ipv6_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.networkgroupsInput">networkgroups_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttpsInput">redirect_https_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryPasswordInput">registry_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUrlInput">registry_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUserInput">registry_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavorInput">smallest_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.stickySessionsInput">sticky_sessions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.vhostsInput">vhosts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.appFolder">app_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavor">build_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcp">container_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMount">daemon_socket_mount</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.dockerfile">dockerfile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6">enable_ipv6</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.ipv6Cidr">ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryPassword">registry_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUrl">registry_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.registryUser">registry_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@clevercloud/cdktf-bindings.docker.Docker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@clevercloud/cdktf-bindings.docker.Docker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.Docker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@clevercloud/cdktf-bindings.docker.Docker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@clevercloud/cdktf-bindings.docker.Docker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.Docker.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.Docker.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.docker.Docker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.Docker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.Docker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.Docker.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.Docker.property.deployment"></a>

```python
deployment: DockerDeploymentOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference">DockerDeploymentOutputReference</a>

---

##### `deploy_url`<sup>Required</sup> <a name="deploy_url" id="@clevercloud/cdktf-bindings.docker.Docker.property.deployUrl"></a>

```python
deploy_url: str
```

- *Type:* str

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.Docker.property.hooks"></a>

```python
hooks: DockerHooksOutputReference
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference">DockerHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@clevercloud/cdktf-bindings.docker.Docker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `networkgroups`<sup>Required</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.Docker.property.networkgroups"></a>

```python
networkgroups: DockerNetworkgroupsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList">DockerNetworkgroupsList</a>

---

##### `vhosts`<sup>Required</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.Docker.property.vhosts"></a>

```python
vhosts: DockerVhostsList
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList">DockerVhostsList</a>

---

##### `app_folder_input`<sup>Optional</sup> <a name="app_folder_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.appFolderInput"></a>

```python
app_folder_input: str
```

- *Type:* str

---

##### `biggest_flavor_input`<sup>Optional</sup> <a name="biggest_flavor_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavorInput"></a>

```python
biggest_flavor_input: str
```

- *Type:* str

---

##### `build_flavor_input`<sup>Optional</sup> <a name="build_flavor_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavorInput"></a>

```python
build_flavor_input: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_port_tcp_input`<sup>Optional</sup> <a name="container_port_tcp_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcpInput"></a>

```python
container_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daemon_socket_mount_input`<sup>Optional</sup> <a name="daemon_socket_mount_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMountInput"></a>

```python
daemon_socket_mount_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependenciesInput"></a>

```python
dependencies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.deploymentInput"></a>

```python
deployment_input: DockerDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> | cdktf.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dockerfile_input`<sup>Optional</sup> <a name="dockerfile_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.dockerfileInput"></a>

```python
dockerfile_input: str
```

- *Type:* str

---

##### `enable_ipv6_input`<sup>Optional</sup> <a name="enable_ipv6_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6Input"></a>

```python
enable_ipv6_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment_input`<sup>Optional</sup> <a name="exposed_environment_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironmentInput"></a>

```python
exposed_environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hooks_input`<sup>Optional</sup> <a name="hooks_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.hooksInput"></a>

```python
hooks_input: DockerHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> | cdktf.IResolvable

---

##### `ipv6_cidr_input`<sup>Optional</sup> <a name="ipv6_cidr_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.ipv6CidrInput"></a>

```python
ipv6_cidr_input: str
```

- *Type:* str

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkgroups_input`<sup>Optional</sup> <a name="networkgroups_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.networkgroupsInput"></a>

```python
networkgroups_input: IResolvable | typing.List[DockerNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]

---

##### `redirect_https_input`<sup>Optional</sup> <a name="redirect_https_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttpsInput"></a>

```python
redirect_https_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `registry_password_input`<sup>Optional</sup> <a name="registry_password_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryPasswordInput"></a>

```python
registry_password_input: str
```

- *Type:* str

---

##### `registry_url_input`<sup>Optional</sup> <a name="registry_url_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUrlInput"></a>

```python
registry_url_input: str
```

- *Type:* str

---

##### `registry_user_input`<sup>Optional</sup> <a name="registry_user_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUserInput"></a>

```python
registry_user_input: str
```

- *Type:* str

---

##### `smallest_flavor_input`<sup>Optional</sup> <a name="smallest_flavor_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavorInput"></a>

```python
smallest_flavor_input: str
```

- *Type:* str

---

##### `sticky_sessions_input`<sup>Optional</sup> <a name="sticky_sessions_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.stickySessionsInput"></a>

```python
sticky_sessions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `vhosts_input`<sup>Optional</sup> <a name="vhosts_input" id="@clevercloud/cdktf-bindings.docker.Docker.property.vhostsInput"></a>

```python
vhosts_input: IResolvable | typing.List[DockerVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]

---

##### `app_folder`<sup>Required</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.docker.Docker.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

---

##### `build_flavor`<sup>Required</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_port_tcp`<sup>Required</sup> <a name="container_port_tcp" id="@clevercloud/cdktf-bindings.docker.Docker.property.containerPortTcp"></a>

```python
container_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daemon_socket_mount`<sup>Required</sup> <a name="daemon_socket_mount" id="@clevercloud/cdktf-bindings.docker.Docker.property.daemonSocketMount"></a>

```python
daemon_socket_mount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.Docker.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.Docker.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dockerfile`<sup>Required</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.Docker.property.dockerfile"></a>

```python
dockerfile: str
```

- *Type:* str

---

##### `enable_ipv6`<sup>Required</sup> <a name="enable_ipv6" id="@clevercloud/cdktf-bindings.docker.Docker.property.enableIpv6"></a>

```python
enable_ipv6: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.Docker.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exposed_environment`<sup>Required</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.docker.Docker.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ipv6_cidr`<sup>Required</sup> <a name="ipv6_cidr" id="@clevercloud/cdktf-bindings.docker.Docker.property.ipv6Cidr"></a>

```python
ipv6_cidr: str
```

- *Type:* str

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.docker.Docker.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.docker.Docker.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.Docker.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_https`<sup>Required</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.docker.Docker.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.Docker.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `registry_password`<sup>Required</sup> <a name="registry_password" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryPassword"></a>

```python
registry_password: str
```

- *Type:* str

---

##### `registry_url`<sup>Required</sup> <a name="registry_url" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUrl"></a>

```python
registry_url: str
```

- *Type:* str

---

##### `registry_user`<sup>Required</sup> <a name="registry_user" id="@clevercloud/cdktf-bindings.docker.Docker.property.registryUser"></a>

```python
registry_user: str
```

- *Type:* str

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.docker.Docker.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

---

##### `sticky_sessions`<sup>Required</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.docker.Docker.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.Docker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@clevercloud/cdktf-bindings.docker.Docker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DockerConfig <a name="DockerConfig" id="@clevercloud/cdktf-bindings.docker.DockerConfig"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerConfig.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  biggest_flavor: str,
  max_instance_count: typing.Union[int, float],
  min_instance_count: typing.Union[int, float],
  name: str,
  smallest_flavor: str,
  app_folder: str = None,
  build_flavor: str = None,
  container_port: typing.Union[int, float] = None,
  container_port_tcp: typing.Union[int, float] = None,
  daemon_socket_mount: bool | IResolvable = None,
  dependencies: typing.List[str] = None,
  deployment: DockerDeployment = None,
  description: str = None,
  dockerfile: str = None,
  enable_ipv6: bool | IResolvable = None,
  environment: typing.Mapping[str] = None,
  exposed_environment: typing.Mapping[str] = None,
  hooks: DockerHooks = None,
  ipv6_cidr: str = None,
  networkgroups: IResolvable | typing.List[DockerNetworkgroups] = None,
  redirect_https: bool | IResolvable = None,
  region: str = None,
  registry_password: str = None,
  registry_url: str = None,
  registry_user: str = None,
  sticky_sessions: bool | IResolvable = None,
  vhosts: IResolvable | typing.List[DockerVhosts] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.biggestFlavor">biggest_flavor</a></code> | <code>str</code> | Biggest instance flavor, if different from smallest, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Maximum instance count, if different from min value, enable auto-scaling. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Minimum instance count. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.name">name</a></code> | <code>str</code> | Application name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.smallestFlavor">smallest_flavor</a></code> | <code>str</code> | Smallest instance flavor. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.appFolder">app_folder</a></code> | <code>str</code> | Folder in which the application is located (inside the git repository). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.buildFlavor">build_flavor</a></code> | <code>str</code> | Use dedicated instance with given flavor for build phase. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | Set to custom HTTP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPortTcp">container_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Set to custom TCP port if your Docker container runs on custom port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.daemonSocketMount">daemon_socket_mount</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to access the host Docker socket from inside your container. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependencies">dependencies</a></code> | <code>typing.List[str]</code> | A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.deployment">deployment</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a></code> | deployment block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.description">description</a></code> | <code>str</code> | Application description. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.dockerfile">dockerfile</a></code> | <code>str</code> | The name of the Dockerfile to build. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.enableIpv6">enable_ipv6</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables injected into the application. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.exposedEnvironment">exposed_environment</a></code> | <code>typing.Mapping[str]</code> | Environment variables other linked applications will be able to use. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.hooks">hooks</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a></code> | hooks block. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.ipv6Cidr">ipv6_cidr</a></code> | <code>str</code> | Activate the support of IPv6 with an IPv6 subnet int the docker daemon. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.networkgroups">networkgroups</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]</code> | List of networkgroups the application must be part of. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.redirectHttps">redirect_https</a></code> | <code>bool \| cdktf.IResolvable</code> | Redirect client from plain to TLS port. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.region">region</a></code> | <code>str</code> | Geographical region where the database will be deployed. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryPassword">registry_password</a></code> | <code>str</code> | The password of your username. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUrl">registry_url</a></code> | <code>str</code> | The server of your private registry (optional).	Docker’s public registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUser">registry_user</a></code> | <code>str</code> | The username to login to a private registry. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.stickySessions">sticky_sessions</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable sticky sessions, use it when your client sessions are instances scoped. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerConfig.property.vhosts">vhosts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]</code> | List of virtual hosts. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `biggest_flavor`<sup>Required</sup> <a name="biggest_flavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.biggestFlavor"></a>

```python
biggest_flavor: str
```

- *Type:* str

Biggest instance flavor, if different from smallest, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#biggest_flavor Docker#biggest_flavor}

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum instance count, if different from min value, enable auto-scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#max_instance_count Docker#max_instance_count}

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#min_instance_count Docker#min_instance_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#name Docker#name}

---

##### `smallest_flavor`<sup>Required</sup> <a name="smallest_flavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.smallestFlavor"></a>

```python
smallest_flavor: str
```

- *Type:* str

Smallest instance flavor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#smallest_flavor Docker#smallest_flavor}

---

##### `app_folder`<sup>Optional</sup> <a name="app_folder" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.appFolder"></a>

```python
app_folder: str
```

- *Type:* str

Folder in which the application is located (inside the git repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#app_folder Docker#app_folder}

---

##### `build_flavor`<sup>Optional</sup> <a name="build_flavor" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.buildFlavor"></a>

```python
build_flavor: str
```

- *Type:* str

Use dedicated instance with given flavor for build phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#build_flavor Docker#build_flavor}

---

##### `container_port`<sup>Optional</sup> <a name="container_port" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set to custom HTTP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port Docker#container_port}

---

##### `container_port_tcp`<sup>Optional</sup> <a name="container_port_tcp" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.containerPortTcp"></a>

```python
container_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set to custom TCP port if your Docker container runs on custom port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#container_port_tcp Docker#container_port_tcp}

---

##### `daemon_socket_mount`<sup>Optional</sup> <a name="daemon_socket_mount" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.daemonSocketMount"></a>

```python
daemon_socket_mount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to access the host Docker socket from inside your container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#daemon_socket_mount Docker#daemon_socket_mount}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dependencies"></a>

```python
dependencies: typing.List[str]
```

- *Type:* typing.List[str]

A list of application or add-ons required to run this application. Can be either app_xxx or postgres_yyy ID format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dependencies Docker#dependencies}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.deployment"></a>

```python
deployment: DockerDeployment
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#deployment Docker#deployment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#description Docker#description}

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.dockerfile"></a>

```python
dockerfile: str
```

- *Type:* str

The name of the Dockerfile to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#dockerfile Docker#dockerfile}

---

##### `enable_ipv6`<sup>Optional</sup> <a name="enable_ipv6" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.enableIpv6"></a>

```python
enable_ipv6: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#enable_ipv6 Docker#enable_ipv6}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables injected into the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#environment Docker#environment}

---

##### `exposed_environment`<sup>Optional</sup> <a name="exposed_environment" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.exposedEnvironment"></a>

```python
exposed_environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables other linked applications will be able to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#exposed_environment Docker#exposed_environment}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.hooks"></a>

```python
hooks: DockerHooks
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a>

hooks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#hooks Docker#hooks}

---

##### `ipv6_cidr`<sup>Optional</sup> <a name="ipv6_cidr" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.ipv6Cidr"></a>

```python
ipv6_cidr: str
```

- *Type:* str

Activate the support of IPv6 with an IPv6 subnet int the docker daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#ipv6_cidr Docker#ipv6_cidr}

---

##### `networkgroups`<sup>Optional</sup> <a name="networkgroups" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.networkgroups"></a>

```python
networkgroups: IResolvable | typing.List[DockerNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]

List of networkgroups the application must be part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroups Docker#networkgroups}

---

##### `redirect_https`<sup>Optional</sup> <a name="redirect_https" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.redirectHttps"></a>

```python
redirect_https: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Redirect client from plain to TLS port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#redirect_https Docker#redirect_https}

---

##### `region`<sup>Optional</sup> <a name="region" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Geographical region where the database will be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#region Docker#region}

---

##### `registry_password`<sup>Optional</sup> <a name="registry_password" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryPassword"></a>

```python
registry_password: str
```

- *Type:* str

The password of your username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_password Docker#registry_password}

---

##### `registry_url`<sup>Optional</sup> <a name="registry_url" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUrl"></a>

```python
registry_url: str
```

- *Type:* str

The server of your private registry (optional).	Docker’s public registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_url Docker#registry_url}

---

##### `registry_user`<sup>Optional</sup> <a name="registry_user" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.registryUser"></a>

```python
registry_user: str
```

- *Type:* str

The username to login to a private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#registry_user Docker#registry_user}

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.stickySessions"></a>

```python
sticky_sessions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable sticky sessions, use it when your client sessions are instances scoped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#sticky_sessions Docker#sticky_sessions}

---

##### `vhosts`<sup>Optional</sup> <a name="vhosts" id="@clevercloud/cdktf-bindings.docker.DockerConfig.property.vhosts"></a>

```python
vhosts: IResolvable | typing.List[DockerVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]

List of virtual hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#vhosts Docker#vhosts}

---

### DockerDeployment <a name="DockerDeployment" id="@clevercloud/cdktf-bindings.docker.DockerDeployment"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerDeployment(
  authentication_basic: str = None,
  commit: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | user ans password ':' separated, (PersonalAccessToken in Github case). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.commit">commit</a></code> | <code>str</code> | Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment.property.repository">repository</a></code> | <code>str</code> | The repository URL to deploy, can be 'https://...', 'file://...'. |

---

##### `authentication_basic`<sup>Optional</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

user ans password ':' separated, (PersonalAccessToken in Github case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#authentication_basic Docker#authentication_basic}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.commit"></a>

```python
commit: str
```

- *Type:* str

Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#commit Docker#commit}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@clevercloud/cdktf-bindings.docker.DockerDeployment.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository URL to deploy, can be 'https://...', 'file://...'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#repository Docker#repository}

---

### DockerHooks <a name="DockerHooks" id="@clevercloud/cdktf-bindings.docker.DockerHooks"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerHooks.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerHooks(
  post_build: str = None,
  pre_build: str = None,
  pre_run: str = None,
  run_failed: str = None,
  run_succeed: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.postBuild">post_build</a></code> | <code>str</code> | [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.preBuild">pre_build</a></code> | <code>str</code> | [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.preRun">pre_run</a></code> | <code>str</code> | [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.runFailed">run_failed</a></code> | <code>str</code> | [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks.property.runSucceed">run_succeed</a></code> | <code>str</code> | [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail). |

---

##### `post_build`<sup>Optional</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

[CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#post_build Docker#post_build}

---

##### `pre_build`<sup>Optional</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

[CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_build Docker#pre_build}

---

##### `pre_run`<sup>Optional</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

[CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#pre_run Docker#pre_run}

---

##### `run_failed`<sup>Optional</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

[CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_failed Docker#run_failed}

---

##### `run_succeed`<sup>Optional</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.docker.DockerHooks.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

[CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#run_succeed Docker#run_succeed}

---

### DockerNetworkgroups <a name="DockerNetworkgroups" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerNetworkgroups(
  fqdn: str,
  networkgroup_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.fqdn">fqdn</a></code> | <code>str</code> | domain name which will resolve to application instances inside the networkgroup. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | ID of the networkgroup. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

domain name which will resolve to application instances inside the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#fqdn Docker#fqdn}

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroups.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

ID of the networkgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#networkgroup_id Docker#networkgroup_id}

---

### DockerVhosts <a name="DockerVhosts" id="@clevercloud/cdktf-bindings.docker.DockerVhosts"></a>

#### Initializer <a name="Initializer" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerVhosts(
  fqdn: str,
  path_begin: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts.property.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts.property.pathBegin">path_begin</a></code> | <code>str</code> | Any HTTP request starting with this path will be sent to this application. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Fully qualified domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#fqdn Docker#fqdn}

---

##### `path_begin`<sup>Optional</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.docker.DockerVhosts.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

Any HTTP request starting with this path will be sent to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/docker#path_begin Docker#path_begin}

---

## Classes <a name="Classes" id="Classes"></a>

### DockerDeploymentOutputReference <a name="DockerDeploymentOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetAuthenticationBasic">reset_authentication_basic</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_basic` <a name="reset_authentication_basic" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetAuthenticationBasic"></a>

```python
def reset_authentication_basic() -> None
```

##### `reset_commit` <a name="reset_commit" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_repository` <a name="reset_repository" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasicInput">authentication_basic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasic">authentication_basic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_basic_input`<sup>Optional</sup> <a name="authentication_basic_input" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasicInput"></a>

```python
authentication_basic_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `authentication_basic`<sup>Required</sup> <a name="authentication_basic" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.authenticationBasic"></a>

```python
authentication_basic: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.docker.DockerDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DockerDeployment | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerDeployment">DockerDeployment</a> | cdktf.IResolvable

---


### DockerHooksOutputReference <a name="DockerHooksOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPostBuild">reset_post_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreBuild">reset_pre_build</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreRun">reset_pre_run</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunFailed">reset_run_failed</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunSucceed">reset_run_succeed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_post_build` <a name="reset_post_build" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPostBuild"></a>

```python
def reset_post_build() -> None
```

##### `reset_pre_build` <a name="reset_pre_build" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreBuild"></a>

```python
def reset_pre_build() -> None
```

##### `reset_pre_run` <a name="reset_pre_run" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetPreRun"></a>

```python
def reset_pre_run() -> None
```

##### `reset_run_failed` <a name="reset_run_failed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunFailed"></a>

```python
def reset_run_failed() -> None
```

##### `reset_run_succeed` <a name="reset_run_succeed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.resetRunSucceed"></a>

```python
def reset_run_succeed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuildInput">post_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuildInput">pre_build_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRunInput">pre_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailedInput">run_failed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceedInput">run_succeed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuild">post_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuild">pre_build</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRun">pre_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailed">run_failed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceed">run_succeed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_build_input`<sup>Optional</sup> <a name="post_build_input" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuildInput"></a>

```python
post_build_input: str
```

- *Type:* str

---

##### `pre_build_input`<sup>Optional</sup> <a name="pre_build_input" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuildInput"></a>

```python
pre_build_input: str
```

- *Type:* str

---

##### `pre_run_input`<sup>Optional</sup> <a name="pre_run_input" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRunInput"></a>

```python
pre_run_input: str
```

- *Type:* str

---

##### `run_failed_input`<sup>Optional</sup> <a name="run_failed_input" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailedInput"></a>

```python
run_failed_input: str
```

- *Type:* str

---

##### `run_succeed_input`<sup>Optional</sup> <a name="run_succeed_input" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceedInput"></a>

```python
run_succeed_input: str
```

- *Type:* str

---

##### `post_build`<sup>Required</sup> <a name="post_build" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.postBuild"></a>

```python
post_build: str
```

- *Type:* str

---

##### `pre_build`<sup>Required</sup> <a name="pre_build" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preBuild"></a>

```python
pre_build: str
```

- *Type:* str

---

##### `pre_run`<sup>Required</sup> <a name="pre_run" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.preRun"></a>

```python
pre_run: str
```

- *Type:* str

---

##### `run_failed`<sup>Required</sup> <a name="run_failed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runFailed"></a>

```python
run_failed: str
```

- *Type:* str

---

##### `run_succeed`<sup>Required</sup> <a name="run_succeed" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.runSucceed"></a>

```python
run_succeed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.docker.DockerHooksOutputReference.property.internalValue"></a>

```python
internal_value: DockerHooks | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerHooks">DockerHooks</a> | cdktf.IResolvable

---


### DockerNetworkgroupsList <a name="DockerNetworkgroupsList" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerNetworkgroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DockerNetworkgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DockerNetworkgroups]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a>]

---


### DockerNetworkgroupsOutputReference <a name="DockerNetworkgroupsOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerNetworkgroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupIdInput">networkgroup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupId">networkgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `networkgroup_id_input`<sup>Optional</sup> <a name="networkgroup_id_input" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupIdInput"></a>

```python
networkgroup_id_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `networkgroup_id`<sup>Required</sup> <a name="networkgroup_id" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.networkgroupId"></a>

```python
networkgroup_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.docker.DockerNetworkgroupsOutputReference.property.internalValue"></a>

```python
internal_value: DockerNetworkgroups | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerNetworkgroups">DockerNetworkgroups</a> | cdktf.IResolvable

---


### DockerVhostsList <a name="DockerVhostsList" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerVhostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DockerVhostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.docker.DockerVhostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DockerVhosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a>]

---


### DockerVhostsOutputReference <a name="DockerVhostsOutputReference" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer"></a>

```python
from clevercloud_cdktf_provider_clevercloud import docker

docker.DockerVhostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resetPathBegin">reset_path_begin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path_begin` <a name="reset_path_begin" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.resetPathBegin"></a>

```python
def reset_path_begin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBeginInput">path_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBegin">path_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `path_begin_input`<sup>Optional</sup> <a name="path_begin_input" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBeginInput"></a>

```python
path_begin_input: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `path_begin`<sup>Required</sup> <a name="path_begin" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.pathBegin"></a>

```python
path_begin: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@clevercloud/cdktf-bindings.docker.DockerVhostsOutputReference.property.internalValue"></a>

```python
internal_value: DockerVhosts | IResolvable
```

- *Type:* <a href="#@clevercloud/cdktf-bindings.docker.DockerVhosts">DockerVhosts</a> | cdktf.IResolvable

---



