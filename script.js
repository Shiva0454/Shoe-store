let cart = [];
const cartCounter = document.getElementById("cart-count");
const productGrid = document.getElementById("product-grid");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");
const themeToggle = document.getElementById("theme-toggle");
const chatToggle = document.getElementById("shoe-chat-toggle");
const chatPanel = document.getElementById("shoe-chat-panel");
const chatClose = document.getElementById("shoe-chat-close");
const chatForm = document.getElementById("shoe-chat-form");
const chatInput = document.getElementById("shoe-chat-input");
const chatMessages = document.getElementById("shoe-chat-messages");
const logoutBtn = document.getElementById("logout-btn");

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
    },
    {
        name: "Nike Air Max 97",
        brand: "Nike",
        price: 10999,
        category: "Lifestyle",
        description: "Iconic wave lines with full-length Air cushioning.",
        image: "https://images.unsplash.com/photo-1534430480878-8570e43b2651?w=500",
        rating: 4.8
    },
    {
        name: "Nike ZoomX Invincible",
        brand: "Nike",
        price: 13999,
        category: "Running",
        description: "Soft, responsive foam built for long training runs.",
        image: "https://images.unsplash.com/photo-1505740106531-4243f3831d39?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air Max 720",
        brand: "Nike",
        price: 12499,
        category: "Lifestyle",
        description: "Maximum Air unit comfort with a futuristic silhouette.",
        image: "https://images.unsplash.com/photo-1519741498377-2073b03d7b87?w=500",
        rating: 4.6
    },
    {
        name: "Nike SB Dunk High",
        brand: "Nike",
        price: 8499,
        category: "Skate",
        description: "Skate-ready padding with bold street style.",
        image: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=500",
        rating: 4.5
    },
    {
        name: "Nike Air VaporMax",
        brand: "Nike",
        price: 14999,
        category: "Running",
        description: "Air-only cushioning for next-level comfort.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
        rating: 4.8
    },
    {
        name: "Nike Metcon 8",
        brand: "Nike",
        price: 9999,
        category: "Training",
        description: "Stable cross-training support with durable grip.",
        image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air Max 270",
        brand: "Nike",
        price: 10499,
        category: "Lifestyle",
        description: "Low-cut profile with bold heel air cushioning.",
        image: "https://images.unsplash.com/photo-1528701800489-20b9df44e9f5?w=500",
        rating: 4.6
    },
    {
        name: "Nike Jordan Delta",
        brand: "Nike",
        price: 9999,
        category: "Lifestyle",
        description: "Futuristic materials with a cushioned ride.",
        image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=500",
        rating: 4.7
    },
    {
        name: "Nike Free RN",
        brand: "Nike",
        price: 8499,
        category: "Running",
        description: "Flexible sole for natural movement.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        rating: 4.5
    },
    {
        name: "Nike Air Max Plus",
        brand: "Nike",
        price: 11999,
        category: "Lifestyle",
        description: "Signature Tuned Air cushioning and bold style.",
        image: "https://images.unsplash.com/photo-1480539942154-45f4bd8304ca?w=500",
        rating: 4.8
    },
    {
        name: "Nike Air Zoom Pegasus",
        brand: "Nike",
        price: 10999,
        category: "Running",
        description: "Everyday runner with responsive Zoom Air.",
        image: "https://images.unsplash.com/photo-1491238228988-15d7bfa0cbf8?w=500",
        rating: 4.7
    },
    {
        name: "Nike SB Blazer",
        brand: "Nike",
        price: 7999,
        category: "Skate",
        description: "Classic skate silhouette with premium details.",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
        rating: 4.6
    },
    {
        name: "Nike Zoom Fly",
        brand: "Nike",
        price: 12999,
        category: "Running",
        description: "Lightweight speed shoe built for tempo runs.",
        image: "https://images.unsplash.com/photo-1503444990679-525027f14d10?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air Max 720 Horizon",
        brand: "Nike",
        price: 13499,
        category: "Lifestyle",
        description: "Elevated cushion and futuristic shape for street-ready wear.",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
        rating: 4.6
    }
];

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCounter) {
        cartCounter.textContent = totalItems;
    }

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        if (cartTotalPrice) cartTotalPrice.textContent = "0";
        return;
    }

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>Qty: ${item.quantity}</p>
            </div>
            <strong>₹${(item.price * item.quantity).toLocaleString("en-IN")}</strong>
        `;
        cartItems.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotalPrice) {
        cartTotalPrice.textContent = total.toLocaleString("en-IN");
    }
}

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
            const name = button.dataset.name;
            const price = Number(button.dataset.price);

            const existingItem = cart.find((item) => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCartUI();
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

function addChatMessage(text, sender) {
    if (!chatMessages) return;

    const message = document.createElement("div");
    message.className = `shoe-chat-message ${sender}`;
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getShoeBotResponse(message) {
    const normalized = message.toLowerCase();
    const shoeTerms = ["shoe", "sneaker", "sneakers", "nike", "air", "jordan", "run", "retro", "fit", "size", "comfort", "drop", "release", "sole", "material", "style", "hype", "train", "court", "lifestyle", "design", "cushion", "support", "width", "performance"];
    const isShoeRelated = shoeTerms.some((term) => normalized.includes(term));

    if (!isShoeRelated) {
        return "I only talk about shoes and sneakers here — ask me about fit, style, comfort, or the latest sneaker drops.";
    }

    if (/(size|fit|wide|narrow|true to size|wide feet|small|big)/i.test(normalized)) {
        return "For Nike sneakers, most people find them true to size. If you have wider feet, try a half size up and look for a roomier toe box.";
    }

    if (/(running|run|marathon|trainer|training)/i.test(normalized)) {
        return "Running shoes should feel responsive, breathable, and cushioned. Look for Nike React or Zoom cushioning for energetic daily runs.";
    }

    if (/(comfort|cushion|padded|support)/i.test(normalized)) {
        return "Comfort comes from plush cushioning, a stable heel counter, and soft upper materials. The best sneaker fit should feel snug but not tight.";
    }

    if (/(release|drop|new|launch|upcoming|coming)/i.test(normalized)) {
        return "Keep an eye on drops for limited colorways and collabs. Most hype releases sell out fast, so bookmark the launch date and sign up for alerts.";
    }

    if (/(style|outfit|look|wear|street|fashion)/i.test(normalized)) {
        return "Pair white or black Nike sneakers with slim denim, joggers, or streetwear layers. High-contrast colorways work great with muted outfits.";
    }

    if (/(jordans|air force|air max|pegasus|vaporfly|cortez|blazer)/i.test(normalized)) {
        return "Those are classic Nike silhouettes. Each model has its own vibe — Jordan for heritage hoops, Air Force 1 for clean street style, and Pegasus for everyday runs.";
    }

    if (/(care|clean|maintenance|wash)/i.test(normalized)) {
        return "Gently wipe sneakers with a damp cloth, use a soft brush on soles, and avoid soaking them. For leather, apply a light conditioner to keep them fresh.";
    }

    return "Great question! The best sneaker choice depends on your activity, fit, and style. Let me know if you want advice for running, everyday wear, or a fresh drop.";
}

function openShoeChat() {
    if (!chatPanel) return;
    chatPanel.classList.add("open");
    chatPanel.setAttribute("aria-hidden", "false");
    if (chatInput) chatInput.focus();
}

function closeShoeChat() {
    if (!chatPanel) return;
    chatPanel.classList.remove("open");
    chatPanel.setAttribute("aria-hidden", "true");
}

if (chatToggle) {
    chatToggle.addEventListener("click", openShoeChat);
}

if (chatClose) {
    chatClose.addEventListener("click", closeShoeChat);
}

if (chatForm) {
    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!chatInput) return;

        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addChatMessage(userMessage, "user");
        chatInput.value = "";

        setTimeout(() => {
            addChatMessage(getShoeBotResponse(userMessage), "bot");
        }, 400);
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
            <button class="add-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });

    attachCartEvents();
}

function loadProducts() {
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

if (cartToggle) {
    cartToggle.addEventListener("click", () => {
        if (cartDrawer) cartDrawer.classList.add("open");
    });
}

if (closeCart) {
    closeCart.addEventListener("click", () => {
        if (cartDrawer) cartDrawer.classList.remove("open");
    });
}

if (logoutBtn) {
    logoutBtn.style.display = "none";
}

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    navbar.style.boxShadow = window.scrollY > 20 ? "0 10px 24px rgba(17, 17, 17, 0.08)" : "none";
});

updateCartUI();
loadProducts();