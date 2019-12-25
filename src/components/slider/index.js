import React,{useState,useEffect} from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import { SliderContainer } from './style';

function Slider(props){
	const [sliderSwiper,setSliderSwiper] = useState(null);
	const {bannerList} = props;
	useEffect(()=>{
		if(bannerList && !sliderSwiper){
			let sliderSwiper = new Swiper(".slider-container",{
				loop:true,
				autoplay:true,
				autoplayDisableOnInteraction: false,
				pagination: {el:'.swiper-pagination'},
			})
			setSliderSwiper(sliderSwiper);
		}
	},[bannerList.length,sliderSwiper]);
	return (
		<SliderContainer>
			<div className="slider-container">
				<div className="swiper-wrapper">
					{
						bannerList.map(slider =>{
							return (
								<div className="swiper-slide" key={slider.imgurl}>
									<div className="slider-nav">
										<img src={slider.imgurl} width="100%" height="100%" alt="推荐"></img>
									</div>
								</div>
							)
						})
					}
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</SliderContainer>
	)
}

export default React.memo (Slider);