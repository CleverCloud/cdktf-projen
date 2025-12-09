// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellarBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cellar's reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar_bucket#cellar_id CellarBucket#cellar_id}
  */
  readonly cellarId: string;
  /**
  * Name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar_bucket#id CellarBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar_bucket clevercloud_cellar_bucket}
*/
export class CellarBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_cellar_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CellarBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CellarBucket to import
  * @param importFromId The id of the existing CellarBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CellarBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_cellar_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/cellar_bucket clevercloud_cellar_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellarBucketConfig
  */
  public constructor(scope: Construct, id: string, config: CellarBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_cellar_bucket',
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
    this._cellarId = config.cellarId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cellar_id - computed: false, optional: false, required: true
  private _cellarId?: string; 
  public get cellarId() {
    return this.getStringAttribute('cellar_id');
  }
  public set cellarId(value: string) {
    this._cellarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cellarIdInput() {
    return this._cellarId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cellar_id: cdktf.stringToTerraform(this._cellarId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cellar_id: {
        value: cdktf.stringToHclTerraform(this._cellarId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
