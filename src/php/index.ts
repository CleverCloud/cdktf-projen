// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PhpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Folder in which the application is located (inside the git repository)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#app_folder Php#app_folder}
  */
  readonly appFolder?: string;
  /**
  * Biggest instance flavor, if different from smallest, enable auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#biggest_flavor Php#biggest_flavor}
  */
  readonly biggestFlavor: string;
  /**
  * Use dedicated instance with given flavor for build phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#build_flavor Php#build_flavor}
  */
  readonly buildFlavor?: string;
  /**
  * A list of application or add-ons required to run this application.
  * Can be either app_xxx or postgres_yyy ID format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#dependencies Php#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * Application description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#description Php#description}
  */
  readonly description?: string;
  /**
  * Install development dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#dev_dependencies Php#dev_dependencies}
  */
  readonly devDependencies?: boolean | cdktf.IResolvable;
  /**
  * Environment variables injected into the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#environment Php#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Environment variables other linked applications will be able to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#exposed_environment Php#exposed_environment}
  */
  readonly exposedEnvironment?: { [key: string]: string };
  /**
  * Maximum instance count, if different from min value, enable auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#max_instance_count Php#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#min_instance_count Php#min_instance_count}
  */
  readonly minInstanceCount: number;
  /**
  * Application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#name Php#name}
  */
  readonly name: string;
  /**
  * List of networkgroups the application must be part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#networkgroups Php#networkgroups}
  */
  readonly networkgroups?: PhpNetworkgroups[] | cdktf.IResolvable;
  /**
  * PHP version (Default: 8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#php_version Php#php_version}
  */
  readonly phpVersion?: string;
  /**
  * Redirect client from plain to TLS port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#redirect_https Php#redirect_https}
  */
  readonly redirectHttps?: boolean | cdktf.IResolvable;
  /**
  * Use a linked Redis instance to store sessions (Default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#redis_sessions Php#redis_sessions}
  */
  readonly redisSessions?: boolean | cdktf.IResolvable;
  /**
  * Geographical region where the database will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#region Php#region}
  */
  readonly region?: string;
  /**
  * Smallest instance flavor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#smallest_flavor Php#smallest_flavor}
  */
  readonly smallestFlavor: string;
  /**
  * Enable sticky sessions, use it when your client sessions are instances scoped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#sticky_sessions Php#sticky_sessions}
  */
  readonly stickySessions?: boolean | cdktf.IResolvable;
  /**
  * List of virtual hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#vhosts Php#vhosts}
  */
  readonly vhosts?: PhpVhosts[] | cdktf.IResolvable;
  /**
  * Define the DocumentRoot of your project (default: ".")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#webroot Php#webroot}
  */
  readonly webroot?: string;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#deployment Php#deployment}
  */
  readonly deployment?: PhpDeployment;
  /**
  * hooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#hooks Php#hooks}
  */
  readonly hooks?: PhpHooks;
}
export interface PhpNetworkgroups {
  /**
  * domain name which will resolve to application instances inside the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#fqdn Php#fqdn}
  */
  readonly fqdn: string;
  /**
  * ID of the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#networkgroup_id Php#networkgroup_id}
  */
  readonly networkgroupId: string;
}

export function phpNetworkgroupsToTerraform(struct?: PhpNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    networkgroup_id: cdktf.stringToTerraform(struct!.networkgroupId),
  }
}


