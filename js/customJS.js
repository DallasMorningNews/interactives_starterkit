$(document).ready(function() {

	//custom scripting goes here

	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	// some code blocks require javascript to function, like slideshows, synopsis blocks, etc
	// you can find that code here: https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Cookbook


	function closeList() {
		$(".open-list").removeClass("open-list");
		$(".open-button").removeClass("open-button");
	}

	var $hedButton = $(".header-group button");

	$hedButton.click(function(e) {

		if ($hedButton.hasClass("open-button") === true && $(this).hasClass("open-button") === true) {
			closeList();
		} else {
			closeList();
			$(this).addClass("open-button");
			$(this).siblings("ul").addClass("open-list");
		}
		e.stopPropagation();
	});

	$("body").click(function() {
		closeList();
	});



	if (document.cookie.indexOf("DMN-P") >= 0) {
		$("body").addClass("subscribed");
	} else {
		$("body").removreClass("subscribed");
	}


});
