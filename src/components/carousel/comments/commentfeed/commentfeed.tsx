import React from 'react';
import { useEffect } from 'react';
import './commentfeed.css';
import { ProfilePic } from 'components/user-stuff/profile-image';


interface CommentsArray {
	username: string;
	userimgurl: string;
	textcontent?: string;
	imgcontent?: string;


}

interface CommentFeedProps {
	commentsarray: CommentsArray[];
	setComments: Function
}

export const CommentFeed: React.FC<CommentFeedProps> = ({ commentsarray }) => {

	useEffect((
	)=>{
		console.log(commentsarray)
		},[commentsarray])

	return (
		<>
			{
				commentsarray && commentsarray.map((item) => {
					return (
						<div className="comment-content-wrapper">
							<div className="pic-wrapper">
								<ProfilePic imgurl={item.userimgurl} />
							</div>
							<div>
								<div className="comment-text-box">
									<div>{item.username}</div>
									<div className="commentbody">{item.textcontent}</div>
									<img src={item.imgcontent}/>
								</div>
								<div className="comment-controls">42m Like  Reply  Share</div>
							</div>
						</div>
					)
				})
			}
		</>

	)


}
