// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RubyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Folder in which the application is located (inside the git repository)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#app_folder Ruby#app_folder}
  */
  readonly appFolder?: string;
  /**
  * Biggest instance flavor, if different from smallest, enable auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#biggest_flavor Ruby#biggest_flavor}
  */
  readonly biggestFlavor: string;
  /**
  * Use dedicated instance with given flavor for build phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#build_flavor Ruby#build_flavor}
  */
  readonly buildFlavor?: string;
  /**
  * A list of application or add-ons required to run this application.
  * Can be either app_xxx or postgres_yyy ID format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#dependencies Ruby#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * Application description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#description Ruby#description}
  */
  readonly description?: string;
  /**
  * Set to true to gzip-compress through Nginx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_gzip_compression Ruby#enable_gzip_compression}
  */
  readonly enableGzipCompression?: boolean | cdktf.IResolvable;
  /**
  * Enable Sidekiq background process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#enable_sidekiq Ruby#enable_sidekiq}
  */
  readonly enableSidekiq?: boolean | cdktf.IResolvable;
  /**
  * Environment variables injected into the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#environment Ruby#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Environment variables other linked applications will be able to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#exposed_environment Ruby#exposed_environment}
  */
  readonly exposedEnvironment?: { [key: string]: string };
  /**
  * Set the mime types to compress (default: 'text/* application/json application/xml application/javascript image/svg+xml')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#gzip_types Ruby#gzip_types}
  */
  readonly gzipTypes?: string;
  /**
  * Restrict HTTP access to your application (format: 'login:password')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#http_basic_auth Ruby#http_basic_auth}
  */
  readonly httpBasicAuth?: string;
  /**
  * Maximum instance count, if different from min value, enable auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#max_instance_count Ruby#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#min_instance_count Ruby#min_instance_count}
  */
  readonly minInstanceCount: number;
  /**
  * Application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#name Ruby#name}
  */
  readonly name: string;
  /**
  * List of networkgroups the application must be part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroups Ruby#networkgroups}
  */
  readonly networkgroups?: RubyNetworkgroups[] | cdktf.IResolvable;
  /**
  * Sets the size of the buffer used for reading the first part of the response received from the proxied server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffer_size Ruby#nginx_proxy_buffer_size}
  */
  readonly nginxProxyBufferSize?: string;
  /**
  * Sets the number and size of the buffers used for reading a response from the proxied server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_proxy_buffers Ruby#nginx_proxy_buffers}
  */
  readonly nginxProxyBuffers?: string;
  /**
  * Read timeout in seconds (default: 300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#nginx_read_timeout Ruby#nginx_read_timeout}
  */
  readonly nginxReadTimeout?: number;
  /**
  * Rack environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rack_env Ruby#rack_env}
  */
  readonly rackEnv?: string;
  /**
  * Server to use for serving the Ruby application (default: puma)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rackup_server Ruby#rackup_server}
  */
  readonly rackupServer?: string;
  /**
  * Rails environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rails_env Ruby#rails_env}
  */
  readonly railsEnv?: string;
  /**
  * Comma-separated list of rake goals to execute (e.g., 'db:migrate,assets:precompile')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#rake_goals Ruby#rake_goals}
  */
  readonly rakeGoals?: string;
  /**
  * Redirect client from plain to TLS port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#redirect_https Ruby#redirect_https}
  */
  readonly redirectHttps?: boolean | cdktf.IResolvable;
  /**
  * Geographical region where the database will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#region Ruby#region}
  */
  readonly region?: string;
  /**
  * Ruby version to use (e.g., '3.3', '3.3.1')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#ruby_version Ruby#ruby_version}
  */
  readonly rubyVersion?: string;
  /**
  * Specify a list of Sidekiq configuration files (e.g., './config/sidekiq_1.yml,./config/sidekiq_2.yml')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sidekiq_files Ruby#sidekiq_files}
  */
  readonly sidekiqFiles?: string;
  /**
  * Smallest instance flavor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#smallest_flavor Ruby#smallest_flavor}
  */
  readonly smallestFlavor: string;
  /**
  * Relative path to where your static files are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_files_path Ruby#static_files_path}
  */
  readonly staticFilesPath?: string;
  /**
  * The URL path under which you want to serve static files, usually /public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_url_prefix Ruby#static_url_prefix}
  */
  readonly staticUrlPrefix?: string;
  /**
  * Path to the web content to serve, relative to the root of your application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#static_webroot Ruby#static_webroot}
  */
  readonly staticWebroot?: string;
  /**
  * Enable sticky sessions, use it when your client sessions are instances scoped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#sticky_sessions Ruby#sticky_sessions}
  */
  readonly stickySessions?: boolean | cdktf.IResolvable;
  /**
  * List of virtual hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#vhosts Ruby#vhosts}
  */
  readonly vhosts?: RubyVhosts[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#deployment Ruby#deployment}
  */
  readonly deployment?: RubyDeployment;
  /**
  * hooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#hooks Ruby#hooks}
  */
  readonly hooks?: RubyHooks;
}
export interface RubyNetworkgroups {
  /**
  * domain name which will resolve to application instances inside the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}
  */
  readonly fqdn: string;
  /**
  * ID of the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#networkgroup_id Ruby#networkgroup_id}
  */
  readonly networkgroupId: string;
}

