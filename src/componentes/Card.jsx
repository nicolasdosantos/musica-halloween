import style from "./Main.module.css";
import {useState} from "react";

function Card(props){
    const [deleta, setDeleta] = useState("flex")

    function mudarNome(){
        let aux = props.musica
        aux.src = props.item
        props.setMusica(aux)
        props.musica.play()
    }

    function deletar(){
        setDeleta("none")
    }

    return(
        <div className={style.play} style={{display: deleta}}>
            <p>{props.item}</p>
            <button onClick={mudarNome}>
                <i className="fa-solid fa-play"></i>
            </button>
            <button onClick={deletar}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}

export default Card