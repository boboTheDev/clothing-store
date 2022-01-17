export const addItemToCart = (currentItems, addedItem) => {
  const existingItem = currentItems.find((item) => item.id === addedItem.id);
  if (existingItem) {
    return currentItems.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...currentItems, { ...addedItem, quantity: 1 }];
};
