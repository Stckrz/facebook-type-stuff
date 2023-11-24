import React from 'react'
import './profile-image.css';
import tom from 'library/photos/tom.jpeg'

interface ProfilePicProps{
	imgurl: string;

}

export const ProfilePic: React.FC<ProfilePicProps> = ({imgurl}) => {

	return(

		<>
			<div className="pic-container">
				<img className="profile-pic" src={imgurl}/>
			</div>
		</>
	)

}
