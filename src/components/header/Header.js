import './header.css';
import './aHeader.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import CartSvg from '../iconsComponents/cartSvg/CartSvg';
import InstaSvg from '../iconsComponents/instaSvg/InstaSvg';
import SearchSvg from '../iconsComponents/searchSvg/SearchSvg';
import UserSvg from '../iconsComponents/userSvg/UserSvg';
import VkSvg from '../iconsComponents/vkSvg/VkSvg';
import WhatsapSvg from '../iconsComponents/whatsapSvg/WhatsapSvg';
import PhoneSvg from '../iconsComponents/phoneSvg/PhoneSvg';
import EmailSvg from '../iconsComponents/emailSvg/EmailSvg';
import {useState} from 'react';


let Header = ({ cartCount }) => {

	const [navBar, setNavBar] = useState(false)

	return (
		<div className='header'>
			<div className='div_btn_bruger'>
				<div id="nav-icon1" onClick={() => navBar ? setNavBar(false) : setNavBar(true)} className={navBar ? 'open' : null}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={navBar ? 'header-row-1_burger' : 'header-row-1'}>
				<div className='nav'>
					<ul className='nav-ul'>
						<li className='nav-ul-li'>
							<NavLink to='/react-app-shop' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>Главная</NavLink>
						</li>
						<li className='nav-ul-li'>
							<NavLink to='/about' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>О компании</NavLink>
						</li>
						<li className='nav-ul-li'>
							<NavLink to='/catalog' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>Каталог</NavLink>
						</li>
						<li className='nav-ul-li'>
							<NavLink to='/buyers' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>Покупателям</NavLink>
						</li>
						<li className='nav-ul-li'>
							<NavLink to='/delivery' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>Доставка и оплата</NavLink>
						</li>
						<li className='nav-ul-li'>
							<NavLink to='/stock' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>Акции</NavLink>
						</li>
						<li className='nav-ul-li'>
							<NavLink to='/blog' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>Блог</NavLink>
						</li>
						<li className='nav-ul-li'>
							<NavLink to='/contacts' className={({isActive}) => isActive ? 'link-header-active' : 'link-header'}>Контакты</NavLink>
						</li>
					</ul>
				</div>
				<div className="nav-soc-links">
					<VkSvg />
					<InstaSvg />
					<WhatsapSvg />
				</div>
			</div>
			<div className='header-row-2'>
				<NavLink to='/' className='header-div-logo'>
					<img src={logo} className='header-logo'/>
				</NavLink>
				<div className='header-div-input'>
					<input type='text' className='header-input' placeholder='Что вы ищите?'/>
					<SearchSvg />
				</div>
				<div className='header-div-info'>
					<div className='header-info-tel-mail'>
						<div className='header-info-tel'>
							<PhoneSvg />
							<span className='header-info-tel-text'>8 (800) 55 48 97</span>
						</div>
						<div className='header-info-mail'>
							<EmailSvg />
							<span className='header-info-mail-text'>info@neyro-t.ru</span>
						</div>
					</div>
					<div className='header-info-working-hours'>
						<span className='header-info-working-hours-text'> <span className='header-info-text_off'>Время работы:</span> 07:00 - 19:00 по МСК</span>
					</div>
				</div>
				<div className='header-div-cabinet'>
					<div className='header-cabinet-user'>
						<UserSvg />
					</div>
					<div className='header-cabinet-cart'>
						<NavLink to='/cart'> <CartSvg /> 
						<div className='header-cart-count-product-div'>
							<span className='header-cart-count-product'>{cartCount}</span>
						</div>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;