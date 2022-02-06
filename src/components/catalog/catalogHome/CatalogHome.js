import { useState } from 'react';
import Product from '../../home/productsSection/product/Product';
import './catalogHome.css';

const CatalogHome = ({ catalogProducts, onAddProductClass, onAddCart, onRemovCart, onUpdateCountTotalPlus, onUpdateCountTotalMinus, objProductStyle }) => {
	
	const countElement = 8
	const [lodatMoreOf, setLodatMoreOf] = useState(countElement);

	const slice = catalogProducts.slice(0, lodatMoreOf);

	return (
	<div>
		<div className='catalogHome'>
			{
				slice.map((product) => {
					return (
						<Product 
									key={product.id} 
									product={product} 
									onAddCart={onAddCart} 
									onRemovCart={onRemovCart}
									onUpdateCountTotalPlus={onUpdateCountTotalPlus}
									onUpdateCountTotalMinus={onUpdateCountTotalMinus}
									onAddProductClass={onAddProductClass}
									objProductStyle={objProductStyle}
						/>
						)
				})
			}
		</div>
		{
			(slice.length !== catalogProducts.length) && (
				<div className='catalog_div_btn_more'>
				<button className='catalog_btn_more' onClick={() => {
					setLodatMoreOf(lodatMoreOf + countElement)
				}}>Показать еще</button>
			</div>
			)
		}
	</div>
	)
}

export default CatalogHome;