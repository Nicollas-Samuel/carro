const fs = require('fs');

async function cadastrarCarro(){
    const id = document.getElementById('id-box').value;
    const nome = document.getElementById('nome-box').value;
    const marca = document.getElementById('marca-box').value;
    const tipo = document.getElementById('tipo-box').value;
    const modelo = document.getElementById('modelo-box').value;
    const qtAcentos = document.getElementById('qtAcentos-box').value;
    const ano = document.getElementById('ano-box').value;
    const preco = document.getElementById('preco-box').value;

    const novoCarro = {
        id: id,
        nome: nome,
        marca: marca,
        tipo: tipo,
        modelo: modelo,
        qtAcentos: qtAcentos,
        ano: ano,
        preco: preco
    };

    let carros = { carro: [] };
    if (fs.existsSync('carros.json')) {
        carros = JSON.parse(fs.readFileSync('carros.json', 'utf8'));
    }

    carros.carro.push(novoCarro);
    const jsonAtualizado = JSON.stringify(carros, null, 2);
    fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');

    /*/carros.carro.push(novoCarro);
    const jsonAtualizado = JSON.stringify(carros, null, 2);
    fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
    console.log('Novo carro adicionado com sucesso!');*/
}

function removercarro(){
    for(let i = 0; i < carros.carro.length; i++){
        console.log(carros.carro[i]);
    }
    let id = prompt('Digite o id do carro que você deseja remover: ');
    let carro = carros.carro.find((carro) => carro.id === id);
    if(carro){
        carros.carro.splice(carro, 1);
        const jsonAtualizado = JSON.stringify(carros, null, 2);
        fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
        console.log('carro removido com sucesso!');
    } else {
        console.log('carro não encontrado.');
    }
}

function alterarcarro(){
    let continuar = true;
    let alea = 0;
    while(alea < 7){
        console.log('1- Editar nome');
        console.log('2- Editar marca');
        console.log('3- Editar tipo');
        console.log('4- Editar quantidade de acentos');
        console.log('5- Editar ano');
        console.log('6- Editar preço')
        console.log('7- Sair');
        alea = parseInt(prompt('Digite uma opção: '));
 
        if(alea === 1){
            for(let i = 0; i < carros.carro.length; i++){
                console.log(carros.carro[i]);
            }
            let id = prompt('Digite o id do carro que você deseja editar:');
            let carro = carros.carro.find((carro) => carro.id === id);
            if(pessoa) {
                let novoNome = prompt('Digite o novo nome:');
                carro.nome = novoNome;
                const jsonAtualizado = JSON.stringify(carros, null, 2);
                fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
                console.log('Nome editado com sucesso!');
            } else {
                console.log('carro não encontrado.');
            }
        }
        else if(alea === 2){
            for(let i = 0; i < carros.carro.length; i++){
                console.log(carros.carro[i]);
            }
            let id = prompt('Digite o id do carro que você deseja editar a marca:');
            let carro = carros.carro.find((carro) => carro.id === id);
            if(pessoa) {
                let novaMarca = prompt('Digite a nova marca:');
                carro.marca = novaMarca;
                const jsonAtualizado = JSON.stringify(index, null, 2);
                fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
                console.log('Nome editado com sucesso!');
            } else {
                console.log('carro não encontrado.');
            }
        }
        else if(alea == 3){
            for(let i = 0; i < carros.carro.length; i++){
                console.log(carros.carro[i]);
            }
            let id = prompt('Digite o id do carro que você deseja editar o tipo: ');
            let carro = carros.carro.find((carro) => carro.id === id);
            if(pessoa) {
                let novoTipo = prompt('Digite o novo tipo: ');
                carro.detalhes.tipo = novoTipo;
                const jsonAtualizado = JSON.stringify(carros, null, 2);
                fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
                console.log('Tipo editado com sucesso!');
            } else {
                console.log('carro não encontrada.');
            }
        }
        else if(alea == 4){
            for(let i = 0; i < index.pessoas.length; i++){
                console.log(index.pessoas[i]);
            }
            let id = prompt('Digite o id do carro que você deseja editar a quantida de acentos: ');
            let pessoa = carros.carro.find((carro) => carro.id === id);
            if(pessoa) {
                let novaOcupacao = prompt('Digite a nova ocupação: ');
                pessoa.ocupacao = novaOcupacao;
                const jsonAtualizado = JSON.stringify(index, null, 2);
                fs.writeFileSync('index.json', jsonAtualizado, 'utf8');
                console.log('Ocupação editada com sucesso!');
            } else {
                console.log('Pessoa não encontrada.');
            }
        }
        else if(alea == 5){
            for(let i = 0; i < index.pessoas.length; i++){
                console.log(index.pessoas[i]);
            }
            let id = prompt('Digite o id da pessoa que você deseja editar a ocupação: ');
            let carro = carros.carro.find((carro) => carro.id === id);
            if(pessoa) {
                let novaQuantidade = prompt('Digite a nova ocupação: ');
                pessoa.qtAcentos = novaQuantidade;
                const jsonAtualizado = JSON.stringify(index, null, 2);
                fs.writeFileSync('index.json', jsonAtualizado, 'utf8');
                console.log('Ocupação editada com sucesso!');
            } else {
                console.log('Pessoa não encontrada.');
            }
        }
        else if(alea == 6){
            for(let i = 0; i < index.pessoas.length; i++){
                console.log(index.pessoas[i]);
            }
            let nom = prompt('Digite o nome da pessoa que você deseja editar a ocupação: ');
            let pessoa = index.pessoas.find((pessoa) => pessoa.nome === nom);
            if(pessoa) {
                let novaOcupacao = prompt('Digite a nova ocupação: ');
                pessoa.ocupacao = novaOcupacao;
                const jsonAtualizado = JSON.stringify(index, null, 2);
                fs.writeFileSync('index.json', jsonAtualizado, 'utf8');
                console.log('Ocupação editada com sucesso!');
            } else {
                console.log('Pessoa não encontrada.');
            }
        }
        else if(alea == 7){
            continuar = false;
        }
    }
}

async function listarCarros(){
    try {
        const response = await fetch('carros.json');
        const carros = await response.json();
        const listador = document.getElementById('listador');
        listador.innerHTML = '';

        carros.forEach(carro => {
            const carroInfo = document.createElement('div');
            carroInfo.textContent = `ID: ${carro.id}, Nome: ${carro.nome}`;
            
            if (carro.detalhes) {
                const detalhesInfo = document.createElement('div');
                detalhesInfo.textContent = `Marca: ${carro.detalhes.marca}, Preço: ${carro.detalhes.preco}`;
                carroInfo.appendChild(detalhesInfo);
            }
            
            listador.appendChild(carroInfo);
        });
    } catch (err) {
        console.error('Erro ao ler o arquivo carros.json', err);
    }     
}
    /*fetch.readFile('carros.json', 'utf8', (err, data) => {
        if (err) throw err;
        const carros = JSON.parse(data);
        carros.forEach(carro => {
        console.log(`ID: ${carro.id}, Nome: ${carro.nome}`);
        if (carro.detalhes) {
            const valor = document.getElementById('listador')
            valor.addEventListener(`Marca: ${carro.detalhes.marca}, Preço: 
            ${carro.detalhes.preço}`);
            console.log(`Marca: ${carro.detalhes.marca}, Preço: 
            ${carro.detalhes.preço}`);
        }
        });
    });*/     
//}