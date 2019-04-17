var user = 'nickbeelde3aa0';



function goBack() {
    window.history.back();
}

$(function() {

    var pageURL = new URL(document.location);
    var params = pageURL.searchParams;
    var id = params.get('id');
    // var urlProject = 'https://api.behance.net/v2/nickbeelde3aa0/' + id + '/projects?client_id=' + key;
    var urlProject = 'http://www.behance.net/v2/projects/' + id + '?api_key=' + key;
    // var urlProject = 'https://behance-mock-api.glitch.me/api/projects';


    // AJAX request
    $.ajax({

        url: urlProject,
        dataType: 'jsonp',
        success: function(res) {

            // Success! We can get rid of the preloader now...


            console.log(res);

            window.project = res.project;

            // show the project details like this
            // $('<h1 class="project-name">' + project.name + '</h1>').appendTo('.collection-container');
            // $('<p>' + project.description + '</p>').appendTo('.collection-container');
            // using Moment JS for clean and easy to use time format
            // https://momentjs.com/docs/#/displaying/fromnow/
            // https://momentjs.com/docs/#/displaying/unix-timestamp/

            let project_count = project.modules.length;
            for (let i = 0; i < project_count; i++) {
                let currentmodule = project.modules[i];
                if (currentmodule.type == "image") {
                    $('<img class="collection-img" src="' + project.modules[i].src + '">').appendTo('.collection-container');
                }

            }

            // $('<img class="collection-img" src="' + project.modules[6].sizes[1400]+ '">').appendTo('.collection-container');

        },

        // if the ajax request fails do these things as a fallback
        error: function(res) {
            $('<h1> Error!! </h1>').appendTo('body');

        }

    });
});