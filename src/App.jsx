import { useEffect, useState } from "react";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

const cardValues = [
  "🍎",
  "🥝",
  "🍇",
  "🥭",
  "🍉",
  "🍌",
  "🍐",
  "🍏",
  "🍎",
  "🥝",
  "🍇",
  "🥭",
  "🍉",
  "🍌",
  "🍐",
  "🍏",
];

function App() {

  const [cards, setCards] = useState([]);

  const initializeGame = () =>{
    //Shuffle the cards



   
    const finalCards = cardValues.map((value, index)=>(
      {
        id: index,
        value,
        isFlipped: false,
        ismatched: false
      }
    ));
    setCards(finalCards);
    
  }

  useEffect(()=>{
    initializeGame();
  },[]);

  const handleCardClick = (card) =>{
      
  }

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
}

export default App;
