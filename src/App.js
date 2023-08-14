import "./App.css";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import phone from "./assets/phone.png";

function App() {
  return (
    <div className="App flex column">
      <Header />
      <h1 className="title upper-case-text">
        <span>
          C<span className="inline-text">a</span>sh
        </span>
        <img className="app-text-img" src={phone} alt="phone" />
        <span className="app-text">app</span>
      </h1>
      <Bottom />
    </div>
  );
}

export default App;
