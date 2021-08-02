import React,{useState,useEffect} from "react"
import './App.css'
import Wrongletters from "./components/Wrongletters"
import Figure from "./components/Figure"
import Header from './components/Header'
import Word from "./components/Word"
import Popup from "./components/Popup"
import Notification from "./components/Notification"
import { showNotification as show, checkWin } from './helpers/helpers'


const words=['hockey','application','programming','react','javascript','newtonschool','unique','fantastic','triumph','victory','secure','cricket','badminton','olympics','subbarao','angular','typescript','navigation','temperature','android'];
let selectWord=words[Math.floor(Math.random()*words.length)];

function App(){
  const[playable,setPlayable]=useState(true);
  const[correctLetters,setCorrectLetters]=useState([]);
  const[wrongLetters,setWrongLetters]=useState([]);
  const[showNotification,setShowNotification]=useState(false);

  useEffect(()=>{
    const handleKeydown=event=>{
      const{key,keyCode}=event;
      if(playable && keyCode>=65 && keyCode<=90){
        const letter=key.toLowerCase();
        if(selectWord.includes(letter)){
          if(!correctLetters.includes(letter)){
            setCorrectLetters(currentLetters=>[...currentLetters,letter]);
          }else{
            show(setShowNotification);
          }
        }else{
          if(!wrongLetters.includes(letter)){
            setWrongLetters(currentLetters=>[...currentLetters,letter]);
          }else{
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown',handleKeydown);
    return ()=>window.removeEventListener('keydown',handleKeydown);
  },[correctLetters,wrongLetters,playable]);

  function playAgain() {
    setPlayable(true);
    //empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectWord = words[random];

  }

  return(
    <div>
    <Header/>
    <div className="game-container">
    <Figure wrongLetters={wrongLetters}/>
    <Wrongletters wrongLetters={wrongLetters}/>
    <Word selectWord={selectWord} correctLetters={correctLetters}/>
    </div>
    <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectWord={selectWord} setPlayable={setPlayable} playAgain={playAgain}/>
    <Notification showNotification={showNotification}/>

    </div>
  )
}
export default App