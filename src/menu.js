import { createElement, createSection, createMenuItem } from "./utils";

export const menuPage = () => {
  const body = document.querySelector("#body");
  const content = document.querySelector("#content");

  content.innerHTML = "";

  //   Menu Header
  const headerBack = createElement("div", ["headerBack"]);
  const header = createElement("h1", ["pageHeader"], "Menu");
  headerBack.append(header);
  content.append(headerBack);

  //   Beverages
  const beverageBack = createElement("div", ["menuSection"]);
  const beverage = createElement("h1", ["pageHeader"], "Beverages");
  beverageBack.append(beverage);
  content.append(beverageBack);

  const lilyJuice = createMenuItem(
    "Lily Pad Juice",
    "A refreshing blend of tropical fruit flavors with a hint of mint, served over crushed ice. Perfect for a hot day by the swamp!",
    "$2"
  );
  content.append(lilyJuice);

  const lemon = createMenuItem(
    "Froggie Lemonade",
    "A refreshing blend of tropical fruit flavors with a hint of mint, served over crushed ice. Perfect for a hot day by the swamp!",
    "$3"
  );
  content.append(lemon);

  //   Sides
  const sidesBack = createElement("div", ["menuSection"]);
  const sides = createElement("h1", ["pageHeader"], "Sides");
  sidesBack.append(sides);
  content.append(sidesBack);

  const fries = createMenuItem(
    "Swampy Waffle Fries",
    "Crispy waffle fries with a sprinkle of swamp seasoning, served with a tangy dip made from local herbs.",
    "$1"
  );
  content.append(fries);

  const salad = createMenuItem(
    "Bog Berry Salad",
    "A small bowl of mixed greens topped with seasonal swamp berries—sweet and tart, just like the swamp!",
    "$1"
  );
  content.append(salad);

  //   Main Menu
  const menuBack = createElement("div", ["menuSection"]);
  const menu = createElement("h1", ["pageHeader"], "Main Dishes");
  menuBack.append(menu);
  content.append(menuBack);

  const pancakes = createMenuItem(
    "Pond Pancakes",
    "Fluffy pancakes made from a special swamp blend, served with syrup harvested from the sweetest trees in the bog.",
    "$4"
  );
  content.append(pancakes);

  const toast = createMenuItem(
    "Frog Leg French Toast",
    "Two slices of our fluffy French toast, made with swamp herbs and served with sweet maple syrup from the forest.",
    "$5"
  );
  content.append(toast);

  const wrap = createMenuItem(
    "Swamptastic Veggie Wrap",
    "Packed full of nutritious veggies from the swamp, wrapped in a soft tortilla and topped with a zesty swamp sauce to keep you jumping!",
    "$8"
  );
  content.append(wrap);

  const blt = createMenuItem(
    "Tadpole BLT",
    "Crispy bacon, lettuce, and tomato on toasted bread—perfect for those who love a bit of swamp flair along with their bacon!",
    "$6"
  );
  content.append(blt);

  const cheese = createMenuItem(
    "Bagel with Swamp Cream Cheese",
    "A delicious bagel served with creamy spread made from local herbs and cottage cheese, perfect for a cozy meal by the water's edge.",
    "$7"
  );
  content.append(cheese);

  const cakes = createMenuItem(
    "Honey Frog Cakes",
    "Delicious cakes made with honey and topped with fresh swamp berries. A sweet treat that will have you leaping for joy!",
    "$3"
  );
  content.append(cakes);

  const bowl = createMenuItem(
    "Humidity Bowl",
    "A hearty bowl of mixed swamp greens topped with fresh fruits and nuts, drizzled with a honey vinaigrette.",
    "$9"
  );
  content.append(bowl);

  const porrige = createMenuItem(
    "The Froggy Porrige",
    "Made by Baby Frog himself, this porridge is guaranteed to be just right or your fly back!",
    "$5"
  );
  content.append(porrige);
};
