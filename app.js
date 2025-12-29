// -----------------------------
// LIDL AISLE MAP
// -----------------------------
const ALL_LIDL_ITEMS = Object.values(LIDL_AISLES).flat();
const LIDL_AISLES = {
  "Fresh Produce": [
    "apple", "apples", "banana", "bananas", "orange", "oranges", "grapes",
    "lettuce", "tomato", "tomatoes", "cucumber", "onion", "onions", "garlic",
    "carrot", "carrots", "pepper", "peppers", "spinach", "broccoli", "courgette",
    "potato", "potatoes", "herbs", "parsley", "coriander"
  ],
  "Meat & Fish": [
    "chicken", "chicken breast", "minced beef", "beef", "pork", "sausages",
    "bacon", "ham", "turkey", "lamb", "fish", "salmon", "tuna steak"
  ],
  "Dairy & Eggs": [
    "milk", "whole milk", "semi skimmed milk", "skimmed milk",
    "cheese", "cheddar", "mozzarella", "feta", "butter", "margarine",
    "yoghurt", "yogurt", "greek yoghurt", "cream", "double cream",
    "eggs", "free range eggs"
  ],
  "Bakery": [
    "bread", "white bread", "brown bread", "wholemeal bread",
    "rolls", "bread rolls", "baguette", "croissant", "pastries",
    "brioche", "pitta", "naan"
  ],
  "Pantry": [
    "pasta", "spaghetti", "penne", "fusilli", "noodles", "rice", "basmati rice",
    "long grain rice", "couscous", "quinoa",
    "tomato sauce", "passata", "tinned tomatoes", "chopped tomatoes",
    "baked beans", "kidney beans", "chickpeas", "lentils",
    "soy sauce", "olive oil", "vegetable oil", "sunflower oil",
    "flour", "plain flour", "self raising flour", "sugar", "brown sugar",
    "salt", "pepper", "spices", "paprika", "curry powder", "oregano",
    "stock cubes", "gravy granules", "ketchup", "mayonnaise", "mustard"
  ],
  "Snacks & Sweets": [
    "crisps", "chips", "tortilla chips", "popcorn",
    "biscuits", "cookies", "chocolate", "chocolate bar", "sweets",
    "nuts", "peanuts", "trail mix", "rice cakes"
  ],
  "Drinks": [
    "water", "bottled water", "sparkling water",
    "juice", "orange juice", "apple juice",
    "cola", "lemonade", "fizzy drink", "energy drink",
    "tea", "coffee", "instant coffee"
  ],
  "Frozen": [
    "frozen peas", "frozen vegetables", "frozen chips", "frozen pizza",
    "ice cream", "frozen berries", "frozen fish"
  ],
  "Household": [
    "toilet paper", "kitchen roll", "bin bags", "bin liners",
    "washing up liquid", "dishwasher tablets", "laundry detergent",
    "fabric softener", "cleaning spray", "bleach", "sponges"
  ],
  "Toiletries": [
    "shampoo", "conditioner", "soap", "hand wash",
    "toothpaste", "toothbrush", "deodorant", "razor", "shaving gel",
    "tissues", "cotton pads", "cotton buds", "washing-up liquid"
  ],
  "Baby": [
    "nappies", "diapers", "baby wipes", "baby food", "formula"
  ],
  "Pets": [
    "dog food", "cat food", "pet treats", "cat litter"
  ]
};

// Fallback order for aisles
const AISLE_ICONS = {
  "Fresh Produce": "🥦",
  "Meat & Fish": "🥩",
  "Dairy & Eggs": "🥛",
  "Bakery": "🍞",
  "Pantry": "🥫",
  "Snacks & Sweets": "🍪",
  "Drinks": "🧃",
  "Frozen": "❄️",
  "Household": "🧼",
  "Toiletries": "🧴",
  "Baby": "🍼",
  "Pets": "🐾",
  "Other": "🛒"
};

function getAisleForItem(itemName) {
  const lower = itemName.toLowerCase();

  for (const aisle in LIDL_AISLES) {
    if (LIDL_AISLES[aisle].some(keyword => lower.includes(keyword))) {
      return aisle;
    }
  }

  return "Other";
}

// -----------------------------
// DATA MODEL
// -----------------------------

