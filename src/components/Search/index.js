import React, { useContext, useRef, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { IconSvgSelector } from '../../assets/icons/IconsSvgSelector';
import { SearchContext } from '../../App';

function Search() {
	const [value, setValue] = useState('');
	const { searchValue, setSearchValue } = useContext(SearchContext);
	const inputRef = useRef();

	const onClickClear = () => {
		setSearchValue('');
		setValue('');
		inputRef.current.focus();
	};

	const updateSearchValue = useCallback(
		debounce((str) => {
			setSearchValue(str)
		}, 300),
		[],
	);
	
	const onChangeInput = (e) => {
		setValue(e.target.value);
		updateSearchValue(e.target.value);
	}
	


	return (
		<label className={styles.inputArea}>
			<IconSvgSelector id='search' className={styles.inputArea__icon} />
			<input
				ref={inputRef}
				value={value}
				onChange={(e) => { onChangeInput(e)  }}
				className={styles.inputArea__input}
				type="text"
				placeholder='Поиск пиццы ...'
			/>
			{value &&
				<IconSvgSelector
					id='close'
					onClick={() => onClickClear()}
					className={styles.inputArea__iconClose}
				/>
			}
		</label>
	)
}

export default Search