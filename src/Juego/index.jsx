import React from "react";
import './index.css'


const listaPalabras = ['aereo', 'casa', 'casanovasos']
const randomWord = listaPalabras[Math.floor(Math.random() * listaPalabras.length)]
let saveWord = randomWord.toUpperCase().split('')
const ciclos = Math.trunc(saveWord.length * 0.6)

for (let i = 0; i < ciclos; i++) {
    const random = Math.floor(Math.random() * saveWord.length)
    //console.log(random)
    saveWord[random] = ''
}


function Juego() {
    const [errorCaptura, setErrorCaptura] = React.useState(false)
    const [ultimoIntento, setUltimoIntento] = React.useState('')


    function capturar(event) {
        event.preventDefault();
        setErrorCaptura(false)
        setUltimoIntento(document.getElementById('entrada').value)
        const captura = document.getElementById('entrada').value

        if (captura.length !== 1 && captura.length !== saveWord.length) {
            setErrorCaptura(true)
            return;
        }
        
        for(let i= 0 ; i < randomWord ; i++){

        }
        document.getElementById('entrada').value = ""

        
                
    }


    return (
        <div className="contenedor">
            {
                saveWord.map((letra, i) => {
                    return letra !== '' ?
                        (<div key={i} className="letra"><p>{letra}</p></div>) :
                        (<div key={i} className="letra"><p>&nbsp;</p></div>)

                })
            }
            <form onSubmit={capturar} className="envio">
                <input placeholder="presiona enter para enviar" id="entrada" type="text" />
                <p>Longitud de la palabra: {randomWord.length} - Ultimo intento: {ultimoIntento} </p>
                {errorCaptura && <p id='parrafoInputError'>Asegurate de escribir solo una letra, si te sabes la palabra
                    completa puedes escribirla en la casilla</p>}
            </form>

        </div>

    )
}


export default Juego