<script setup lang="ts">

import { useQuizStore } from '@/store/quiz';
import { storeToRefs } from 'pinia';

const quizStore = useQuizStore();
const { endGame, currentQuestion, score, selectedOptionId, questions } = storeToRefs(quizStore);
const { nextQuestion, toggleOption, retry, } = quizStore;


</script>





<template>
  <h2>QUIZ PAGE</h2>

  <div 
  v-if="!endGame"
  class="question"
  >
  <h3>{{ currentQuestion?.text }}</h3>
  <ul>
    <li 
    v-for="opt in currentQuestion?.options" 
    :key="opt.id"
    @click="toggleOption(opt.id)"
    :class="{active: selectedOptionId === opt.id}"
    >
      {{ opt.text }}
    </li>
  </ul>
  <button @click="nextQuestion(selectedOptionId)">next question</button>
  </div>
  <div v-if="endGame">
    <div>
      Result
    {{ score }}/{{ questions.length }}
    </div>
    <button @click="retry">Retry</button>
  </div>
</template>

<style scoped>
.question li {
  cursor: pointer;
}

.question li:hover {
  color: red;
}

.question li.active {
  color: rgb(43, 0, 255);
}

</style>