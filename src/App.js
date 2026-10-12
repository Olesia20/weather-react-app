import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather react app </h1>
          <Weather city="Tokyo" />
        </header>
      </div>
    </div>
  );
}

export default App;
