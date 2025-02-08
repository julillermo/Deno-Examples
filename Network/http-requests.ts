//* How to make HTTP requests to a server

//* top-level fetch
let resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");

// console.log(JSON.stringify(resp, null, 2));
// console.log("status:", resp.status); // 200
// console.log("Content-Type header:", resp.headers.get("Content-Type")); // "text/html"
// console.log("res.text():", await resp.text()); // "Hello, World!"

//* Response can be read as JSON, ArrayBuffer, or Blob.
//* A body cana be read only once (so comment code as necessary).
// console.log(await resp.arrayBuffer());
// console.log(JSON.stringify(await resp.json(), null, 2));
// console.log(await resp.blob());

//* Response body streamed in chunks (didn't work for me)
//    likely due to the API endpoint I'm using here
// for await (const chunk of resp.body!) {
//   console.log("chunk", chunk);
// }

//* Specifying methods, headers, and a body
// The following overwrites the above fetch call
// Since it's not an actual API endpoint, we get nothing
//  in return.
resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "foobar",
  },
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
});
console.log("resp value:", JSON.stringify(resp, null, 2));

//* Also accepts an Request object
const req = new Request("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});
resp = await fetch(req);
console.log("resp DELETE request", JSON.stringify(resp, null, 2));

export {};
