/* export interface ICoin {
    [x: string]: any
    symbol_id: string
    exchange_id: string
    symbol_type: string
    asset_id_base: string
    asset_id_quote: string
    asset_id_unit: string
    future_contract_unit: number
    future_contract_unit_asset: string
    data_start: string
    data_end: string
    data_quote_start: string
    data_quote_end: string
    data_orderbook_start: string
    data_orderbook_end: string
    data_trade_start: string
    data_trade_end:string
    volume_1hrs: number
    volume_1hrs_usd: number
    volume_1day: number
    volume_1day_usd: number
    volume_1mth: number
    volume_1mth_usd: number
    price: number
    symbol_id_exchange: string
    asset_id_base_exchange: string
    asset_id_quote_exchange: string
    price_precision: number
    size_precision: number
  } */

export interface ICoin {
  [x: string]: any;
  name?: string;
  image?: string;
  symbol?: string;
  current_price?: number;
  market_cap_change_percentage_24h?: number;
}

export interface ICoinResp {
  data: ICoin | null;
  status: number | null;
}

export interface CryptoData {
  asset_id?: string;
  name?: string;
  price?: number;
  change?: number;
  id_icon?: string;
  volume_1day_usd: number;
  price_usd?: number;
}

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
}

export interface ILoginResp {
  data: IUser[] | null;
  status: number | null;
}

export interface IUsersResp {
  data: IUser[] | null;
  status: number | null;
}

export interface ICreateUserResp {
  data: IUser | null;
  status: number | null;
}
