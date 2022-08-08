import { filename, dirname } from './mod.ts'
import { assertEquals, cyan, bold, underline } from './test_deps.ts'


Deno.test('dirname', () => {
    const __dirname = dirname(import.meta)

    console.log(`${cyan(bold("Dirname"))}: ${underline(__dirname)}`)
    assertEquals(__dirname.split('\\').at(-1), 'dirname-es')
})


Deno.test('filename', () => {
    const __filename = filename(import.meta)

    console.log(`${cyan(bold("Filename"))}: ${underline(__filename)}`)
    assertEquals(__filename.split('\\').at(-1), 'test.ts')
})