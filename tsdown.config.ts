import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: ['./src/index'],
    platform: 'neutral',
    fromVite: true,
    dts: {
      vue: true,
    },
  },
])
