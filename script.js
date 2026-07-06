let cart = [];
const cartCounter = document.getElementById("cart-count");
const productGrid = document.getElementById("product-grid");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");
const checkoutBtn = document.getElementById("checkout-btn");
const deliveryAddress = document.getElementById("delivery-address");
const paymentMethod = document.getElementById("payment-method");
const upiField = document.getElementById("upi-field");
const upiId = document.getElementById("upi-id");
const approvePaymentBtn = document.getElementById("approve-payment-btn");
const paymentStatus = document.getElementById("payment-status");
const checkoutMessage = document.getElementById("checkout-message");
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
        name: "Nike SB Dunk Low Pro",
        brand: "Nike",
        price: 9695,
        category: "Skate",
        description: "Classic SB cushioning and street-ready style.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
        rating: 4.8
    },
    {
        name: "Jordan Spizike Low",
        brand: "Nike",
        price: 14995,
        category: "Basketball",
        description: "Jordan hybrid design with modern comfort.",
        image: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=500",
        rating: 4.7
    },
    {
        name: "Jordan Son of Mars Low",
        brand: "Nike",
        price: 14995,
        category: "Basketball",
        description: "Futuristic Jordan inspiration designed for everyday wear.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        rating: 4.6
    },
    {
        name: "Nike Air Max Plus VII",
        brand: "Nike",
        price: 16995,
        category: "Lifestyle",
        description: "Bold Air Max style with a sport-inspired finish.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
        rating: 4.8
    },
    {
        name: "Jordan Trunner Flow",
        brand: "Nike",
        price: 7095,
        category: "Training",
        description: "Cushioned crossover training shoe with supportive fit.",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
        rating: 4.5
    },
    {
        name: "Jordan CMFT Era",
        brand: "Nike",
        price: 10795,
        category: "Lifestyle",
        description: "Modern Jordan comfort with classic court cues.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        rating: 4.6
    },
    {
        name: "Nike Air Max 90",
        brand: "Nike",
        price: 10995,
        category: "Lifestyle",
        description: "Retro Air cushioning with iconic street appeal.",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
        rating: 4.8
    },
    {
        name: "Nike Pegasus 41",
        brand: "Nike",
        price: 10999,
        category: "Running",
        description: "Responsive cushioning for daily runs.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air Max 270",
        brand: "Nike",
        price: 10499,
        category: "Lifestyle",
        description: "Large heel Air unit for all-day comfort.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        rating: 4.6
    },
    {
        name: "Nike Air Max 97",
        brand: "Nike",
        price: 11995,
        category: "Lifestyle",
        description: "Wave-inspired design with full-length Air comfort.",
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air Force 1",
        brand: "Nike",
        price: 8999,
        category: "Lifestyle",
        description: "Timeless leather sneaker with iconic fit.",
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500",
        rating: 4.7
    },
    {
        name: "Nike React Infinity Run",
        brand: "Nike",
        price: 12999,
        category: "Running",
        description: "Soft foam designed to make every run feel easy.",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        rating: 4.8
    },
    {
        name: "Nike VaporMax Flyknit 3",
        brand: "Nike",
        price: 15995,
        category: "Running",
        description: "Air-powered comfort with a breathable Flyknit upper.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        rating: 4.8
    },
    {
        name: "Nike Metcon 8",
        brand: "Nike",
        price: 9999,
        category: "Training",
        description: "Gym-ready stability with durable traction.",
        image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500",
        rating: 4.7
    },
    {
        name: "Nike Free RN 5.0",
        brand: "Nike",
        price: 8499,
        category: "Running",
        description: "Flexible shoe for natural movement.",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        rating: 4.5
    },
    {
        name: "Nike Air Max Plus",
        brand: "Nike",
        price: 11999,
        category: "Lifestyle",
        description: "Tuned Air cushioning with iconic design.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air Zoom Pegasus",
        brand: "Nike",
        price: 10999,
        category: "Running",
        description: "Everyday runner with responsive Zoom cushioning.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
        rating: 4.7
    },
    {
        name: "Nike SB Blazer Low",
        brand: "Nike",
        price: 7999,
        category: "Skate",
        description: "Flattened skate silhouette with smooth control.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
        rating: 4.6
    },
    {
        name: "Nike Dunk Low",
        brand: "Nike",
        price: 9995,
        category: "Lifestyle",
        description: "Heritage basketball style made for today's streets.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air Max 720 Horizon",
        brand: "Nike",
        price: 13499,
        category: "Lifestyle",
        description: "Surf-inspired Air Max comfort with bold lines.",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
        rating: 4.6
    },
    {
        name: "Nike Zoom Fly 4",
        brand: "Nike",
        price: 12999,
        category: "Running",
        description: "Speed-fueled running shoe with a responsive plate.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        rating: 4.7
    },
    {
        name: "Nike Space Hippie 04",
        brand: "Nike",
        price: 12995,
        category: "Lifestyle",
        description: "Recycled materials and futuristic style.",
        image: "https://images.unsplash.com/photo-1480435206670-1f67806ff018?w=500",
        rating: 4.6
    },
    {
        name: "Nike Jordan Delta",
        brand: "Nike",
        price: 9999,
        category: "Lifestyle",
        description: "Runner-inspired Jordan shoe for daily energy.",
        image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=500",
        rating: 4.7
    },
    {
        name: "Nike Air VaporMax Plus",
        brand: "Nike",
        price: 14999,
        category: "Lifestyle",
        description: "Air-cushioned style fused with futuristic lines.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
        rating: 4.8
    },
    {
        name: "Nike Air Max 1",
        brand: "Nike",
        price: 10499,
        category: "Lifestyle",
        description: "Original Air Max cushioning with timeless style.",
        image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=500",
        rating: 4.7
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
                ${item.size ? `<p>Size: ${item.size}</p>` : ""}
            </div>
            <div class="cart-item-actions">
                <strong>₹${(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                <button class="remove-cart-btn" data-name="${item.name}" data-size="${item.size || ""}" aria-label="Remove ${item.name}">Remove</button>
            </div>
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

function removeFromCart(name, size = "") {
    const itemIndex = cart.findIndex((item) => item.name === name && item.size === size);
    if (itemIndex === -1) return;
    cart.splice(itemIndex, 1);
    updateCartUI();
    showNotification("Item removed from cart.");
}

function attachCartEvents() {
    const cartButtons = document.querySelectorAll(".add-cart");

    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = Number(button.dataset.price);
            const sizeSelect = button.closest(".card")?.querySelector(".size-select");
            const selectedSize = sizeSelect?.value || "";

            if (!selectedSize) {
                showNotification("Select a shoe size before adding to cart.");
                return;
            }

            const existingItem = cart.find((item) => item.name === name && item.size === selectedSize);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1, size: selectedSize });
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

    if (cartItems) {
        cartItems.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("remove-cart-btn")) {
                const name = target.dataset.name;
                const size = target.dataset.size || "";
                removeFromCart(name, size);
            }
        });
    }
}

