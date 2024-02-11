import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'

const PokeCard = ({pokedata}) => {

    const [pokeData, setPokeData] = useState()

    const getPokeById = async () =>{
        try{
            const res = await fetch (pokedata.url)
            const data = await res.json()
            setPokeData(data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getPokeById()
    },[])

  return (
    <>
    {
        pokeData &&
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokeData.sprites.front_default} />
            <Card.Body>
            <Card.Title>{pokeData.name}</Card.Title>
            </Card.Body>
        </Card>
  </div>
    }
    </>
    )
}

export default PokeCard