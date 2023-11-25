import React from 'react';
import { useState } from 'react';
import { ProfilePic } from 'components/user-stuff/profile-image';
import tom from 'library/photos/tom.jpeg'
import './commentbar.css'
import { HiOutlineCamera, HiOutlineGif } from 'react-icons/hi2'
import { CiFaceSmile } from 'react-icons/ci'
import { LuSticker } from 'react-icons/lu'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import GifPicker, {TenorImage} from 'gif-picker-react';

interface CommentsArray {
	username: string;
	userimgurl: string;
	textcontent?: string;
	imgcontent: string
}

interface CommentBarProps {
	commentsarray: CommentsArray[];
	setComments: Function;
}

export const CommentBar: React.FC<CommentBarProps> = ({ setComments, commentsarray }) => {
	const [inputText, setInputText] = useState("")
	const [selectedGif, setSelectedGif] = useState<TenorImage>(null!)
	const [isSelected, setIsSelected] = useState("");

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

		setInputText(e.target.value);
	};

	const commentSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setComments([...commentsarray, { username: "Tom", userimgurl: tom, textcontent: inputText }])
		setInputText("")
	}

	const gifSubmitHandler = () => {
	setComments([...commentsarray, {username: "Tom", userimgurl: tom, imgcontent: selectedGif}])

	}



	return (
		<>
			<div className="comment-field">
				{/* {selectedGif !== null && */}
				{/* <img src={selectedGif.url}/>} */}
				<div className="user-pic">
					<ProfilePic imgurl={tom} />
				</div>
				<div className="input-wrapper">
					<form onSubmit={commentSubmitHandler}>
						<input className="input-field"
							onChange={handleChange} placeholder="Write a comment..." value={inputText} />
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
							<>
								{console.log(selectedGif)}
								</>
							<div className="tooltip" onClick={()=>{setIsSelected("gif")}}>
								<HiOutlineGif />
								{isSelected === "gif" &&
								<div className="gifpicker">
									<GifPicker
										tenorApiKey={"AIzaSyA4IIj_xIVH5I5etLnAQ_PR5anxyCPIT9k"}
										height={200}
										width={300}
										onGifClick={gifSubmitHandler} />
								</div>}

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



