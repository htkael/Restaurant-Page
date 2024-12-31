export const createElement = (tag, classes = [], textContent = "") => {
  const element = document.createElement(tag);
  if (classes.length) {
    element.classList.add(...classes);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

export const createSection = (headerText, contentText) => {
  const sectionBack = createElement("div", ["contentBack"]);
  const sectionContent = createElement("div", ["pageHeader", "content"]);

  const sectionHeader = createElement("h2", [], headerText);
  sectionContent.append(sectionHeader);

  const sectionText = createElement("div", [], contentText);
  sectionContent.append(sectionText);

  sectionBack.append(sectionContent);
  return sectionBack;
};

export const createMenuItem = (headerText, contentText, price) => {
  const sectionBack = createElement("div", ["contentBack"]);
  const sectionContent = createElement("div", ["pageHeader", "content"]);

  const sectionHeader = createElement("h2", [], headerText);
  sectionContent.append(sectionHeader);

  const sectionText = createElement("div", [], contentText);
  sectionContent.append(sectionText);

  const sectionPrice = createElement("h3", [], price);
  sectionContent.append(sectionPrice);

  sectionBack.append(sectionContent);
  return sectionBack;
};
