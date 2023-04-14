import React, { useState, useEffect } from 'react'
import { PokemonCard } from '../'
import { Link } from 'react-router-dom'

export default function Pokedex() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        // async function displayPokemon() {     
        // const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
        // const res = await fetch(url);
        // const data = await res.json();
        // setPokemon(data)
        // }

        function fetchKantoPokemon(){
            fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
             .then(response => response.json())
             .then(function(allpokemon){
             allpokemon.results.forEach(function(pokemon){
               fetchPokemonData(pokemon); 
             })
            })
        }
    
    
        function fetchPokemonData(pokemon){
            let url = pokemon.url 
              fetch(url)
              .then(response => response.json())
              .then(function(pokeData){
              console.log(pokeData)  
              setPokemon(pokeData)
              })
        }

        fetchKantoPokemon()
    }, [])

    

    return (
    <div className='pokemon'>
        {pokemon.map((pokemon) => <Link to={`${pokemon.id}`} key={pokemon.id}><PokemonCard pokemon={pokemon}/></Link>)}
    </div>
    )
}
