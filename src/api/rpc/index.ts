import type {
  TGetRewardTargetResponse,
  TGetSignagePointResponse,
  TGetSignagePointsResponse,
  TSetRewardTargetResponse,
  TGetHarvestersResponse,
  TSetPayoutInstructionsResponse,
  TGetPoolStateResponse,
} from "rolls-agent/src/api/rpc/farmer";
export {
  rolls_farmer_service,
  TGetRewardTargetRequest,
  TGetRewardTargetResponse,
  TGetSignagePointRequest,
  TGetSignagePointResponse,
  TGetSignagePointsRequest,
  TGetSignagePointsResponse,
  TSetRewardTargetRequest,
  TSetRewardTargetResponse,
  TGetHarvestersRequest,
  TGetHarvestersResponse,
  TSetPayoutInstructionsRequest,
  TSetPayoutInstructionsResponse,
  TGetPoolStateRequest,
  TGetPoolStateResponse,
  get_reward_targets,
  get_signage_point,
  get_signage_points,
  set_reward_targets,
  get_harvesters,
  set_pool_payout_instructions,
  get_pool_state,
} from "rolls-agent/src/api/rpc/farmer";
import type {
  TGetAdditionsAndRemovalsResponse,
  TGetAllMempoolItemsResponse,
  TGetAllMempoolTxIdsResponse,
  TGetBlockRecordByHeightResponse,
  TGetBlockRecordResponse,
  TGetBlockRecordsResponse,
  TGetBlockResponse,
  TGetBlockchainStateResponse,
  TGetBlocksResponse,
  TGetRecentSignagePointOrEOSCommandResponse,
  TGetCoinRecordByNameResponse,
  TGetCoinRecordsByPuzzleHashResponse,
  TGetCoinRecordsByPuzzleHashesResponse,
  TGetInitialFreezePeriodResponseOfFullNode,
  TGetMempoolItemByTxIdResponse,
  TGetNetworkInfoResponseOfFullNode,
  TGetNetworkSpaceResponse,
  TGetUnfinishedBlockHeadersResponse,
  TPushTxResponse,
} from "rolls-agent/src/api/rpc/full_node";
export {
  rolls_full_node_service,
  TGetAdditionsAndRemovalsRequest,
  TGetAdditionsAndRemovalsResponse,
  TGetAllMempoolItemsRequest,
  TGetAllMempoolItemsResponse,
  TGetAllMempoolTxIdsRequest,
  TGetAllMempoolTxIdsResponse,
  TGetBlockRecordByHeightRequest,
  TGetBlockRecordByHeightResponse,
  TGetBlockRecordRequest,
  TGetBlockRecordResponse,
  TGetBlockRecordsRequest,
  TGetBlockRecordsResponse,
  TGetBlockRequest,
  TGetBlockResponse,
  TGetBlockchainStateRequest,
  TGetBlockchainStateResponse,
  TGetBlocksRequest,
  TGetBlocksResponse,
  TGetRecentSignagePointOrEOSCommandRequest,
  TGetRecentSignagePointOrEOSCommandResponse,
  TGetCoinRecordByNameRequest,
  TGetCoinRecordByNameResponse,
  TGetCoinRecordsByPuzzleHashRequest,
  TGetCoinRecordsByPuzzleHashResponse,
  TGetCoinRecordsByPuzzleHashesRequest,
  TGetCoinRecordsByPuzzleHashesResponse,
  TGetInitialFreezePeriodRequestOfFullNode,
  TGetInitialFreezePeriodResponseOfFullNode,
  TGetMempoolItemByTxIdRequest,
  TGetMempoolItemByTxIdResponse,
  TGetNetworkInfoRequestOfFullNode,
  TGetNetworkInfoResponseOfFullNode,
  TGetNetworkSpaceRequest,
  TGetNetworkSpaceResponse,
  TGetUnfinishedBlockHeadersRequest,
  TGetUnfinishedBlockHeadersResponse,
  TPushTxRequest,
  TPushTxResponse,
  get_additions_and_removals,
  get_all_mempool_items,
  get_all_mempool_tx_ids,
  get_block,
  get_block_record,
  get_block_record_by_height,
  get_block_records,
  get_blockchain_state,
  get_blocks,
  get_recent_signage_point_or_eos,
  get_coin_record_by_name,
  get_coin_records_by_puzzle_hash,
  get_coin_records_by_puzzle_hashes,
  get_initial_freeze_period_of_full_node,
  get_mempool_item_by_tx_id,
  get_network_info_of_full_node,
  get_network_space,
  get_unfinished_block_headers,
  push_tx,
} from "rolls-agent/src/api/rpc/full_node";

