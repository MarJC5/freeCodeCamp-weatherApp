
/*************************
Weather Icon
**************************/
var weatherIcon = function(meteoConditions) {
  switch (meteoConditions){
    case 'clear':
      $( 'div.sunny' ).css( 'display', 'block' );
      $( '.day' ).css( 'color', '#F5AB35' );
      $( '.link' ).css( 'color', '#F5AB35' );
      $( '.weather-top' ).css( 'background-color', '#F5AB35' );
      break;
     case 'thunderstorm':
      $( 'div.thunder-storm' ).css( 'display', 'block' );
      $( '.day' ).css( 'color', '#27AE60' );
      $( '.link' ).css( 'color', '#27AE60' );
      $( '.weather-top' ).css( 'background-color', '#27AE60' );
      break;
     case 'rain':
     case 'drizzle':
       $( 'div.rainy' ).css( 'display', 'block' );
       $( '.day' ).css( 'color', '#2574A9' );
       $( '.link' ).css( 'color', '#2574A9' );
       $( '.weather-top' ).css( 'background-color', '#2574A9' );
      break;
     case 'clouds':
     case 'fog':
     case 'mist':
       $( 'div.cloudy' ).css( 'display', 'block' );
       $( '.day' ).css( 'color', '#6C7A89' );
       $( '.link' ).css( 'color', '#6C7A89' );
       $( '.weather-top' ).css( 'background-color', '#6C7A89' );
       break;
     case 'snow':
       $( 'div.flurries' ).css( 'display', 'block' );
       $( '.day' ).css( 'color',' #495057' );
       $( '.link' ).css( 'color', '#495057' );
       $( '.weather-top' ).css( 'background-color', '#495057' );
       break;
     case 'light rain':
         $( 'div.sun-shower' ).css( 'display', 'block' );
         $( '.day' ).css( 'color',' #3949AB' );
         $( '.link' ).css( 'color', '#3949AB' );
         $( '.weather-top' ).css( 'background-color', '#3949AB' );
         break;
   }
}

