// constructor function
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = new Date().getTime();
  this.balance = balance;

  // method to deposit and withdraw from the bank
  this.deposit = (amount) => {
    this.amount = this.amount + amount;
  };

  this.withdraw = (amount) => {
    this.amount = this.amount - amount;
  };
}

// object of the function
// const johnAccount = new BankAccount("John Doe", 5000);

// an empty array to store value of each account
const accounts = [];

// variable to perform DOM manipulation
const accountForm = document.getElementById("accountForm");
const customerName = document.getElementById("customerName");
const initialBalance = document.getElementById("initialBalance");
const depositForm = document.getElementById("depositForm");
const accountNumber = document.getElementById("accountNumber");
const depositAmount = document.getElementById("depositAmount");
const withdrawForm = document.getElementById("depositForm");
const withdrawAmount = document.getElementById("depositAmount");

// to create account
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(
    customerName?.value,
    Number(initialBalance?.value)
  );
  accounts.push(account);
  console.log("accounts", accounts);
});

// to deposit amount
depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (elem) => elem.accountNumber === Number(accountNumber?.value)
  );
  account.deposit(depositAmount?.value);
  console.log("accounts", accounts);
});

// to withdraw amount
withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (elem) => elem.accountNumber === Number(accountNumber?.value)
  );
  if (Number(initialBalance) === 0) {
    return;
  }
  account.withdraw(depositAmount?.value);
  console.log("accounts", accounts);
});
