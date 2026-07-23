// Datos de ejemplo (Mock Database)
const WHATSAPP_NUMBER = "522281616533"; // Número de Antojitos Viveros

const menuData = [
    {
        id: "tacos",
        name: "Tacos",
        description: "Deliciosos tacos recién hechos.",
        price: 18.00,
        category: "Tacos",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige tu ingrediente:",
        options: [
            { name: "Pastor", price: 18.00 },
            { name: "Cabeza de cerdo", price: 18.00 },
            { name: "Suadero de res", price: 20.00 }
        ],
        extras: [
            { name: "Agregar Queso de hebra", price: 4.00 }
        ],
        exclusions: ["Sin cebolla", "Sin cilantro", "Salsa aparte (Roja)", "Salsa aparte (Chile seco)", "Salsa aparte (Verde)"]
    },
    {
        id: "tacos_dorados",
        name: "Orden Tacos Dorados",
        description: "Orden de 3 tacos dorados crujientes con lechuga, crema y queso.",
        price: 18.00,
        category: "Tacos",
        image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige el relleno:",
        options: [
            { name: "Pollo", price: 18.00 },
            { name: "Papa", price: 18.00 },
            { name: "Queso de hebra", price: 18.00 }
        ],
        exclusions: ["Sin lechuga", "Sin crema", "Sin queso", "Salsa aparte (Roja)", "Salsa aparte (Chile seco)", "Salsa aparte (Verde)"]
    },
    {
        id: "tortas",
        name: "Tortas",
        description: "Tortas bien servidas en pan calientito.",
        price: 50.00,
        category: "Tortas",
        image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige el ingrediente principal:",
        options: [
            { name: "Pastor", price: 50.00 },
            { name: "Suadero de res", price: 50.00 },
            { name: "Cabeza de cerdo", price: 50.00 },
            { name: "Pollo guisado", price: 50.00 },
            { name: "Pollo hervido", price: 50.00 }
        ],
        exclusions: ["Sin lechuga", "Sin tomate", "Sin aguacate", "Sin queso de hebra", "Salsa aparte (Roja)", "Salsa aparte (Chile seco)", "Salsa aparte (Verde)"]
    },
    {
        id: "empanadas",
        name: "Empanadas",
        description: "Empanadas crujientes (llevan lechuga, crema y queso).",
        price: 18.00,
        category: "Empanadas",
        image: "https://images.unsplash.com/photo-1628198622240-a309e3922c07?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige el relleno principal:",
        options: [
            { name: "Pollo guisado", price: 18.00 },
            { name: "Picadillo de res", price: 18.00 },
            { name: "Champiñón", price: 18.00 },
            { name: "Queso de hebra", price: 18.00 },
            { name: "Papa", price: 18.00 }
        ],
        extras: [
            { name: "+ Ingrediente (Pollo guisado)", price: 4.00 },
            { name: "+ Ingrediente (Picadillo)", price: 4.00 },
            { name: "+ Ingrediente (Champiñón)", price: 4.00 },
            { name: "+ Ingrediente (Queso)", price: 4.00 },
            { name: "+ Ingrediente (Papa)", price: 4.00 }
        ],
        exclusions: ["Sin lechuga", "Sin crema", "Sin queso", "Salsa aparte (Roja)", "Salsa aparte (Chile seco)", "Salsa aparte (Verde)"]
    },
    {
        id: "gorditas_picadas",
        name: "Gorditas Picadas",
        description: "Base con papa, cebolla y queso rayado.",
        price: 22.00,
        category: "Gorditas",
        image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige la base:",
        options: [
            { name: "Frijol", price: 22.00 },
            { name: "Salsa Verde", price: 22.00 },
            { name: "Salsa de Chile Seco", price: 22.00 },
            { name: "Salsa Roja", price: 22.00 }
        ],
        extras: [
            { name: "Agregar Cabeza de cerdo", price: 3.00 },
            { name: "Agregar Pastor", price: 3.00 },
            { name: "Agregar Suadero de res", price: 3.00 }
        ],
        exclusions: ["Sin cebolla", "Sin papa", "Sin queso rayado", "Salsa aparte (Roja)", "Salsa aparte (Chile seco)", "Salsa aparte (Verde)"]
    },
    {
        id: "gorditas_tapadas",
        name: "Gorditas Tapadas",
        description: "Rellenas y calientitas.",
        price: 18.00,
        category: "Gorditas",
        image: "https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige el relleno:",
        options: [
            { name: "Frijol", price: 18.00 },
            { name: "Chicharrón", price: 18.00 }
        ],
        extras: [
            { name: "Hacer combinada (Frijol + Chicharrón)", price: 4.00 },
            { name: "Agregar Pastor", price: 4.00 },
            { name: "Agregar Suadero de res", price: 4.00 },
            { name: "Agregar Cabeza de cerdo", price: 4.00 }
        ],
        exclusions: ["Salsa aparte (Roja)", "Salsa aparte (Chile seco)", "Salsa aparte (Verde)"]
    },
    {
        id: "tostadas",
        name: "Tostadas",
        description: "Con frijol, lechuga, tomate, aguacate, crema y queso.",
        price: 18.00,
        category: "Tostadas",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige tu ingrediente principal:",
        options: [
            { name: "Pollo hervido", price: 18.00 },
            { name: "Pollo guisado", price: 18.00 },
            { name: "Queso de hebra", price: 18.00 },
            { name: "Picadillo de res", price: 18.00 }
        ],
        exclusions: ["Sin frijol", "Sin lechuga", "Sin tomate", "Sin aguacate", "Sin crema", "Sin queso", "Salsa aparte (Roja)", "Salsa aparte (Chile seco)", "Salsa aparte (Verde)"]
    },
    {
        id: "platanos_fritos",
        name: "Plátanos Fritos",
        description: "Plátanos fritos calientitos. Se sirven con lechera, media crema y queso.",
        price: 35.00,
        category: "Postres",
        image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Elige cómo los quieres:",
        options: [
            { name: "Con lechera, crema y queso", price: 35.00 },
            { name: "Solo lechera", price: 35.00 },
            { name: "Solo crema y queso", price: 35.00 },
            { name: "Sin acompañamiento", price: 35.00 }
        ],
        exclusions: ["Sin lechera", "Sin media crema", "Sin queso"]
    },
    {
        id: "refrescos",
        name: "Refresco",
        description: "Coca-Cola 500ml de cristal (retornable). Bien fría para acompañar tu pedido.",
        price: 25.00,
        category: "Bebidas",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=800",
        optionsTitle: "Selecciona:",
        options: [
            { name: "Coca-Cola 500ml cristal", price: 25.00 }
        ],
        exclusions: []
    }
];

