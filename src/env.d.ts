/// <reference types="vite/client" />

declare module '*.vue' {
  import { RenderFunction } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: RenderFunction<{}, {}, any>
  export default component
}
