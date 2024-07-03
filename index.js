function updateOrder() {
    let orders = [];
    let total = 0;

    // Get quantities from input fields
    let qty1 = parseInt(document.getElementById('qty1').value) || 0;
    let qty2 = parseInt(document.getElementById('qty2').value) || 0;
    let qty3 = parseInt(document.getElementById('qty3').value) || 0;
    let qty4 = parseInt(document.getElementById('qty4').value) || 0;
    let qty5 = parseInt(document.getElementById('qty5').value) || 0;
    let qty6 = parseInt(document.getElementById('qty6').value) || 0;

    // Calculate prices
    let price1 = 5000000;
    let price2 = 7000000;
    let price3 = 15000000;
    let price4 = 17000000;
    let price5 = 14000000;
    let price6 = 270000000;

    // Update total and orders array dynamically
    function updateTotalAndOrders(qty, price, itemName) {
        if (qty > 0) {
            orders.push(`${itemName}: ${qty} x ₱${price.toLocaleString()} = ₱${(qty * price).toLocaleString()}`);
            total += qty * price;
        }
    }

    updateTotalAndOrders(qty1, price1, 'Rolls Royce');
    updateTotalAndOrders(qty2, price2, 'Dodgehellcat');
    updateTotalAndOrders(qty3, price3, 'Audi r8');
    updateTotalAndOrders(qty4, price4, 'Mclaren senna');
    updateTotalAndOrders(qty5, price5, 'Mustang shelby');
    updateTotalAndOrders(qty6, price6, 'Porsche brabus');

    // Display orders and total
    document.getElementById('carts').value = orders.join('\n');
    document.getElementById('total').value = `₱${total.toLocaleString()}`;
}

function calculateChange() {
    let total = parseFloat(document.getElementById('total').value.replace('₱', '')) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let change = cash - total;

    document.getElementById('change').value = `₱${change.toLocaleString()}`;
}

// Update total and change on quantity change
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('input', updateOrder);
    input.addEventListener('input', calculateChange);
});
