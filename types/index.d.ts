/**
 * Gets the directory name of a path.
 * @param meta The import meta object.
 * ```typescript
 * const __dirname = dirname(import.meta)
 * ```
*/
export function dirname(meta: ImportMeta): string

/**
 * Gets the filename of a path.
 * @param meta The import meta object.
 * ```typescript
 * const __filename = filename(import.meta)
 * ```
*/
export function filename(meta: ImportMeta): string