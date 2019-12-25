import React from 'react'
import Slider from '../../components/slider'
function Recommend (props){
	console.log(props);
	const bannerList = [1,2,3,4].map (item => {
		return { imgurl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
	  });
	return(
		<div>
			<Slider bannerList={bannerList}></Slider>
		</div>
	)
}
export default React.memo(Recommend);