document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.getElementById('orderButton');
    const resetButton = document.getElementById('resetButton');
    const submitButton = document.getElementById('submitButton');
    const productAQuantity = document.getElementById('productAQuantity');
    const productBQuantity = document.getElementById('productBQuantity');
    const productCQuantity = document.getElementById('productCQuantity');
    const productDQuantity = document.getElementById('productDQuantity');
    const totalAmountDisplay = document.getElementById('totalAmount');
    const productAPrice = 299;
    const productBPrice = 299;
    const productCPrice = 599;
    const productDPrice = 499;

    
    orderButton.addEventListener('click', function() {
        const quantityA = parseInt(productAQuantity.value) || 0;
        const quantityB = parseInt(productBQuantity.value) || 0;
        const quantityC = parseInt(productCQuantity.value) || 0;
        const quantityD = parseInt(productDQuantity.value) || 0;

        let totalAmount = productAPrice * quantityA + productBPrice * quantityB + productCPrice * quantityC + productDPrice * quantityD;

        // ถ้าซื้อมากกว่า 1000
        if (totalAmount > 1000) {
            const discount = totalAmount * 0.1;
            totalAmount -= discount;
        }

        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    });

    // ปุ่มรีเซ็ท
    resetButton.addEventListener('click', function() {
        productAQuantity.value = 0;
        productBQuantity.value = 0;
        productCQuantity.value = 0;
        productDQuantity.value = 0;
        totalAmountDisplay.textContent = `$0.00`;
    });

    submitButton.addEventListener('click', function() {
    });
});
