import love from './love.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={love} className="App-love" alt="love" />
        <p>
        "Love pink" merujuk pada perasaan cinta atau kasih sayang yang terkait dengan warna pink.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          MORE INFO
        </a>
      </header>
    </div>
  );
}

export default App;