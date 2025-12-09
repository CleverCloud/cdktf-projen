// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#name Addon#name}
  */
  readonly name: string;
  /**
  * List of networkgroups the addon must be part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#networkgroups Addon#networkgroups}
  */
  readonly networkgroups?: AddonNetworkgroups[] | cdktf.IResolvable;
  /**
  * Database size and spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#plan Addon#plan}
  */
  readonly plan: string;
  /**
  * Geographical region where the data will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#region Addon#region}
  */
  readonly region?: string;
  /**
  * Provider ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#third_party_provider Addon#third_party_provider}
  */
  readonly thirdPartyProvider: string;
}
export interface AddonNetworkgroups {
  /**
  * domain name which will resolve to addon instances inside the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#fqdn Addon#fqdn}
  */
  readonly fqdn: string;
  /**
  * ID of the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#networkgroup_id Addon#networkgroup_id}
  */
  readonly networkgroupId: string;
}

export function addonNetworkgroupsToTerraform(struct?: AddonNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    networkgroup_id: cdktf.stringToTerraform(struct!.networkgroupId),
  }
}


export function addonNetworkgroupsToHclTerraform(struct?: AddonNetworkgroups | cdktf.IResolvable): any {
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

export class AddonNetworkgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddonNetworkgroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AddonNetworkgroups | cdktf.IResolvable | undefined) {
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

export class AddonNetworkgroupsList extends cdktf.ComplexList {
  public internalValue? : AddonNetworkgroups[] | cdktf.IResolvable

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
  public get(index: number): AddonNetworkgroupsOutputReference {
    return new AddonNetworkgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon clevercloud_addon}
*/
export class Addon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_addon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Addon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Addon to import
  * @param importFromId The id of the existing Addon that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Addon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_addon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/addon clevercloud_addon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AddonConfig
  */
  public constructor(scope: Construct, id: string, config: AddonConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_addon',
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
    this._name = config.name;
    this._networkgroups.internalValue = config.networkgroups;
    this._plan = config.plan;
    this._region = config.region;
    this._thirdPartyProvider = config.thirdPartyProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configurations - computed: true, optional: false, required: false
  private _configurations = new cdktf.StringMap(this, "configurations");
  public get configurations() {
    return this._configurations;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _networkgroups = new AddonNetworkgroupsList(this, "networkgroups", true);
  public get networkgroups() {
    return this._networkgroups;
  }
  public putNetworkgroups(value: AddonNetworkgroups[] | cdktf.IResolvable) {
    this._networkgroups.internalValue = value;
  }
  public resetNetworkgroups() {
    this._networkgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupsInput() {
    return this._networkgroups.internalValue;
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

  // third_party_provider - computed: false, optional: false, required: true
  private _thirdPartyProvider?: string; 
  public get thirdPartyProvider() {
    return this.getStringAttribute('third_party_provider');
  }
  public set thirdPartyProvider(value: string) {
    this._thirdPartyProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyProviderInput() {
    return this._thirdPartyProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      networkgroups: cdktf.listMapper(addonNetworkgroupsToTerraform, false)(this._networkgroups.internalValue),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
      third_party_provider: cdktf.stringToTerraform(this._thirdPartyProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networkgroups: {
        value: cdktf.listMapperHcl(addonNetworkgroupsToHclTerraform, false)(this._networkgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AddonNetworkgroupsList",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      third_party_provider: {
        value: cdktf.stringToHclTerraform(this._thirdPartyProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
