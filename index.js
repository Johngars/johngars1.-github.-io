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

    // Add items to orders array
    if (qty1 > 0) {
        orders.push(`Rolls Royce: ${qty1} x ₱${price1.toLocaleString()} = ₱${(qty1 * price1).toLocaleString()}`);
        total += qty1 * price1;
    }
    if (qty2 > 0) {
        orders.push(`Dodgehellcat: ${qty2} x ₱${price2.toLocaleString()} = ₱${(qty2 * price2).toLocaleString()}`);
        total += qty2 * price2;
    }
    if (qty3 > 0) {
        orders.push(`Audi r8: ${qty3} x ₱${price3.toLocaleString()} = ₱${(qty3 * price3).toLocaleString()}`);
        total += qty3 * price3;
    }
    if (qty4 > 0) {
        orders.push(`Mclaren senna: ${qty4} x ₱${price4.toLocaleString()} = ₱${(qty4 * price4).toLocaleString()}`);
        total += qty4 * price4;
    }
    if (qty5 > 0) {
        orders.push(`Mustang shelby: ${qty5} x ₱${price5.toLocaleString()} = ₱${(qty5 * price5).toLocaleString()}`);
        total += qty5 * price5;
    }
    if (qty6 > 0) {
        orders.push(`Porsche brabus: ${qty6} x ₱${price6.toLocaleString()} = ₱${(qty6 * price6).toLocaleString()}`);
        total += qty6 * price6;
    }

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
