/* -------------------------------------------------- */
/* LIDL AISLE MAP + DATA MODEL + APP LOGIC (Merged)  */
/* Full, ready-to-paste JavaScript for your app.js   */
/* -------------------------------------------------- */

/* -----------------------------
   LIDL AISLE MAP
   ----------------------------- */

const LIDL_AISLES = {
// -----------------------------
// Fresh Produce
// -----------------------------
"Fresh Produce": [
  "apple",
  "apples",
  "apricot",
  "artichoke",
  "asparagus",
  "aubergine",
  "avocado",
  "baby corn",
  "baby potatoes",
  "banana",
  "bananas",
  "beetroot",
  "blackberries",
  "blackcurrants",
  "blueberries",
  "broccoli",
  "brown onion",
  "brussels sprouts",
  "butternut squash",
  "cabbage",
  "cantaloupe melon",
  "carrot",
  "carrots",
  "cauliflower",
  "celeriac",
  "celery",
  "cherry tomatoes",
  "chestnut mushrooms",
  "chillies",
  "chilli",
  "clementines",
  "coconut",
  "coriander",
  "courgette",
  "courgettes",
  "cucumber",
  "dates",
  "fennel",
  "garlic",
  "ginger",
  "grapes",
  "grapefruit",
  "green apple",
  "green beans",
  "green grapes",
  "green pepper",
  "herbs",
  "jalapeno",
  "kale",
  "kiwi",
  "leek",
  "leeks",
  "lemon",
  "lemons",
  "lettuce",
  "lime",
  "limes",
  "mango",
  "mangetout",
  "melon",
  "mixed herbs",
  "mixed peppers",
  "mushroom",
  "mushrooms",
  "nectarine",
  "onion",
  "onions",
  "orange",
  "oranges",
  "pak choi",
  "parsley",
  "parsnip",
  "parsnips",
  "passion fruit",
  "peach",
  "peaches",
  "pear",
  "pears",
  "pepper",
  "peppers",
  "pineapple",
  "plum",
  "plums",
  "pomegranate",
  "potato",
  "potatoes",
  "radish",
  "raspberries",
  "red apple",
  "red grapes",
  "red onion",
  "red pepper",
  "rocket",
  "salad",
  "salad leaves",
  "shallots",
  "spinach",
  "spring onion",
  "spring onions",
  "strawberries",
  "sweet potato",
  "sweet potatoes",
  "swede",
  "tangerines",
  "tomato",
  "tomatoes",
  "watercress",
  "watermelon",
  "white grapes",
  "white onion",
  "yellow pepper"
],
// -----------------------------
// Meat & Fish
// -----------------------------
"Meat & Fish": [
  "bacon",
  "beef",
  "beef brisket",
  "beef mince",
  "beef ribs",
  "beef roasting joint",
  "beef steak",
  "chicken",
  "chicken breast",
  "chicken drumsticks",
  "chicken legs",
  "chicken mince",
  "chicken thighs",
  "chicken wings",
  "cod fillets",
  "duck breast",
  "duck legs",
  "fish",
  "fish fillets",
  "gammon joint",
  "gammon steak",
  "haddock fillets",
  "ham",
  "king prawns",
  "lamb",
  "lamb chops",
  "lamb mince",
  "lamb shoulder",
  "lamb steaks",
  "mackerel fillets",
  "minced beef",
  "pork",
  "pork belly",
  "pork chops",
  "pork loin",
  "pork mince",
  "pork ribs",
  "prawns",
  "salmon",
  "salmon fillets",
  "sausages",
  "smoked salmon",
  "steak",
  "tilapia fillets",
  "tuna",
  "tuna steak",
  "turkey",
  "turkey breast",
  "turkey mince",
  "whole chicken"
],
// -----------------------------
// Dairy & Eggs
// -----------------------------
"Dairy & Eggs": [
  "butter",
  "cheddar",
  "cheese",
  "clotted cream",
  "coconut milk",
  "condensed milk",
  "cream",
  "cream cheese",
  "creme fraiche",
  "double cream",
  "eggs",
  "evaporated milk",
  "feta",
  "free range eggs",
  "greek yoghurt",
  "halloumi",
  "mascarpone",
  "milk",
  "mozzarella",
  "natural yoghurt",
  "oat milk",
  "parmesan",
  "ricotta",
  "semi skimmed milk",
  "skimmed milk",
  "soya milk",
  "soy milk",
  "squirty cream",
  "thick cream",
  "whipping cream",
  "whole milk",
  "yoghurt",
  "yogurt"
],
// -----------------------------
// Bakery
// -----------------------------
"Bakery": [
  "bagels",
  "baguette",
  "baps",
  "barm cakes",
  "brioche",
  "brown bread",
  "bread",
  "bread rolls",
  "burger buns",
  "ciabatta",
  "crumpets",
  "flatbread",
  "focaccia",
  "garlic bread",
  "granary bread",
  "naan",
  "pancakes",
  "pastries",
  "pitta",
  "pitta bread",
  "rolls",
  "rye bread",
  "seeded bread",
  "sourdough",
  "tiger bread",
  "tortilla wraps",
  "white bread",
  "wholemeal bread",
  "wraps"
],
// -----------------------------
// Pantry
// -----------------------------
"Pantry": [
  "almond flour",
  "almonds",
  "baked beans",
  "baking powder",
  "baking soda",
  "basmati rice",
  "black beans",
  "black pepper",
  "brown rice",
  "brown sugar",
  "buckwheat",
  "bulgur wheat",
  "cannellini beans",
  "caster sugar",
  "chickpeas",
  "chilli flakes",
  "chilli powder",
  "chopped tomatoes",
  "cocoa powder",
  "coconut milk",
  "coconut oil",
  "coffee",
  "cornflour",
  "couscous",
  "crackers",
  "curry paste",
  "curry powder",
  "dark chocolate",
  "dried apricots",
  "dried fruit",
  "dried herbs",
  "dried lentils",
  "dried noodles",
  "dried pasta",
  "dried peas",
  "dried spices",
  "egg noodles",
  "flour",
  "garam masala",
  "garlic powder",
  "ginger powder",
  "gravy granules",
  "herbs",
  "honey",
  "hot sauce",
  "icing sugar",
  "instant coffee",
  "jasmine rice",
  "ketchup",
  "kidney beans",
  "lasagne sheets",
  "lentils",
  "long grain rice",
  "mayonnaise",
  "mixed herbs",
  "mixed spice",
  "mustard",
  "noodles",
  "oats",
  "olive oil",
  "onion powder",
  "oregano",
  "paprika",
  "passata",
  "peanut butter",
  "peanuts",
  "pepper",
  "pesto",
  "plain flour",
  "porridge oats",
  "quinoa",
  "rapeseed oil",
  "red lentils",
  "rice",
  "rice cakes",
  "rice noodles",
  "salt",
  "self raising flour",
  "semolina",
  "sesame oil",
  "sesame seeds",
  "soy sauce",
  "spaghetti",
  "spices",
  "stock cubes",
  "sugar",
  "sunflower oil",
  "sweetcorn",
  "tahini",
  "tinned beans",
  "tinned tomatoes",
  "tomato puree",
  "tomato sauce",
  "tortilla chips",
  "udon noodles",
  "vegetable oil",
  "vinegar",
  "white rice",
  "wholegrain rice",
  "wholewheat pasta",
  "yeast"
],
// -----------------------------
// Snacks & Sweets
// -----------------------------
"Snacks & Sweets": [
  "biscuits",
  "breadsticks",
  "brownies",
  "cake bars",
  "caramel",
  "cheese crackers",
  "chocolate",
  "chocolate bar",
  "chocolate biscuits",
  "chocolate chips",
  "chocolate spread",
  "crisps",
  "dried fruit",
  "energy bars",
  "flapjacks",
  "fruit bars",
  "fruit snacks",
  "fudge",
  "granola bars",
  "honey roasted nuts",
  "jelly sweets",
  "marshmallows",
  "mixed nuts",
  "nut bars",
  "nuts",
  "peanut brittle",
  "popcorn",
  "pretzels",
  "protein bars",
  "raisins",
  "salted nuts",
  "salted popcorn",
  "seed mix",
  "seeds",
  "sweets",
  "toffee",
  "trail mix",
  "yogurt coated raisins",
  "yogurt coated snacks"
],
// -----------------------------
// Drinks
// -----------------------------
"Drinks": [
  "apple juice",
  "bottled water",
  "coconut water",
  "cola",
  "cranberry juice",
  "diet cola",
  "energy drink",
  "flavoured water",
  "fruit juice",
  "ginger ale",
  "ginger beer",
  "grape juice",
  "herbal tea",
  "iced coffee",
  "iced tea",
  "lemonade",
  "lime cordial",
  "mango juice",
  "mineral water",
  "orange juice",
  "peach iced tea",
  "pineapple juice",
  "raspberry lemonade",
  "soda water",
  "sparkling water",
  "sports drink",
  "still water",
  "tonic water",
  "water",
  "white grape juice"
],
// -----------------------------
// Frozen
// -----------------------------
"Frozen": [
  "frozen berries",
  "frozen broccoli",
  "frozen chicken",
  "frozen chicken breast",
  "frozen chicken thighs",
  "frozen cod",
  "frozen corn",
  "frozen fish",
  "frozen fruit",
  "frozen green beans",
  "frozen king prawns",
  "frozen mango",
  "frozen meat",
  "frozen mixed fruit",
  "frozen mixed vegetables",
  "frozen peas",
  "frozen prawns",
  "frozen raspberries",
  "frozen salmon",
  "frozen spinach",
  "frozen strawberries",
  "frozen sweetcorn",
  "frozen vegetables",
  "ice cubes",
  "ice",
  "pastry",
  "puff pastry",
  "shortcrust pastry"
],
// -----------------------------
// Household
// -----------------------------
"Household": [
  "air freshener",
  "aluminium foil",
  "antibacterial spray",
  "baking paper",
  "bin bags",
  "bleach",
  "candles",
  "cling film",
  "dishwasher salt",
  "dishwasher tablets",
  "dish soap",
  "fabric conditioner",
  "fabric softener",
  "foil",
  "kitchen roll",
  "laundry detergent",
  "laundry liquid",
  "laundry powder",
  "laundry tablets",
  "multi purpose cleaner",
  "paper towels",
  "rubber gloves",
  "scourers",
  "sponges",
  "surface cleaner",
  "tea lights",
  "tissues",
  "toilet cleaner",
  "toilet paper",
  "washing powder",
  "washing up liquid",
  "washing up sponges"
],
// -----------------------------
// Toiletries
// -----------------------------
"Toiletries": [
  "aftershave",
  "bath foam",
  "body lotion",
  "body spray",
  "body wash",
  "cotton buds",
  "cotton pads",
  "deodorant",
  "dental floss",
  "face wash",
  "facial cleanser",
  "floss",
  "hair conditioner",
  "hair gel",
  "hair spray",
  "hand soap",
  "hand wash",
  "lip balm",
  "mouthwash",
  "razor blades",
  "razors",
  "sanitary pads",
  "sanitary towels",
  "shampoo",
  "shaving foam",
  "shaving gel",
  "soap",
  "tampons",
  "toothbrush",
  "toothpaste",
  "wet wipes",
  "wipes"
],
  "Baby": [
    "nappies", "diapers", "baby wipes", "baby food", "formula"
  ],
  "Pets": [
    "dog food", "cat food", "pet treats", "cat litter"
  ]
};

