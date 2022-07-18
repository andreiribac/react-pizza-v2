import React, { useState, useEffect, useContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { Categories, SortPopup, Skeleton, PizzaBlock, Pagination } from '../components';
import { SearchContext } from '../App';
import { sortList } from '../components/SortPopup';


function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSearch = useRef(false);
	const isMounted = useRef(false);
	const { categoryId, sort, currentPage } = useSelector(state => state.filter);

	const { searchValue } = useContext(SearchContext);
	const [items, setItems] = useState([]);
	const [isLoadind, setIsLoadind] = useState(true);
	// const [currentPage, setCurrentPage] = useState(1);
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
	};

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number))
	};

	const fetchPizzas = () => {
		setIsLoadind(true);

		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sort.sortProperty.replace('-', '');
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const search = searchValue ? `&search=${searchValue}` : '';

		axios.get(`https://62cd50e9066bd2b6992348cd.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
			.then(response => {
				setItems(response.data);
				setIsLoadind(false);
			});
	}

	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));

			const sort = sortList.find(obj => obj.sortProperty === params.sortProperty);
			dispatch(
				setFilters({
					...params,
					sort,
				})
			);
			isSearch.current = true;
		}
	}, []);

	useEffect(() => {
		if (!isSearch.current) {
			fetchPizzas();
		}
		isSearch.current = false;
		window.scrollTo(0, 0);
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<SortPopup />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoadind ? skeletons : pizzas
				}
			</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	)
}

export default Home