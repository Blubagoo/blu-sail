import React from 'react';

export default class SiteHead extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the site head props', props);
	}
	render() {
		return (
			<div className='site-head'>
				<div className='logo-area'>
					<img src='#' alt='Blu Ink Innovation' />
				</div>
				<div className='banner'>
					<h1>Blu Ink Innovation</h1>
				</div>
			</div>
		)
	}
}