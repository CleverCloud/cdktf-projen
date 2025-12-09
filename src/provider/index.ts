// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClevercloudProviderConfig {
  /**
  * Clever Cloud OAuth1 consumer key. Allows using a dedicated OAuth consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_key ClevercloudProvider#consumer_key}
  */
  readonly consumerKey?: string;
  /**
  * CleverCloud OAuth1 consumer secret. Allows using a dedicated OAuth consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#consumer_secret ClevercloudProvider#consumer_secret}
  */
  readonly consumerSecret?: string;
  /**
  * Disable netorkgroups features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#disable_networkgroups ClevercloudProvider#disable_networkgroups}
  */
  readonly disableNetworkgroups?: boolean | cdktf.IResolvable;
  /**
  * Clever Cloud API endpoint, default to https://api.clever-cloud.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#endpoint ClevercloudProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Clever Cloud organisation, can be either orga_xxx, or user_xxx for personal spaces. This parameter can also be provided via CC_ORGANISATION environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#organisation ClevercloudProvider#organisation}
  */
  readonly organisation?: string;
  /**
  * Clever Cloud OAuth1 secret, can be took from clever-tools after login. This parameter can also be provided via CC_OAUTH_SECRET environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#secret ClevercloudProvider#secret}
  */
  readonly secret?: string;
  /**
  * Clever Cloud OAuth1 token, can be took from clever-tools after login. This parameter can also be provided via CC_OAUTH_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#token ClevercloudProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#alias ClevercloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs clevercloud}
*/
export class ClevercloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClevercloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClevercloudProvider to import
  * @param importFromId The id of the existing ClevercloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClevercloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs clevercloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClevercloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClevercloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'clevercloud',
      terraformGeneratorMetadata: {
        providerName: 'clevercloud',
        providerVersion: '1.7.1',
        providerVersionConstraint: '~> 1.7.1'
      },
      terraformProviderSource: 'CleverCloud/clevercloud'
    });
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._disableNetworkgroups = config.disableNetworkgroups;
    this._endpoint = config.endpoint;
    this._organisation = config.organisation;
    this._secret = config.secret;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_key - computed: false, optional: true, required: false
  private _consumerKey?: string; 
  public get consumerKey() {
    return this._consumerKey;
  }
  public set consumerKey(value: string | undefined) {
    this._consumerKey = value;
  }
  public resetConsumerKey() {
    this._consumerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: true, required: false
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this._consumerSecret;
  }
  public set consumerSecret(value: string | undefined) {
    this._consumerSecret = value;
  }
  public resetConsumerSecret() {
    this._consumerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // disable_networkgroups - computed: false, optional: true, required: false
  private _disableNetworkgroups?: boolean | cdktf.IResolvable; 
  public get disableNetworkgroups() {
    return this._disableNetworkgroups;
  }
  public set disableNetworkgroups(value: boolean | cdktf.IResolvable | undefined) {
    this._disableNetworkgroups = value;
  }
  public resetDisableNetworkgroups() {
    this._disableNetworkgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNetworkgroupsInput() {
    return this._disableNetworkgroups;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // organisation - computed: false, optional: true, required: false
  private _organisation?: string; 
  public get organisation() {
    return this._organisation;
  }
  public set organisation(value: string | undefined) {
    this._organisation = value;
  }
  public resetOrganisation() {
    this._organisation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationInput() {
    return this._organisation;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this._secret;
  }
  public set secret(value: string | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
      disable_networkgroups: cdktf.booleanToTerraform(this._disableNetworkgroups),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      organisation: cdktf.stringToTerraform(this._organisation),
      secret: cdktf.stringToTerraform(this._secret),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktf.stringToHclTerraform(this._consumerSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_networkgroups: {
        value: cdktf.booleanToHclTerraform(this._disableNetworkgroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organisation: {
        value: cdktf.stringToHclTerraform(this._organisation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
