# Websocket Message from Harvester service

### `on_message_from_harvester`
Capture all broadcast messages coming from `rolls_harvester` service.

#### Usage
You need to create Websocket connection before subscribing websocket messages.
```js
const {getDaemon} = require("rolls-agent");
const {on_message_from_harvester} = require("rolls-agent/api/ws");

const daemon = getDaemon(); // This is the websocket connection handler
await daemon.connect(); // connect to local daemon using config file.

// Capture all messages from `rolls_harvester`
const unsubscribe = await on_message_from_harvester(daemon, (event) => {
  console.log(e.data);

  // Close connection if you don't need it anymore.
  if(...){
    unsubscribe(); // stop listening to this ws message.
  }
});
...
```

---

### `on_get_plots`
Capture broadcast message of command `get_plots` from `rolls_harvester` service.

#### Usage
```typescript
const {getDaemon} = require("rolls-agent");
const {on_get_plots} = require("rolls-agent/api/ws");

const daemon = getDaemon();
await daemon.connect();
const unsubscribe = await on_get_plots(daemon, (event) => {
  // Format of `event` object is desribed below.
  ...
});
...
unsubscribe(); // Stop subscribing messages
```

#### event:
```typescript
{
  origin: "rolls_harvester";
  command: "get_plots";
  ack: boolean;
  data: /*See below*/;
  request_id: string;
  destination: string;
}
```
#### data:
```typescript
{
  plots: Plot[];
  failed_to_open_filenames: string[];
  not_found_filenames: string[];
}
```
For content of `Plot`,  
see https://github.com/Chia-Mine/rolls-agent/blob/main/src/api/chia/harvester/harvester.ts
