let imageInfo = [
  {
    src: "images/firstimage.jpg",
    text: "Image1: Lorem ipsum dolor sit",
    link: "https://example.com/link0",
  },
  {
    src: "images/secondimage.jpg",
    text: "Image2: Lorem ipsum dolor sit",
    link: "https://example.com/link1",
  },
  {
    src: "images/thirdimage.jpeg",
    text: "Image3: Lorem ipsum dolor sit",
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

let products = [
  { name: "Shirt", img: "images/shirt.jpg", price: 99.99, id: "1" },
  { name: "T-shirt", img: "images/tshirt.jpg", price: 59.99, id: "2" },
  { name: "coat", img: "images/coat.jpeg", price: 19.99, id: "3" },
  { name: "chair", img: "images/chair.jpeg", price: 9.99, id: "4" },
  { name: "pen", img: "images//pen.png", price: 12.99, id: "5" },
  { name: "pencil", img: "images/pencil.jpg", price: 5.99, id: "6" },
  { name: "pants", img: "images/pants.jpg", price: 49.99, id: "7" },
  { name: "laptop", img: "images/laptop.jpg", price: 999.99, id: "8" },
];
let cardsGrid = document.querySelector(".cards-grid");
function populateProductsGrid(productsParam) {
  cardsGrid.innerHTML = "";
  productsParam.forEach(function (product) {
    let cardHTML = createHTMLProductCard(product);
    cardsGrid.innerHTML = cardsGrid.innerHTML + cardHTML;
  });
}
populateProductsGrid(products);

function filterProducts(products, maxPrice, searchTerm) {
  // filter by price
  let filteredProducts = products.filter(function (product) {
    if (maxPrice <= 0 || isNaN(maxPrice)) {
      return true;
    }

    // product.price
    if (product.price < maxPrice) {
      return true;
    } else {
      return false;
    }
  });

  // filter by search
  filteredProducts = filteredProducts.filter(function (product) {
    if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  return filteredProducts;
}

let maxPriceInputElement = document.querySelector("#max-price");
let searchTermElement = document.querySelector("#search-term");

maxPriceInputElement.addEventListener("input", function () {
  let filteredProducts = filterProducts(
    products,
    maxPriceInputElement.value,
    searchTermElement.value
  );
  populateProductsGrid(filteredProducts);
});

searchTermElement.addEventListener("input", function () {
  populateProductsGrid(
    filterProducts(
      products,
      maxPriceInputElement.value,
      searchTermElement.value
    )
  );
});
function createHTMLProductCard(product) {
  let cardHTML = `
  <div class="card w-52 shadow-md">
      <div class="img-wrapper border h-52 w-52 overflow-hidden">
        <img class="h-full max-w-none" src="${product.img}" alt="" />
      </div>
      <div class="card-details p-2">
        <div class="flex justify-between items-center">
          <h3 class="product-name">${product.name}</h3>
          <i class="fas fa-heart cursor-pointer"></i>
        </div>
        <div class="flex justify-between">
        <div class="price">$${product.price}</div>
        <i class="cart fas fa-shopping-cart cursor-pointer" data-product-id="${product.id}"></i>

        </div>
        </div>
      </div>
  </div>
  `;
  return cardHTML;
}

function sortPriceAsc(arrayOfItems) {
  let sortedArr = arrayOfItems.sort(function (prod1, prod2) {
    return prod1.price - prod2.price;
  });

  return sortedArr;
}

function sortPriceDesc(arrayOfItems) {
  let sortedArr = arrayOfItems.sort(function (prod1, prod2) {
    return prod2.price - prod1.price;
  });

  return sortedArr;
}

document.querySelector(".sort-asc").addEventListener("click", function () {
  let filteredProducts = filterProducts(
    products,
    maxPriceInputElement.value,
    searchTermElement.value
  );
  let sortedArr = sortPriceAsc(filteredProducts);
  populateProductsGrid(sortedArr);
});

document.querySelector(".sort-desc").addEventListener("click", function () {
  let filteredProducts = filterProducts(
    products,
    maxPriceInputElement.value,
    searchTermElement.value
  );
  let sortedArr = sortPriceDesc(filteredProducts);
  populateProductsGrid(sortedArr);
});

// array thing:
// function bblSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     // Last i elements are already in place
//     for (var j = 0; j < arr.length - i - 1; j++) {
//       // Checking if the item at present iteration
//       // is greater than the next iteration
//       if (arr[j] > arr[j + 1]) {
//         // If the condition is true
//         // then swap them
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   // Print the sorted array
//   setTimeout(function () {
//     console.log(arr.reverse());
//   }, 2000);
// }

// array.sort() will not work for a 2 digit numbers
// so we have to add some parameters inside the sort()
// array.sort(function(a,b){
//  return a-blur;
// })

// let array = [1, 2, 3, 4, 10, 6, 7, 8, 9, 5];
// let evenArray = [];
// let oddArray = [];
// console.log(array);
// sorted = bblSort(array);

// for (let i = 0; i <= array.length; i++) {
//   if (i % 2 == 0) {
//     evenArray.push(i);
//   } else {
//     oddArray.push(i);
//   }
// }
// let onlyOdd = Array.filter(function(number){
//   if(number % 2== 0)
//   {
//     return false;
//   }
//   else{
//     return true;
//   }
// })
// arr.filter((num)=> num<3) btred l ar2am le a2al men 3
// console.log(evenArray);
// console.log(oddArray);
const hearts = document.querySelectorAll(".fa-heart");
function addEventHandler(htmlElement) {
  htmlElement.addEventListener("click", function () {
    htmlElement.classList.toggle("red");
  });
}
hearts.forEach(addEventHandler);

// adding to cart

let cartArray = [];
const cartItem = document.querySelectorAll(".cart");

function addCart(element) {
  element.addEventListener("click", function () {
    const productId = element.dataset.productId;
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    cartArray.push(selectedProduct);

    console.log("Added to cart:", selectedProduct);
    populateProductsCart(cartArray); // Update the cart display
    showAddedToCartMessage(selectedProduct.name);
  });
}

cartItem.forEach(addCart);

let openCheckout = document.querySelector(".cartmenu");
let showCartTrigger = document.querySelector(".checkout");

function showCart() {
  openCheckout.classList.remove("hidden");
}

showCartTrigger.addEventListener("click", showCart);

let closeCheckout = document.querySelector(".cartmenu .closeCart");
function hideCart() {
  openCheckout.classList.add("hidden");
}
closeCheckout.addEventListener("click", hideCart);

function createHTMLProductCart(cartItem) {
  let cardHTML = `
    <div class="card w-52 shadow-md">
      <div class="img-wrapper border h-52 w-52 overflow-hidden">
        <img class="h-full max-w-none" src="${cartItem.img}" alt="" />
      </div>
      <div class="card-details p-2">
        <div class="flex justify-between items-center">
          <h3 class="product-name">${cartItem.name}</h3>


          <i onclick="removeProductFromCart('${cartItem.id}')" class="far fa-times-circle cursor-pointer"></i>

          
        </div>
        <div class="flex justify-between">
          <div class="price">$${cartItem.price}</div>
          
        </div>
      </div>
    </div>
  `;
  return cardHTML;
}

let cartsGrid = document.querySelector(".cartObjects");
function populateProductsCart(cartArray) {
  cartsGrid.innerHTML = "";
  cartArray.forEach(function (cartItem) {
    let cardHTML = createHTMLProductCart(cartItem);
    cartsGrid.innerHTML += cardHTML;
  });

  // Update the total price
  const cartTotalElement = document.getElementById("cartTotal");
  const total = calculateCartTotal(cartArray);
  cartTotalElement.textContent = total.toFixed(2); // Format the total price
}

populateProductsCart(cartArray);
let targetIndex = products.findIndex((product) => product.id === product);

function removeProductFromCart(productId) {
  const selectedIndex = cartArray.findIndex(
    (product) => product.id === productId
  );

  if (selectedIndex !== -1) {
    // Remove the product from the cartArray
    const removedProduct = cartArray.splice(selectedIndex, 1)[0];
    console.log("Product removed from cart:", removedProduct);
    populateProductsCart(cartArray); // Update the cart display
  } else {
    console.log("Product not found in cart");
  }
}

function calculateCartTotal(cartArray) {
  return cartArray.reduce((total, product) => total + product.price, 0);
}
function showAddedToCartMessage(productName) {
  const addedToCartMessage = document.getElementById("addedToCartMessage");
  addedToCartMessage.textContent = `${productName} added to cart`;
  addedToCartMessage.classList.add("show"); // Add a class to show the message

  // Hide the message after a certain period (e.g., 2 seconds)
  setTimeout(() => {
    addedToCartMessage.textContent = "";
    addedToCartMessage.classList.remove("show");
  }, 2000);
}
function removeAllProducts() {
  cartArray = [];
  populateProductsCart(cartArray);
}
