function teste1(num) {

    if(num > 7) // chaves são opcionais em if se houver apenas uma sentença de código
        console.log(num)
        console.log('Final') // segunda sentença fica fora do bloco if sem chave
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com ponto e vírgula, não usar com estruturas de controle
        console.log(num) // em javascript, melhor evitar ";"
    }
}

teste2(6)
teste2(8)
