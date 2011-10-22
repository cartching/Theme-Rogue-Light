/**
 *
 * CartChing Theme / Rogue Light
 * Copyright (c) CartChing, 2011 | http://cartching.com
 * 
 * Copyright (C) 2011 Cartching
 * 
 */


// Change Stock Value to Text Description
// $(".stockqty").stockify();

// $('.stockqty').stockify().parent().show();


(function($){
   $.fn.stockify = function() {

       return this.each(function() {
           var $this = $(this);
           var level = parseInt($this.text(),10);
           
           var text;

			if (level < 25) text = "Low";
			if (level >= 25) text = "20+"
			if (level > 40) text = "";
			if (level == 1 ) text = "Only 1 left ";
			if (level == 2 ) text = "2 left ";
			if (level == 3 ) text = "3 left ";
			if (level == 4 ) text = "4 left ";
			if (level == 5 ) text = "5 left ";
			if (level == 0) text = "None";
			
			$this.text(text);

       });
   };
})(jQuery);



// Page Navigation Selector
$(document).ready( function() {

	// set any current links in the #nav to be "active"
	$(".navigation a").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


	// set any current links in the #nav to be "active"
	$(".categories li a").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


});



// Open External Links as Blank Targets via Unobtrusive JavaScript
// http://perishablepress.com/press/2007/11/20/open-external-links-as-blank-targets-via-unobtrusive-javascript/

function externalLinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		if (
			anchor.getAttribute("href") && ( 
			anchor.getAttribute("rel") == "external" || 
			anchor.getAttribute("rel") == "external nofollow" || 
			anchor.getAttribute("rel") == "nofollow external" )
			)
		anchor.target = "_blank";
	}
}
window.onload = function() {
	externalLinks();
};