import type {
  TAddPlotDirectoryResponse,
  TDeletePlotResponse,
  TGetPlotDirectoriesResponse,
  TGetPlotsResponse,
  TRefreshPlotsResponse,
  TRemovePlotDirectoryResponse,
} from "rolls-agent/src/api/rpc/harvester";
export {
  rolls_harvester_service,
  TAddPlotDirectoryRequest,
  TAddPlotDirectoryResponse,
  TDeletePlotRequest,
  TDeletePlotResponse,
  TGetPlotDirectoriesRequest,
  TGetPlotDirectoriesResponse,
  TGetPlotsRequest,
  TGetPlotsResponse,
  TRefreshPlotsRequest,
  TRefreshPlotsResponse,
  TRemovePlotDirectoryRequest,
  TRemovePlotDirectoryResponse,
  add_plot_directory,
  delete_plot,
  get_plot_directories,
  get_plots,
  refresh_plots,
  remove_plot_directory,
} from "rolls-agent/src/api/rpc/harvester";

import type {
  rolls_wallet_service,
  TAddKeyResponse,
  TAddRateLimitedFundsResponse,
  TCancelTradeResponse,
  TCcGetColourResponse,
  TCcGetNameResponse,
  TCcSetNameResponse,
  TCcSpendResponse,
  TCreateBackupResponse,
  TCreateNewWalletResponse,
  TCreateOfferForIdsResponse,
  TCreateSignedTransactionResponse,
  TDeleteAllKeysResponse,
  TDeleteKeyResponse,
  TDidCreateAttestResponse,
  TDidCreateBackupFileResponse,
  TDidGetDidResponse,
  TDidGetInformationNeededForRecoveryResponse,
  TDidGetPubkeyResponse,
  TDidGetRecoveryListResponse,
  TDidRecoverySpendResponse,
  TDidSpendResponse,
  TDidUpdateRecoveryIdsResponse,
  TFarmBlockResponse,
  TGenerateMnemonicResponse,
  TGetAllTradesResponse,
  TGetDiscrepanciesForOfferResponse,
  TGetFarmedAmountResponse,
  TGetHeightInfoResponse,
  TGetInitialFreezePeriodResponseOfWallet,
  TGetNetworkInfoResponseOfWallet,
  TGetNextAddressResponse,
  TGetPrivateKeyResponse,
  TGetPublicKeysResponse,
  TGetSyncStatusResponse,
  TGetTradeResponse,
  TGetTransactionCountResponse,
  TGetTransactionResponse,
  TGetTransactionsResponse,
  TGetWalletBalanceResponse,
  TGetWalletsResponse,
  TLoginResponse,
  TPwJoinPoolRequest,
  TPwSelfPoolRequest,
  TPwAbsorbRewardsResponse,
  TPwStatusResponse,
  TResponseToOfferResponse,
  TRlSetUserInfoResponse,
  TSendClawbackTransactionResponse,
  TSendTransactionResponse,
  TSendTransactionMultiResponse, TPwJoinPoolResponse, TPwSelfPoolResponse,
} from "rolls-agent/src/api/rpc/wallet";
export {
  rolls_wallet_service,
  TAddKeyRequest,
  TAddKeyResponse,
  TAddRateLimitedFundsRequest,
  TAddRateLimitedFundsResponse,
  TAdditions,
  TCancelTradeRequest,
  TCancelTradeResponse,
  TCcGetColourRequest,
  TCcGetColourResponse,
  TCcGetNameRequest,
  TCcGetNameResponse,
  TCcSetNameRequest,
  TCcSetNameResponse,
  TCcSpendRequest,
  TCcSpendResponse,
  TCreateBackupRequest,
  TCreateBackupResponse,
  TCreateNewWalletRequest,
  TCreateNewWalletResponse,
  TCreateOfferForIdsRequest,
  TCreateOfferForIdsResponse,
  TCreateSignedTransactionRequest,
  TCreateSignedTransactionResponse,
  TCreate_New_CC_WalletRequest,
  TCreate_New_CC_WalletResponse,
  TCreate_New_DID_WalletRequest,
  TCreate_New_DID_WalletResponse,
  TCreate_New_RL_WalletRequest,
  TCreate_New_RL_WalletResponse,
  TDeleteAllKeysRequest,
  TDeleteAllKeysResponse,
  TDeleteKeyRequest,
  TDeleteKeyResponse,
  TDidCreateAttestRequest,
  TDidCreateAttestResponse,
  TDidCreateBackupFileRequest,
  TDidCreateBackupFileResponse,
  TDidGetDidRequest,
  TDidGetDidResponse,
  TDidGetInformationNeededForRecoveryRequest,
  TDidGetInformationNeededForRecoveryResponse,
  TDidGetPubkeyRequest,
  TDidGetPubkeyResponse,
  TDidGetRecoveryListRequest,
  TDidGetRecoveryListResponse,
  TDidRecoverySpendRequest,
  TDidRecoverySpendResponse,
  TDidSpendRequest,
  TDidSpendResponse,
  TDidUpdateRecoveryIdsRequest,
  TDidUpdateRecoveryIdsResponse,
  TFarmBlockRequest,
  TFarmBlockResponse,
  TGenerateMnemonicRequest,
  TGenerateMnemonicResponse,
  TGetAllTradesRequest,
  TGetAllTradesResponse,
  TGetDiscrepanciesForOfferRequest,
  TGetDiscrepanciesForOfferResponse,
  TGetFarmedAmountRequest,
  TGetFarmedAmountResponse,
  TGetHeightInfoRequest,
  TGetHeightInfoResponse,
  TGetInitialFreezePeriodRequestOfWallet,
  TGetInitialFreezePeriodResponseOfWallet,
  TGetNetworkInfoRequestOfWallet,
  TGetNetworkInfoResponseOfWallet,
  TGetNextAddressRequest,
  TGetNextAddressResponse,
  TGetPrivateKeyRequest,
  TGetPrivateKeyResponse,
  TGetPublicKeysRequest,
  TGetPublicKeysResponse,
  TGetSyncStatusRequest,
  TGetSyncStatusResponse,
  TGetTradeRequest,
  TGetTradeResponse,
  TGetTransactionCountRequest,
  TGetTransactionCountResponse,
  TGetTransactionRequest,
  TGetTransactionResponse,
  TGetTransactionsRequest,
  TGetTransactionsResponse,
  TGetWalletBalanceRequest,
  TGetWalletBalanceResponse,
  TGetWalletsRequest,
  TGetWalletsResponse,
  TLoginRequest,
  TLoginResponse,
  TPwJoinPoolRequest,
  TPwJoinPoolResponse,
  TPwSelfPoolRequest,
  TPwSelfPoolResponse,
  TPwAbsorbRewardsRequest,
  TPwAbsorbRewardsResponse,
  TPwStatusRequest,
  TPwStatusResponse,
  TResponseToOfferRequest,
  TResponseToOfferResponse,
  TRlSetUserInfoRequest,
  TRlSetUserInfoResponse,
  TSendClawbackTransactionRequest,
  TSendClawbackTransactionResponse,
  TSendTransactionRequest,
  TSendTransactionResponse,
  TSendTransactionMultiRequest,
  TSendTransactionMultiResponse,
  add_key,
  add_rate_limited_funds,
  cancel_trade,
  cc_get_colour,
  cc_get_name,
  cc_set_name,
  cc_spend,
  create_backup,
  create_new_wallet,
  create_offer_for_ids,
  create_signed_transaction,
  delete_all_keys,
  delete_key,
  did_create_attest,
  did_create_backup_file,
  did_get_did,
  did_get_information_needed_for_recovery,
  did_get_pubkey,
  did_get_recovery_list,
  did_recovery_spend,
  did_spend,
  did_update_recovery_ids,
  farm_block,
  generate_mnemonic,
  get_all_trades,
  get_discrepancies_for_offer,
  get_farmed_amount,
  get_height_info,
  get_initial_freeze_period_of_wallet,
  get_network_info_of_wallet,
  get_next_address,
  get_private_key,
  get_public_keys,
  get_sync_status,
  get_trade,
  get_transaction,
  get_transaction_count,
  get_transactions,
  get_wallet_balance,
  get_wallets,
  log_in,
  pw_join_pool,
  pw_self_pool,
  pw_absorb_rewards,
  pw_status,
  respond_to_offer,
  rl_set_user_info,
  send_clawback_transaction,
  send_transaction,
  send_transaction_multi,
} from "rolls-agent/src/api/rpc/wallet";



