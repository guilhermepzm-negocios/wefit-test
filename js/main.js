const divCards = document.getElementsByClassName("row")[2];
const cards = divCards.getElementsByClassName("col-lg-3");
const divTitle = divCards.getElementsByClassName("col-lg-12")[0];
cards[0].getElementsByClassName("btn btn-primary")[0].className =
  "btn btn-success";
const cardsOrdered = [cards[3], cards[0], cards[2], cards[1]];
divCards.innerHTML = divTitle.outerHTML.concat(
  cardsOrdered.map((card) => card.outerHTML).join("")
);

const jumbotron = document.getElementsByClassName("jumbotron")[0];
jumbotron.style["text-align"] = "right";
jumbotron.style["color"] = "white";
jumbotron.style["background-color"] = "#6b757e";
jumbotron.getElementsByClassName("btn btn-primary")[0].className =
  "btn btn-success btn-lg";

const divList = document
  .getElementsByClassName("row")[3]
  .getElementsByClassName("col-lg-4")[0]
  .getElementsByClassName("list-group")[0];
const list = divList.getElementsByClassName("list-group-item");
const newItems = ["Quarto item", "Quinto item"].map((item) => {
  const newItem = document.createElement("li");
  newItem.className = "list-group-item";
  newItem.innerHTML = item;
  return newItem;
});
const newList = [...list, ...newItems];
newList[0].className = "list-group-item";
newList[3].className = "list-group-item active";
divList.innerHTML = newList.map((item) => item.outerHTML).join("");

const menuDiv = document.getElementsByClassName("btn-group-vertical")[0];
menuDiv.style["flex-direction"] = "row";
menuDiv.style["ms-flex-direction"] = "row";
menuDiv.style["gap"] = "0.25rem";
const menuItems = menuDiv.getElementsByClassName("btn");
Array.from(menuItems).forEach((item) => {
  item.style["border-radius"] = "0.25rem";
  item.style["width"] = "auto";
});
