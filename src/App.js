import logo from './components/icons/logo.svg';
import './App.css';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="App">
      <header />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Navbar />

    </div>
  );
}

export default App;
