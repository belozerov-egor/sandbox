function mango(quantity, price){
  let sum = quantity - Math.floor(quantity / 3);
  return sum * price;
}
mango(2, 3)