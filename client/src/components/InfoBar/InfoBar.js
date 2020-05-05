import React from 'react';
import closeIcon from '../../icons/closeIcon.PNG';
import onlineIcon from '../../icons/onlineIcon.PNG';

import './InfoBar.css';

const InfoBar = ({ room }) => (
	<div className='infoBar'>
		<div className='leftInnerContainer'>
			<img className='onlineIcon' alt='online' src={onlineIcon} />
			<h3>{room}</h3>
		</div>
		<div className='rightInnerContainer'>
			<a href='/'>
				<img src={closeIcon} alt='close' />
			</a>
		</div>
	</div>
);

export default InfoBar;
