/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

const getPromise: Promise<any> = new Promise((resolve) => {
  resolve(['text', 50])
})

// function getPromise () {
//   return new Promise((resolve) => {
//     resolve(['Text', 50]);
//   });
// }

getPromise
.then((data) => {
  console.log(data);
});

export {};