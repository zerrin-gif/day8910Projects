const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes : [70000, 100000],
  expenses : [3000,5000],
  totalIncome () {
    var sum = this.incomes.reduce(function(a, b){
      return a + b;
    }, 0);  
    return sum;
  },
totalExpense () {
  var sum = this.expenses.reduce(function(a, b){
    return a + b;
  }, 0);  
  return sum;
},
addIncome (val){
return this.incomes.push(val)
},
addExpense (val){
  return this.expenses.push(val)
  },
  accountInfo (){
    let result = this.totalIncome() - this.totalExpense()
    return `The profit is $${result}`;
  }
}
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.addIncome(5000));
console.log(personAccount.addExpense(2000));
console.log(personAccount.accountInfo());
console.log(`He has total income : $ ${personAccount.totalIncome()} and his expense is : $ ${personAccount.totalExpense()}`);

