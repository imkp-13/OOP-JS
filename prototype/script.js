// constructor function
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = new Date().getTime();
  this.balance = balance;
}

// javascript always sets a prototype on every object and inside javascript a function is also an object
// so here we are setting deposit and withdraw method on function
// prototype (can't be a arrow function because this keyword inside arrow function indicates the global object)
BankAccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance = this.balance - amount;
};

const johnAccount = new BankAccount("John Doe", 1000);
console.log("johnAccount", johnAccount);
