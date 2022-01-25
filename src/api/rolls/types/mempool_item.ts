import {SpendBundle} from "rolls-agent/src/api/rolls/types/spend_bundle";
import {SerializedProgram} from "rolls-agent/src/api/rolls/types/blockchain_format/program";
import {Coin} from "rolls-agent/src/api/rolls/types/blockchain_format/coin";
import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";
import {NPCResult} from "rolls-agent/src/api/rolls/consensus/cost_calculator";
import {uint64} from "rolls-agent/src/api/rolls/types/_python_types_";

export type MempoolItem = {
  spend_bundle: SpendBundle;
  fee: uint64;
  npc_result: NPCResult;
  cost: uint64;
  spend_bundle_name: bytes32;
  additions: Coin[];
  removals: Coin[];
  program: SerializedProgram;
};