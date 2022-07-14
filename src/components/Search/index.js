import React from 'react';
import styles from './Search.module.scss';
import { IconSvgSelector } from '../../assets/icons/IconsSvgSelector';

function Search({ searchValue, setSearchValue }) {
	return (
		<label className={styles.inputArea}>
			{/* TODO #10 4.38 */}
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