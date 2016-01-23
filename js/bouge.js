$(function() {
	$.fn.Bouge= function() {
		$('#cadre figure').velocity({ translateY: "-=20px" }, 800);
	}
});