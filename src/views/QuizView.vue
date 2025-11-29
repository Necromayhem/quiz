<script setup lang="ts">
import { getQuizzes } from '@/api/quizApi';
import type { Question } from '@/mocks/questions';
import { computed, onBeforeMount, ref } from 'vue';

const questions = ref<null | Question[]>(null);
const error = ref<string | null>(null);
const loading = ref(true)
const currentIndex = ref(0);
const selectedOptionId = ref<number | null>(null);
const result = ref<boolean[]>([]);
const endGame = ref(false)


const currentQuestion = computed(() => questions.value?.length ? questions.value[currentIndex.value] : null)

const resultView = computed(() => {
  let true_answer = 0;

  result.value.forEach(el => {
    if (el === true) true_answer++;
  })

  return true_answer;
})

const nextQuestion = (id: number | null) => {
  if (!selectedOptionId.value) return;

  result.value.push(questions.value![currentIndex.value]?.options.find(el => el.id === id)?.isCorrect ?? false);
  // console.log(result.value);
  selectedOptionId.value = null;

  if (questions.value!.length - 1 === currentIndex.value) {
    endGame.value = true;
    return;
  }
  currentIndex.value++
}

const toggleOption = (id: number) => {
  selectedOptionId.value = selectedOptionId.value === id ? null : id;
}

const retry = () => {
  endGame.value = false;
  result.value = [];
  currentIndex.value = 0;
}

onBeforeMount(async () => {
  try {
    questions.value = await getQuizzes();
  } catch (e: any) {
    error.value = e?.message ?? "Ошибка загрузки квиза"
  } finally {
    loading.value = false;
  }
})
</script>

<template>
  <h2>QUIZ PAGE</h2>

  <div 
  v-if="currentQuestion && !endGame"
  class="question"
  >
  <h3>{{ currentQuestion.text }}</h3>
  <ul>
    <li 
    v-for="opt in currentQuestion.options" 
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
    {{ resultView }}/{{ questions?.length }}
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