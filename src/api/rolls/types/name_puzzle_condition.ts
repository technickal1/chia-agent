import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";
import {ConditionOpcode} from "rolls-agent/src/api/rolls/types/condition_opcodes";
import {ConditionWithArgs} from "rolls-agent/src/api/rolls/types/condition_with_args";

export type NPC = {
  coin_name: bytes32;
  puzzle_hash: bytes32;
  conditions: Array<[ConditionOpcode, ConditionWithArgs[]]>; // List[Tuple[ConditionOpcode, List[ConditionWithArgs]]]
};
