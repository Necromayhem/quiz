export type Question = {
  id: number,
  text: string,
  options: Option[]
}

export type Option = {
  id: number,
  text: string,
  isCorrect: boolean
}

const questions: Question[] = [
  {
    id: 1,
    text: "Что делает метод Array.map в JavaScript?",
    options: [
      { id: 1, text: "Изменяет исходный массив", isCorrect: false },
      { id: 2, text: "Фильтрует элементы массива", isCorrect: false },
      {id: 3, text: "Создаёт новый массив, применяя функцию к каждому элементу", isCorrect: true},
      { id: 4, text: "Сортирует массив по возрастанию", isCorrect: false },
    ],
    },
    {
    id: 2,
    text: 'Какой тег используется для ссылки в HTML?',
    options: [
      { id: 1, text: '<link>', isCorrect: false },
      { id: 2, text: '<a>', isCorrect: true },
      { id: 3, text: '<href>', isCorrect: false },
      { id: 4, text: '<url>', isCorrect: false },
    ],
  },
    {
    id: 3,
    text: "Что такое замыкание (closure) в JavaScript?",
    options: [
      { id: 1, text: "Способ объединения двух объектов", isCorrect: false },
      { id: 2, text: "Функция вместе с её лексическим окружением", isCorrect: true },
      { id: 3, text: "Метод, закрывающий доступ к свойствам объекта", isCorrect: false },
      { id: 4, text: "Встроенный механизм очистки памяти", isCorrect: false }
    ],
  },
  {
    id: 4,
    text: "Что вернёт выражение typeof null?",
    options: [
      { id: 1, text: '"null"', isCorrect: false },
      { id: 2, text: '"object"', isCorrect: true },
      { id: 3, text: '"undefined"', isCorrect: false },
      { id: 4, text: '"nulltype"', isCorrect: false }
    ],
  },
  {
    id: 5,
    text: "Что делает оператор === в JavaScript?",
    options: [
      { id: 1, text: "Сравнивает значения и типы", isCorrect: true },
      { id: 2, text: "Преобразует значения к одному типу", isCorrect: false },
      { id: 3, text: "Присваивает переменной значение", isCorrect: false },
      { id: 4, text: "Сравнивает только значения", isCorrect: false }
    ],
  },
  {
    id: 6,
    text: "Что делает метод Array.filter?",
    options: [
      { id: 1, text: "Создаёт новый массив только из элементов, прошедших проверку", isCorrect: true },
      { id: 2, text: "Изменяет текущий массив", isCorrect: false },
      { id: 3, text: "Перебирает массив без возвращения результата", isCorrect: false },
      { id: 4, text: "Возвращает первый найденный элемент", isCorrect: false }
    ],
  },
  {
  id: 7,
  text: "Что возвращает метод Array.find?",
  options: [
    { id: 1, text: "Все элементы, прошедшие проверку", isCorrect: false },
    { id: 2, text: "Первый элемент, удовлетворяющий условию", isCorrect: true },
    { id: 3, text: "Индекс найденного элемента", isCorrect: false },
    { id: 4, text: "Новый массив такой же длины", isCorrect: false }
  ],
},
{
  id: 8,
  text: "Какой тип данных у переменной после выполнения: const a = []?",
  options: [
    { id: 1, text: '"object"', isCorrect: true },
    { id: 2, text: '"array"', isCorrect: false },
    { id: 3, text: '"list"', isCorrect: false },
    { id: 4, text: '"structure"', isCorrect: false }
  ],
},
{
  id: 9,
  text: "Что делает ключевое слово async перед функцией?",
  options: [
    { id: 1, text: "Заставляет функцию выполняться синхронно", isCorrect: false },
    { id: 2, text: "Превращает функцию в промис", isCorrect: true },
    { id: 3, text: "Запрещает использовать await", isCorrect: false },
    { id: 4, text: "Оптимизирует функцию под многопоточность", isCorrect: false }
  ],
},
{
  id: 10,
  text: "Что делает метод JSON.stringify?",
  options: [
    { id: 1, text: "Преобразует JSON в объект JavaScript", isCorrect: false },
    { id: 2, text: "Преобразует объект в строку формата JSON", isCorrect: true },
    { id: 3, text: "Проверяет валидность JSON", isCorrect: false },
    { id: 4, text: "Преобразует массив в объект", isCorrect: false }
  ],
},

];

export default questions;
