// Put your applicaiton javascript here

// Should
/*
Ajax Add to cart function, vanilla Javascript option
*/
async function addToCart() {
  //Get quantity and variantId of product
  const variantId = document.getElementById("productSelect").value;
  const quantity = document.getElementById("Quantity").value;

  //Fetch request
  const result = await fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": XMLHttpRequest,
    },
    body: JSON.stringify({
      id: variantId,
      quantity: quantity,
    }),
  });

  const data = await result.json();
  console.log(data);

  // Let customer know if there was an error. Can't add anymore etc.
  if (data.status === 422) {
    alert(data.description);
  }
}
/**
 jQuery alternative. Uncomment jQuery loading scripts in theme.liquid.

 function addToCart() {
   jQuery.post("/cart/add.js", $('form[action="/cart/add"]').serialize());
 }
 */
