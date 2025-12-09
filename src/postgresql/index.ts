// https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable backups for this PostgreSQL add-on. Since backups are included in the add-on price, disabling it has no impact on your billing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#backup Postgresql#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Encrypt the hard drive at rest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#encryption Postgresql#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#name Postgresql#name}
  */
  readonly name: string;
  /**
  * List of networkgroups the addon must be part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#networkgroups Postgresql#networkgroups}
  */
  readonly networkgroups?: PostgresqlNetworkgroups[] | cdktf.IResolvable;
  /**
  * Database size and spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#plan Postgresql#plan}
  */
  readonly plan: string;
  /**
  * Geographical region where the data will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#region Postgresql#region}
  */
  readonly region?: string;
  /**
  * PostgreSQL version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#version Postgresql#version}
  */
  readonly version?: string;
}
export interface PostgresqlNetworkgroups {
  /**
  * domain name which will resolve to addon instances inside the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#fqdn Postgresql#fqdn}
  */
  readonly fqdn: string;
  /**
  * ID of the networkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#networkgroup_id Postgresql#networkgroup_id}
  */
  readonly networkgroupId: string;
}

export function postgresqlNetworkgroupsToTerraform(struct?: PostgresqlNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    networkgroup_id: cdktf.stringToTerraform(struct!.networkgroupId),
  }
}


export function postgresqlNetworkgroupsToHclTerraform(struct?: PostgresqlNetworkgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkgroup_id: {
      value: cdktf.stringToHclTerraform(struct!.networkgroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlNetworkgroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PostgresqlNetworkgroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._networkgroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkgroupId = this._networkgroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlNetworkgroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._networkgroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._networkgroupId = value.networkgroupId;
    }
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // networkgroup_id - computed: false, optional: false, required: true
  private _networkgroupId?: string; 
  public get networkgroupId() {
    return this.getStringAttribute('networkgroup_id');
  }
  public set networkgroupId(value: string) {
    this._networkgroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupIdInput() {
    return this._networkgroupId;
  }
}

export class PostgresqlNetworkgroupsList extends cdktf.ComplexList {
  public internalValue? : PostgresqlNetworkgroups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PostgresqlNetworkgroupsOutputReference {
    return new PostgresqlNetworkgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql clevercloud_postgresql}
*/
export class Postgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clevercloud_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Postgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Postgresql to import
  * @param importFromId The id of the existing Postgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Postgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clevercloud_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clevercloud/clevercloud/1.7.1/docs/resources/postgresql clevercloud_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'clevercloud_postgresql',
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
    this._backup = config.backup;
    this._encryption = config.encryption;
    this._name = config.name;
    this._networkgroups.internalValue = config.networkgroups;
    this._plan = config.plan;
    this._region = config.region;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup - computed: true, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // networkgroups - computed: false, optional: true, required: false
  private _networkgroups = new PostgresqlNetworkgroupsList(this, "networkgroups", true);
  public get networkgroups() {
    return this._networkgroups;
  }
  public putNetworkgroups(value: PostgresqlNetworkgroups[] | cdktf.IResolvable) {
    this._networkgroups.internalValue = value;
  }
  public resetNetworkgroups() {
    this._networkgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkgroupsInput() {
    return this._networkgroups.internalValue;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // version - computed: true, optional: true, required: false
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
      backup: cdktf.booleanToTerraform(this._backup),
      encryption: cdktf.booleanToTerraform(this._encryption),
      name: cdktf.stringToTerraform(this._name),
      networkgroups: cdktf.listMapper(postgresqlNetworkgroupsToTerraform, false)(this._networkgroups.internalValue),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup: {
        value: cdktf.booleanToHclTerraform(this._backup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networkgroups: {
        value: cdktf.listMapperHcl(postgresqlNetworkgroupsToHclTerraform, false)(this._networkgroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PostgresqlNetworkgroupsList",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
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