const meals = [
  {
    name: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Minced beef", "Tomato sauce", "Onion", "Garlic"]
  },
  {
    name: "Chicken Stir Fry",
    ingredients: ["Chicken breast", "Mixed vegetables", "Soy sauce", "Noodles"]
  },
  {
    name: "Tuna Salad",
    ingredients: ["Tuna", "Lettuce", "Tomatoes", "Cucumber", "Olive oil"]
  }
];

const shoppingItems = new Map();

// -----------------------------
// DOM ELEMENTS
// -----------------------------

const mealListEl = document.getElementById("meal-list");
const shoppingSectionsEl = document.getElementById("shopping-sections");
const manualInput = document.getElementById("manual-item-input");
const addItemBtn = document.getElementById("add-item-btn");
const clearListBtn = document.getElementById("clear-list");
const printListBtn = document.getElementById("print-list");
const receiptPrintArea = document.getElementById("receipt-print-area");

const drawer = document.getElementById("shopping-drawer");
const drawerHandle = document.getElementById("drawer-handle");

// -----------------------------
// RENDER MEALS
// -----------------------------

function renderMeals() {
  mealListEl.innerHTML = "";

  meals.forEach(meal => {
    const li = document.createElement("li");
    li.textContent = meal.name;

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add ingredients";
    addBtn.addEventListener("click", () => {
      meal.ingredients.forEach(ing => {
        const key = ing.trim();
        if (!key) return;
        if (shoppingItems.has(key)) {
          shoppingItems.set(key, shoppingItems.get(key) + 1);
        } else {
          shoppingItems.set(key, 1);
        }
      });
      renderShoppingList();
    });

    li.appendChild(addBtn);
    mealListEl.appendChild(li);
  });
}

// -----------------------------
// RENDER SHOPPING LIST (GROUPED BY LIDL AISLES)
// -----------------------------

