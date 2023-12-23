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
            <div>
                {start && <button className="css-button-sharp--black--salir" onClick={() => (salir())}>Salir</button>}
            </div>
            <div className="titulo">
                <h1>
                    <p>El juego del ahorcado</p>
                </h1>
            </div>
            <div className='imagenPrincipal'>
                {!start && <img src={imagen} alt="alto" />}
                {start && <Juego />}
            </div>
            <div>
                {!start && <button className="css-button-sharp--black" onClick={() => (iniciar())}>Jugar</button>}
            </div>
        </div>
    )
}

export default PantallaPrincipal