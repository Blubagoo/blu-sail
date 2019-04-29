import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the footer props', props);
	}
	render() {
		return(
			<div className='footer'>
				<h1>This is the footer area</h1>
			</div>
		)
	}
}
