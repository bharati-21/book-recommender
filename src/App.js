import "./styles.css";

export default function App() {
  return (
    <div className="App">
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
            <button className="btn btn-primary btn-genre">Fiction</button>
            <button className="btn btn-primary btn-genre">Thriller</button>
            <button className="btn btn-primary btn-genre">Fantasy</button>
            <button className="btn btn-primary btn-genre">Romance</button>
            <button className="btn btn-primary btn-genre">Biographies</button>
            <button className="btn btn-primary btn-genre">Self Help</button>
          </section>
          <section className="book-list"></section>
        </main>
      </div>
    </div>
  );
}