function renderShoppingList() {
  shoppingSectionsEl.innerHTML = "";

  if (shoppingItems.size === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No items yet. Add some from meals or manually.";
    shoppingSectionsEl.appendChild(empty);
    return;
  }

  const grouped = {};

  shoppingItems.forEach((qty, name) => {
    const aisle = getAisleForItem(name);
    if (!grouped[aisle]) grouped[aisle] = [];
    grouped[aisle].push({ name, qty });
  });

  LIDL_AISLE_ORDER.forEach(aisle => {
    if (!grouped[aisle]) return;

    const section = document.createElement("div");
    section.className = "card";

    const title = document.createElement("h3");
    title.textContent = `${AISLE_ICONS[aisle] || "🛒"}  ${aisle}`;
    section.appendChild(title);

    const ul = document.createElement("ul");

    grouped[aisle].forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} (${item.qty})`;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Remove";
      delBtn.addEventListener("click", () => {
        shoppingItems.delete(item.name);
        renderShoppingList();
      });

      li.appendChild(delBtn);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    shoppingSectionsEl.appendChild(section);
  });
}

// -----------------------------
// MANUAL ADD ITEM
// -----------------------------

addItemBtn.addEventListener("click", () => {
  const item = manualInput.value.trim();
  if (!item) return;

  if (shoppingItems.has(item)) {
    shoppingItems.set(item, shoppingItems.get(item) + 1);
  } else {
    shoppingItems.set(item, 1);
  }

  manualInput.value = "";
  renderShoppingList();
});

manualInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItemBtn.click();
  }
});

const suggestionsBox = document.getElementById("suggestions");

manualInput.addEventListener("input", () => {
  const query = manualInput.value.toLowerCase().trim();

  if (!query) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = ALL_LIDL_ITEMS.filter(item =>
    item.toLowerCase().includes(query)
  ).slice(0, 6); // limit to 6 suggestions

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestionsBox.innerHTML = "";
  matches.forEach(match => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = match;

    div.addEventListener("click", () => {
      manualInput.value = match;
      addItemBtn.click();
      suggestionsBox.style.display = "none";
    });

    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = "block";
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!suggestionsBox.contains(e.target) && e.target !== manualInput) {
    suggestionsBox.style.display = "none";
  }
});
// -----------------------------
// CLEAR LIST
// -----------------------------

clearListBtn.addEventListener("click", () => {
  if (!confirm("Clear all items from the shopping list?")) return;
  shoppingItems.clear();
  renderShoppingList();
});

// -----------------------------
// PRINT RECEIPT (GROUPED BY AISLE, CENTERED)
// -----------------------------

printListBtn.addEventListener("click", () => {
  let lines = [];

  lines.push("      MEAL PLANNER RECEIPT");
  lines.push("           --------------");
  lines.push("");

  if (shoppingItems.size === 0) {
    lines.push("No items in the list.");
  } else {
    const grouped = {};

    shoppingItems.forEach((qty, name) => {
      const aisle = getAisleForItem(name);
      if (!grouped[aisle]) grouped[aisle] = [];
      grouped[aisle].push({ name, qty });
    });

    LIDL_AISLE_ORDER.forEach(aisle => {
      if (!grouped[aisle]) return;

      lines.push(`<strong>${aisle.toUpperCase()}</strong>`);
      grouped[aisle].forEach(item => {
        lines.push(`  ${item.name} x${item.qty}`);
      });
      lines.push("");
    });
  }

  lines.push("           --------------");

  receiptPrintArea.style.display = "block";
  receiptPrintArea.innerHTML = lines.join("<br>");

  window.print();

  receiptPrintArea.style.display = "none";
});

// -----------------------------
// DRAGGABLE BOTTOM SHEET
// -----------------------------

let startY = 0;
let startHeight = 0;
let currentHeight = 0;

function getVh() {
  return window.innerHeight;
}

let COLLAPSED_VH;
const MID_VH = 65;
const FULL_VH = 90;

function recalcCollapsed() {
  COLLAPSED_VH = (60 / getVh()) * 100; // 60px as vh
}

function setSheetHeight(vh, animate = true) {
  currentHeight = vh;
  if (!animate) {
    drawer.style.transition = "none";
  } else {
    drawer.style.transition = "height 0.25s ease";
  }
  drawer.style.height = `${vh}vh`;
}

function snapToNearest() {
  const distances = [
    { point: COLLAPSED_VH, dist: Math.abs(currentHeight - COLLAPSED_VH) },
    { point: MID_VH,       dist: Math.abs(currentHeight - MID_VH) },
    { point: FULL_VH,      dist: Math.abs(currentHeight - FULL_VH) }
  ];

  distances.sort((a, b) => a.dist - b.dist);
  setSheetHeight(distances[0].point, true);
}

function onTouchStart(e) {
  const touch = e.touches[0];
  startY = touch.clientY;
  startHeight = currentHeight;
  drawer.style.transition = "none";
}

function onTouchMove(e) {
  const touch = e.touches[0];
  const deltaY = startY - touch.clientY;
  const deltaVh = (deltaY / getVh()) * 100;
  let newHeight = startHeight + deltaVh;

  if (newHeight < COLLAPSED_VH) newHeight = COLLAPSED_VH;
  if (newHeight > FULL_VH) newHeight = FULL_VH;

  currentHeight = newHeight;
  drawer.style.height = `${newHeight}vh`;

  e.preventDefault();
}

function onTouchEnd() {
  snapToNearest();
}

// Drag from anywhere in the drawer except buttons/inputs
drawer.addEventListener("touchstart", (e) => {
  if (e.target.closest("button") || e.target.closest("input")) return;
  onTouchStart(e);
}, { passive: false });

drawer.addEventListener("touchmove", (e) => {
  if (e.target.closest("button") || e.target.closest("input")) return;
  onTouchMove(e);
}, { passive: false });

drawer.addEventListener("touchend", (e) => {
  if (e.target.closest("button") || e.target.closest("input")) return;
  onTouchEnd(e);
});

// Handle click toggles between collapsed and mid
drawerHandle.addEventListener("click", () => {
  if (currentHeight <= COLLAPSED_VH + 1) {
    setSheetHeight(MID_VH);
  } else {
    setSheetHeight(COLLAPSED_VH);
  }
});

// Recalculate on resize
window.addEventListener("resize", () => {
  recalcCollapsed();
  if (currentHeight === COLLAPSED_VH) {
    setSheetHeight(COLLAPSED_VH);
  }
});

// -----------------------------
// INIT
// -----------------------------

function init() {
  recalcCollapsed();
  setSheetHeight(COLLAPSED_VH, false);
  renderMeals();
  renderShoppingList();
}

init();

// -----------------------------
// SERVICE WORKER REGISTRATION
// -----------------------------

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/Shopping-List/service-worker.js").catch(err => {
      console.log("Service Worker registration failed:", err);
    });
  });
}





