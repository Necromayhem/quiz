import { defineStore } from "pinia";
import type { Question, QuizPackId } from "@/mocks/questions";
import { computed, ref } from "vue";
import { getQuizzes } from "@/api/quizApi";


export const useQuizStore = defineStore("quiz", () => {
  const questions = ref<Question[]>([]);
  const error = ref<string | null>(null);
  const loading = ref(true);
  const currentIndex = ref(0);
  const currentPackId = ref<QuizPackId | null>(null) 
  const selectedOptionId = ref<number | null>(null);
  const result = ref<boolean[]>([]);
  const endGame = ref(false);
    
  const startQuiz = async (packId: QuizPackId) => {
      currentPackId.value = packId;
      loading.value = true;
      error.value = null;

      try {
          const data = await getQuizzes(packId);
          questions.value = data;
          currentIndex.value = 0;
          result.value = [];
          selectedOptionId.value = null;
          endGame.value = false;
      } catch (e: any) {
          error.value = e?.message ?? 'Ошибка загрузки квиза'
      } finally {
          loading.value = false;
      }
  }

  const currentQuestion = computed(() =>
    questions.value?.length ? questions.value[currentIndex.value] : null
  );

  const score = computed(() => {
    let true_answer = 0;

    result.value.forEach((el) => {
      if (el === true) true_answer++;
    });

    return true_answer;
  });

  const nextQuestion = (id: number | null) => {
    if (selectedOptionId.value === null) return;

    result.value.push(
      questions.value![currentIndex.value]?.options.find((el) => el.id === id)
        ?.isCorrect ?? false
    );
    selectedOptionId.value = null;

    if (questions.value.length - 1 === currentIndex.value) {
      endGame.value = true;
      return;
    }
    currentIndex.value++;
  };

  const toggleOption = (id: number) => {
    selectedOptionId.value = selectedOptionId.value === id ? null : id;
  };

  const retry = () => {
    endGame.value = false;
    result.value = [];
    currentIndex.value = 0;
    };
    
    return {error, loading, endGame, currentQuestion, score, nextQuestion, toggleOption, retry, startQuiz, selectedOptionId, questions}
});
