const arr = [1,2,3,4,5];

const arr2 = arr.map(numero => numero + 2);

const arr3 = arr2.filter(numero => numero % 2 !== 0);

console.log(arr);
console.log(arr2);
console.log(arr3);