import {str, uint32, uint8} from "rolls-agent/src/api/rolls/types/_python_types_";

export type WalletInfo = {
  id: uint32;
  name: str;
  type: uint8;
  data: str;
};

export type WalletInfoBackup = {
  wallet_list: WalletInfo[];
};