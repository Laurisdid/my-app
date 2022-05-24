import { useRef, useState } from 'react';
import './App.scss';

function App() {

    const [count, setCount] = useState(0);

    const mano = useRef(0);
    const panda = useRef();

    const add = () => {
        setCount(c => c + 1);
        mano.current = mano.current + 3;
        console.log(mano.current);
        // const p = document.querySelector('#panda');
     //   const p = panda.current;
        // console.log(p.dataset.panda);
    }
    const addCat=()=>{
        localStorage.setItem('katinukas',JSON.stringify(8));
    }
    const getCat=()=>{
        console.log(JSON.parse(localStorage.getItem(['katinukas','pilkis'])))
    }
    const remCat =()=>{
        localStorage.removeItem('katinukas');
    }

    return (
        <div className="App">
          <header className="App-header">
           <h1>useRef LocalStorage {count}</h1>
           <button onClick={add}>+1</button>
           <div ref={panda} data-panda="miega"></div>
           <button onClick={addCat} cat>add cat</button>
           <button onClick={getCat} cat>get cat</button>
           <button onClick={remCat} cat>rem cat</button>
          </header>
        </div>
      );

}

export default App;