# API

There are 2 kinds of APIs in chia.  
`RPC API` and `Websocket API`

### RPC API
RPC API is used to send message directly to chia services like `farmer`, `harvester`, `full_node`, `wallet`.

RPC API is just an async function with a traditional request/response style.

### [RPCAgent](../rpc/README.md)
See how to instantiate RPCAgent before requesting RPC API [**>>here**](../rpc/README.md).


#### [Farmer RPC API](./rpc/farmer/README.md#usage)
- [`get_reward_targets`](./rpc/farmer/README.md#get_reward_targetsagent-params)
- [`get_signage_point`](./rpc/farmer/README.md#get_signage_pointagent-params)
- [`get_signage_points`](./rpc/farmer/README.md#get_signage_pointsagent)
- [`set_reward_targets`](./rpc/farmer/README.md#set_reward_targetsagent-params)
- [`get_pool_state`](./rpc/farmer/README.md#get_pool_stateagent)
- [`set_payout_instructions`](./rpc/farmer/README.md#set_payout_instructionsagent-params)
- [`get_harvesters`](./rpc/farmer/README.md#get_harvestersagent)
- [`get_pool_login_link`](./rpc/farmer/README.md#get_pool_login_linkagent-params)

#### [Full Node RPC API](./rpc/full_node/README.md#usage)
- [`get_blockchain_state`](./rpc/full_node/README.md#get_blockchain_stateagent)
- [`get_block`](./rpc/full_node/README.md#get_blockagent-params)
- [`get_blocks`](./rpc/full_node/README.md#get_blocksagent-params)
- [`get_block_record_by_height`](./rpc/full_node/README.md#get_block_record_by_heightagent-params)
- [`get_block_record`](./rpc/full_node/README.md#get_block_recordagent-params)
- [`get_block_records`](./rpc/full_node/README.md#get_block_recordsagent-params)
- [`get_unfinished_block_headers`](./rpc/full_node/README.md#get_unfinished_block_headersagent)
- [`get_network_space`](./rpc/full_node/README.md#get_network_spaceagent-params)
- [`get_additions_and_removals`](./rpc/full_node/README.md#get_additions_and_removalsagent-params)
- [`get_initial_freeze_period_of_full_node`](./rpc/full_node/README.md#get_initial_freeze_period_of_full_nodeagent)
- [`get_network_info_of_full_node`](./rpc/full_node/README.md#get_network_info_of_full_nodeagent)
- [`get_recent_signage_point_or_eos`](./rpc/full_node/README.md#get_recent_signage_point_or_eosagent-params)
- [`get_coin_records_by_puzzle_hash`](./rpc/full_node/README.md#get_coin_records_by_puzzle_hashagent-params)
- [`get_coin_records_by_puzzle_hashes`](./rpc/full_node/README.md#get_coin_records_by_puzzle_hashesagent-params)
- [`get_coin_record_by_name`](./rpc/full_node/README.md#get_coin_record_by_nameagent-params)
- [`get_coin_records_by_names`](./rpc/full_node/README.md#get_coin_records_by_namesagent-params)
- [`get_coin_records_by_parent_ids`](./rpc/full_node/README.md#get_coin_records_by_parent_idsagent-params)
- [`push_tx`](./rpc/full_node/README.md#push_txagent-params)
- [`get_puzzle_and_solution`](./rpc/full_node/README.md#get_puzzle_and_solutionagent-params)
- [`get_all_mempool_tx_ids`](./rpc/full_node/README.md#get_all_mempool_tx_idsagent)
- [`get_all_mempool_items`](./rpc/full_node/README.md#get_all_mempool_itemsagent)
- [`get_mempool_item_by_tx_id`](./rpc/full_node/README.md#get_mempool_item_by_tx_idagent-params)

#### [Harvester RPC API](./rpc/harvester/README.md#usage)
- [`get_plots`](./rpc/harvester/README.md#get_plotsagent)
- [`refresh_plots`](./rpc/harvester/README.md#refresh_plotsagent)
- [`delete_plot`](./rpc/harvester/README.md#delete_plotagent-params)
- [`add_plot_directory`](./rpc/harvester/README.md#add_plot_directoryagent-params)
- [`get_plot_directories`](./rpc/harvester/README.md#get_plot_directoriesagent)
- [`remove_plot_directory`](./rpc/harvester/README.md#remove_plot_directoryagent-params)

#### [Wallet RPC API](./rpc/wallet/README.md#usage)
- [`log_in`](./rpc/wallet/README.md#log_inagent-params)
- [`get_public_keys`](./rpc/wallet/README.md#get_public_keysagent)
- [`get_private_key`](./rpc/wallet/README.md#get_private_keyagent-params)
- [`generate_mnemonic`](./rpc/wallet/README.md#generate_mnemonicagent)
- [`add_key`](./rpc/wallet/README.md#add_keyagent-params)
- [`delete_key`](./rpc/wallet/README.md#delete_keyagent-params)
- [`check_delete_key`](./rpc/wallet/README.md#check_delete_keyagent-params).
- [`delete_all_keys`](./rpc/wallet/README.md#delete_all_keysagent)
- [`get_sync_status`](./rpc/wallet/README.md#get_sync_statusagent)
- [`get_height_info`](./rpc/wallet/README.md#get_height_infoagent)
- [`farm_block`](./rpc/wallet/README.md#farm_blockagent-params)
- [`get_initial_freeze_period_of_wallet`](./rpc/wallet/README.md#get_initial_freeze_period_of_walletagent)
- [`get_network_info_of_wallet`](./rpc/wallet/README.md#get_network_info_of_walletagent)
- [`get_wallets`](./rpc/wallet/README.md#get_walletsagent)
- [`create_new_wallet`](./rpc/wallet/README.md#create_new_walletagent-params)
- [`get_wallet_balance`](./rpc/wallet/README.md#get_wallet_balanceagent-params)
- [`get_transaction`](./rpc/wallet/README.md#get_transactionagent-params)
- [`get_transactions`](./rpc/wallet/README.md#get_transactionsagent-params)
- [`get_next_address`](./rpc/wallet/README.md#get_next_addressagent-params)
- [`send_transaction`](./rpc/wallet/README.md#send_transactionagent-params)
- [`send_transaction_multi`](./rpc/wallet/README.md#send_transaction_multiagent-params)
- [`create_backup`](./rpc/wallet/README.md#create_backupagent-params)
- [`get_transaction_count`](./rpc/wallet/README.md#get_transaction_countagent-params)
- [`get_farmed_amount`](./rpc/wallet/README.md#get_farmed_amountagent)
- [`create_signed_transaction`](./rpc/wallet/README.md#create_signed_transactionagent-params)
- [`delete_unconfirmed_transactions`](./rpc/wallet/README.md#delete_unconfirmed_transactionsagent-params)
- [`cc_set_name`](./rpc/wallet/README.md#cc_set_nameagent-params)
- [`cc_get_name`](./rpc/wallet/README.md#cc_get_nameagent-params)
- [`cc_spend`](./rpc/wallet/README.md#cc_spendagent-params)
- [`cc_get_colour`](./rpc/wallet/README.md#cc_get_colouragent-params)
- [`create_offer_for_ids`](./rpc/wallet/README.md#create_offer_for_idsagent-params)
- [`get_discrepancies_for_offer`](./rpc/wallet/README.md#get_discrepancies_for_offeragent-params)
- [`respond_to_offer`](./rpc/wallet/README.md#respond_to_offeragent-params)
- [`get_trade`](./rpc/wallet/README.md#get_tradeagent-params)
- [`get_all_trades`](./rpc/wallet/README.md#get_all_tradesagent)
- [`cancel_trade`](./rpc/wallet/README.md#cancel_tradeagent-params)
- [`did_update_recovery_ids`](./rpc/wallet/README.md#did_update_recovery_idsagent-params)
- [`did_get_pubkey`](./rpc/wallet/README.md#did_get_pubkeyagent-params)
- [`did_get_did`](./rpc/wallet/README.md#did_get_didagent-params)
- [`did_recovery_spend`](./rpc/wallet/README.md#did_recovery_spendagent-params)
- [`did_get_recovery_list`](./rpc/wallet/README.md#did_get_recovery_listagent-params)
- [`did_create_attest`](./rpc/wallet/README.md#did_create_attestagent-params)
- [`did_get_information_needed_for_recovery`](./rpc/wallet/README.md#did_get_information_needed_for_recoveryagent-params)
- [`did_create_backup_file`](./rpc/wallet/README.md#did_create_backup_fileagent-params)
- [`rl_set_user_info`](./rpc/wallet/README.md#rl_set_user_infoagent-params)
- [`send_clawback_transaction`](./rpc/wallet/README.md#send_clawback_transactionagent-params)
- [`add_rate_limited_funds`](./rpc/wallet/README.md#add_rate_limited_fundsagent-params)
- [`pw_join_pool`](./rpc/wallet/README.md#pw_join_poolagent-params)
- [`pw_self_pool`](./rpc/wallet/README.md#pw_self_poolagent-params)
- [`pw_absorb_rewards`](./rpc/wallet/README.md#pw_absorb_rewardsagent-params)
- [`pw_status`](./rpc/wallet/README.md#pw_statusagent-params)

#### [Pool API](./rpc/pool/README.md#usage)
- [`pool_info`](./rpc/pool/README.md#pool_infoagent)
- [`get_farmer`](./rpc/pool/README.md#get_farmeragent-params)
- [`post_farmer`](./rpc/pool/README.md#post_farmeragent-params)
- [`put_farmer`](./rpc/pool/README.md#put_farmeragent-params)
- [`partial`](./rpc/pool/README.md#partialagent-params)
- [`login`](./rpc/pool/README.md#loginagent-params)

### Websocket API
Websocket API is used to connect to chia `daemon`.  

With websocket API, you can request chia daemon to start/stop plotting or other services,  
or capture various broadcast messages like:  
- Plotting progress
- Farming info such as passed filter, proofs found, etc.

### [Daemon](../daemon/README.md)
See how to get Daemon instance before requesting Websocket API [**>>here**](../daemon/README.md).


#### [daemon](./ws/daemon/README.md#usage) 
- [`add_private_key`](./ws/daemon/README.md#add_private_keydaemon-params)
- [`check_keys`](./ws/daemon/README.md#check_keysdaemon-params)
- [`delete_all_keys`](./ws/daemon/README.md#delete_all_keysdaemon-params)
- [`delete_key_by_fingerprint`](./ws/daemon/README.md#delete_key_by_fingerprintdaemon-params)
- [`get_all_private_keys`](./ws/daemon/README.md#get_all_private_keysdaemon-params)
- [`get_first_private_key`](./ws/daemon/README.md#get_first_private_keydaemon-params)
- [`get_key_for_fingerprint`](./ws/daemon/README.md#get_key_for_fingerprintdaemon-params)
- [`ping`](./ws/daemon/README.md#pingdaemon)
- [`start_service`](./ws/daemon/README.md#start_servicedaemon-params)
- [`start_plotting`](./ws/daemon/README.md#start_plottingdaemon-params)
- [`stop_plotting`](./ws/daemon/README.md#stop_plottingdaemon-params)
- [`stop_service`](./ws/daemon/README.md#stop_servicedaemon-params)
- [`is_running`](./ws/daemon/README.md#is_runningdaemon-params)
- [`is_keyring_locked`](./ws/daemon/README.md#is_keyring_lockeddaemon)
- [`keyring_status`](./ws/daemon/README.md#keyring_statusdaemon)
- [`unlock_keyring`](./ws/daemon/README.md#unlock_keyringdaemon-params)
- [`validate_keyring_passphrase`](./ws/daemon/README.md#validate_keyring_passphrasedaemon-params)
- [`migrate_keyring`](./ws/daemon/README.md#migrate_keyringdaemon-params)
- [`set_keyring_passphrase`](./ws/daemon/README.md#set_keyring_passphrasedaemon-params)
- [`remove_keyring_passphrase`](./ws/daemon/README.md#remove_keyring_passphrasedaemon-params)
- [`notify_keyring_migration_completed`](./ws/daemon/README.md#notify_keyring_migration_completeddaemon-params)
- [`exit`](./ws/daemon/README.md#exitdaemon)
- [`register_service`](./ws/daemon/README.md#register_servicedaemon-params)
- [`get_status`](./ws/daemon/README.md#get_statusdaemon)
- [`get_plotters`](./ws/daemon/README.md#get_plottersdaemon)

Please note that Websocket APIs below is not request/response style but subscribe/listen style.  
You cannot ask services to reply requested data immediately.  
After subscribing message channels like `wallet_ui` or `rolls_plotter`,
you need to wait messages in the channel are arrived to your message listener.

#### [daemon](./ws/daemon/README.md#usagesubscription)
- [`keyring_status_changed`](./ws/daemon/README.md#on_keyring_status_changed)

#### [rolls_plots_create](./ws/rolls_plots_create/README.md#usage)
- [`state_changed`](./ws/rolls_plots_create/README.md#on_state_changed_of_plots)

#### [farmer](./ws/farmer/README.md#usage)
- [`new_farming_info`](./ws/farmer/README.md#on_new_farming_info)
- [`new_signage_point`](./ws/farmer/README.md#on_new_signage_point)
- [`new_plots`](./ws/farmer/README.md#on_new_plots)

#### [full_node](./ws/full_node/README.md#usage)
- [`get_blockchain_state`](./ws/full_node/README.md#on_get_blockchain_state)

#### [harvester](./ws/harvester/README.md#usage)
- [`get_plots`](./ws/harvester/README.md#on_get_plots)

#### [wallet](./ws/wallet/README.md#usage)
- [`state_changed`](./ws/wallet/README.md#on_state_changed_of_wallet)

### Log

You can change log level to suppress/output various internal logs.
```js
// Log level can be: "error", "warning", "info", "debug", "none"
// Default log level is "error"
const {setLogLevel} = require("rolls-agent");

setLogLevel("debug"); // show all available logs.
setLogLevel("info"); // show except for debug logs.
setLogLevel("warning"); // show warning and error logs.
setLogLevel("error"); // show only error logs.
setLogLevel("none"); // don't show any logs.
```
