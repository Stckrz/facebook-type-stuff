import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Post } from './components/carousel/maincontainer/maincontainer';
import { Carousel } from './components/carousel/actual-carousel/actual-carousel';
import { ImagePostContent } from './components/carousel/image-post-content/image-post-content';
import { itemsforsale } from 'library/itemsforsale';
import amazon from 'library/photos/amazon.jpg';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Post description={"Check out these awesome deals from Amazon"}>
			<Carousel itemsarray={itemsforsale}/>
		</Post>
		<Post description={"Amazon's stupid logo"}>
			<ImagePostContent imgsrc={amazon}/>
		</Post>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
