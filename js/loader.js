$(window).load(function () {
		$('#img-loader').delay(1000).velocity({ opacity: 0.0 });
		$('.loader p').delay(1000).velocity({opacity: 0.0});
		//$('#left').delay(2000).velocity("transition.slideLeftOut", { stagger: 5550 });
		$('#left').delay(1700).velocity({ translateX: "-=1000px", opacity: 0.1 }, 800);
		//$('#right').delay(2000).velocity("transition.slideRightOut", { stagger: 5550 });
		$('#right').delay(1700).velocity({ translateX: "+=1000px", opacity: 0.1 }, 800);
		$('.loader').delay(2400).velocity({ opacity: 0 }, { visibility: "hidden" });
		$('.home img').velocity("transition.slideUpIn", {opacity: 1.0, delay: 2000, duration: 900});
});