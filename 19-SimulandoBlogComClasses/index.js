const Author = require("./Author");

const john = new Author("John Doe");
const post = john.writePost("Título do Post", "Lorem Ipsum");

post.addComment("Igor Castilhos", "Muito bom!");
post.addComment("Lucas", "Interessante");

console.log(john);
console.log(post);
