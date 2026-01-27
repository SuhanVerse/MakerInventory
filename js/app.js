// app.js

var items = Items;

//Render App
function render() {
  var $app = $("#app");
  $app.empty();

  var $formElement = createForm();
  var $itemsElement = createItems(items);

  $app.append($formElement);
  $app.append($itemsElement);
}

//Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

//Initialize App
$(document).ready(function () {
  render();
});

//Add Item Function
function addItem(itemName) {
  var newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };

  items.push(newItem);
  render();
  setTimeout(function () {
    alert("Item Added Successfully!");
  }, 0);
}

//Edit Completed Function
function editCompleted(itemId) {
  items = $.map(items, function (item) {
    if (item.id == itemId) {
      return $.extend({}, item, { completed: !item.completed });
    }
    return item;
  });
  render();
}

function removeItem(itemId) {
  items = $.grep(items, function (item) {
    return item.id !== itemId;
  });
  render();
  setTimeout(function () {
    alert("Item Deleted Successfully!");
  }, 0);
}
