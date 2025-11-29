import questions from "@/mocks/questions";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export async function getQuizzes() {
    await delay(500);

    return questions;
} 