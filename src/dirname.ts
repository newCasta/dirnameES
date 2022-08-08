import { normalize, dirname as dir } from '../deps.ts'

export function filename(meta: ImportMeta): string {
    return normalize(meta.url).replace('file:\\', '')
}

export function dirname(meta: ImportMeta): string {
    return dir(filename(meta))
}