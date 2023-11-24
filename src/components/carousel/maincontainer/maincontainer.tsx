import React from 'react';
import './maincontainer.css';
import { useState } from 'react';
import { LikeBar } from "components/carousel/likebar/likebar";
import { Community } from '../community/community';
import { CommentBar } from '../comments/newComment/commentbar/commentbar';
import { CommentFeed } from '../comments/commentfeed/commentfeed';
import { ProfilePic } from 'components/user-stuff/profile-image';
import amazon from '../../../library/photos/amazon.jpg';
import tom from '../../../library/photos/tom.jpeg';

interface PostProps {
	description: string;
	children: React.ReactNode
}

export const Post: React.FC<PostProps> = ({ description, children }) => {
	const [likes, setLikes] = useState(false);
	const [commentscount, setCommentscount] = useState(0);
	const [comments, setComments] = useState([{username: "Tom", userimgurl: tom, textcontent: "this post sucks"}]);

	const [shares, setShares] = useState(0);

	return (
		<>
			<div className="post-container" >
				<div className="top-bar">
					<div>
						<div className="company">
							<ProfilePic imgurl={amazon}/>
							Amazon
						</div>
					</div>
					<div>...</div>
				</div>
				<p className="description">{description}</p>

				<div className="content">
					{children}
				</div>
				{likes === true &&
					<div className="community"><Community likes={likes} commentscount={commentscount} shares={shares} /></div>}
				<div className="like-bar-container">
					<LikeBar setLikes={setLikes} />
				</div>
					<div className="all-comments">
					<CommentFeed commentsarray={comments} setComments={setComments}/>
				</div>
				<div className="comment-bar-container">
					<CommentBar setComments={setComments} />
					</div>
			</div>
		</>
	)
}
