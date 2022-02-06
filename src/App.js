import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import createProducts from './createProducts';
import Cart from './components/cart/Cart';
import Catalog from './components/catalog/Catalog';
import CatalogHome from './components/catalog/catalogHome/CatalogHome';
import CatalogProducts from './components/catalog/catalogProducts/CatalogProducts';
import CatalogProductsPage from './components/catalog/catalogProductsPage/CatalogProductsPage';

function App() {
	const [products, setProducts] = useState(createProducts);
	
	const [totalPriceProductsCart, setTotalPriceProductsCart] = useState(0)
	const [rangeValue, setRangeValue] = useState([0, 20000]);

	const [cart, setCart] = useState([]);




	const [updateCatalog, setUpdateCatalog] = useState([]);
	const [filter, setFilter] = useState({
		category: [],
		type: [],
		range: [],
	})

	const filterRange = (value) => {
		setFilter({...filter, range: value})
	}

	const filterCheckbox = (item) => {
		if(item.isChecked) {
			switch(item.type) {
				case 'Акция': 
					setFilter({...filter, type: [...filter.type, item.type]});
				break;
				case 'Товары месяца':
					setFilter({...filter, type: [...filter.type, item.type]});
				break;
				case 'Новинка':
					setFilter({...filter, type: [...filter.type, item.type]});
				break;
				default:
			}
		} else {
			switch(item.type) {
				case 'Акция': 
					const removeAkcii = filter.type.filter(e => e !== item.type)
					setFilter({...filter, type: removeAkcii});
				break;
				case 'Товары месяца':
					const removMonth = filter.type.filter(e => e !== item.type)
					setFilter({...filter, type: removMonth});
				break;
				case 'Новинка':
					const removeNew = filter.type.filter(e => e !== item.type)
					setFilter({...filter, type: removeNew});
				break;
				default:
			}
		}
	}

	const updateProduct = () => {
		let updateList = products;

		if(filter.category.length > 0) {
			if(filter.category[0] === 'Все продукты') {
				updateList = products;
			} else {
				updateList = updateList.filter(item => filter.category.includes(item.categori)) 
			}
		}

		if(filter.type.length > 0) {
			updateList = updateList.filter((item) => {
				if(item.type) {
					const check = item.type.find(type => filter.type.includes(type))
					return check !== undefined
				}
				
			})
		}
		if(filter.range) {
			const minValue = filter.range[0];
			const maxValue = filter.range[1];
	
			updateList = updateList.filter(product => product.price >= minValue && product.price <= maxValue)
		}
		

		setUpdateCatalog(updateList);
	}
	
	useEffect(() => {
		updateProduct()
	}, [filter, products])

	useEffect(() => {
		setCurrentPage(1)
	}, [filter])

	useEffect(() => {
		let priceCartTotal = 0;
		cart.forEach((productCart) => {
			priceCartTotal = priceCartTotal + productCart.priceTtoal
			setTotalPriceProductsCart(priceCartTotal)
		})	
	}, [cart])

	const objProductStyle = {
		marginBottom: 30,
		height: 'inherit',
		maxWidth: '230px',
	}

	let onUpdateCountTotalMinus = (productNewMinus) => {
			setProducts(products.map((product) => {
				if(product.id === productNewMinus.id) {
					return {
						...product,
						count: product.count - 1,
						priceTtoal: product.priceTtoal - product.price,
					}
				} else { 
					return product
				}
		}))
	}

	let onUpdateCountTotalPlus = (productNewPlus) => {
		setProducts(products.map((product) => {
			if(productNewPlus.id === product.id) {
				return {
					...product,
					count: product.count + 1,
					priceTtoal: product.priceTtoal + product.price,
				}
			} else { 
				return product
			}
		}))
	}

	let onAddProductClass = (productNew) => {
		setProducts(products.map((product) => {
			if(productNew.id === product.id) {
				return {
					...product,
					inCart: !product.inCart
				} 
			} else {
				return product
			}
		}))
	}
	let onAddCart = (productNew) => {
		cart.length === 0 ? setCart([productNew]) : cart.map((product) => {
			product.id === productNew.id ? setCart([...cart]) : setCart([...cart, productNew]);
			})
	}
	let onRemovCart = (productNew) => {
		setCart(cart.filter(productCart => productNew.id !== productCart.id))
	}

	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(8);
	const lastProductsPage = currentPage * productsPerPage;
	const frstProductsPage = lastProductsPage - productsPerPage;
	const productsPage = updateCatalog.slice(frstProductsPage, lastProductsPage);

	const pagination = (pageNumber) => {setCurrentPage(pageNumber)};
	let onChangePaginationPage=(newPagePagination) => setCurrentPage(newPagePagination)


	return (
		<div className="App">
			<Header cartCount={cart.length}/>
			<Routes>
				<Route path='/react-app-shop' element={
											<Home 
												cartProduct={cart}
												products={products} 
												onAddCart={onAddCart}
												onRemovCart={onRemovCart}
												onUpdateCountTotalPlus={onUpdateCountTotalPlus}
												onUpdateCountTotalMinus={onUpdateCountTotalMinus}
												onAddProductClass={onAddProductClass}
											/>
										} />
				<Route path='/about' element={<About />} />
				<Route path='/cart' element={<Cart 
													totalPriceProductsCart={totalPriceProductsCart}
													productsCart={cart} 
													onUpdateTotalCartProductPlus={(productCartNewPlus) => {
														setCart(cart.map((productCart) => {
															if(productCart.id === productCartNewPlus.id) {
																return {
																	...productCart,
																	count: productCart.count + 1,
																	priceTtoal: productCart.priceTtoal + productCart.price,
																} 
															} else {
																return productCart
															}
														}))
													}}
													onUpdateTotalCartProductMinus={(productCartNewMinus) => {
														setCart(cart.map((productCart) => {
															if(productCart.id === productCartNewMinus.id) {
																return {
																	...productCart,
																	count: productCart.count - 1,
																	priceTtoal: productCart.priceTtoal - productCart.price,
																} 
															} else {
																return productCart
															}
														}))
													}}
													onProductCartRemove={(productCart) => {
														setCart(cart.filter(product => product.id !== productCart.id));
														setProducts(products.map((product) => {
															if(product.id === productCart.id) {
																return {
																	...product,
																	inCart: !product.inCart
																} 
															} else {
																return product
															}
														}))
													}}
												/>
											} />
				<Route  path='/catalog' element={	<Catalog 
														onAddCart={onAddCart}
														onRemovCart={onRemovCart}
														onUpdateCountTotalPlus={onUpdateCountTotalPlus}
														onUpdateCountTotalMinus={onUpdateCountTotalMinus}
														onAddProductClass={onAddProductClass}
														onCategoriText={(text) => {
															setFilter({...filter, category: [text]})
														}}
														onChangeRangeValue={value => setRangeValue(value)}
														rangeValue={rangeValue}
														filterCheckbox={filterCheckbox}
														filterRange={filterRange}
													/>
												}	
					>
						<Route index element={
												<CatalogHome 
													catalogProducts={updateCatalog} 
													onAddCart={onAddCart}
													onRemovCart={onRemovCart}
													onUpdateCountTotalPlus={onUpdateCountTotalPlus}
													onUpdateCountTotalMinus={onUpdateCountTotalMinus}
													onAddProductClass={onAddProductClass}
													objProductStyle={objProductStyle}
												/>
											}
						/>
						<Route path=':categoriTo' element={ 
																<CatalogProducts 
																	productsPage={productsPage} 
																	onAddCart={onAddCart}
																	onRemovCart={onRemovCart}
																	onUpdateCountTotalPlus={onUpdateCountTotalPlus}
																	onUpdateCountTotalMinus={onUpdateCountTotalMinus}
																	onAddProductClass={onAddProductClass}
																	objProductStyle={objProductStyle}
																	catalogProducts={updateCatalog} 
																	productsPerPage={productsPerPage}
																	pagination={pagination}
																	currentPage={currentPage}
																	onChangePaginationPage={onChangePaginationPage}
																/> 
															}/>
						<Route path=':categoriTo/:id' element={	
														<CatalogProductsPage
															productsPage={productsPage} 
															onAddCart={onAddCart}
															onRemovCart={onRemovCart}
															onUpdateCountTotalPlus={onUpdateCountTotalPlus}
															onUpdateCountTotalMinus={onUpdateCountTotalMinus}
															onAddProductClass={onAddProductClass}
															objProductStyle={objProductStyle}
															catalogProducts={updateCatalog} 
															productsPerPage={productsPerPage}
															pagination={pagination}
															currentPage={currentPage}
															onChangePaginationPage={onChangePaginationPage}
														/> 
														} 
						/>
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