// Estado de la aplicación
let cart = [];
let activeCategory = "Todas";
let productBeingConfigured = null;

// Elementos del DOM
const categoriesContainer = document.getElementById("categoriesContainer");
const menuContainer = document.getElementById("menuContainer");
const cartCount = document.getElementById("cartCount");
const cartModalOverlay = document.getElementById("cartModalOverlay");
const cartTrigger = document.getElementById("cartTrigger");
const closeCartBtn = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalValue = document.getElementById("cartTotalValue");
const checkoutBtn = document.getElementById("checkoutBtn");
const customerNameInput = document.getElementById("customerName");
const customerAddressInput = document.getElementById("customerAddress");

// Elementos Modal Opciones
const optionsModalOverlay = document.getElementById("optionsModalOverlay");
const closeOptionsBtn = document.getElementById("closeOptions");
const optionsModalTitle = document.getElementById("optionsModalTitle");
const optionsModalDesc = document.getElementById("optionsModalDesc");
const baseOptionsContainer = document.getElementById("baseOptionsContainer");
const optionsList = document.getElementById("optionsList");
const extrasContainer = document.getElementById("extrasContainer");
const extrasList = document.getElementById("extrasList");
const exclusionsContainer = document.getElementById("exclusionsContainer");
const exclusionsList = document.getElementById("exclusionsList");
const confirmOptionBtn = document.getElementById("confirmOptionBtn");
const optionsModalPrice = document.getElementById("optionsModalPrice");

// Elementos Landing Screen
const landingScreen = document.getElementById("landingScreen");
const enterMenuBtn = document.getElementById("enterMenuBtn");

// Inicialización
function init() {
    renderCategories();
    renderMenu();
    setupEventListeners();
    updateCartUI();
}

