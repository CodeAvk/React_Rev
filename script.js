const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring
const book = getBook(3);
const { title, author, pages, publicationDate, hasMovieAdaptation } = book;
title;
author;
pages;
publicationDate;

const pageRange = pages > 1000 ? "over a thausand" : "less than 1000";
pageRange;

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// function getYear(str) {          if you use {} then make sure use return keyword otherwise it will show undefined
//   return str.split("-")[0];
// }

const summary = `${title}, a${pages}page long long book, written by ${author} and published in ${getYear(
  publicationDate
)},The book has ${hasMovieAdaptation ? "" : "not"}  been adapted as a movie`;
summary;

console.log(hasMovieAdaptation && "This book has a movie");
console.log(book.translations.spanish || "Not available in Spanish Lang");

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;

  return goodreads + librarything;
}
const books = getBooks();

const doubles = [1, 2, 3, 4].map((el) => el * 2);
// doubles;

const titles = books.map((book) => book.title);
titles;

// const essentialData = books.map((book) => {
//   return {
//     book: book.title,
//     author: book.author,
//     reviewsCount: getTotalReviewCount(book),
//   };
// });

const essentialData = books.map((book) => ({
  book: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

// essentialData;

// const longBookswithMovieadpation = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBookswithMovieadpation;

// const advantureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// advantureBooks;

// const arr = [1, 7, 3, 4, 9];
// const sorted=arr.sort((a, b) => b - a);
// sorted

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log("data : ", data);

  return data;
}
const data_1 = getData();
console.log(data_1);
// getData();
