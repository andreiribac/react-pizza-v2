import React from 'react';

import styles from './NotFoundBlock.module.scss'


function NotFoundBlock() {
	return (
		<div className={styles.textCenter}>
			<h2>
				<span>😕</span>
				<br />
				<br />
				Ничего не найдено
			</h2>
			<p className={styles.description}>
				К нашему большому сожалению мы нечего не нашли по ващему запросу
			</p>
		</div>
	)
}

export default NotFoundBlock