//	"use strict"
	// declaring template variables
	var category_template;
	var test_template;

	Handlebars.registerHelper('dotdotdot', function(str) {
	  if (str.length > 100)
	    return str.substring(0,100) + '...';
	  return str;
	});

	// vars to store current album and photo
	var current_category = animals_data.category[0];
	// var current_photo = current_category.animals[0]; // trying to figure out which var is undefined
	var current_photo = current_category.name[0];

	// helper function to instatiate template and display in content div
	function showTemplate(template, data) {
		var html = template(data);
		$('#content').html(html);
	};

	// to run after document has loaded
	$(document).ready(function() {

		// Photo templates
		var source = $("#category-template").html();
		category_template = Handlebars.compile(source);

		source = $("#slideshow-template").html();
		slideshow_template = Handlebars.compile(source);


		//Click on category thumbnail
		$(".category-thumbnail").off().on('click', function () {            
	    index = $(this).data("id");            
		    // set the current category to the one just clicked
		    current_category = animals_data.category[index];
		    // displays all data - use another template to show images - description etc
		    showTemplate(category_template, current_category);
		  });
		//});


		// category tab functionality

		$("#categories-tab").click(function (){
			showTemplate(category_template, animals_data);
			// make active tab
			$(".nav-tabs .active").removeClass("active");
			$("#categories-tab").addClass("active");

			$(".category-thumbnail").click(function (){
				console.log("category clicked by user");
				var index = $(this).data("id");
				current_category = animals_data.category[index];
				console.log(current_category);
				showTemplate(category_template, current_category);
				$(".category-thumbnail").click(function (){
					console.log("category clicked");
					var index = $(this).data("id");
					current_photo = current_category.image1[index];
					showTemplate(photo_template, current_photo);
				});
			})
		});

		$("#slideshow-tab").click(function () {
		showTemplate(slideshow_template, current_category);
		$(".nav-tabs .active").removeClass("active");
		$(".slideshow-tab").addClass("active");
	});

	// thumbnail jQuery
		$(".thumbnail").click(function (event){
		var imgNum = $(this).data("id");
		});
		//var image = data.images[imgNum];
		var index = $(this).data("id");

		$("#categories-tab").click();	// select the albums tab with jQuery to show as "first tab"
		


	//clicking photos shows all photos within current album
	$("#photos-tab").click(function () {
		console.log("should be showing photos");
		showTemplate(animals_template, current_album);
		$(".nav-tabs .active").removeClass("active");
		$("#photos-tab").addClass("active");
		$(".photo-thumbnail").click(function (){
			// get the photo's index number using id
			var index = $(this).data("id");
			// set as current photo
			current_photo = current_album.photos[index];			
			// use single photo template
			showTemplate(photo_template, current_photo);
		});
	});

	$(".photo-thumbnail").click(function () {
		console.log("clicked a photo");
		var index = $(this).data("id");
		current_photo = current_category.photos[index];
		showTemplate(photo_template, current_photo);
	});
		

	}); // end document ready function