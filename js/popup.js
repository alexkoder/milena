(function($) {
	$(document).ready(function() {
		var registration_block = $('header .registration'),
			popups = registration_block.children('.popup'),
			links = registration_block.children('a'),
			close_btns = registration_block.find('.close-btn');

		links.on('click', function() {			
			var popup = $(this).next();
			if (popup.is(':hidden'))
			{
				popups.hide();
				popup.show(200);
			}

			return false;
		});
		
		close_btns.on('click', function() {
			popups.hide(200);	
		});
	});
})(jQuery);