import './product.css';
import './aProduct.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, onAddProductClass, onAddCart, onRemovCart, onUpdateCountTotalPlus, onUpdateCountTotalMinus, objProductStyle }) => {
		
	let productDiscountCalculate = (product.price / 100) * product.discount;
	let	productDiscountNumber = Math.ceil(product.price - productDiscountCalculate);

	return (
		<div className='product' style={objProductStyle}>
			<div className='product-data-div'>
				{
					product.discount && 
						<div className='product-div-discount-percent'>
							<p className='product-data-text'>-{product.discount}%</p>
						</div>
				}
				{
					product.discount && 
						<div className='product-div-productDiscount'>
							<p className='product-data-text'>{product.productDiscount}</p>
						</div>
				}
				{
					product.productNew && 
						<div className='product-div-createNew'>
							<p className='product-data-text'>{product.productNew}</p>
						</div>
				}
				{
					product.productMonth && 
						<div className='product-div-productMonth'>
							<p className='product-data-text'>{product.productMonth}</p>
						</div>
				}
			</div>
			<div className='product-div-img'>
				<img src={product.img} alt='no photo' />
			</div>
			<div className='product-titel-calculace'>
				<p className='product-titel'>{product.titel}</p>
				<p className='product-categori'>Тренажеров для мозжечковой стимуляции.</p>
			</div>
				<div className='product-calculace'>
					<div className='product-div-price-buy'>
						<div className='product-div-price'>
							<p className={product.discount ? 'product-price' : 'product-discountOff'}>{productDiscountNumber}р.</p>
							<p className={product.discount ? 'product-discountOnn' : 'product-price'}>{product.price}р.</p>
						</div>
						<div className='product-div-buy'>
							<div className={product.inCart ? 'product-div-buy-count-off' : 'product-div-buy-count'}>
								<p className='text-count-buy'>{product.count}</p>
								<div className='product-div-arrows'>
									<button className='product-buy-button-left' 
										onClick={() => {
											onUpdateCountTotalPlus(product)
										}}>
									<FontAwesomeIcon icon={faChevronUp}/> </button>
									<button className='product-buy-button-right' 
										onClick={() => {if(product.count > 1) {
											onUpdateCountTotalMinus(product)
										}}}>
									<FontAwesomeIcon icon={faChevronDown}/></button>
								</div>
							</div>
							<button className={product.inCart ? 'product-buy-button-add-off' : 'product-buy-button-add'} onClick={() => {
								onAddCart(product);
								onAddProductClass(product)
							}}>Купить</button>
							<button className={product.inCart ? 'product-buy-button-remove' : 'product-buy-button-remove-off'} onClick={() => {
								onRemovCart(product);
								onAddProductClass(product)
							}}>В Корзине</button>
						</div>
					</div>
					<div className='product-button-more-div'>
						<button className='product-button-more'>Подробнее</button>
					</div>
				</div>	
		</div>
	)
}

export default Product;