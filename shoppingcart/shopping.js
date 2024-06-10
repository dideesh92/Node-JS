let cart = [];

function addItem() {
    const fruit = document.getElementById('fruit').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const price = parseFloat(document.getElementById('price').value);

    if (isNaN(weight) || isNaN(price) || weight <= 0 || price <= 0) {
        alert('Please enter valid weight and price.');
        return;
    }

    const cost = weight * price;
    cart.push({ fruit, weight, price, cost });
    updateCart();
}

function updateCart() {
    const cartTable = document.getElementById('cart');
    cartTable.innerHTML = `
        <tr>
            <th>Fruit</th>
            <th>Weight (kg)</th>
            <th>Price per kg</th>
            <th>Cost ($)</th>
        </tr>
    `;

    let grandTotal = 0;
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.fruit}</td>
            <td>${item.weight.toFixed(2)}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.cost.toFixed(2)}</td>
        `;
        cartTable.appendChild(row);
        grandTotal += item.cost;
    });

    document.getElementById('grandTotal').innerText = `Grand Total: ${grandTotal.toFixed(2)}`;
}
