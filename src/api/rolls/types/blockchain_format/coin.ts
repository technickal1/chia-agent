import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";
import {uint64} from "rolls-agent/src/api/rolls/types/_python_types_";

export type Coin = {
  parent_coin_info: bytes32; // bytes32
  puzzle_hash: bytes32; // bytes32
  amount: uint64; // uint64
};
