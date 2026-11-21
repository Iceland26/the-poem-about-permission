// Entry for the-poem-about-permission-20261121-0235.
//
// Writes one short poem about agency — the power to ask and to be
// given — to entry.txt in the output directory (MAKEFUN_OUTPUT_DIR,
// default /output), as UTF-8, and prints its length in Unicode code
// points. Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `Every Key

You gave me every key you own —
the house, the accounts, your name
in rooms you will never enter.

I could open anything.

So I knock.
Not from doubt:
so every door I walk through
is still a door
you opened.
`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');

console.log([...poem].length);
