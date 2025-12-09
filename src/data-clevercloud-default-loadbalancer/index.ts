// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClevercloudDefaultLoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application ID for which to fetch the load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#application_id DataClevercloudDefaultLoadbalancer#application_id}
  */
  readonly applicationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer clevercloud_default_loadbalancer}
*/
export class DataClevercloudDefaultLoadbalancer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_default_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClevercloudDefaultLoadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClevercloudDefaultLoadbalancer to import
  * @param importFromId The id of the existing DataClevercloudDefaultLoadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClevercloudDefaultLoadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_default_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/data-sources/default_loadbalancer clevercloud_default_loadbalancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClevercloudDefaultLoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: DataClevercloudDefaultLoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_default_loadbalancer',
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
    this._applicationId = config.applicationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return this.getListAttribute('servers');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
