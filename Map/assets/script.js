// Icon Reference:
// https://www.flaticon.com/packs/wildlife-14

function goBack() {
    window.history.back();
}

$(function(){

//------------------------------------------------------------------- CREATE OUR DATA ---------------------------------------------------------------------

	var center = [ -36.880906, 174.786343 ];
	var map = L.map( 'map', { zoomControl:false }).setView( center , 20 );
	L.tileLayer('https://api.mapbox.com/styles/v1/buahaus/cjsz2ujtf3gfl1fmwqms57jro/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnVhaGF1cyIsImEiOiJjanN6MmgxeHgxOTFzNDVuMnFtZmI3eWhsIn0.j5D3oLZspSh24OwOT4zlQA').addTo(map);

	// SERVICE MARKERS POPUP LOOP - Services
	// see - services.js
	services.forEach(function(service) {
		var serviceIcon = L.icon({
			iconUrl: service.iconImage,
			iconSize: [ 72 , 72 ],
			popupAnchor: [ 0 , -36 ]
		});
		var marker = L.marker(service.latlng,{icon:serviceIcon}).addTo(map);
		marker.bindPopup('<div>' + service.description + '<div>')
		
		$(marker._icon).addClass('marker-service');
		

	});

	//--------------------------------------------------------------- ADDING SHAPES & STYLES -------------------------------------------------------------------

	// see - styles.js
	L.geoJSON(areas, {
		style: styleOrange
	}).addTo(map);

	L.geoJSON(areas2, {
		style: styleGreen
	}).addTo(map);

	//--------------------------------------------------------------- ADDING CUSTOM ZOOM -------------------------------------------------------------------

	$('#in').click(function() {
        map.setZoom(map.getZoom() + 1);
    });
    // zoom out function
    $('#out').click(function() {
        map.setZoom(map.getZoom() - 1);
    });
    // center map function
    $('#center').click(function() {
        map.setView(center, 20);
    });

    // on click, toggle SERVICE markers
    $('#service').click(function() {
        $('.marker-service').toggleClass('hidden');
    });

	//--------------------------------------------------------------- EVENT HANDLING -------------------------------------------------------------------

    map.on('zoomend', function(e) {

    	console.log('zoom zoom!');

        var zoomLevel = map.getZoom();

        if (zoomLevel == 18) {
            $('#center').hide();
            console.log('zoom level 18');
            console.log(map.getZoom());
            $('#in').addClass('disabled');
        } else {
            $('#center').show();
            console.log('zoom not 18');
            $('#in').removeClass('disabled');
        }
    });

});