let paymentApproved = false;

function resetPaymentApproval() {
    paymentApproved = false;
    if (paymentStatus) {
        paymentStatus.textContent = "Payment approval pending.";
    }
    if (approvePaymentBtn) {
        approvePaymentBtn.disabled = !paymentMethod?.value;
    }
}

function handlePaymentMethodChange() {
    const payment = paymentMethod?.value;
    if (upiField) {
        upiField.style.display = payment === "UPI" ? "grid" : "none";
    }
    if (payment === "UPI" && upiId && !upiId.value) {
        upiId.value = "9318418830@axl";
    }
    resetPaymentApproval();
}

function handlePaymentApproval() {
    const payment = paymentMethod?.value || "";
    const upi = upiId?.value.trim() || "";

    if (!payment) {
        showNotification("Select a payment method before approving payment.");
        return;
    }

    if (payment === "UPI" && !upi) {
        showNotification("Enter your UPI ID before approving payment.");
        return;
    }

    paymentApproved = true;
    if (paymentStatus) {
        paymentStatus.textContent = payment === "UPI" ? `UPI payment approved for ${upi}.` : `Payment approved for ${payment}.`;
    }
    showNotification("Payment approved. You may now place your order.");
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification("Your cart is empty.");
        return;
    }

    const address = deliveryAddress?.value.trim() || "";
    const payment = paymentMethod?.value || "";
    const upi = upiId?.value.trim() || "";

    if (!address) {
        showNotification("Please enter a delivery address.");
        return;
    }

    if (!payment) {
        showNotification("Please select a payment method.");
        return;
    }

    if (payment === "UPI" && !upi) {
        showNotification("Please enter your UPI ID.");
        return;
    }

    if (!paymentApproved) {
        showNotification("Please approve payment before placing the order.");
        return;
    }

    const paymentLabel = payment === "UPI" ? `${payment} (${upi})` : payment;
    showNotification("Order placed successfully!");
    if (checkoutMessage) {
        checkoutMessage.textContent = `Delivering to ${address}. Payment method: ${paymentLabel}.`;
    }

    cart = [];
    updateCartUI();
    if (deliveryAddress) deliveryAddress.value = "";
    if (paymentMethod) paymentMethod.value = "";
    if (upiId) upiId.value = "9318418830@axl";
    if (upiField) upiField.style.display = "none";
    if (cartDrawer) cartDrawer.classList.remove("open");
    resetPaymentApproval();
}

if (paymentMethod) {
    paymentMethod.addEventListener("change", handlePaymentMethodChange);
    handlePaymentMethodChange();
}

if (upiId) {
    upiId.addEventListener("input", resetPaymentApproval);
}

if (approvePaymentBtn) {
    approvePaymentBtn.addEventListener("click", handlePaymentApproval);
}

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleCheckout);
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
            <div class="product-actions">
                <label class="size-label">
                    Size
                    <select class="size-select" aria-label="Select shoe size">
                        <option value="">Select size</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </label>
                <button class="add-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
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
