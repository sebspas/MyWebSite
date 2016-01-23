$(function() {
	var cpt = 0;
	var cptlight = 0;
	$('#img-logo').click(function() {
		if (cpt === 0) {
			$('.menu').velocity({ translateX: "+=165px", opacity: 1.0, borderTop: 0}, 900);
			$('.menu').css("border-radius","0px 0px 11px 0px");
			$('#img-logo').velocity({width: $('.menu').width()-10, borderBottom: 0}, 1000);
			$('#img-logo').css("border-radius","0px 11px 0px 0px");
			//$('#section1').velocity({scale : 0.90, opacity : 0.70 }, 700);
			cpt += 1;
		}
		else {
			cpt = 0;
			$('.menu').velocity({ translateX: "-=165px", opacity: 0.0, borderTop: "11px"}, 900);
			$('.menu').css("border-radius","0px 11px 11px 0px");
			$('#img-logo').velocity({width: "55px", borderBottom: "11px"}, 1100);
			$('#img-logo').css("border-radius","0px 11px 11px 0px");
		}
	});
	$('.menu').click(function() {
		cpt = 0;
			$('.menu').css("border-radius","0px 11px 11px 0px");
			$('.menu').velocity({ translateX: "-=165px", opacity: 0.0, borderTop: "11px"}, 900);
			$('#img-logo').velocity({width: "55px", borderBottom: "11px"}, 1100);
			$('#img-logo').css("border-radius","0px 11px 11px 0px");
	});

	$('.menu a').hover(function() {
		$(this).velocity({opacity: 1.0}, 500);
	},
	function() {
		$(this).velocity({opacity: 0.5}, 500);
	});
	$('#section1').hover(function() {
		$(Home).velocity({opacity: 1.0}, 500);
	},
	function() {
		$(Home).velocity({opacity: 0.5}, 500);
	});
	$('#section2').hover(function() {
		$(Skill).velocity({opacity: 1.0}, 500);
	},
	function() {
		$(Skill).velocity({opacity: 0.5}, 500);
	});
	$('#section3').hover(function() {
		$(Portfolio).velocity({opacity: 1.0}, 500);
	},
	function() {
		$(Portfolio).velocity({opacity: 0.5}, 500);
	});
	$('#section4').hover(function() {
		$(About).velocity({opacity: 1.0}, 500);
	},
	function() {
		$(About).velocity({opacity: 0.5}, 500);
	});
	$('#section5').hover(function() {
		$(Contact).velocity({opacity: 1.0}, 500);
	},
	function() {
		$(Contact).velocity({opacity: 0.5}, 500);
	});
});