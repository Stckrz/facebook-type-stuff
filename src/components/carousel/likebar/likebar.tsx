import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './likebar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { LikeButton } from './likebutton/likebutton';

library.add(
	faComment,
	faShare

);

interface LikeBarProps {
	likes: boolean;
	setLikes: Function;
}

export const LikeBar: React.FC<LikeBarProps> = ({ likes, setLikes }) => {

	return (
		<>
			<div className="icon-wrapper">
				<LikeButton setLikes={setLikes} />
				<div className="lil-icon"><FontAwesomeIcon icon={faComment} size={"xl"} />{"  Comment"}</div>
				<div className="lil-icon"><FontAwesomeIcon icon={faShare} size={"xl"} />{"  Share"}</div>
			</div>
		</>
	)
}
