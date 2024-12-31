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

export const createContact = (
  headerText,
  contentText1,
  contentText2,
  contentText3,
  contentText4,
  contentText5
) => {
  const sectionBack = createElement("div", ["contentBack"]);
  const sectionBlock = createElement("div", ["pageHeader", "content"]);
  const sectionContent = createElement("div", ["contactList"]);

  const sectionHeader = createElement("h2", [], headerText);
  sectionBlock.append(sectionHeader);

  const sectionText1 = createElement("div", [], contentText1);
  sectionContent.append(sectionText1);

  const sectionText2 = createElement("div", [], contentText2);
  sectionContent.append(sectionText2);

  const sectionText3 = createElement("div", [], contentText3);
  sectionContent.append(sectionText3);

  const sectionText4 = createElement("div", [], contentText4);
  sectionContent.append(sectionText4);

  const sectionText5 = createElement("div", [], contentText5);
  sectionContent.append(sectionText5);

  sectionBlock.append(sectionContent);
  sectionBack.append(sectionBlock);
  return sectionBack;
};
