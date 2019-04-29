import React from 'react';

export default class MainContentBottom extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the main bottom props', props);
	}
	render() {
		return (
			<div className='main-bottom'>
				<h1>This is the main bottom area</h1>
			</div>
		)
	}
}