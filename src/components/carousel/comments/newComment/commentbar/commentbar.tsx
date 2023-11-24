import React from 'react';
import { useState } from 'react';
import { ProfilePic } from 'components/user-stuff/profile-image';
import tom from 'library/photos/tom.jpeg'
import './commentbar.css'
import { HiOutlineCamera, HiOutlineGif } from 'react-icons/hi2'
import { CiFaceSmile } from 'react-icons/ci'
import { LuSticker } from 'react-icons/lu'


interface CommentBarProps{
	setComments: Function;
}

export const CommentBar: React.FC<CommentBarProps> = ({setComments}) => {
	const [inputText, setInputText] = useState("")

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

		setInputText(e.target.value);
	};
	
	// function commentSubmitHandler(e: React.FormEvent<HTMLFormElement>){
	// 	e.preventDefault()
	// 	setComments({username: "Tom", userimgurl: tom, textcontent: "i eat poos"})
	//
	// }
	
	const commentSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setComments({username: "Tom", userimgurl: tom, textcontent: "i eat poos"})
		
		
	}

	return (
		<>
			<div className="comment-field">
				<div className="user-pic">
					<ProfilePic imgurl={tom} />
				</div>
				<div className="input-wrapper">
					<form onSubmit={commentSubmitHandler}>
					<input className="input-field" 
							 onChange={handleChange} placeholder="Write a comment..." value={inputText} />
					{/* <input type="submit"/> */}
					</form>
					<div className="comment-icon-wrapper">
						<div className="icon">
							<div className="tooltip">
								<CiFaceSmile />
								<span className="tooltiptext">Insert an emoji</span>
							</div>
						</div>
						<div className="icon">
							<div className="tooltip">
							<HiOutlineCamera />
								<span className="tooltiptext">Attach a photo or video</span>
							</div>
						</div>
						<div className="icon">
							<div className="tooltip">
							<HiOutlineGif />
								<span className="tooltiptext">Comment with a gif</span>
							</div>
						</div>
						<div className="icon">
							<div className="tooltip">
							<LuSticker />
								<span className="tooltiptext">Comment with a Sticker</span>
							</div>
						</div>
					</div>
				</div>
				<div className="icons"></div>
			</div>
		</>

	)


}



