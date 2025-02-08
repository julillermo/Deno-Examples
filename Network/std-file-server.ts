// Using the std library for file-server

import { serveDir } from "@std/http/file-server";

// localhost is the same as 127.0.0.1
Deno.serve({ hostname: "127.0.0.1", port: 8080 }, (req) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "/home/tuliog/Documents/Workspace/Deno-Examples/Network/HTTP/",
    });
  }
  // empty response
  return new Response();
});
