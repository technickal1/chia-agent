import {float, int, Optional, str, uint64, uint8} from "rolls-agent/src/api/rolls/types/_python_types_";
import {PoolWalletConfig} from "rolls-agent/src/api/rolls/pools/pool_config";
import {ErrorResponse} from "rolls-agent/src/api/rolls/protocols/pool_protocol";

// dependency: self.pool_state, by: get_pool_state of Farmer RPC API
/*
if p2_singleton_puzzle_hash not in self.pool_state:
    self.authentication_keys[bytes(pool_config.authentication_public_key)] = authentication_sk
    self.pool_state[p2_singleton_puzzle_hash] = {
        "points_found_since_start": 0,
        "points_found_24h": [],
        "points_acknowledged_since_start": 0,
        "points_acknowledged_24h": [],
        "current_points_balance": 0,
        "current_difficulty": 10,
        "pool_errors_24h": [],
        "pool_info": {},
    }
    self.log.info(f"Added pool: {pool_config}")
self.pool_state[p2_singleton_puzzle_hash]["pool_config"] = pool_config

# Makes a GET request to the pool to get the updated information
async with aiohttp.ClientSession() as session:
    async with session.get(f"http://{pool_config.pool_url}/pool_info") as resp:
        if resp.ok:
            self.pool_state[p2_singleton_puzzle_hash]["pool_info"] = json.loads(await resp.text())
        else:
            self.log.error(f"Error fetching pool info from {pool_config.pool_url}, {resp.status}")
 */
export type PoolState = {
  points_found_since_start: int;
  points_found_24h: Array<[float, uint64]>;
  points_acknowledged_since_start: int;
  points_acknowledged_24h: Array<[float, uint64]>;
  next_farmer_update: float;
  next_pool_info_update: float;
  current_points: uint64;
  current_difficulty: uint64;
  pool_errors_24h: ErrorResponse[];
  authentication_token_timeout: uint8;
  pool_config: PoolWalletConfig;
  p2_singleton_puzzle_hash: str;
};

// depends: rpc_response in get_plots, by: get_plots of Farmer API
