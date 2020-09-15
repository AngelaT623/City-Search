import React from 'react';
import './App.css';


const CityForm = (props) => {
	return (
		<div className='wrapper'>
			<nav className='navbar'>
				<form className='form-inline' onSubmit={props.loadCityData}>
					<div className='form-group'>
						<input
							type='search'
							className='form-control'
							name='city'
							placeholder='Search for a city...'
						/>
						<button className='btn btn-primary btn-sm'>
							Submit
						</button>
					</div>
				</form>
			</nav>
		</div>
	);
};

export default CityForm;
