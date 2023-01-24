import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Task from './Task';
import Lifecycle from './components/Lifecycle'
import Componentincomponent from './components/Nexted';
import name from './components/Nexted'
import Nexted from './components/Nexted';
function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>

      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder woman">
      </Greet> */}
      
      {/* <Welcome name="Bruce" heroName="Batman"></Welcome>

      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder woman"/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Task/> */}
      <Lifecycle name="Car Showroom"  village="kadiri"/>
      {/* <Componentincomponent village="Anantapuram" number="9066420890"/> */}
{/* <Nexted /> */}
      
    </div>
  );
}

export default App; 
