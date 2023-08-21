<script lang="ts" setup>
import { useThemeConfig } from 'valaxy';

const themeConfig = useThemeConfig()
</script>

<template>
  <div class="links flex-center">
    <AppLink
      v-for="item, i in themeConfig.pages" :key="i"
      class="link-item yun-icon-btn" inline-flex
      :to="item.url" :title="item.name" :style="`color:${item.color}`"
    >
      <div :class="item.icon" class="icon w-8 h-8" />
    </AppLink>
    <AppLink
    class="link-item yun-icon-btn" inline-flex
    title="\巴巴托斯!/"
    to="https://venti.wiki/"
    >
     <div class="icon w-8 h-8" ><img src="https://cdn.carmendei.cn/myblog/resource/img/venti_juice.png"/></div>
    </AppLink>

     <AppLink
    class="link-item yun-icon-btn" inline-flex
    title="留影机"
    to="/albums/"
    >
     <div class="icon w-8 h-8" ><img src="https://cdn.carmendei.cn/myblog/resource/img/venti-icon/camera.png"/></div>
    </AppLink>

  </div>
</template>
