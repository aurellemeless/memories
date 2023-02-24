import './App.css';
import { Provider } from "react-redux";
import { Card, LOGOS } from './components/Card';
import store from './store';

function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function App() {
  const cards = [];
  const totalCards = 18;

  for(let i=0; i < totalCards; i++){
    const randomIndex = getRandomIndex(0,LOGOS.length-1);
    cards.push(randomIndex);
    while( cards.filter((c)=> c === randomIndex).length > 4){
      cards[i]=getRandomIndex(0,LOGOS.length-1);
    }
  }

  return (
    <Provider store={store}>

    <div className="App">
      <header className="App-header">
       <div> Memories Game </div>
       <div className='card-wrapper'>
        {cards.map((c, i)=><Card key={i} index={c}></Card>)}
       </div>
      </header>
    </div>
    </Provider>
  );
}

export default App;
