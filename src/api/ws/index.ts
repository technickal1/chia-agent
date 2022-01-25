import {GetMessageType} from "rolls-agent/src/api/types";
import type {
  rolls_farmer_service,
  new_farming_info_command,
  new_signage_point_command,
  new_plots_command,
  TNewFarmingInfoBroadCast,
  TNewSignagePointBroadCast,
  TNewPlotsBroadCast,
} from "rolls-agent/src/api/ws/farmer";
export {
  rolls_farmer_service,
  TChiaFarmerBroadcast,
  TNewSignagePointBroadCast,
  TNewFarmingInfoBroadCast,
  TNewPlotsBroadCast,
  on_message_from_farmer,
  on_new_farming_info,
  on_new_signage_point,
  on_new_plots,
} from "rolls-agent/src/api/ws/farmer";

import type {
  rolls_full_node_service,
  get_blockchain_state_command,
  TGetBlockchainStateBroadCast,
} from "rolls-agent/src/api/ws/full_node";
export {
  rolls_full_node_service,
  TChiaFullNodeBroadcast,
  TGetBlockchainStateBroadCast,
  on_message_from_full_node,
  on_get_blockchain_state, 
} from "rolls-agent/src/api/ws/full_node";

import type {
  rolls_harvester_service,
  get_plots_command,
  TGetPlotsBroadCast,
} from "rolls-agent/src/api/ws/harvester";
export {
  rolls_harvester_service,
  TChiaHarvesterBroadcast,
  TGetPlotsBroadCast,
  on_message_from_harvester,
  on_get_plots, 
} from "rolls-agent/src/api/ws/harvester";

import type {
  rolls_wallet_service,
  state_changed_command_of_wallet,
  TStateChangedBroadCastOfWallet,
} from "rolls-agent/src/api/ws/wallet";
export {
  rolls_wallet_service,
  TChiaWalletBroadcast,
  TStateChangedBroadCastOfWallet,
  on_message_from_wallet,
  on_state_changed_of_wallet,
} from "rolls-agent/src/api/ws/wallet";

import type {
  rolls_plotter_service,
  state_changed_command_of_plots,
  TStateChangedBroadCastOfPlots,
} from "rolls-agent/src/api/ws/rolls_plots_create";
export {
  rolls_plotter_service,
  state_changed_command_of_plots,
  TStateChangedBroadCastOfPlots,
  on_state_changed_of_plots,
} from "rolls-agent/src/api/ws/rolls_plots_create";

import type {
  daemon_service,
  exit_command,
  get_status_command,
  get_plotters_command,
  is_running_command,
  add_private_key_command,
  check_keys_command,
  delete_all_keys_command,
  delete_key_by_fingerprint_command,
  get_all_private_keys_command,
  get_first_private_key_command,
  get_key_for_fingerprint_command,
  is_keyring_locked_command,
  keyring_status_command,
  unlock_keyring_command,
  set_keyring_passphrase_command,
  remove_keyring_passphrase_command,
  ping_command,
  register_service_command,
  start_plotting_command,
  start_service_command,
  stop_plotting_command,
  stop_service_command,
  migrate_keyring_command,
  notify_keyring_migration_completed_command,
  keyring_status_changed_command,
  validate_keyring_passphrase_command,
  TExitResponse,
  TGetStatusResponse,
  TGetPlottersResponse,
  TIsRunningResponse,
  TAddPrivateKeyResponse,
  TCheckKeysResponse,
  TDeleteAllKeysResponse,
  TDeleteKeyByFingerprintResponse,
  TGetAllPrivateKeysResponse,
  TGetFirstPrivateKeyResponse,
  TGetKeyForFingerprintResponse,
  TIsKeyringLockedResponse,
  TKeyringStatusResponse,
  TUnlockKeyringResponse,
  TSetKeyringPassphraseResponse,
  TRemoveKeyringPassphraseResponse,
  TPingResponse,
  TRegisterServiceResponse,
  TStartPlottingResponse,
  TStartServiceResponse,
  TStopPlottingResponse,
  TStopServiceResponse,
  TMigrateKeyringResponse,
  TNotifyKeyringMigrationCompletedResponse,
  TKeyringStatusChangedBroadCast,
  TValidateKeyringPassphraseResponse,
} from "rolls-agent/src/api/ws/daemon";
export {
  daemon_service,
  TRegisterServiceResponse, 
  TStartPlottingResponse, 
  TStartServiceResponse, 
  TStopPlottingResponse, 
  TStopServiceResponse,
  TExitResponse,
  TGetStatusResponse,
  TGetPlottersResponse,
  TIsRunningResponse,
  TAddPrivateKeyResponse,
  TCheckKeysResponse,
  TDeleteAllKeysResponse,
  TDeleteKeyByFingerprintResponse,
  TGetAllPrivateKeysResponse,
  TGetFirstPrivateKeyResponse,
  TGetKeyForFingerprintResponse,
  TIsKeyringLockedResponse,
  TKeyringStatusResponse,
  TUnlockKeyringResponse,
  TMigrateKeyringResponse,
  TSetKeyringPassphraseResponse,
  TRemoveKeyringPassphraseResponse,
  TNotifyKeyringMigrationCompletedResponse,
  TPingResponse,
  TKeyringStatusChangedBroadCast,
  TValidateKeyringPassphraseResponse,
  TStopPlottingRequest,
  TRegisterServiceRequest,
  TPlotQueue,
  TPingRequest,
  TGetStatusRequest,
  TGetPlottersRequest,
  TStartServiceRequest,
  TStartPlottingRequest,
  TStopServiceRequest,
  TIsRunningRequest,
  TAddPrivateKeyRequest,
  TCheckKeysRequest,
  TDeleteAllKeysRequest,
  TDeleteKeyByFingerprintRequest,
  TGetAllPrivateKeysRequest,
  TGetFirstPrivateKeyRequest,
  TGetKeyForFingerprintRequest,
  TUnlockKeyringRequest,
  TMigrateKeyringRequest,
  TSetKeyringPassphraseRequest,
  TRemoveKeyringPassphraseRequest,
  TNotifyKeyringMigrationCompletedRequest,
  TExitRequest,
  TValidateKeyringPassphraseRequest,
  get_status,
  get_plotters,
  ping_command, 
  stop_service, 
  stop_plotting, 
  start_service, 
  exit_command, 
  start_plotting, 
  register_service, 
  ping, 
  is_running,
  add_private_key,
  check_keys,
  delete_all_keys,
  delete_key_by_fingerprint,
  get_all_private_keys,
  get_first_private_key,
  get_key_for_fingerprint,
  is_keyring_locked,
  keyring_status,
  unlock_keyring,
  migrate_keyring,
  set_keyring_passphrase,
  remove_keyring_passphrase,
  notify_keyring_migration_completed,
  exit,
  on_keyring_status_changed,
  validate_keyring_passphrase,
} from "rolls-agent/src/api/ws/daemon";


