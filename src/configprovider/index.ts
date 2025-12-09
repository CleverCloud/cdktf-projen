// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/configprovider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigproviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Environment variables injected into the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/configprovider#environment Configprovider#environment}
  */
  readonly environment: { [key: string]: string };
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/configprovider#name Configprovider#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/configprovider clevercloud_configprovider}
*/
export class Configprovider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_configprovider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Configprovider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Configprovider to import
  * @param importFromId The id of the existing Configprovider that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/configprovider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Configprovider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_configprovider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/configprovider clevercloud_configprovider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigproviderConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigproviderConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_configprovider',
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
    this._environment = config.environment;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
