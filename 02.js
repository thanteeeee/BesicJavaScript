function updateInventory(currentInventory, newInventory) {
    newInventory.forEach(newItem => {
        const existingItem = currentInventory.find(item => item.name === newItem.name)
        if (existingItem) {
            existingItem.quantity += newItem.quantity
        } else {
            currentInventory.push(newItem)
        }
    });
    return currentInventory;
}

const currentInventory = [
    { name: "item 1", quantity: 10 },
    { name: "item 2", quantity: 6 },
    { name: "item 3", quantity: 5 }
];

const newInventory = [
    { name: "item 1", quantity: 10 },
    { name: "item 2", quantity: 6 },
    { name: "item 4", quantity: 5 }
]

const updatedInventory = updateInventory(currentInventory, newInventory);
console.log(updatedInventory);
