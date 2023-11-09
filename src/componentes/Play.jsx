import style from "./Play.module.css"
import {useState} from "react";


function Play(props){
    const [botao, setBotao] = useState(<i className="fa-solid fa-play"></i>)
    function tocar(){
        if (props.musica.paused === false) {
            props.musica.pause()
            setBotao(<i className="fa-solid fa-pause"></i>)
        } else {
            props.musica.play()
            setBotao(<i className="fa-solid fa-play"></i>)
        }
    }
    return(
        <div className={style.play}>
            <div>
                <button><i className="fa-solid fa-backward"></i></button>
                <button onClick={tocar}>{botao}</button>
                <button><i className="fa-solid fa-forward"></i></button>
            </div>
        </div>
    )
}

export default Play