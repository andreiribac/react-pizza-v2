import React from 'react';
import { Header, Categories, SortPopup, PizzaBlock } from './components';
import './scss/app.scss';

import pizzas from './assets/pizzas.json';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<SortPopup />
						{/* TODO lesson 2  52.40*/}
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{
							pizzas.map(item => {
								return (
									<PizzaBlock
										key={item.id} t
										title={item.title}
										price={item.price}
										imgUrl={item.imageUrl}
										sizes={item.sizes}
										types={item.types}
									/>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
