import React from 'react';
import { ItemBox } from '../itembox/itembox';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './actual-carousel.css'

interface ItemsForSale {
	name: string;
	imgsrc: string;
	itemurl: string
}

interface CarouselProps {
	itemsarray: ItemsForSale[];
}

export const Carousel: React.FC<CarouselProps> = ({ itemsarray }) => {
	const [scrollvalue, setScrollValue] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	const scroll = (scrollOffset: number) => {
		if (ref.current != null) {
			ref.current.scrollLeft += scrollOffset;
			setScrollValue(ref.current.scrollLeft += scrollOffset)
		}
	};

	return (
		<>
			<div className="carousel-box">
				{scrollvalue <= 640 &&
					<div
						className="nextbutton"
						onClick={() => scroll(320)}>
						{<FontAwesomeIcon icon={faChevronRight} />}
					</div>
				}
				{scrollvalue > 10 &&
					<div
						className="prevbutton"
						onClick={() => scroll(-320)}>
						{<FontAwesomeIcon icon={faChevronLeft} />}
					</div>
				}
				<div className="item-box-wrapper" ref={ref}>
					{
						itemsarray.map((item => {
							return <ItemBox
								name={item.name}
								imageurl={item.imgsrc}
								itemurl={item.itemurl}
							/>
						}))
					}
				</div>
			</div>
		</>
	)
}
