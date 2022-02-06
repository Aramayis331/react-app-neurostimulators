import './productsPagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

const ProductsPagination = ({products, productsPerPage, pagination, currentPage, onChangePaginationPage }) => {
	const {categoriTo} = useParams()
	const navigate = useNavigate();

	const pageNumbers = [];
	
	for(let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
		pageNumbers.push(i)
	}

	const onChangePathId=(number, categori) => {
		navigate(`/catalog/${categori}/${number}`);
	}

	return (
		<div className='productsPagination'>
			{
				(pageNumbers.length > 1) && (
					<button className='pagination_button' onClick={() => {
						onChangePaginationPage(currentPage === 1 ? currentPage : currentPage - 1)
						onChangePathId((currentPage === 1 ? currentPage : currentPage - 1), categoriTo);
					}}> 
						<FontAwesomeIcon className='pagination_button_left' icon={faChevronLeft} /> 
					</button>	
				)
			}
			<ul className='pagination-ul'>
				{
					pageNumbers.map((number) => {
						return (
							<li className='pagination-ul-li' key={number}>
								<NavLink to={`/catalog/${categoriTo}/${number}`} className={currentPage === number ? 'pagination-ul-li-link-active' : 'pagination-ul-li-link'} onClick={() => {
									pagination(number);
								}}>
									{number}
								</NavLink>
							</li>
						)
					})
				}
			</ul>
			{
				(pageNumbers.length > 1) && (
					<button className='pagination_button' onClick={() => {
						onChangePaginationPage(pageNumbers.length === currentPage ? currentPage : currentPage + 1)
						onChangePathId((pageNumbers.length === currentPage ? currentPage : currentPage + 1), categoriTo);
					}}> 
						<FontAwesomeIcon className='pagination_button_right' icon={faChevronRight} /> 
					</button>
				)
			}
		</div>
	)
}

export default ProductsPagination;