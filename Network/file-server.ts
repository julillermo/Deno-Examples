// Using the built-in `Deno.serve` API

// localhost is the same as 127.0.0.1
Deno.serve({ hostname: "127.0.0.1", port: 8080 }, async (request) => {
  const url = new URL(request.url);

  // "The `decodeURIComponent` function is used to decore the
  //    URL-encoded path, in the case that characters have been
  //    percent-encoded."

  // pass a file path within the folder
  //    ex. 127.0.0.1:8080/deno.jsonc
  const filepath = decodeURIComponent(url.pathname);

  try {
    const localFile = await Deno.open("." + filepath, { read: true });
    console.log(`file ${filepath} was requested`);
    return new Response(localFile.readable);
  } catch {
    console.log(`file ${filepath} was not found`);
    return new Response("404 Not Found", { status: 404 });
  }
});
