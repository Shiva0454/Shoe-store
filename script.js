// ===============================
// SOLEAI - SCRIPT.JS
// ===============================

// Cart Counter
let cartCount = 0;

// Get Elements
const cartCounter = document.getElementById("cart-count");
const cartButtons = document.querySelectorAll(".add-cart");

// Add to Cart Function
cartButtons.forEach((button) => {
    button.addEventListener("click", () => {

        cartCount++;
        cartCounter.textContent = cartCount;

        button.textContent = "Added ✓";
        button.style.backgroundColor = "#28a745";

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.backgroundColor = "#ff4d30";
        }, 1000);

        showNotification("Item added to cart!");
    });
});

// ===============================
// Notification Function
// ===============================

function showNotification(message) {

    const notification = document.createElement("div");

    notification.textContent = message;

    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.padding = "15px 25px";
    notification.style.backgroundColor = "#28a745";
    notification.style.color = "#fff";
    notification.style.fontWeight = "600";
    notification.style.borderRadius = "8px";
    notification.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    notification.style.zIndex = "9999";
    notification.style.opacity = "0";
    notification.style.transition = "0.3s";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        notification.style.opacity = "0";

        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 2000);
}

// ===============================
// Shop Now Button
// ===============================

const shopButton = document.querySelector(".hero button");

if (shopButton) {

    shopButton.addEventListener("click", () => {

        const products = document.getElementById("products");

        if (products) {
            products.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}

// ===============================
// Newsletter
// ===============================

const subscribeButton = document.querySelector(".newsletter button");

if (subscribeButton) {

    subscribeButton.addEventListener("click", () => {

        const email = document.querySelector(".newsletter input");

        if (!email || email.value.trim() === "") {

            alert("Please enter your email.");
            return;

        }

        alert("Thank you for subscribing!");

        email.value = "";

    });

}

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 20) {

        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

    }

});