import React from 'react';
import './maincontainer.css';
import { useRef, useState } from 'react';
import { ItemBox } from '../itembox/itembox';
import { LikeBar } from "../likebar/likebar";
import { Community } from '../community/community';

import { itemsforsale } from '../../../library/itemsforsale';
import amazon from '../../../library/photos/amazon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export const Carousel: React.FC = () => {
	const [scrollvalue, setScrollValue] = useState(0);
	const [likes, setLikes] = useState(false);
	const [comments, setComments] = useState(0);
	const [shares, setShares] = useState(0);
	

	const ref = useRef<HTMLDivElement>(null);

	const scroll = (scrollOffset: number) => {
		if (ref.current != null) {
			ref.current.scrollLeft += scrollOffset;
			setScrollValue(ref.current.scrollLeft += scrollOffset)
		}
	};

	return (

		<div className="carousel-container" >
			{scrollvalue <= 640 &&
				<div className="nextbutton" onClick={() => scroll(320)}>{<FontAwesomeIcon icon={faChevronRight} />}</div>}
			{scrollvalue > 10 &&
				<div className="prevbutton" onClick={() => scroll(-320)}>{<FontAwesomeIcon icon={faChevronLeft} />}</div>}
			<div className="top-bar">
				<div>
					<div className="company"><img className="company-logo"src={amazon}/>Amazon</div>
				</div>
				<div>...</div>

			</div>
			<p className="description">Check out these great deals on styles from Amazon!</p>
			<div className="item-box-wrapper" ref={ref}>
				{itemsforsale.map((item => {
					return <ItemBox name={item.name} price={item.price} imageurl={item.imgsrc} itemurl={item.itemurl} />

				}))}

			</div>
			{likes === true &&
			<div className="community"><Community likes={likes} comments={comments} shares={shares}/></div>}
			<div className="like-bar-container">
				<LikeBar likes={likes} setLikes={setLikes}/>
			</div>

		</div>
	)

}
