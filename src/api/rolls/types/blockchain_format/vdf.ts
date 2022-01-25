import {ClassgroupElement} from "rolls-agent/src/api/rolls/types/blockchain_format/classgroup";
import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";
import {bool, bytes, uint64, uint8} from "rolls-agent/src/api/rolls/types/_python_types_";

export type VDFInfo = {
  challenge: bytes32; // bytes32  # Used to generate the discriminant (VDF group)
  number_of_iterations: uint64; // uint64
  output: ClassgroupElement;
};

export type VDFProof = {
  witness_type: uint8; // uint8
  witness: bytes; // bytes
  normalized_to_identity: bool; // bool
};
