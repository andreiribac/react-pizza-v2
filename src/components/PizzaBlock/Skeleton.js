import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={280}
		height={455}
		viewBox="0 0 280 455"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="140" cy="140" r="110" /> 
		<rect x="0" y="270" rx="0" ry="0" width="280" height="24" />
		<rect x="0" y="304" rx="10" ry="10" width="280" height="84" />
		<rect x="129" y="216" rx="7" ry="7" width="32" height="32" />
		<rect x="157" y="379" rx="0" ry="0" width="4" height="5" />
		<rect x="150" y="410" rx="29" ry="29" width="130" height="45" />
		<rect x="0" y="423" rx="0" ry="0" width="90" height="27" />
	</ContentLoader>
)

export default Skeleton