export type WsFarmerMessage =
  GetMessageType<rolls_farmer_service, new_farming_info_command, TNewFarmingInfoBroadCast>
  | GetMessageType<rolls_farmer_service, new_signage_point_command, TNewSignagePointBroadCast>
  | GetMessageType<rolls_farmer_service, new_plots_command, TNewPlotsBroadCast>
  ;

export type WsFullNodeMessage =
  GetMessageType<rolls_full_node_service, get_blockchain_state_command, TGetBlockchainStateBroadCast>;

export type WsHarvesterMessage =
  GetMessageType<rolls_harvester_service, get_plots_command, TGetPlotsBroadCast>;

export type WsWalletMessage =
  GetMessageType<rolls_wallet_service, state_changed_command_of_wallet, TStateChangedBroadCastOfWallet>;

export type WsPlotsMessage =
  GetMessageType<rolls_plotter_service, state_changed_command_of_plots, TStateChangedBroadCastOfPlots>;

export type WsDaemonMessage =
  GetMessageType<daemon_service, exit_command, TExitResponse>
  | GetMessageType<daemon_service, get_status_command, TGetStatusResponse>
  | GetMessageType<daemon_service, get_plotters_command, TGetPlottersResponse>
  | GetMessageType<daemon_service, is_running_command, TIsRunningResponse>
  | GetMessageType<daemon_service, ping_command, TPingResponse>
  | GetMessageType<daemon_service, register_service_command, TRegisterServiceResponse>
  | GetMessageType<daemon_service, start_plotting_command, TStartPlottingResponse>
  | GetMessageType<daemon_service, start_service_command, TStartServiceResponse>
  | GetMessageType<daemon_service, stop_plotting_command, TStopPlottingResponse>
  | GetMessageType<daemon_service, stop_service_command, TStopServiceResponse>
  | GetMessageType<daemon_service, add_private_key_command, TAddPrivateKeyResponse>
  | GetMessageType<daemon_service, check_keys_command, TCheckKeysResponse>
  | GetMessageType<daemon_service, delete_all_keys_command, TDeleteAllKeysResponse>
  | GetMessageType<daemon_service, delete_key_by_fingerprint_command, TDeleteKeyByFingerprintResponse>
  | GetMessageType<daemon_service, get_all_private_keys_command, TGetAllPrivateKeysResponse>
  | GetMessageType<daemon_service, get_first_private_key_command, TGetFirstPrivateKeyResponse>
  | GetMessageType<daemon_service, get_key_for_fingerprint_command, TGetKeyForFingerprintResponse>
  | GetMessageType<daemon_service, is_keyring_locked_command, TIsKeyringLockedResponse>
  | GetMessageType<daemon_service, keyring_status_command, TKeyringStatusResponse>
  | GetMessageType<daemon_service, unlock_keyring_command, TUnlockKeyringResponse>
  | GetMessageType<daemon_service, validate_keyring_passphrase_command, TValidateKeyringPassphraseResponse>
  | GetMessageType<daemon_service, migrate_keyring_command, TMigrateKeyringResponse>
  | GetMessageType<daemon_service, set_keyring_passphrase_command, TSetKeyringPassphraseResponse>
  | GetMessageType<daemon_service, remove_keyring_passphrase_command, TRemoveKeyringPassphraseResponse>
  | GetMessageType<daemon_service, notify_keyring_migration_completed_command, TNotifyKeyringMigrationCompletedResponse>
  | GetMessageType<daemon_service, keyring_status_changed_command, TKeyringStatusChangedBroadCast>
  ;



export type WsMessage = WsFarmerMessage | WsFullNodeMessage | WsHarvesterMessage | WsWalletMessage | WsPlotsMessage
  | WsDaemonMessage;
