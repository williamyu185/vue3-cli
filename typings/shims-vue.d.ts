

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>
  export default component;
}

// declare module 'Vue/types/vue' {
//   import { AxiosInstance } from 'axios';
//   interface Vue {
//     $http: AxiosInstance
//   }
// }
// declare module '@vue/runtime-core' {
//   interface ComponentPublicInstance {
//     $http: any
//   }
// }

