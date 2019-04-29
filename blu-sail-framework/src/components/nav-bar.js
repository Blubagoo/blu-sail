import React from 'react';

export default class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the nav bar props', props);
	}
	render() {
		return (
			<div className='nav-bar'>
				<div className='button'>
					<p>Home</p>
				</div>
				<div className='button'>
					<p>About</p>
				</div>
				<div className='button'>
					<p>Services</p>
				</div>
				<div className='button'>
					<p>Contact</p>
				</div>
			</div>
		)
	}
}