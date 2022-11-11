const localCart = JSON.parse(localStorage.getItem("localCart")) || {};
const localCartLength = Object.keys(localCart).length;
const localCartExists = localCartLength ? true : false;
const localCartValues = localCartExists && Object.values(localCart);
let localCartCount = 0;
let localCartSubTotal = 0;

if (localCartExists && localCartLength > 1) {
  localCartCount = localCartValues.reduce((a, b) => a + b.count, 0);
  localCartSubTotal = localCartValues.reduce(
    (a, b) => a + b.price * b.count,
    0
  );
} else if (localCartExists) {
  localCartCount = localCartValues[0].count;
  localCartSubTotal = localCartValues[0].count * localCartValues[0].price;
}

export { localCart, localCartCount, localCartSubTotal };
