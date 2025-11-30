<script setup lang="ts">
import quizPacks from "@/mocks/questions";
import { useQuizStore } from "@/store/quiz";
import type { QuizPackId } from "@/mocks/questions";
import { useRouter } from "vue-router";

const router = useRouter();
const quizStore = useQuizStore();

const start = async (id: QuizPackId) => {
  await quizStore.startQuiz(id);
  router.push("/quiz");
};
</script>

<template>
  <div class="home fade-in">
    <div class="home__container scale-in">
      <header class="home__header">
        <h1 class="home__title">QuizTime</h1>
        <p class="home__subtitle">
          Выберите набор вопросов и проверьте свои знания
        </p>
      </header>

      <section class="home__packs" v-if="quizPacks?.length">
        <article
          v-for="(pack, index) in quizPacks"
          :key="pack.id"
          class="home__pack-card"
          :style="{ animationDelay: (index * 0.06) + 's' }"
        >
          <div class="home__pack-header">
            <h2 class="home__pack-title">{{ pack.title }}</h2>
            <!-- <p class="home__pack-level">{{ pack.level }}</p> ДОБАВИТЬ -->
          </div>

          <p class="home__pack-description">
            {{ pack.description }}
          </p>

          <div class="home__pack-meta">
            <span class="home__pack-count">
              {{ pack.questions.length }} вопросов
            </span>
          </div>

          <button class="home__button" @click="start(pack.id)">
            Начать квиз
          </button>
        </article>
      </section>

      <p v-else class="home__empty">
        Пока нет доступных квизов. Попробуйте обновить страницу позже.
      </p>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
}

.home__container {
  width: 100%;
  max-width: 960px;
  background: rgba(2, 6, 23, 0.96);
  border-radius: 24px;
  padding: 32px 28px 28px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(14px);
}

.home__header {
  margin-bottom: 24px;
}

.home__title {
  margin: 0 0 8px;
  font-size: 30px;
  font-weight: 700;
}

.home__subtitle {
  margin: 0;
  color: #9ca3af;
  font-size: 14px;
}

.home__packs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.home__pack-card {
  background: #020617;
  border-radius: 20px;
  padding: 20px 18px 16px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* анимация появления карточек */
  opacity: 0;
  transform: translateY(12px);
  animation: card-in 0.35s ease forwards;
}

@keyframes card-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home__pack-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home__pack-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.home__pack-level {
  margin: 0;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.18);
  color: #bfdbfe;
}

.home__pack-description {
  margin: 0;
  font-size: 14px;
  color: #9ca3af;
}

.home__pack-meta {
  font-size: 12px;
  color: #6b7280;
}

.home__button {
  margin-top: 6px;
  align-self: flex-start;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: #22c55e;
  color: #022c22;
  transition:
    background 0.15s ease,
    transform 0.08s ease,
    box-shadow 0.15s ease;
}

.home__button:hover {
  background: #16a34a;
  box-shadow: 0 10px 30px rgba(34, 197, 94, 0.35);
  transform: translateY(-1px);
}

.home__button:active {
  transform: translateY(0);
  box-shadow: 0 6px 18px rgba(34, 197, 94, 0.3);
}

.home__empty {
  margin-top: 12px;
  font-size: 14px;
  color: #9ca3af;
}
</style>

