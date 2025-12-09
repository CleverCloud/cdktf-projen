// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PulsarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Pulsar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#name Pulsar#name}
  */
  readonly name: string;
  /**
  * Geographical region where the data will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#region Pulsar#region}
  */
  readonly region?: string;
  /**
  * Pulsar namespace retention policy in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#retention_period Pulsar#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Pulsar namespace retention policy in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#retention_size Pulsar#retention_size}
  */
  readonly retentionSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar clevercloud_pulsar}
*/
export class Pulsar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_pulsar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pulsar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pulsar to import
  * @param importFromId The id of the existing Pulsar that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pulsar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_pulsar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/pulsar clevercloud_pulsar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PulsarConfig
  */
  public constructor(scope: Construct, id: string, config: PulsarConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_pulsar',
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
    this._retentionPeriod = config.retentionPeriod;
    this._retentionSize = config.retentionSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_url - computed: true, optional: false, required: false
  public get binaryUrl() {
    return this.getStringAttribute('binary_url');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
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

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // retention_size - computed: false, optional: true, required: false
  private _retentionSize?: number; 
  public get retentionSize() {
    return this.getNumberAttribute('retention_size');
  }
  public set retentionSize(value: number) {
    this._retentionSize = value;
  }
  public resetRetentionSize() {
    this._retentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSizeInput() {
    return this._retentionSize;
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
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
      region: cdktf.stringToTerraform(this._region),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      retention_size: cdktf.numberToTerraform(this._retentionSize),
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
      retention_period: {
        value: cdktf.numberToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_size: {
        value: cdktf.numberToHclTerraform(this._retentionSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
