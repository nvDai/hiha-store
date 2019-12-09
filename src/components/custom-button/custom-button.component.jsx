import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSigningIn, ...otherProps }) => (
	<button
		className={`${isGoogleSigningIn ? 'google-button' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
)

export default CustomButton
