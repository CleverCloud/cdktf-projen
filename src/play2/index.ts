// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Play2Config extends cdktf.TerraformMetaArguments {
  /**
  * Folder in which the application is located (inside the git repository)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#app_folder Play2#app_folder}
  */
  readonly appFolder?: string;
  /**
  * Biggest instance flavor, if different from smallest, enable auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#biggest_flavor Play2#biggest_flavor}
  */
  readonly biggestFlavor: string;
  /**
  * Use dedicated instance with given flavor for build phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#build_flavor Play2#build_flavor}
  */
  readonly buildFlavor?: string;
  /**
  * A list of application or add-ons required to run this application.
  * Can be either app_xxx or postgres_yyy ID format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#dependencies Play2#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * Application description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#description Play2#description}
  */
  readonly description?: string;
  /**
  * Environment variables injected into the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#environment Play2#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Environment variables other linked applications will be able to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#exposed_environment Play2#exposed_environment}
  */
  readonly exposedEnvironment?: { [key: string]: string };
  /**
  * Maximum instance count, if different from min value, enable auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#max_instance_count Play2#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#min_instance_count Play2#min_instance_count}
  */
  readonly minInstanceCount: number;
  /**
  * Application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#name Play2#name}
  */
  readonly name: string;
  /**
  * List of networkgroups the application must be part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#networkgroups Play2#networkgroups}
  */
  readonly networkgroups?: Play2Networkgroups[] | cdktf.IResolvable;
  /**
  * Redirect client from plain to TLS port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#redirect_https Play2#redirect_https}
  */
  readonly redirectHttps?: boolean | cdktf.IResolvable;
  /**
  * Geographical region where the database will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#region Play2#region}
  */
  readonly region?: string;
  /**
  * Smallest instance flavor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#smallest_flavor Play2#smallest_flavor}
  */
  readonly smallestFlavor: string;
  /**
  * Enable sticky sessions, use it when your client sessions are instances scoped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#sticky_sessions Play2#sticky_sessions}
  */
  readonly stickySessions?: boolean | cdktf.IResolvable;
  /**
  * List of virtual hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#vhosts Play2#vhosts}
  */
  readonly vhosts?: Play2Vhosts[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#deployment Play2#deployment}
  */
  readonly deployment?: Play2Deployment;
  /**
  * hooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#hooks Play2#hooks}
  */
  readonly hooks?: Play2Hooks;
}
export interface Play2Networkgroups {
  /**
  * domain name which will resolve to application instances inside the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#fqdn Play2#fqdn}
  */
  readonly fqdn: string;
  /**
  * ID of the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#networkgroup_id Play2#networkgroup_id}
  */
  readonly networkgroupId: string;
}

export function play2NetworkgroupsToTerraform(struct?: Play2Networkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    networkgroup_id: cdktf.stringToTerraform(struct!.networkgroupId),
  }
}


