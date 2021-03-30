// globals
var searchHistory = [];
var weatherApiRootUrl = "https://api.openweathermap.org";
var weatherApiKey = "d91f911bcf2c0f925fb6535547a5ddc9";

// DOM element references
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var history = document.querySelector("#history");
var todayContainer = document.querySelector("#today");
var forecastContainer = document.querySelector("#forecast");
var searchHistoryContainer = document.querySelector("#history");

// Function to display the search history list.
function renderSearchHistory() {
  searchHistoryContainer.innerHTML = "";

  // Start at end of history array and count down to show the most recent search
  // at the top of the list.
  for (var i = searchHistory.length - 1; i >= 0; i--) {
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn-history list-group-item list-group-item-action");
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-controls", "today forecast");

    // data-search is used to get the city to search for when the user clicks
    // the button
    btn.setAttribute("data-search", searchHistory[i]);
    btn.textContent = searchHistory[i];
    searchHistoryContainer.append(btn);
  }
}

// Function to update history in local storage then updates displayed history.
function appendToHistory(search) {
  searchHistory.push(search);
  // limit history to last 5 searches
  searchHistory.splice(0, searchHistory.length - 5);
  localStorage.setItem("search-history", JSON.stringify(searchHistory));
  renderSearchHistory();
}

// Function to get search history from local storage, initialize the search
// history global variable, and display the history list.
function initSearchHistory() {
  var storedHistory = localStorage.getItem("search-history");
  if (storedHistory) {
    searchHistory = JSON.parse(storedHistory);
  }
  renderSearchHistory();
}

// Function to display the current weather data fetched from OpenWeather api.
function renderCurrentWeather(city, weather) {
  var date = dayjs().format("M/D/YYYY");

  // variables for data from api
  var tempF = weather.temp;
  var windMph = weather.wind_speed;
  var humidity = weather.humidity;
  var uvi = weather.uvi;
  var iconUrl =
    "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
  var iconDescription = weather.weather[0].description || weather[0].main;

  var card = document.createElement("div");
  var cardBody = document.createElement("div");
  var heading = document.createElement("h2");
  var weatherIcon = document.createElement("img");
  var tempEl = document.createElement("p");
  var windEl = document.createElement("p");
  var humidityEl = document.createElement("p");
  var uvEl = document.createElement("p");
  var uviBadge = document.createElement("span");

  card.setAttribute("class", "card");
  cardBody.setAttribute("class", "card-body");
  card.append(cardBody);

  heading.setAttribute("class", "h3 card-title");
  tempEl.setAttribute("class", "card-text");
  windEl.setAttribute("class", "card-text");
  humidityEl.setAttribute("class", "card-text");

  heading.textContent = city + "(" + date + ")";
  weatherIcon.setAttribute("src", iconUrl);
  weatherIcon.setAttribute("alt", iconDescription);
  heading.append(weatherIcon);
  tempEl.textContent = "Temp: " + tempF + "°F";
  windEl.textContent = "Wind: " + windMph + " MPH";
  humidityEl.textContent = "Humidity: " + humidity + " %";
  cardBody.append(heading, tempEl, windEl, humidityEl);

  uvEl.textContent = "UV Index: ";
  uviBadge.classList.add("btn", "btn-sm");
  if (uvi < 3) {
    uviBadge.classList.add("btn-success");
  } else if (uvi < 7) {
    uviBadge.classList.add("btn-warning");
  } else {
    uviBadge.classList.add("btn-danger");
  }
  uviBadge.textContent = uvi;
  uvEl.append(uviBadge);
  cardBody.append(uvEl);

  todayContainer.innerHTML = "";
  todayContainer.append(card);
}

