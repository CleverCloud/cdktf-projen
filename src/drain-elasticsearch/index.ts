// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrainElasticsearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Elasticsearch index name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#index DrainElasticsearch#index}
  */
  readonly index: string;
  /**
  * either LOG, ACCESSLOG or AUDITLOG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#kind DrainElasticsearch#kind}
  */
  readonly kind?: string;
  /**
  * Elasticsearch password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#password DrainElasticsearch#password}
  */
  readonly password: string;
  /**
  * Application or product ID which support logs drains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#resource_id DrainElasticsearch#resource_id}
  */
  readonly resourceId: string;
  /**
  * TLS verification mode: DEFAULT or TRUSTFUL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#tls_verification DrainElasticsearch#tls_verification}
  */
  readonly tlsVerification?: string;
  /**
  * Elasticsearch URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#url DrainElasticsearch#url}
  */
  readonly url: string;
  /**
  * Elasticsearch username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#username DrainElasticsearch#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch clevercloud_drain_elasticsearch}
*/
export class DrainElasticsearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_drain_elasticsearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrainElasticsearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrainElasticsearch to import
  * @param importFromId The id of the existing DrainElasticsearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrainElasticsearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_drain_elasticsearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/drain_elasticsearch clevercloud_drain_elasticsearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrainElasticsearchConfig
  */
  public constructor(scope: Construct, id: string, config: DrainElasticsearchConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_drain_elasticsearch',
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
    this._index = config.index;
    this._kind = config.kind;
    this._password = config.password;
    this._resourceId = config.resourceId;
    this._tlsVerification = config.tlsVerification;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // tls_verification - computed: true, optional: true, required: false
  private _tlsVerification?: string; 
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }
  public set tlsVerification(value: string) {
    this._tlsVerification = value;
  }
  public resetTlsVerification() {
    this._tlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerificationInput() {
    return this._tlsVerification;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      index: cdktf.stringToTerraform(this._index),
      kind: cdktf.stringToTerraform(this._kind),
      password: cdktf.stringToTerraform(this._password),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      tls_verification: cdktf.stringToTerraform(this._tlsVerification),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      index: {
        value: cdktf.stringToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      tls_verification: {
        value: cdktf.stringToHclTerraform(this._tlsVerification),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
