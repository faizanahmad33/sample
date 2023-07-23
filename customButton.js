window.addEventListener("load", function () {
  // Find the "Add to Cart" button
  var addToCartButton = document.querySelector(".add-to-cart");

  // Create the new button element
  var newButton = document.createElement("button");
  newButton.textContent = "New Button";

  // Insert the new button after the "Add to Cart" button
  addToCartButton.parentNode.insertBefore(
    newButton,
    addToCartButton.nextSibling
  );
});
