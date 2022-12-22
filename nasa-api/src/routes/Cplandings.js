import React, {useState, useEffect} from 'react'
import '../components/global.css'
import List from '../components/commons/List'

const Cplandings = () => {

    const [landings, setLandings] = useState([])
    const [list, setList] = useState([])

    const getData = async () =>{
        const resp = await fetch(`https://nasa-api-lsnw.onrender.com/api/astronomy/landings`);
        const data = await resp.json();
        setLandings(data)
    }

    useEffect(() => {getData()}, [])

    const showLandings = () => {
        setList(landings)
    }

    const handleRemoveLanding = (landing) => {
        const list = landings.filter((item) => item !== landing)
        setList(list)
        setLandings(list)
    }

    if (landings.length === 0) return "Cargando..."
    
    return (
        <>
        <div className='cp-wrapper'>
            <h2>Panel de Control de asteroides</h2>
            
            <form className='new-landing' method='POST'>   
                <h5>Registrar un asteroide</h5> 
                <label>Nombre</label> <input type="text" id="landing-name" name="landing-name"/>
                <label>Clase</label> <input type="text" id="landing-class" name="landing-class"/>
                <label>Año</label> <input type="text" id="landing-year" name="landing-year"/>
                <label>Masa (en toneladas)</label> <input type="number" id="landing-mass" name="landing-mass"/>
                <label>Latitud</label> <input type="text" id="landing-latitude" name="landing-latitude"/>
                <label>Longitud</label> <input type="text" id="landing-longitude" name="landing-longitude"/>
                <button className='form-button'>Registrar</button>
            </form>

            <button className='button'onClick={() => showLandings()}>Mostrar todos los asteroides</button>
            <List landings={landings} list={list} onRemoveLanding={(landing) => handleRemoveLanding(landing)}/>
        </div>
        </>
    )
}

export default Cplandings
