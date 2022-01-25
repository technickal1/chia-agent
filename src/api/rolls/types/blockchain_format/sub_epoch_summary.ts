import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";
import {Optional, uint64, uint8} from "rolls-agent/src/api/rolls/types/_python_types_";

export type SubEpochSummary = {
  prev_subepoch_summary_hash: bytes32; // bytes32
  reward_chain_hash: bytes32; // bytes32  # hash of reward chain at end of last segment
  num_blocks_overflow: uint8; // uint8  # How many more blocks than 384*(N-1)
  new_difficulty: Optional<uint64>; // Optional[uint64]  # Only once per epoch (diff adjustment)
  new_sub_slot_iters: Optional<uint64>; // Optional[uint64]  # Only once per epoch (diff adjustment)
};
