export const addItemToCart = (currentItems, addedItem) => {
  const existingItem = currentItems.find((item) => item.id === addedItem.id);
  if (existingItem) {
    return currentItems.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...currentItems, { ...addedItem, quantity: 1 }];
};

export const removeItem = (currentItems, removedItem) => {
  const existingItem = currentItems.find((item) => item.id === removedItem.id);

  if (existingItem.quantity === 1) {
    return currentItems.filter((item) => item.id !== removedItem.id);
  }

  return currentItems.map((item) =>
    item.id === removedItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
