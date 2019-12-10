import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({
	children,
	isGoogleSigningIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${isGoogleSigningIn ? 'google-button' : ''} ${
			inverted ? 'inverted' : ''
		} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
)

export default CustomButton
