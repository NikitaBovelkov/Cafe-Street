const hotBtns = document.querySelectorAll('.hot-btn');
const coldBtns = document.querySelectorAll('.cold-btn');

hotBtns.forEach((hotBtn, index) => {
    const coldBtn = coldBtns[index];

    hotBtn.addEventListener('click', () => {
        hotBtn.classList.add('selected');
        coldBtn.classList.remove('selected');
    });
});

coldBtns.forEach((coldBtn, index) => {
    const hotBtn = hotBtns[index];

    coldBtn.addEventListener('click', () => {
        coldBtn.classList.add('selected');
        hotBtn.classList.remove('selected');
    });
});

/**********************************/

const emailInput = document.querySelector('#email');

emailInput.addEventListener('input', () => {
    if (emailInput.value) {
        emailInput.classList.add('large-font');
    } else {
        emailInput.classList.remove('large-font');
    }
});

/**********************************/

const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartBtn = document.querySelector('.icon-cart');
const closeCartBtn = document.querySelector('.close-cart-btn');
const cartContainer = document.querySelector('.cart-container');
const cartList = document.querySelector('.cart-list');

const cart = {};

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.parentElement.querySelector('h3').textContent;
        if (cart[productName]) {
            cart[productName]++;
        } else {
            cart[productName] = 1;
        }
        updateCart();
    });
});

cartBtn.addEventListener('click', () => {
    cartContainer.classList.add('visible');
});

closeCartBtn.addEventListener('click', () => {
    cartContainer.classList.remove('visible');
});

function updateCart() {
    let cartContent = '';
    for (const [product, quantity] of Object.entries(cart)) {
        cartContent += `<li>${product} x${quantity}</li>`;
    }
    cartList.innerHTML = cartContent;
}
