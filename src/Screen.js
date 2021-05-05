import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({ text }) => {
	return (
		<div id='screen'>
			<p>{text}</p>
		</div>
	)
}

Screen.propTypes = {
	text: PropTypes.string.isRequired,
}

export default Screen
