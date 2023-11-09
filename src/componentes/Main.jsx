import style from "./Main.module.css"
import {useState} from "react";
import Card from "./Card";


function Main(props){
    const [playlist, setPlaylist] = useState([])
    function addPlaylist(nome){
        setPlaylist([...playlist, nome])
    }

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
                            <p>Tumbalacatumba</p>
                            <button onClick={()=>addPlaylist("/caveirasTumba.mp3")}>+</button>
                        </div>
                        <div className={style.musicas}>
                            <p>Spooky Scary Skeletons</p>
                            <button onClick={()=>addPlaylist("/SpookyScarySkeletons.mp3")}>+</button>
                        </div>
                        <div className={style.musicas}>
                            <p>Five Nights at freddy's theme</p>
                            <button onClick={()=>addPlaylist("/Fnaf.mp3")}>+</button>
                        </div>
                        <div className={style.musicas}>
                            <p>It's Halloween</p>
                            <button onClick={()=>addPlaylist("/ItsHalloweenFirstOfOctober.mp3")}>+</button>
                        </div>
                        <div className={style.musicas}>
                            <p>Coraline Theme</p>
                            <button onClick={()=>addPlaylist("/CoralineTheme.mp3")}>+</button>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className={style.playlist}>
                    <div className={style.capa}>
                        <div>
                            <img src="/SkeletonsScarryGif.gif" />
                        </div>
                        <div >
                            <h2>Minha playlist assustadora</h2>
                            <p>Embarque na magia sombria com nossa playlist de Halloween: arrepios garantidos!</p>
                        </div>
                    </div>
                    {playlist.map((item)=><Card item={item} setMusica={props.setMusica} musica={props.musica}></Card>)}
                </div>
            </div>
        </div>
    )
}

export default Main