/* -----------------------------
   AISLE ICONS
   ----------------------------- */

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

/* -----------------------------
   AISLE ORDER (CRITICAL)
   ----------------------------- */

const LIDL_AISLE_ORDER = [
  "Fresh Produce",
  "Meat & Fish",
  "Dairy & Eggs",
  "Bakery",
  "Pantry",
  "Snacks & Sweets",
  "Drinks",
  "Frozen",
  "Household",
  "Toiletries",
  "Baby",
  "Pets",
  "Other"
];

/* -----------------------------
   FLATTENED ITEM LIST (AUTO-SUGGEST)
   - lowercased and deduplicated for reliable matching
   ----------------------------- */

const ALL_LIDL_ITEMS = Array.from(
  new Set(
    Object.values(LIDL_AISLES)
      .flat()
      .map(s => String(s).toLowerCase().trim())
  )
);

/* -----------------------------
   FIND AISLE FOR ITEM
   - robust: compares lowercase -> lowercase
   ----------------------------- */

function getAisleForItem(itemName) {
  const lower = String(itemName).toLowerCase().trim();

  for (const aisle of Object.keys(LIDL_AISLES)) {
    if (LIDL_AISLES[aisle].some(keyword => lower.includes(String(keyword).toLowerCase()))) {
      return aisle;
    }
  }

  return "Other";
}

