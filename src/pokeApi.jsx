import React, { useEffect, useState } from 'react'

const PokeApi = () => {

    const [pokeData, setPokeData] = useState()

    const [id, setId] = useState(1)
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const handleSig = () =>{
        setId(id +1)
    }

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPokeData(data))
        .catch(err=>console.log(err))
    }, [id])
    
    console.log(pokeData)
  return (
      <>
        {
            pokeData &&
            <div>
              <img src={pokeData.sprites.front_default} alt="holi" />
              <h2>{pokeData.name}</h2>
              <button onClick={()=>handleSig()}>sig</button>
            </div>   
        }
    </>
  )
}
export default PokeApi