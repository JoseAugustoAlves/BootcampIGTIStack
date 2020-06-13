import {promises} from "fs";

async function inserirLancamento(lancamento, tipo){
    let json = JSON.parse(await readFile("lancamentos.json"));
    
    lancamento = {
        id: json.nextId++, ...lancamento
    };
    
    if(tipo == D){
        lancamentos.valor = lancamentos.valor * -1; 
    }

    json.lancamentos.push(lancamento);

    await writeFile("lancamentos.json", JSON.stringify(json));

    return lancamento
}

export {inserirLancamento}