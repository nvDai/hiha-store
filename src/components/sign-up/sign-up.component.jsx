import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

class SignUp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	handleSubmit = async event => {
		event.preventDefault()
		const { displayName, email, password, confirmPassword } = this.state
		const { signUpStart } = this.props

		if (password !== confirmPassword) {
			alert("Password don't match")
			return
		} else if (password.length < 6 && password.length < 6) {
			alert('Password should be at least 6 characters')
			return
		}

		signUpStart({ email, password, displayName })
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form action='' className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						label='Display Name'
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						label='Email'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						label='Password'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						label='Confirm Password'
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
