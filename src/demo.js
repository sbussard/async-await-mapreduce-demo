const MAX_TIMEOUT = 1000;

let waitThenReturnSelf = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(item), Math.random() * MAX_TIMEOUT);
  });
};

let verboseWaitThenReturnSelf = async (num) => {
  const output = await waitThenReturnSelf(num);
  console.log('about to return ', output);
  return output;
};

let listNumbers = async (numbers) => {
  let numberList = await Promise.all(numbers.map(verboseWaitThenReturnSelf));
  console.log(numberList.reverse());
};

listNumbers(['One', 'Two', 'Three', 'Four']);
