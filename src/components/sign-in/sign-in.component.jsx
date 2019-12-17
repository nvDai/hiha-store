import React from 'react'
import { connect } from 'react-redux'

import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'

import {
	googleSigInStart,
	emailSigInStart,
} from '../../redux/user/user.actions'

import './sign-in.styles.scss'

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = async event => {
		event.preventDefault()

		const { email, password } = this.state
		const { emailSigInStart } = this.props

		emailSigInStart(email, password)
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	render() {
		const { googleSigInStart } = this.props
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						label='Email'
						value={this.state.email}
						handleChange={this.handleChange}
						type='email'
						required
					/>
					<FormInput
						name='password'
						label='Password'
						value={this.state.password}
						handleChange={this.handleChange}
						type='password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton
							type='button'
							onClick={googleSigInStart}
							isGoogleSigningIn
						>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	googleSigInStart: () => dispatch(googleSigInStart()),
	emailSigInStart: (email, password) =>
		dispatch(emailSigInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
