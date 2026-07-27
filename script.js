// Datos de ejemplo (Mock Database)
const WHATSAPP_NUMBER = "522281616533"; // Número de Antojitos Viveros

const menuData = [
    {
        id: "empanadas",
        name: "Empanadas",
        description: "Empanadas crujientes (llevan lechuga, crema y queso).",
        price: 18.00,
        category: "Empanadas",
        image: "empanada.png",
        optionsTitle: "Elige el relleno principal:",
        // allowExtra: el extra que puede agregarse a esta opción (doble ingrediente)
        // cebollaCilantro: si al elegir el extra-queso aparece opción de cebolla/cilantro
        options: [
            { name: "Pollo guisado",  price: 18.00 },
            { name: "Picadillo de res", price: 18.00 },
            { name: "Champiñón",      price: 18.00, allowExtra: { name: "+ Queso de hebra", price: 4.00 } },
            { name: "Queso de hebra", price: 18.00, allowExtra: { name: "+ Ingrediente doble", price: 4.00,
                suboptions: ["Papa", "Champiñón", "Suadero", "Pastor", "Cabeza"] } },
            { name: "Papa",           price: 18.00, allowExtra: { name: "+ Queso de hebra", price: 4.00 } },
            { name: "Suadero",        price: 18.00, allowExtra: { name: "+ Queso de hebra", price: 4.00 }, cebollaCilantro: true },
            { name: "Pastor",         price: 18.00, allowExtra: { name: "+ Queso de hebra", price: 4.00 }, cebollaCilantro: true },
            { name: "Cabeza",         price: 18.00, allowExtra: { name: "+ Queso de hebra", price: 4.00 }, cebollaCilantro: true }
        ],
        exclusions: ["Naturales", "Sin lechuga", "Sin crema", "Sin queso"]
    },
    {
        id: "tacos",
        name: "Tacos",
        description: "Deliciosos tacos recién hechos.",
        price: 18.00,
        category: "Tacos",
        image: "taco de pastor.png",
        optionsTitle: "Elige tu ingrediente:",
        options: [
            { name: "Pastor", price: 18.00 },
            { name: "Cabeza de cerdo", price: 18.00 },
            { name: "Suadero de res", price: 20.00 }
        ],
        extras: [
            { name: "Agregar Queso de hebra", price: 4.00 }
        ],
        exclusions: ["Naturales", "Sin cebolla", "Sin cilantro"]
    },
    {
        id: "gorditas_picadas",
        name: "Gorditas Picadas",
        description: "Sencilla: frijol o salsa + cebolla + queso. Regular: lleva además papa.",
        price: 18.00,
        category: "Gorditas",
        image: "picada.png",
        optionsTitle: "Elige tu opción y base:",
        options: [
            // — Sencillas (sin papa, sin ingrediente adicional) —
            { name: "🟡 Sencilla – Frijol",             price: 18.00, noExtras: true },
            { name: "🟡 Sencilla – Salsa Verde",         price: 18.00, noExtras: true },
            { name: "🟡 Sencilla – Salsa Chile Seco",    price: 18.00, noExtras: true },
            { name: "🟡 Sencilla – Salsa Roja",          price: 18.00, noExtras: true },
            // — Regular (con papa) —
            { name: "🔴 Con Papa – Frijol",              price: 22.00 },
            { name: "🔴 Con Papa – Salsa Verde",         price: 22.00 },
            { name: "🔴 Con Papa – Salsa Chile Seco",    price: 22.00 },
            { name: "🔴 Con Papa – Salsa Roja",          price: 22.00 }
        ],
        extras: [
            { name: "Agregar Cabeza de cerdo", price: 3.00 },
            { name: "Agregar Pastor", price: 3.00 },
            { name: "Agregar Suadero de res", price: 3.00 }
        ],
        exclusions: ["Naturales", "Sin cebolla", "Sin queso rayado"]
    },
    {
        id: "gorditas_tapadas",
        name: "Gorditas Tapadas",
        description: "Rellenas y calientitas.",
        price: 18.00,
        category: "Gorditas",
        image: "tapada.png",
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
        exclusions: ["Naturales"]
    },
    {
        id: "tostadas",
        name: "Tostadas",
        description: "Con frijol, lechuga, tomate, aguacate, crema y queso.",
        price: 18.00,
        category: "Tostadas",
        image: "tostada.png",
        optionsTitle: "Elige tu ingrediente principal:",
        options: [
            { name: "Pollo hervido", price: 18.00 },
            { name: "Pollo guisado", price: 18.00 },
            { name: "Queso de hebra", price: 18.00 },
            { name: "Picadillo de res", price: 18.00 }
        ],
        exclusions: ["Sin lechuga", "Sin tomate", "Sin aguacate", "Sin crema", "Sin queso"]
    },
    {
        id: "tortas",
        name: "Tortas",
        description: "Tortas bien servidas en pan calientito.",
        price: 50.00,
        category: "Tortas",
        image: "torta.png",
        optionsTitle: "Elige el ingrediente principal:",
        options: [
            { name: "Pastor", price: 50.00 },
            { name: "Suadero de res", price: 50.00 },
            { name: "Cabeza de cerdo", price: 50.00 },
            { name: "Pollo guisado", price: 50.00 },
            { name: "Pollo hervido", price: 50.00 }
        ],
        exclusions: ["Sin lechuga", "Sin tomate", "Sin aguacate", "Sin queso de hebra"]
    },
    {
        id: "garnachas",
        name: "Garnachas",
        description: "Garnachas tradicionales con la salsa y carne de tu elección.",
        price: 20.00,
        category: "Garnachas",
        image: "garnacha.png",
        optionsTitle: "Elige tu combinación:",
        options: [
            { name: "Salsa Roja con Suadero", price: 20.00 },
            { name: "Salsa Roja con Cabeza de cerdo", price: 20.00 },
            { name: "Chile Seco con Suadero", price: 20.00 },
            { name: "Chile Seco con Cabeza de cerdo", price: 20.00 }
        ],
        exclusions: ["Naturales", "Sin cebolla"]
    },
    {
        id: "quesadillas",
        name: "Quesadillas",
        description: "Deliciosas quesadillas con el guiso de tu preferencia.",
        price: 22.00,
        category: "Quesadillas",
        image: "quesadilla.png",
        optionsTitle: "Elige tu guiso:",
        options: [
            { name: "Suadero", price: 22.00 },
            { name: "Pastor", price: 22.00 },
            { name: "Cabeza", price: 22.00 },
            { name: "Pollo hervido", price: 22.00 },
            { name: "Pollo guisado", price: 22.00 },
            { name: "Picadillo", price: 22.00 },
            { name: "Champiñón", price: 22.00 },
            { name: "Papa", price: 22.00 },
            { name: "Chicharrón", price: 22.00 }
        ],
        exclusions: ["Naturales"]
    },
    {
        id: "tacos_dorados",
        name: "Orden Tacos Dorados",
        description: "Orden de 3 tacos dorados crujientes con lechuga, crema y queso.",
        price: 18.00,
        category: "Tacos Dorados",
        image: "Taco dorado.png",
        optionsTitle: "Elige el relleno:",
        options: [
            { name: "Pollo", price: 18.00 },
            { name: "Papa", price: 18.00 },
            { name: "Queso de hebra", price: 18.00 }
        ],
        exclusions: ["Naturales", "Sin lechuga", "Sin crema", "Sin queso"]
    },
    {
        id: "platanos_fritos",
        name: "Plátanos Fritos",
        description: "Plátanos fritos calientitos. Se sirven con lechera, media crema y queso.",
        price: 35.00,
        category: "Postres",
        image: "Platano frito.png",
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
        image: "cocacola.png",
        optionsTitle: "Selecciona:",
        options: [
            { name: "Coca-Cola 500ml cristal", price: 25.00 }
        ],
        exclusions: []
    }
];