export type RpcFarmerMessage =
  TGetRewardTargetResponse
  | TGetSignagePointResponse
  | TGetSignagePointsResponse
  | TSetRewardTargetResponse
  | TGetHarvestersResponse
  | TSetPayoutInstructionsResponse
  | TGetPoolStateResponse
;
export type RpcFullNodeMessage =
  TGetAdditionsAndRemovalsResponse
  | TGetAllMempoolItemsResponse
  | TGetAllMempoolTxIdsResponse
  | TGetBlockResponse
  | TGetBlockRecordByHeightResponse
  | TGetBlockRecordResponse
  | TGetBlockRecordsResponse
  | TGetBlockchainStateResponse
  | TGetBlocksResponse
  | TGetRecentSignagePointOrEOSCommandResponse
  | TGetCoinRecordByNameResponse
  | TGetCoinRecordsByPuzzleHashResponse
  | TGetCoinRecordsByPuzzleHashesResponse
  | TGetInitialFreezePeriodResponseOfFullNode
  | TGetMempoolItemByTxIdResponse
  | TGetNetworkInfoResponseOfFullNode
  | TGetNetworkSpaceResponse
  | TGetUnfinishedBlockHeadersResponse
  | TPushTxResponse
;
export type RpcHarvesterMessage =
  TAddPlotDirectoryResponse
  | TDeletePlotResponse
  | TGetPlotDirectoriesResponse
  | TGetPlotsResponse
  | TRefreshPlotsResponse
  | TRemovePlotDirectoryResponse
