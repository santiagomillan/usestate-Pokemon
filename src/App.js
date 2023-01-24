import React, { useState } from 'react';
import "./App.css";

function App() {
  const [count, setCount] = useState([]);
console.log(count)


  const contar = () =>{
    setCount([...count, Math.ceil(Math.random() * Math.floor(400)) ]);
        // console.log("Click",count)
      }

    //   const incrBy3 = () => {
    //     setCounter((prev) => prev + 3);
    // };
  const restar = () =>{
    // const newArr = count.filter( count.findIndex === count.length)
    // // setCount([...count, count.filter(count => count === count[-1])])
    // // setCount(prev => ([...prev]));
    // // console.log("Click",count)
    // setCount(newArr)
    setCount(count.slice(0, count.length-1))
    
  }

  const borrar = () =>{
    setCount([])
    
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
                <button onClick={borrar} class="clear">CLEAR</button>
            </div>
        </section>
       {/* <section class="pokemon">
       {count?.map(poke => <div class="cards"> 
       <h1>pokemon {poke}</h1>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`} alt={`poke${poke}`}/>
          </div>
      )}
        </section>  */}
       <div class="cards-container">
       {count?.map(poke => <section class="pokemon">
          <div class="cards"> 
            <h1>pokemon {poke}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`} alt={`poke${poke}`}/>
          </div>
          </section>
      )}
         </div>

      

    </main>
</body>
   
  );
}

export default App;