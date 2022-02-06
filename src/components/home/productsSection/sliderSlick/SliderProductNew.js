import './sliderSlick.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from '../product/Product';
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TitelSection from '../../titelSection/TitelSection';

const SliderProductNew = ({ products, onAddProductClass, onAddCart, onRemovCart, onUpdateCountTotalPlus, onUpdateCountTotalMinus, titel }) => {
	const sliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
			},
			{
			breakpoint: 1025,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
			}
			},
			{
				breakpoint: 796,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
				}
			},
			{
			breakpoint: 525,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	}

		return (
		<div className='slider_slick'>
			<div className='slider_slick_div'>
				<TitelSection titel={titel}/>
				<div className='slider_slick_button_div'>
					<button className='slider_slick_arrow_prev' onClick={() => sliderRef.current.slickPrev()}><FontAwesomeIcon className='slick_icon_prev' icon={faChevronLeft}/></button>
					<button className='slider_slick_arrow_next' onClick={() => sliderRef.current.slickNext()}><FontAwesomeIcon className='slick_icon_next' icon={faChevronRight}/></button>
				</div>
			</div>
			<Slider ref={sliderRef} {...settings}>
				{
					products.map((product) => {
						if(product.productNew) {
							return <Product 
										key={product.id} 
										product={product} 
										onAddCart={onAddCart} 
										onRemovCart={onRemovCart} 
										onUpdateCountTotalMinus={onUpdateCountTotalMinus}
										onUpdateCountTotalPlus={onUpdateCountTotalPlus}
										onAddProductClass={onAddProductClass}
									/>
						} 
					})
				}
			</Slider>
		</div>
		);
	}

export default SliderProductNew;