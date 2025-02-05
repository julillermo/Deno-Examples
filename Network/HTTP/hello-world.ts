//* A basic Hello World delivered from the server

function handler(_req: Request): Response {
  return new Response("Hello World!");
}

Deno.serve({ port: 1236 }, handler);
