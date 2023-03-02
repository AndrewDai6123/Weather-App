// Get the weather description and set the background gradient accordingly
const weatherDescription = document.querySelector("#weather-description").innerHTML.toLowerCase();
let gradient = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"; // Default gradient

console.log(weatherDescription);

if (weatherDescription.includes("cloud")) {
  gradient = "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
} else if (weatherDescription.includes("rain") || weatherDescription.includes("drizzle")) {
  gradient = "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
} else if (weatherDescription.includes("snow")) {
  gradient = "linear-gradient(to top, #e6dada 0%, #274046 100%)";
} else if (weatherDescription.includes("clear")) {
  gradient = "linear-gradient(120deg, #f6d365 0%, #fda085 100%)";
} else if (weatherDescription.includes("thunderstorm")) {
  gradient = "linear-gradient(to top, #373b44 0%, #4286f4 100%)";
} else if (weatherDescription.includes("mist") || weatherDescription.includes("fog")) {
  gradient = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
} else if (weatherDescription.includes("smoke")) {
  gradient = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
} else if (weatherDescription.includes("haze")) {
  gradient = "linear-gradient(to top, #f0f2f0 0%, #000c40 100%)";
} else if (weatherDescription.includes("sand") || weatherDescription.includes("dust")) {
  gradient = "linear-gradient(to top, #3e5151 0%, #decba4 100%)";
} else if (weatherDescription.includes("ash")) {
  gradient = "linear-gradient(to top, #c0c0aa 0%, #1cefff 100%)";
} else if (weatherDescription.includes("squall") || weatherDescription.includes("tornado")) {
  gradient = "linear-gradient(to top, #ada996 0%, #f2f2f2 100%)";
} else if (weatherDescription.includes("smog")) {
  gradient = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
}

console.log(gradient);

// Set the background gradient of the body element
const body = document.querySelector("body");
body.style.background = gradient;
