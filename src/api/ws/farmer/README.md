# Websocket Message from Farmer service

### `on_message_from_farmer`
Capture all broadcast messages coming from `rolls_farmer` service.

#### Usage
You need to create Websocket connection before subscribing websocket messages.
```js
const {getDaemon} = require("rolls-agent");
const {on_message_from_farmer} = require("rolls-agent/api/ws");

const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.

// Capture all messages from `rolls_farmer`
const unsubscribe = await on_message_from_farmer(daemon, (event) => {
  console.log(e.data);

  // Close connection if you don't need it anymore.
  if(...){
    unsubscribe(); // stop listening to this ws message.
  }
});
...
```

---

### `on_new_farming_info`
Capture broadcast message of command `new_farming_info` from `rolls_farmer` service.

#### Usage
```typescript
const {getDaemon} = require("rolls-agent");
const {on_new_farming_info} = require("rolls-agent/api/ws");

const daemon = getDaemon();
await daemon.connect();
const unsubscribe = await on_new_farming_info(daemon, (event) => {
  // Format of `event` object is desribed below.
  ...
});
...
unsubscribe(); // Stop subscribing messages
```

#### event:
```typescript
{
  origin: "rolls_farmer";
  command: "new_farming_info";
  ack: boolean;
  data: /*See below*/;
  request_id: string;
  destination: string;
}
```
#### data:
```typescript
{
  farming_info: {
    challenge_hash: bytes32;
    signage_point: bytes32;
    passed_filter: uint32;
    proofs: uint32;
    total_plots: uint32;
    timestamp: uint64;
  }
}
```

---

### `on_new_signage_point`
Capture broadcast message of command `new_signage_point` from `rolls_farmer` service.

#### Usage
```typescript
const {getDaemon} = require("rolls-agent");
const {on_new_signage_point} = require("rolls-agent/api/ws");

const daemon = getDaemon();
await daemon.connect();
const unsubscribe = await on_new_signage_point(daemon, (event) => {
  // Format of `event` object is desribed below.
  ...
});
...
unsubscribe(); // Stop subscribing messages
```

#### event:
```typescript
{
  origin: "rolls_farmer";
  command: "new_signage_point";
  ack: boolean;
  data: /*See below*/;
  request_id: string;
  destination: string;
}
```
#### data:
```typescript
{
  proofs: ProofOfSpace[];
  signage_point: NewSignagePoint;
}
```
For content of `ProofOfSpace`,  
see https://github.com/Chia-Mine/rolls-agent/blob/main/src/api/chia/types/blockchain_format/proof_of_space.ts

For content of `NewSignagePoint`  
see https://github.com/Chia-Mine/rolls-agent/blob/main/src/api/chia/protocols/farmer_protocol.ts

---

### `on_new_plots`
Capture broadcast message of command `on_new_plots` from `rolls_farmer` service.

#### Usage
```typescript
const {getDaemon} = require("rolls-agent");
const {on_new_plots} = require("rolls-agent/api/ws");

const daemon = getDaemon();
await daemon.connect();
const unsubscribe = await on_new_plots(daemon, (event) => {
  // Format of `event` object is desribed below.
  ...
});
...
unsubscribe(); // Stop subscribing messages
```

#### event:
```typescript
{
  origin: "rolls_farmer";
  command: "get_harvesters";
  ack: boolean;
  data: /*See below*/;
  request_id: string;
  destination: string;
}
```
#### data:
```typescript
{
  harvesters: HarvesterObject[];
}
```
For content of `HarvesterObject`,  
see https://github.com/Chia-Mine/rolls-agent/blob/main/src/api/chia/rpc/farmer/index.ts
