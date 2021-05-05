import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ symbol, text, action }) => {
	return <button onClick={() => action(symbol)}>{symbol}</button>
}

Button.propTypes = {
	symbol: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired,
}

export default Button
