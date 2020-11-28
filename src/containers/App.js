import './App.css';

import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { useSelector, useDispatch } from 'react-redux';
import { listKitties, setSearchfield } from '../actions/actions';

const App = () => {
	const dispatch = useDispatch();
	const { searchfield } = useSelector(state => state.searchfield);
	const { kitties, loading, error } = useSelector(state => state.kitties);
	const [filteredKitties, setFilteredKitties] = useState([...kitties]);

	useEffect(() => dispatch(listKitties()), [dispatch]);

	const handleSearch = text => dispatch(setSearchfield(text));

	useEffect(() => {
		const filteredKitties = kitties.filter(kitty =>
			kitty.name.toLowerCase().includes(searchfield.toLowerCase())
		);
		setFilteredKitties(filteredKitties);
	}, [kitties, searchfield]);

	return loading ? (
		<h1>Loading…</h1>
	) : error ? (
		<h3>{error}</h3>
	) : (
		<div className='tc'>
			<h1 className='f1'>Kittyfriends</h1>
			<SearchBox searchChange={event => handleSearch(event.target.value)} />
			<Scroll>
				<ErrorBoundry>
					<CardList kitties={filteredKitties} />
				</ErrorBoundry>
			</Scroll>
		</div>
	);
};

export default App;
