const searchInput = document.getElementById("search-text");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.getElementById("price").querySelector("button");

const changclass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandeler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  //   console.log(searchValue);
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    // console.log(productName);
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const buttonsHandeler = (event) => {
  const filter = event.target.dataset.filter;
  changclass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;

    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchPriceHandeler = (event) => {
  const priceValue = +event.target.parentElement.children[0].value;
  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const finalPrice = +productPrice.split(" ")[1];

    if (!priceValue) {
      product.style.display = "block";
    } else {
      priceValue === finalPrice
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const start = () => {
  searchInput.addEventListener("keyup", searchHandeler);
  buttons.forEach((button) => {
    button.addEventListener("click", buttonsHandeler);
  });
  priceButton.addEventListener("click", searchPriceHandeler);
};

window.addEventListener("load", start);
