<script setup lang="ts">
import { useQuizStore } from "@/store/quiz";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const quizStore = useQuizStore();
const { score, totalQuestions } = storeToRefs(quizStore);

const goHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="result-page fade-in">
    <div class="result-page__container scale-in">
      <h1 class="result-page__title">Результаты</h1>

      <p class="result-page__score">
        Вы ответили правильно на
        <span class="result-page__score-accent">{{ score }}</span>
        из
        <span>{{ totalQuestions }}</span>
        вопросов
      </p>

      <div class="result-page__hint">
        <p v-if="score === totalQuestions">
          Идеально! Ты настоящий гений ✨
        </p>
        <p v-else-if="score > (totalQuestions || 1) / 2">
          Очень неплохо, есть ещё куда расти 💪
        </p>
        <p v-else>
          Всё получится! Попробуй ещё раз и улучшай результат 🚀
        </p>
      </div>

      <button class="result-page__button" @click="goHome">
        К выбору квиза
      </button>
    </div>
  </div>
</template>

<style scoped>
.result-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f172a;
  padding: 24px;
  box-sizing: border-box;
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
}

.result-page__container {
  max-width: 480px;
  width: 100%;
  background: #020617;
  border-radius: 24px;
  padding: 32px 28px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.8);
}

.result-page__title {
  margin: 0 0 12px;
  font-size: 26px;
}

.result-page__score {
  margin: 0 0 12px;
  font-size: 16px;
}

.result-page__score-accent {
  font-weight: 700;
  color: #22c55e;
}

.result-page__hint {
  margin-bottom: 20px;
  color: #9ca3af;
  font-size: 14px;
}

.result-page__button {
  border: none;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  background: #6366f1;
  color: #f9fafb;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.08s ease,
    box-shadow 0.15s ease;
}

.result-page__button:hover {
  background: #4f46e5;
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.45);
}

.result-page__button:active {
  transform: translateY(0);
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35);
}
</style>
