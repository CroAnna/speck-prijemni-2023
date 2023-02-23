
const btnAdd = document.getElementById("btn-add");
const btnRemoveAll = document.getElementById("btn-remove-all");

btnAdd.addEventListener("click", () => {
    const item = document.createElement("div");
    let inputNode = document.createTextNode(document.getElementById("input").value);
    item.appendChild(inputNode);
    item.classList.add("item")
    const items = document.getElementById("items-container");
    items.appendChild(item);
    document.getElementById("input").value = "";
})

btnRemoveAll.addEventListener("click", () => {
    document.getElementById("items-container").innerHTML = "";
})