export function phpNetworkgroupsToHclTerraform(struct?: PhpNetworkgroups | cdktf.IResolvable): any {
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

export class PhpNetworkgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PhpNetworkgroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PhpNetworkgroups | cdktf.IResolvable | undefined) {
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

export class PhpNetworkgroupsList extends cdktf.ComplexList {
  public internalValue? : PhpNetworkgroups[] | cdktf.IResolvable

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
  public get(index: number): PhpNetworkgroupsOutputReference {
    return new PhpNetworkgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhpVhosts {
  /**
  * Fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#fqdn Php#fqdn}
  */
  readonly fqdn: string;
  /**
  * Any HTTP request starting with this path will be sent to this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#path_begin Php#path_begin}
  */
  readonly pathBegin?: string;
}

export function phpVhostsToTerraform(struct?: PhpVhosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    path_begin: cdktf.stringToTerraform(struct!.pathBegin),
  }
}


export function phpVhostsToHclTerraform(struct?: PhpVhosts | cdktf.IResolvable): any {
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

export class PhpVhostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PhpVhosts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PhpVhosts | cdktf.IResolvable | undefined) {
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

export class PhpVhostsList extends cdktf.ComplexList {
  public internalValue? : PhpVhosts[] | cdktf.IResolvable

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
  public get(index: number): PhpVhostsOutputReference {
    return new PhpVhostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhpDeployment {
  /**
  * user ans password ':' separated, (PersonalAccessToken in Github case)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#authentication_basic Php#authentication_basic}
  */
  readonly authenticationBasic?: string;
  /**
  * Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#commit Php#commit}
  */
  readonly commit?: string;
  /**
  * The repository URL to deploy, can be 'https://...', 'file://...'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#repository Php#repository}
  */
  readonly repository?: string;
}

export function phpDeploymentToTerraform(struct?: PhpDeployment | cdktf.IResolvable): any {
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


export function phpDeploymentToHclTerraform(struct?: PhpDeployment | cdktf.IResolvable): any {
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

export class PhpDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PhpDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PhpDeployment | cdktf.IResolvable | undefined) {
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
export interface PhpHooks {
  /**
  * [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#post_build Php#post_build}
  */
  readonly postBuild?: string;
  /**
  * [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#pre_build Php#pre_build}
  */
  readonly preBuild?: string;
  /**
  * [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#pre_run Php#pre_run}
  */
  readonly preRun?: string;
  /**
  * [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#run_failed Php#run_failed}
  */
  readonly runFailed?: string;
  /**
  * [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#run_succeed Php#run_succeed}
  */
  readonly runSucceed?: string;
}

export function phpHooksToTerraform(struct?: PhpHooks | cdktf.IResolvable): any {
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


export function phpHooksToHclTerraform(struct?: PhpHooks | cdktf.IResolvable): any {
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

export class PhpHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PhpHooks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PhpHooks | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php clevercloud_php}
*/
export class Php extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_php";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Php resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Php to import
  * @param importFromId The id of the existing Php that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Php to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_php", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/php clevercloud_php} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PhpConfig
  */
  public constructor(scope: Construct, id: string, config: PhpConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_php',
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
    this._devDependencies = config.devDependencies;
    this._environment = config.environment;
    this._exposedEnvironment = config.exposedEnvironment;
    this._maxInstanceCount = config.maxInstanceCount;
    this._minInstanceCount = config.minInstanceCount;
    this._name = config.name;
    this._networkgroups.internalValue = config.networkgroups;
    this._phpVersion = config.phpVersion;
    this._redirectHttps = config.redirectHttps;
    this._redisSessions = config.redisSessions;
    this._region = config.region;
    this._smallestFlavor = config.smallestFlavor;
    this._stickySessions = config.stickySessions;
    this._vhosts.internalValue = config.vhosts;
    this._webroot = config.webroot;
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

  // dev_dependencies - computed: false, optional: true, required: false
  private _devDependencies?: boolean | cdktf.IResolvable; 
  public get devDependencies() {
    return this.getBooleanAttribute('dev_dependencies');
  }
  public set devDependencies(value: boolean | cdktf.IResolvable) {
    this._devDependencies = value;
  }
  public resetDevDependencies() {
    this._devDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devDependenciesInput() {
    return this._devDependencies;
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
  private _networkgroups = new PhpNetworkgroupsList(this, "networkgroups", true);
  public get networkgroups() {
    return this._networkgroups;
  }
  public putNetworkgroups(value: PhpNetworkgroups[] | cdktf.IResolvable) {
    this._networkgroups.internalValue = value;
  }
  public resetNetworkgroups() {
    this._networkgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupsInput() {
    return this._networkgroups.internalValue;
  }

  // php_version - computed: false, optional: true, required: false
  private _phpVersion?: string; 
  public get phpVersion() {
    return this.getStringAttribute('php_version');
  }
  public set phpVersion(value: string) {
    this._phpVersion = value;
  }
  public resetPhpVersion() {
    this._phpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpVersionInput() {
    return this._phpVersion;
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

  // redis_sessions - computed: false, optional: true, required: false
  private _redisSessions?: boolean | cdktf.IResolvable; 
  public get redisSessions() {
    return this.getBooleanAttribute('redis_sessions');
  }
  public set redisSessions(value: boolean | cdktf.IResolvable) {
    this._redisSessions = value;
  }
  public resetRedisSessions() {
    this._redisSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisSessionsInput() {
    return this._redisSessions;
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
  private _vhosts = new PhpVhostsList(this, "vhosts", true);
  public get vhosts() {
    return this._vhosts;
  }
  public putVhosts(value: PhpVhosts[] | cdktf.IResolvable) {
    this._vhosts.internalValue = value;
  }
  public resetVhosts() {
    this._vhosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostsInput() {
    return this._vhosts.internalValue;
  }

  // webroot - computed: false, optional: true, required: false
  private _webroot?: string; 
  public get webroot() {
    return this.getStringAttribute('webroot');
  }
  public set webroot(value: string) {
    this._webroot = value;
  }
  public resetWebroot() {
    this._webroot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webrootInput() {
    return this._webroot;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new PhpDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: PhpDeployment) {
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
  private _hooks = new PhpHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: PhpHooks) {
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
      dev_dependencies: cdktf.booleanToTerraform(this._devDependencies),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      exposed_environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._exposedEnvironment),
      max_instance_count: cdktf.numberToTerraform(this._maxInstanceCount),
      min_instance_count: cdktf.numberToTerraform(this._minInstanceCount),
      name: cdktf.stringToTerraform(this._name),
      networkgroups: cdktf.listMapper(phpNetworkgroupsToTerraform, false)(this._networkgroups.internalValue),
      php_version: cdktf.stringToTerraform(this._phpVersion),
      redirect_https: cdktf.booleanToTerraform(this._redirectHttps),
      redis_sessions: cdktf.booleanToTerraform(this._redisSessions),
      region: cdktf.stringToTerraform(this._region),
      smallest_flavor: cdktf.stringToTerraform(this._smallestFlavor),
      sticky_sessions: cdktf.booleanToTerraform(this._stickySessions),
      vhosts: cdktf.listMapper(phpVhostsToTerraform, false)(this._vhosts.internalValue),
      webroot: cdktf.stringToTerraform(this._webroot),
      deployment: phpDeploymentToTerraform(this._deployment.internalValue),
      hooks: phpHooksToTerraform(this._hooks.internalValue),
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
      dev_dependencies: {
        value: cdktf.booleanToHclTerraform(this._devDependencies),
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
        value: cdktf.listMapperHcl(phpNetworkgroupsToHclTerraform, false)(this._networkgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PhpNetworkgroupsList",
      },
      php_version: {
        value: cdktf.stringToHclTerraform(this._phpVersion),
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
      redis_sessions: {
        value: cdktf.booleanToHclTerraform(this._redisSessions),
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
      smallest_flavor: {
        value: cdktf.stringToHclTerraform(this._smallestFlavor),
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
        value: cdktf.listMapperHcl(phpVhostsToHclTerraform, false)(this._vhosts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PhpVhostsList",
      },
      webroot: {
        value: cdktf.stringToHclTerraform(this._webroot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment: {
        value: phpDeploymentToHclTerraform(this._deployment.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PhpDeployment",
      },
      hooks: {
        value: phpHooksToHclTerraform(this._hooks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PhpHooks",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
