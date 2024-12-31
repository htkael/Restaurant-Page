import "./styles.css";

const homePage = () => {
  const body = document.querySelector("#body");
  const content = document.createElement("div");
  content.id = "content";
  body.append(content);

  const headerBack = document.createElement("div");
  headerBack.classList.add("headerBack");
  content.append(headerBack);
  const header = document.createElement("h1");
  header.classList.add("pageHeader");
  header.textContent = "Froggy's Fable Cafe";
  headerBack.append(header);

  const infoBack = document.createElement("div");
  infoBack.classList.add("contentBack");
  content.append(infoBack);
  const info = document.createElement("div");
  info.classList.add("pageHeader");
  info.classList.add("content");
  info.textContent = `Dive into Froggy’s Fable Café, where the finest pond-side pancakes
            and scrumptious swamp-inspired porridge await you! With a lively
            atmosphere reminiscent of a lush wetland, the friendly service makes
            you feel right at home. This is the kind of café that keeps me
            hopping back for more!`;
  infoBack.append(info);

  const hoursBack = document.createElement("div");
  hoursBack.classList.add("contentBack");
  content.append(hoursBack);
  const hours = document.createElement("div");
  hours.classList.add("pageHeader");
  hours.classList.add("content");
  hoursBack.append(hours);
  const hTwo = document.createElement("h2");
  hTwo.textContent = "Hours";
  hours.append(hTwo);
  const hoursList = document.createElement("div");
  hoursList.id = "hours";
  hours.append(hoursList);

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
    const hoursDiv = document.createElement("div");
    hoursDiv.textContent = `${entry.day}: ${entry.time}`;
    hoursList.append(hoursDiv);
  });

  const locationBack = document.createElement("div");
  locationBack.classList.add("contentBack");
  content.append(locationBack);

  const location = document.createElement("div");
  location.classList.add("pageHeader");
  location.classList.add("content");
  locationBack.append(location);

  const locationHead = document.createElement("h2");
  locationHead.textContent = "Location";
  location.append(locationHead);

  const address = document.createElement("div");
  address.textContent = "123 Lily Pad Lane, Ribbitville, Frogtopia";
  location.append(address);

  const footer = document.createElement("div");
  footer.id = "footer";
  footer.textContent = "Credits";
  body.append(footer);
};
document.addEventListener("DOMContentLoaded", homePage);
