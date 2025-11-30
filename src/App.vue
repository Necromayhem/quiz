<script setup lang="ts"></script>

<template>
  <div id="app" class="app">
    <main class="app__main">
      <Transition name="page-fade" mode="out-in">
        <RouterView />
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: radial-gradient(circle at top, #1d4ed8, #020617 55%);
}

.app__main {
  width: 100%;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>

