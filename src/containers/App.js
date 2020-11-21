import './App.css';

import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const App = () => {
	const [kitties, setKitties] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		async function fetchUsers() {
			const usersPromise = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const users = await usersPromise.json();
			setKitties(users);
		}
		fetchUsers();
	}, []);

	const onSearchChange = event => setSearchField(event.target.value);

	const filteredKitties = kitties.filter(kitty =>
		kitty.name.toLowerCase().includes(searchField.toLowerCase())
	);

	return !kitties.length ? (
		<h1>Loading…</h1>
	) : (
		<div className='tc'>
			<h1 className='f1'>Kittyfriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList kitties={filteredKitties} />
				</ErrorBoundry>
			</Scroll>
		</div>
	);
};

export default App;
