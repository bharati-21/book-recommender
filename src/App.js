import { useState } from "react";
import "./styles.css";
import { books } from "./Books";
import { Header } from "./Header";

export default function App() {
  const [bookGenre, setBookGenre] = useState("fiction");

  function genreClickHandler(genre) {
    setBookGenre(genre);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <header className="hero">
          <h1 className="hero-head">
            <span>📚</span> Book Recommender
          </h1>
          <p className="hero-lead italic">
            Check out my top reads, and pick a book to get started with reading!
          </p>
        </header>
        <main className="main">
          <section className="genre-links">
            <button
              key="fiction"
              onClick={() => genreClickHandler("fiction")}
              className="btn btn-red btn-genre"
            >
              Fiction
            </button>
            <button
              key="thriller"
              onClick={() => genreClickHandler("thriller")}
              className="btn btn-blue btn-genre"
            >
              Thriller
            </button>
            <button
              key="fantasy"
              onClick={() => genreClickHandler("fantasy")}
              className="btn btn-yellow btn-genre"
            >
              Fantasy
            </button>
            <button
              key="romance"
              onClick={() => genreClickHandler("romance")}
              className="btn btn-green btn-genre"
            >
              Romance
            </button>
            <button
              key="biography"
              onClick={() => genreClickHandler("biography")}
              className="btn btn-violet btn-genre"
            >
              Biographies
            </button>
            <button
              key="selfHelp"
              onClick={() => genreClickHandler("selfHelp")}
              className="btn btn-pink btn-genre"
            >
              Self Help
            </button>
          </section>
          <section className="book-list">
            <div className="books">
              {books[bookGenre].map((book, index) => {
                return (
                  <div className={(bookGenre, "book")} key={index}>
                    <div className={bookGenre}>
                      <div className="img-container">
                        <img src={book.image} />
                      </div>
                      <div className="book-details" id={bookGenre}>
                        <p className="book-name">{book.name}</p>
                        <p className="book-author italic">{book.author}</p>
                        <p className="book-description">{book.description}</p>
                        <p className="book-rating">{book.rating}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
