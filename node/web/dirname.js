import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


export function getDirname(importMetaUrl) {
    const __filename = fileURLToPath(importMetaUrl);
    const __dirname = dirname(__filename);

    return __dirname;
}