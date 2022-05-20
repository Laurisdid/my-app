import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/Kurmis';
import ZirB from './Components/009/ZirB';
import Betkas from './Components/009/betkas';
import Kumpis from './Components/009/5';
import SpalvuKeitimas from './Components/009/spalvotas';
import Sakinys from './Components/009/apps';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hello spalva="pink" bg="yellow"></Hello>
       <Kurmis spalva="23" ></Kurmis>
       <ZirB></ZirB>
       <Betkas></Betkas>
       <Kumpis spalva="pink" bg="yellow" size="7px"></Kumpis>

       <SpalvuKeitimas spalva1="pink"spalva2="black"></SpalvuKeitimas>

       <Sakinys tekstas1={'tekstas pirmas '} tekstas2={'tekstas antras'} spalva="purple" ></Sakinys>
      </header>
    </div>
  );
}

export default App;
