import './App.css';
import { Provider } from "react-redux";
import store from './store';
import { CardTable } from './components/Card/CardTable';
import { CardModel } from './models/CardModel';
import { getRandomIndex } from './utils';
import { LOGOS } from './components/Card';

function App() {

  const cards = [];
  const totalCards = 18;

  for(let i=0; i < totalCards; i++){
    const imageIndex = getRandomIndex(0,LOGOS.length-1);
    cards.push(new CardModel({imageIndex, position: i }));
    while( cards.filter((c)=> c.imageIndex === imageIndex).length > 4){
      cards[i].imageIndex =getRandomIndex(0,LOGOS.length-1);
    }
  }

  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       <CardTable data={cards}></CardTable>
      </header>
    </div>
    </Provider>
  );
}

export default App;
