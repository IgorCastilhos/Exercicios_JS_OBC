const Comment = require("./Comment");
// Importa a classe Comment
class Post {
  // Cria a classe
  constructor(title, body, author) {
    // Cria o construtor
    this.title = title;
    // Atributo title
    this.body = body;
    // Atributo body
    this.author = author;
    // Atributo author
    this.comments = [];
    // Atributo comments, que inicia como um array vazio
    this.createdAt = new Date();
    // Atributo createdAt, que utiliza o objeto global Date
  }
  addComment(username, content) {
    this.comments.push(new Comment(username, content));
  }
  /* 
  Método addComment: adiciona um comentário no array comments.
  Deve receber username e content como parâmetros. 
  Utiliza o método push do array 'comments' para adicionar um novo 
  objeto da classe Comment.
  new Comment recebe os parâmetros que vêm de addComment para acionar o seu
  próprio construtor e então gerar o comentário.
  */
}
module.exports = Post;
// Exporta a classe
