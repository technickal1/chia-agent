import {ConditionOpcode} from "rolls-agent/src/api/rolls/types/condition_opcodes";
import {bytes} from "rolls-agent/src/api/rolls/types/_python_types_";

export type ConditionWithArgs = {
  opcode: ConditionOpcode;
  vars: bytes[];
};