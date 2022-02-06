import './productCart.css';
import './aProductCart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ProductCart = ({ productCart, onUpdateTotalCartProductPlus, onUpdateTotalCartProductMinus, onProductCartRemove }) => {

	return (
		<div className='productCart'>
			<div className='productCart-div-img-titel'>
				<div className='productCart-div-img'>
					<img src={productCart.img} alt='no photo'/>
				</div>
				<div className='productCart-div-titel'>
					<p className='productCart-titel'>{productCart.titel}</p>
					<p className='productCart-information'>{productCart.information}</p>
				</div>
			</div>
			<div className='productCart-div-price-count-remove'>
				<div className='productCart-div-priceOne'>
					<p className='productCart-priceOne'>{productCart.price}.р</p>
					<p className='productCart-priceOne-counte'>Цена за 1 шт</p>
				</div>
				<div className='productCart-div-buy-count'>
						<p className='productCart-text-count-buy'>{productCart.count}</p>
						<div className='productCart-div-arrows'>
							<button className='productCart-buy-button-left' 
								onClick={() => {
									onUpdateTotalCartProductPlus(productCart)
								}}>
							<FontAwesomeIcon icon={faChevronUp}/></button>
							<button className='productCart-buy-button-right' 
								onClick={() => {if(productCart.count > 1) {
									onUpdateTotalCartProductMinus(productCart)
								}}}>
							<FontAwesomeIcon icon={faChevronDown}/></button>
						</div>
				</div>
				<div className='productCart-div-priceTotal'>
					<p className='productCart-priceTotal'>{productCart.priceTtoal}.р</p>
					<p className='productCart-count-priceTotal'>Цена за {productCart.count} шт</p>
				</div>
				<div className='productCart-div-remove'>
					<FontAwesomeIcon className='iconRemove' icon={faTimesCircle} onClick={() => {
						onProductCartRemove(productCart)
					}}/>
				</div>
			</div>
		</div>
	)
}

export default ProductCart;