function getCategories() {
    const cats = new Set(menuData.map(item => item.category));
    return ["Todas", ...Array.from(cats)];
}

function renderCategories() {
    const categories = getCategories();
    categoriesContainer.innerHTML = '';

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = `category-btn ${category === activeCategory ? 'active' : ''}`;
        btn.textContent = category;
        btn.addEventListener("click", () => {
            activeCategory = category;
            renderCategories();
            renderMenu();
        });
        categoriesContainer.appendChild(btn);
    });
}

function renderMenu() {
    menuContainer.innerHTML = '';
    
    const filteredData = activeCategory === "Todas" 
        ? menuData 
        : menuData.filter(item => item.category === activeCategory);

    filteredData.forEach(item => {
        const article = document.createElement("article");
        article.className = "menu-item";
        
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.className = "item-img";

        const contentDiv = document.createElement("div");
        contentDiv.className = "item-content";

        const title = document.createElement("h3");
        title.className = "item-title";
        title.textContent = item.name;

        const desc = document.createElement("p");
        desc.className = "item-desc";
        desc.textContent = item.description;

        const footer = document.createElement("div");
        footer.className = "item-footer";

        // Precio "Desde"
        const minPrice = Math.min(...item.options.map(o => o.price));
        const price = document.createElement("span");
        price.className = "item-price";
        price.textContent = `Desde $${minPrice.toFixed(2)}`;

        const addBtn = document.createElement("button");
        addBtn.className = "add-to-cart";
        addBtn.innerHTML = '<i class="ph ph-plus"></i>';
        addBtn.setAttribute("aria-label", "Configurar y agregar");
        addBtn.onclick = () => openOptionsModal(item);

        footer.appendChild(price);
        footer.appendChild(addBtn);

        contentDiv.appendChild(title);
        contentDiv.appendChild(desc);
        contentDiv.appendChild(footer);

        article.appendChild(img);
        article.appendChild(contentDiv);
        
        menuContainer.appendChild(article);
    });
}

