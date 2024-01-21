import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", selected: false },
    { id: 2, name: "Bananas", selected: false },
    { id: 3, name: "Milk", selected: false },
    { id: 4, name: "Bread", selected: false },
    { id: 5, name: "Eggs", selected: false },
  ]);

  const handleItemToggle = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const selectedItems = items.filter((item) => item.selected);
  const remainingItems = items.filter((item) => !item.selected);

  return (
    <div>
      <h3>Shopping List</h3>
      <div>
        <strong>Selected Items:</strong>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleItemToggle(item.id)}
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Remaining Items:</strong>
        <ul>
          {remainingItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleItemToggle(item.id)}
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
