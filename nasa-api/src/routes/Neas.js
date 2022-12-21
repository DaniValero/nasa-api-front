import React, {useState} from 'react'
import Map from '../components/Map'

const Neas = () => {

    const [input, setInput] = useState("")
    const [neas, setNeas] = useState([])

    const findLanding = (e) => {
        e.preventDefault(e)
        setInput(input)
        setInput("")
    }
    
    return (
        <>
        <h2>Buscar NEAs</h2>
        <form className='buscar'>
            <input type= "text" value={input} onChange={(event) => setInput(event.target.value)}/>
            <button onClick={(e) => findLanding(e)}>Buscar</button>
        </form>
        </>
    )
}

export default Neas