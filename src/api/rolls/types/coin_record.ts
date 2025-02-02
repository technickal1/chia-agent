import {Coin} from "rolls-agent/src/api/rolls/types/blockchain_format/coin";
import {bool, uint32, uint64} from "rolls-agent/src/api/rolls/types/_python_types_";

export type CoinRecord = {
  coin: Coin;
  confirmed_block_index: uint32
  spent_block_index: uint32;
  spent: bool;
  coinbase: bool;
  timestamp: uint64; //  # Timestamp of the block at height confirmed_block_index
};
