import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { CardTable } from './components/Card/CardTable';
import { CardModel } from './models/CardModel';
import { getRandomIndex } from './utils';
import { LOGOS, MAX_REPEAT_PATTERN, TOTAL_CARDS } from './components/types';

function App() {
	const cards = [];

	for (let i = 0; i < TOTAL_CARDS; i++) {
		const imageIndex = getRandomIndex(0, LOGOS.length - 1);
		cards.push(new CardModel({ imageIndex, position: i }));

		while (
			cards.find((c) => c.imageIndex === imageIndex) &&
			cards.filter((c) => c.imageIndex === imageIndex).length > MAX_REPEAT_PATTERN
		) {
			cards[i].imageIndex = getRandomIndex(0, LOGOS.length - 1);
		}
	}
	/**
	 *
	 * Debug tools to resolve perfects pairs generation
	 */
	const unpairs = [];

	LOGOS.forEach((_, index) => {
		let unpairsImages = cards.filter((c) => c.imageIndex === index);
		if (unpairsImages && unpairsImages.length % 2 !== 0) {
			unpairs.push({ patternIndex: index, size: unpairsImages.length, cards: unpairsImages });
		}
	});

	console.log('bad pairs quantity ', unpairs);

	return (
		<Provider store={store}>
			<div className='App'>
				<header className='App-header'>
					<CardTable data={cards}></CardTable>
				</header>
			</div>
		</Provider>
	);
}

export default App;
