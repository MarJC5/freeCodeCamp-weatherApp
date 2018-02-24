$('.search').click(function() {
	bootbox.prompt({
		size: 'small',
		title: "Entrez un nom de ville",
		closeButton: false,
		buttons: {
			cancel: {
		            label: 'Annuler',
		            className: 'btn-danger'
	        		}
		},
		callback : function(value){
			if (value == null || undefined ){
				console.log("Annuler");
			} else {
				countryName = value.toLowerCase();
				url3 = "https://api.openweathermap.org/data/2.5/weather?q=" + countryName + "&lang=fr" + "&appid=" + apiKey;
				search();
			}
		}
	});
});

/********************
City-weather
********************/
var search = function(){
       $.getJSON(url3, function(data){

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


         // Set Icon meteo
				 iconeWeatheHide();
         weatherIcon(meteoConditions);
         searchForecast();

    }).fail(function(jqXHR, status, errorThrown) //return error if not found url
				{ bootbox.alert({
					message: errorThrown,
					size: "small",
				});
			});
}


var searchForecast = function (){
	var url4 = "https://api.openweathermap.org/data/2.5/forecast?q=" + countryName + "&lang=fr" + "&appid=" + apiKey;
        $.getJSON(url4,function(data){
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
