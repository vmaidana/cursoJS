function Pessoa() {
    this.idade = 0

    setInterval(() => { // con função arrow, this não varia pelo contexto
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa