// How to work with web sockets in Deno

Deno.serve({ port: 1236 }, (req: Request) => {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 });
  }

  const { socket, response } = Deno.upgradeWebSocket(req);
  socket.addEventListener("open", () => {
    console.log("a client connected!");
  });

  socket.addEventListener("message", (event) => {
    if (event.data === "ping") {
      console.log("pong sent");
      socket.send("pong");
    }
  });

  return response;
});
