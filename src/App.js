import React, { useState, useEffect } from 'react';
import { Routes, Route, } from "react-router-dom";
import { Header } from './components';
import { Home, NotFound, Cart } from './pages';
import './scss/app.scss';

// import pizzas from './assets/pizzas.json';

function App() {

	const [searchValue, setSearchValue] = useState('');

	return (
		<div className="wrapper">
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className="content">
				<Routes>
					<Route index path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
