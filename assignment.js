	"use strict"
	// declaring template variables
	var category_template, photos_template, photo_template, slideshow_template;

	// vars to store current album and photo
	var current_category = animals_data.category[0];
	var current_photo = current_category.photos[0];

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

		source = $("#photos-template").html();
		photos_template = Handlebars.compile(source);

		source = $("#photo_template").html();
		photo_template = Handlebars.compile(source);
		
		source = $("#slideshow-template").html();
		slideshow_template = Handlebars.compile(source);

		// categories tab functionality
		//Click on Categories Tab
		$("#categories-tab").click(function (){
		  showTemplate(category_template, animals_data);

		//Click on category thumbnail
		$(".category-thumbnail").off().on('click', function () {            
	    index = $(this).data("id");            
		    // set the current category to the one just clicked
		    current_category = animals_data.category[index];
		    // displays all data - use another template to show images - description etc
		    showTemplate(animals_template, current_category);
		  });
		});


		// album tab functionality

		$("#categories-tab").click(function (){
			showTemplate(category_template, animals_data);
			// make active tab
			$(".nav-tabs .active").removeClass("active");
			$("#categories-tab").addClass("active");

			$(".album-thumbnail").click(function (){
				console.log("category clicked by user");
				var index = $(this).data("id");
				current_category = animals_data.category[index];
				showTemplate(photos_template, current_album);
				$(".photo-thumbnail").click(function (){
					console.log("photo clicked");
					var index = $(this).data("id");
					current_photo = current_category.photos[index];
					showTemplate(photo_template, current_photo);
				});
			})
		});


		//clicking photos shows all photos within current album
		$("#photos-tab").click(function () {
			console.log("should be showing photos");
			showTemplate(photos_template, current_album);
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
		

		$("#slideshow-tab").click(function () {
			showTemplate(slideshow_template, current_category);
			$(".nav-tabs .active").removeClass("active");
			$(".slideshow-tab").addClass("active");
		});

		$("#albums-tab").click();	// select the albums tab with jQuery
		


	}); // end document ready function