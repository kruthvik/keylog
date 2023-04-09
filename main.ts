import { readKeypress } from "https://deno.land/x/keypress@0.0.10/mod.ts";

for await (const keypress of readKeypress()) {
    console.log(keypress.key)
    const text = await Deno.readTextFile("./keys.log") + '\n';
    await Deno.writeTextFile("./keys.log", text + keypress.key);
}