var forecastIconOne = function(id) {
  switch (id){
    case 200 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-200' ); //thunderstorm
      break;
    case 201 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-201' ); //thunderstorm
      break;
    case 202 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-202' ); //thunderstorm
      break;
    case 210 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-210' ); //lightning
      break;
    case 211 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-211' ); //lightning
      break;
    case 212 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-212' ); //lightning
      break;
    case 221 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-221' ); //lightning
      break;
    case 230 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-230' ); //thunderstorm
      break;
    case 231 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-231' ); //thunderstorm
      break;
    case 232 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-232' ); //thunderstorm
      break;
    case 300 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-300' ); //sprinkle
      break;
    case 301 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-301' ); //sprinkle
      break;
    case 302 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-302' ); //rain
      break;
    case 310 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-310' ); //rain-mix
      break;
    case 311 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-311' ); //rain
      break;
    case 312 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-312' ); //rain
      break;
    case 313 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-313' ); //showers
      break;
    case 314 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-314' ); //rain
      break;
    case 321 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-321' ); //sprinkle
      break;
    case 500 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-500' ); //sprinkle
      break;
    case 501 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-501' ); //rain
      break;
    case 502 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-502' ); //rain
      break;
    case 503 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-503' ); //rain
      break;
    case 504:
      $( '#oneDayIcon' ).addClass( 'wi-owm-504' ); //rain
      break;
    case 511:
      $( '#oneDayIcon' ).addClass( 'wi-owm-511' ); //rain-mix
      break;
    case 520:
      $( '#oneDayIcon' ).addClass( 'wi-owm-520' ); //showers
      break;
    case 521:
      $( '#oneDayIcon' ).addClass( 'wi-owm-521' ); //showers
      break;
    case 522:
      $( '#oneDayIcon' ).addClass( 'wi-owm-522' ); //showers
      break;
    case 531:
      $( '#oneDayIcon' ).addClass( 'wi-owm-531' ); //storm-showers
      break;
    case 600:
      $( '#oneDayIcon' ).addClass( 'wi-owm-600' ); //snow
      break;
    case 601:
      $( '#oneDayIcon' ).addClass( 'wi-owm-601' ); //snow
      break;
    case 602:
      $( '#oneDayIcon' ).addClass( 'wi-owm-602' ); //sleet
      break;
    case 611:
      $( '#oneDayIcon' ).addClass( 'wi-owm-611' ); //rain-mix
      break;
    case 612:
      $( '#oneDayIcon' ).addClass( 'wi-owm-612' ); //rain-mix
      break;
    case 615:
      $( '#oneDayIcon' ).addClass( 'wi-owm-615' ); //rain-mix
      break;
    case 616:
      $( '#oneDayIcon' ).addClass( 'wi-owm-616' ); //rain-mix
      break;
    case 620:
      $( '#oneDayIcon' ).addClass( 'wi-owm-620' ); //rain-mix
      break;
    case 621:
      $( '#oneDayIcon' ).addClass( 'wi-owm-621' ); //snow
      break;
    case 622:
      $( '#oneDayIcon' ).addClass( 'wi-owm-622' ); //snow
      break;
    case 701:
      $( '#oneDayIcon' ).addClass( 'wi-owm-701' ); //smoke
      break;
    case 721:
      $( '#oneDayIcon' ).addClass( 'wi-owm-721' ); //day-haze
      break;
    case 731:
      $( '#oneDayIcon' ).addClass( 'wi-owm-731' ); //dust
      break;
    case 741:
      $( '#oneDayIcon' ).addClass( 'wi-owm-741' ); //fog
      break;
    case 761:
      $( '#oneDayIcon' ).addClass( 'wi-owm-761' ); //dust
      break;
    case 762:
      $( '#oneDayIcon' ).addClass( 'wi-owm-762' ); //dust
      break;
    case 771:
      $( '#oneDayIcon' ).addClass( 'wi-owm-771' ); //cloudy-gusts
      break;
    case 781:
      $( '#oneDayIcon' ).addClass( 'wi-owm-781' ); //tornado
      break;
    case 800:
      $( '#oneDayIcon' ).addClass( 'wi-owm-800' ); //day-sunny
      break;
   case 801:
      $( '#oneDayIcon' ).addClass( 'wi-owm-801' ); //cloudy-gusts
      break;
    case 802:
       $( '#oneDayIcon' ).addClass( 'wi-owm-802' ); //cloudy-gusts
       break;
    case 803:
      $( '#oneDayIcon' ).addClass( 'wi-owm-803' ); //cloudy-gusts
      break;
    case 804:
      $( '#oneDayIcon' ).addClass( 'wi-owm-804' ); //cloudy
      break;
    case 900:
      $( '#oneDayIcon' ).addClass( 'wi-owm-900' ); //tornado
      break;
    case 901:
      $( '#oneDayIcon' ).addClass( 'wi-owm-901' ); //storm-showers
      break;
    case 902 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-902' ); //hurricane
      break;
    case 903 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-903' ); //snowflake-cold
      break;
    case 904 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-904' ); //hot
      break;
    case 905 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-905' ); //windy
      break;
    case 906 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-906' ); //hail
      break;
    case 957 :
      $( '#oneDayIcon' ).addClass( 'wi-owm-957' ); //strong-wind
      break;
   }
}


