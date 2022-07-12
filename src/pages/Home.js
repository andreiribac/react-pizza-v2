import React, { useState, useEffect } from 'react';

import { Categories, SortPopup, Skeleton, PizzaBlock } from '../components';


function Home() {
	const [items, setItems] = useState([]);
	const [isLoadind, setIsLoadind] = useState(true);

	useEffect(() => {
		fetch('https://62cd50e9066bd2b6992348cd.mockapi.io/items')
			.then(res => res.json())
			.then(arr => {
				setItems(arr);
				setIsLoadind(false);
			});

	}, []);

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<SortPopup />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoadind
						? ([... new Array(10)].map((_, index) => <Skeleton key={index} />))
						: items.map(item => {
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
	)
}

export default Home