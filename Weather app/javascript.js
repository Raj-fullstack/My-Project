function get_weather_btn(){
  var city = document.getElementsByClassName("search_box")[0].value;
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f00c38e0279b7bc85480c3fe775d518c&units=metric")
    .then(response => response.json())
    .then(data => {
      console.log(data);

      document.getElementsByClassName('cards')[0].style.display = "block";  
      document.getElementsByClassName('city_name')[0].innerText = data.name;

      var mintemp = data.main.temp_min;
      var maxtemp = data.main.temp_max;

      document.getElementsByClassName('min_temp')[0].innerHTML = "&#8595; " + mintemp + "°C";
      document.getElementsByClassName('max_temp')[0].innerHTML = "&#x2191; " + maxtemp + "°C";

      var windspeed = data.wind.speed;
      var winddeg = data.wind.deg;
      document.getElementsByClassName('wind_speed_deg')[0].innerHTML = "Wind speed: " + windspeed + " m/s, deg: " + winddeg;
      var timezoneOffset = data.timezone;
      var localTime = new Date((data.dt + timezoneOffset) * 1000); 
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit' };
      var formattedTime = localTime.toLocaleString('en-US', options);

      document.getElementsByClassName('day_name')[0].innerHTML = formattedTime;
      document.getElementsByClassName("humidity")[0].innerHTML = data.main.humidity;
      console.log(data.main.weather[0]);
      document.getElementsByClassName("weather")[0].innerHTML = data.main.weather[0].main;
    });
}