export function rubyNetworkgroupsToTerraform(struct?: RubyNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    networkgroup_id: cdktf.stringToTerraform(struct!.networkgroupId),
  }
}


export function rubyNetworkgroupsToHclTerraform(struct?: RubyNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkgroup_id: {
      value: cdktf.stringToHclTerraform(struct!.networkgroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RubyNetworkgroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RubyNetworkgroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._networkgroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkgroupId = this._networkgroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RubyNetworkgroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._networkgroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._networkgroupId = value.networkgroupId;
    }
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // networkgroup_id - computed: false, optional: false, required: true
  private _networkgroupId?: string; 
  public get networkgroupId() {
    return this.getStringAttribute('networkgroup_id');
  }
  public set networkgroupId(value: string) {
    this._networkgroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupIdInput() {
    return this._networkgroupId;
  }
}

export class RubyNetworkgroupsList extends cdktf.ComplexList {
  public internalValue? : RubyNetworkgroups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RubyNetworkgroupsOutputReference {
    return new RubyNetworkgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RubyVhosts {
  /**
  * Fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#fqdn Ruby#fqdn}
  */
  readonly fqdn: string;
  /**
  * Any HTTP request starting with this path will be sent to this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#path_begin Ruby#path_begin}
  */
  readonly pathBegin?: string;
}

export function rubyVhostsToTerraform(struct?: RubyVhosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    path_begin: cdktf.stringToTerraform(struct!.pathBegin),
  }
}


export function rubyVhostsToHclTerraform(struct?: RubyVhosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_begin: {
      value: cdktf.stringToHclTerraform(struct!.pathBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RubyVhostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RubyVhosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._pathBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathBegin = this._pathBegin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RubyVhosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._pathBegin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._pathBegin = value.pathBegin;
    }
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // path_begin - computed: true, optional: true, required: false
  private _pathBegin?: string; 
  public get pathBegin() {
    return this.getStringAttribute('path_begin');
  }
  public set pathBegin(value: string) {
    this._pathBegin = value;
  }
  public resetPathBegin() {
    this._pathBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathBeginInput() {
    return this._pathBegin;
  }
}

export class RubyVhostsList extends cdktf.ComplexList {
  public internalValue? : RubyVhosts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RubyVhostsOutputReference {
    return new RubyVhostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RubyDeployment {
  /**
  * user ans password ':' separated, (PersonalAccessToken in Github case)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#authentication_basic Ruby#authentication_basic}
  */
  readonly authenticationBasic?: string;
  /**
  * Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#commit Ruby#commit}
  */
  readonly commit?: string;
  /**
  * The repository URL to deploy, can be 'https://...', 'file://...'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#repository Ruby#repository}
  */
  readonly repository?: string;
}

export function rubyDeploymentToTerraform(struct?: RubyDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_basic: cdktf.stringToTerraform(struct!.authenticationBasic),
    commit: cdktf.stringToTerraform(struct!.commit),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function rubyDeploymentToHclTerraform(struct?: RubyDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_basic: {
      value: cdktf.stringToHclTerraform(struct!.authenticationBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RubyDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RubyDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationBasic = this._authenticationBasic;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RubyDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationBasic = undefined;
      this._commit = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationBasic = value.authenticationBasic;
      this._commit = value.commit;
      this._repository = value.repository;
    }
  }

  // authentication_basic - computed: false, optional: true, required: false
  private _authenticationBasic?: string; 
  public get authenticationBasic() {
    return this.getStringAttribute('authentication_basic');
  }
  public set authenticationBasic(value: string) {
    this._authenticationBasic = value;
  }
  public resetAuthenticationBasic() {
    this._authenticationBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicInput() {
    return this._authenticationBasic;
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface RubyHooks {
  /**
  * [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#post_build Ruby#post_build}
  */
  readonly postBuild?: string;
  /**
  * [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_build Ruby#pre_build}
  */
  readonly preBuild?: string;
  /**
  * [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#pre_run Ruby#pre_run}
  */
  readonly preRun?: string;
  /**
  * [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_failed Ruby#run_failed}
  */
  readonly runFailed?: string;
  /**
  * [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#run_succeed Ruby#run_succeed}
  */
  readonly runSucceed?: string;
}

export function rubyHooksToTerraform(struct?: RubyHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_build: cdktf.stringToTerraform(struct!.postBuild),
    pre_build: cdktf.stringToTerraform(struct!.preBuild),
    pre_run: cdktf.stringToTerraform(struct!.preRun),
    run_failed: cdktf.stringToTerraform(struct!.runFailed),
    run_succeed: cdktf.stringToTerraform(struct!.runSucceed),
  }
}


export function rubyHooksToHclTerraform(struct?: RubyHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_build: {
      value: cdktf.stringToHclTerraform(struct!.postBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_build: {
      value: cdktf.stringToHclTerraform(struct!.preBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_run: {
      value: cdktf.stringToHclTerraform(struct!.preRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_failed: {
      value: cdktf.stringToHclTerraform(struct!.runFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_succeed: {
      value: cdktf.stringToHclTerraform(struct!.runSucceed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RubyHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RubyHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBuild = this._postBuild;
    }
    if (this._preBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.preBuild = this._preBuild;
    }
    if (this._preRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.preRun = this._preRun;
    }
    if (this._runFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.runFailed = this._runFailed;
    }
    if (this._runSucceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.runSucceed = this._runSucceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RubyHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postBuild = undefined;
      this._preBuild = undefined;
      this._preRun = undefined;
      this._runFailed = undefined;
      this._runSucceed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postBuild = value.postBuild;
      this._preBuild = value.preBuild;
      this._preRun = value.preRun;
      this._runFailed = value.runFailed;
      this._runSucceed = value.runSucceed;
    }
  }

  // post_build - computed: false, optional: true, required: false
  private _postBuild?: string; 
  public get postBuild() {
    return this.getStringAttribute('post_build');
  }
  public set postBuild(value: string) {
    this._postBuild = value;
  }
  public resetPostBuild() {
    this._postBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBuildInput() {
    return this._postBuild;
  }

  // pre_build - computed: false, optional: true, required: false
  private _preBuild?: string; 
  public get preBuild() {
    return this.getStringAttribute('pre_build');
  }
  public set preBuild(value: string) {
    this._preBuild = value;
  }
  public resetPreBuild() {
    this._preBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBuildInput() {
    return this._preBuild;
  }

  // pre_run - computed: false, optional: true, required: false
  private _preRun?: string; 
  public get preRun() {
    return this.getStringAttribute('pre_run');
  }
  public set preRun(value: string) {
    this._preRun = value;
  }
  public resetPreRun() {
    this._preRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preRunInput() {
    return this._preRun;
  }

  // run_failed - computed: false, optional: true, required: false
  private _runFailed?: string; 
  public get runFailed() {
    return this.getStringAttribute('run_failed');
  }
  public set runFailed(value: string) {
    this._runFailed = value;
  }
  public resetRunFailed() {
    this._runFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runFailedInput() {
    return this._runFailed;
  }

  // run_succeed - computed: false, optional: true, required: false
  private _runSucceed?: string; 
  public get runSucceed() {
    return this.getStringAttribute('run_succeed');
  }
  public set runSucceed(value: string) {
    this._runSucceed = value;
  }
  public resetRunSucceed() {
    this._runSucceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSucceedInput() {
    return this._runSucceed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby clevercloud_ruby}
*/
export class Ruby extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_ruby";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ruby resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ruby to import
  * @param importFromId The id of the existing Ruby that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ruby to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_ruby", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/ruby clevercloud_ruby} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RubyConfig
  */
  public constructor(scope: Construct, id: string, config: RubyConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_ruby',
      terraformGeneratorMetadata: {
        providerName: 'clevercloud',
        providerVersion: '1.7.1',
        providerVersionConstraint: '~> 1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appFolder = config.appFolder;
    this._biggestFlavor = config.biggestFlavor;
    this._buildFlavor = config.buildFlavor;
    this._dependencies = config.dependencies;
    this._description = config.description;
    this._enableGzipCompression = config.enableGzipCompression;
    this._enableSidekiq = config.enableSidekiq;
    this._environment = config.environment;
    this._exposedEnvironment = config.exposedEnvironment;
    this._gzipTypes = config.gzipTypes;
    this._httpBasicAuth = config.httpBasicAuth;
    this._maxInstanceCount = config.maxInstanceCount;
    this._minInstanceCount = config.minInstanceCount;
    this._name = config.name;
    this._networkgroups.internalValue = config.networkgroups;
    this._nginxProxyBufferSize = config.nginxProxyBufferSize;
    this._nginxProxyBuffers = config.nginxProxyBuffers;
    this._nginxReadTimeout = config.nginxReadTimeout;
    this._rackEnv = config.rackEnv;
    this._rackupServer = config.rackupServer;
    this._railsEnv = config.railsEnv;
    this._rakeGoals = config.rakeGoals;
    this._redirectHttps = config.redirectHttps;
    this._region = config.region;
    this._rubyVersion = config.rubyVersion;
    this._sidekiqFiles = config.sidekiqFiles;
    this._smallestFlavor = config.smallestFlavor;
    this._staticFilesPath = config.staticFilesPath;
    this._staticUrlPrefix = config.staticUrlPrefix;
    this._staticWebroot = config.staticWebroot;
    this._stickySessions = config.stickySessions;
    this._vhosts.internalValue = config.vhosts;
    this._deployment.internalValue = config.deployment;
    this._hooks.internalValue = config.hooks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_folder - computed: false, optional: true, required: false
  private _appFolder?: string; 
  public get appFolder() {
    return this.getStringAttribute('app_folder');
  }
  public set appFolder(value: string) {
    this._appFolder = value;
  }
  public resetAppFolder() {
    this._appFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFolderInput() {
    return this._appFolder;
  }

  // biggest_flavor - computed: false, optional: false, required: true
  private _biggestFlavor?: string; 
  public get biggestFlavor() {
    return this.getStringAttribute('biggest_flavor');
  }
  public set biggestFlavor(value: string) {
    this._biggestFlavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get biggestFlavorInput() {
    return this._biggestFlavor;
  }

  // build_flavor - computed: false, optional: true, required: false
  private _buildFlavor?: string; 
  public get buildFlavor() {
    return this.getStringAttribute('build_flavor');
  }
  public set buildFlavor(value: string) {
    this._buildFlavor = value;
  }
  public resetBuildFlavor() {
    this._buildFlavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFlavorInput() {
    return this._buildFlavor;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: string[]; 
  public get dependencies() {
    return cdktf.Fn.tolist(this.getListAttribute('dependencies'));
  }
  public set dependencies(value: string[]) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // deploy_url - computed: true, optional: false, required: false
  public get deployUrl() {
    return this.getStringAttribute('deploy_url');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_gzip_compression - computed: false, optional: true, required: false
  private _enableGzipCompression?: boolean | cdktf.IResolvable; 
  public get enableGzipCompression() {
    return this.getBooleanAttribute('enable_gzip_compression');
  }
  public set enableGzipCompression(value: boolean | cdktf.IResolvable) {
    this._enableGzipCompression = value;
  }
  public resetEnableGzipCompression() {
    this._enableGzipCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGzipCompressionInput() {
    return this._enableGzipCompression;
  }

  // enable_sidekiq - computed: false, optional: true, required: false
  private _enableSidekiq?: boolean | cdktf.IResolvable; 
  public get enableSidekiq() {
    return this.getBooleanAttribute('enable_sidekiq');
  }
  public set enableSidekiq(value: boolean | cdktf.IResolvable) {
    this._enableSidekiq = value;
  }
  public resetEnableSidekiq() {
    this._enableSidekiq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSidekiqInput() {
    return this._enableSidekiq;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // exposed_environment - computed: false, optional: true, required: false
  private _exposedEnvironment?: { [key: string]: string }; 
  public get exposedEnvironment() {
    return this.getStringMapAttribute('exposed_environment');
  }
  public set exposedEnvironment(value: { [key: string]: string }) {
    this._exposedEnvironment = value;
  }
  public resetExposedEnvironment() {
    this._exposedEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedEnvironmentInput() {
    return this._exposedEnvironment;
  }

  // gzip_types - computed: false, optional: true, required: false
  private _gzipTypes?: string; 
  public get gzipTypes() {
    return this.getStringAttribute('gzip_types');
  }
  public set gzipTypes(value: string) {
    this._gzipTypes = value;
  }
  public resetGzipTypes() {
    this._gzipTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipTypesInput() {
    return this._gzipTypes;
  }

  // http_basic_auth - computed: false, optional: true, required: false
  private _httpBasicAuth?: string; 
  public get httpBasicAuth() {
    return this.getStringAttribute('http_basic_auth');
  }
  public set httpBasicAuth(value: string) {
    this._httpBasicAuth = value;
  }
  public resetHttpBasicAuth() {
    this._httpBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicAuthInput() {
    return this._httpBasicAuth;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_instance_count - computed: false, optional: false, required: true
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: false, required: true
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // networkgroups - computed: false, optional: true, required: false
  private _networkgroups = new RubyNetworkgroupsList(this, "networkgroups", true);
  public get networkgroups() {
    return this._networkgroups;
  }
  public putNetworkgroups(value: RubyNetworkgroups[] | cdktf.IResolvable) {
    this._networkgroups.internalValue = value;
  }
  public resetNetworkgroups() {
    this._networkgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupsInput() {
    return this._networkgroups.internalValue;
  }

  // nginx_proxy_buffer_size - computed: false, optional: true, required: false
  private _nginxProxyBufferSize?: string; 
  public get nginxProxyBufferSize() {
    return this.getStringAttribute('nginx_proxy_buffer_size');
  }
  public set nginxProxyBufferSize(value: string) {
    this._nginxProxyBufferSize = value;
  }
  public resetNginxProxyBufferSize() {
    this._nginxProxyBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxProxyBufferSizeInput() {
    return this._nginxProxyBufferSize;
  }

  // nginx_proxy_buffers - computed: false, optional: true, required: false
  private _nginxProxyBuffers?: string; 
  public get nginxProxyBuffers() {
    return this.getStringAttribute('nginx_proxy_buffers');
  }
  public set nginxProxyBuffers(value: string) {
    this._nginxProxyBuffers = value;
  }
  public resetNginxProxyBuffers() {
    this._nginxProxyBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxProxyBuffersInput() {
    return this._nginxProxyBuffers;
  }

  // nginx_read_timeout - computed: false, optional: true, required: false
  private _nginxReadTimeout?: number; 
  public get nginxReadTimeout() {
    return this.getNumberAttribute('nginx_read_timeout');
  }
  public set nginxReadTimeout(value: number) {
    this._nginxReadTimeout = value;
  }
  public resetNginxReadTimeout() {
    this._nginxReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxReadTimeoutInput() {
    return this._nginxReadTimeout;
  }

  // rack_env - computed: false, optional: true, required: false
  private _rackEnv?: string; 
  public get rackEnv() {
    return this.getStringAttribute('rack_env');
  }
  public set rackEnv(value: string) {
    this._rackEnv = value;
  }
  public resetRackEnv() {
    this._rackEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackEnvInput() {
    return this._rackEnv;
  }

  // rackup_server - computed: false, optional: true, required: false
  private _rackupServer?: string; 
  public get rackupServer() {
    return this.getStringAttribute('rackup_server');
  }
  public set rackupServer(value: string) {
    this._rackupServer = value;
  }
  public resetRackupServer() {
    this._rackupServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackupServerInput() {
    return this._rackupServer;
  }

  // rails_env - computed: false, optional: true, required: false
  private _railsEnv?: string; 
  public get railsEnv() {
    return this.getStringAttribute('rails_env');
  }
  public set railsEnv(value: string) {
    this._railsEnv = value;
  }
  public resetRailsEnv() {
    this._railsEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get railsEnvInput() {
    return this._railsEnv;
  }

  // rake_goals - computed: false, optional: true, required: false
  private _rakeGoals?: string; 
  public get rakeGoals() {
    return this.getStringAttribute('rake_goals');
  }
  public set rakeGoals(value: string) {
    this._rakeGoals = value;
  }
  public resetRakeGoals() {
    this._rakeGoals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rakeGoalsInput() {
    return this._rakeGoals;
  }

  // redirect_https - computed: true, optional: true, required: false
  private _redirectHttps?: boolean | cdktf.IResolvable; 
  public get redirectHttps() {
    return this.getBooleanAttribute('redirect_https');
  }
  public set redirectHttps(value: boolean | cdktf.IResolvable) {
    this._redirectHttps = value;
  }
  public resetRedirectHttps() {
    this._redirectHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpsInput() {
    return this._redirectHttps;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ruby_version - computed: false, optional: true, required: false
  private _rubyVersion?: string; 
  public get rubyVersion() {
    return this.getStringAttribute('ruby_version');
  }
  public set rubyVersion(value: string) {
    this._rubyVersion = value;
  }
  public resetRubyVersion() {
    this._rubyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubyVersionInput() {
    return this._rubyVersion;
  }

  // sidekiq_files - computed: false, optional: true, required: false
  private _sidekiqFiles?: string; 
  public get sidekiqFiles() {
    return this.getStringAttribute('sidekiq_files');
  }
  public set sidekiqFiles(value: string) {
    this._sidekiqFiles = value;
  }
  public resetSidekiqFiles() {
    this._sidekiqFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidekiqFilesInput() {
    return this._sidekiqFiles;
  }

  // smallest_flavor - computed: false, optional: false, required: true
  private _smallestFlavor?: string; 
  public get smallestFlavor() {
    return this.getStringAttribute('smallest_flavor');
  }
  public set smallestFlavor(value: string) {
    this._smallestFlavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smallestFlavorInput() {
    return this._smallestFlavor;
  }

  // static_files_path - computed: false, optional: true, required: false
  private _staticFilesPath?: string; 
  public get staticFilesPath() {
    return this.getStringAttribute('static_files_path');
  }
  public set staticFilesPath(value: string) {
    this._staticFilesPath = value;
  }
  public resetStaticFilesPath() {
    this._staticFilesPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFilesPathInput() {
    return this._staticFilesPath;
  }

  // static_url_prefix - computed: false, optional: true, required: false
  private _staticUrlPrefix?: string; 
  public get staticUrlPrefix() {
    return this.getStringAttribute('static_url_prefix');
  }
  public set staticUrlPrefix(value: string) {
    this._staticUrlPrefix = value;
  }
  public resetStaticUrlPrefix() {
    this._staticUrlPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUrlPrefixInput() {
    return this._staticUrlPrefix;
  }

  // static_webroot - computed: false, optional: true, required: false
  private _staticWebroot?: string; 
  public get staticWebroot() {
    return this.getStringAttribute('static_webroot');
  }
  public set staticWebroot(value: string) {
    this._staticWebroot = value;
  }
  public resetStaticWebroot() {
    this._staticWebroot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticWebrootInput() {
    return this._staticWebroot;
  }

  // sticky_sessions - computed: true, optional: true, required: false
  private _stickySessions?: boolean | cdktf.IResolvable; 
  public get stickySessions() {
    return this.getBooleanAttribute('sticky_sessions');
  }
  public set stickySessions(value: boolean | cdktf.IResolvable) {
    this._stickySessions = value;
  }
  public resetStickySessions() {
    this._stickySessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionsInput() {
    return this._stickySessions;
  }

  // vhosts - computed: true, optional: true, required: false
  private _vhosts = new RubyVhostsList(this, "vhosts", true);
  public get vhosts() {
    return this._vhosts;
  }
  public putVhosts(value: RubyVhosts[] | cdktf.IResolvable) {
    this._vhosts.internalValue = value;
  }
  public resetVhosts() {
    this._vhosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostsInput() {
    return this._vhosts.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new RubyDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: RubyDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new RubyHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: RubyHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_folder: cdktf.stringToTerraform(this._appFolder),
      biggest_flavor: cdktf.stringToTerraform(this._biggestFlavor),
      build_flavor: cdktf.stringToTerraform(this._buildFlavor),
      dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencies),
      description: cdktf.stringToTerraform(this._description),
      enable_gzip_compression: cdktf.booleanToTerraform(this._enableGzipCompression),
      enable_sidekiq: cdktf.booleanToTerraform(this._enableSidekiq),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      exposed_environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._exposedEnvironment),
      gzip_types: cdktf.stringToTerraform(this._gzipTypes),
      http_basic_auth: cdktf.stringToTerraform(this._httpBasicAuth),
      max_instance_count: cdktf.numberToTerraform(this._maxInstanceCount),
      min_instance_count: cdktf.numberToTerraform(this._minInstanceCount),
      name: cdktf.stringToTerraform(this._name),
      networkgroups: cdktf.listMapper(rubyNetworkgroupsToTerraform, false)(this._networkgroups.internalValue),
      nginx_proxy_buffer_size: cdktf.stringToTerraform(this._nginxProxyBufferSize),
      nginx_proxy_buffers: cdktf.stringToTerraform(this._nginxProxyBuffers),
      nginx_read_timeout: cdktf.numberToTerraform(this._nginxReadTimeout),
      rack_env: cdktf.stringToTerraform(this._rackEnv),
      rackup_server: cdktf.stringToTerraform(this._rackupServer),
      rails_env: cdktf.stringToTerraform(this._railsEnv),
      rake_goals: cdktf.stringToTerraform(this._rakeGoals),
      redirect_https: cdktf.booleanToTerraform(this._redirectHttps),
      region: cdktf.stringToTerraform(this._region),
      ruby_version: cdktf.stringToTerraform(this._rubyVersion),
      sidekiq_files: cdktf.stringToTerraform(this._sidekiqFiles),
      smallest_flavor: cdktf.stringToTerraform(this._smallestFlavor),
      static_files_path: cdktf.stringToTerraform(this._staticFilesPath),
      static_url_prefix: cdktf.stringToTerraform(this._staticUrlPrefix),
      static_webroot: cdktf.stringToTerraform(this._staticWebroot),
      sticky_sessions: cdktf.booleanToTerraform(this._stickySessions),
      vhosts: cdktf.listMapper(rubyVhostsToTerraform, false)(this._vhosts.internalValue),
      deployment: rubyDeploymentToTerraform(this._deployment.internalValue),
      hooks: rubyHooksToTerraform(this._hooks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_folder: {
        value: cdktf.stringToHclTerraform(this._appFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biggest_flavor: {
        value: cdktf.stringToHclTerraform(this._biggestFlavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_flavor: {
        value: cdktf.stringToHclTerraform(this._buildFlavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependencies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_gzip_compression: {
        value: cdktf.booleanToHclTerraform(this._enableGzipCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sidekiq: {
        value: cdktf.booleanToHclTerraform(this._enableSidekiq),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      exposed_environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._exposedEnvironment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gzip_types: {
        value: cdktf.stringToHclTerraform(this._gzipTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_basic_auth: {
        value: cdktf.stringToHclTerraform(this._httpBasicAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instance_count: {
        value: cdktf.numberToHclTerraform(this._maxInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instance_count: {
        value: cdktf.numberToHclTerraform(this._minInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networkgroups: {
        value: cdktf.listMapperHcl(rubyNetworkgroupsToHclTerraform, false)(this._networkgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RubyNetworkgroupsList",
      },
      nginx_proxy_buffer_size: {
        value: cdktf.stringToHclTerraform(this._nginxProxyBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nginx_proxy_buffers: {
        value: cdktf.stringToHclTerraform(this._nginxProxyBuffers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nginx_read_timeout: {
        value: cdktf.numberToHclTerraform(this._nginxReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rack_env: {
        value: cdktf.stringToHclTerraform(this._rackEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rackup_server: {
        value: cdktf.stringToHclTerraform(this._rackupServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rails_env: {
        value: cdktf.stringToHclTerraform(this._railsEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rake_goals: {
        value: cdktf.stringToHclTerraform(this._rakeGoals),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_https: {
        value: cdktf.booleanToHclTerraform(this._redirectHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ruby_version: {
        value: cdktf.stringToHclTerraform(this._rubyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sidekiq_files: {
        value: cdktf.stringToHclTerraform(this._sidekiqFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smallest_flavor: {
        value: cdktf.stringToHclTerraform(this._smallestFlavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_files_path: {
        value: cdktf.stringToHclTerraform(this._staticFilesPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_url_prefix: {
        value: cdktf.stringToHclTerraform(this._staticUrlPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_webroot: {
        value: cdktf.stringToHclTerraform(this._staticWebroot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_sessions: {
        value: cdktf.booleanToHclTerraform(this._stickySessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vhosts: {
        value: cdktf.listMapperHcl(rubyVhostsToHclTerraform, false)(this._vhosts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RubyVhostsList",
      },
      deployment: {
        value: rubyDeploymentToHclTerraform(this._deployment.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RubyDeployment",
      },
      hooks: {
        value: rubyHooksToHclTerraform(this._hooks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RubyHooks",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
