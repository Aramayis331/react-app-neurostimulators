import './productsSection.css';
import SliderProductNew from './sliderSlick/SliderProductNew';
import SliderProductMonth from './sliderSlick/SliderProductMonth';

const ProductsSection = ({ products, onAddProductClass, onAddCart, onRemovCart, onUpdateCountTotalMinus, onUpdateCountTotalPlus, titel }) => {
	return (
		<div className='productsSection'>
			<SliderProductNew 
						products={products} 
						onAddCart={onAddCart} 
						onRemovCart={onRemovCart} 
						onUpdateCountTotalMinus={onUpdateCountTotalMinus}
						onUpdateCountTotalPlus={onUpdateCountTotalPlus}
						onAddProductClass={onAddProductClass}
						titel={titel[0]}
			/>
			<SliderProductMonth 
						products={products} 
						onAddCart={onAddCart} 
						onRemovCart={onRemovCart} 
						onUpdateCountTotalMinus={onUpdateCountTotalMinus}
						onUpdateCountTotalPlus={onUpdateCountTotalPlus}
						onAddProductClass={onAddProductClass}
						titel={titel[1]}
			/>
		</div>
	)
}

export default ProductsSection;