/* -----------------------------
   DATA MODEL: Meals
   ----------------------------- */

const meals = [
  {
    name: "Bolognese",
    ingredients: ["Spaghetti", "Minced beef", "Passata", "Onion", "Garlic", "red wine", "Carrot", "Celery"]
  },
  {
    name: "Sugo Pasta",
    ingredients: ["Pasta", "Garlic", "Onion", "Passata"]
  },
  {
    name: "Meatball Pasta-bake",
    ingredients: ["Sausages", "Pasta", "Passata", "Onion", "Garlic", "Mozzarella"]
  },
  {
    name: "Chicken Burgers",
    ingredients: ["Chicken breast", "Cream Crackers", "Salad", "Tomato", "Burger Buns", "Egg"]
  },
  {
    name: "Courgette Fritters",
    ingredients: ["Courgette", "Flour", "Egg", "Breadcrumbs", "Garlic", "Yoghurt"]
  },
  {
    name: "Steak & Broccoli Stir-fry",
    ingredients: ["Steak", "Broccoli", "Soy Sauce", "Ginger", "Garlic", "Brown Sugar", "Spring Onions"]
  },
  {
    name: "Pork Stroganoff",
    ingredients: ["Tomato paste", "Dijon mustard", "Sour cream", "Carrots", "Garlic", "Onion", "Pork"]
  },
  {
    name: "Char Siu Pork",
    ingredients: ["Light soy sauce", "Oyster sauce", "Hoisin sauce", "Five-spice powder", "Garlic", "Shaoxing wine", "Pork", "red wine", "Brown sugar", "Honey"]
  },
  {
    name: "Summer Chicken",
    ingredients: ["Red Pepper", "Lime", "Garlic", "Onion Powder", "Chili Powder", "Cumin", "Chicken Breast", "Paprika", "Corn"]
  },
  {
    name: "Yakisoba",
    ingredients: ["Mirin", "Ponzu", "Oyster sauce", "Worcestershire sauce", "Onion", "Carrot", "Red pepper", "Savoy Cabbage", "Spring Onions", "Noodles"]
  },
  {
    name: "Jalfrezi",
    ingredients: ["Green Chilli", "Red Chilli", "Red Chilli", "Red Chilli", "Onion", "Garlic", "Plum Tomato", "Corriander", "Cumin", "Chicken Breast", "Garam Masala", "Turmeric", "red pepper"]
  },
  {
    name: "Christmas Salmon",
    ingredients: ["Green Chilli", "Lime", "Salmon", "Paprika", "Chili Powder", "Onion Powder", "Garlic powder", "Tobasco", "Honey"]
  },
  {
    name: "Pesto",
    ingredients: ["Basil", "Pine nuts", "Parmesan", "Garlic", "pasta"]
  },
  {
    name: "Chicken Katsu",
    ingredients: ["Chicken Breast", "Crackers", "Egg", "Katsu Blocks", "Carrots", "Potato"]
  },
  {
    name: "Sundried Tomato Pasta",
    ingredients: ["Sundried Tomatoes", "Pasta", "Garlic", "Basil", "Parmesan", "Cream", "Spinach", "Pine nuts"]
  },
  {
    name: "Sausage & Mash",
    ingredients: ["Sausages", "Potatoes", "Butter", "Broccoli"]
  },
  {
    name: "Pork Shoulder Roast",
    ingredients: ["Pork Shoulder", "Onion", "Garlic", "Carrots", "Potatoes", "Rosemary", "butter", "White wine"]
  },
  {
    name: "Egg Fried Rice",
    ingredients: ["Egg", "Corn", "Soy Sauce", "Spring Onions", "Garlic", "peas"]
  },
  {
    name: "Chicken and chorizo rice",
    ingredients: ["Chicken Breast", "Chorizo", "Rice", "Onion", "Garlic", "Cherry Tomatoes", "Paprika", "Red Pepper", "Chicken Legs", "Chicken stock", "White wine"]
  },
  {
    name: "Beef & ale stew with dumplings",
    ingredients: ["Beef", "Ale", "Beef Stock", "Onion", "Carrots", "Potatoes", "Butter", "Chives", "Wholemeal flour"]
  },
  {
    name: "Shepherd's Pie",
    ingredients: ["Lamb", "Onion", "Carrots", "Potatoes", "Butter", "Milk", "Red wine", "Leek", "Celery", "Tomato puree"]
  }
];

