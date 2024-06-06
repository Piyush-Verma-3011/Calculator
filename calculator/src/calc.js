
const add = (a, b) => {
    let sum1 = a + b;
    return sum1;
  };
  
  const sub = (a, b) => {
    let sub1 = a - b;
    return sub1;
  };
  
  const divide = (a, b) => {
    let divide1 = a / b;
    let divide2=divide1.toFixed(2);
    return divide2;
  };
  
  const multi = (a, b) => {
    let multi1 = a * b;
    return multi1;
  };
  
  export { add, sub, divide, multi };