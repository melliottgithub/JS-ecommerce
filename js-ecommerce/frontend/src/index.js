import HomeScreen from "./screen/HomeScreen.js";
import ProductScreen from "./screen/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";
import Error404Screen from "./screen/Error404Screen.js";

const routes = {
  "/": HomeScreen,
  "product/:id": ProductScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.uid ? `/:id` : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
