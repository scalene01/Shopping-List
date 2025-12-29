// -----------------------------
// DATA MODEL
// -----------------------------

// Example meals (you can customize these)
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

// Shopping items stored as Map<itemName, quantity>
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

// Bottom sheet elements
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
// RENDER SHOPPING LIST
// -----------------------------
function renderShoppingList() {
  shoppingSectionsEl.innerHTML = "";

  if (shoppingItems.size === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No items yet. Add some from meals or manually.";
    shoppingSectionsEl.appendChild(empty);
    return;
  }

  const ul = document.createElement("ul");

  shoppingItems.forEach((qty, name) => {
    const li = document.createElement("li");
    li.textContent = `${name} (${qty})`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Remove";
    delBtn.addEventListener("click", () => {
      shoppingItems.delete(name);
      renderShoppingList();
    });

    li.appendChild(delBtn);
    ul.appendChild(li);
  });

  shoppingSectionsEl.appendChild(ul);
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

// -----------------------------
// CLEAR LIST
// -----------------------------
clearListBtn.addEventListener("click", () => {
  if (!confirm("Clear all items from the shopping list?")) return;
  shoppingItems.clear();
  renderShoppingList();
});

// -----------------------------
// PRINT RECEIPT
// -----------------------------
printListBtn.addEventListener("click", () => {
  let lines = [];
  lines.push("MEAL PLANNER RECEIPT");
  lines.push("--------------------");

  if (shoppingItems.size === 0) {
    lines.push("No items in the list.");
  } else {
    shoppingItems.forEach((qty, name) => {
      lines.push(`${name} x${qty}`);
    });
  }

  lines.push("--------------------");
  lines.push("Thank you for shopping!");

  receiptPrintArea.style.display = "block";
  receiptPrintArea.textContent = lines.join("\n");

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

// Snap points (in vh)
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
  const deltaY = startY - touch.clientY; // drag up = positive
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

drawerHandle.addEventListener("touchstart", onTouchStart, { passive: false });
drawerHandle.addEventListener("touchmove", onTouchMove, { passive: false });
drawerHandle.addEventListener("touchend", onTouchEnd);

// Also allow clicking the handle to toggle between collapsed and mid
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