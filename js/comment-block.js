(function() {

  	if (!Element.prototype.closest) {

    
	    Element.prototype.closest = function(css) {
	        var node = this;

	        while (node) {
	            if (node.matches(css)) return node;
	            else node = node.parentElement;
	        }
	        
	        return null;
	    };
	}

})();

window.addEventListener('load', function() {
	var btnOpenComment = document.querySelectorAll('.order__accord-btn');
	var btnHideComment = document.querySelectorAll('.order__accord-comment-button');
	var i, j;	

	function showCommentBlock(e) {
		e.preventDefault();
		var parent = this.closest('.order__subsector-accord');
		var aimBlock = parent.querySelector('.order__accord-comment-wrapper');

		if (!this.classList.contains('order__accord-btn--hidden')) {
			this.classList.add('order__accord-btn--hidden');
		}

		if (!aimBlock.classList.contains('order__accord-comment-wrapper--active')) {
			aimBlock.classList.add('order__accord-comment-wrapper--active');
		}
	}

	function hideCommentBlock(e) {
		e.preventDefault();
		var wrapper = this.closest('.order__accord-comment-wrapper');
		var parentBlock = this.closest('.order__subsector-accord');
		var blockBtn = parentBlock.querySelector('.order__accord-btn');
		var textarea = parentBlock.querySelector('.order__accord-comment-field');
		
		if (textarea.value) {
			textarea.value = null;
		}

		if (wrapper.classList.contains('order__accord-comment-wrapper--active')) {
			wrapper.classList.remove('order__accord-comment-wrapper--active');
		}

		if (blockBtn.classList.contains('order__accord-btn--hidden')) {
			blockBtn.classList.remove('order__accord-btn--hidden');
		}
	}
	
	for (i=0; i<btnOpenComment.length; i++) {
		btnOpenComment[i].addEventListener('click', showCommentBlock);		
	}

	for (j=0; j<btnHideComment.length; j++) {
		btnHideComment[j].addEventListener('click', hideCommentBlock);
	}
});// comment block hide-show

window.addEventListener('load', function() {
	var btsnShowAccordionBlock = document.querySelectorAll('.js-show-accord-block');
	var btnsHideAccordionBlock = document.querySelectorAll('.js-hide-accord-block');
	var i, j;
	var accordsBlock = document.querySelectorAll('.order__subsector-accord');


console.log(accordsBlock);
	function hideAllAccords() {		
		var i;

		for (i=0; i<accordsBlock.length; i++) {
			if (accordsBlock[i].classList.contains('order__subsector-accord--active')) {
				accordsBlock[i].classList.remove('order__subsector-accord--active')
			}
		}
	}

	function showAccordionBlock(e) {		
		var target = e.target;
		var parentBlock = this.parentNode;
		var accordionBlock = parentBlock.querySelector('.order__subsector-accord');

		if (target.tagName == 'BUTTON') {
			e.preventDefault();			
		}

		hideAllAccords();

		if (!accordionBlock.classList.contains('order__subsector-accord--active')) {
			accordionBlock.classList.add('order__subsector-accord--active');
		} else {
			
		}
		
	}

	function hideAccordionBlock(e) {
		var target = e.target;
		console.log('4');

		if (target.tagName == 'BUTTON') {
			e.preventDefault();			
		}
	}

	hideAllAccords();	

	for (i=0; i<btsnShowAccordionBlock.length; i++) {
		btsnShowAccordionBlock[i].addEventListener('click', showAccordionBlock);
	}

	for (j=0; j<btnsHideAccordionBlock.length; j++) {
		btnsHideAccordionBlock[j].addEventListener('click', hideAccordionBlock);
	}
});// accordion