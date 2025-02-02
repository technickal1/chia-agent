# Daemon

A websocket client for connecting to rolls daemon.  
This `Daemon` class is a singleton to prevent multiple useless connections being active at once.

Please note that you cannot create multiple daemon clients connecting to different url in single nodejs process.  
If you need to do it, please let me know. I'll check whether its merit is considerable than changing entire code base.

You can generate this `Daemon` client as below.
```js
const {getDaemon} = require("rolls-agent");
const daemon = getDaemon();
```

## daemon.connect

Connect to rolls daemon via websocket.

If you don't pass any argument, it tries to connect to an url specified in rolls configuration file.  
(Note: `rolls-agent` cares environment variable `rolls_ROOT`)
```js
await daemon.connect();
```

You can specify rolls daemon url to connect to.
```js
await daemon.connect("wss://hostname:port");
```

## daemon.close

Close active connection.  
If no active connection found, it silently returns without error.
```js
daemon.close();
```

After socket successfully closes, onClose event will dispatch. You can listen to the event as below:
```js
daemon.addEventListener("close", () => {
  // Do some stuff here.
});
```

## daemon.subscribe

Start to monitor message channel via websocket.

```js
await daemon.subscribe(service);
// service: "wallet_ui" or "rolls_plotter"
```

`wallet_ui`  
Monitor messages sent to update GUI like connecting nodes, last attempted proof, wallet status, etc.

`rolls_plotter`  
Monitor plot creation progress.

Messages can be monitored after message event listener is added to daemon instance.
```js
// Subscribe message from `origin`.
// origin is "rolls_wallet", "rolls_farmer", "rolls_full_node", "rolls_plotter", etc.
// If origin is set to `undefined` or "all", all incoming messages are passed to the listener function.
daemon.addMessageListener(origin, (message) => {
  // Content of receiving message depends on origin and command.
  // command is a request type of message. e.g. "get_blockchain_state", "new_farming_info", etc.
});
```

The format of incoming `message` is:
```js
{
  command: string;
  ack: boolean;
  data: any; // depends on command
  request_id: string;
  destination: string;
  origin: string;
}
```
