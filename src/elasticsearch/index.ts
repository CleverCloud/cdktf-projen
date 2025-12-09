// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable APM (Application Performance Monitoring) for this Elasticsearch add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#apm Elasticsearch#apm}
  */
  readonly apm?: boolean | cdktf.IResolvable;
  /**
  * Enable at-rest encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#encryption Elasticsearch#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Enable Kibana for this Elasticsearch add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#kibana Elasticsearch#kibana}
  */
  readonly kibana?: boolean | cdktf.IResolvable;
  /**
  * Name of the elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#name Elasticsearch#name}
  */
  readonly name: string;
  /**
  * List of networkgroups the addon must be part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroups Elasticsearch#networkgroups}
  */
  readonly networkgroups?: ElasticsearchNetworkgroups[] | cdktf.IResolvable;
  /**
  * Database size and spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plan Elasticsearch#plan}
  */
  readonly plan: string;
  /**
  * List of plugins to install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#plugins Elasticsearch#plugins}
  */
  readonly plugins?: string[];
  /**
  * Geographical region where the data will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#region Elasticsearch#region}
  */
  readonly region?: string;
  /**
  * Elasticsearch version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#version Elasticsearch#version}
  */
  readonly version?: string;
}
export interface ElasticsearchNetworkgroups {
  /**
  * domain name which will resolve to addon instances inside the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#fqdn Elasticsearch#fqdn}
  */
  readonly fqdn: string;
  /**
  * ID of the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#networkgroup_id Elasticsearch#networkgroup_id}
  */
  readonly networkgroupId: string;
}

export function elasticsearchNetworkgroupsToTerraform(struct?: ElasticsearchNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    networkgroup_id: cdktf.stringToTerraform(struct!.networkgroupId),
  }
}


export function elasticsearchNetworkgroupsToHclTerraform(struct?: ElasticsearchNetworkgroups | cdktf.IResolvable): any {
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

export class ElasticsearchNetworkgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchNetworkgroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticsearchNetworkgroups | cdktf.IResolvable | undefined) {
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

export class ElasticsearchNetworkgroupsList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchNetworkgroups[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchNetworkgroupsOutputReference {
    return new ElasticsearchNetworkgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch clevercloud_elasticsearch}
*/
export class Elasticsearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_elasticsearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Elasticsearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Elasticsearch to import
  * @param importFromId The id of the existing Elasticsearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Elasticsearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_elasticsearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/elasticsearch clevercloud_elasticsearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_elasticsearch',
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
    this._apm = config.apm;
    this._encryption = config.encryption;
    this._kibana = config.kibana;
    this._name = config.name;
    this._networkgroups.internalValue = config.networkgroups;
    this._plan = config.plan;
    this._plugins = config.plugins;
    this._region = config.region;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm - computed: true, optional: true, required: false
  private _apm?: boolean | cdktf.IResolvable; 
  public get apm() {
    return this.getBooleanAttribute('apm');
  }
  public set apm(value: boolean | cdktf.IResolvable) {
    this._apm = value;
  }
  public resetApm() {
    this._apm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmInput() {
    return this._apm;
  }

  // apm_host - computed: true, optional: false, required: false
  public get apmHost() {
    return this.getStringAttribute('apm_host');
  }

  // apm_password - computed: true, optional: false, required: false
  public get apmPassword() {
    return this.getStringAttribute('apm_password');
  }

  // apm_token - computed: true, optional: false, required: false
  public get apmToken() {
    return this.getStringAttribute('apm_token');
  }

  // apm_user - computed: true, optional: false, required: false
  public get apmUser() {
    return this.getStringAttribute('apm_user');
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kibana - computed: true, optional: true, required: false
  private _kibana?: boolean | cdktf.IResolvable; 
  public get kibana() {
    return this.getBooleanAttribute('kibana');
  }
  public set kibana(value: boolean | cdktf.IResolvable) {
    this._kibana = value;
  }
  public resetKibana() {
    this._kibana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaInput() {
    return this._kibana;
  }

  // kibana_host - computed: true, optional: false, required: false
  public get kibanaHost() {
    return this.getStringAttribute('kibana_host');
  }

  // kibana_password - computed: true, optional: false, required: false
  public get kibanaPassword() {
    return this.getStringAttribute('kibana_password');
  }

  // kibana_user - computed: true, optional: false, required: false
  public get kibanaUser() {
    return this.getStringAttribute('kibana_user');
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
  private _networkgroups = new ElasticsearchNetworkgroupsList(this, "networkgroups", true);
  public get networkgroups() {
    return this._networkgroups;
  }
  public putNetworkgroups(value: ElasticsearchNetworkgroups[] | cdktf.IResolvable) {
    this._networkgroups.internalValue = value;
  }
  public resetNetworkgroups() {
    this._networkgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupsInput() {
    return this._networkgroups.internalValue;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins?: string[]; 
  public get plugins() {
    return cdktf.Fn.tolist(this.getListAttribute('plugins'));
  }
  public set plugins(value: string[]) {
    this._plugins = value;
  }
  public resetPlugins() {
    this._plugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins;
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

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm: cdktf.booleanToTerraform(this._apm),
      encryption: cdktf.booleanToTerraform(this._encryption),
      kibana: cdktf.booleanToTerraform(this._kibana),
      name: cdktf.stringToTerraform(this._name),
      networkgroups: cdktf.listMapper(elasticsearchNetworkgroupsToTerraform, false)(this._networkgroups.internalValue),
      plan: cdktf.stringToTerraform(this._plan),
      plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._plugins),
      region: cdktf.stringToTerraform(this._region),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm: {
        value: cdktf.booleanToHclTerraform(this._apm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kibana: {
        value: cdktf.booleanToHclTerraform(this._kibana),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networkgroups: {
        value: cdktf.listMapperHcl(elasticsearchNetworkgroupsToHclTerraform, false)(this._networkgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElasticsearchNetworkgroupsList",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._plugins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
