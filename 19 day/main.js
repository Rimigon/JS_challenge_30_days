// Create a closure which has one inner function

function outerFunction() {
  let count = 0;
  function innerFunction() {
      count++
      return count
  }

  return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// Create a closure which has three inner functions

function outerFunction() {
  let count = 0;
  function plusOne() {
      count++
      return count
  }
  function minusOne() {
      count--
      return count
  }

  return {
      plusOne:plusOne(),
      minusOne:minusOne()
  }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense
// and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


function personAccount(firstname, lastname, incomes, expenses){
  function totalIncome(){
    return incomes
  }
  function totalExpense(){
    return expenses
  }
  function accountInfo(){
    return "${firstname} ${lastname}, ${incomes}, ${expenses}"
  }
  function addIncome(numIncome){
    return incomes + numIncome
  }
  function addExpense(numExpense){
    return expenses + numExpense
  }
  function accountBalance(){
    return incomes - expenses
  }
}