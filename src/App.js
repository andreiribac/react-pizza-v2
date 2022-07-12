import React, { useState, useEffect } from 'react';
import { Routes, Route, } from "react-router-dom";
import { Header } from './components';
import { Home, NotFound } from './pages';
import './scss/app.scss';

// import pizzas from './assets/pizzas.json';

function App() {

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					{/* TODO #7 59.39 */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
