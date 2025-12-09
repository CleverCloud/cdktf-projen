// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_datadog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrainDatadogConfig extends cdktf.TerraformMetaArguments {
  /**
  * either LOG, ACCESSLOG or AUDITLOG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_datadog#kind DrainDatadog#kind}
  */
  readonly kind?: string;
  /**
  * Application or product ID which support logs drains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_datadog#resource_id DrainDatadog#resource_id}
  */
  readonly resourceId: string;
  /**
  * Datadog log intake URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_datadog#url DrainDatadog#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_datadog clevercloud_drain_datadog}
*/
export class DrainDatadog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_drain_datadog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrainDatadog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrainDatadog to import
  * @param importFromId The id of the existing DrainDatadog that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_datadog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrainDatadog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_drain_datadog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_datadog clevercloud_drain_datadog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrainDatadogConfig
  */
  public constructor(scope: Construct, id: string, config: DrainDatadogConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_drain_datadog',
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