;
export type RpcWalletMessage =
  TAddKeyResponse
  | TAddRateLimitedFundsResponse
  | TCancelTradeResponse
  | TCcGetColourResponse
  | TCcGetNameResponse
  | TCcSetNameResponse
  | TCcSpendResponse
  | TCreateBackupResponse
  | TCreateNewWalletResponse
  | TCreateOfferForIdsResponse
  | TCreateSignedTransactionResponse
  | TDeleteAllKeysResponse
  | TDeleteKeyResponse
  | TDidCreateAttestResponse
  | TDidCreateBackupFileResponse
  | TDidGetDidResponse
  | TDidGetInformationNeededForRecoveryResponse
  | TDidGetPubkeyResponse
  | TDidGetRecoveryListResponse
  | TDidRecoverySpendResponse
  | TDidSpendResponse
  | TDidUpdateRecoveryIdsResponse
  | TFarmBlockResponse
  | TGenerateMnemonicResponse
  | TGetAllTradesResponse
  | TGetDiscrepanciesForOfferResponse
  | TGetFarmedAmountResponse
  | TGetHeightInfoResponse
  | TGetInitialFreezePeriodResponseOfWallet
  | TGetNetworkInfoResponseOfWallet
  | TGetNextAddressResponse
  | TGetPrivateKeyResponse
  | TGetPublicKeysResponse
  | TGetSyncStatusResponse
  | TGetTradeResponse
  | TGetTransactionResponse
  | TGetTransactionCountResponse
  | TGetTransactionsResponse
  | TGetWalletBalanceResponse
  | TGetWalletsResponse
  | TLoginResponse
  | TPwJoinPoolResponse
  | TPwSelfPoolResponse
  | TPwAbsorbRewardsResponse
  | TPwStatusResponse
  | TResponseToOfferResponse
  | TRlSetUserInfoResponse
  | TSendClawbackTransactionResponse
  | TSendTransactionResponse
  | TSendTransactionMultiResponse
;

export type RpcMessage = RpcFarmerMessage | RpcFullNodeMessage | RpcHarvesterMessage | RpcWalletMessage;