/* -----------------------------
   DOM ELEMENTS
   ----------------------------- */

const mealListEl = document.getElementById("meal-list");
const shoppingSectionsEl = document.getElementById("shopping-sections");
const manualInput = document.getElementById("manual-item-input");
const addItemBtn = document.getElementById("add-item-btn");
const clearListBtn = document.getElementById("clear-list");
const drawer = document.getElementById("shopping-drawer");
const drawerHandle = document.getElementById("drawer-handle");
const suggestionsBox = document.getElementById("suggestions");

/* -----------------------------
   CONFIG / CONSTANTS
   ----------------------------- */

const COLLAPSED_PX = 90;        // collapsed height in px (keep in sync with CSS)
const MID_VH = 65;              // mid snap point in vh
const FULL_VH = 100;            // full snap point in vh
const SAVE_DEBOUNCE_MS = 250;   // debounce for localStorage writes
const EPS_VH = 0.5;             // tolerance for vh comparisons

/* -----------------------------
   SHOPPING LIST STORAGE
   ----------------------------- */

let shoppingItems = new Map();

function saveShoppingListImmediate() {
  try {
    localStorage.setItem("shoppingItems", JSON.stringify([...shoppingItems]));
  } catch (e) {
    console.error("Failed to save shopping list:", e);
  }
}

