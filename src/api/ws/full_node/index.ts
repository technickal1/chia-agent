import {BlockRecord} from "rolls-agent/src/api/rolls/consensus/block_record";
import {bool, int, uint128, uint32, uint64} from "rolls-agent/src/api/rolls/types/_python_types_";
import {TDaemon} from "rolls-agent/src/daemon";
import {GetMessageType, wallet_ui_service} from "rolls-agent/src/api/types";
import {WsMessage} from "rolls-agent/src/api/ws";

export const rolls_full_node_service = "rolls_full_node";
export type rolls_full_node_service = typeof rolls_full_node_service;

export const get_blockchain_state_command = "get_blockchain_state";
export type get_blockchain_state_command = typeof get_blockchain_state_command;
export type TGetBlockchainStateBroadCast = {
  blockchain_state: {
    peak: BlockRecord;
    genesis_challenge_initialized: bool;
    sync: {
      sync_mode: bool;
      synced: bool;
      sync_tip_height: uint32;
      sync_progress_height: uint32;
    };
    difficulty: uint64;
    sub_slot_iters: uint64;
    space: uint128;
    mempool_size: int;
  };
};
export async function on_get_blockchain_state(daemon: TDaemon, callback: (e: GetMessageType<rolls_full_node_service, get_blockchain_state_command, TGetBlockchainStateBroadCast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_full_node_service && e.command === get_blockchain_state_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_full_node_service, messageListener);
}

// Whole commands for the service
export type rolls_full_node_commands = get_blockchain_state_command;
export type TChiaFullNodeBroadcast = TGetBlockchainStateBroadCast;
export async function on_message_from_full_node(daemon: TDaemon, callback: (e: GetMessageType<rolls_full_node_service, rolls_full_node_commands, TChiaFullNodeBroadcast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_full_node_service){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_full_node_service, messageListener);
}