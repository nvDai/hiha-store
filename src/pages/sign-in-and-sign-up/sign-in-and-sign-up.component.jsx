import React, { useState } from 'react'

import SignIn from 'components/sign-in/sign-in.component'
import SignUp from 'components/sign-up/sign-up.component'

import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => {
	const [currentTab, setCurrentTab] = useState('sign-in')
	return (
		<div className='sign-in-and-sign-up'>
			<div className='tab'>
				<span
					className={`${currentTab === 'sign-in' ? 'active' : ''}`}
					onClick={() => setCurrentTab('sign-in')}
				>
					Sign In
				</span>{' '}
				|{' '}
				<span
					className={`${currentTab === 'sign-up' ? 'active' : ''}`}
					onClick={() => setCurrentTab('sign-up')}
				>
					Sign Up
				</span>
			</div>
			<div className='container'>
				{currentTab === 'sign-in' ? <SignIn /> : <SignUp />}
			</div>
		</div>
	)
}

export default SignInAndSignUpPage
