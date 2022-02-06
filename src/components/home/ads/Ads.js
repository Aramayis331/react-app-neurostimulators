import './ads.css';
import './aAds.css';
import img_ads1 from '../../../images/img-ads-1.png';
import img_ads2 from '../../../images/img-ads-2.png';
import img_ads3 from '../../../images/img-ads-3.png';

const Ads = () => {
	return (
		<div className='ads'>
				<div className='ads-div-1'>
					<div className='ads-div-1-text'>
						<p className='ads-div-1-text-1'>Доска Бильгоу</p>
						<p className='ads-div-1-text-2'>Cпециально разработанное устройство 
							для работы над стимуляцией мозжечка. 
							Принцип работы балансировочной доски: 
						<span className='ads-div-1-text-2-span'>Ребенок стоит на доске, которая закреплена 
							на округлой основе, что заставляет его удерживать 
							равновесие.</span>
						</p>
						<button className='ads-div-1-text-button'>Узнать подробности</button>
					</div>
					<div className='ads-div-1-img'>
						<img src={img_ads1} alt='no photo'/>
					</div>
				</div>
				<div className='ads-div-2'>
					<div className='ads-div-2-ads1'>
						<div className='ads-div-2-text'>
							<p className='ads-div-2-text-1'>Стойка с мишенями-целями</p>
							<p className='ads-div-2-text-2'>Стойка регулируется по высоте 
								(от 60 до 120 см) стойка, 
								На стойке расположено 5 мишеней-целей. 
							</p>
							<button className='ads-div-2-text-button'>Подробнее</button>
						</div>
						<div className='ads-div-2-img'>
							<img src={img_ads2} alt='no photo'/>
						</div>
					</div>
					<div className='ads-div-2-ads2'>
						<div className='ads-div-2-text'>
							<p className='ads-div-2-text-1'>Нейровосьмерка</p>
							<p className='ads-div-2-text-2'>один из тренажеров для 
							мозжечковой стимуляции. Для успешного 
							выполнения заданий необходимо регулировать...
							</p>
							<button className='ads-div-2-text-button'>Подробнее</button>
						</div>
						<div className='ads-div-2-img'>
							<img src={img_ads3} alt='no photo'/>
						</div>
					</div>
				</div>
		</div>
	)
}

export default Ads;