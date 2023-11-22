import React from 'react';
import './image-post-content.css';

interface ImagePostContentProps {
	imgsrc: string;
}

export const ImagePostContent: React.FC<ImagePostContentProps> = ({ imgsrc }) => {

	return (
		<>
			<div className="image-post-container">
				<img src={imgsrc}/>
			</div>
		</>

	)

}
