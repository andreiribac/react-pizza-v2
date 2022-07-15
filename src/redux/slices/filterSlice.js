// Вначале формируем исходные данные
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
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
	}
	// TODO #14 go!
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;