// Estado de la aplicación
let orderNumber = parseInt(localStorage.getItem('orderNumber')) || 1;
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
const paymentMethodInput = document.getElementById("paymentMethod");
const transferDetailsDiv = document.getElementById("transferDetails");

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
    applySeasonalTheme();
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
        img.loading = "lazy";

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

    
    // 1. Render Base Options (Cantidades Individuales) y sus Extras
    optionsList.innerHTML = '';
    
    // Ocultar el contenedor de extras global ya que ahora se mostrarán por sabor
    if (extrasContainer) extrasContainer.style.display = 'none';

    product.options.forEach((opt, index) => {
        const optionWrapper = document.createElement('div');
        optionWrapper.className = 'option-wrapper';
        optionWrapper.style.marginBottom = '12px';
        optionWrapper.style.paddingBottom = '12px';
        optionWrapper.style.borderBottom = '1px solid var(--border-light)';

        const row = document.createElement('div');
        row.className = 'option-qty-row';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${opt.name} ($${opt.price.toFixed(2)})`;
        
        const qtyDiv = document.createElement('div');
        qtyDiv.className = 'modal-quantity-selector';
        qtyDiv.style.marginBottom = '0';
        
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
        
        let currentQty = 0;
        qtySpan.textContent = currentQty;

        // Contenedor de extras para esta opción (solo si allowExtra está definido)
        const flavorExtrasContainer = document.createElement('div');
        flavorExtrasContainer.className = 'flavor-extras';
        flavorExtrasContainer.style.display = 'none';
        flavorExtrasContainer.style.paddingLeft = '15px';
        flavorExtrasContainer.style.marginTop = '8px';
        
        const flavorExtrasState = [];
        let hasExtras = false;

        // Solo mostrar extras si esta opción específica tiene allowExtra
        if (opt.allowExtra) {
            hasExtras = true;
            const extra = opt.allowExtra;

            // --- Fila del extra (con contador) ---
            const extraRow = document.createElement('div');
            extraRow.className = 'option-qty-row';
            extraRow.style.padding = '4px 0';
            
            const extraNameSpan = document.createElement('span');
            extraNameSpan.textContent = `${extra.name} (+$${extra.price.toFixed(2)})`;
            extraNameSpan.style.color = 'var(--text-muted)';
            extraNameSpan.style.fontSize = '0.9rem';
            
            const extraQtyDiv = document.createElement('div');
            extraQtyDiv.className = 'modal-quantity-selector';
            extraQtyDiv.style.marginBottom = '0';
            extraQtyDiv.style.transform = 'scale(0.85)';
            extraQtyDiv.style.transformOrigin = 'right center';
            
            const eMinusBtn = document.createElement('button');
            eMinusBtn.className = 'qty-btn';
            eMinusBtn.textContent = '-';
            
            const eQtySpan = document.createElement('span');
            eQtySpan.className = 'flavor-extra-qty';
            eQtySpan.dataset.name = extra.name;
            eQtySpan.dataset.price = extra.price;
            
            const ePlusBtn = document.createElement('button');
            ePlusBtn.className = 'qty-btn';
            ePlusBtn.textContent = '+';
            
            let eCurrentQty = 0;
            eQtySpan.textContent = eCurrentQty;

            const stateObj = { setQty: (val) => { eCurrentQty = val; eQtySpan.textContent = val; }, getQty: () => eCurrentQty };
            flavorExtrasState.push(stateObj);

            // Si la opción base tiene subopciones (ej. Queso → Papa/Champiñón/Suadero/Pastor/Cabeza)
            let suboptionSelect = null;
            if (extra.suboptions && extra.suboptions.length > 0) {
                const subRow = document.createElement('div');
                subRow.style.padding = '4px 0';
                subRow.style.fontSize = '0.88rem';
                subRow.style.color = 'var(--text-muted)';

                const subLabel = document.createElement('span');
                subLabel.textContent = '¿Cuál ingrediente doble?  ';

                suboptionSelect = document.createElement('select');
                suboptionSelect.className = 'subopt-select';
                suboptionSelect.dataset.role = 'suboptionSelect';
                suboptionSelect.style.padding = '2px 6px';
                suboptionSelect.style.borderRadius = '6px';
                suboptionSelect.style.border = '1px solid var(--border-light)';
                suboptionSelect.style.fontSize = '0.88rem';
                suboptionSelect.style.fontFamily = "'Outfit', sans-serif";
                suboptionSelect.style.display = 'none'; // se muestra al elegir qty > 0

                extra.suboptions.forEach(sub => {
                    const op = document.createElement('option');
                    op.value = sub;
                    op.textContent = sub;
                    suboptionSelect.appendChild(op);
                });

                subRow.appendChild(subLabel);
                subRow.appendChild(suboptionSelect);
                flavorExtrasContainer.appendChild(subRow);
            }

            eMinusBtn.addEventListener('click', () => {
                if (eCurrentQty > 0) {
                    stateObj.setQty(eCurrentQty - 1);
                    if (suboptionSelect) suboptionSelect.style.display = eCurrentQty > 0 ? 'inline-block' : 'none';
                    // Ocultar cebolla/cilantro si qty llega a 0
                    if (eCurrentQty === 0 && opt.cebollaCilantro) {
                        const ccDiv = flavorExtrasContainer.querySelector('.cebolla-cilantro-row');
                        if (ccDiv) ccDiv.style.display = 'none';
                    }
                    updateModalPrice();
                }
            });

            ePlusBtn.addEventListener('click', () => {
                if (eCurrentQty < currentQty) {
                    stateObj.setQty(eCurrentQty + 1);
                    if (suboptionSelect) suboptionSelect.style.display = 'inline-block';
                    // Mostrar cebolla/cilantro si aplica
                    if (opt.cebollaCilantro) {
                        const ccDiv = flavorExtrasContainer.querySelector('.cebolla-cilantro-row');
                        if (ccDiv) ccDiv.style.display = 'flex';
                    }
                    updateModalPrice();
                }
            });
            
            extraQtyDiv.appendChild(eMinusBtn);
            extraQtyDiv.appendChild(eQtySpan);
            extraQtyDiv.appendChild(ePlusBtn);
            
            extraRow.appendChild(extraNameSpan);
            extraRow.appendChild(extraQtyDiv);
            flavorExtrasContainer.appendChild(extraRow);

            // Cebolla y cilantro (solo para Suadero, Pastor, Cabeza)
            if (opt.cebollaCilantro) {
                const ccDiv = document.createElement('div');
                ccDiv.className = 'cebolla-cilantro-row option-qty-row';
                ccDiv.style.display = 'none';
                ccDiv.style.padding = '4px 0';
                ccDiv.style.gap = '10px';
                ccDiv.style.flexWrap = 'wrap';

                const ccLabel = document.createElement('span');
                ccLabel.textContent = 'Queso con:';
                ccLabel.style.color = 'var(--text-muted)';
                ccLabel.style.fontSize = '0.88rem';
                ccDiv.appendChild(ccLabel);

                ['Cebolla', 'Cilantro'].forEach(item => {
                    const lbl = document.createElement('label');
                    lbl.style.display = 'flex';
                    lbl.style.alignItems = 'center';
                    lbl.style.gap = '4px';
                    lbl.style.fontSize = '0.88rem';
                    lbl.style.cursor = 'pointer';
                    lbl.style.color = 'var(--text-muted)';

                    const chk = document.createElement('input');
                    chk.type = 'checkbox';
                    chk.className = 'cc-checkbox';
                    chk.dataset.item = item;

                    lbl.appendChild(chk);
                    lbl.appendChild(document.createTextNode(item));
                    ccDiv.appendChild(lbl);
                });

                flavorExtrasContainer.appendChild(ccDiv);
            }
        } else if (!opt.noExtras && product.extras && product.extras.length > 0) {
            // Productos que usan el sistema global de extras (no empanadas, no sencillas)
            hasExtras = true;
            product.extras.forEach((extra) => {
                const extraRow = document.createElement('div');
                extraRow.className = 'option-qty-row';
                extraRow.style.padding = '4px 0';
                
                const extraNameSpan = document.createElement('span');
                extraNameSpan.textContent = `+ ${extra.name} (+$${extra.price.toFixed(2)})`;
                extraNameSpan.style.color = 'var(--text-muted)';
                extraNameSpan.style.fontSize = '0.9rem';
                
                const extraQtyDiv = document.createElement('div');
                extraQtyDiv.className = 'modal-quantity-selector';
                extraQtyDiv.style.marginBottom = '0';
                extraQtyDiv.style.transform = 'scale(0.85)';
                extraQtyDiv.style.transformOrigin = 'right center';
                
                const eMinusBtn = document.createElement('button');
                eMinusBtn.className = 'qty-btn';
                eMinusBtn.textContent = '-';
                
                const eQtySpan = document.createElement('span');
                eQtySpan.className = 'flavor-extra-qty';
                eQtySpan.dataset.name = extra.name;
                eQtySpan.dataset.price = extra.price;
                
                const ePlusBtn = document.createElement('button');
                ePlusBtn.className = 'qty-btn';
                ePlusBtn.textContent = '+';
                
                let eCurrentQty = 0;
                eQtySpan.textContent = eCurrentQty;

                const stateObj = { setQty: (val) => { eCurrentQty = val; eQtySpan.textContent = val; }, getQty: () => eCurrentQty };
                flavorExtrasState.push(stateObj);

                eMinusBtn.addEventListener('click', () => {
                    if (eCurrentQty > 0) {
                        stateObj.setQty(eCurrentQty - 1);
                        updateModalPrice();
                    }
                });

                ePlusBtn.addEventListener('click', () => {
                    if (eCurrentQty < currentQty) {
                        stateObj.setQty(eCurrentQty + 1);
                        updateModalPrice();
                    }
                });
                
                extraQtyDiv.appendChild(eMinusBtn);
                extraQtyDiv.appendChild(eQtySpan);
                extraQtyDiv.appendChild(ePlusBtn);
                
                extraRow.appendChild(extraNameSpan);
                extraRow.appendChild(extraQtyDiv);
                flavorExtrasContainer.appendChild(extraRow);
            });
        }

        minusBtn.addEventListener('click', () => {
            if (currentQty > 0) {
                currentQty--;
                qtySpan.textContent = currentQty;
                
                // Ajustar los extras si exceden la nueva cantidad base
                flavorExtrasState.forEach(ex => {
                    if (ex.getQty() > currentQty) {
                        ex.setQty(currentQty);
                    }
                });
                
                if (currentQty === 0) {
                    flavorExtrasContainer.style.display = 'none';
                }
                updateModalPrice();
            }
        });

        plusBtn.addEventListener('click', () => {
            currentQty++;
            qtySpan.textContent = currentQty;
            if (currentQty > 0 && hasExtras) {
                flavorExtrasContainer.style.display = 'block';
            }
            updateModalPrice();
        });
        
        qtyDiv.appendChild(minusBtn);
        qtyDiv.appendChild(qtySpan);
        qtyDiv.appendChild(plusBtn);
        
        row.appendChild(nameSpan);
        row.appendChild(qtyDiv);
        
        optionWrapper.appendChild(row);
        if (hasExtras) {
            optionWrapper.appendChild(flavorExtrasContainer);
        }
        
        optionsList.appendChild(optionWrapper);
    });

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
    
    let totalExtrasPrice = 0;
    document.querySelectorAll('.flavor-extra-qty').forEach(el => {
        const qty = parseInt(el.textContent);
        if (qty > 0) {
            totalExtrasPrice += qty * parseFloat(el.dataset.price);
        }
    });

    const totalPrice = totalBasePrice + totalExtrasPrice;
    optionsModalPrice.textContent = `($${totalPrice.toFixed(2)})`;
}

function confirmOptionsAndAddToCart() {
    if (!productBeingConfigured) return;
    
    let totalBaseQty = 0;
    let totalBasePrice = 0;
    const baseDetails = [];
    
    let totalExtrasPrice = 0;
    
    // Process base options and their specific extras
    document.querySelectorAll('.base-option-qty').forEach(baseEl => {
        const baseQty = parseInt(baseEl.textContent);
        if (baseQty > 0) {
            totalBaseQty += baseQty;
            totalBasePrice += baseQty * parseFloat(baseEl.dataset.price);
            
            const baseName = baseEl.dataset.name;
            let itemDetail = `${baseQty}x ${baseName}`;
            
            const wrapper = baseEl.closest('.option-wrapper');
            const flavorExtras = [];
            
            if (wrapper) {
                wrapper.querySelectorAll('.flavor-extra-qty').forEach(extraEl => {
                    const extraQty = parseInt(extraEl.textContent);
                    if (extraQty > 0) {
                        totalExtrasPrice += extraQty * parseFloat(extraEl.dataset.price);
                        let extraLabel = extraEl.dataset.name;

                        // Si hay subopción seleccionada (ingrediente doble con selector)
                        const subSel = wrapper.querySelector('[data-role="suboptionSelect"]');
                        if (subSel && subSel.style.display !== 'none') {
                            extraLabel += ` (${subSel.value})`;
                        }

                        // Si tiene cebolla/cilantro marcados
                        const ccChecked = [];
                        wrapper.querySelectorAll('.cc-checkbox:checked').forEach(cc => ccChecked.push(cc.dataset.item));
                        if (ccChecked.length > 0) {
                            extraLabel += ` con ${ccChecked.join(' y ')}`;
                        }

                        flavorExtras.push(`${extraQty} ${extraLabel}`);
                    }
                });
            }
            
            if (flavorExtras.length > 0) {
                itemDetail += ` [${flavorExtras.join(', ')}]`;
            }
            
            baseDetails.push(itemDetail);
        }
    });

    if (totalBaseQty === 0) {
        alert("Selecciona al menos una opción para continuar.");
        return;
    }

    const exclusions = [];
    document.querySelectorAll('input[name="productExclusion"]:checked').forEach(el => {
        exclusions.push(el.value);
    });
    
    const totalPriceForBundle = totalBasePrice + totalExtrasPrice;
    
    // Create detailed string for the cart UI
    let detailsString = baseDetails.join(', ');
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
    const paymentMethod = paymentMethodInput.value;

    let message = `🧾 *NUEVO PEDIDO #${orderNumber}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    if (name) message += `👤 *Cliente:* ${name}\n`;
    message += `💳 *Pago:* ${paymentMethod === 'efectivo' ? '💵 Efectivo' : '🏦 Transferencia'}\n`;
    message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🛒 *LO QUE PIDIÓ:*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    let total = 0;
    let itemNum = 1;
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        message += `${itemNum}️⃣ *${item.name}*\n`;

        // Separar los detalles en líneas individuales
        // Los detalles tienen formato: "1x Pastor, 2x Suadero (Sin cebolla)"
        // Separar las exclusiones
        const detailParts = item.details.split(' (');
        const mainDetail = detailParts[0];
        const exclusions = detailParts.length > 1 ? detailParts[1].replace(')', '') : null;

        // Cada sabor/ingrediente en su propia línea
        const ingredients = mainDetail.split(', ');
        ingredients.forEach(ing => {
            message += `   • ${ing.trim()}\n`;
        });

        if (exclusions) {
            message += `   ⚠️ Sin: ${exclusions}\n`;
        }

        message += `   💰 Subtotal: $${subtotal.toFixed(2)}\n\n`;
        itemNum++;
    });

    const globalSalsas = [];
    document.querySelectorAll('input[name="globalSalsa"]:checked').forEach(el => {
        globalSalsas.push(el.value);
    });
    if (globalSalsas.length > 0) {
        message += `🌶️ *Salsas:* ${globalSalsas.join(', ')}\n`;
        message += `\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `✅ *TOTAL A PAGAR: $${total.toFixed(2)}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━`;

    // Incrementar y guardar el número de pedido
    orderNumber++;
    localStorage.setItem('orderNumber', orderNumber);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Event Listeners
function setupEventListeners() {
    paymentMethodInput.addEventListener('change', (e) => {
        if (e.target.value === 'transferencia') {
            transferDetailsDiv.style.display = 'block';
        } else {
            transferDetailsDiv.style.display = 'none';
        }
    });

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

// =============================================
// === TEMAS POR FECHA ESPECIAL ================
// =============================================
function applySeasonalTheme() {
    const now  = new Date();
    const m    = now.getMonth() + 1; // 1–12
    const d    = now.getDate();

    const themes = [
        {
            // 🧪 PRUEBA TEMPORAL — quitar después
            days: [{m:7, d:26}],
            name: '¡Probando el tema festivo!',
            emoji: '🎉🌟🎊✨',
            primary: '#f59e0b',
            glow:   'rgba(245,158,11,0.45)',
            border: 'rgba(245,158,11,0.7)',
            bg:     'rgba(18,8,0,0.95)'
        },
        {
            days: [{m:1, d:1}],
            name: '¡Feliz Año Nuevo!',
            emoji: '🎆🎇✨🥂',
            primary: '#FFD700',
            glow:   'rgba(255,215,0,0.38)',
            border: 'rgba(255,215,0,0.6)',
            bg:     'rgba(18,8,0,0.9)'
        },
        {
            days: [{m:2, d:14}],
            name: '¡Feliz San Valentín!',
            emoji: '💕❤️🌹💝',
            primary: '#ff6b8a',
            glow:   'rgba(255,80,120,0.38)',
            border: 'rgba(255,80,120,0.6)',
            bg:     'rgba(45,0,18,0.9)'
        },
        {
            days: [{m:3, d:8}],
            name: '¡Día Internacional de la Mujer!',
            emoji: '💜✊🌷💫',
            primary: '#cc44ff',
            glow:   'rgba(180,50,255,0.38)',
            border: 'rgba(180,50,255,0.6)',
            bg:     'rgba(22,0,36,0.9)'
        },
        {
            days: [{m:5, d:5}],
            name: '¡Viva Puebla! Cinco de Mayo',
            emoji: '🇲🇽🌮🎉',
            primary: '#00b050',
            glow:   'rgba(206,17,38,0.38)',
            border: 'rgba(206,17,38,0.6)',
            bg:     'rgba(0,28,8,0.9)'
        },
        {
            days: [{m:5, d:10}],
            name: '¡Feliz Día de las Mamás!',
            emoji: '💐🌷🌸💗',
            primary: '#ff85c2',
            glow:   'rgba(255,120,180,0.38)',
            border: 'rgba(255,120,180,0.6)',
            bg:     'rgba(48,0,22,0.9)'
        },
        {
            days: [{m:9, d:15}, {m:9, d:16}],
            name: '¡Viva México!',
            emoji: '🇲🇽🦅🎺🎊',
            primary: '#00b050',
            glow:   'rgba(206,17,38,0.45)',
            border: 'rgba(206,17,38,0.7)',
            bg:     'rgba(0,28,8,0.95)'
        },
        {
            days: [{m:10, d:31}, {m:11, d:1}, {m:11, d:2}],
            name: 'Día de Muertos',
            emoji: '💀🌼🕯️🦋',
            primary: '#dd44ff',
            glow:   'rgba(200,50,255,0.42)',
            border: 'rgba(200,50,255,0.65)',
            bg:     'rgba(16,0,26,0.95)'
        },
        {
            days: [{m:12, d:12}],
            name: 'Día de la Virgen de Guadalupe',
            emoji: '🌹🙏💫⭐',
            primary: '#ffd700',
            glow:   'rgba(255,200,0,0.38)',
            border: 'rgba(255,200,0,0.6)',
            bg:     'rgba(28,5,0,0.95)'
        },
        {
            days: [{m:12, d:24}, {m:12, d:25}],
            name: '¡Feliz Navidad!',
            emoji: '🎄🎅⭐🎁',
            primary: '#00cc55',
            glow:   'rgba(0,200,70,0.38)',
            border: 'rgba(0,200,70,0.6)',
            bg:     'rgba(0,22,8,0.95)'
        },
        {
            days: [{m:12, d:31}],
            name: '¡Feliz Fin de Año!',
            emoji: '🎆🥂✨🎇',
            primary: '#FFD700',
            glow:   'rgba(255,215,0,0.38)',
            border: 'rgba(255,215,0,0.6)',
            bg:     'rgba(18,8,0,0.9)'
        },
    ];

    const theme = themes.find(t => t.days.some(day => day.m === m && day.d === d));
    if (!theme) return;

    // --- Inyectar estilos de animación ---
    const style = document.createElement('style');
    style.id = 'festive-styles';
    style.textContent = `
        @keyframes festivePulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.65; }
        }
        @keyframes festiveSlide {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        #festive-banner {
            overflow: hidden;
            white-space: nowrap;
        }
        #festive-banner .festive-track {
            display: inline-block;
            animation: festiveSlide 18s linear infinite;
        }
    `;
    document.head.appendChild(style);

    // --- Actualizar variable de color primario ---
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--primary-hover', theme.primary);

    // --- Actualizar estilo del header ---
    const header = document.querySelector('.header');
    if (header) {
        header.style.background     = theme.bg;
        header.style.borderBottom   = `1px solid ${theme.border}`;
        header.style.boxShadow      = `0 0 35px ${theme.glow}, 0 4px 20px rgba(0,0,0,0.5)`;
    }

    // --- Crear banner festivo (marquee animado) ---
    const banner = document.createElement('div');
    banner.id = 'festive-banner';
    banner.style.cssText = `
        background: linear-gradient(90deg, transparent, ${theme.glow}, transparent);
        border-bottom: 1px solid ${theme.border};
        padding: 5px 0;
        text-align: center;
        font-size: 0.77rem;
        font-weight: 700;
        color: ${theme.primary};
        letter-spacing: 1px;
        text-transform: uppercase;
        animation: festivePulse 2.5s ease-in-out infinite;
    `;

    // Texto duplicado para efecto marquee infinito
    const chunk = ` ${theme.emoji}  ${theme.name}  ${theme.emoji} 　`;
    const track = document.createElement('span');
    track.className = 'festive-track';
    track.textContent = chunk.repeat(6);
    banner.appendChild(track);

    // Insertar banner justo después del header
    if (header) header.insertAdjacentElement('afterend', banner);

    // --- Actualizar el glow del fondo de la app ---
    const appWrapper = document.querySelector('.app-wrapper');
    if (appWrapper) {
        appWrapper.style.backgroundImage = `
            radial-gradient(ellipse at 50% -10%, ${theme.glow} 0%, transparent 60%),
            radial-gradient(ellipse at 80% 80%, ${theme.glow} 0%, transparent 50%),
            url('menu_bg.png')
        `;
    }
}
