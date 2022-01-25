import {Coin} from "rolls-agent/src/api/rolls/types/blockchain_format/coin";
import {SerializedProgram} from "rolls-agent/src/api/rolls/types/blockchain_format/program";

export type CoinSpend = {
  coin: Coin;
  puzzle_reveal: SerializedProgram;
  solution: SerializedProgram;
};