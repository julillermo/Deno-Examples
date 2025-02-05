// TCP/TLS connector
//  - TLS likely refers to Transport Layer Security.

// Wikipedia description of TLS -
// ... is a cryptographic protocol designed to provide
// communications security over a computer network, such
// as the internet.

//* Read a Certificate Authority (CA) Certificate from
//  the file system
const caCert = await Deno.readTextFile("./root.pem");

//* Establish a connection to the TCP server using TLS.
// If we remove the CA root ceritifcate option, Deno
//  defaults to Mozilla's root ceriticates.
const conn = await Deno.connectTls({
  hostname: "127.0.0.1",
  port: 443,
  caCerts: [caCert],
});

const encoder = new TextEncoder();

//* Encode the 'ping' message and write to the TCP connection server
await conn.write(encoder.encode("ping"));
