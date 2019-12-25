import styled from'styled-components';
import style from '../../assets/css/common';
export const Top = styled.div`
	display:flex;
  padding:5px 10px;
	justify-content:space-between;
	background-color:${style['theme-color']};
	& >span{
		font-size:20px;
		line-height:40px;
		color:#fff;
		& .iconfont {
			font-size: 25px;
		}
	}
`
export const Tab = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`