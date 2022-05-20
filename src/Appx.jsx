import { useState } from 'react';
import './App.css';

function App() {
    // const mygtukas = () =>{
    //     console.log('as mygtukas');
    //     return mygtukBr;
    // }
    // const mygtukBr = () =>{
    //     console.log('as mygtuko brolis');
    //     return
    // }
    const [spalva, setSpalva] = useState('yellow');


    const beArgumentu =()=>{
        console.log('beArgumentu')
    }
    
    const suArgumentu =(ka)=>{
        console.log('suArgumentu'+ ka)
    }
    const keistaSpalva=()=>{
        setSpalva('pink');
    }
    // const naujaSpalva = ()=>{
    //    setSpalva(old => old === 'yellow' ? 'pink' : 'yellow');
    
    // }
 
    return (
      <div className="App">
        <header className="App-header">
            <h1 style={{color: spalva}}>state{skaiius()}</h1>
            <button onClick={keistaSpalva}>keiziam spalva</button>
        <button onClick={skaiius}>Press</button>
        <button onClick={suArgumentu('labas')}>press me !</button>
        </header>
    &rbrace; </div>
    );
};
  
export default App;