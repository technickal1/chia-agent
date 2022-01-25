import {FullBlock} from "rolls-agent/src/api/rolls/types/full_block";
import {BlockRecord} from "rolls-agent/src/api/rolls/consensus/block_record";
import {bool, float, int, Optional, str, uint128, uint32, uint64} from "rolls-agent/src/api/rolls/types/_python_types_";
import {UnfinishedHeaderBlock} from "rolls-agent/src/api/rolls/types/unfinished_header_block";
import {CoinRecord} from "rolls-agent/src/api/rolls/types/coin_record";
import {SpendBundle} from "rolls-agent/src/api/rolls/types/spend_bundle";
import {bytes32} from "rolls-agent/src/api/rolls/types/blockchain_format/sized_bytes";
import {MempoolItem} from "rolls-agent/src/api/rolls/types/mempool_item";
import {TRPCAgent} from "rolls-agent/src/rpc";
import {EndOfSubSlotBundle} from "rolls-agent/src/api/rolls/types/end_of_slot_bundle";
import {SignagePoint} from "rolls-agent/src/api/rolls/full_node/signage_point";
import {CoinSpend} from "rolls-agent/src/api/rolls/types/coin_spend";

export const rolls_full_node_service = "rolls_full_node";
export type rolls_full_node_service = typeof rolls_full_node_service;

export const get_blockchain_state_command = "get_blockchain_state";
export type get_blockchain_state_command = typeof get_blockchain_state_command;
export type TGetBlockchainStateRequest = {
};
export type TGetBlockchainStateResponse = {
  blockchain_state: {
    peak: Optional<BlockRecord>;
    genesis_challenge_initialized: bool;
    sync: {
      sync_mode: bool;
      synced: bool;
      sync_tip_height: uint32; // full_node_rpc_api.py declares Optional<uint32> but it seems 
      sync_progress_height: uint32;
    },
    difficulty: uint64;
    sub_slot_iters: uint64;
    space: uint128;
    mempool_size: int;
  };
};
export async function get_blockchain_state(agent: TRPCAgent) {
  return agent.sendMessage<TGetBlockchainStateResponse>(rolls_full_node_service, get_blockchain_state_command);
}



export const get_block_command = "get_block";
export type get_block_command = typeof get_block_command;
export type TGetBlockRequest = {
  header_hash: str;
};
export type TGetBlockResponse = {
  block: FullBlock;
}
export async function get_block(agent: TRPCAgent, data: TGetBlockRequest) {
  return agent.sendMessage<TGetBlockResponse>(rolls_full_node_service, get_block_command, data);
}



export const get_blocks_command = "get_blocks";
export type get_blocks_command = typeof get_blocks_command;
export type TGetBlocksRequest = {
  start: int;
  end: int;
  exclude_header_hash?: bool;
};
export type TGetBlocksResponse = {
  blocks: FullBlock[] | Array<FullBlock & {header_hash: str}>;
}
export async function get_blocks(agent: TRPCAgent, data: TGetBlocksRequest) {
  return agent.sendMessage<TGetBlocksResponse>(rolls_full_node_service, get_blocks_command, data);
}



export const get_block_record_by_height_command = "get_block_record_by_height";
export type get_block_record_by_height_command = typeof get_block_record_by_height_command;
export type TGetBlockRecordByHeightRequest = {
  height: int;
};
export type TGetBlockRecordByHeightResponse = {
  block_record: Optional<BlockRecord>;
};
export async function get_block_record_by_height(agent: TRPCAgent, data: TGetBlockRecordByHeightRequest) {
  return agent.sendMessage<TGetBlockRecordByHeightResponse>(rolls_full_node_service, get_block_record_by_height_command, data);
}



export const get_block_record_command = "get_block_record";
export type get_block_record_command = typeof get_block_record_command;
export type TGetBlockRecordRequest = {
  header_hash: str;
};
export type TGetBlockRecordResponse = {
  block_record: BlockRecord;
};
export async function get_block_record(agent: TRPCAgent, data: TGetBlockRecordRequest) {
  return agent.sendMessage<TGetBlockRecordResponse>(rolls_full_node_service, get_block_record_command, data);
}



export const get_block_records_command = "get_block_records";
export type get_block_records_command = typeof get_block_records_command;
export type TGetBlockRecordsRequest = {
  start: int;
  end: int;
};
export type TGetBlockRecordsResponse = {
  block_records: BlockRecord[];
};
export async function get_block_records(agent: TRPCAgent, data: TGetBlockRecordsRequest) {
  return agent.sendMessage<TGetBlockRecordsResponse>(rolls_full_node_service, get_block_records_command, data);
}



