	
<img class="crop-img" src="{{image1}}" alt="{{name}}"/>

  <div id="breadcrumbs">
    </div>


<script id="breadcrumbs-template" type="text/x-handlebars-template">
           <ul class="breadcrumb">
               <li title="home"><span class="glyphicon glyphicon-home"></span></li>
               {{#if category}}
               <li title="category">{{category}}</li>
               {{/if}}
               {{#if animal}}
               <li title="animal">{{animal}}</li>
               {{/if}}
           </ul>
       </script>

