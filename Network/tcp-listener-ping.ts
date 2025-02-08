const decoder = new TextDecoder();

const listener = Deno.listen({
  hostname: "127.0.0.1",
  port: 8080,
  transport: "tcp",
});

for await (const conn of listener) {
  const buf = new Uint8Array(1204);
  await conn.read(buf);
  console.log("server - received: ", decoder.decode(buf));

  conn.close();
}

export function emptyFn() {
  //
}