export const get_unfinished_block_headers_command = "get_unfinished_block_headers";
export type get_unfinished_block_headers_command = typeof get_unfinished_block_headers_command;
export type TGetUnfinishedBlockHeadersRequest = {
};
export type TGetUnfinishedBlockHeadersResponse = {
  headers: UnfinishedHeaderBlock[];
};
export async function get_unfinished_block_headers(agent: TRPCAgent) {
  return agent.sendMessage<TGetUnfinishedBlockHeadersResponse>(rolls_full_node_service, get_unfinished_block_headers_command);
}



export const get_network_space_command = "get_network_space";
export type get_network_space_command = typeof get_network_space_command;
export type TGetNetworkSpaceRequest = {
  newer_block_header_hash: str;
  older_block_header_hash: str;
};
export type TGetNetworkSpaceResponse = {
  space: uint128;
};
export async function get_network_space(agent: TRPCAgent, data: TGetNetworkSpaceRequest) {
  return agent.sendMessage<TGetNetworkSpaceResponse>(rolls_full_node_service, get_network_space_command, data);
}



export const get_additions_and_removals_command = "get_additions_and_removals";
export type get_additions_and_removals_command = typeof get_additions_and_removals_command;
export type TGetAdditionsAndRemovalsRequest = {
  header_hash: str;
};
export type TGetAdditionsAndRemovalsResponse = {
  additions: CoinRecord[];
  removals: CoinRecord[];
};
export async function get_additions_and_removals(agent: TRPCAgent, data: TGetAdditionsAndRemovalsRequest) {
  return agent.sendMessage<TGetAdditionsAndRemovalsResponse>(rolls_full_node_service, get_additions_and_removals_command, data);
}



export const get_initial_freeze_period_command_of_full_node = "get_initial_freeze_period";
export type get_initial_freeze_period_command_of_full_node = typeof get_initial_freeze_period_command_of_full_node;
export type TGetInitialFreezePeriodRequestOfFullNode = {
};
export type TGetInitialFreezePeriodResponseOfFullNode = {
  INITIAL_FREEZE_END_TIMESTAMP: uint64;
};
export async function get_initial_freeze_period_of_full_node(agent: TRPCAgent) {
  return agent.sendMessage<TGetInitialFreezePeriodResponseOfFullNode>(rolls_full_node_service, get_initial_freeze_period_command_of_full_node);
}



export const get_network_info_command_of_full_node = "get_network_info";
export type get_network_info_command_of_full_node = typeof get_network_info_command_of_full_node;
export type TGetNetworkInfoRequestOfFullNode = {
};
export type TGetNetworkInfoResponseOfFullNode = {
  network_name: str;
  network_prefix: str;
};
export async function get_network_info_of_full_node(agent: TRPCAgent) {
  return agent.sendMessage<TGetNetworkInfoResponseOfFullNode>(rolls_full_node_service, get_network_info_command_of_full_node);
}



export const get_recent_signage_point_or_eos_command = "get_recent_signage_point_or_eos";
export type get_recent_signage_point_or_eos_command = typeof get_recent_signage_point_or_eos_command;
export type TGetRecentSignagePointOrEOSCommandRequest = {
  challenge_hash: str;
} | {
  sp_hash: str;
};
export type TGetRecentSignagePointOrEOSCommandResponse = {
  eos: EndOfSubSlotBundle;
  time_received: float;
  reverted: bool;
} | {
  signage_point: SignagePoint;
  time_received: float;
  reverted: bool;
};
export async function get_recent_signage_point_or_eos(agent: TRPCAgent, data: TGetRecentSignagePointOrEOSCommandRequest) {
  return agent.sendMessage<TGetRecentSignagePointOrEOSCommandResponse>(rolls_full_node_service, get_recent_signage_point_or_eos_command, data);
}



export const get_coin_records_by_puzzle_hash_command = "get_coin_records_by_puzzle_hash";
export type get_coin_records_by_puzzle_hash_command = typeof get_coin_records_by_puzzle_hash_command;
export type TGetCoinRecordsByPuzzleHashRequest = {
  puzzle_hash: str;
  start_height: uint32;
  end_height: uint32;
  include_spent_coins: bool;
};
export type TGetCoinRecordsByPuzzleHashResponse = {
  coin_records: CoinRecord[];
};
export async function get_coin_records_by_puzzle_hash(agent: TRPCAgent, data: TGetCoinRecordsByPuzzleHashRequest) {
  return agent.sendMessage<TGetCoinRecordsByPuzzleHashResponse>(rolls_full_node_service, get_coin_records_by_puzzle_hash_command, data);
}



export const get_coin_records_by_puzzle_hashes_command = "get_coin_records_by_puzzle_hashes";
export type get_coin_records_by_puzzle_hashes_command = typeof get_coin_records_by_puzzle_hashes_command;
export type TGetCoinRecordsByPuzzleHashesRequest = {
  puzzle_hashes: str[];
  start_height: uint32;
  end_height: uint32;
  include_spent_coins: bool;
};
export type TGetCoinRecordsByPuzzleHashesResponse = {
  coin_records: CoinRecord[];
};
export async function get_coin_records_by_puzzle_hashes(agent: TRPCAgent, data: TGetCoinRecordsByPuzzleHashesRequest) {
  return agent.sendMessage<TGetCoinRecordsByPuzzleHashesResponse>(rolls_full_node_service, get_coin_records_by_puzzle_hashes_command, data);
}



