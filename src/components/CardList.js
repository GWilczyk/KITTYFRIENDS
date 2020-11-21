import React from 'react';
import Card from './Card';

const CardList = ({ kitties }) => {
	return (
		<div>
			{kitties.map(kitty => (
				<Card {...kitty} key={kitty.id} />
			))}
		</div>
	);
};

export default CardList;
