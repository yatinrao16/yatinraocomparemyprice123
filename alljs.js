let selectedProducts = [];

function updateComparisonButton(productIndex) {
  const addButton = document.getElementById(`addButton${productIndex}`);
  addButton.classList.toggle("added");

  if (addButton.classList.contains("added")) {
    selectedProducts.push(products[productIndex]);
  } else {
    selectedProducts = selectedProducts.filter(
      (product) => product !== products[productIndex]
    );
  }

  if (selectedProducts.length === 2) {
    openComparisonPopup();
    const comparisonDetails = document.getElementById("comparison-container");
    comparisonDetails.innerHTML = "";
    selectedProducts.forEach((product) => {
      const productCard = createComparisonCard(product);
      comparisonDetails.appendChild(productCard);
    });
  }
}

function renderProducts() {
  const searchInput = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

  const brandFilter = document.getElementById("brand-filter").value;
  const minPriceF =
    parseFloat(document.getElementById("min-pricef").value) || 0;
  const maxPriceF = parseFloat(document.getElementById("max-pricef").value);
  const minPriceA =
    parseFloat(document.getElementById("min-pricea").value) || 0;
  const maxPriceA = parseFloat(document.getElementById("max-pricea").value);
  const minPriceC =
    parseFloat(document.getElementById("min-pricec").value) || 0;
  const maxPriceC = parseFloat(document.getElementById("max-pricec").value);

  const filteredProducts = products.filter((product) => {
    const nameN = product.name.toLowerCase().includes(searchInput);
    const priceF = parseFloat(product.pricef.replace(",", ""));
    const priceA = parseFloat(product.pricea.replace(",", ""));
    const priceC = parseFloat(product.pricec.replace(",", ""));
    const brand = product.brand.toLowerCase();
    const passBrandFilter =
      brandFilter === "" || brand.includes(brandFilter.toLowerCase());
    const passPriceFFilter =
      isNaN(minPriceF) ||
      isNaN(maxPriceF) ||
      (priceF >= minPriceF && priceF <= maxPriceF);
    const passPriceAFilter =
      isNaN(minPriceA) ||
      isNaN(maxPriceA) ||
      (priceA >= minPriceA && priceA <= maxPriceA);
    const passPriceCFilter =
      isNaN(minPriceC) ||
      isNaN(maxPriceC) ||
      (priceC >= minPriceC && priceC <= maxPriceC);

    return (
      passBrandFilter &&
      passPriceFFilter &&
      passPriceAFilter &&
      passPriceCFilter &&
      nameN
    );
  });

  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  filteredProducts.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.src = product.image;
    productImage.alt = "Product Image";
    productCard.appendChild(productImage);

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productDetails.appendChild(productName);

    const flipkartPrice = document.createElement("a");
    flipkartPrice.classList.add("flipkart");
    flipkartPrice.href = product.flipkart;
    flipkartPrice.textContent = "₹" + product.pricef;
    productCard.appendChild(flipkartPrice);

    const amazonPrice = document.createElement("a");
    amazonPrice.classList.add("amazon");
    amazonPrice.href = product.amazon;
    amazonPrice.textContent = "₹" + product.pricea;
    productCard.appendChild(amazonPrice);

    const cromaPrice = document.createElement("a");
    cromaPrice.classList.add("croma");
    cromaPrice.href = product.croma;
    cromaPrice.textContent = "₹" + product.pricec;
    productCard.appendChild(cromaPrice);

    const addButton = document.createElement("button");
    addButton.id = `addButton${index}`;
    addButton.textContent = "Add to Compare";
    addButton.addEventListener("click", () => updateComparisonButton(index));
    productCard.appendChild(addButton);

    const selection1 = document.createElement("div");
    selection1.classList.add("product-selection1");
    product.selection1.forEach((selection) => {
      const selectionItem = document.createElement("span");
      selectionItem.textContent = selection.name;
      selection1.appendChild(selectionItem);
    });
    productDetails.appendChild(selection1);

    const selection2 = document.createElement("div");
    selection2.classList.add("product-selection2");
    product.selection2.forEach((selection) => {
      const selectionItem = document.createElement("span");
      selectionItem.textContent = selection.name;
      selection2.appendChild(selectionItem);
    });
    productDetails.appendChild(selection2);
    productCard.appendChild(productDetails);
    productsContainer.appendChild(productCard);
  });

}

function applyFilters() {
  renderProducts();
  navBar.classList.toggle("active");
 
}

function searchProducts() {
  renderProducts();
  hideSuggestions();
}

