fetch("http://localhost:3000/filmes?_expand=produtoras")
    .then((req) => req.json())
    .then((data) => mostraFilmes(data));

function mostraFilmes(filmes) {
    const htmlFilmes = filmes.map(
        (filme) => `
        <h2>${filme.titulo}</h2>
        <h4>Produtora: ${filme.produtoras}</h4>`
    );

    document.getElementById('app').innerHTML = htmlFilmes;
}







