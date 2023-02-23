"use strict";

const btnAdd = document.getElementById("btn-add");
const btnRemoveAll = document.getElementById("btn-remove-all");

btnAdd.addEventListener("click", () => {
    const listItem = document.createElement("li");
    let inputText = document.getElementById("input").value;
    let inputNode = document.createTextNode(inputText);
    listItem.appendChild(inputNode);
    const items = document.getElementById("items-container");
    items.appendChild(listItem);
})

btnRemoveAll.addEventListener("click", () => {
    const items = document.getElementById("items-container").innerHTML = "";
})
