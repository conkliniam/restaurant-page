import "./styles.css";
import * as home from "./home-page";
import * as menu from "./menu-page";
import * as contact from "./contact-page";

let currentPage;
const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

addContent(homeButton, home);

homeButton.addEventListener("click", (event) => loadPage(event.target, home));
menuButton.addEventListener("click", (event) => loadPage(event.target, menu));
contactButton.addEventListener("click", (event) =>
  loadPage(event.target, contact)
);

function loadPage(button, page) {
  if (currentPage !== page) {
    clearContent();
    addContent(button, page);
  }
}

function clearContent() {
  content.innerHTML = "";
  currentPage.closeTab();
}

function addContent(button, page) {
  currentPage = page;
  button.className = "current-button";
  let newContent = currentPage.getContent();
  content.appendChild(newContent);
}
