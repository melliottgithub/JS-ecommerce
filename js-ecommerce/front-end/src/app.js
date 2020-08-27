import HomeScreen from "../src/screen/HomeScreen.js";

const router = () => {
  const main = document.getElementById("main-container");
  main.innerHTML = HomeScreen.render();
};

window.addEventListener("load", router);
