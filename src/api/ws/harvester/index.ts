import {Plot} from "rolls-agent/src/api/rolls/harvester/harvester";
import {TDaemon} from "rolls-agent/src/daemon";
import {GetMessageType, wallet_ui_service} from "rolls-agent/src/api/types";
import {WsMessage} from "rolls-agent/src/api/ws";

export const rolls_harvester_service = "rolls_harvester";
export type rolls_harvester_service = typeof rolls_harvester_service;

export const get_plots_command = "get_plots";
export type get_plots_command = typeof get_plots_command;
export type TGetPlotsBroadCast = {
  plots: Plot[];
  failed_to_open_filenames: string[];
  not_found_filenames: string[];
};
export async function on_get_plots(daemon: TDaemon, callback: (e: GetMessageType<rolls_harvester_service, get_plots_command, TGetPlotsBroadCast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_harvester_service && e.command === get_plots_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_harvester_service, messageListener);
}

// Whole commands for the service
export type rolls_harvester_commands = get_plots_command;
export type TChiaHarvesterBroadcast = TGetPlotsBroadCast;
export async function on_message_from_harvester(daemon: TDaemon, callback: (e: GetMessageType<rolls_harvester_service, rolls_harvester_commands, TChiaHarvesterBroadcast>) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_harvester_service){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_harvester_service, messageListener);
}