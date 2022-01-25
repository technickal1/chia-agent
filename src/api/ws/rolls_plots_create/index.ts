import {TPlotQueue} from "rolls-agent/src/api/ws/daemon";
import {TDaemon} from "rolls-agent/src/daemon";
import {GetMessageType} from "rolls-agent/src/api/types";
import {WsMessage} from "rolls-agent/src/api/ws";

export const rolls_plotter_service = "rolls_plotter";
export type rolls_plotter_service = typeof rolls_plotter_service;

export const state_changed_command_of_plots = "state_changed";
export type state_changed_command_of_plots = typeof state_changed_command_of_plots;
export type TStateChangedBroadCastOfPlots = {
  state: "log_changed"|"state_changed";
  queue: TPlotQueue[];
};
export async function on_state_changed_of_plots(daemon: TDaemon, callback: (e: GetMessageType<rolls_plotter_service, state_changed_command_of_plots, TStateChangedBroadCastOfPlots>) => unknown){
  await daemon.subscribe(rolls_plotter_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_plotter_service && e.command === state_changed_command_of_plots){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_plotter_service, messageListener);
}

// Whole commands for the service
export type rolls_plots_create_commands = state_changed_command_of_plots;
export type TChiaPlotsCreateBroadcast = TStateChangedBroadCastOfPlots;
export async function on_message_from_rolls_plots_create(daemon: TDaemon, callback: (e: GetMessageType<rolls_plotter_service, rolls_plots_create_commands, TChiaPlotsCreateBroadcast>) => unknown){
  await daemon.subscribe(rolls_plotter_service);
  const messageListener = (e: WsMessage) => {
    if(e.origin === rolls_plotter_service){
      callback(e);
    }
  };
  return daemon.addMessageListener(rolls_plotter_service, messageListener);
}

