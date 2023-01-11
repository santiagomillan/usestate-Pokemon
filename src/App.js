import React, { useState } from 'react';
import "./App.css";

function App() {
  const [count, setCount] = useState([]);
console.log(count)


  const contar = () =>{
    setCount([...count, Math.ceil(Math.random() * Math.floor(400)) ]);
        // console.log("Click",count)
      }

  const restar = () =>{
    setCount([...count.pop()]);
    // console.log("Click",count)
  }
  
  return (
    <body>
    <header class="header">
            <h1 class="tituloHeader">Pokemon </h1>
            <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png" alt="pokemon" height="80px"/>
    </header>

    <main>

        <section class="buttons">
            <div class="actions">
                <button onClick={contar} class="add">ADD</button>
                <button onClick={restar} class="delete">DELETE LAST</button>
                <button class="clear">CLEAR</button>
            </div>
        </section>
       <section class="pokemon">
       {count?.map(poke => <div class="cards"> 
       <h1>pokemon {poke}</h1>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`} alt="poke1"/>
          </div>
      )}
        </section> 
      

      

    </main>
</body>
   
  );
}

export default App;