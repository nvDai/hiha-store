import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDirectorySectionStart } from '../../redux/directory/directory.actions'

import './homepage.styles.scss'
import Directory from 'components/directory/directory.component'

const HomePage = ({ fetchDirectorySectionStart }) => {
	useEffect(() => {
		fetchDirectorySectionStart()
	}, [fetchDirectorySectionStart])
	return (
		<div className='homepage'>
			<Directory />
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchDirectorySectionStart: () => dispatch(fetchDirectorySectionStart()),
})

export default connect(null, mapDispatchToProps)(HomePage)
