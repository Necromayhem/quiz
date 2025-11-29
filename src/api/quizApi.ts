import quizPacks, { type QuizPackId } from "@/mocks/questions";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export async function getQuizzes(packId: QuizPackId) {
    await delay(100);

    const pack = quizPacks.find(p => p.id === packId)
    return pack ? pack.questions : [];
}; 