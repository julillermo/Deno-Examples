let status = await Deno.permissions.request({ name: "env" });
if (status.state === "granted") {
  console.log("'env' permission is granted.");
} else {
  console.log("'env' permission is denied.");
}

status = Deno.permissions.requestSync({ name: "env" });
if (status.state === "granted") {
  console.log("'env' permission is granted.");
} else {
  console.log("'env' permission is denied.");
}

const readStatus = await Deno.permissions.query({
  name: "read",
  path: "/etc",
});
console.log(readStatus.state, "test");

import { assert } from "jsr:@std/assert";

const runStatus = await Deno.permissions.revoke({ name: "run" });
assert(runStatus.state !== "granted");
