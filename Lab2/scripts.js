'use strict';

// Get list element
const todoList = document.getElementsByTagName("LI");

// Add buttons to existing items in list
for (let i = 0; i < todoList.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode(" x ");
  span.className = "closeButton";
  span.appendChild(txt);
  todoList[i].appendChild(span);
}

// Add close function to existing buttons
let closeButtons = document.getElementsByClassName("closeButton");
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add cross out function all items
let lists = document.querySelectorAll('ul');
for (let i = 0; i < lists.length; i++){
  lists[i].addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('crossedOut');
    }
  }, false);
}

// Add new item to the list
function createNewItem(listID) {
  const li = document.createElement("li");
  const input = document.getElementById("inputBox").value;
  const textNode = document.createTextNode(input);

  if (input === '') {
    alert("Input box cannot be empty!")
    return
  }

  li.appendChild(textNode)
  document.getElementById(listID).appendChild(li);

  document.getElementById("inputBox").value = "";

  // Add button
  const span = document.createElement("SPAN");
  const txt = document.createTextNode(" x ");
  span.className = "closeButton";
  span.appendChild(txt);
  li.appendChild(span);

  // Add button close function
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}