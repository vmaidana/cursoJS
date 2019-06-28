function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        this.idade++
        console.log(self.idade)// utilizando a constante pra referenciar o objeto como this
    }/*.bind(this)*/, 1000)//tempo em milissegundos
}

new Pessoa