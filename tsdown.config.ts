import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index'],
  target: 'chrome89',
  platform: 'neutral',
  fromVite: true,
  exports: true,
  dts: {
    vue: true,
  },
})
