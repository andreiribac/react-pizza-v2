// Вначале формируем исходные данные
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	currentPage: 1,
	sort: {
		name: 'популярности',
		sortProperty: 'rating'
	},
};

// Делаем сам редюсер (он же слайс)
const filterSlice = createSlice({
	// логика обработки нашего state

	// Задаем название для нашего Slice-a
	name: 'filters',
	// используем изначальное состояние
	initialState,
	// Команды экршены / действия что мы можем сделать с нашим состоянием
	reducers: {
		// функциии что мы можем сделать
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
			state.currentPage = Number(action.payload.currentPage);
			state.sort = action.payload.sort;
			state.categoryId = Number(action.payload.categoryId);
		},
	}
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;