// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "Tampa, FL";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=1290af6dbc350921df5e93f51b30454f", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
        //console.log(weatherAPI);
        return weatherResult = weatherAPI.get({ q: city, cnt: days });
    };
    
}]);