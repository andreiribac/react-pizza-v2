import React, { useContext } from 'react';
import styles from './Search.module.scss';
import { IconSvgSelector } from '../../assets/icons/IconsSvgSelector';
import { SearchContext } from '../../App';

function Search() {

	const { searchValue, setSearchValue } = useContext(SearchContext);

	return (
		<label className={styles.inputArea}>
			<IconSvgSelector id='search' className={styles.inputArea__icon} />
			<input
				value={searchValue}
				onChange={(e) => { setSearchValue(e.target.value) }}
				className={styles.inputArea__input}
				type="text"
				placeholder='Поиск пиццы ...'
			/>
			{searchValue &&
				<IconSvgSelector
				id='close'
				onClick={() => { setSearchValue('') }}
					className={styles.inputArea__iconClose}
				/>
			}
		</label>
	)
}

export default Search