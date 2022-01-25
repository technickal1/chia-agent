import {NPC} from "rolls-agent/src/api/rolls/types/name_puzzle_condition";
import {Optional, uint16, uint64} from "rolls-agent/src/api/rolls/types/_python_types_";

export type NPCResult = {
  error: Optional<uint16>;
  npc_list: NPC[];
  clvm_cost: uint64; //  # CLVM cost only, cost of conditions and tx size is not included
};