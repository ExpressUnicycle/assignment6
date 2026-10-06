const books = [
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    pages: 422,
    year: 2012,
    genre: "Thriller",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    pages: 489,
    year: 2003,
    genre: "Thriller",
  },
  {
    title: "The Hobbit",
    author: "J.R.R Tolkein",
    pages: 304,
    year: 1937,
    genre: "Fantasy",
  },
  {
    title: "A Game of Thrones",
    author: "George R.R Martin",
    pages: 807,
    year: 1996,
    genre: "Fantasy",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pages: 661,
    year: 2007,
    genre: "Fantasy",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 617,
    year: 1965,
    genre: "Science Fiction",
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    pages: 304,
    year: 1969,
    genre: "Science Fiction",
  },
  {
    title: "Neuromancer",
    author: "WIlliam Gibson",
    pages: 304,
    year: 1984,
    genre: "Science Fiction",
  },
  {
    title: "Hyperion",
    author: "Dan Simmons",
    pages: 481,
    year: 1989,
    genre: "Science Fiction",
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    pages: 478,
    year: 1992,
    genre: "Science Fiction",
  },
];

const wrapper = document.getElementById("wrapper");
const sortTitle = document.getElementById("sortTitle");
const sortPages = document.getElementById("sortPages");
const sortYear = document.getElementById("sortYear");
const submitButton = document.getElementById("submit");
const categorySelect = document.getElementById("select");

const sortMethods = {
  sortTitle: (a, b) => a.title.localeCompare(b.title),
  sortPages: (a, b) => a.pages - b.pages,
  sortYear: (a, b) => a.year - b.year,
};

function renderBooks(books) {
  wrapper.innerHTML = "";
  const bookCount = document.createElement("h1");
  bookCount.textContent = `Number of books: ${books.length} of 10.`;
  wrapper.appendChild(bookCount);
  books.map((book) => {
    const ele = document.createElement("div");
    ele.textContent = `${book.title} by ${book.author} published in ${book.year}. Genre: ${book.genre}. Pages: ${book.pages}`;
    wrapper.appendChild(ele);
  });
}

function filterBooks() {
  const category = categorySelect.value;

  if (category === "all") {
    return [...books];
  }

  if (
    category === "Thriller" ||
    category === "Fantasy" ||
    category === "Science Fiction"
  ) {
    return books.filter((book) => book.genre === category);
  }

  if (category === "under-450") {
    return books.filter((book) => book.pages < 450);
  }

  if (category === "after-2000") {
    return books.filter((book) => book.year > 2000);
  }

  return [...books];
}

sortTitle.addEventListener("click", function (e) {
  const filteredBooks = filterBooks().sort(sortMethods["sortTitle"]);
  renderBooks(filteredBooks);
  console.log(books);
});

sortPages.addEventListener("click", function (e) {
  const filteredBooks = filterBooks().sort(sortMethods["sortPages"]);
  renderBooks(filteredBooks);
});

sortYear.addEventListener("click", function (e) {
  const filteredBooks = filterBooks().sort(sortMethods["sortYear"]);
  renderBooks(filteredBooks);
});


submitButton.addEventListener("click", function (e) {
    const filteredBooks = filterBooks();
    renderBooks(filteredBooks);
  }
);

renderBooks(books);
