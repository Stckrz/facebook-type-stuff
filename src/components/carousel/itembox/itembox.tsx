import React from 'react';
import './itembox.tsx';
import './itembox.css';

interface ItemBoxProps{
		name: string;
		imageurl: string;
		itemurl: string;
}

export const ItemBox: React.FC<ItemBoxProps> = ({name, itemurl, imageurl}) => {

	return (
		<>
			<div className="item-box-container">
			<a href={itemurl} target="_blank">
				<div className="item-image"><img src={require(`../../../library/photos/${imageurl}`)}/></div>
				<div className="description-container">
				<div className="item-name-box">
					<div className='title'>{name}</div>
				</div>
					<button className="shop-now-button">Shop now</button>
					</div>
			</a>
			</div>
		</>
	)
}
