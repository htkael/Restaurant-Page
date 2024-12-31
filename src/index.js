import "./styles.css";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";
import { createElement, createSection } from "./utils";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

const homePage = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // Header Section
  const headerBack = createElement("div", ["headerBack"]);
  const header = createElement("h1", ["pageHeader"], "Froggy's Fable Cafe");
  headerBack.append(header);
  content.append(headerBack);

  // Info Section
  const infoBack = createSection(
    "What We Offer:",
    `Dive into Froggy’s Fable Café, where the finest pond-side pancakes
    and scrumptious swamp-inspired porridge await you! With a lively
    atmosphere reminiscent of a lush wetland, the friendly service makes
    you feel right at home. This is the kind of café that keeps me
    hopping back for more!`
  );
  content.append(infoBack);

  // Hours Section
  const hoursContent = createElement("div", []);
  const hoursList = document.createElement("div");
  hoursList.id = "hours";

  const times = [
    { day: "Sunday", time: "8am - 8pm" },
    { day: "Monday", time: "6am - 6pm" },
    { day: "Tuesday", time: "6am - 6pm" },
    { day: "Wednesday", time: "6am - 6pm" },
    { day: "Thursday", time: "6am - 10pm" },
    { day: "Friday", time: "6am - 10pm" },
    { day: "Saturday", time: "8am - 10pm" },
  ];

  times.forEach((entry) => {
    const hoursDiv = createElement("div", [], `${entry.day}: ${entry.time}`);
    hoursList.append(hoursDiv);
  });

  const hoursSection = createSection("Hours", "");
  hoursSection.querySelector(".content").append(hoursList);
  content.append(hoursSection);

  // Location Section
  const locationSection = createSection(
    "Location",
    "123 Lily Pad Lane, Ribbitville, Frogtopia"
  );
  content.append(locationSection);
};

homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menuPage);
contactButton.addEventListener("click", contactPage);
document.addEventListener("DOMContentLoaded", homePage);