// Modal de Opciones
function openOptionsModal(product) {
    productBeingConfigured = product;
    
    optionsModalTitle.textContent = product.name;
    optionsModalDesc.textContent = product.optionsTitle;
    
    // 1. Render Base Options (Cantidades Individuales)
    optionsList.innerHTML = '';
    product.options.forEach((opt, index) => {
        const row = document.createElement('div');
        row.className = 'option-qty-row';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${opt.name} ($${opt.price.toFixed(2)})`;
        
        const qtyDiv = document.createElement('div');
        qtyDiv.className = 'modal-quantity-selector';
        qtyDiv.style.marginBottom = '0'; // override margin
        
        const minusBtn = document.createElement('button');
        minusBtn.className = 'qty-btn';
        minusBtn.textContent = '-';
        
        const qtySpan = document.createElement('span');
        qtySpan.className = 'base-option-qty';
        qtySpan.dataset.name = opt.name;
        qtySpan.dataset.price = opt.price;
        
        const plusBtn = document.createElement('button');
        plusBtn.className = 'qty-btn';
        plusBtn.textContent = '+';
        
        let currentQty = index === 0 ? 1 : 0; // Por defecto 1 de la primera opción
        qtySpan.textContent = currentQty;

        minusBtn.addEventListener('click', () => {
            if (currentQty > 0) {
                currentQty--;
                qtySpan.textContent = currentQty;
                updateModalPrice();
            }
        });

        plusBtn.addEventListener('click', () => {
            currentQty++;
            qtySpan.textContent = currentQty;
            updateModalPrice();
        });
        
        qtyDiv.appendChild(minusBtn);
        qtyDiv.appendChild(qtySpan);
        qtyDiv.appendChild(plusBtn);
        
        row.appendChild(nameSpan);
        row.appendChild(qtyDiv);
        optionsList.appendChild(row);
    });

    // 2. Render Extras (Checkboxes)
    if (product.extras && product.extras.length > 0) {
        extrasContainer.style.display = 'block';
        extrasList.innerHTML = '';
        product.extras.forEach(extra => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'productExtra';
            input.value = extra.name;
            input.dataset.price = extra.price;
            input.addEventListener('change', updateModalPrice);
            
            const span = document.createElement('span');
            span.textContent = `${extra.name} (+$${extra.price.toFixed(2)})`;
            
            label.appendChild(input);
            label.appendChild(span);
            extrasList.appendChild(label);
        });
    } else {
        extrasContainer.style.display = 'none';
    }

    // 3. Render Exclusions (Checkboxes no cost)
    if (product.exclusions && product.exclusions.length > 0) {
        exclusionsContainer.style.display = 'block';
        exclusionsList.innerHTML = '';
        product.exclusions.forEach(excl => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'productExclusion';
            input.value = excl;
            
            const span = document.createElement('span');
            span.textContent = excl;
            
            label.appendChild(input);
            label.appendChild(span);
            exclusionsList.appendChild(label);
        });
    } else {
        exclusionsContainer.style.display = 'none';
    }
    
    updateModalPrice();
    optionsModalOverlay.classList.add('active');
}

function updateModalPrice() {
    if (!productBeingConfigured) return;

    let totalBasePrice = 0;
    let totalBaseQty = 0;
    
    document.querySelectorAll('.base-option-qty').forEach(el => {
        const qty = parseInt(el.textContent);
        if (qty > 0) {
            totalBaseQty += qty;
            totalBasePrice += qty * parseFloat(el.dataset.price);
        }
    });
    
    let extrasCostPerItem = 0;
    const selectedExtras = document.querySelectorAll('input[name="productExtra"]:checked');
    selectedExtras.forEach(extra => {
        extrasCostPerItem += parseFloat(extra.dataset.price);
    });

    const totalPrice = totalBasePrice + (extrasCostPerItem * totalBaseQty);
    optionsModalPrice.textContent = `($${totalPrice.toFixed(2)})`;
}

function confirmOptionsAndAddToCart() {
    if (!productBeingConfigured) return;
    
    let totalBaseQty = 0;
    let totalBasePrice = 0;
    const baseDetails = [];
    
    document.querySelectorAll('.base-option-qty').forEach(el => {
        const qty = parseInt(el.textContent);
        if (qty > 0) {
            totalBaseQty += qty;
            totalBasePrice += qty * parseFloat(el.dataset.price);
            baseDetails.push(`${qty}x ${el.dataset.name}`);
        }
    });

    if (totalBaseQty === 0) {
        alert("Selecciona al menos una opción para continuar.");
        return;
    }

    let extrasCostPerItem = 0;
    const extras = [];
    document.querySelectorAll('input[name="productExtra"]:checked').forEach(el => {
        extras.push(el.value);
        extrasCostPerItem += parseFloat(el.dataset.price);
    });

    const exclusions = [];
    document.querySelectorAll('input[name="productExclusion"]:checked').forEach(el => {
        exclusions.push(el.value);
    });
    
    const totalPriceForBundle = totalBasePrice + (extrasCostPerItem * totalBaseQty);
    
    // Create detailed string for the cart UI
    let detailsString = baseDetails.join(', ');
    if (extras.length > 0) detailsString += ` + ${extras.join(' + ')}`;
    if (exclusions.length > 0) detailsString += ` (${exclusions.join(', ')})`;

    // Create unique ID so identical configurations stack, but different ones don't
    const configHash = btoa(encodeURIComponent(detailsString)).substring(0, 15);
    const cartItemId = `${productBeingConfigured.id}-${configHash}`;
    
    const cartItem = {
        id: cartItemId,
        productId: productBeingConfigured.id,
        name: productBeingConfigured.name,
        details: detailsString,
        price: totalPriceForBundle,
        image: productBeingConfigured.image,
        quantity: 1 // A complete bundle represents 1 quantity in cart
    };

    addToCart(cartItem);
    
    optionsModalOverlay.classList.remove('active');
    productBeingConfigured = null;
    
    cartTrigger.style.transform = 'scale(1.2)';
    setTimeout(() => cartTrigger.style.transform = 'scale(1)', 200);
}

// Lógica del Carrito
function addToCart(cartItem) {
    const existingItem = cart.find(item => item.id === cartItem.id);
    if (existingItem) {
        existingItem.quantity += cartItem.quantity;
    } else {
        cart.push(cartItem);
    }
    updateCartUI();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    updateCartUI();
}

function changeQuantity(cartItemId, delta) {
    const item = cart.find(i => i.id === cartItemId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío</p>';
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        cart.forEach(item => {
            const div = document.createElement("div");
            div.className = "cart-item";

            const img = document.createElement("img");
            img.src = item.image;
            img.className = "cart-item-img";
            img.alt = item.name;

            const infoDiv = document.createElement("div");
            infoDiv.className = "cart-item-info";
            
            const title = document.createElement("div");
            title.className = "cart-item-title";
            title.textContent = item.name;

            const details = document.createElement("div");
            details.style.fontSize = "0.8rem";
            details.style.color = "var(--text-muted)";
            details.style.marginBottom = "0.3rem";
            details.textContent = item.details;

            const price = document.createElement("div");
            price.className = "cart-item-price";
            price.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

            const qtyDiv = document.createElement("div");
            qtyDiv.className = "cart-item-qty";
            
            const minusBtn = document.createElement("button");
            minusBtn.className = "qty-btn";
            minusBtn.textContent = "-";
            minusBtn.onclick = () => changeQuantity(item.id, -1);

            const qtySpan = document.createElement("span");
            qtySpan.textContent = item.quantity;

            const plusBtn = document.createElement("button");
            plusBtn.className = "qty-btn";
            plusBtn.textContent = "+";
            plusBtn.onclick = () => changeQuantity(item.id, 1);

            qtyDiv.appendChild(minusBtn);
            qtyDiv.appendChild(qtySpan);
            qtyDiv.appendChild(plusBtn);

            infoDiv.appendChild(title);
            infoDiv.appendChild(details);
            infoDiv.appendChild(price);
            infoDiv.appendChild(qtyDiv);

            const removeBtn = document.createElement("button");
            removeBtn.className = "remove-item";
            removeBtn.innerHTML = '<i class="ph ph-trash"></i>';
            removeBtn.onclick = () => removeFromCart(item.id);

            div.appendChild(img);
            div.appendChild(infoDiv);
            div.appendChild(removeBtn);

            cartItemsContainer.appendChild(div);
        });
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalValue.textContent = `$${total.toFixed(2)}`;
}

// Lógica de WhatsApp
function generateWhatsAppLink() {
    if (cart.length === 0) return;

    const name = customerNameInput.value.trim();
    const address = customerAddressInput.value.trim();

    let message = `*NUEVO PEDIDO*%0A`;
    message += `------------------------%0A`;
    
    if (name) message += `*Cliente:* ${name}%0A`;
    if (address) message += `*Mesa/Dirección:* ${address}%0A`;
    
    message += `------------------------%0A`;
    
    let total = 0;
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `*${item.quantity}x ${item.name}* - $${subtotal.toFixed(2)}%0A`;
        message += `   > ${item.details}%0A`;
    });

    message += `------------------------%0A`;
    message += `*TOTAL: $${total.toFixed(2)}*`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Event Listeners
function setupEventListeners() {
    cartTrigger.addEventListener('click', () => {
        cartModalOverlay.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModalOverlay.classList.remove('active');
    });

    closeOptionsBtn.addEventListener('click', () => {
        optionsModalOverlay.classList.remove('active');
    });

    confirmOptionBtn.addEventListener('click', confirmOptionsAndAddToCart);

    // Quantity selector in modal removed as it's now per-ingredient

    // Cerrar clickeando afuera (para ambos modales)
    cartModalOverlay.addEventListener('click', (e) => {
        if (e.target === cartModalOverlay) {
            cartModalOverlay.classList.remove('active');
        }
    });

    optionsModalOverlay.addEventListener('click', (e) => {
        if (e.target === optionsModalOverlay) {
            optionsModalOverlay.classList.remove('active');
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (!customerNameInput.value.trim()) {
            alert("Por favor, ingresa tu nombre para el pedido.");
            customerNameInput.focus();
            return;
        }
        generateWhatsAppLink();
    });

    // Landing screen logic
    if (enterMenuBtn) {
        enterMenuBtn.addEventListener('click', () => {
            landingScreen.classList.add('hidden');
            // Remove from DOM after transition to free up clicks/memory
            setTimeout(() => {
                landingScreen.style.display = 'none';
            }, 600);
        });
    }
}

// Arrancar la app
init();
