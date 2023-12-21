import React from "react"
import './index.css'
import imagen from './ahorcadito.jpg'
import Juego from '../Juego'




function PantallaPrincipal() {
    const [start, setStart] = React.useState(false)

    const iniciar = () => {
        setStart(true)
    }
    const salir = () => {
        setStart(false)
    }

    return (
        <div className='contenedor'>
            <div className="botonSalir">
                {start && <button onClick={() => (salir())}>Salir</button>}
            </div>
            <h1>
                <p>El juego del ahorcado</p>
            </h1>
            <div className='imagenPrincipal'>
                {!start && <img src={imagen} alt="alto" />}
                {start && <Juego />}
            </div>
            <div className="boton">
                {!start && <button onClick={() => (iniciar())}>Iniciar</button>}
            </div>
        </div>
    )
}

export default PantallaPrincipal