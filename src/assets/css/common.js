// 一行文字溢出部分用... 代替
const ellipsis = () => {
	return `
	  text-overflow: ellipsis;
	  overflow: hidden;
	  white-space: nowrap;
	`
}
const ellipsisn = (n) => {
	return `
		display:-webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp:${n};
		-webkit-box-orient:vertical;
	`
}
  
export default {
	'theme-color': '#d44439',
	'theme-color-shadow': 'rgba (212, 68, 57, .5)',
	'font-color-light': '#f1f1f1',
	'font-color-desc': '#2E3030',
	'font-color-desc-v2': '#bba8a8',// 略淡
	'font-size-ss': '10px',
	'font-size-s': '12px',
	'font-size-m': '14px',
	'font-size-l': '16px',
	'font-size-ll': '18px',
	"border-color": '#e4e4e4',
	'background-color': '#f2f3f4',
	'background-color-shadow': 'rgba (0, 0, 0, 0.3)',
	'highlight-background-color': '#fff',
	ellipsis,
	ellipsisn
  }