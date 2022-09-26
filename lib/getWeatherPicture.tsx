export function getWeatherPicture(currentWeather: string) {
  if (currentWeather === "Thunderstorm") {
    return "/assets/thunderstorm.jpeg";
  }
  if (currentWeather === "Drizzle") {
    return "/assets/drizzle.jpeg";
  }
  if (currentWeather === "Rain") {
    return "/assets/rain.jpeg";
  }
  if (currentWeather === "Snow") {
    return "/assets/snow.jpeg";
  }
  if (currentWeather === "Clear") {
    return "/assets/sunny.jpeg";
  }
  if (currentWeather === "Clouds") {
    return "/assets/clouds.jpeg";
  }
  return "/assets/fog.jpeg";
}
