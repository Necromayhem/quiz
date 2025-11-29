<script setup lang="ts">
import quizPacks from '@/mocks/questions';
import { useQuizStore } from '@/store/quiz';
import { type QuizPackId } from '@/mocks/questions';
import router from '@/router';

const quizStore = useQuizStore();

const start = async(id: QuizPackId) => {
  await quizStore.startQuiz(id);
  router.push('/quiz')
} 
</script>

<template>
  <h2>HOME PAGE</h2>
  <h3>Выбери квиз</h3>

  <ul>
    <li v-for="pack in quizPacks" :key="pack.id">
      <h4>{{ pack.title }}</h4>
      <p>{{ pack.description }}</p>
      <button @click="start(pack.id)">Играть</button>
    </li>
  </ul>
</template>

<style scoped></style>