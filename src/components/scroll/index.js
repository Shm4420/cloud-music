import React, { useState,useEffect,useRef } from 'react';

const Scroll =  forwardRef(
	(props,ref)=>{
		const [bScroll,setBScroll] = useState();
		// 指向初始化 bScroll 实例需要的DOM元素
		const scrollContainerRef = useRef();
		const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
		const { pullUp, pullDown, onScroll } = props;
		useEffect(()=>{
			
		},[])
		return(
			<div>
				scroll
			</div>
		)
	}
)
export default React.memo(Scroll);
