const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // função é executada pra cada elemento do array
fabricantes.forEach(fabricante => console.log(fabricante)) // parâmetro será cada elemento do array
// callback é realizado para cada evento (no caso, cada elemento do array)