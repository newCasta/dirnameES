import { filename, dirname } from './mod.ts'
import { assertEquals, cyan, bold, underline } from './test_deps.ts'


Deno.test('dirname', () => {
    const __dirname = dirname(import.meta)

    console.log(`${cyan(bold("Dirname"))}: ${underline(__dirname)}`)
    assertEquals(/\/test/.test(__dirname), true)
})


Deno.test('filename', () => {
    const __filename = filename(import.meta)

    console.log(`${cyan(bold("Filename"))}: ${underline(__filename)}`)
    assertEquals(/\/test\/test.ts$/.test(__filename), true)
})