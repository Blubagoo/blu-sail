import React from 'react';

export default class MainContentTop extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the main top props', props);
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log('button pressed');

	}
	render() {
		return (
			<div className='main-top'>
				<div className='img-area'>
					<img src='#' alt='business management software' />
				</div>
				<div className='info-area'>
					<h2>Manage Your Employees From Anywhere</h2>
					<p>If saving time and money while efficiently monitoring your team appeals 
					to you then you have landed in the right place.</p>
					<div className='learn-more-btn' onClick={this.handleSubmit.bind(this)}>
						<p>Learn More</p>
					</div>
				</div>
			</div>
		)
	}
}