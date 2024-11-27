let inpFood = document.getElementById("Input_form");
let inpbtn = document.getElementById("Add_btnn");
let foodContainer = document.getElementById("food-container");

inpbtn.addEventListener("click", () => {
  //foodContainer.innerHTML += <li class = "Food-item">${inpFood.value}</li>;

  let li = document.createElement("li");
  const divitm = document.createElement("div");
  const removebtn = document.createElement("div");

  li.append(divitm, removebtn);

  removebtn.parentElement.setAttribute("onclick", "removeitem(event)");

  removebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  li.className = "Food-item";
  let Text = document.createTextNode(inpFood.value);
  li.append(Text);
  foodContainer.append(li);
  li.append(divitm);
  li.append(removebtn);
});

function removeitem(event) {
  let oldList = event.target.parentNode.parentNode;

  //remove

  oldList.remove();
}
