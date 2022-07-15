import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';
import { Categories, SortPopup, Skeleton, PizzaBlock, Pagination } from '../components';
import { SearchContext } from '../App';


function Home() {
	const dispatch = useDispatch();
	const {categoryId, sort} = useSelector(state => state.filter);

	const { searchValue } = useContext(SearchContext);
	const [items, setItems] = useState([]);
	const [isLoadind, setIsLoadind] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	// const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });

	const skeletons = ([... new Array(10)].map((_, index) => <Skeleton key={index} />));
	const pizzas = items.map(item => {
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

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	}

	useEffect(() => {
		setIsLoadind(true);

		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sort.sortProperty.replace('-', '');
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const search = searchValue ? `&search=${searchValue}` : '';

		fetch(
			`https://62cd50e9066bd2b6992348cd.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then(res => res.json())
			.then(arr => {
				setItems(arr);
				setIsLoadind(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<SortPopup  />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoadind ? skeletons : pizzas
				}
			</div>
			<Pagination onChangePage={number => setCurrentPage(number)} />
		</div>
	)
}

export default Home