var forecastIconTwo = function(id) {
  switch (id){
    case 200 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-200' ); //thunderstorm
      break;
    case 201 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-201' ); //thunderstorm
      break;
    case 202 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-202' ); //thunderstorm
      break;
    case 210 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-210' ); //lightning
      break;
    case 211 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-211' ); //lightning
      break;
    case 212 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-212' ); //lightning
      break;
    case 221 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-221' ); //lightning
      break;
    case 230 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-230' ); //thunderstorm
      break;
    case 231 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-231' ); //thunderstorm
      break;
    case 232 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-232' ); //thunderstorm
      break;
    case 300 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-300' ); //sprinkle
      break;
    case 301 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-301' ); //sprinkle
      break;
    case 302 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-302' ); //rain
      break;
    case 310 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-310' ); //rain-mix
      break;
    case 311 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-311' ); //rain
      break;
    case 312 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-312' ); //rain
      break;
    case 313 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-313' ); //showers
      break;
    case 314 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-314' ); //rain
      break;
    case 321 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-321' ); //sprinkle
      break;
    case 500 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-500' ); //sprinkle
      break;
    case 501 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-501' ); //rain
      break;
    case 502 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-502' ); //rain
      break;
    case 503 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-503' ); //rain
      break;
    case 504:
      $( '#twoDayIcon' ).addClass( 'wi-owm-504' ); //rain
      break;
    case 511:
      $( '#twoDayIcon' ).addClass( 'wi-owm-511' ); //rain-mix
      break;
    case 520:
      $( '#twoDayIcon' ).addClass( 'wi-owm-520' ); //showers
      break;
    case 521:
      $( '#twoDayIcon' ).addClass( 'wi-owm-521' ); //showers
      break;
    case 522:
      $( '#twoDayIcon' ).addClass( 'wi-owm-522' ); //showers
      break;
    case 531:
      $( '#twoDayIcon' ).addClass( 'wi-owm-531' ); //storm-showers
      break;
    case 600:
      $( '#twoDayIcon' ).addClass( 'wi-owm-600' ); //snow
      break;
    case 601:
      $( '#twoDayIcon' ).addClass( 'wi-owm-601' ); //snow
      break;
    case 602:
      $( '#twoDayIcon' ).addClass( 'wi-owm-602' ); //sleet
      break;
    case 611:
      $( '#twoDayIcon' ).addClass( 'wi-owm-611' ); //rain-mix
      break;
    case 612:
      $( '#twoDayIcon' ).addClass( 'wi-owm-612' ); //rain-mix
      break;
    case 615:
      $( '#twoDayIcon' ).addClass( 'wi-owm-615' ); //rain-mix
      break;
    case 616:
      $( '#twoDayIcon' ).addClass( 'wi-owm-616' ); //rain-mix
      break;
    case 620:
      $( '#twoDayIcon' ).addClass( 'wi-owm-620' ); //rain-mix
      break;
    case 621:
      $( '#twoDayIcon' ).addClass( 'wi-owm-621' ); //snow
      break;
    case 622:
      $( '#twoDayIcon' ).addClass( 'wi-owm-622' ); //snow
      break;
    case 701:
      $( '#twoDayIcon' ).addClass( 'wi-owm-701' ); //smoke
      break;
    case 721:
      $( '#twoDayIcon' ).addClass( 'wi-owm-721' ); //day-haze
      break;
    case 731:
      $( '#twoDayIcon' ).addClass( 'wi-owm-731' ); //dust
      break;
    case 741:
      $( '#twoDayIcon' ).addClass( 'wi-owm-741' ); //fog
      break;
    case 761:
      $( '#twoDayIcon' ).addClass( 'wi-owm-761' ); //dust
      break;
    case 762:
      $( '#twoDayIcon' ).addClass( 'wi-owm-762' ); //dust
      break;
    case 771:
      $( '#twoDayIcon' ).addClass( 'wi-owm-771' ); //cloudy-gusts
      break;
    case 781:
      $( '#twoDayIcon' ).addClass( 'wi-owm-781' ); //tornado
      break;
    case 800:
      $( '#twoDayIcon' ).addClass( 'wi-owm-800' ); //day-sunny
      break;
   case 801:
      $( '#twoDayIcon' ).addClass( 'wi-owm-801' ); //cloudy-gusts
      break;
    case 802:
       $( '#twoDayIcon' ).addClass( 'wi-owm-802' ); //cloudy-gusts
       break;
    case 803:
      $( '#twoDayIcon' ).addClass( 'wi-owm-803' ); //cloudy-gusts
      break;
    case 804:
      $( '#twoDayIcon' ).addClass( 'wi-owm-804' ); //cloudy
      break;
    case 900:
      $( '#twoDayIcon' ).addClass( 'wi-owm-900' ); //tornado
      break;
    case 901:
      $( '#twoDayIcon' ).addClass( 'wi-owm-901' ); //storm-showers
      break;
    case 902 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-902' ); //hurricane
      break;
    case 903 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-903' ); //snowflake-cold
      break;
    case 904 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-904' ); //hot
      break;
    case 905 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-905' ); //windy
      break;
    case 906 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-906' ); //hail
      break;
    case 957 :
      $( '#twoDayIcon' ).addClass( 'wi-owm-957' ); //strong-wind
      break;
   }
}


