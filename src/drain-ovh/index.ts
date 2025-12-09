// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrainOvhConfig extends cdktf.TerraformMetaArguments {
  /**
  * either LOG, ACCESSLOG or AUDITLOG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh#kind DrainOvh#kind}
  */
  readonly kind?: string;
  /**
  * Application or product ID which support logs drains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh#resource_id DrainOvh#resource_id}
  */
  readonly resourceId: string;
  /**
  * RFC5424 structured data parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh#rfc5424_structured_data_parameters DrainOvh#rfc5424_structured_data_parameters}
  */
  readonly rfc5424StructuredDataParameters?: string;
  /**
  * OVH authentication token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh#token DrainOvh#token}
  */
  readonly token: string;
  /**
  * OVH logs destination URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh#url DrainOvh#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh clevercloud_drain_ovh}
*/
export class DrainOvh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_drain_ovh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrainOvh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrainOvh to import
  * @param importFromId The id of the existing DrainOvh that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrainOvh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_drain_ovh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_ovh clevercloud_drain_ovh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrainOvhConfig
  */
  public constructor(scope: Construct, id: string, config: DrainOvhConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_drain_ovh',
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
    this._kind = config.kind;
    this._resourceId = config.resourceId;
    this._rfc5424StructuredDataParameters = config.rfc5424StructuredDataParameters;
    this._token = config.token;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // rfc5424_structured_data_parameters - computed: false, optional: true, required: false
  private _rfc5424StructuredDataParameters?: string; 
  public get rfc5424StructuredDataParameters() {
    return this.getStringAttribute('rfc5424_structured_data_parameters');
  }
  public set rfc5424StructuredDataParameters(value: string) {
    this._rfc5424StructuredDataParameters = value;
  }
  public resetRfc5424StructuredDataParameters() {
    this._rfc5424StructuredDataParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc5424StructuredDataParametersInput() {
    return this._rfc5424StructuredDataParameters;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kind: cdktf.stringToTerraform(this._kind),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      rfc5424_structured_data_parameters: cdktf.stringToTerraform(this._rfc5424StructuredDataParameters),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfc5424_structured_data_parameters: {
        value: cdktf.stringToHclTerraform(this._rfc5424StructuredDataParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
