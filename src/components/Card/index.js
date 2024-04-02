import { useDispatch } from 'react-redux';
import { cardSelected, enqueueCard } from '../../store/reducers';
import { CARD_STYLE, LOGOS } from '../types';

export function Card({ model: { imageIndex, position }, active, matched }) {
	const dispatch = useDispatch();
	const handleOnClick = (e) => {
		if (matched) return;
		dispatch(cardSelected({ position }));
		dispatch(enqueueCard({ position, imageIndex }));
	};

	return (
		<div
			style={CARD_STYLE}
			className={(matched && 'card-item-match') || (active && 'card-item-active') || 'card-item'}
			onClick={handleOnClick}
		>
			{matched ||
				(active ? (
					<img style={CARD_STYLE} src={process.env.PUBLIC_URL + LOGOS[imageIndex]} alt='recto' />
				) : (
					<img style={CARD_STYLE} src={process.env.PUBLIC_URL + 'logo192.png'} alt='verso' />
				))}
		</div>
	);
}
