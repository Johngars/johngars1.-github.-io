function updateOrder() {
    const prices = [5000000, 7000000, 15000000, 17000000, 14000000, 270000000];
    let orders = '';
    let total = 0;

    for (let i = 1; i <= 6; i++) {
        const qty = parseInt(document.getElementById(`qty${i}`).value) || 0;
        if (qty > 0) {
            const price = prices[i - 1];
            total += qty * price;
            orders += `${document.querySelector(`.card:nth-child(${i}) .card-title`).textContent}: ${qty} x ₱${price.toLocaleString()} = ₱${(qty * price).toLocaleString()}\n`;
        }
    }

    document.getElementById('carts').value = orders;
    document.getElementById('total').value = `Total: ₱${total.toLocaleString()}`;
    calculateChange();
}

function calculateChange() {
    const total = parseInt(document.getElementById('total').value.replace(/[^0-9]/g, '')) || 0;
    const cash = parseInt(document.getElementById('cash').value) || 0;
    const change = cash - total;

    document.getElementById('change').value = change >= 0 ? `Change: ₱${change.toLocaleString()}` : 'Insufficient Cash';
}
