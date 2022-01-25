// dependencies: trade_record_to_dict, by: get_trade of Wallet RPC API
import {bool, int, Optional, str, uint32, uint64} from "rolls-agent/src/api/rolls/types/_python_types_";

export type TradeRecordInJson = {
  trade_id: str;
  sent: uint32;
  my_offer: bool;
  created_at_time: uint64;
  accepted_at_time: Optional<uint64>;
  confirmed_at_index: uint32;
  status: str;
  offer_dict: Optional<Record<str, int>>; // {[colour: str]: int(amount)}
};
