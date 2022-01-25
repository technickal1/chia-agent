import {G2Element} from "rolls-agent/src/api/rolls/types/_python_types_";
import {CoinSpend} from "rolls-agent/src/api/rolls/types/coin_spend";

export type SpendBundle = {
  cons_spends: CoinSpend[];
  aggregated_signature: G2Element;
};