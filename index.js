const city = localStorage.getItem("city");

if (city === null) {
  localStorage.setItem("city", "București");
  displayCurrentWeather("București");
  displayWeatherForecast("București");
} else {
  displayCurrentWeather(city);
  currentCity.innerText = city;
  displayWeatherForecast(city);
}

//  Scroll to Top
const scrollToTop = document.querySelector(".scrolltotop");

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (scrollY > 100) {
    scrollToTop.style.visibility = "visible";
  } else {
    scrollToTop.style.visibility = "hidden";
  }
});
