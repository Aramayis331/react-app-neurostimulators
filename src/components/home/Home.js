import './home.css';
import Ads from './ads/Ads';
import ProductsSection from './productsSection/ProductsSection';
import AboutUs from './aboutUs/AboutUs';

const Home = ({
    products,
    onAddProductClass,
    onAddCart,
    onRemovCart,
    onUpdateCountTotalPlus,
    onUpdateCountTotalMinus,
}) => {
    const titelProducts = ['Новинки товары', 'Товары месяца'];
    const titelAbout = 'Коротко о нас';

    return (
        <div className='home'>
            <Ads />
            <ProductsSection
                onAddProductClass={onAddProductClass}
                products={products}
                onAddCart={onAddCart}
                onRemovCart={onRemovCart}
                onUpdateCountTotalPlus={onUpdateCountTotalPlus}
                onUpdateCountTotalMinus={onUpdateCountTotalMinus}
                titel={titelProducts}
            />
            <AboutUs titel={titelAbout} />
        </div>
    );
};

export default Home;
