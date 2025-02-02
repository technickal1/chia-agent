import {G1Element, G2Element, str, uint64} from "rolls-agent/src/api/rolls/types/_python_types_";
import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";

export type PoolWalletConfig = {
  launcher_id: bytes32;
  pool_url: str;
  payout_instructions: str;
  target_puzzle_hash: bytes32;
  p2_singleton_puzzle_hash: bytes32;
  owner_public_key: G1Element;
  authentication_public_key: G1Element;
};