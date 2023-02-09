const App = require("./App");

App.createUser("igor@email.com", "Igor Castilhos");
App.createUser("lucas@email.com", "Lucas Castilhos");
App.createUser("juliana@email.com", "Juliana Castilhos");

App.deposit("igor@email.com", 100);

App.transfer("igor@email.com", "lucas@email.com", 20);

App.changeLoanFee(10);

App.takeLoan("juliana@email.com", 2000, 24);

console.log(App.findUser("igor@email.com"));
console.log(App.findUser("igor@email.com").account);

console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);

console.log(App.findUser("juliana@email.com"));
console.log(App.findUser("juliana@email.com").account);
console.log(App.findUser("juliana@email.com").account.loans[0].installments);
