# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## 搭建项目步骤
    1. 创建一个vite项目： npm create vite
    2. 路由: npm add vue-router@4
    3. vite.config.ts配置别名： npm add @types/node --save-dev
        import router from "@/router" 
        注意：这里会有一个报错（找不到模块）,解决办法就是 tsconfig.json中配置加上下面代码就可以啦  https://blog.csdn.net/weixin_43754395/article/details/128112575?spm=1001.2014.3001.5502
        ```
            "baseUrl": "./",
            "paths":{
                "@": ["src"],
                "@/*": ["src/*"],
            }
        ```
    4.vuex：npm install vuex@next --save
    5.css预处理器sass: npm install -D sass sass-loader 
    6.使用UI框架：elementUI： npm install element-plus --save
        这里使用勒按需引入 npm add -D unplugin-vue-components unplugin-auto-import，然后再vite.config.ts配置相关信息
