import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Umbrella Corporation was a multinational conglomerate with <br />
          subsidiaries active in a variety of industries from the 1980s to the
          early 2000s.
        </p>
        <a
          className="App-link"
          href="https://residentevil.fandom.com/wiki/Umbrella_Corporation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anbout Umbrella
        </a>
      </header>
    </div>
  );
}

export default App;
