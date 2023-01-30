class Comment {
  // Cria a classe
  constructor(username, content) {
    // Cria o construtor
    this.username = username;
    // Atributo username
    this.content = content;
    // Atributo content
    this.createdAt = new Date();
    // Atributo createdAt, que utiliza o objeto global Date
  }
}
module.exports = Comment;
// Exporta a classe
