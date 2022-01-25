import {
  ChallengeChainSubSlot,
  InfusedChallengeChainSubSlot,
  RewardChainSubSlot,
  SubSlotProofs
} from "rolls-agent/src/api/rolls/types/blockchain_format/slots";
import {Optional} from "rolls-agent/src/api/rolls/types/_python_types_";

export type EndOfSubSlotBundle = {
  challenge_chain: ChallengeChainSubSlot;
  infused_challenge_chain: Optional<InfusedChallengeChainSubSlot>;
  reward_chain: RewardChainSubSlot;
  proofs: SubSlotProofs;
};
