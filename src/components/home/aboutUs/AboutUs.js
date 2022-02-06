import './aboutUs.css';
import './aAboutUs.css';
import aboutUsImg from '../../../images/about-us-img.png';
import aboutUsImgLic1 from '../../../images/about-us-img-lic-1.png';
import aboutUsImgLic2 from '../../../images/about-us-img-lic-2.png';
import aboutUsImgLic3 from '../../../images/about-us-img-lic-3.png';
import TitelSection from '../titelSection/TitelSection';

let AboutUs = ({ titel }) => {
	return (
		<div className='about-us'>
			<TitelSection titel={titel}/>
			<div className='about-us-div'>
				<div className='about-us-div-1'>
					<img src={aboutUsImg} alt='no photo'/>
				</div>
				<div className='about-us-div-2'>
					<p className='about-us-div-2-titel'>Что такое доска Бильгоу?</p>
					<p className='about-us-div-2-text'>
						История программы мозжечковой стимуляции родилась ее 
						началась в 60е годы XX века. Как-то раз американский 
						педагог Фрэнк Бильгоу, который работал в то время в школе, 
						заметил интересную закономерность: ученики, которые 
						на переменах играли в игры, связанные с балансировкой.
					</p>
					<p className='about-us-div-2-titel'>Лицензии и cертификаты</p>
					<div className='about-us-div-2-img-div'>
						<div className='about-us-div-2-img'>
							<img src={aboutUsImgLic1} alt='no photo' />
						</div>
						<div className='about-us-div-2-img'>
							<img src={aboutUsImgLic2} alt='no photo' />
						</div>
						<div className='about-us-div-2-img'>
							<img src={aboutUsImgLic3} alt='no photo' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
} 

export default AboutUs;