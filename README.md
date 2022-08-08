# dirnameES

__dirname and __filename for Deno.

### usage

```typescript
import { dirname, filename } from 'https://deno.land/x/dirname_es/mod.ts'

const __dirname = dirname(import.meta) // '/path/to/dirname_es'
const __filename = filename(import.meta) // '/path/to/dirname_es/README.md'
```