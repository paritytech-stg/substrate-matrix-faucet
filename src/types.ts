export type TypeofMap = {
  string: string;
  number: number;
  boolean: boolean;
};
export type PrimitivTypeString = keyof TypeofMap;

export type PrimitivType = string | number | boolean;

export interface MetricsDefinition {
  meta: {
    prefix: string;
  };
  data: { [id: string]: number };
}

export interface EnvOpt {
  default?: PrimitivType;
  required: boolean;
  secret: boolean;
  type: PrimitivTypeString;
}

export interface BalanceResponse {
  balance: string;
}

export interface DripErrorResponse {
  error: string;
}

export interface DripSuccessResponse {
  hash: string;
}

export type DripResponse = DripErrorResponse | DripSuccessResponse;

export interface DripRequestType {
  address: string;
  amount: string;
  parachain_id: string;
  sender?: string;
  recaptcha?: string;
  google_auth_token?: string;
}
