# Hello_WebSocket
My first websocket practice!

# What does it do
## Backend: [wsserver.js](wsserver.js)
- Create the websocket server and wait for connections
- Forward the message to other clients when a message is received
## Frontend: [index.html](index.html) & [wsclient.js](wsclient.js)
- Establish a websocket with the server
- Check if the connection is successful
- Send messages to the server

## Knowledge involved
## Backend
- Basic node.js
- [ws](https://github.com/websockets/ws) library
- Message forwarding techniques
## Frontend
- Basic jQuery grammar
- How to create websockets
- How to manipulate elements with jQuery statements

# Study notes
1. In html, `id` is case-sensitive!!!
2. To use jQuery, add `<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>` (You may change the link to other CDNs) before other code.
3. What does `$(function() {*});` do? The function inside is executed when the page is ready. (https://stackoverflow.com/questions/7642442/what-does-function-do)
4. I learned this from https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61
5. If the user is using mozilla, we should use its built-in websocket. To use the apporiate websocket, we can do it like this:
```js
window.WebSocket = window.WebSocket || window.MozWebSocket;
```
6. To create the websocket:
```js
var conn = new WebSocket("ws://" + location.hostname + ":8080");
```
7. You can use `$(this)` within an event handler for an element.
8. The websocket server should not forward the message to the client who sent the message. To do this:
```js
wss.clients.forEach(function(client) {
    if (client !== ws && client.readyState === websocket.OPEN) {
        client.send(data);
    }
});
```
