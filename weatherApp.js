/*This weather app makes use of the axios http library
 to get the weather report of a user's location.
 It first calls an ip-api to get the user's latitude and longitude,
 which are then supplied to the second api call(weather api) to get the weather information*/


var axios = require("axios");	//importing the axios http client library

var ipUrl = "http://ip-api.com/json";	//this is the ip API to get the user's location

axios.get(ipUrl).then(function(response){
	var latitude = response.data.lat;		//get the latitude of user's current location
	var longitude = response.data.lon;		//get the longitude of user's current location
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=a1ecf01520b90b5e007526a4302e8c70&lat="+latitude+"&lon="+longitude;	//weather api to get the weather reports
	axios.get(weatherUrl).then(function(response){
		var result = "";
		result += "Country: "+response.data.sys.country+"\n";
		result += "City: "+response.data.name+"\n";
		result += "Temperature: "+Math.floor((response.data.main.temp-273))+" Degree Celcius\n";
		result += "Humidity: "+response.data.main.humidity+"\n";
		result += "Description: "+response.data.weather[0].description;
		console.log(result);
		}).catch(function(error){
			console.log(error);
		});
	});
