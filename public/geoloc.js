if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latLng = new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude);
    var marker = new google.maps.Marker({position: latLng, map: map});
    map.setCenter(latLng);
  }, errorHandler);
}


document.addEventListener("device ready", onDeviceReady, false);
function onDeviceReady(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position){
	var element = document.getElementById('geolocation');
	element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br/>' + 
				'Longitude: ' + position.coords.longitude + '<br/>' +
				'Altitude: ' + position.coords.altitude + '<br/>' + 
				'Acuracy: ' + position.coords.acuracy + '<br/>' + 
				'Timestamp: ' + new Date(position.timestamp) + '<br/>';
}
				
function onError(error){
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}
