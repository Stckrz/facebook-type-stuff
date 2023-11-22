import React from 'react';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, } from '@fortawesome/free-regular-svg-icons';
import './likebutton.css';

interface LikeButtonProps {
	setLikes: Function;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ setLikes }) => {
	const [cssColorClass, setCssColorClass] = useState("")
	const refcontainer = useRef<HTMLDivElement>(null)

	function thumbAnimationHandler() {
		refcontainer.current?.classList.add("do-the-thing")
		setLikes(true);
	}

	function likeColorHandler() {
		setCssColorClass("like-clicked")
	}

	return (
		<>
			<div 
				onClick={()=>{
					{thumbAnimationHandler()};
					{likeColorHandler()}}} 
				className={`lil-icon  ${cssColorClass}`}>
			<div onClick={()=>{thumbAnimationHandler()}} ref={refcontainer}>
				<FontAwesomeIcon icon={faThumbsUp} size={"xl"} />
			</div>
				{" like"}
			</div>
		</>
	)
}

