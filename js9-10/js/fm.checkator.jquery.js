(function($) {
	$.checkator = function (element, options) {
		var defaults = {
			prefix: 'checkator_'
		};
	
		var plugin = this;
		var type = $(element).attr('type');
		var checked = $(element)[0].checked;
		var wrapper = null;
		var new_element = null;
		plugin.settings = {};

		
		
		// INITIALIZE PLUGIN
		plugin.init = function () {
			plugin.settings = $.extend({}, defaults, options);

			wrapper = document.createElement('div');
			$(wrapper).addClass(plugin.settings.prefix + 'holder ' + type);
			$(element).before(wrapper);
			$(wrapper).append(element);
			new_element = document.createElement('div');
			if (element.id !== undefined) {
				$(new_element).attr('id', plugin.settings.prefix + element.id);
			}
			$(new_element).addClass(plugin.settings.prefix + 'element ' + type + ' ' + (checked ? 'checked ' : ''));

			$(wrapper).css({
				width: $(element).outerWidth() + 'px',
				height: $(element).outerHeight() + 'px',
				'margin-top': $(element).css('margin-top'),
				'margin-right': $(element).css('margin-right'),
				'margin-bottom': $(element).css('margin-bottom'),
				'margin-left': $(element).css('margin-left'),
				'float': $(element).css('float'),
				'display': $(element).css('display') === 'inline' ? 'inline-clock' : $(element).css('display')
			});
			$(element).css({
				opacity: 0,
				margin: 0
			});
			
			$(element).addClass(plugin.settings.prefix + 'source');
			$(element).after(new_element);

		};


		// REMOVE PLUGIN AND REVERT SELECT ELEMENT TO ORIGINAL STATE
		plugin.destroy = function () {
			$(new_element).remove();
			$.removeData(element, 'checkator');
			$(element).css({ 
				opacity: '',
				margin: '' 
			});
			$(element).removeClass(plugin.settings.prefix + 'source');
			$(element).unwrap();
		};
		

		// Initialize plugin
		plugin.init();
	};
	
	$.fn.checkator = function(options) {
		options = options !== undefined ? options : {};
		return this.each(function () {
			if (typeof(options) === 'object') {
				if (undefined === $(this).data('checkator')) {
					var plugin = new $.checkator(this, options);
					$(this).data('checkator', plugin);
				}
			} else if ($(this).data('checkator')[options]) {
				$(this).data('checkator')[options].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				$.error('Method ' + options + ' does not exist in $.checkator');
			}
		});
	};

}(jQuery));

$(function () {
	$('.checkator').checkator();
});