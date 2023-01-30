const Post = require("./Post");

class Author {
  // Cria a classe
  constructor(name) {
    // Cria o construtor
    this.name = name;
    // Atributo name
    this.posts = [];
    // Atributo posts, que inicia como um array vazio
  }
  writePost(title, body) {
    // Método para adicionar um post. Passamos um title e um body.
    const post = new Post(title, body, this);
    // O novo post, recebe um title e um body. Além disso, o post recebe o próprio objeto author
    this.posts.push(post);
    // Salva o post no array 'posts'
    return post;
  }
}

module.exports = Author;
