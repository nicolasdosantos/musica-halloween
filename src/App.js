import logo from './logo.svg';
import './App.css';
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Play from "./componentes/Play";
import {useState} from "react";

function App() {
    const [musica, setMusica] = useState(new Audio())
  return (
    <div className="App">
        <Header></Header>
        <Main setMusica={setMusica} musica={musica}></Main>
        <Play musica={musica}></Play>
    </div>
  );
}

export default App;
