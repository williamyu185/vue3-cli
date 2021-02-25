declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue/types/vue' {
  interface Vue {
    $http: any;
  }
  export default Vue
}

