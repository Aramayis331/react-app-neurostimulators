import './catalog.css';
import './aCatalog.css';
import { useState } from 'react';
import ToHome from '../toHome/ToHome';
import SliderRange from '../sliderRange/SliderRange';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

const Catalog = ({ onCategoriText, rangeValue, onChangeRangeValue, filterCheckbox, filterRange }) => {

	const [filterProducts, setFilterProducts] = useState([
		{
			id: Math.random(),
			name: 'Акции',
			filter: 'productDiscount',
			type: 'Акция',
			isChecked: false,
		},
		{
			id: Math.random(),
			name: 'Популярное',
			filter: 'productMonth',
			type: 'Товары месяца',
			isChecked: false,
		},
		{
			id: Math.random(),
			name: 'Новинки',
			filter: 'productNew',
			type: 'Новинка',
			isChecked: false,
		}
	])

	const [menuCategori, setMenuCategori] = useState([
		{
			id: 1,
			categori: 'Мозжечковая стимуляция',
			categoriTo: 'productsStimulacia',
		},
		{
			id: 2,
			categori: 'Межполушарные доски',
			categoriTo: 'productsDoski',
		},
		{
			id: 3,
			categori: 'Нейрокосички',
			categoriTo: 'productsNeyro',
		},
		{
			id: 4,
			categori: 'Кинезио мешки',
			categoriTo: 'productsMeshki',
		},
		{
			id: 5,
			categori: 'Кинезио мячи',
			categoriTo: 'productsMyachi',
		},
		{
			id: 6,
			categori: 'Все продукты',
			categoriTo: 'productsAll',
		}
	])

	const path = useParams()
	const navigate = useNavigate()

	const onChangePat = () => {
		navigate(`/catalog/${path.categoriTo}/1`);
	}

	const [catalogClass, setCatalogClass] = useState(false)

	return (
		<div className='catalog'>
			<div className='catalog-titel'>
				<p>Каталог продукции</p>
				<ToHome />
			</div>
			<div className='catalog_container'>
				<div className='buttonFilters'>
					<button onClick={() => catalogClass ? setCatalogClass(false) : setCatalogClass(true)}>Фильтр</button>
				</div>
				<div className={catalogClass ? 'catalog-menu-titel' : 'catalog-menu-titel-off'}>
					<p className='catalog-titel-text'>Категории товаров</p>
					<ul className='catalog-menu-ul'>
						{
							menuCategori.map((item) => {
								return (
									<li key={item.id} className='menu-catalog'>
										<NavLink to={item.categoriTo} className={({isActive}) => isActive ? 'catalog-ul-li-link-active' : 'catalog-ul-li-link'} onClick={() => {
										onCategoriText(item.categori);
									}}>
										{item.categori}
									</NavLink>
									</li>
								)
							})
						}
					</ul>
					<div className='catalog-price-range-div'>
						<p className='catalog-titel-text'>Стоимость</p>
						<SliderRange onChangeRangeValue={onChangeRangeValue} rangeValue={rangeValue} filterRange={filterRange} onChangePat={onChangePat}/>
					</div>
				</div>
				<div className='products-catalog-paginata'>
					<div className='products-filter-div'>
						{
							filterProducts.map((item) => {
								return (
									<div className='products-filter-checkbox-div' key={item.id}>
										<label className='products-filter-label' onClick={() => {
												setFilterProducts(filterProducts.map((e) => {
													if(e.id === item.id) {
														return {
															...e,
															isChecked: !e.isChecked,
														}
													} else {
														return e
													}
												}))
												filterCheckbox({...item, isChecked: !item.isChecked})
												onChangePat();
											}}>
											<span id='products-novinki' className={item.isChecked ? 'products-filter-checkboxTrue' : 'products-filter-checkboxFalse'}></span>
											<label htmlFor='products-novinki' className='products-checkbox-label'>{item.name}</label>
										</label>
									</div>
								)
							}) 
						}
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Catalog;