const add = (first, second) => {
  return first + second;
}

const multiply = (first, second) => {
  return first * second;
}

function ReducePractice() {
  /* const numbers = [20, 4, 235, 65, 89];
  const total = numbers.reduce((previous, current) => previous + current, 0);
  console.log(total); */
  /* const items = [
    {id: 1, name: 'alta', price: 100},
    {id: 2, name: 'alta', price: 200},
    {id: 3, name: 'alta', price: 300}
  ]
  const total = items.reduce((previous, current) => previous + current.price, 0);
  console.log(total); */
}

const getTotalPrice = products => {
  const total = products.reduce((previous, current) => previous + current.price, 0);
  return total;
}

export { add, multiply, getTotalPrice as getTotal};