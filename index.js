function cadastrarCarro(){

}

function removercarro(){

}

function alterarcarro(){

}

function listarcarros(){
    fs.readFile('carros.json', 'utf8', (err, data) => {
        if (err) throw err;
        const carros = JSON.parse(data);
        produtos.forEach(carro => {
        console.log(`ID: ${carros.id}, Nome: ${carros.nome}`);
        if (produto.detalhes) {
            console.log(`Marca: ${carro.detalhes.marca}, Preço: 
            ${produto.detalhes.preço}`);
            }
        });
    });        
}
listarcarros();