function hideScrollBar(elemWrapperClass, elemScrollingClass) {
	var elemOuter = document.querySelectorAll(elemWrapperClass);
	var elemInner;
	var i;
	
	for (i=0; i<elemOuter.length; i++) {
		elemInner = elemOuter[i].querySelector(elemScrollingClass);
		elemOuter[i].style.height = elemInner.clientHeight + 'px';
	}
	
}

window.addEventListener('load', function() {	

	hideScrollBar('.guitar-menu__block-scroll', '.guitar-menu__wrapper');
});

