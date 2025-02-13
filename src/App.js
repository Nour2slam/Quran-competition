
import './App.css';
import Button from './ButtonComponent';
import Nav from './NavBar';

function App() {
  function p() {
    alert("hello nour")
  }
  return (
    <div className="App">
      <nav>
        <Nav level="مستوي القران كامل"/>
      </nav>
  
    </div> 
  );
}

export default App;
