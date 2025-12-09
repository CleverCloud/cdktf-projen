// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Cellar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar#name Cellar#name}
  */
  readonly name: string;
  /**
  * Geographical region where the data will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar#region Cellar#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar clevercloud_cellar}
*/
export class Cellar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_cellar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cellar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cellar to import
  * @param importFromId The id of the existing Cellar that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cellar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_cellar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar clevercloud_cellar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellarConfig
  */
  public constructor(scope: Construct, id: string, config: CellarConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_cellar',
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
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_secret - computed: true, optional: false, required: false
  public get keySecret() {
    return this.getStringAttribute('key_secret');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
