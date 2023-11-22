import React from 'react';
import './maincontainer.css';
import { useState } from 'react';
import { LikeBar } from "../likebar/likebar";
import { Community } from '../community/community';
import { Carousel } from '../actual-carousel/actual-carousel';
import { itemsforsale } from '../../../library/itemsforsale';
import amazon from '../../../library/photos/amazon.jpg';

interface PostProps{
	description: string;
	children: React.ReactNode
}

export const Post: React.FC<PostProps> = ({description, children}) => {
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
				<p className="description">{description}</p>

				<div className="content">
					{children}
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
