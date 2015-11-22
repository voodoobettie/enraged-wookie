
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

	// thumbnail jQuery
	$(".thumbnail").click(function (event){
		var imgNum = $(this).data("id");
	});
	var image = data.images[imgNum];



	source = $("#photos-template").html();
	animals_template = Handlebars.compile(source);

	source = $("#photo_template").html();
	photo_template = Handlebars.compile(source);
	
	source = $("#slideshow-template").html();
	slideshow_template = Handlebars.compile(source);


	$("#slideshow-tab").click(function () {
		showTemplate(slideshow_template, current_category);
		$(".nav-tabs .active").removeClass("active");
		$(".slideshow-tab").addClass("active");
	});

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


<!--
    {{#each category}}
    <div class="col-xs-12 col-md-3"> 
        <div class="album-thumbnail"  data-id="{{@index}}">
          <img class="crop-img" src="{{ animals.0.image1 }}" alt=""/> 
            
          <div class="caption">
              <h4> {{name}} </h4>
              <p> {{ description }}</p>
              <p>{{image1}} photos</p> //photos.length
          </div>
         </div>
    </div> <!-- end col -->
    <!--{{/each}}

  </div> <!-- end row -->
</script>

<!-- photos template-->
<script id="animals-template" type="text/x-handlebars-template">
  <div class="row">

    {{#each animals}}
    <div class="col-sm-3 col-xs-1 col-md-6"> 
     <div class="photo-thumbnail"  data-id="{{@index}}">
        <img class="crop-img" src="{{image1}}" alt=""/> 
        <img class="crop-img" src="{{image1}}"/>
        <img class="crop-img" src="{{image2}}"/>
        
         <div class="caption">
            <h3>{{ name }}</h3>
            <p>{{ description }}</p>
         </div>
      </div>
       
    </div> <!-- / col -->
    {{/each}}

  </div> <!-- / row -->
</script>


<!--Photo template-->
<script id="photo-template" type="text/x-handlebars-template">
  <div class="row">
    <div class="col-xs-12 col-md-12"> 
        <img class="large-img" src="{{image1}}" alt=""/> 
          
        <div class="caption">
            <h3>{{name}}</h3>
            <p>{{description}}</p>
        </div>
      </div> <!-- end col -->

  </div> <!-- end row -->
</script>


<!--The slideshow view, or as I prefer to call it, the carousel view, wheee!-->

<script id="slideshow-template" type="text/x-handlebars-template">
<div class="row">

	<div class="col-md-6">
		<div id="carousel" class="carousel slide" data-ride="carousel">

			<ol class="carousel indicators">
				<li data-target="#carousel" data-slide-to="0" class="active"></li>
				<li data-target="#carousel" data-slide-to="1"></li>
				<li data-target="#carousel" data-slide-to="2"></li>
			</ol>

		<!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">

          {{#each animals}}
            <div class="item {{#if @first}}active{{/if}}">
             <img class="carousel-img" src="{{image1}}" alt=""/> 
            <div class="carousel-caption">
              Image caption
            </div>
          </div> <!-- / carousel item -->
          {{/each}}

        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div> <!-- end carousel --> 
  </div> <!-- end col -->
</div> <!-- end row -->
</script>
