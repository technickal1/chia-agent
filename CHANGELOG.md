# Changelog

## [3.0.0]
### Minor Breaking Change
- Service name of plotter was changed:  
  `chia plots create` => `rolls_plotter`.  
  If you have a code which starts plotting via daemon websocket API, you might write like this:  
  ```typescript
  const {getDaemon} = require("rolls-agent");
  const {start_plotting} = require("rolls-agent/api/ws");
  const daemon = getDaemon(); // This is the websocket connection handler
  await daemon.connect(); // connect to local daemon using config file.
  const response = await start_plotting(daemon, {service: "chia plots create", ...});
  ```
  On and after chia-blockchain@1.2.11, you must rewrite the last line of the above code like this:  
  ```typescript
  const response = await start_plotting(daemon, {service: "rolls_plotter", ...});
  ```
  Please note you need to also update other code lines which refers to old service name(`chia plots create`).
### Changed
- Updated [`start_plotting`](./src/api/ws/daemon/README.md#start_plottingdaemon-params) of Daemon Websocket API
- Updated [`create_new_wallet`](./src/api/rpc/wallet/README.md#create_new_walletagent-params) of Wallet RPC API
- Updated [`get_trade`](./src/api/rpc/wallet/README.md#get_tradeagent-params) of Wallet RPC API
- Updated [`pw_join_pool`](./src/api/rpc/wallet/README.md#pw_join_poolagent-params) of Wallet RPC API
- Updated [`pw_self_pool`](./src/api/rpc/wallet/README.md#pw_self_poolagent-params) of Wallet RPC API
- Updated [`pw_absorb_rewards`](./src/api/rpc/wallet/README.md#pw_absorb_rewardsagent-params) of Wallet RPC API
- Updated [`pw_status`](./src/api/rpc/wallet/README.md#pw_statusagent-params) of Wallet RPC API
### Added
- [New daemon api](./src/api/ws/daemon)
  - [`get_plotters`](./src/api/ws/daemon/README.md#get_plottersdaemon)

## [2.0.6]
### Changed
- Updated [`keyring_status`](./src/api/ws/daemon/README.md#keyring_statusdaemon) of Daemon Websocket API
- Updated [`migrate_keyring`](./src/api/ws/daemon/README.md#migrate_keyringdaemon-params)
- Updated [`set_keyring_passphrase`](./src/api/ws/daemon/README.md#set_keyring_passphrasedaemon-params)

## [2.0.5]
### Changed
- Updated [`keyring_status`](./src/api/ws/daemon/README.md#keyring_statusdaemon) of Daemon Websocket API
- Updated [`start_plotting`](./src/api/ws/daemon/README.md#start_plottingdaemon-params) of Daemon Websocket API
### Fixed
- Added missing properties for
  - [`ping`](./src/api/ws/daemon/README.md#pingdaemon)
  - [`start_service`](./src/api/ws/daemon/README.md#start_servicedaemon-params)
  - [`start_plotting`](./src/api/ws/daemon/README.md#start_plottingdaemon-params)
  - [`stop_plotting`](./src/api/ws/daemon/README.md#stop_plottingdaemon-params)
  - [`stop_service`](./src/api/ws/daemon/README.md#stop_servicedaemon-params)
  - [`is_running`](./src/api/ws/daemon/README.md#is_runningdaemon-params)
  - [`exit`](./src/api/ws/daemon/README.md#exitdaemon)
  - [`get_status`](./src/api/ws/daemon/README.md#get_statusdaemon)
  - [`stop_service`](./src/api/ws/daemon/README.md#stop_servicedaemon-params)
### Added
- [New daemon api](./src/api/ws/daemon)
  - [`validate_keyring_passphrase`](./src/api/ws/daemon/README.md#validate_keyring_passphrasedaemon-params)
  - [`migrate_keyring`](./src/api/ws/daemon/README.md#migrate_keyringdaemon-params)
  - [`notify_keyring_migration_completed`](./src/api/ws/daemon/README.md#notify_keyring_migration_completeddaemon-params)
  - [`keyring_status_changed`](./src/api/ws/daemon/README.md#on_keyring_status_changed)
### Deprecated
- `did_spend`  
  Note: `chia-blockchain` no longer responds to `/did_spend` wallet API endpoint on and after 1.2.8.  
  For now, I don't remove `/did_spend` from `rolls-agent` but only remove from API document.

## [2.0.4]
This release corresponds to chia-blockchain@1.2.6, which introduced no external API changes.

## [2.0.3]
This release corresponds to chia-blockchain@1.2.5 which only updates install script.  
There are no API changes at all.

## [2.0.2]
### Changed
- Update documents
- Updated [`get_public_keys`](./src/api/rpc/wallet/README.md#get_public_keysagent) of Wallet RPC API
- Updated [`add_key`](./src/api/rpc/wallet/README.md#add_keyagent-params) of Wallet RPC API
- Updated [`delete_all_keys`](./src/api/rpc/wallet/README.md#delete_all_keysagent) of Wallet RPC API
- Updated [`get_initial_freeze_period`](./src/api/rpc/wallet/README.md#get_initial_freeze_period_of_walletagent) of Wallet RPC API
### Added
- [New daemon api](./src/api/ws/daemon)
  - [`add_private_key`](./src/api/ws/daemon/README.md#add_private_keydaemon-params)
  - [`check_keys`](./src/api/ws/daemon/README.md#check_keysdaemon-params)
  - [`delete_all_keys`](./src/api/ws/daemon/README.md#delete_all_keysdaemon-params)
  - [`delete_key_by_fingerprint`](./src/api/ws/daemon/README.md#delete_key_by_fingerprintdaemon-params)
  - [`get_all_private_keys`](./src/api/ws/daemon/README.md#get_all_private_keysdaemon-params)
  - [`get_first_private_key`](./src/api/ws/daemon/README.md#get_first_private_keydaemon-params)
  - [`get_key_for_fingerprint`](./src/api/ws/daemon/README.md#get_key_for_fingerprintdaemon-params)
  - [`is_keyring_locked`](./src/api/ws/daemon/README.md#is_keyring_lockeddaemon)
  - [`keyring_status`](./src/api/ws/daemon/README.md#keyring_statusdaemon)
  - [`remove_keyring_passphrase`](./src/api/ws/daemon/README.md#remove_keyring_passphrasedaemon-params)
  - [`set_keyring_passphrase`](./src/api/ws/daemon/README.md#set_keyring_passphrasedaemon-params)
  - [`unlock_keyring`](./src/api/ws/daemon/README.md#unlock_keyringdaemon-params)
- [New full_node api](./src/api/rpc/full_node)
  - [`get_coin_records_by_name`](./src/api/rpc/full_node/README.md#get_coin_records_by_namesagent-params)

## [2.0.1]
### Added
- [`on_new_plots`](./src/api/ws/farmer/README.md#on_new_plots)

## [2.0.0]
I incremented major version. See "Changed" section for detail.

### Changed
- Rename `CoinSolution` to `CoinSpend` and updated affected API response format.
  - **Note: this introduces breaking changes to some API response format.**  
    For additional information, please see https://github.com/Chia-Network/chia-blockchain/commit/6cf29102f95b410a8c6dc416e612c998bac567fa#comments

### Added
- Added [`get_coin_records_by_parent_ids`](./rpc/full_node/README.md#get_coin_records_by_parent_idsagent-params)

## [1.1.0] - 2021-07-08
### Changed
- Update G1Element/G2Element type to `string` (Serialized hex string representation)
- Updated [`get_private_key`](./src/api/rpc/wallet/README.md#get_private_keyagent-params)

### Added
- [New pool protocol/api](./src/api/rpc/pool)
  - [`pool_info`](./src/api/rpc/pool/README.md#pool_infoagent)
  - [`get_farmer`](./src/api/rpc/pool/README.md#get_farmeragent-params)
  - [`post_farmer`](./src/api/rpc/pool/README.md#post_farmeragent-params)
  - [`put_farmer`](./src/api/rpc/pool/README.md#put_farmeragent-params)
  - [`partial`](./src/api/rpc/pool/README.md#partialagent-params)
  - [`login`](./src/api/rpc/pool/README.md#loginagent-params)
- [New farmer api](./src/api/rpc/farmer)
  - [`get_pool_state`](./src/api/rpc/farmer/README.md#get_pool_stateagent)
  - [`set_payout_instructions`](./src/api/rpc/farmer/README.md#set_payout_instructionsagent-params)
  - [`get_harvesters`](./src/api/rpc/farmer/README.md#get_harvestersagent)
- [New full_node api](./src/api/rpc/full_node)
  - [`get_recent_signage_point_or_eos`](./src/api/rpc/full_node/README.md#get_recent_signage_point_or_eosagent-params)
  - [`get_puzzle_and_solution`](./src/api/rpc/full_node/README.md#get_puzzle_and_solutionagent-params)
- [New wallet api](./src/api/rpc/wallet)
  - [`delete_unconfirmed_transactions`](./src/api/rpc/wallet/README.md#delete_unconfirmed_transactionsagent-params)
  - [`check_delete_key`](./src/api/rpc/wallet/README.md#check_delete_keyagent-params).
  - [`send_transaction_multi`](./src/api/rpc/wallet/README.md#send_transaction_multiagent-params)
  - [`pw_join_pool`](./src/api/rpc/wallet/README.md#pw_join_poolagent-params)
  - [`pw_self_pool`](./src/api/rpc/wallet/README.md#pw_self_poolagent-params)
  - [`pw_absorb_rewards`](./src/api/rpc/wallet/README.md#pw_absorb_rewardsagent-params)
  - [`pw_status`](./src/api/rpc/wallet/README.md#pw_statusagent-params)
- Added type [TCreate_New_Pool_WalletRequest](./src/api/rpc/wallet/README.md#create_new_walletagent-params)
- Added type [TCreate_New_Pool_WalletResponse](./src/api/rpc/wallet/README.md#create_new_walletagent-params)
- Added type [PoolWalletInfo](./src/api/chia/wallet/wallet_info.ts)
- Added [BUILD.md](./BUILD.md)

### Fixed
- Fixed RPC API document links
- Fixed the type of `SerializedProgram` to `str`
- Fixed an issue where submodule could not be loaded. e.g. `const {...} = require("rolls-agent/api/rpc");`
- Correct type name `TCreate_New_RC_WalletRequest/Response` to `TCreate_New_RL_WalletRequest/Response`
- Fixed wrong `create_new_wallet` request format
- Fixed an issue where array data in YAML file was not parsed as expected.
- Fixed `login` response json of Wallet RPC API
- Fixed `get_private_key` response json of Wallet RPC API
- Fixed `create_offer_for_ids` response json of Wallet RPC API
- Fixed `get_discrepancies_for_offer` response json of Wallet RPC API
- Fixed `did_get_pubkey` response json of Wallet RPC API
- Fixed `did_recovery_spend` response json of Wallet RPC API



## [1.0.1] - 2021-05-19
### Fixed
- Only fixed typo in README.md

## [1.0.0] - 2021-05-19
### Added
- Added new RPC client
- Added new RPC API
- Added new Websocket API
- Added API type definitions
- Added code samples

## [0.0.5] - 2021-05-13
### Changed
- Reorganized internal log level and locations.
- `daemon.connect()` resolves to boolean value indicating whether connecting is success or failure.
- Trying to re-connect to an url which is already active does not output warning anymore.

### Added
- Added types

### Fixed
- Fixed an issue where it could fail to catch response from chia daemon.

## [0.0.4] - 2021-05-13
### Fixed
- Fixed an issue where some requests were not responded by chia daemon.

## [0.0.3] - 2021-05-13
### Changed
- Changed argument order for `daemon.sendMessage` for previous one was not intuitive.

```js
// Old
daemon.sendMessage(get_block_record_by_height_command, destination, data);
// Now
daemon.sendMessage(destination, get_block_record_by_height_command, data);
```

## [0.0.2] - 2021-05-13
### Fixed
- Fixed an issue where it cannot be executed via `npx` command.

## [0.0.1] - 2021-05-13
Initial release.

<!-- [Unreleased]: https://github.com/Chia-Mine/rolls-agent/compare/v0.0.1...v0.0.2 -->
[3.0.0]: https://github.com/Chia-Mine/rolls-agent/compare/v2.0.6...v3.0.0
[2.0.6]: https://github.com/Chia-Mine/rolls-agent/compare/v2.0.5...v2.0.6
[2.0.5]: https://github.com/Chia-Mine/rolls-agent/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/Chia-Mine/rolls-agent/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/Chia-Mine/rolls-agent/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/Chia-Mine/rolls-agent/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/Chia-Mine/rolls-agent/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/Chia-Mine/rolls-agent/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/Chia-Mine/rolls-agent/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/Chia-Mine/rolls-agent/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Chia-Mine/rolls-agent/compare/v0.0.5...v1.0.0
[0.0.5]: https://github.com/Chia-Mine/rolls-agent/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/Chia-Mine/rolls-agent/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/Chia-Mine/rolls-agent/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/Chia-Mine/rolls-agent/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/Chia-Mine/rolls-agent/releases/tag/v0.0.1
