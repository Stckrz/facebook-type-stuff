import React from 'react';
import { ItemBox } from '../itembox/itembox';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface ItemsForSale {
	name: string;
	imgsrc: string;
	itemurl: string
}

interface CarouselProps {
	itemsarray: ItemsForSale[];
	scrollvalue: number;
	setScrollValue: Function;
}

export const Carousel: React.FC<CarouselProps> = ({ scrollvalue, setScrollValue, itemsarray }) => {
	const ref = useRef<HTMLDivElement>(null);

	const scroll = (scrollOffset: number) => {
		if (ref.current != null) {
			ref.current.scrollLeft += scrollOffset;
			setScrollValue(ref.current.scrollLeft += scrollOffset)
		}
	};

	return (
		<>
			{scrollvalue <= 640 &&
				<div className="nextbutton" onClick={() => scroll(320)}>{<FontAwesomeIcon icon={faChevronRight} />}</div>}
			{scrollvalue > 10 &&
				<div className="prevbutton" onClick={() => scroll(-320)}>{<FontAwesomeIcon icon={faChevronLeft} />}</div>}
			<div className="item-box-wrapper" ref={ref}>
				{
					itemsarray.map((item => {
						return <ItemBox name={item.name} imageurl={item.imgsrc} itemurl={item.itemurl} />
					}))
				}
			</div>
		</>
	)
}
