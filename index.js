function updateOrder() {
    const prices = [5000000, 7000000, 150000000, 170000000, 140000000, 270000000];
    let orderDetails = "";
    let total = 0;

    for (let i = 1; i <= 6; i++) {
        const qty = document.getElementById(`qty${i}`).value;
        if (qty && qty > 0) {
            const itemTotal = qty * prices[i - 1];
            orderDetails += `Item ${i}: ${qty} x ₱${prices[i - 1]} = ₱${itemTotal}\n`;
            total += itemTotal;
        }
    }

    document.getElementById("carts").value = orderDetails;
    document.getElementById("total").value = `Total: ₱${total}`;
}

function calculateChange() {
    const total = parseFloat(document.getElementById("total").value.replace("Total: ₱", ""));
    const cash = parseFloat(document.getElementById("cash").value);
    const change = cash - total;

    if (!isNaN(change) && change >= 0) {
        document.getElementById("change").value = `Change: ₱${change}`;
    } else {
        document.getElementById("change").value = "Change: ₱0";
    }
}
