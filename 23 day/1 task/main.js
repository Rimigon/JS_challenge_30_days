// Generating numbers and marking evens, odds and prime numbers with three different colors.

const generateNums = () => {
  const numInput = document.querySelector('input')
  let number
  document.querySelector('.container').innerHTML = ''

  for (let i = 0; i <= numInput.value; i++) {
    number = document.createElement('div')
    number.className = 'number'
    number.style.fontSize = '24px'
    number.textContent = i
    document.querySelector('.container').appendChild(number)
  }

  const numbers = document.querySelectorAll("div.number");
  numbers.forEach((elem, i) => {
    if (i % 2 === 0) {
      elem.style.backgroundColor = 'green'
    } 
    else{
      elem.style.backgroundColor = '#bfc20c'
    }
  })
  numbers.forEach((elem, i) =>{
    let count = 0
    for(let j = 1; j <= i;j++){
      if(i % j === 0){
        count++;
      }
    }
    if(count == 2){
      elem.style.backgroundColor = 'red'
    }
  })
}