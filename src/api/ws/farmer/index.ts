import {ProofOfSpace} from "rolls-agent/src/api/rolls/types/blockchain_format/proof_of_space";
import {NewSignagePoint} from "rolls-agent/src/api/rolls/protocols/farmer_protocol";
import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";
import {uint32, uint64} from "rolls-agent/src/api/rolls/types/_python_types_";
import {TDaemon} from "rolls-agent/src/daemon";
import {GetMessageType, wallet_ui_service} from "rolls-agent/src/api/types";
import {WsMessage} from "rolls-agent/src/api/ws";
import {TGetHarvestersResponse} from "rolls-agent/src/api/rpc/farmer";

export const rolls_farmer_service = "rolls_farmer";
export type rolls_farmer_service = typeof rolls_farmer_service;

export const new_farming_info_command = "new_farming_info";
export type new_farming_info_command = typeof new_farming_info_command;
export type TNewFarmingInfoBroadCast = {
  farming_info: {
    challenge_hash: bytes32;
    signage_point: bytes32;
    passed_filter: uint32;
    proofs: uint32;
    total_plots: uint32;
    timestamp: uint64;
  }
};
export async function on_new_farming_info(daemon: TDaemon, callback: (e: GetMessageType<rolls_farmer_service, new_farming_info_command, TNewFarmingInfoBroadCast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_farmer_service && e.command === new_farming_info_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_farmer_service, messageListener);
}

export const new_signage_point_command = "new_signage_point";
export type new_signage_point_command = typeof new_signage_point_command;
export type TNewSignagePointBroadCast = {
  proofs: ProofOfSpace[];
  signage_point: NewSignagePoint;
};
export async function on_new_signage_point(daemon: TDaemon, callback: (e: GetMessageType<rolls_farmer_service, new_signage_point_command, TNewSignagePointBroadCast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_farmer_service && e.command === new_signage_point_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_farmer_service, messageListener);
}

export const new_plots_command = "get_harvesters"; // not "new_plots" for now.
export type new_plots_command = typeof new_plots_command;
export type TNewPlotsBroadCast = TGetHarvestersResponse;
export async function on_new_plots(daemon: TDaemon, callback: (e: GetMessageType<rolls_farmer_service, new_plots_command, TNewPlotsBroadCast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_farmer_service && e.command === new_plots_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_farmer_service, messageListener);
}

// Whole commands for the service
export type rolls_farmer_commands = new_farming_info_command | new_signage_point_command | new_plots_command;
export type TChiaFarmerBroadcast = TNewFarmingInfoBroadCast | TNewSignagePointBroadCast | TNewPlotsBroadCast;
export async function on_message_from_farmer(daemon: TDaemon, callback: (e: GetMessageType<rolls_farmer_service, rolls_farmer_commands, TChiaFarmerBroadcast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_farmer_service){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_farmer_service, messageListener);
}