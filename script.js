let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

city = prompt("Enter a city");
{
  if ((city = "paris")) {
    alert("It is currently${weather} in Paris with a humidity of ${weather}");
  } else {
    alert("Sorry, we don't know the weather for this city, try going to");
  }
}
