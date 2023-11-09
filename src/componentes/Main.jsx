import style from "./Main.module.css"


function Main(){
    return(
        <div className={style.main}>
            <div>
                <div className={style.musica}>
                    <div >
                        <h1>Adicionar música</h1>
                    </div>

                    <hr />

                    <div >
                        <div className={style.musicas}>
                            <p>Nome da musica</p>
                            <button>+</button>
                        </div>
                        <div className={style.musicas}>
                            <p>Nome da musica</p>
                            <button>+</button>
                        </div>
                        <div className={style.musicas}>
                            <p>Nome da musica</p>
                            <button>+</button>
                        </div>
                        <div className={style.musicas}>
                            <p>Nome da musica</p>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className={style.playlist}>
                    <div className={style.capa}>
                        <div>
                            <img src="/capa.svg" />
                        </div>
                        <div >
                            <h2>Minha playlist assustadora</h2>
                            <p>Embarque na magia sombria com nossa playlist de Halloween: arrepios garantidos!</p>
                        </div>
                    </div>
                    <div className={style.play}>
                        <p>Nome da musica</p>
                        <button>
                            <i className="fa-solid fa-play"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    <div className={style.play}>
                        <p>Nome da musica</p>
                        <button>
                            <i className="fa-solid fa-play"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    <div className={style.play}>
                        <p>Nome da musica</p>
                        <button>
                            <i className="fa-solid fa-play"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main