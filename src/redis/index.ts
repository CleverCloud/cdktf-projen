// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#name Redis#name}
  */
  readonly name: string;
  /**
  * List of networkgroups the addon must be part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#networkgroups Redis#networkgroups}
  */
  readonly networkgroups?: RedisNetworkgroups[] | cdktf.IResolvable;
  /**
  * Database size and spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#plan Redis#plan}
  */
  readonly plan: string;
  /**
  * Geographical region where the data will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#region Redis#region}
  */
  readonly region?: string;
}
export interface RedisNetworkgroups {
  /**
  * domain name which will resolve to addon instances inside the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#fqdn Redis#fqdn}
  */
  readonly fqdn: string;
  /**
  * ID of the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#networkgroup_id Redis#networkgroup_id}
  */
  readonly networkgroupId: string;
}

export function redisNetworkgroupsToTerraform(struct?: RedisNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    networkgroup_id: cdktf.stringToTerraform(struct!.networkgroupId),
  }
}


export function redisNetworkgroupsToHclTerraform(struct?: RedisNetworkgroups | cdktf.IResolvable): any {
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

export class RedisNetworkgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisNetworkgroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedisNetworkgroups | cdktf.IResolvable | undefined) {
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

export class RedisNetworkgroupsList extends cdktf.ComplexList {
  public internalValue? : RedisNetworkgroups[] | cdktf.IResolvable

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
  public get(index: number): RedisNetworkgroupsOutputReference {
    return new RedisNetworkgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis clevercloud_redis}
*/
export class Redis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_redis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Redis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Redis to import
  * @param importFromId The id of the existing Redis that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Redis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_redis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/redis clevercloud_redis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisConfig
  */
  public constructor(scope: Construct, id: string, config: RedisConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_redis',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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
  private _networkgroups = new RedisNetworkgroupsList(this, "networkgroups", true);
  public get networkgroups() {
    return this._networkgroups;
  }
  public putNetworkgroups(value: RedisNetworkgroups[] | cdktf.IResolvable) {
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      networkgroups: cdktf.listMapper(redisNetworkgroupsToTerraform, false)(this._networkgroups.internalValue),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
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
        value: cdktf.listMapperHcl(redisNetworkgroupsToHclTerraform, false)(this._networkgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RedisNetworkgroupsList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
