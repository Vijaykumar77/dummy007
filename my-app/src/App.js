
import './App.css';
import Fruit from './Component/Fruit';


function App() {
  const fruits=
    {
    name:"Mango",
    color:"Yellow"
    }
  
  return (
    <div className="App">
      <Fruit fruits={fruits} />
    </div>
  );
}

export default App;
