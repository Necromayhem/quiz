export type QuizPackId = "js" | "ts" | "html" | "css";

export interface QuizPack {
  id: QuizPackId;
  title: string;
  description: string;
  questions: Question[];
}

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

export type Option = {
  id: number;
  text: string;
  isCorrect: boolean;
};

const quizPacks: QuizPack[] = [
  {
    id: "js",
    title: "Javascript базовый",
    description: " Вопросы по JS",
    questions: [
      {
        id: 1,
        text: "Что делает метод Array.map в JavaScript?",
        options: [
          { id: 1, text: "Изменяет исходный массив", isCorrect: false },
          { id: 2, text: "Фильтрует элементы массива", isCorrect: false },
          {
            id: 3,
            text: "Создаёт новый массив, применяя функцию к каждому элементу",
            isCorrect: true,
          },
          { id: 4, text: "Сортирует массив по возрастанию", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Какой тег используется для ссылки в HTML?",
        options: [
          { id: 1, text: "<link>", isCorrect: false },
          { id: 2, text: "<a>", isCorrect: true },
          { id: 3, text: "<href>", isCorrect: false },
          { id: 4, text: "<url>", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Что такое замыкание (closure) в JavaScript?",
        options: [
          { id: 1, text: "Способ объединения двух объектов", isCorrect: false },
          {
            id: 2,
            text: "Функция вместе с её лексическим окружением",
            isCorrect: true,
          },
          {
            id: 3,
            text: "Метод, закрывающий доступ к свойствам объекта",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Встроенный механизм очистки памяти",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        text: "Что вернёт выражение typeof null?",
        options: [
          { id: 1, text: '"null"', isCorrect: false },
          { id: 2, text: '"object"', isCorrect: true },
          { id: 3, text: '"undefined"', isCorrect: false },
          { id: 4, text: '"nulltype"', isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Что делает оператор === в JavaScript?",
        options: [
          { id: 1, text: "Сравнивает значения и типы", isCorrect: true },
          {
            id: 2,
            text: "Преобразует значения к одному типу",
            isCorrect: false,
          },
          { id: 3, text: "Присваивает переменной значение", isCorrect: false },
          { id: 4, text: "Сравнивает только значения", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Что делает метод Array.filter?",
        options: [
          {
            id: 1,
            text: "Создаёт новый массив только из элементов, прошедших проверку",
            isCorrect: true,
          },
          { id: 2, text: "Изменяет текущий массив", isCorrect: false },
          {
            id: 3,
            text: "Перебирает массив без возвращения результата",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Возвращает первый найденный элемент",
            isCorrect: false,
          },
        ],
      },
      {
        id: 7,
        text: "Что возвращает метод Array.find?",
        options: [
          { id: 1, text: "Все элементы, прошедшие проверку", isCorrect: false },
          {
            id: 2,
            text: "Первый элемент, удовлетворяющий условию",
            isCorrect: true,
          },
          { id: 3, text: "Индекс найденного элемента", isCorrect: false },
          { id: 4, text: "Новый массив такой же длины", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Какой тип данных у переменной после выполнения: const a = []?",
        options: [
          { id: 1, text: '"object"', isCorrect: true },
          { id: 2, text: '"array"', isCorrect: false },
          { id: 3, text: '"list"', isCorrect: false },
          { id: 4, text: '"structure"', isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Что делает ключевое слово async перед функцией?",
        options: [
          {
            id: 1,
            text: "Заставляет функцию выполняться синхронно",
            isCorrect: false,
          },
          { id: 2, text: "Превращает функцию в промис", isCorrect: true },
          { id: 3, text: "Запрещает использовать await", isCorrect: false },
          {
            id: 4,
            text: "Оптимизирует функцию под многопоточность",
            isCorrect: false,
          },
        ],
      },
      {
        id: 10,
        text: "Что делает метод JSON.stringify?",
        options: [
          {
            id: 1,
            text: "Преобразует JSON в объект JavaScript",
            isCorrect: false,
          },
          {
            id: 2,
            text: "Преобразует объект в строку формата JSON",
            isCorrect: true,
          },
          { id: 3, text: "Проверяет валидность JSON", isCorrect: false },
          { id: 4, text: "Преобразует массив в объект", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "html",
    title: "HTML базовый",
    description: "Вопросы по основам HTML",
    questions: [
      {
        id: 1,
        text: "Какой тег используется для гиперссылки?",
        options: [
          { id: 1, text: "<a>", isCorrect: true },
          { id: 2, text: "<link>", isCorrect: false },
          { id: 3, text: "<href>", isCorrect: false },
          { id: 4, text: "<url>", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Какой тег используется для вставки изображения?",
        options: [
          { id: 1, text: "<pic>", isCorrect: false },
          { id: 2, text: "<image>", isCorrect: false },
          { id: 3, text: "<img>", isCorrect: true },
          { id: 4, text: "<src>", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Какой тег используется для нумерованного списка?",
        options: [
          { id: 1, text: "<ul>", isCorrect: false },
          { id: 2, text: "<ol>", isCorrect: true },
          { id: 3, text: "<li>", isCorrect: false },
          { id: 4, text: "<list>", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Какой тег обозначает основной заголовок страницы?",
        options: [
          { id: 1, text: "<title>", isCorrect: false },
          { id: 2, text: "<h1>", isCorrect: true },
          { id: 3, text: "<head>", isCorrect: false },
          { id: 4, text: "<header>", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Какой атрибут указывает путь к изображению в <img>?",
        options: [
          { id: 1, text: "href", isCorrect: false },
          { id: 2, text: "src", isCorrect: true },
          { id: 3, text: "path", isCorrect: false },
          { id: 4, text: "link", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Что делает тег <br>?",
        options: [
          { id: 1, text: "Создаёт новый абзац", isCorrect: false },
          { id: 2, text: "Переходит на новую строку", isCorrect: true },
          { id: 3, text: "Создаёт таблицу", isCorrect: false },
          { id: 4, text: "Разделяет список", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Какой тег используется для создания таблицы?",
        options: [
          { id: 1, text: "<table>", isCorrect: true },
          { id: 2, text: "<tab>", isCorrect: false },
          { id: 3, text: "<tr>", isCorrect: false },
          { id: 4, text: "<td>", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Что делает тег <form>?",
        options: [
          { id: 1, text: "Создаёт ссылку", isCorrect: false },
          { id: 2, text: "Создаёт форму для ввода данных", isCorrect: true },
          { id: 3, text: "Создаёт изображение", isCorrect: false },
          { id: 4, text: "Создаёт таблицу", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Какой тег используется для ввода текста?",
        options: [
          { id: 1, text: "<textarea>", isCorrect: true },
          { id: 2, text: "<text>", isCorrect: false },
          { id: 3, text: "<inputtext>", isCorrect: false },
          { id: 4, text: "<textbox>", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Какой атрибут отвечает за альтернативный текст в <img>?",
        options: [
          { id: 1, text: "alt", isCorrect: true },
          { id: 2, text: "title", isCorrect: false },
          { id: 3, text: "description", isCorrect: false },
          { id: 4, text: "text", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "css",
    title: "CSS базовый",
    description: "Вопросы по основам CSS",
    questions: [
      {
        id: 1,
        text: "Какой селектор выбирает элемент по классу?",
        options: [
          { id: 1, text: "#class", isCorrect: false },
          { id: 2, text: ".class", isCorrect: true },
          { id: 3, text: "class", isCorrect: false },
          { id: 4, text: "*class", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Какое свойство задаёт цвет текста?",
        options: [
          { id: 1, text: "text-color", isCorrect: false },
          { id: 2, text: "color", isCorrect: true },
          { id: 3, text: "font-color", isCorrect: false },
          { id: 4, text: "foreground", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Какое свойство задаёт фон элемента?",
        options: [
          { id: 1, text: "background", isCorrect: true },
          { id: 2, text: "back-color", isCorrect: false },
          { id: 3, text: "color-bg", isCorrect: false },
          { id: 4, text: "bg", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Как задать жирный текст?",
        options: [
          { id: 1, text: "font-weight: bold;", isCorrect: true },
          { id: 2, text: "text-weight: bold;", isCorrect: false },
          { id: 3, text: "bold: true;", isCorrect: false },
          { id: 4, text: "font-bold: yes;", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Какое значение свойства display делает элемент блочным?",
        options: [
          { id: 1, text: "inline", isCorrect: false },
          { id: 2, text: "block", isCorrect: true },
          { id: 3, text: "flex", isCorrect: false },
          { id: 4, text: "none", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Как задать внешний отступ (margin) только слева?",
        options: [
          { id: 1, text: "margin-left", isCorrect: true },
          { id: 2, text: "left-margin", isCorrect: false },
          { id: 3, text: "margin-right", isCorrect: false },
          { id: 4, text: "side-margin", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Что делает свойство z-index?",
        options: [
          { id: 1, text: "Устанавливает прозрачность", isCorrect: false },
          { id: 2, text: "Определяет порядок наложения", isCorrect: true },
          { id: 3, text: "Определяет позицию элемента", isCorrect: false },
          { id: 4, text: "Управляет направлением текста", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Как задать курсив?",
        options: [
          { id: 1, text: "font-style: italic;", isCorrect: true },
          { id: 2, text: "text-style: italic;", isCorrect: false },
          { id: 3, text: "font: cursive;", isCorrect: false },
          { id: 4, text: "style: italic;", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Как задать размер шрифта?",
        options: [
          { id: 1, text: "font-size", isCorrect: true },
          { id: 2, text: "text-size", isCorrect: false },
          { id: 3, text: "font-scale", isCorrect: false },
          { id: 4, text: "size", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Как центрировать элемент по горизонтали (блочный)?",
        options: [
          { id: 1, text: "margin: auto;", isCorrect: true },
          { id: 2, text: "text-align: center;", isCorrect: false },
          { id: 3, text: "align: center;", isCorrect: false },
          { id: 4, text: "center: block;", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "ts",
    title: "TypeScript базовый",
    description: "Базовые вопросы по синтаксису и типизации",
    questions: [
      {
        id: 1,
        text: "Как объявить переменную с типом number?",
        options: [
          { id: 1, text: "let x: number;", isCorrect: true },
          { id: 2, text: "number x;", isCorrect: false },
          { id: 3, text: "let number = x;", isCorrect: false },
          { id: 4, text: "x: number = let;", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'Что делает тип "any"?',
        options: [
          {
            id: 1,
            text: "Запрещает использовать переменную",
            isCorrect: false,
          },
          {
            id: 2,
            text: "Позволяет использовать любое значение",
            isCorrect: true,
          },
          { id: 3, text: "Указывает только строки", isCorrect: false },
          { id: 4, text: "Является строгой типизацией", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Что такое интерфейс в TypeScript?",
        options: [
          { id: 1, text: "Тип переменной", isCorrect: false },
          { id: 2, text: "Описание структуры объекта", isCorrect: true },
          { id: 3, text: "Функция с параметрами", isCorrect: false },
          { id: 4, text: "Шаблон для массива", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Как объявить функцию, возвращающую строку?",
        options: [
          { id: 1, text: "function f(): string {}", isCorrect: true },
          { id: 2, text: "function f(string): {}", isCorrect: false },
          { id: 3, text: "function f() -> string {}", isCorrect: false },
          { id: 4, text: "function f = string", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: 'Что делает оператор "as" в TS?',
        options: [
          { id: 1, text: "Присваивает значение", isCorrect: false },
          { id: 2, text: "Проверяет тип", isCorrect: false },
          { id: 3, text: "Приводит к указанному типу", isCorrect: true },
          { id: 4, text: "Создаёт новый тип", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Как обозначается массив строк?",
        options: [
          { id: 1, text: "string[]", isCorrect: true },
          { id: 2, text: "[]string", isCorrect: false },
          { id: 3, text: "array<string>", isCorrect: false },
          { id: 4, text: "string<>", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Что означает тип void?",
        options: [
          { id: 1, text: "Пустой массив", isCorrect: false },
          { id: 2, text: "Отсутствие возвращаемого значения", isCorrect: true },
          { id: 3, text: "Неизвестный тип", isCorrect: false },
          { id: 4, text: "Неиспользуемая переменная", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Что такое union type?",
        options: [
          { id: 1, text: "Слияние объектов", isCorrect: false },
          {
            id: 2,
            text: "Тип, который может быть одним из нескольких",
            isCorrect: true,
          },
          { id: 3, text: "Объединение массивов", isCorrect: false },
          { id: 4, text: "Список интерфейсов", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Как обозначить необязательное свойство в интерфейсе?",
        options: [
          { id: 1, text: "name = string", isCorrect: false },
          { id: 2, text: "name?: string", isCorrect: true },
          { id: 3, text: "name: string = optional", isCorrect: false },
          { id: 4, text: "?name: string", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Какой тип подходит для переменной, которая может быть null?",
        options: [
          { id: 1, text: "string | null", isCorrect: true },
          { id: 2, text: "null", isCorrect: false },
          { id: 3, text: "nullable", isCorrect: false },
          { id: 4, text: "option<string>", isCorrect: false },
        ],
      },
    ],
  },
];

export default quizPacks;
