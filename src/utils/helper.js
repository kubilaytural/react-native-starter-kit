// Width Percentage
function log(title, message) {
  const styles = [
    'color: #cc3300',
    'display: block',
    'line-height: 20px',
    'text-align: center',
    'font-weight: bold',
  ].join(';');

  console.log(`%c${title.toUpperCase()}`, styles, message);
}

function error(err, screenName) {
  const styles = [
    'color: #cc3300',
    'display: block',
    'line-height: 20px',
    'text-align: center',
    'font-weight: bold',
  ].join(';');

  console.log(`ERROR %c${screenName.toUpperCase()}`, styles, err);
}

function getProductCodes(basket) {
  const productCodes = [];
  basket.map((item) => {
    productCodes.push(item.productId);
  });
  return productCodes;
}

function calculateBasketPrice(basket) {
  console.log('basket', basket);
  let totalPrice = 0;
  basket.map((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}

export default {
  log,
  error,
  calculateBasketPrice,
  getProductCodes,
};
