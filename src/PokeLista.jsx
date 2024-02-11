import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard'

const PokeLista = () => {
    const [pokemones, setPokemones] = useState ([])
    const [next, setNext] = useState ()
    const [prev, setPrev] = useState ()
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const handleSiguientes = () =>{
        setUrl(next)
    }

    useEffect(() => {
        fetch (url)
        .then (res => res.json())
        .then (data => {
            setNext(data.next)
            setPrev(data.previous)
            setPokemones(data.results)
        })
        .catch (err => console.log(err))
    }, [url])


  return (
    <div>
        {pokemones.map(poke => <PokeCard pokedata={poke} key={poke.name}/>)}
        <button onClick={() => handleSiguientes()}>
            siguientes
        </button>
    </div>
  )
}

export default PokeLista