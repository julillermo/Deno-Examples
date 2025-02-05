// An echo server is a simple network aplication that listens
//  for incoming connections and requests, then repeats back
//  any data it receives from its clients

// To test this example, try sending data to it with Netcat
//   (CLI tool). Run `echo "Hello, Deno!" | nc localhost 8080

const listener = Deno.listen({ port: 8080 });
console.log("listening on 0.0.0.0:8080");

for await (const conn of listener) {
  conn.readable.pipeTo(conn.writable);
}
