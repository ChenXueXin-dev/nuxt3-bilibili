<script setup lang="ts">
useSeoMeta({
  title:"哔哩哔哩(゜-゜)つロ干杯~-bilibili官方",
  description:"哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。",
  keywords:"B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影"
})
</script>
<template>
  <!-- 相当于 页面路由，相当于 RouterView -->
   <!-- 缓存 10 级页面，提升用户切换体验 -->
  <NuxtPage :keepalive="{max:10}"/>
</template>
<style lang="scss">
// 基础样式 
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';
</style>