import React from 'react';
import './community.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

interface CommunityProps {
	likes: boolean;
	comments: number;
	shares: number;
}

export const Community: React.FC<CommunityProps> = ({ likes, comments, shares }) => {

	return (
		<>
			<div className="community-container">
				<div><FontAwesomeIcon icon={faThumbsUp} />
					{` ${likes === true && 1}`}
				</div>
				<div>{`${comments} comments ${shares} shares`}</div>
			</div>
		</>
	)
}
