import React, { useState } from 'react'

function Categories() {
	const [activeIndex, setActiveIndex] = useState(0);

	const categoriesArr = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	];

	const onClickCategory = (index) => {
		setActiveIndex(index);
	}

	return (
		<div className="categories">
			<ul>
				{
					categoriesArr.map((value, index) => {
						return (
							<li key={index + value}
								onClick={() => onClickCategory(index)}
								className={activeIndex === index ? 'active' : ''}
							>
								{value}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Categories