const btnAddNumber = document.querySelector('.btn-add-number');
const myArray = [];

let sum = (array) => {
  let sumArgs = 0;
  for (let i = 0; i < array.length; i++) {
     if (typeof array[i] !== 'number') {
      console.log('All elements must be numbers!');
      return;
    }
      sumArgs += array[i];
  }
  return sumArgs;
}
 
document.querySelector('.counter').innerText = 0;

btnAddNumber.addEventListener('click', () => {
  let sumOfMyArray = sum(myArray);
  if (sumOfMyArray === null) {
    localStorage.setItem('myArrayInfo', JSON.stringify(myArray));
  }
  else {
    const number = prompt('Please give me a number to add:')
    myArray.push(Number(number));
    sumOfMyArray += Number(number);
    localStorage.setItem('myArrayInfo', JSON.stringify(myArray));
    document.querySelector('.counter').innerText = sumOfMyArray.toString();
    console.log(myArray);
  }
});