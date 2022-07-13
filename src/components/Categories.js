import React, { useState } from 'react'

function Categories({ value, onChangeCategory }) {
	// const [activeIndex, setActiveIndex] = useState(0);

	const categoriesArr = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	];

	// const onClickCategory = (index) => {
	// 	setActiveIndex(index);
	// }

	return (
		<div className="categories">
			<ul>
				{
					categoriesArr.map((categoryName, index) => {
						return (
							<li key={index}
								onClick={() => onChangeCategory(index)}
								className={value === index ? 'active' : ''}
							>
								{categoryName}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Categories