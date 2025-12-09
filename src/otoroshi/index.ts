// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/otoroshi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtoroshiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Otoroshi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/otoroshi#name Otoroshi#name}
  */
  readonly name: string;
  /**
  * Geographical region where the data will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/otoroshi#region Otoroshi#region}
  */
  readonly region?: string;
  /**
  * Otoroshi version to deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/otoroshi#version Otoroshi#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/otoroshi clevercloud_otoroshi}
*/
export class Otoroshi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_otoroshi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Otoroshi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Otoroshi to import
  * @param importFromId The id of the existing Otoroshi that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/otoroshi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Otoroshi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_otoroshi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/otoroshi clevercloud_otoroshi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtoroshiConfig
  */
  public constructor(scope: Construct, id: string, config: OtoroshiConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_otoroshi',
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
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_client_id - computed: true, optional: false, required: false
  public get apiClientId() {
    return this.getStringAttribute('api_client_id');
  }

  // api_client_secret - computed: true, optional: false, required: false
  public get apiClientSecret() {
    return this.getStringAttribute('api_client_secret');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_admin_login - computed: true, optional: false, required: false
  public get initialAdminLogin() {
    return this.getStringAttribute('initial_admin_login');
  }

  // initial_admin_password - computed: true, optional: false, required: false
  public get initialAdminPassword() {
    return this.getStringAttribute('initial_admin_password');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // version - computed: false, optional: true, required: false
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
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      version: cdktf.stringToTerraform(this._version),
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
