import React from 'react';
import './maincontainer.css';
import { useState } from 'react';
import { LikeBar } from "../likebar/likebar";
import { Community } from '../community/community';
import { Carousel } from '../actual-carousel/actual-carousel';
import { itemsforsale } from '../../../library/itemsforsale';
import amazon from '../../../library/photos/amazon.jpg';


export const Post: React.FC = () => {
	const [scrollvalue, setScrollValue] = useState(0);
	const [likes, setLikes] = useState(false);
	const [comments, setComments] = useState(0);
	const [shares, setShares] = useState(0);

	return (
		<>
			<div className="post-container" >
				<div className="top-bar">
					<div>
						<div className="company"><img className="company-logo" src={amazon} />Amazon</div>
					</div>
					<div>...</div>
				</div>
				<p className="description">Check out these great deals on styles from Amazon!</p>

				<div className="content">
					<Carousel
						scrollvalue={scrollvalue}
						setScrollValue={setScrollValue}
						itemsarray={itemsforsale}
					/>
				</div>

				{likes === true &&
					<div className="community"><Community likes={likes} comments={comments} shares={shares} /></div>}
				<div className="like-bar-container">
					<LikeBar likes={likes} setLikes={setLikes} />
				</div>
			</div>
		</>
	)
}
