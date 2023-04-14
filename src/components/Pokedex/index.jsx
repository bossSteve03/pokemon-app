import React, { useState, useEffect } from 'react'
import { PokemonCard } from '../'
import { Link } from 'react-router-dom'

export default function ShowGallery() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function displayPokemon() {     
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
        const res = await fetch(url);
        const data = await res.json();
        setPokemon(data)
        }

        displayPokemon()
    }, [])

    // function fetchKantoPokemon(){
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //      .then(response => response.json())
    //      .then(function(allpokemon){
    //      allpokemon.results.forEach(function(pokemon){
    //        fetchPokemonData(pokemon); 
    //      })
    //     })
    //    }


    // function fetchPokemonData(pokemon){
    //     let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    //       fetch(url)
    //       .then(response => response.json())
    //       .then(function(pokeData){
    //       console.log(pokeData)
    //       })
    //     }

    return (
    <div className='pokemon'>
        {pokemon.map((show) => <Link to={`${pokemon.id}`} key={pokemon.id}><PokemonCard pokemon={pokemon}/></Link>)}
    </div>
    )
}
