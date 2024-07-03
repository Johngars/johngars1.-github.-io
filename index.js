const prices = {
    'qty1': 5000000,
    'qty2': 7000000,
    'qty3': 15000000,
    'qty4': 17000000,
    'qty5': 14000000,
    'qty6': 270000000
};

function updateOrder() {
    let total = 0;
    let orders = [];

    for (let id in prices) {
        let quantity = document.getElementById(id).value;
        if (quantity && quantity > 0) {
            let price = prices[id];
            let cost = price * quantity;
            total += cost;
            let carName = document.querySelector(`#${id}`).closest('.card').querySelector('.card-title').textContent;
            orders.push(`${carName}: ${quantity} x ₱${price.toFixed(2)} = ₱${cost.toFixed(2)}`);
        }
    }

    document.getElementById('carts').value = orders.join('\n');
    document.getElementById('total').value = `Total: ₱${total.toFixed(2)}`;
    calculateChange();
}

function calculateChange() {
    let total = parseFloat(document.getElementById('total').value.replace('Total: ₱', ''));
    let cash = parseFloat(document.getElementById('cash').value);
    let change = cash - total;

    if (!isNaN(change) && change >= 0) {
        document.getElementById('change').value = `Change: ₱${change.toFixed(2)}`;
    } else {
        document.getElementById('change').value = `Change: ₱0.00`;
    }
}

// Attach the updateOrder function to the input events
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateOrder);
});
