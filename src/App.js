import './App.css';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Little Lemon logo" />

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Reservations</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h1>Reserve a Table</h1>
          <p>Book your table at Little Lemon</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Little Lemon</p>
      </footer>
    </>
  );
}

export default App;
