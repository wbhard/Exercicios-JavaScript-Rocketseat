const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    

{
        category: "Inteligência Emocional",
        books: [
            {                
 	    title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
const totalCategorias = booksByCategory.length
console.log(totalCategorias)
for(let categoria of booksByCategory){
    console.log(`Total de livros da categoria: ${categoria.category}`)
    console.log(categoria.books.length)
}
function contarAutores(){
    let autores = []
    for(let categoria of booksByCategory){
        for(let livros of categoria.books){
            if(autores.indexOf(livros.author) == -1){
                autores.push(livros.author)
            }
        }
    }
    console.log(`Total de autores: ${autores.length}`)
}
function livrosAugusto(){
    let livros = []

    for(let categoria of booksByCategory){
        for(let livro of categoria.books){
            if(livro.author === "Augusto Cury"){
              livros.push(livro.title)
            }
        }
    }
    console.log(`Livros do Autor: ${livros}`)
}

function livrosAutor(autor){
    let livros = []
    for(let categoria of booksByCategory){
        for(let livro of categoria.books){
            if(livro.author === autor){
              livros.push(livro.title)
            }
        }
    }
    console.log(`Livros do Autor ${autor}: ${livros.join(", ")}`)
}

contarAutores();
livrosAugusto();
livrosAutor("Augusto Cury");
