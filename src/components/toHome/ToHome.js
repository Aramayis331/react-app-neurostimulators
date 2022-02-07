import { NavLink } from 'react-router-dom';
import './toHome.css';

const ToHome = () => {
	return (
		<ul className='cartUlLink'>
			<li className='cartLiLink'>
				<NavLink to='/react-app-shop' className='cartToLink'>Главная страница</NavLink>
			</li>
		</ul>
	)
}

export default ToHome;