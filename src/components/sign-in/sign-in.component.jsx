import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'

import {
	googleSigInStart,
	emailSigInStart,
} from '../../redux/user/user.actions'

import './sign-in.styles.scss'

const SignIn = ({ emailSigInStart, googleSigInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: '',
	})

	const { email, password } = userCredentials

	const handleSubmit = async event => {
		event.preventDefault()

		emailSigInStart(email, password)
	}

	const handleChange = event => {
		const { name, value } = event.target
		setUserCredentials({ ...userCredentials, [name]: value })
	}

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					label='Email'
					value={email}
					handleChange={handleChange}
					type='email'
					required
				/>
				<FormInput
					name='password'
					label='Password'
					value={password}
					handleChange={handleChange}
					type='password'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Sign in</CustomButton>
					<CustomButton type='button' onClick={googleSigInStart} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	googleSigInStart: () => dispatch(googleSigInStart()),
	emailSigInStart: (email, password) =>
		dispatch(emailSigInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
