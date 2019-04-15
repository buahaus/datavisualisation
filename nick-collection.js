// var key = 'SCJnOBwjJqgpwxIybOHvs0cUt0XRrydH';	// Your unique key - https://www.behance.net/dev
var key = '9AwInosQykaf21iKK6bM2H24oL5BJ1Wa';
var user ='nickbeelde3aa0';





function goBack() {
  window.history.back();
}
 
$(function(){

	var pageURL = new URL(document.location);
	var params = pageURL.searchParams;
	var id = params.get('id');
	// var urlProject = 'https://api.behance.net/v2/nickbeelde3aa0/' + id + '/projects?client_id=' + key;
	var urlProject = 'http://www.behance.net/v2/projects/' + id +'?api_key=' + key;
	

	// AJAX request
	$.ajax({

		url: urlProject,
		dataType: 'jsonp',
			success: function(res) {

			// Success! We can get rid of the preloader now...
			

			console.log(res);

			var project = res.project;

			// show the project details like this
			$('<h1 class="project-name">' + project.name +'</h1>').appendTo('.collection-container');
			$('<p>' + project.description + '</p>').appendTo('.collection-container');
			// using Moment JS for clean and easy to use time format
			// https://momentjs.com/docs/#/displaying/fromnow/
			// https://momentjs.com/docs/#/displaying/unix-timestamp/
			
			$('<img src="' + project.covers.original + '">').appendTo('.collection-container');
		
		},

		// if the ajax request fails do these things as a fallback
		error: function(res) {
			$('<h1> Error!! </h1>').appendTo('body');

		}

	});
});
