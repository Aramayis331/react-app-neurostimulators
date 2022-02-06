import Product from '../../home/productsSection/product/Product';
import ProductsPagination from '../productsPagination/ProductsPagination';
import './catalogProducts.css';

const CatalogProducts = ({ productsPage, onAddProductClass, onAddCart, onRemovCart, onUpdateCountTotalPlus, onUpdateCountTotalMinus, objProductStyle, productsPerPage, pagination, currentPage, onChangePaginationPage, catalogProducts }) => {

	return (
	<div>
		{ (catalogProducts.length === 0)  && (<div className='productsCartEmpty'>Сейчас нет такого продукта</div>)}
		<div className='catalogProducts'>
			{
				productsPage.map((product) => {
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
	<ProductsPagination products={catalogProducts.length} productsPerPage={productsPerPage} currentPage={currentPage} pagination={pagination} onChangePaginationPage={onChangePaginationPage} />
	</div>
	)
}

export default CatalogProducts;