let cartCount = 0;

const cartCounter = document.getElementById("cart-count");
const productGrid = document.getElementById("product-grid");
const API_URL = "http://localhost:5000/api/products";

const fallbackProducts = [
    {
        name: "Nike Air Max 90",
        brand: "Nike",
        price: 7999,
        category: "Lifestyle",
        description: "Classic comfort with iconic cushioning.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        rating: 4.8
    },
    {
        name: "Nike Pegasus 41",
        brand: "Nike",
        price: 8999,
        category: "Running",
        description: "Responsive cushioning for daily miles.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
        rating: 4.7
    },
    {
        name: "Nike Dunk Low",
        brand: "Nike",
        price: 7499,
        category: "Streetwear",
        description: "Low-profile style with premium texture.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        rating: 4.9
    },
    {
        name: "Nike SB Zoom",
        brand: "Nike",
        price: 6999,
        category: "Skate",
        description: "Board-ready grip and smooth impact control.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
        rating: 4.6
    },
    {
        name: "Nike Vaporfly 3",
        brand: "Nike",
        price: 12999,
        category: "Running",
        description: "Carbon-plated speed for race day.",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        rating: 4.8
    },
    {
        name: "Nike Air Jordan 1",
        brand: "Nike",
        price: 11999,
        category: "Lifestyle",
        description: "Heritage hoops style with modern comfort.",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
        rating: 5.0
    },
    {
        name: "Nike Blazer Mid",
        brand: "Nike",
        price: 7999,
        category: "Lifestyle",
        description: "Retro basketball vibe with a clean finish.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        rating: 4.5
    },
    {
        name: "Nike Air Force 1",
        brand: "Nike",
        price: 8999,
        category: "Lifestyle",
        description: "Timeless sneaker with cushioned comfort.",
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500",
        rating: 4.7
    },
    {
        name: "Nike React Infinity",
        brand: "Nike",
        price: 10999,
        category: "Running",
        description: "Supportive ride for every training day.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        rating: 4.8
    },
    {
        name: "Nike LeBron 21",
        brand: "Nike",
        price: 13999,
        category: "Basketball",
        description: "Performance engineered for explosive play.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        rating: 4.9
    },
    {
        name: "Nike Cortez",
        brand: "Nike",
        price: 6499,
        category: "Classic",
        description: "Vintage running silhouette with modern comfort.",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
        rating: 4.4
    },
    {
        name: "Nike Wildhorse 8",
        brand: "Nike",
        price: 9999,
        category: "Trail",
        description: "Tough grip for rough terrain and long miles.",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
        rating: 4.6
    }
];

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

function attachCartEvents() {
    const cartButtons = document.querySelectorAll(".add-cart");

    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            cartCount++;
            if (cartCounter) {
                cartCounter.textContent = cartCount;
            }

            button.textContent = "Added ✓";
            button.style.backgroundColor = "#ff5a1f";

            setTimeout(() => {
                button.textContent = "Add to Cart";
                button.style.backgroundColor = "#111";
            }, 1000);

            showNotification("Item added to cart!");
        });
    });
}

function renderProducts(products) {
    if (!productGrid) return;

    productGrid.innerHTML = "";

    products.forEach((product) => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-meta">${product.brand} · ${product.category}</p>
            <p>${product.description}</p>
            <div class="price-row">
                <strong>₹${product.price.toLocaleString("en-IN")}</strong>
                <span>★ ${product.rating}</span>
            </div>
            <button class="add-cart">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });

    attachCartEvents();
}

async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            renderProducts(data);
            return;
        }
    } catch (error) {
        console.warn("Backend unavailable, showing local Nike collection.", error);
    }

    renderProducts(fallbackProducts);
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

loadProducts();