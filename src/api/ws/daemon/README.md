# Daemon Websocket API

## Usage
You need to create Websocket connection before subscribing websocket messages.  
Unlike other websocket APIs, daemon websocket API is based on `request/response` style rather than `subscribe/listen`.  
Note: `subscribe/listen` style WebSocket API for daemon was introduced at `chia-blockchain@1.2.8`. See detail [here](./#usagesubscription)
```js
const {getDaemon} = require("rolls-agent");
const {start_plotting, is_running} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response1 = await start_plotting(daemon, {...});
const response2 = await is_running(daemon, {...});
await daemon.close();

/*
 * You can connect to other than localhost when you specify websocket server url.
 */
await daemon.connect("wss://host.name:1234");
...
```

---


## `ping(daemon)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {ping} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await ping(daemon);
```
### response:
```typescript
{
  success: bool;
  value: str; // "pong"
}
```

---

## `start_service(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {start_service} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await start_service(daemon, {service: "..."});
```
### params:
```typescript
{
  service: TService;
  testing?: bool;
}
```
where `TService` is one of
```typescript
"chia"|"rolls_wallet"|"rolls_full_node"|"rolls_harvester"|"rolls_farmer"
  |"rolls_introducer"|"rolls_timelord"|"rolls_timelord_launcher"|"rolls_full_node_simulator";
```
### response:
```typescript
{
  success: bool;
  service: str;
  error: Optional<str>;
}
```

---

## `start_plotting(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {start_plotting} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await start_plotting(daemon, params);
```
### params:
```typescript
{
  service: "rolls_plotter";
  delay?: int; // delay in seconds. Default: 0
  parallel?: bool; // parallel or serialize. Default: False
  k: int; // size. 32, 33, ...
  t: str; // tmp dir
  d: str; // final dir
  x?: bool; // exclude final dir. Skips adding [final dir] to harvester for farming. Default: False
  n?: int; // count of creating plot. Default: 1
  queue?: str; // queue name. Default: "default"
  r: int; // number of threads
  f?: str; // farmer public key.
  p?: str; // pool public key.
  c?: str; // pool contract address.
} & (chiapos_params | bladebit_params | madmax_params)
```
### chiapos_params:
```typescript
{
  plotter: "chiapos";
  t2: str; // tmp dir 2
  b: int; // memory buffer size in MiB
  u: int; // number of buckets
  a?: int; // wallet private key fingerprint
  e: bool; // disable bitfield plotting
  overrideK: bool; // Set true only if you want to use k < 32
}
```
### bladebit_params:
```typescript
{
  plotter: "bladebit";
  w?: bool; // Warm start. Default: False
  m?: bool; // Disable NUMA. Default: False
}
```
### madmax_params:
```typescript
{
  plotter: "madmax";
  t2: str; // tmp dir 2
  b: int; // memory buffer size in MiB
  u: int; // number of buckets
  v: int; // number of buckets for phase 3 & 4
  K?: int; // Thread multiplier for phase 2. Default: 1
  G?: bool; // Alternate tmpdir/tmp2dir. Default: False
}
```
### response:
```typescript
{
  success: bool;
  ids: str[];
  service_name: str; // should be 'rolls_plotter'
}
```

---

## `stop_plotting(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {stop_plotting} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await stop_plotting(daemon, {id: "..."});
```
### params:
```typescript
{
  id: str;
}
```
### response:
```typescript
{
  success: bool;
}
```

---

## `stop_service(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {stop_service} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await stop_service(daemon, {service: "..."});
```
### params:
```typescript
{
  service: str; // "rolls_farmer", "rolls_full_node", "rolls_harvester", "rolls_wallet"
}
```
### response:
```typescript
{
  success: bool;
}
```

---

## `is_running(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {is_running} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await is_running(daemon, {service: "rolls_farmer"});
```
### params:
```typescript
{
  service: str; // "rolls_farmer", "rolls_full_node", "rolls_harvester", "rolls_wallet"
}
```
### response:
```typescript
{
  success: bool;
  service_name: str;
  is_running: bool;
}
```

---

## `add_private_key(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {add_private_key} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await add_private_key(daemon, params);
```
### params:
```typescript
{
  kc_user?: str;
  kc_testing?: bool;
  mnemonic?: str;
  passphrase?: str;
}
```
### response:
```typescript
{
  success: bool;
  error?: str;
  error_details?: {message: str};
}
```

---

## `check_keys(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {check_keys} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await check_keys(daemon, params);
```
### params:
```typescript
{
  kc_user?: str;
  kc_testing?: bool;
  root_path: str;
}
```
### response:
```typescript
{
  success: bool;
  error?: str;
  error_details?: {message: str};
}
```

---

## `delete_all_keys(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {delete_all_keys} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await delete_all_keys(daemon, params);
```
### params:
```typescript
{
  kc_user?: str;
  kc_testing?: bool;
}
```
### response:
```typescript
{
  success: bool;
  error?: str;
  error_details?: {message: str};
}
```

---

## `delete_key_by_fingerprint(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {delete_key_by_fingerprint} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await delete_key_by_fingerprint(daemon, params);
```
### params:
```typescript
{
  kc_user?: str;
  kc_testing?: bool;
  fingerprint: int;
}
```
### response:
```typescript
{
  success: bool;
  error?: str;
  error_details?: {message: str};
}
```

---

## `get_all_private_keys(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {get_all_private_keys} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await get_all_private_keys(daemon, params);
```
### params:
```typescript
{
  kc_user?: str;
  kc_testing?: bool;
}
```
### response:
```typescript
{
  success: bool;
  error?: str;
  private_keys: Array<{pk: str; entropy: str}>;
}
```

---

## `get_first_private_key(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {get_first_private_key} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await get_first_private_key(daemon, params);
```
### params:
```typescript
{
  kc_user?: str;
  kc_testing?: bool;
}
```
### response:
```typescript
{
  success: bool;
  error?: str;
  private_key: {pk: str; entropy: str};
}
```

---

## `get_key_for_fingerprint(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {get_key_for_fingerprint} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await get_key_for_fingerprint(daemon, params);
```
### params:
```typescript
{
  kc_user?: str;
  kc_testing?: bool;
  fingerprint?: int;
}
```
### response:
```typescript
{
  success: bool;
  error?: str;
  pk: str;
  entropy: str;
}
```

---

## `is_keyring_locked(daemon)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {is_keyring_locked} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await is_keyring_locked(daemon);
```
### response:
```typescript
{
  success: bool;
  is_keyring_locked: bool;
}
```

---

## `keyring_status(daemon)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {keyring_status} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await keyring_status(daemon);
```
### response:
```typescript
{
  success: bool;
  is_keyring_locked: bool;
  passphrase_support_enabled: bool;
  can_save_passphrase: bool;
  user_passphrase_is_set: bool;
  needs_migration: bool;
  can_remove_legacy_keys: bool;
  can_set_passphrase_hint: bool;
  passphrase_hint: str;
  passphrase_requirements: {} | {
    is_optional: True;
    min_length: int;
  };
}
```

---

## `unlock_keyring(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {unlock_keyring} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await unlock_keyring(daemon, params);
```
### params:
```typescript
{
  key: string;
}
```
### response:
```typescript
{
  success: bool;
  error: string|None;
}
```

---

## `validate_keyring_passphrase(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {validate_keyring_passphrase} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await validate_keyring_passphrase(daemon, params);
```
### params:
```typescript
{
  key: string;
}
```
### response:
```typescript
{
  success: bool;
  error: string|None;
}
```

---

## `migrate_keyring(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {migrate_keyring} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await migrate_keyring(daemon, params);
```
### params:
```typescript
{
  passphrase?: str;
  passphrase_hint?: str;
  save_passphrase?: bool;
  cleanup_legacy_keyring?: bool;
}
```
### response:
```typescript
{
  success: bool;
  error: string|None;
}
```

---

## `set_keyring_passphrase(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {set_keyring_passphrase} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await set_keyring_passphrase(daemon, params);
```
### params:
```typescript
{
  current_passphrase: string;
  new_passphrase: string;
  passphrase_hint?: str;
  save_passphrase?: bool;
}
```
### response:
```typescript
{
  success: bool;
  error: string;
}
```

---

## `remove_keyring_passphrase(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {remove_keyring_passphrase} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await remove_keyring_passphrase(daemon, params);
```
### params:
```typescript
{
  current_passphrase: str;
}
```
### response:
```typescript
{
  success: bool;
  error: string;
}
```

---

## `notify_keyring_migration_completed(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {notify_keyring_migration_completed} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await notify_keyring_migration_completed(daemon, params);
```
### params:
```typescript
{
  key: str;
}
```
### response:
```typescript
{
  success: bool;
  error: string;
}
```

---

## `exit(daemon)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {exit} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await exit(daemon);
```
### response:
```typescript
{
  success: bool;
}
```

---

## `register_service(daemon, params)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {register_service} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await register_service(daemon, {service: "wallet_ui"});
```
### params:
```typescript
{
  service: str; // typically "wallet_ui" or "rolls_plotter"
}
```
### response:
```typescript
{
  success: bool;
} | {
  success: bool;
  service: str;
  queue: Array<{
    id: str;
    queue: str;
    size: int;
    parallel: bool;
    delay: int;
    state: str;
    error: Optional<str>;
    deleted: bool;
    log_new: str;
    log?: str;
  }>;
}
```

---

## `get_status(daemon)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {get_status} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await get_status(daemon);
```
### response:
```typescript
{
  success: bool;
  genesis_initialized: True;
}
```

---

## `get_plotters(daemon)`
### Usage
```js
const {getDaemon} = require("rolls-agent");
const {get_plotters} = require("rolls-agent/api/ws");
const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.
const response = await get_plotters(daemon);
```
### response:
```typescript
{
  success: bool;
  plotters: {
    chiapos?: chiapos_install_info;
    bladebit?: bladebit_install_info;
    madmax?: madmax_install_info;
  }
}
```
For content of `chiapos_install_info`, `bladebit_install_info`, `madmax_install_info`,  
see https://github.com/Chia-Mine/rolls-agent/blob/main/src/api/chia/plotters/


---

## Usage(Subscription)
Starting from `chia-blockchain@1.2.8`, `subscribe/listen` style WebSocket API was introduced to `daemon` service.  
Here's an example.
```js
const {getDaemon} = require("rolls-agent");
const {on_keyring_status_changed} = require("rolls-agent/api/ws");

const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.

const unsubscribe = await on_keyring_status_changed(daemon, (event) => {
  console.log(e.data);
  
  // Close connection if you don't need it anymore.
  if(...){
    unsubscribe(); // stop listening to this ws message.
  }
});
...
```

---

### `on_keyring_status_changed`
Capture broadcast message of command `on_keyring_status_changed` from `daemon` service.

#### Usage
```typescript
const {getDaemon} = require("rolls-agent");
const {on_keyring_status_changed} = require("rolls-agent/api/ws");

const daemon = getDaemon();
await daemon.connect();
const unsubscribe = await on_keyring_status_changed(daemon, (event) => {
  // Format of `event` object is desribed below.
  ...
});
...
unsubscribe(); // Stop subscribing messages
```
#### event:
```typescript
{
  origin: "daemon";
  command: "keyring_status_changed";
  ack: boolean;
  data: /*See below*/;
  request_id: string;
  destination: "wallet_ui";
}
```
#### data:
```typescript
{
  success: bool;
  is_keyring_locked: bool;
  passphrase_support_enabled: bool;
  user_passphrase_is_set: bool;
  needs_migration: bool;
  passphrase_requirements: {} | {
    is_optional: True;
    min_length: int;
  };
}
```
