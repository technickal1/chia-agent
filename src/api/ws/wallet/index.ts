import {TDaemon} from "rolls-agent/src/daemon";
import {GetMessageType, wallet_ui_service} from "rolls-agent/src/api/types";
import {WsMessage} from "rolls-agent/src/api/ws";

export const rolls_wallet_service = "rolls_wallet";
export type rolls_wallet_service = typeof rolls_wallet_service;

export const state_changed_command_of_wallet = "state_changed";
export type state_changed_command_of_wallet = typeof state_changed_command_of_wallet;
export type TStateChangedBroadCastOfWallet = {
  state: unknown;
  wallet_id?: unknown;
  additional_data?: unknown;
};
export async function on_state_changed_of_wallet(daemon: TDaemon, callback: (e: GetMessageType<rolls_wallet_service, state_changed_command_of_wallet, TStateChangedBroadCastOfWallet>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_wallet_service && e.command === state_changed_command_of_wallet){
      callback(e);
    }
  };
  return daemon.addMessageListener(state_changed_command_of_wallet, messageListener);
}

// Whole commands for the service
export type rolls_wallet_commands = state_changed_command_of_wallet;
export type TChiaWalletBroadcast = TStateChangedBroadCastOfWallet;
export async function on_message_from_wallet(daemon: TDaemon, callback: (e: GetMessageType<rolls_wallet_service, rolls_wallet_commands, TChiaWalletBroadcast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_wallet_service){
      callback(e);
    }
  };
  return daemon.addMessageListener(state_changed_command_of_wallet, messageListener);
}