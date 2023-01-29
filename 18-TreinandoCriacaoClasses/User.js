class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(emailDeLogin, senhaDeLogin) {
    if (this.email === emailDeLogin && this.password === senhaDeLogin) {
      console.log(`Login realizado com sucesso!`);
    } else {
      console.log(`E-mail e/ou senha incorretos!`);
    }
  }
}

const igor = new User("Igor Paprocki", "igorcastilhos2010@hotmail.com", "123");

console.log(igor);
igor.login("igorcastilhos2010@hotmail.com", "123");
