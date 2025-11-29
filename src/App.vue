<script setup lang="ts"></script>

<template>
  <div class="nav">
    <button><router-link to="/">to Home</router-link></button>
    <button><router-link to="/quiz">to Quiz</router-link></button>
    <button><router-link to="/result">to Result</router-link></button>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
