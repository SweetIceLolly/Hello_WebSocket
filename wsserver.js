const websocket = require("ws");

(function(serverPort) {
    const wss = new websocket.Server({port: serverPort});

    wss.on("connection", function(ws, req) {
        console.log(req.connection.remoteAddress + " connected");
        ws.on("message", function(data) {
            console.log("Message from " + req.connection.remoteAddress + ": " + data);
            wss.clients.forEach(function(client) {
                if (client !== ws && client.readyState === websocket.OPEN) {
                    client.send(data);
                }
            });
        });
    });
})(8080);