var forecastIconThree = function(id) {
  switch (id){
    case 200 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-200' ); //thunderstorm
      break;
    case 201 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-201' ); //thunderstorm
      break;
    case 202 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-202' ); //thunderstorm
      break;
    case 210 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-210' ); //lightning
      break;
    case 211 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-211' ); //lightning
      break;
    case 212 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-212' ); //lightning
      break;
    case 221 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-221' ); //lightning
      break;
    case 230 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-230' ); //thunderstorm
      break;
    case 231 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-231' ); //thunderstorm
      break;
    case 232 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-232' ); //thunderstorm
      break;
    case 300 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-300' ); //sprinkle
      break;
    case 301 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-301' ); //sprinkle
      break;
    case 302 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-302' ); //rain
      break;
    case 310 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-310' ); //rain-mix
      break;
    case 311 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-311' ); //rain
      break;
    case 312 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-312' ); //rain
      break;
    case 313 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-313' ); //showers
      break;
    case 314 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-314' ); //rain
      break;
    case 321 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-321' ); //sprinkle
      break;
    case 500 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-500' ); //sprinkle
      break;
    case 501 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-501' ); //rain
      break;
    case 502 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-502' ); //rain
      break;
    case 503 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-503' ); //rain
      break;
    case 504:
      $( '#threeDayIcon' ).addClass( 'wi-owm-504' ); //rain
      break;
    case 511:
      $( '#threeDayIcon' ).addClass( 'wi-owm-511' ); //rain-mix
      break;
    case 520:
      $( '#threeDayIcon' ).addClass( 'wi-owm-520' ); //showers
      break;
    case 521:
      $( '#threeDayIcon' ).addClass( 'wi-owm-521' ); //showers
      break;
    case 522:
      $( '#threeDayIcon' ).addClass( 'wi-owm-522' ); //showers
      break;
    case 531:
      $( '#threeDayIcon' ).addClass( 'wi-owm-531' ); //storm-showers
      break;
    case 600:
      $( '#threeDayIcon' ).addClass( 'wi-owm-600' ); //snow
      break;
    case 601:
      $( '#threeDayIcon' ).addClass( 'wi-owm-601' ); //snow
      break;
    case 602:
      $( '#threeDayIcon' ).addClass( 'wi-owm-602' ); //sleet
      break;
    case 611:
      $( '#threeDayIcon' ).addClass( 'wi-owm-611' ); //rain-mix
      break;
    case 612:
      $( '#threeDayIcon' ).addClass( 'wi-owm-612' ); //rain-mix
      break;
    case 615:
      $( '#threeDayIcon' ).addClass( 'wi-owm-615' ); //rain-mix
      break;
    case 616:
      $( '#threeDayIcon' ).addClass( 'wi-owm-616' ); //rain-mix
      break;
    case 620:
      $( '#threeDayIcon' ).addClass( 'wi-owm-620' ); //rain-mix
      break;
    case 621:
      $( '#threeDayIcon' ).addClass( 'wi-owm-621' ); //snow
      break;
    case 622:
      $( '#threeDayIcon' ).addClass( 'wi-owm-622' ); //snow
      break;
    case 701:
      $( '#threeDayIcon' ).addClass( 'wi-owm-701' ); //smoke
      break;
    case 721:
      $( '#threeDayIcon' ).addClass( 'wi-owm-721' ); //day-haze
      break;
    case 731:
      $( '#threeDayIcon' ).addClass( 'wi-owm-731' ); //dust
      break;
    case 741:
      $( '#threeDayIcon' ).addClass( 'wi-owm-741' ); //fog
      break;
    case 761:
      $( '#threeDayIcon' ).addClass( 'wi-owm-761' ); //dust
      break;
    case 762:
      $( '#threeDayIcon' ).addClass( 'wi-owm-762' ); //dust
      break;
    case 771:
      $( '#threeDayIcon' ).addClass( 'wi-owm-771' ); //cloudy-gusts
      break;
    case 781:
      $( '#threeDayIcon' ).addClass( 'wi-owm-781' ); //tornado
      break;
    case 800:
      $( '#threeDayIcon' ).addClass( 'wi-owm-800' ); //day-sunny
      break;
   case 801:
      $( '#threeDayIcon' ).addClass( 'wi-owm-801' ); //cloudy-gusts
      break;
    case 802:
       $( '#threeDayIcon' ).addClass( 'wi-owm-802' ); //cloudy-gusts
       break;
    case 803:
      $( '#threeDayIcon' ).addClass( 'wi-owm-803' ); //cloudy-gusts
      break;
    case 804:
      $( '#threeDayIcon' ).addClass( 'wi-owm-804' ); //cloudy
      break;
    case 900:
      $( '#threeDayIcon' ).addClass( 'wi-owm-900' ); //tornado
      break;
    case 901:
      $( '#threeDayIcon' ).addClass( 'wi-owm-901' ); //storm-showers
      break;
    case 902 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-902' ); //hurricane
      break;
    case 903 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-903' ); //snowflake-cold
      break;
    case 904 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-904' ); //hot
      break;
    case 905 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-905' ); //windy
      break;
    case 906 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-906' ); //hail
      break;
    case 957 :
      $( '#threeDayIcon' ).addClass( 'wi-owm-957' ); //strong-wind
      break;
   }
}


