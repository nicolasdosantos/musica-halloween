import style from "./Play.module.css"


function Play(){
    return(
        <div className={style.play}>
            <div>
                <i className="fa-solid fa-backward"></i>
                <i className="fa-solid fa-play"></i>
                <i className="fa-solid fa-forward"></i>
            </div>
        </div>
    )
}

export default Play