// Function to display a forecast card given an object from open weather api
// daily forecast.
function renderForecastCard(forecast) {
  // variables for data from api
  var unixTs = forecast.dt;
  var iconUrl =
    "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
  var iconDescription = forecast.weather[0].description;
  var tempF = forecast.temp.day;
  var humidity = forecast.humidity;
  var windMph = forecast.wind_speed;

  // create elements for a card
  var col = document.createElement("div");
  var card = document.createElement("div");
  var cardBody = document.createElement("div");
  var cardTitle = document.createElement("h5");
  var weatherIcon = document.createElement("img");
  var tempEl = document.createElement("p");
  var windEl = document.createElement("p");
  var humidityEl = document.createElement("p");

  col.append(card);
  card.append(cardBody);
  cardBody.append(cardTitle, weatherIcon, tempEl, windEl, humidityEl);

  col.setAttribute("class", "col-md");
  card.setAttribute("class", "card bg-primary h-100 text-white");
  cardBody.setAttribute("class", "card-body p-2");
  cardTitle.setAttribute("class", "card-title");
  tempEl.setAttribute("class", "card-text");
  windEl.setAttribute("class", "card-text");
  humidityEl.setAttribute("class", "card-text");

  // add content to elements
  cardTitle.textContent = dayjs.unix(unixTs).format("M/D/YYYY");
  weatherIcon.setAttribute("src", iconUrl);
  weatherIcon.setAttribute("alt", iconDescription);
  tempEl.textContent = "Temp: " + tempF + " °F";
  windEl.textContent = "Wind: " + windMph + " MPH";
  humidityEl.textContent = "Humidity: " + humidity + " %";

  forecastContainer.append(col);
}

// Function to display 5 day forecast.
function renderForecast(dailyForecast) {
  // create unix timestamps for start and end of 5 day forecast
  var startDt = dayjs().add(1, "day").startOf("day").unix();
  var endDt = dayjs().add(6, "day").startOf("day").unix();

  var headingCol = document.createElement("div");
  var heading = document.createElement("h4");

  headingCol.setAttribute("class", "col-12");
  heading.textContent = "5-Day Forecast:";
  headingCol.append(heading);

  forecastContainer.innerHTML = "";
  forecastContainer.append(headingCol);
  for (var i = 0; i < dailyForecast.length; i++) {
    // The api returns forecast data which may include 12pm on the same day and
    // always includes the next 7 days. The api documentation does not provide
    // information on the behavior for including the same day. Results may have
    // 7 or 8 items.
    if (dailyForecast[i].dt >= startDt && dailyForecast[i].dt < endDt) {
      renderForecastCard(dailyForecast[i]);
    }
  }
}

// Fetches weather data for given location from the Weather Geolocation
// endpoint; then, calls functions to display current and forecast weather data.
function fetchWeather(location) {
  var lat = location.lat;
  var lon = location.lon;
  var city = location.name;
  var apiUrl =
    " https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&exclude=minutely,hourly&appid=" +
    weatherApiKey;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      console.log("Request Error:", response.statusText);
    })
    .then((data) => {
      renderCurrentWeather(city, data.current);
      renderForecast(data.daily);
    })
    .catch(function (error) {
      console.log("Unable to connect to Weather API", error);
    });
}

// Function to fetch lat/lon of the city for which the user is searching.
function fetchCoords(search) {
  var apiUrl =
    weatherApiRootUrl +
    "/geo/1.0/direct?q=" +
    search +
    "&limit=5&appid=" +
    weatherApiKey;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      console.log("Request Error:", response.statusText);
    })
    .then((data) => {
      // abort if no matching location was found for the user search
      if (data.length === 0) {
        alert("Couldn't find that. Please try something else.");
      } else {
        fetchWeather(data[0]);
      }
    })
    .catch(function (error) {
      console.log("Unable to connect to Weather API", error);
    });
}

function handleSearchFormSubmit(event) {
  event.preventDefault();
  var search = searchInput.value.trim();
  if (!search) {
    return;
  }
  fetchCoords(search);
  appendToHistory(search);
  searchInput.value = "";
}

function handleSearchHistoryClick(event) {
  var btn = event.target;
  // don't do search if current elements is not a search history button
  if (!btn.matches(".btn-history")) {
    return;
  }
  var search = btn.getAttribute("data-search");
  fetchCoords(search);
}

initSearchHistory();
searchForm.addEventListener("submit", handleSearchFormSubmit);
searchHistoryContainer.addEventListener("click", handleSearchHistoryClick);