export function play2NetworkgroupsToHclTerraform(struct?: Play2Networkgroups | cdktf.IResolvable): any {
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

export class Play2NetworkgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Play2Networkgroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Play2Networkgroups | cdktf.IResolvable | undefined) {
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

export class Play2NetworkgroupsList extends cdktf.ComplexList {
  public internalValue? : Play2Networkgroups[] | cdktf.IResolvable

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
  public get(index: number): Play2NetworkgroupsOutputReference {
    return new Play2NetworkgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Play2Vhosts {
  /**
  * Fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#fqdn Play2#fqdn}
  */
  readonly fqdn: string;
  /**
  * Any HTTP request starting with this path will be sent to this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#path_begin Play2#path_begin}
  */
  readonly pathBegin?: string;
}

export function play2VhostsToTerraform(struct?: Play2Vhosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    path_begin: cdktf.stringToTerraform(struct!.pathBegin),
  }
}


export function play2VhostsToHclTerraform(struct?: Play2Vhosts | cdktf.IResolvable): any {
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

export class Play2VhostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Play2Vhosts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Play2Vhosts | cdktf.IResolvable | undefined) {
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

export class Play2VhostsList extends cdktf.ComplexList {
  public internalValue? : Play2Vhosts[] | cdktf.IResolvable

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
  public get(index: number): Play2VhostsOutputReference {
    return new Play2VhostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Play2Deployment {
  /**
  * user ans password ':' separated, (PersonalAccessToken in Github case)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#authentication_basic Play2#authentication_basic}
  */
  readonly authenticationBasic?: string;
  /**
  * Support multiple syntax like `refs/heads/[BRANCH]`, `github_hook` or `[COMMIT]`, when using the special value `github_hook`, we will link the application to the Github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#commit Play2#commit}
  */
  readonly commit?: string;
  /**
  * The repository URL to deploy, can be 'https://...', 'file://...'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#repository Play2#repository}
  */
  readonly repository?: string;
}

export function play2DeploymentToTerraform(struct?: Play2Deployment | cdktf.IResolvable): any {
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


export function play2DeploymentToHclTerraform(struct?: Play2Deployment | cdktf.IResolvable): any {
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

export class Play2DeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Play2Deployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Play2Deployment | cdktf.IResolvable | undefined) {
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
export interface Play2Hooks {
  /**
  * [CC_POST_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#post-build)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#post_build Play2#post_build}
  */
  readonly postBuild?: string;
  /**
  * [CC_PRE_BUILD_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-build)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_build Play2#pre_build}
  */
  readonly preBuild?: string;
  /**
  * [CC_PRE_RUN_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#pre-run)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#pre_run Play2#pre_run}
  */
  readonly preRun?: string;
  /**
  * [CC_RUN_FAILED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_failed Play2#run_failed}
  */
  readonly runFailed?: string;
  /**
  * [CC_RUN_SUCCEEDED_HOOK](https://www.clever.cloud/developers/doc/develop/build-hooks/#run-successfail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#run_succeed Play2#run_succeed}
  */
  readonly runSucceed?: string;
}

export function play2HooksToTerraform(struct?: Play2Hooks | cdktf.IResolvable): any {
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


export function play2HooksToHclTerraform(struct?: Play2Hooks | cdktf.IResolvable): any {
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

export class Play2HooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Play2Hooks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Play2Hooks | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2 clevercloud_play2}
*/
export class Play2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_play2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Play2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Play2 to import
  * @param importFromId The id of the existing Play2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Play2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_play2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/play2 clevercloud_play2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Play2Config
  */
  public constructor(scope: Construct, id: string, config: Play2Config) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_play2',
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
    this._environment = config.environment;
    this._exposedEnvironment = config.exposedEnvironment;
    this._maxInstanceCount = config.maxInstanceCount;
    this._minInstanceCount = config.minInstanceCount;
    this._name = config.name;
    this._networkgroups.internalValue = config.networkgroups;
    this._redirectHttps = config.redirectHttps;
    this._region = config.region;
    this._smallestFlavor = config.smallestFlavor;
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
  private _networkgroups = new Play2NetworkgroupsList(this, "networkgroups", true);
  public get networkgroups() {
    return this._networkgroups;
  }
  public putNetworkgroups(value: Play2Networkgroups[] | cdktf.IResolvable) {
    this._networkgroups.internalValue = value;
  }
  public resetNetworkgroups() {
    this._networkgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupsInput() {
    return this._networkgroups.internalValue;
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
  private _vhosts = new Play2VhostsList(this, "vhosts", true);
  public get vhosts() {
    return this._vhosts;
  }
  public putVhosts(value: Play2Vhosts[] | cdktf.IResolvable) {
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
  private _deployment = new Play2DeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: Play2Deployment) {
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
  private _hooks = new Play2HooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: Play2Hooks) {
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
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      exposed_environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._exposedEnvironment),
      max_instance_count: cdktf.numberToTerraform(this._maxInstanceCount),
      min_instance_count: cdktf.numberToTerraform(this._minInstanceCount),
      name: cdktf.stringToTerraform(this._name),
      networkgroups: cdktf.listMapper(play2NetworkgroupsToTerraform, false)(this._networkgroups.internalValue),
      redirect_https: cdktf.booleanToTerraform(this._redirectHttps),
      region: cdktf.stringToTerraform(this._region),
      smallest_flavor: cdktf.stringToTerraform(this._smallestFlavor),
      sticky_sessions: cdktf.booleanToTerraform(this._stickySessions),
      vhosts: cdktf.listMapper(play2VhostsToTerraform, false)(this._vhosts.internalValue),
      deployment: play2DeploymentToTerraform(this._deployment.internalValue),
      hooks: play2HooksToTerraform(this._hooks.internalValue),
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
        value: cdktf.listMapperHcl(play2NetworkgroupsToHclTerraform, false)(this._networkgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Play2NetworkgroupsList",
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
        value: cdktf.listMapperHcl(play2VhostsToHclTerraform, false)(this._vhosts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Play2VhostsList",
      },
      deployment: {
        value: play2DeploymentToHclTerraform(this._deployment.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Play2Deployment",
      },
      hooks: {
        value: play2HooksToHclTerraform(this._hooks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Play2Hooks",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
