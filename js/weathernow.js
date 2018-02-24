// Global variable
var apiKey ="b66d9a455528eaf13b203796fd272b48";
var lat, lon;
var name;
var url;
var url2;
var url3;
var countryName;


// Reload DIV
var refrech = function(){
  window.location.reload();
}

// Capitalize
var capitalize = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
}

// DIV hide
function iconeWeatheHide(){
  $( 'div.sun-shower' ).css( 'display', 'none' );
  $( 'div.thunder-storm' ).css( 'display', 'none' );
  $( 'div.cloudy' ).css( 'display', 'none' );
  $( 'div.flurries' ).css( 'display', 'none' );
  $( 'div.sunny' ).css( 'display', 'none' );
  $( 'div.rainy' ).css( 'display', 'none' );
 }
iconeWeatheHide();

var hideContent = function() {
  $( 'section.info-content' ).css( 'display', 'none' );
  $( '.forecast' ).css( 'opacity', '0' );
  $( '.weather-content' ).css( 'background-color', 'inherit' );
}
hideContent();

/********************
City-weather
********************/

$( document ).ready(function(){
  // Uses browser location and store the value
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
     lat = position.coords.latitude;
     lon = position.coords.longitude;

     // Create the url for call the api
     url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&lang=fr" + "&appid=" + apiKey;
     url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&lang=fr" + "&appid=" + apiKey;


     // Use the api information
     dataWeather();
     dataWeatherForecast();

    });

   } else {
     alert('The Geolocation is not enabled or your browser is not compatible');
     console.log('The Geolocation is not enabled or your browser is not compatible');
   }

   $( '.local-temperature' ).click(function() {
           $( '.local-temperature' ).toggle( 'flipInX' );
         });

/*************************
Data Api
**************************/

// Use the api information
var dataWeather = function (){
       $.getJSON(url, function(data){
         // Show info and hide loading div
         $( '.info-content' ).css( 'display', 'block' );
         $( '.loader' ).css( 'display', 'none' );
         $( '.loader-txt' ).css( 'display', 'none' );
         $( '.forecast' ).css( 'opacity', '1' );
         $( '#weather-header' ).css( 'opacity', '0' );
         $( 'footer' ).css( 'display', 'none' );


         //console.log(data);
         var city = data.name;
         var country = data.sys[ 'country' ];
         var meteo = data.weather[ '0' ].main.toLowerCase();

         var wind = data.wind[ 'speed' ] * 3.6; //Convert m/s en km/h
         wind = Math.round(wind * 10) / 10;

         var humidity = data.main[ 'humidity' ];
         var meteoConditions = meteo; // Select the icon

         var temperatureC = data.main.temp - 273.15; //Convert Kelvin to Celsius
         var temperatureF = temperatureC + 32; //Convert Celsius to Feirheit
         temperatureC = Math.round(temperatureC * 10) / 10 + ' &deg;C';
         temperatureF = Math.round(temperatureF) + ' &deg;F';

         // Set on the html
         $( '#local-city' ).html(city).append( ', ' + country );
         $( '#local-humidity' ).html( 'Humidité ' + humidity + '%' );
         $( '#local-wind' ).html( 'Vent ' + wind + ' km/h' );

         // Change celsius to feirheit
         $( '#celsius' ).html(temperatureC);
         $( '#feirheit' ).html(temperatureF);

         $( '.local-temperature' ).click(function() {
           $( '#celsius' ).css( 'display', 'none' );
           $( '#celsius' ).css( 'display', 'block' );
         });


         // Set Icon meteo
          weatherIcon(meteoConditions);

    }).fail(function(jqXHR, status, errorThrown) { bootbox.alert(errorThrown); });
  }



/*************************
Forcast
**************************/

var dataWeatherForecast = function (){
      $.getJSON(url2,function(data){
        //console.log(data);
        var hourInfo = data.list[4].dt_txt.split(" ")[1];
        console.log("Data weather available for => " + hourInfo);

    		var weatherInfo = function(list) {
    			return data.list[list].weather[ '0' ].description.toLowerCase();
    		}

        var oneDay = weatherInfo( '4' );
        var twoDay = weatherInfo( '12' );
        var threeDay = weatherInfo( '20' );
        var fourDay = weatherInfo( '28' );

        var dateInfo = function(list){
        	return data.list[list].dt;
        }

        var oneDate = dateInfo( '4' );
        var twoDate = dateInfo( '12' );
        var threeDate = dateInfo( '20' );
        var fourDate = dateInfo( '28' );
        var date = moment().locale( "fr" ).format( "Do MMMM YYYY" );

        // Store date value
        var dayArr = [];
        dayArr.push(oneDate);
        dayArr.push(twoDate);
        dayArr.push(threeDate);
        dayArr.push(fourDate);

        var weekArr = [];

        // convert date to index week and add to arr
        for(var i = 0; i < dayArr.length; i++){
          var day = new Date(i);
          //add in arr only days name -> local utc
          weekArr.push((moment().locale( "fr" ).add(i, 'days').calendar().split(" à"))[0]);
        }

        var dateIcon = function(id){
        	return data.list[id].weather["0"].id;
        }

        var oneDayIcon = dateIcon( '4' );
        var twoDayIcon = dateIcon( '12' );
        var threeDayIcon = dateIcon( '20' );
        var fourDayIcon = dateIcon( '28' );
        //console.log(oneDayIcon, twoDayIcon, threeDayIcon, fourDayIcon)

        // Set icon on the html
        forecastIconOne(oneDayIcon);
        forecastIconTwo(twoDayIcon);
        forecastIconThree(threeDayIcon);
        forecastIconFour(fourDayIcon);

        // Set on the html
        $( '#local-date' ).html(date);

        $( '#oneDay' ).html(capitalize(weekArr[0]));
        $( '#oneDate' ).html(oneDay);

        $( '#twoDay' ).html(capitalize(weekArr[1]));
        $( '#twoDate' ).html(twoDay);

        $( '#threeDay' ).html(capitalize(weekArr[2]));
        $( '#threeDate' ).html(threeDay);

        $( '#fourDay' ).html(capitalize(weekArr[3]));
        $( '#fourDate' ).html(fourDay);

      }).fail(function(jqXHR, status, errorThrown) { bootbox.alert(errorThrown); });
    }
});
