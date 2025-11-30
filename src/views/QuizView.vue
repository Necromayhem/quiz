<script setup lang="ts">
import { computed } from "vue";
import { useQuizStore } from "@/store/quiz";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const quizStore = useQuizStore();

const {
  currentQuestion,
  selectedOptionId,
  isAnswered,
  endGame,
  loading,
  error,
  totalQuestions,
  score,
  currentIndex,
} = storeToRefs(quizStore);

const { toggleOption, checkAnswer, nextQuestion } = quizStore;

const isLastQuestion = computed(
  () => totalQuestions.value > 0 && currentIndex.value === totalQuestions.value - 1
);

const primaryButtonText = computed(() => {
  if (!isAnswered.value) return "ПРОВЕРИТЬ";
  if (isLastQuestion.value) return "РЕЗУЛЬТАТЫ";
  return "СЛЕДУЮЩИЙ ВОПРОС";
});

const handlePrimaryClick = () => {
  if (!isAnswered.value) {
    checkAnswer();
  } else {
    if (isLastQuestion.value) {
      router.push("/result");
    } else {
      nextQuestion();
    }
  }
};
</script>

<template>
  <div class="quiz-page fade-in">
    <div class="quiz-page__container scale-in">
      <header class="quiz-page__header">
        <h1 class="quiz-page__title">Онлайн квиз</h1>
        <p class="quiz-page__subtitle">
          Выберите вариант ответа и нажмите «Проверить»
        </p>
      </header>

      <main class="quiz">
        <div v-if="loading" class="quiz__state quiz__state--loading">
          Загружаем вопросы...
        </div>

        <div v-else-if="error" class="quiz__state quiz__state--error">
          {{ error }}
        </div>

        <div v-else-if="endGame" class="quiz__state quiz__state--finished">
          Квиз завершён
        </div>

        <Transition name="quiz-fade" mode="out-in">
          <div
            v-if="currentQuestion && !endGame && !loading && !error"
            :key="currentQuestion.id"
            class="quiz__content"
          >
            <div class="quiz__meta">
              <span class="quiz__progress">
                Вопрос {{ currentIndex + 1 }} из {{ totalQuestions }}
              </span>
              <span class="quiz__score">
                Правильных ответов: {{ score }}
              </span>
            </div>

            <h2 class="quiz__question">
              {{ currentQuestion.text }}
            </h2>

            <ul class="quiz__options">
              <li
                v-for="(opt, index) in currentQuestion.options"
                :key="opt.id"
                class="quiz__option"
                :class="{
                  'quiz__option--selected':
                    selectedOptionId === opt.id && !isAnswered,
                  'quiz__option--correct': isAnswered && opt.isCorrect,
                  'quiz__option--wrong':
                    isAnswered &&
                    !opt.isCorrect &&
                    selectedOptionId === opt.id,
                  'quiz__option--disabled': isAnswered
                }"
                :style="{ animationDelay: (index * 0.04) + 's' }"
                @click="!isAnswered && toggleOption(opt.id)"
              >
                <span class="quiz__option-text">
                  {{ opt.text }}
                </span>
              </li>
            </ul>

            <div class="quiz__controls">
              <button
                class="quiz__button quiz__button--primary"
                :disabled="!selectedOptionId && !isAnswered"
                @click="handlePrimaryClick"
              >
                {{ primaryButtonText }}
              </button>
            </div>
          </div>
        </Transition>
      </main>
    </div>
  </div>
</template>

<style scoped>
.quiz-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f172a;
  padding: 24px;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.quiz-page__container {
  width: 100%;
  max-width: 720px;
  background: #020617;
  border-radius: 24px;
  padding: 32px 28px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.8);
  color: #e5e7eb;
}

.quiz-page__header {
  margin-bottom: 24px;
}

.quiz-page__title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px;
}

.quiz-page__subtitle {
  margin: 0;
  color: #9ca3af;
  font-size: 14px;
}

.quiz {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.quiz__state {
  text-align: center;
  padding: 24px;
  border-radius: 16px;
  background: #020617;
}

.quiz__state--loading {
  color: #9ca3af;
}

.quiz__state--error {
  color: #ef4444;
}

.quiz__state--finished {
  color: #22c55e;
}

/* Анимация смены вопроса */
.quiz-fade-enter-active,
.quiz-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.quiz-fade-enter-from,
.quiz-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.quiz__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.quiz__meta {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #9ca3af;
}

.quiz__question {
  font-size: 20px;
  margin: 0;
}

.quiz__options {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quiz__option {
  position: relative;
  padding: 12px 16px;
  border-radius: 12px;
  background: #020617;
  border: 1px solid rgba(148, 163, 184, 0.35);
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    transform 0.08s ease,
    box-shadow 0.15s ease;

  /* анимация появления опций */
  opacity: 0;
  transform: translateY(6px);
  animation: option-in 0.25s ease forwards;
}

@keyframes option-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.quiz__option--selected {
  border-color: #6366f1;
  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.5);
}

.quiz__option--correct {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
}

.quiz__option--wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
}

.quiz__option--disabled {
  cursor: default;
}

.quiz__option:hover {
  transform: translateY(-1px);
  border-color: #6366f1;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.4);
}

.quiz__option-text {
  font-size: 15px;
}

.quiz__controls {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

.quiz__button {
  border: none;
  border-radius: 999px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.08s ease,
    box-shadow 0.15s ease,
    opacity 0.15s ease;
}

.quiz__button--primary {
  background: #6366f1;
  color: #f9fafb;
}

.quiz__button--primary:hover:enabled {
  background: #4f46e5;
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.45);
}

.quiz__button--primary:active:enabled {
  transform: translateY(0);
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35);
}

.quiz__button:disabled {
  opacity: 0.4;
  cursor: default;
  transform: none;
  box-shadow: none;
}
</style>

