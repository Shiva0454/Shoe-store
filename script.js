let cartCount = 0;

const cartCounter = document.getElementById("cart-count");
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;

        button.textContent = "Added ✓";
        button.style.backgroundColor = "#ff5a1f";

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.backgroundColor = "#111";
        }, 1000);

        showNotification("Item added to cart!");
    });
});

function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.padding = "14px 20px";
    notification.style.backgroundColor = "#111";
    notification.style.color = "#fff";
    notification.style.fontWeight = "600";
    notification.style.borderRadius = "999px";
    notification.style.boxShadow = "0 12px 24px rgba(0,0,0,0.18)";
    notification.style.zIndex = "9999";
    notification.style.opacity = "0";
    notification.style.transition = "0.3s";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

const shopButton = document.querySelector(".hero .primary");

if (shopButton) {
    shopButton.addEventListener("click", () => {
        const products = document.getElementById("products");
        if (products) {
            products.scrollIntoView({ behavior: "smooth" });
        }
    });
}

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

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    navbar.style.boxShadow = window.scrollY > 20 ? "0 10px 24px rgba(17, 17, 17, 0.08)" : "none";
});