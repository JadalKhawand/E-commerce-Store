let imageInfo = [
  {
    src: "images/0.jpg",
    text: "HEYY",
    link: "https://example.com/link0",
  },
  {
    src: "images/1.jpeg",
    text: "HOW YOU DOIN!!",
    link: "https://example.com/link1",
  },
  {
    src: "images/2.jpeg",
    text: "dummy texxt",
    link: "https://example.com/link2",
  },
];

let imgIndex = 0;

updateUI();

function moveRight() {
  imgIndex = imgIndex + 1;
  if (imgIndex > imageInfo.length - 1) {
    imgIndex = 0;
  }
  updateUI();
}

function moveLeft() {
  imgIndex = imgIndex - 1;
  if (imgIndex < 0) {
    imgIndex = imageInfo.length - 1;
  }
  updateUI();
}

function updateUI() {
  document.querySelector(".firstsection img").src = imageInfo[imgIndex].src;
  document.querySelector(".image-text").textContent = imageInfo[imgIndex].text;
}

let leftBtn = document.querySelector(".left-btn");
leftBtn.addEventListener("click", moveLeft);

let rightBtn = document.querySelector(".right-btn");
rightBtn.addEventListener("click", moveRight);

// let iconElement = document.querySelector(".myIcon");

// let isBackgroundColorChanged = false;

// iconElement.addEventListener("click", function () {
//   if (isBackgroundColorChanged) {
//     iconElement.style.backgroundColor = "white"; // Change to the default color
//   } else {
//     iconElement.style.backgroundColor = "red"; // Change to the desired color
//   }

//   isBackgroundColorChanged = !isBackgroundColorChanged; // Toggle the flag
// });

// const searchIcon = document.getElementById("search");
// searchIcon.addEventListener("mouseover", function () {
//   searchIcon.style.display = "block";
// });
const products = [
  { name: "Shirt", image: "images/coffee.jpeg", price: 99.99 },
  { name: "T-shirt", image: "images/coffee.jpeg", price: 59.99 },
  { name: "coat", image: "images/coffee.jpeg", price: 19.99 },
  { name: "chair", image: "images/coffee.jpeg", price: 9.99 },
  { name: "pen", image: "images/coffee.jpeg", price: 12.99 },
  { name: "pencil", image: "images/coffee.jpeg", price: 5.99 },
  { name: "pants", image: "images/coffee.jpeg", price: 49.99 },
  { name: "laptop", image: "images/coffee.jpeg", price: 999.99 },
];

function generateCard(product) {
  return `
    <div class="card w-52 shadow-md">
      <div class="img-wrapper border h-52 w-52 overflow-hidden">
        <img class="h-full max-w-none" src="${product.image}" alt="${
    product.name
  }" />
      </div>
      <div class="card-details p-2">
        <div class="flex justify-between items-center">
          <h3 class="product-name">${product.name}</h3>
          <i class="fas fa-heart"></i>
        </div>
        <div class="price">$${product.price.toFixed(2)}</div>
      </div>
    </div>
  `;
}

const cardsContainer = document.querySelector(".cards-grid");

products.forEach((product) => {
  const cardHTML = generateCard(product);
  cardsContainer.innerHTML += cardHTML;
});

// managing likes:
const hearts = document.querySelectorAll(".fa-heart");
function addEventHandler(htmlElement) {
  htmlElement.addEventListener("click", function () {
    htmlElement.classList.toggle("red");
  });
}
hearts.forEach(addEventHandler);

// store search hide/show
// get search element
let storeSearch = document.querySelector("#store-search");
// get search icon
let searchIcon = document.querySelector(".fa-search");
function showSearch() {
  storeSearch.classList.remove("hidden");
}
searchIcon.addEventListener("click", showSearch);

let closeSearchIcon = document.querySelector("#store-search-close");
function hideSearch() {
  storeSearch.classList.add("hidden");
}
closeSearchIcon.addEventListener("click", hideSearch);

function filterStoreItems() {
  let searchValue = searchInput.value;
  let maxPrice = priceLimitElement.value;
  if (isNaN(maxPrice)) {
    maxPrice = 0;
  }

  // loop over all cards
  cards.forEach(function (element) {
    const cardInnerText = element.innerText;
    const cardInnerTextParts = cardInnerText.split("$");

    const cardPrice = parseFloat(cardInnerTextParts[1]);

    // above is equivalent to const cardPrice = element.innerText.split('$')[1]

    // either add or remove class hidden
    // if card text content matches search value, remove class hidden
    // hide the ones that are not matching search
    // & show the matching ones
    if (
      element.innerText.toLowerCase().includes(searchValue.toLowerCase()) &&
      (isNaN(maxPrice) || cardPrice < maxPrice)
    ) {
      console.log("entered block to show card", cardPrice, maxPrice);
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
}
const cards = document.querySelectorAll(".card");
// store search filtering
let searchInput = document.querySelector("#store-search input[type=text]");
searchInput.addEventListener("input", filterStoreItems);
// get reference of the price limit input
let priceLimitElement = document.querySelector("#price-limit");
priceLimitElement.addEventListener("input", filterStoreItems);
