<template>
  <component :is="currentPage" />
</template>

<script setup>
import { ref, markRaw } from 'vue'
import TitlePage from './pages/Title.vue'
import GamePage from './pages/Game.vue'
import MemoryCorridor from './pages/MemoryCorridor.vue'
import EndingGallery from './pages/EndingGallery.vue'
import Achievements from './pages/Achievements.vue'

// 简单路由
const currentPage = ref(TitlePage)

// 暴露方法供子组件调用
const navigateTo = (page) => {
  switch(page) {
    case 'game':
      currentPage.value = markRaw(GamePage)
      break
    case 'memory':
      currentPage.value = markRaw(MemoryCorridor)
      break
    case 'endings':
      currentPage.value = markRaw(EndingGallery)
      break
    case 'achievements':
      currentPage.value = markRaw(Achievements)
      break
    default:
      currentPage.value = markRaw(TitlePage)
  }
}

// 提供给全局访问
window.router = { navigateTo }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
