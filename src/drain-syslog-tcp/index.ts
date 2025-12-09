// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrainSyslogTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * either LOG, ACCESSLOG or AUDITLOG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#kind DrainSyslogTcp#kind}
  */
  readonly kind?: string;
  /**
  * Application or product ID which support logs drains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#resource_id DrainSyslogTcp#resource_id}
  */
  readonly resourceId: string;
  /**
  * Authentication token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#token DrainSyslogTcp#token}
  */
  readonly token?: string;
  /**
  * Syslog TCP destination URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#url DrainSyslogTcp#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp clevercloud_drain_syslog_tcp}
*/
export class DrainSyslogTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_drain_syslog_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrainSyslogTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrainSyslogTcp to import
  * @param importFromId The id of the existing DrainSyslogTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrainSyslogTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_drain_syslog_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_syslog_tcp clevercloud_drain_syslog_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrainSyslogTcpConfig
  */
  public constructor(scope: Construct, id: string, config: DrainSyslogTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_drain_syslog_tcp',
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
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
