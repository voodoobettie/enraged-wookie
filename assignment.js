//	"use strict"
	// declaring template variables
	var category_template, animals_template, animal_template, slideshow_template, modal_template;
	var current_category, current_animal;
	var str=""; // empty string to use in helper below

	// to run after document has loaded
	$(document).ready(function() {

		// Category templates - compiling with handlebars
		var source = $("#category-template").html();
		category_template = Handlebars.compile(source);
		// Animals view template
		source = $("#animals-template").html();
		animals_template = Handlebars.compile(source);

		// Single animal template
		source = $("#animal-template").html();
		animal_template = Handlebars.compile(source);

		//template for modal to show photo
		source = $("#modal_template").html();
		modal_template = Handlebars.compile(source);

		// template for slideshow
		source = $("#slideshow-template").html();
		slideshow_template = Handlebars.compile(source);	

		// vars to store current category and animal, setting default values
		current_category = animals_data.category[0];
		current_animal = current_category.animals[0];

		// helper function to instatiate template and display in content div
		function showTemplate(template, data) {
			var html = template(data);
			$('#content').html(html);
		};

		Handlebars.registerHelper('dotdotdot', function(str) {
		  if (str.length > 100)
		    return str.substring(0,100) + '...';
		  return str;
		});

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
				//current_animal = current_category.animals[index];
				console.log(current_category);
				showTemplate(animals_template, current_category);
			});

		});
		
	// show the selected animal category using animals template
	$("#animals-tab").click(function () {
		$(".active").removeClass("active");
        $("#animals-tab").addClass("active");
		showTemplate(animals_template, current_category);
		$(".animal-thumbnail").click(function (){
			var index = $(this).data("id");
			current_animal = current_category.animals[index];
			//var html = modal_template(current_animal);
			//$("#modal_info").html(html);
			showTemplate(animal_template, current_animal);
			//$("#photo_booth").modal('show');	
		});
	});


		$("#slideshow-tab").click(function (event) {
			showTemplate(slideshow_template, current_category);
			$(".nav-tabs .active").removeClass("active");
			$(".slideshow-tab").addClass("active");
	});


    $("#searchbox").keypress(function(e) {
        if (e.which == 13) {
            var search_text = $('#searchbox').val();
            console.log(search_text);
            var filteredData = {
                category: animals_data.category.filter(function(d) {
                    if (d.name.search(search_text) > -1) {
                            return true;
                        }
                        //   if(d.description.search(search_text) > -1){
                        //   return true;
                        //   }
                        return false;
                })
            };
            var html = animals_template(filteredData);
            $('#content').html(html);
        }
    });

    $("#categories-tab").click();	// select the albums tab with jQuery to show as "first tab"


	}); // end document ready function