import './footer.css';
import './aFooter.css';
import logo from '../../images/logo.png';
import visa from '../../images/footer-visa.png';
import master from '../../images/footer-master-card.png';
import mir from '../../images/footer-mir.png';
import PhoneSvg from '../iconsComponents/phoneSvg/PhoneSvg';
import EmailSvg from '../iconsComponents/emailSvg/EmailSvg';

let Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-row-1'>
                <div className='footer-row1-div1'>
                    <p className='footer-row1-div1-text'>
                        Новинки и акции у вас в почте
                    </p>
                    <div className='footer-row1-div1-input-div'>
                        <input
                            type='text'
                            placeholder='Ваш e-mail адрес'
                            className='footer-row1-input'
                        />
                        <button>Подписаться</button>
                    </div>
                </div>
                <div className='footer-row1-div2'>
                    <div className='footer-row1-div2-tel-div'>
                        <div className='footer-row1-div2-tel'>
                            <PhoneSvg />
                            <p className='footer-row1-div2-tel-text'>
                                8 (800) 55 48 97
                            </p>
                        </div>
                        <p className='footer-row1-div2-text'>
                            Звонок бесплатный
                        </p>
                    </div>
                    <div className='footer-row1-div2-buttons-div'>
                        <button className='footer-row1-div2-button1'>Задать вопрос</button>
                        <button className='footer-row1-div2-button2'>Заказать звонок</button>
                    </div>
                </div>
            </div>
            <div className='footer-row-2'>
                <div className='footer-row-2-div1'>
                    <img src={logo} alt='no photo' />
                </div>
                <div className='footer-row-2-div2'>
                    <div className='footer-row-2-div2-ul'>
                        <p className='footer-row-2-div2-titel'>Информация</p>
                        <p className='footer-row-2-div2-li'>Главная</p>
                        <p className='footer-row-2-div2-li'>Кредит</p>
                        <p className='footer-row-2-div2-li'>Возврат</p>
                    </div>
                </div>
                <div className='footer-row-2-div3'>
                    <div className='footer-row-2-div2-ul'>
                        <p className='footer-row-2-div2-titel'>Контакты</p>
                        <p className='footer-row-2-div2-li'>
                            Время работы: 07:00 - 19:00 по МСК
                        </p>
                        <div className='email-footer'>
                            <EmailSvg />
                            <p className='footer-row-2-div2-li'>
                                info@neyro-t.ru
                            </p>
                        </div>
                        <p className='footer-row-2-div2-li'>
                            Свердловская обл., г.Новоуральск, ул. Фрунзе оф.3
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer-row-3'>
                <div className='footer-row-3-div-text'>
                    <p className='footer-row-3-text'>
                        Политика обработки персональных данных
                    </p>
                </div>
                <div className='footer-row-3-div-img'>
                    <div className='footer-row-3-img'>
                        <img src={mir} alt='no photo' />
                    </div>
                    <div className='footer-row-3-img'>
                        <img src={master} alt='no photo' />
                    </div>
                    <div className='footer-row-3-img'>
                        <img src={visa} alt='no photo' />
                    </div>
                </div>
                <div className='footer-row-3-div-text'>
                    <p className='footer-row-3-text'>
                        Copyright © 2021 ООО “Интернет проекты”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
