import React, {useEffect, useState} from 'react';
import PockemonBadge from './components/PockemonBadge'
import Pokedex from './lib/pokedex'
import './styles/index.scss'

function App() {

  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    Pokedex.getPokemonsList({limit: 151})
    .then((pokedexResponse) => {
      setPokemons(pokedexResponse.results);
    })
  }, [])

  return (
    <>
    <nav>
      <img 
      src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
      alt="pokeAPI"
      className='logo'
      />
    </nav>
    <main>
      <section className='results'>
       {
         pokemons.map((pokemon)=>{
          return <PockemonBadge name={pokemon.name} />   
         })
       }         
      </section>
    </main>
    </>
  );
}

export default App;
