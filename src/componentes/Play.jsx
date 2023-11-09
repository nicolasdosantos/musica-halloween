import style from "./Play.module.css"
import {useState} from "react";


function Play(props){
    const [botao, setBotao] = useState(<i className="fa-solid fa-pause"></i>)
    function tocar(){
        if (props.musica.paused === false) {
            props.musica.pause()
            setBotao(<i className="fa-solid fa-play"></i>)
        } else {
            props.musica.play()
            setBotao(<i className="fa-solid fa-pause"></i>)
        }
    }

    return(
        <div className={style.play}>
            <div>
                <button onClick={tocar}>{botao}</button>
            </div>
        </div>
    )
}

export default Play