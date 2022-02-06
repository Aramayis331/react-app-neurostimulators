import './titelSection.css';

const TitelSection = ({ titel }) => {
	return (
			<div className='titel-sections-div'>
				<p className='titel-sections-text'>{titel}</p>
			</div>
	)
}

export default TitelSection;