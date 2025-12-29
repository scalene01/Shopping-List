// -----------------------------
// LIDL CATEGORY DEFINITIONS
// -----------------------------
const categories = {
  "Fruit & Vegetables": {
    icon: "🥦",
    items: ["Tomato", "Onion", "Garlic", "Lettuce", "Vegetables", "Potatoes", "Peppers"]
  },
  "Meat & Poultry": {
    icon: "🥩",
    items: ["Chicken", "Minced Beef", "Beef", "Pork"]
  },
  "Fish & Seafood": {
    icon: "🐟",
    items: ["Salmon", "Cod", "Prawns"]
  },
  "Dairy & Eggs": {
    icon: "🥛",
    items: ["Cheese", "Milk", "Butter", "Yoghurt", "Eggs"]
  },
  "Bakery": {
    icon: "🥖",
    items: ["Tortillas", "Bread", "Rolls", "Pastries"]
  },
  "Tins, Jars & Cooking Essentials": {
    icon: "🥫",
    items: ["Tomato Sauce", "Coconut Milk", "Curry Paste", "Beans", "Chopped Tomatoes"]
  },
  "Dry Goods": {
    icon: "📦",
    items: ["Spaghetti", "Noodles", "Rice", "Pasta"]
  },
  "Frozen Foods": {
    icon: "❄️",
    items: ["Frozen Vegetables", "Frozen Chicken", "Chips", "Frozen Pizza"]
  },
  "Snacks & Sweets": {
    icon: "🍪",
    items: ["Chocolate", "Crisps", "Biscuits"]
  },
  "Drinks": {
    icon: "🥤",
    items: ["Water", "Juice", "Fizzy Drinks"]
  },
  "Household & Cleaning": {
    icon: "🧼",
    items: ["Toilet Roll", "Cleaning Spray", "Washing Up Liquid"]
  },
  "Pet Food": {
    icon: "🐶",
    items: ["Dog Food", "Cat Food"]
  },
  "Middle Aisle": {
    icon: "🛠",
    items: []
  }
};

// -----------------------------
// DEFAULT MEALS
// -----------------------------
let meals = {
  "Spaghetti Bolognese": ["Spaghetti", "Minced Beef", "Tomato Sauce", "Onion", "Garlic"],
  "Chicken Curry": ["Chicken", "Curry Paste", "Coconut Milk", "Rice"],
  "Tacos": ["Tortillas", "Minced Beef", "Lettuce", "Cheese", "Tomato"],
  "Stir Fry": ["Noodles", "Chicken", "Soy Sauce", "Vegetables"]
};

// -----------------------------
// DOM ELEMENTS
// -----------------------------
const mealList = document.getElementById("meal-list");
const shoppingSections = document.getElementById("shopping-sections");
const clearBtn = document.getElementById("clear-list");
const addMealForm = document.getElementById("add-meal-form");
const mealNameInput = document.getElementById("meal-name");
const mealIngredientsInput = document.getElementById("meal-ingredients");

// -----------------------------
// SHOPPING LIST (Map for quantities)
// -----------------------------
let shoppingItems = new Map();

// -----------------------------
// LOCAL STORAGE FUNCTIONS
// -----------------------------
function saveShoppingList() {
  localStorage.setItem("shoppingList", JSON.stringify([...shoppingItems]));
}

function loadShoppingList() {
  const saved = JSON.parse(localStorage.getItem("shoppingList"));
  if (saved) shoppingItems = new Map(saved);
}

function saveMeals() {
  localStorage.setItem("meals", JSON.stringify(meals));
}

function loadMeals() {
  const saved = JSON.parse(localStorage.getItem("meals"));
  if (saved) Object.assign(meals, saved);
}

// -----------------------------
// CATEGORY LOOKUP
// -----------------------------
function getCategory(item) {
  for (const [cat, data] of Object.entries(categories)) {
    if (data.items.includes(item)) return cat;
  }
  return "Other";
}

// -----------------------------
// RENDER MEALS
// -----------------------------
function renderMeals() {
  mealList.innerHTML = "";
  Object.keys(meals).forEach(meal => {
    const li = document.createElement("li");
    li.textContent = meal;
    li.addEventListener("click", () => addMealIngredients(meal));
    mealList.appendChild(li);
  });
}

