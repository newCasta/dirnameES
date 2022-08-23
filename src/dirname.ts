import { dirname as dir, fileURLToPath } from '../deps.ts'

/**
 * Gets the filename of a path.
 * @param meta The import meta object.
 * ```typescript
 * const __filename = filename(import.meta)
 * ```
*/
export function filename(meta: ImportMeta): string {
    return fileURLToPath(meta.url)
}

/**
 * Gets the directory name of a path.
 * @param meta The import meta object.
 * ```typescript
 * const __dirname = dirname(import.meta)
 * ```
*/
export function dirname(meta: ImportMeta): string {
    return dir(filename(meta))
}