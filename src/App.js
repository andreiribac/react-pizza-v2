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
						{/* TODO #6 go to start lesson */}
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{
							pizzas.map(item => {
								return (
									<PizzaBlock
										key={item.id}
										// title={item.title}
										// price={item.price}
										// imageUrl={item.imageUrl}
										// sizes={item.sizes}
										// types={item.types}
										// "Это все можно заменить на коротку запись если названия совпадают"
										{...item}
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
