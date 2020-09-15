import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

let headerStyle = {
	fontFamily: 'VT323',
	fontWeight: '700',
	fontSize: '2em',
};

const onMouseOver = (event) => {
	const colorChange = event.target;
	let hex = [
		'#ED3109',
		'#ED9309',
		'#EDE109',
		'#7CED09',
		'#09EDD8',
		'#0998ED',
		'#E74C3C',
		'#2909ED',
		'#9C09ED',
		'#ED09D4',
		'#ED0949',
		'#DDA8FC',
	];
	colorChange.style.color = hex[Math.floor(Math.random() * 12)];
};

const onMouseOut = (event) => {
	const colorChange = event.target;
	let black = '#000000';
	colorChange.style.color = black;
};

class Header extends Component {
	render() {
		return (
			<Navbar>
				<Navbar
					onMouseEnter={(event) => onMouseOver(event)}
					onMouseOut={(event) => onMouseOut(event)}>
					<Navbar.Brand className='animated rubberBand slow delay-3s'>
						<a
							href='https://city-search-angelat623.herokuapp.com/'
							style={headerStyle}
							rel='noopener noreferrer'>
							City Search
						</a>
					</Navbar.Brand>
				</Navbar>
			</Navbar>
		);
	}
}

export default Header;
