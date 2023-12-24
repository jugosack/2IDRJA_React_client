import logo from "./components/icons/logo.svg";
import "./App.css";
import Navbar from "./components/ui/Navbar";

function App() {
  const header = () => {
    return (
      <div>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
      </div>
    );
  };
  return (
    <div className="App">
      <Navbar />
      <header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
