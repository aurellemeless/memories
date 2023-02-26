import './App.css';
import { CardTable } from './components/Card/CardTable';
import { GeneratorController } from './controllers/generatorController';

function App() {

  const cards = GeneratorController.distribute();

  return (
    <div className="App">
      <header className="App-header">
       <CardTable data={cards}></CardTable>
      </header>
    </div>
  );
}

export default App;
