//	"use strict"
	// declaring template variables
	var modal_template, animals_template, category_template;
	var current_category, current_animal, animals_data;
	var str=""; // empty string to use in helper below

	Handlebars.registerHelper('dotdotdot', function(str) {
	  if (str.length > 100)
	    return str.substring(0,100) + '...';
	  return str;
	});

	// vars to store current category and animal, setting default values
	var current_category = animals_data.category[0];
	var current_animal = current_category.animals[0];

	// helper function to instatiate template and display in content div
	function showTemplate(template, data) {
		var html = template(data);
		$('#content').html(html);
	};

	// to run after document has loaded
	$(document).ready(function() {

		// Category template
		var source = $("#category-template").html();
		category_template = Handlebars.compile(source);
		
		// Animal template
		source = $("#animals-template").html();
		animals_template = Handlebars.compile(source);

		//template for modal to show photo
		source = $("#modal-template").html();
		modal_template = Handlebars.compile(source);

		// template for slideshow
		source = $("#slideshow-template").html();
		slideshow_template = Handlebars.compile(source);	

		//Category thumbnail handler
		$(".category-thumbnail").off().on('click', function () {            
	    index = $(this).data("id");            
		    // set the current category to the one just clicked
		    current_category = animals_data.category[0];
		    // displays all data - use another template to show images - description etc
		    showTemplate(category_template, current_category);
		  });

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
					current_animal = current_category.animals.image1[index];
					showTemplate(animal_template, current_animal);
				});
			})
		});

		$("#slideshow-tab").click(function () {
		showTemplate(slideshow_template, current_category);
		$(".nav-tabs .active").removeClass("active");
		$(".slideshow-tab").addClass("active");
	});

	// thumbnail jQuery
		$(".category-thumbnail").click(function (event){
		var imgNum = $(this).data("id");
		});
		//var image = data.images[imgNum];
		var index = $(this).data("id");
		// $('#photo_booth').modal(show);

		$("#categories-tab").click();	// select the albums tab with jQuery to show as "first tab"
		
		$('#photo_booth').on('show.bs.modal', function (e) {
			console.log("show modal");
		});

	//clicking photos shows all photos within current album
	$("#animals-tab").click(function () {
		console.log("should be showing photos");
		showTemplate(animals_template, current_category);
		$(".nav-tabs .active").removeClass("active");
		$("#animals-tab").addClass("active");
		$(".category-thumbnail").click(function (){
			// get the photo's index number using id
			var index = $(this).data("id");
			// set as current photo
			current_animal = current_category.animals[index];			
			// use single photo template
			showTemplate(animals_template, current_animal);
		});
	});

	$(".category-thumbnail").click(function () {
		console.log("clicked a photo");
		var index = $(this).data("id");
		current_animal = current_category.animals[index];
		showTemplate(animals_template, current_animal);
	});
		


	// search box code 
	/*$('.search').keypress(function(e){
		if (e.which == 13){
			var filteredData = { images = data.images.filter(function(d){
					if (d.title.search(text)>-1){
						return true;
					}
					return false;
			});
		};
	}); // end search function */






	}); // end document ready function