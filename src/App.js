import logo from './components/icons/logo.svg';
import './App.css';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="App">
      <div className='background'>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Navbar />
      

      </div>
    </div>
  );
}

export default App;
