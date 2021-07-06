import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="hero bg-off-white">
        <div className="container">
          <h1 className="hero-head">
            <span>📚</span> Book Recommender
          </h1>
          <p className="hero-lead italic">
            Check out my top reads, and pick a book to get started with reading!
          </p>
        </div>
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
      </main>
      <footer className="footer bg-off-white">
        <div className="container">
          <div className="bold italic">&copy; Book Recommender 2021</div>
          <div>
            <strong>
              Author: <em>Bharati Subramanian</em>
            </strong>
          </div>
        </div>
      </footer>
    </div>
  );
}
