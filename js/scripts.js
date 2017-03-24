(function($){

	$(document).ready(function(){
		$(".bigmenu > ul > li > a").hover(function(){
			$(this).sibling().toggle("show")
		});
	});

})(jQuery);