document.getElementById("search").addEventListener("click", searchProducts);

// document
//   .getElementById("search-input")
//   .addEventListener("keyup", function (event) {
//     if (event) {

//         renderProducts();
//     }
//   });

function removeFilters() {
  document.getElementById("brand-filter").value = "";
  document.getElementById("min-pricef").value = "";
  document.getElementById("max-pricef").value = "";
  document.getElementById("min-pricea").value = "";
  document.getElementById("max-pricea").value = "";
  document.getElementById("min-pricec").value = "";
  document.getElementById("max-pricec").value = "";
  document.getElementById("search-input").value = "";
 
  renderProducts();
}

document
  .getElementById("apply-filter-btn")
  .addEventListener("click", renderProducts);
document
  .getElementById("removeFiltersBtn")
  .addEventListener("click", removeFilters);

renderProducts();

function createComparisonCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card1");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productCard.appendChild(productImage);

  const productName = document.createElement("h3");
  productName.textContent = product.name;
  productCard.appendChild(productName);

  const productBrand = document.createElement("p");
  productBrand.textContent = product.brand.toUpperCase();
  productCard.appendChild(productBrand);

  const flipkartPrice = document.createElement("a");
  flipkartPrice.classList.add("flipkart1");
  flipkartPrice.href = product.flipkart;
  flipkartPrice.textContent = "₹" + product.pricef;
  productCard.appendChild(flipkartPrice);

  const amazonPrice = document.createElement("a");
  amazonPrice.classList.add("amazon1");
  amazonPrice.href = product.amazon;
  amazonPrice.textContent = "₹" + product.pricea;
  productCard.appendChild(amazonPrice);

  const cromaPrice = document.createElement("a");
  cromaPrice.classList.add("croma1");
  cromaPrice.href = product.croma;
  cromaPrice.textContent = "₹" + product.pricec;
  productCard.appendChild(cromaPrice);

  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  const selection1 = document.createElement("div");
  selection1.classList.add("product-selection1");
  product.selection1.forEach((selection) => {
    const selectionItem = document.createElement("span");
    selectionItem.textContent = selection.name;
    selection1.appendChild(selectionItem);
  });
  productDetails.appendChild(selection1);

  const selection2 = document.createElement("div");
  selection2.classList.add("product-selection2");
  product.selection2.forEach((selection) => {
    const selectionItem = document.createElement("span");
    selectionItem.textContent = selection.name;
    selection2.appendChild(selectionItem);
  });
  productDetails.appendChild(selection2);
  productCard.appendChild(productDetails);

  return productCard;
}

function openComparisonPopup() {
  const comparisonPopup = document.getElementById("comparisonPopup");
  comparisonPopup.style.display = "flex";
  document.getElementById("popupBackground").style.display = "block";
}

function closeComparisonPopup() {
  const comparisonPopup = document.getElementById("comparisonPopup");
  comparisonPopup.style.display = "none";
  selectedProducts = [];
  location.reload();
  document.getElementById("popupBackground").style.display = "none";
}

function removeComparisonPopup() {
  closeComparisonPopup();
}

const searchBox = document.getElementById("search-input");
const suggestionContainer = document.getElementById("suggestionContainer");
suggestionContainer.addEventListener("click", onSuggestionClick);

function onSuggestionClick(event) {
  const clickedSuggestion = event.target.textContent;

  searchBox.value = clickedSuggestion;
  hideSuggestions();
  // Perform search action based on the selected suggestion (Here you can implement your own search functionality)
  console.log("Searching for:", clickedSuggestion);
}

// Function to display search suggestions
function showSuggestions() {
  const searchTerm = searchBox.value.toLowerCase();
  const suggestions = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  if (suggestions.length > 0) {
    suggestionContainer.innerHTML = suggestions
      .map((product) => `<p>${product.name}</p>`)
      .join("");
    suggestionContainer.style.display = "block";
  } else {
    suggestionContainer.innerHTML = "";
    suggestionContainer.style.display = "none";
  }
}
function hideSuggestions() {
  suggestionContainer.style.display = "none";
}

function clearSearchInput() {
  searchBox.value = "";
  hideSuggestions();
}

searchBox.addEventListener("input", showSuggestions);



const menuIcon = document.querySelector("#menuicon1");
const navBar = document.querySelector(".filters");
let isCross = false;

menuIcon.onclick = () => {
  navBar.style.display = "block";
  isCross = !isCross;
  menuIcon.className = isCross ?  'uil uil-times':'uil uil-filter';
  
  navBar.classList.toggle("active");
};
