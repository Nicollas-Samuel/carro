const fs = require('fs');

export async function cadastrarCarro(){
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

export function removercarro(){
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

export function alterarCarro() {
    let as = document.getElementById("001");
    let id = parseInt(document.getElementById("id2-box").value, 10);
    for (let i = 0; i < carros.carro.length; i++) {
        as.innerHTML(carros.carro[i]);
    }
    let carro = carros.carro.find((carro) => carro.id === id);
    if (carro) {
        let novoNome = prompt('Digite o novo nome:');
        carro.nome = novoNome;
        const jsonAtualizado = JSON.stringify(carros, null, 2);
        fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
        console.log('Nome editado com sucesso!');
    } else {
        console.log('Carro não encontrado.');
    }
};

/*function alterarCarro(){
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
            if(carro) {
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
            if(carro) {
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
            if(caroo) {
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
            for(let i = 0; i < index.carros.length; i++){
                console.log(index.carros[i]);
            }
            let id = prompt('Digite o id do carro que você deseja editar a quantida de acentos: ');
            let carro = carros.carro.find((carro) => carro.id === id);
            if(carro) {
                let novaOcupacao = prompt('Digite a nova ocupação: ');
                carro.ocupacao = novaOcupacao;
                const jsonAtualizado = JSON.stringify(index, null, 2);
                fs.writeFileSync('index.json', jsonAtualizado, 'utf8');
                console.log('Ocupação editada com sucesso!');
            } else {
                console.log('carro não encontrado.');
            }
        }
        else if(alea == 5){
            for(let i = 0; i < index.carro.length; i++){
                console.log(index.carro[i]);
            }
            let id = prompt('Digite o id da carro que você deseja editar a ocupação: ');
            let carro = carros.carro.find((carro) => carro.id === id);
            if(carro) {
                let novaQuantidade = prompt('Digite a nova ocupação: ');
                carro.qtAcentos = novaQuantidade;
                const jsonAtualizado = JSON.stringify(index, null, 2);
                fs.writeFileSync('index.json', jsonAtualizado, 'utf8');
                console.log('Ocupação editada com sucesso!');
            } else {
                console.log('carro não encontrado.');
            }
        }
        else if(alea == 6){
            for(let i = 0; i < index.carro.length; i++){
                console.log(index.carros[i]);
            }
            let nom = prompt('Digite o nome da carro que você deseja editar a ocupação: ');
            let carro = index.carros.find((carro) => carro.nome === nom);
            if(carro) {
                let novaOcupacao = prompt('Digite a nova ocupação: ');
                carro.ocupacao = novaOcupacao;
                const jsonAtualizado = JSON.stringify(index, null, 2);
                fs.writeFileSync('index.json', jsonAtualizado, 'utf8');
                console.log('Ocupação editada com sucesso!');
            } else {
                console.log('carro não encontrado.');
            }
        }
        else if(alea == 7){
            continuar = false;
        }
    }
};*/

export async function listarCarros(){
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
                detalhesInfo.textContent = `Marca: ${carro.marca}, Preço: ${carro.preco}`;
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