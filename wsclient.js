$(function() {
    var content = $("#content");
    var input = $("#input");
    var status = $("#status");

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    if (!window.WebSocket) {
        content.html($("<p>", {text: "Sorry, your browser doesn't support WebSocket"}));
        input.hide();
        $("span").hide();
        return;
    }

    var conn = new WebSocket("ws://" + location.hostname + ":8080");
    
    conn.onopen = function() {
        status.html("Type message: ");
        input.prop("disabled", false);
    }

    conn.onerror = function(error) {
        status.html("Connection error! ");
        input.prop("disabled", true);
    }

    conn.onmessage = function(message) {
        content.prepend("<p>" + message.data + "</p>");
    }

    input.keydown(function(e) {
        if (e.keyCode == 13) {
            var msg = $(this).val();
            if (!msg) {
                return;
            }
            conn.send(msg);
            content.prepend("<p>" + msg + "</p>");
            $(this).val("");
        }
    });
});