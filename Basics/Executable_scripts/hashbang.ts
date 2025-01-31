#!/usr/bin/env -S deno run --allow-env --ext=js

// The above works by embeding the command we want to run into
//    the executible version of the script
// This should allow the script to identify on its own that it
//    needs to use deno instead of manually calling as below:
//    `deno run --A ./hashbang.ts`
// From what I understand, the file extension (.ts) may only
//    for formality reasons. If you want to be explicit, you
//    can add the `--ext` flag.

// "The script tells the system to use the deno runtime to run the script"
//  "The -S flag splits the command into arguments and incidates
//  the following argument (deno run --allow-env) should be passed
//  to the env command"

// Note that the Deno.env API works for retieving ALL ENVIRONMENT
//    variables in your system

const denoPath = Deno.env.get("DENO_INSTALL");
const nvmPath = Deno.env.get("NVM_DIR");

console.log("Deno Install Path:", denoPath);
console.log(nvmPath);
