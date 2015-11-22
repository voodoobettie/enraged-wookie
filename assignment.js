//	"use strict"
	// declaring template variables
	var category_template;
	var test_template;

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


		$("#categories-tab").click();	// select the albums tab with jQuery
		


	}); // end document ready function