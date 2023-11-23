import React from 'react';
import { useState } from 'react';
import './commentbar.css'


export const CommentBar: React.FC = () => {
	const [inputText, setInputText] = useState("")

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		
		setInputText(e.target.value);
	};

	return (
		<>
			<div className="comment-field">
				<div className="user-pic"></div>
				<input className="input-field" onChange={handleChange} placeholder="Write a comment..." value={inputText} />
			</div>
		</>

	)


}
