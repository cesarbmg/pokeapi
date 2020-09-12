import React, {useEffect, useState} from 'react';

import Pokedex from '../lib/pokedex'

export default function PockemonBadge({ name = '', url = '' })
{    
    const [pokemon, setPokemon] = useState([])
    const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png")
    
    useEffect(() => {
        Pokedex.getPokemonByName(name)
        .then((pokedexResponse) => {
            setPokemon(pokedexResponse);
            setImage(pokedexResponse.sprites.front_default)
        })
      }, [])

    return(
        <article className='pokemon-card'>
            <header>
                <img 
                src={image}
                alt="pokemon"/>
            </header>
            <footer>
                {name}
            </footer>
        </article>  
    )
}