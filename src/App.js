import React, { useState } from 'react'
import Screen from './Screen'
import Button from './Button'

function App() {
	const [text, setText] = useState('asdf')

	function append(value) {
		setText(text + value)
	}

	return (
		<div id='calculator'>
			<Screen text={text} />
			<div id='grid-container'>
				<Button symbol={'7'} text={text} action={append} />
				<Button symbol={'8'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'9'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'CC'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'4'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'5'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'6'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'+'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'1'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'2'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'3'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'-'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'0'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'*'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'/'} text={text} action={() => console.log('Hello')} />
				<Button symbol={'='} text={text} action={() => console.log('Hello')} />
			</div>
		</div>
	)
}

export default App