var forecastIconFour = function(id) {
  switch (id){
    case 200 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-200' ); //thunderstorm
      break;
    case 201 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-201' ); //thunderstorm
      break;
    case 202 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-202' ); //thunderstorm
      break;
    case 210 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-210' ); //lightning
      break;
    case 211 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-211' ); //lightning
      break;
    case 212 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-212' ); //lightning
      break;
    case 221 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-221' ); //lightning
      break;
    case 230 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-230' ); //thunderstorm
      break;
    case 231 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-231' ); //thunderstorm
      break;
    case 232 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-232' ); //thunderstorm
      break;
    case 300 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-300' ); //sprinkle
      break;
    case 301 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-301' ); //sprinkle
      break;
    case 302 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-302' ); //rain
      break;
    case 310 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-310' ); //rain-mix
      break;
    case 311 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-311' ); //rain
      break;
    case 312 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-312' ); //rain
      break;
    case 313 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-313' ); //showers
      break;
    case 314 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-314' ); //rain
      break;
    case 321 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-321' ); //sprinkle
      break;
    case 500 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-500' ); //sprinkle
      break;
    case 501 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-501' ); //rain
      break;
    case 502 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-502' ); //rain
      break;
    case 503 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-503' ); //rain
      break;
    case 504:
      $( '#fourDayIcon' ).addClass( 'wi-owm-504' ); //rain
      break;
    case 511:
      $( '#fourDayIcon' ).addClass( 'wi-owm-511' ); //rain-mix
      break;
    case 520:
      $( '#fourDayIcon' ).addClass( 'wi-owm-520' ); //showers
      break;
    case 521:
      $( '#fourDayIcon' ).addClass( 'wi-owm-521' ); //showers
      break;
    case 522:
      $( '#fourDayIcon' ).addClass( 'wi-owm-522' ); //showers
      break;
    case 531:
      $( '#fourDayIcon' ).addClass( 'wi-owm-531' ); //storm-showers
      break;
    case 600:
      $( '#fourDayIcon' ).addClass( 'wi-owm-600' ); //snow
      break;
    case 601:
      $( '#fourDayIcon' ).addClass( 'wi-owm-601' ); //snow
      break;
    case 602:
      $( '#fourDayIcon' ).addClass( 'wi-owm-602' ); //sleet
      break;
    case 611:
      $( '#fourDayIcon' ).addClass( 'wi-owm-611' ); //rain-mix
      break;
    case 612:
      $( '#fourDayIcon' ).addClass( 'wi-owm-612' ); //rain-mix
      break;
    case 615:
      $( '#fourDayIcon' ).addClass( 'wi-owm-615' ); //rain-mix
      break;
    case 616:
      $( '#fourDayIcon' ).addClass( 'wi-owm-616' ); //rain-mix
      break;
    case 620:
      $( '#fourDayIcon' ).addClass( 'wi-owm-620' ); //rain-mix
      break;
    case 621:
      $( '#fourDayIcon' ).addClass( 'wi-owm-621' ); //snow
      break;
    case 622:
      $( '#fourDayIcon' ).addClass( 'wi-owm-622' ); //snow
      break;
    case 701:
      $( '#fourDayIcon' ).addClass( 'wi-owm-701' ); //smoke
      break;
    case 721:
      $( '#fourDayIcon' ).addClass( 'wi-owm-721' ); //day-haze
      break;
    case 731:
      $( '#fourDayIcon' ).addClass( 'wi-owm-731' ); //dust
      break;
    case 741:
      $( '#fourDayIcon' ).addClass( 'wi-owm-741' ); //fog
      break;
    case 761:
      $( '#fourDayIcon' ).addClass( 'wi-owm-761' ); //dust
      break;
    case 762:
      $( '#fourDayIcon' ).addClass( 'wi-owm-762' ); //dust
      break;
    case 771:
      $( '#fourDayIcon' ).addClass( 'wi-owm-771' ); //cloudy-gusts
      break;
    case 781:
      $( '#fourDayIcon' ).addClass( 'wi-owm-781' ); //tornado
      break;
    case 800:
      $( '#fourDayIcon' ).addClass( 'wi-owm-800' ); //day-sunny
      break;
   case 801:
      $( '#fourDayIcon' ).addClass( 'wi-owm-801' ); //cloudy-gusts
      break;
    case 802:
       $( '#fourDayIcon' ).addClass( 'wi-owm-802' ); //cloudy-gusts
       break;
    case 803:
      $( '#fourDayIcon' ).addClass( 'wi-owm-803' ); //cloudy-gusts
      break;
    case 804:
      $( '#fourDayIcon' ).addClass( 'wi-owm-804' ); //cloudy
      break;
    case 900:
      $( '#fourDayIcon' ).addClass( 'wi-owm-900' ); //tornado
      break;
    case 901:
      $( '#fourDayIcon' ).addClass( 'wi-owm-901' ); //storm-showers
      break;
    case 902 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-902' ); //hurricane
      break;
    case 903 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-903' ); //snowflake-cold
      break;
    case 904 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-904' ); //hot
      break;
    case 905 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-905' ); //windy
      break;
    case 906 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-906' ); //hail
      break;
    case 957 :
      $( '#fourDayIcon' ).addClass( 'wi-owm-957' ); //strong-wind
      break;
   }
}