// -----------------------------
// ADD MEAL INGREDIENTS
// -----------------------------
function addMealIngredients(meal) {
  meals[meal].forEach(item => {
    if (shoppingItems.has(item)) {
      shoppingItems.set(item, shoppingItems.get(item) + 1);
    } else {
      shoppingItems.set(item, 1);
    }
  });
  renderShoppingList();
}

// -----------------------------
// RENDER SHOPPING LIST
// -----------------------------
function renderShoppingList() {
  shoppingSections.innerHTML = "";

  const categorized = {};

  shoppingItems.forEach((count, item) => {
    const cat = getCategory(item);
    if (!categorized[cat]) categorized[cat] = [];
    categorized[cat].push({ item, count });
  });

  for (const [cat, items] of Object.entries(categorized)) {
    const section = document.createElement("div");
    const icon = categories[cat]?.icon || "🛒";
    section.innerHTML = `<h3>${icon} ${cat}</h3>`;

    const ul = document.createElement("ul");

    items.forEach(({ item, count }) => {
      const li = document.createElement("li");
      li.textContent = `${item} ×${count}`;

      const del = document.createElement("button");
      del.textContent = "❌";
      del.style.marginLeft = "10px";
      del.addEventListener("click", () => {
        shoppingItems.delete(item);
        renderShoppingList();
      });

      li.appendChild(del);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    shoppingSections.appendChild(section);
  }

  saveShoppingList();
}

// -----------------------------
// ADD MEAL FORM
// -----------------------------
addMealForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = mealNameInput.value.trim();
  const ingredients = mealIngredientsInput.value.split(",").map(i => i.trim());

  meals[name] = ingredients;

  saveMeals();
  renderMeals();

  mealNameInput.value = "";
  mealIngredientsInput.value = "";
});

// -----------------------------
// CLEAR LIST
// -----------------------------
clearBtn.addEventListener("click", () => {
  shoppingItems.clear();
  renderShoppingList();
});

// -----------------------------
// PRINT RECEIPT
// -----------------------------
document.getElementById("print-list").addEventListener("click", () => {
  const receiptWindow = window.open("", "PRINT", "height=600,width=400");

  // Real timestamp
  const now = new Date();
  const timestamp = now.toLocaleString("en-GB");

  let receiptHTML = `
    <div id="receipt-print-area">
      <h2 style="text-align:center;">LIDL YORK</h2>
      <p style="text-align:center;">Store #104</p>
      <p style="text-align:center;">Grott Shopping Park</p>
      <p style="text-align:center;">York YO26 6AH</p>
      <p style="text-align:center;">------------------------------</p>
      <p style="text-align:center;">${timestamp}</p>
      <p style="text-align:center;">------------------------------</p>
      <p style="text-align:center;">SHOPPING RECEIPT</p>
      <p style="text-align:center;">------------------------------</p>
  `;

  shoppingItems.forEach((count, item) => {
    receiptHTML += `<p style="text-align:center;">${item} x${count}</p>`;
  });

  receiptHTML += `
      <p style="text-align:center;">------------------------------</p>
      <p style="text-align:center;">THANK YOU FOR SHOPPING</p>
      <p style="text-align:center;">AT LIDL</p>
      <p style="text-align:center;">------------------------------</p>

      <!-- Fake barcode -->
      <p style="text-align:center; font-size:18px; letter-spacing:3px;">
        █ █ █ ██ ███ █ ██ █ ███ █ █
      </p>
      <p style="text-align:center; font-size:12px; margin-top:4px;">
        2903 8847 5520 1193
      </p>
    </div>
  `;

  receiptWindow.document.write(receiptHTML);
  receiptWindow.document.close();
  receiptWindow.focus();

  receiptWindow.print();
});

// -----------------------------
// INITIAL LOAD
// -----------------------------
loadMeals();
loadShoppingList();
renderMeals();
renderShoppingList();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/Shopping-List/service-worker.js', {
    scope: '/Shopping-List/'
  });
}
