$(function() {
	$.fn.Center= function() {
		this.css({
			'display':'block',
			'position':'fixed',
			'left':'50%',
			'top': '50%'
		});
		this.css({
			'margin-left' : -this.width()/2 + 'px',
			'margin-top': -this.height()/2 +'px'

		});
	}
});
