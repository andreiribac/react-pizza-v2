import React from 'react';
import styles from './Search.module.scss';

function Search() {
	return (
		<label className={styles.inputArea}>
			{/* TODO #10 4.38 */}
			<input className={styles.inputArea__input} type="text" placeholder='Поиск пиццы ...' />
		</label>
	)
}

export default Search