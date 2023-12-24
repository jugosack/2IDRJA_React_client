import logo from "./components/icons/logo.svg";
import "./App.css";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
