import Astha from './Astha.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Astha} className="App-Astha" alt="Astha" />
        <p>
        Astha Hannas
        Kampus pembangunan karakter bangsa Indonesia.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
