const fs = require('fs');

const categories = ["Bags", "Shoes", "Accessories"];
const colors = ["Black", "Brown", "Red", "Blue", "Green"];
const sizes = ["Small", "Medium", "Large", "XL"];
const products = [];

for (let i = 1; i <= 50; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];

    const product = {
        id: i.toString(),
        name: `${color} ${category} ${i}`,
        description: `This is a ${size} ${color} ${category}`,
        category: category,
        price: (Math.random() * 100).toFixed(2),
        discountedPrice: (Math.random() * 100).toFixed(2),
        rating: (Math.random() * 5).toFixed(2),
        image: `https://example.com/images/product${i}.jpg`,
        color: color,
        availableSizes: [size]
    };

    products.push(product);
}

fs.writeFile('./src/data/products.json', JSON.stringify(products, null, 2), (err) => {
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
    }
});
