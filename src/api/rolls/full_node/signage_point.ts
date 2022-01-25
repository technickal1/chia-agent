import {VDFInfo, VDFProof} from "rolls-agent/src/api/rolls/types/blockchain_format/vdf";
import {Optional} from "rolls-agent/src/api/rolls/types/_python_types_";

export type SignagePoint = {
  cc_vdf: Optional<VDFInfo>;
  cc_proof: Optional<VDFProof>;
  rc_vdf: Optional<VDFInfo>;
  rc_proof: Optional<VDFProof>;
};
