import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This project was coded by
          <a
            href="https://www.shecodes.io/graduates/51715-olesia-kononova?_gl=1*bl3u2c*_up*MQ..*_ga*MTM0NTMwMzMzMS4xNzkxOTI0OTg0*_ga_HB45F6ZNE6*czE3OTE5MjQ5ODMkbzEkZzAkdDE3OTE5MjQ5ODMkajYwJGwwJGgw"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Olesia Kononova
          </a>{" "}
          and Open-sourced{" "}
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
