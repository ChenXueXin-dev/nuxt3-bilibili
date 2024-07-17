// https://nuxt.com/docs/api/configuration/nux-config
export default defineNuxtConfig({
  //开启 ssr服务器渲染，默认开启
  ssr:true,
  compatibilityDate: '2024-04-03',
  //开启调试工具
  devtools: { enabled: true },
  //应用模块
  modules:['@vant/nuxt']
})
