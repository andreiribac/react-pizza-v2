import React from 'react';

export const IconSvgSelector = ({ id, ...props }) => {
	switch (id) {
		case 'search':
			return (
				<svg
					{...props}
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="512" height="512" x="0" y="0"
					viewBox="0 0 56.966 56.966"
				>
					<g>
						<path xmlns="http://www.w3.org/2000/svg" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" fill="#fe5f1e" data-original="#000000"></path>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
						</g>
					</g>
				</svg>
			);

		case 'close':
			return (
				<svg
					{...props}
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="512" height="512" x="0" y="0"
					viewBox="0 0 512 512"
				>
					<g><g xmlns="http://www.w3.org/2000/svg" id="_02_User" data-name="02 User"><path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" fill="#fe5f1e" data-original="#000000"></path><path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" fill="#fe5f1e" data-original="#000000" ></path></g></g>
				</svg>
			);

		default:
			return null;
	}
}