export const get_coin_record_by_name_command = "get_coin_record_by_name";
export type get_coin_record_by_name_command = typeof get_coin_record_by_name_command;
export type TGetCoinRecordByNameRequest = {
  name: str;
};
export type TGetCoinRecordByNameResponse = {
  coin_record: CoinRecord;
};
export async function get_coin_record_by_name(agent: TRPCAgent, data: TGetCoinRecordByNameRequest) {
  return agent.sendMessage<TGetCoinRecordByNameResponse>(rolls_full_node_service, get_coin_record_by_name_command, data);
}



export const get_coin_records_by_names_command = "get_coin_records_by_names";
export type get_coin_records_by_names_command = typeof get_coin_records_by_names_command;
export type TGetCoinRecordsByNamesRequest = {
  names: str[];
  start_height?: uint32;
  end_height?: uint32;
  include_spent_coins?: bool;
};
export type TGetCoinRecordsByNamesResponse = {
  coin_records: CoinRecord[];
};
export async function get_coin_records_by_names(agent: TRPCAgent, data: TGetCoinRecordsByNamesRequest) {
  return agent.sendMessage<TGetCoinRecordsByNamesResponse>(rolls_full_node_service, get_coin_records_by_names_command, data);
}




export const get_coin_records_by_parent_ids_command = "get_coin_records_by_parent_ids";
export type get_coin_records_by_parent_ids_command = typeof get_coin_records_by_parent_ids_command;
export type TGetCoinRecordsByParentIdsRequest = {
  parent_ids: str[];
  start_height?: uint32;
  end_height?: uint32;
  include_spent_coins?: bool;
};
export type TGetCoinRecordsByParentIdsResponse = {
  coin_records: CoinRecord[];
};



export const push_tx_command = "push_tx";
export type push_tx_command = typeof push_tx_command;
export type TPushTxRequest = {
  spend_bundle: SpendBundle;
};
export type TPushTxResponse = {
  status: str; // Enum.name
};
export async function push_tx(agent: TRPCAgent, data: TPushTxRequest) {
  return agent.sendMessage<TPushTxResponse>(rolls_full_node_service, push_tx_command, data);
}



export const get_puzzle_and_solution_command = "get_puzzle_and_solution";
export type get_puzzle_and_solution_command = typeof get_puzzle_and_solution_command;
export type TGetPuzzleAndSolutionRequest = {
  coin_id: str;
  height: uint32;
};
export type TGetPuzzleAndSolutionResponse = {
  coin_solution: CoinSpend;
};
export async function get_puzzle_and_solution(agent: TRPCAgent, data: TGetPuzzleAndSolutionRequest) {
  return agent.sendMessage<TGetPuzzleAndSolutionResponse>(rolls_full_node_service, get_puzzle_and_solution_command, data);
}



export const get_all_mempool_tx_ids_command = "get_all_mempool_tx_ids";
export type get_all_mempool_tx_ids_command = typeof get_all_mempool_tx_ids_command;
export type TGetAllMempoolTxIdsRequest = {
};
export type TGetAllMempoolTxIdsResponse = {
  tx_ids: bytes32[];
};
export async function get_all_mempool_tx_ids(agent: TRPCAgent) {
  return agent.sendMessage<TGetAllMempoolTxIdsResponse>(rolls_full_node_service, get_all_mempool_tx_ids_command);
}



export const get_all_mempool_items_command = "get_all_mempool_items";
export type get_all_mempool_items_command = typeof get_all_mempool_items_command;
export type TGetAllMempoolItemsRequest = {
};
export type TGetAllMempoolItemsResponse = {
  mempool_items: Record<string, MempoolItem>;
};
export async function get_all_mempool_items(agent: TRPCAgent) {
  return agent.sendMessage<TGetAllMempoolItemsResponse>(rolls_full_node_service, get_all_mempool_items_command);
}



export const get_mempool_item_by_tx_id_command = "get_mempool_item_by_tx_id";
export type get_mempool_item_by_tx_id_command = typeof get_mempool_item_by_tx_id_command;
export type TGetMempoolItemByTxIdRequest = {
  tx_id: str;
};
export type TGetMempoolItemByTxIdResponse = {
  mempool_item: MempoolItem;
};
export async function get_mempool_item_by_tx_id(agent: TRPCAgent, data: TGetMempoolItemByTxIdRequest) {
  return agent.sendMessage<TGetMempoolItemByTxIdResponse>(rolls_full_node_service, get_mempool_item_by_tx_id_command, data);
}
