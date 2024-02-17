const productAdd = document.querySelectorAll(".product__add");

productAdd.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    const productId = product.getAttribute("data-id");
    const productImage = product
      .querySelector(".product__image")
      .getAttribute("src");
    const productCount = parseInt(
      product.querySelector(".product__quantity-value").textContent
    );
    const cartProducts = document.querySelector(".cart__products");
    const existingCartProduct = document.querySelector(
      `.cart__product[data-id="${productId}"]`
    );

    if (!existingCartProduct) {
      cartProducts.innerHTML += `
      <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${productCount}</div>
      </div>
      `;
    } else {
      const existingCount = parseInt(
        existingCartProduct.querySelector(".cart__product-count").textContent
      );
      existingCartProduct.querySelector(".cart__product-count").textContent =
        existingCount + productCount;
    }

    product.querySelector(".product__quantity-value").textContent = "1";
  });
});

// productAdd.forEach((button) => {
//   button.addEventListener("click", () => {
//     const product = button.closest(".product");
//     const productId = product.getAttribute("data-id");
//     const productImage = product
//       .querySelector(".product__image")
//       .getAttribute("src");
//     const productCount = parseInt(
//       product.querySelector(".product__quantity-value").textContent
//     );

//     const cartProduct = document.createElement("div");
//     cartProduct.classList.add("cart__product");
//     cartProduct.setAttribute("data-id", productId);

//     const cartProductImage = document.createElement("img");
//     cartProductImage.classList.add("cart__product-image");
//     cartProductImage.setAttribute("src", productImage);

//     const cartProductCount = document.createElement("div");
//     cartProductCount.classList.add("cart__product-count");
//     cartProductCount.textContent = productCount;

//     cartProduct.appendChild(cartProductImage);
//     cartProduct.appendChild(cartProductCount);

//     const cartProducts = document.querySelector(".cart__products");

//     const existingCartProduct = document.querySelector(
//       `.cart__product[data-id="${productId}"]`
//     );

//     if (!existingCartProduct) {
//       cartProducts.appendChild(cartProduct);
//     } else {
//       const existingCount = parseInt(
//         existingCartProduct.querySelector(".cart__product-count").textContent
//       );
//       existingCartProduct.querySelector(".cart__product-count").textContent =
//         existingCount + productCount;
//     }

//     product.querySelector(".product__quantity-value").textContent = "1";
//   });
// });

const qInc = document.querySelectorAll(".product__quantity-control_inc");

qInc.forEach((button) => {
  button.addEventListener("click", () => {
    const valueElement = button.parentElement.querySelector(
      ".product__quantity-value"
    );
    let value = parseInt(valueElement.textContent);
    valueElement.textContent = value + 1;
  });
});

const qDec = document.querySelectorAll(".product__quantity-control_dec");

qDec.forEach((button) => {
  button.addEventListener("click", () => {
    const valueElement = button.parentElement.querySelector(
      ".product__quantity-value"
    );
    let value = parseInt(valueElement.textContent);
    if (value > 1) {
      valueElement.textContent = value - 1;
    }
  });
});
