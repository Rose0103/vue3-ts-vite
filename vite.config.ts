import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 按需引入element-plus
import AutoImport from 'unplugin-auto-import/vite';  //自动导入
import Components from 'unplugin-vue-components/vite'; //组件注册
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'src') //配置别名
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@use "@/assets/styles/element.scss" as *;`,
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],     //  vue3  setup 语法糖下 不需要导入就可以直接使用一些属性 如 ref reactive 
      dts: 'src/auto-import.d.ts'
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })]
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port:8080,
    open:true
  },
 
})
