import './sliderRange.css';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';

const SliderRange = ({ rangeValue, onChangeRangeValue, filterRange, onChangePat }) => {

    const minDistance = 1000;

	useEffect(() => {
		filterRange(rangeValue)
	}, [rangeValue])

    const onChangeValue = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
			onChangeRangeValue([ Math.min(newValue[0], rangeValue[1] - minDistance), rangeValue[1],])
        } else {
            onChangeRangeValue([rangeValue[0], Math.max(newValue[1], rangeValue[0] + minDistance),]);
        }

    };

    return (
        <div className='slider_range'>
        <div className='clickRangeDiv' onClick={() => onChangePat()}>
			<Slider
					value={rangeValue}
					onChange={onChangeValue}
					min={0}
					max={20000}
					disableSwap
				/>
		</div>
            <div className='input_price_div'>
                <div className='price_div_range'>
                    <span className='price_range_text'>От</span>
                    <span className='price_range_number'>{rangeValue[0]}</span>
                </div>
                <div className='price_div_range'>
                    <span className='price_range_text'>До</span>
                    <span className='price_range_number'>{rangeValue[1]}</span>
                </div>
            </div>
        </div>
    );
};

export default SliderRange;
