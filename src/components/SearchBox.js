import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input
				id='search'
				type='search'
				placeholder='Search kitty…'
				className='pa3 ba b--green bg-lightest-blue'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
