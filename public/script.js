var socket = io.connect();
var isNear = false;
var loc = {};

function addMessage(msg, pseudo) {
	$("#chatEntries").append('<div class="message"><p>' + pseudo + ' : ' + msg + '</p></div>');
}
function sentMessage() {
	if ($('#messageInput').val() != "") 
	{
		socket.emit('message', $('#messageInput').val());
		addMessage($('#messageInput').val(), "Me", new Date().toISOString(), true);
		$('#messageInput').val('');
	}
}
function setPseudo() {
	getLocation({});
	if ($("#pseudoInput").val() != "")
	{
		socket.emit('setPseudo', $("#pseudoInput").val());
		$('#chatControls').show();
		$('#pseudoInput').hide();
		$('#pseudoSet').hide();
	}
}
socket.on('message', function(data) {
	addMessage(data['message'], data['pseudo']);
});
$(function() {
	$("#chatControls").hide();
	$("#pseudoSet").click(function() {setPseudo()});
	$("#submit").click(function() {sentMessage();});
});

function getLocation(){
	isNear = false;
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			loc.lat= position.coords.latitude;
			loc.lon = position.coords.longitude;	
		});
		socket.emit('geo', loc);
	}
}
socket.on('geo', function(data){
	console.log(data);
	if(data.lat == "" || data.lon == "")
		isNear = false;
	else if(Math.abs(data.lat-loc.lat) < 0.000700 && Math.abs(data.lon-loc.lon) < 0.000700 )
		isNear = true;
	else
		isNear = false;
});
