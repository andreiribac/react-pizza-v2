import React, { useState, useEffect } from 'react';

import { Categories, SortPopup, Skeleton, PizzaBlock } from '../components';


function Home({ searchValue }) {
	const [items, setItems] = useState([]);
	const [isLoadind, setIsLoadind] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });

	const skeletons = ([... new Array(10)].map((_, index) => <Skeleton key={index} />));
	const pizzas = items.filter(obj => {
		if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
			return true;
		}
		return false;
	}).map(item => {
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
	});

	useEffect(() => {
		setIsLoadind(true);

		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sortType.sortProperty.replace('-', '');
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

		fetch(
			`https://62cd50e9066bd2b6992348cd.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
		)
			.then(res => res.json())
			.then(arr => {
				setItems(arr);
				setIsLoadind(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={(index) => setCategoryId(index)} />
				<SortPopup value={sortType} onChangeSort={(index) => setSortType(index)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoadind ? skeletons : pizzas
				}

			</div>
		</div>
	)
}

export default Home