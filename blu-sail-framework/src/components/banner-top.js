import React from 'react';

export default class BannerTop extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the banner top props', props);
	}
	render() {
		return (
			<div className='banner-top'>
				<div className='offer-box'>
					<h2>We offer <span style={{textDecoration: 'underline',}}>AFFORDABLE</span> Solutions to Real Problems</h2>
					<p>Most customized mobile apps can cost anywhere from <span style={{color: '#d570a2',fontWeight: 'very bold',}}>$5,000 - $50,000</span>
					, Which can make a significant impact on any small business. With so many choices on the market, who knows where to begin?
					We offer an affordable solution that brings balance to the market. No more dealing with the 
					'build-a-bear' mobile apps. Get a mobile app that is tailored for your business! Your wallet
					and your sanity will thank you.</p>
				</div>
			</div>
		)
	}
}