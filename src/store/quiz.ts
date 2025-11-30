import { defineStore } from "pinia";
import type { Question, QuizPackId } from "@/mocks/questions";
import { computed, ref } from "vue";
import { getQuizzes } from "@/api/quizApi";

export const useQuizStore = defineStore("quiz", () => {
  const questions = ref<Question[]>([]);
  const error = ref<string | null>(null);
  const loading = ref(false);

  const currentIndex = ref(0);
  const currentPackId = ref<QuizPackId | null>(null);

  const selectedOptionId = ref<number | null>(null);
  const answers = ref<boolean[]>([]); 
  const isAnswered = ref(false);      
  const endGame = ref(false);

  const currentQuestion = computed(() =>
    questions.value.length ? questions.value[currentIndex.value] : null
  );

  const totalQuestions = computed(() => questions.value.length);

  const score = computed(() =>
    answers.value.reduce((sum, isCorrect) => sum + (isCorrect ? 1 : 0), 0)
  );

  const startQuiz = async (id: QuizPackId) => {
    loading.value = true;
    error.value = null;
    currentPackId.value = id;

    try {
      const data = await getQuizzes(id);
      questions.value = data;

      currentIndex.value = 0;
      selectedOptionId.value = null;
      answers.value = [];
      isAnswered.value = false;
      endGame.value = false;
    } catch (e: any) {
      error.value = e?.message ?? "Ошибка загрузки квиза";
    } finally {
      loading.value = false;
    }
  };

  const toggleOption = (id: number) => {
    if (isAnswered.value) return; 
    selectedOptionId.value = selectedOptionId.value === id ? null : id;
  };

  const checkAnswer = () => {
    if (!currentQuestion.value || selectedOptionId.value === null) return;
    if (isAnswered.value) return;

    const selected = currentQuestion.value.options.find(
      (opt) => opt.id === selectedOptionId.value
    );

    const isCorrect = !!selected?.isCorrect;
    answers.value[currentIndex.value] = isCorrect;
    isAnswered.value = true;
  };

  const nextQuestion = () => {
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value += 1;
      selectedOptionId.value = null;
      isAnswered.value = false;
    } else {
      endGame.value = true;
    }
  };

  const retry = () => {
    if (!currentPackId.value) return;
    startQuiz(currentPackId.value);
  };

  return {
    questions,
    error,
    loading,
    currentIndex,
    currentPackId,
    selectedOptionId,
    answers,
    isAnswered,
    endGame,
    currentQuestion,
    totalQuestions,
    score,
    startQuiz,
    toggleOption,
    checkAnswer,
    nextQuestion,
    retry,
  };
});

