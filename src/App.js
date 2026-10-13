import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">      
        
        <Weather/>
          <p>
            This project was coded by Olesia Kononova and Open-sourced{" "}
            <a
              href="https://github.com/Olesia20/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
          </p>
      </div>
    </div>
  );
}

export default App;
