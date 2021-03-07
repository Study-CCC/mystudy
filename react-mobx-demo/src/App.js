import logo from './logo.svg';
import './App.css';
import ObserverDemo from './components/observer'
function App() {
  // const arr = observer(['1',2,3])
  // console.log(arr,Array.isArray(arr))
  return (
    <div className="App">
     <ObserverDemo />
    </div>
  );
}

export default App;
