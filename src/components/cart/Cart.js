import './cart.css';
import ProductCart from './productCart/ProductCart';
import ToHome from '../toHome/ToHome';


let Cart = ( { productsCart, onUpdateTotalCartProductPlus, onUpdateTotalCartProductMinus, onProductCartRemove, totalPriceProductsCart } ) => {

	return (
		<div className='cart'>
			{(productsCart.length > 0) && (<p className='cartTitel'>Ваша корзина</p>)}
			<ToHome />
				{(productsCart.length === 0) && (<div className='productsCartEmpty'>Ваша корзина пуста</div>)}
				{
					productsCart.map((productCart) => {
						return (
								<ProductCart 
											key={productCart.id} 
											productCart={productCart} 
											onUpdateTotalCartProductPlus={onUpdateTotalCartProductPlus}
											onUpdateTotalCartProductMinus={onUpdateTotalCartProductMinus}
											onProductCartRemove={onProductCartRemove}
								/>
								)
					})
				}
				{	
					(productsCart.length > 0) && (<div className='cart-total-price-products'>
														<div className='cart-div-total-price-button'>
															<div className='cart-div-total-price'>
																<p className='cart-total-text'>Итого։</p>
																<p className='cart-total-price'>{totalPriceProductsCart}․р</p>
															</div>
															<button className='cart-total-price-button'>Оформить заказ</button>
														</div>
													</div>)
				}
		</div>
	)
}

export default Cart;