// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/networkgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the network group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/networkgroup#description Networkgroup#description}
  */
  readonly description?: string;
  /**
  * Name of the network group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/networkgroup#name Networkgroup#name}
  */
  readonly name: string;
  /**
  * Tags of the network group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/networkgroup#tags Networkgroup#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/networkgroup clevercloud_networkgroup}
*/
export class Networkgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_networkgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Networkgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Networkgroup to import
  * @param importFromId The id of the existing Networkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/networkgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Networkgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_networkgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/networkgroup clevercloud_networkgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkgroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_networkgroup',
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
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