let _saveTimer = null;
function saveShoppingList() {
  if (_saveTimer) clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    saveShoppingListImmediate();
    _saveTimer = null;
  }, SAVE_DEBOUNCE_MS);
}

function loadShoppingList() {
  const saved = localStorage.getItem("shoppingItems");
  if (!saved) {
    shoppingItems = new Map();
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      shoppingItems = new Map(parsed);
    } else {
      console.warn("shoppingItems in localStorage has unexpected format, ignoring.");
      shoppingItems = new Map();
    }
  } catch (e) {
    console.error("Failed to load shopping list:", e);
    shoppingItems = new Map();
  }
}

/* -----------------------------
   UTILITIES
   ----------------------------- */

// Display label: simple capitalization for nicer UI
function displayLabel(name) {
  if (!name) return "";
  // split on spaces and punctuation, capitalize words
  return String(name)
    .split(/(\s|-|_)/)
    .map(part => {
      if (part.match(/(\s|-|_)/)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}

/* -----------------------------
   RENDER MEALS
   ----------------------------- */

function renderMeals() {
  mealListEl.innerHTML = "";

  if (!Array.isArray(meals)) return;

  meals.forEach(meal => {
    const li = document.createElement("li");
    li.textContent = meal.name;

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add ingredients";
    addBtn.addEventListener("click", () => {
      meal.ingredients.forEach(ing => {
        const key = String(ing).trim().toLowerCase();
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

/* -----------------------------
   RENDER SHOPPING LIST (GROUPED BY LIDL AISLES)
   ----------------------------- */

function renderShoppingList() {
  shoppingSectionsEl.innerHTML = "";

  if (shoppingItems.size === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No items yet. Add some from meals or manually.";
    shoppingSectionsEl.appendChild(empty);
    saveShoppingList();
    return;
  }

  const grouped = {};

  shoppingItems.forEach((qty, name) => {
    const aisle = getAisleForItem(name);
    if (!grouped[aisle]) grouped[aisle] = [];
    grouped[aisle].push({ name, qty });
  });

  if (Array.isArray(LIDL_AISLE_ORDER)) {
    LIDL_AISLE_ORDER.forEach(aisle => {
      if (!grouped[aisle]) return;

      const section = document.createElement("div");
      section.className = "card";

      const title = document.createElement("h3");
      title.textContent = `${(AISLE_ICONS && AISLE_ICONS[aisle]) || "🛒"}  ${aisle}`;
      section.appendChild(title);

      const ul = document.createElement("ul");

      grouped[aisle].forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${displayLabel(item.name)} (${item.qty})`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Remove";

        delBtn.addEventListener("click", () => {
          const currentQty = shoppingItems.get(item.name);

          if (currentQty > 1) {
            shoppingItems.set(item.name, currentQty - 1);
          } else {
            shoppingItems.delete(item.name);
          }

          renderShoppingList();
        });

        li.appendChild(delBtn);
        ul.appendChild(li);
      });

      section.appendChild(ul);
      shoppingSectionsEl.appendChild(section);
    });
  } else {
    // Fallback: render all grouped aisles in arbitrary order
    Object.keys(grouped).forEach(aisle => {
      const section = document.createElement("div");
      section.className = "card";

      const title = document.createElement("h3");
      title.textContent = `${(AISLE_ICONS && AISLE_ICONS[aisle]) || "🛒"}  ${aisle}`;
      section.appendChild(title);

      const ul = document.createElement("ul");

      grouped[aisle].forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${displayLabel(item.name)} (${item.qty})`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Remove";

        delBtn.addEventListener("click", () => {
          const currentQty = shoppingItems.get(item.name);

          if (currentQty > 1) {
            shoppingItems.set(item.name, currentQty - 1);
          } else {
            shoppingItems.delete(item.name);
          }

          renderShoppingList();
        });

        li.appendChild(delBtn);
        ul.appendChild(li);
      });

      section.appendChild(ul);
      shoppingSectionsEl.appendChild(section);
    });
  }

  saveShoppingList();
}

/* -----------------------------
   MANUAL ADD ITEM
   ----------------------------- */

addItemBtn.addEventListener("click", () => {
  const raw = manualInput.value.trim();
  if (!raw) return;

  const item = raw.toLowerCase();
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

/* -----------------------------
   SUGGESTIONS
   ----------------------------- */

manualInput.addEventListener("input", () => {
  const query = manualInput.value.toLowerCase().trim();

  if (!query) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = ALL_LIDL_ITEMS.filter(item => item.includes(query)).slice(0, 6);

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestionsBox.innerHTML = "";
  matches.forEach(match => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = displayLabel(match);

    div.addEventListener("click", () => {
      // show a nice label in the input, but we store lowercase when adding
      manualInput.value = displayLabel(match);
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

/* -----------------------------
   CLEAR LIST
   ----------------------------- */

clearListBtn.addEventListener("click", () => {
  if (!confirm("Clear all items from the shopping list?")) return;
  shoppingItems.clear();
  renderShoppingList();
});

/* -----------------------------
   DRAGGABLE BOTTOM SHEET
   ----------------------------- */

let startY = 0;
let startHeight = 0;
let currentHeight = 0;

function getVh() {
  return window.innerHeight;
}

let COLLAPSED_VH;

function recalcCollapsed() {
  COLLAPSED_VH = (COLLAPSED_PX / getVh()) * 100; // convert px to vh
}

// Set sheet height and lock body scroll when fully open
function setSheetHeight(vh, animate = true) {
  currentHeight = vh;
  drawer.style.transition = animate ? "height 0.25s ease" : "none";
  drawer.style.height = `${vh}vh`;

  // lock body scroll when fully open
  if (Math.abs(vh - FULL_VH) < 0.1) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function snapToNearest() {
  const distances = [
    { point: COLLAPSED_VH, dist: Math.abs(currentHeight - COLLAPSED_VH) },
    { point: MID_VH, dist: Math.abs(currentHeight - MID_VH) },
    { point: FULL_VH, dist: Math.abs(currentHeight - FULL_VH) }
  ];

  distances.sort((a, b) => a.dist - b.dist);
  setSheetHeight(distances[0].point, true);
}

function onTouchStart(e) {
  const touch = e.touches ? e.touches[0] : e;
  startY = touch.clientY;
  startHeight = currentHeight;
  drawer.style.transition = "none";
}

function onTouchMove(e) {
  const touch = e.touches ? e.touches[0] : e;
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

// Touch handlers
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

// Mouse support (desktop)
function onMouseDown(e) {
  if (e.target.closest("button") || e.target.closest("input")) return;
  onTouchStart(e);
  document.addEventListener("mousemove", onMouseMove, { passive: false });
  document.addEventListener("mouseup", onMouseUp, { once: true });
}

function onMouseMove(e) {
  onTouchMove(e);
}

function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  onTouchEnd();
}

drawer.addEventListener("mousedown", onMouseDown);

// Handle click toggles between collapsed and mid
drawerHandle.addEventListener("click", () => {
  if (Math.abs(currentHeight - COLLAPSED_VH) < EPS_VH) {
    setSheetHeight(MID_VH);
  } else {
    setSheetHeight(COLLAPSED_VH);
  }
});

// Recalculate on resize
window.addEventListener("resize", () => {
  recalcCollapsed();
  if (Math.abs(currentHeight - COLLAPSED_VH) < EPS_VH) {
    setSheetHeight(COLLAPSED_VH);
  }
});

/* -----------------------------
   INIT
   ----------------------------- */

function init() {
  recalcCollapsed();
  currentHeight = COLLAPSED_VH; // ensure sane initial value
  loadShoppingList();
  renderMeals();
  renderShoppingList();
  setSheetHeight(COLLAPSED_VH, false);
}

init();

/* -----------------------------
   SERVICE WORKER REGISTRATION
   ----------------------------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/Shopping-List/service-worker.js").catch(err => {
      console.log("Service Worker registration failed:", err);
    });
  });
}





























