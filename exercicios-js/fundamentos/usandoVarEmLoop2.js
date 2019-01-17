const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] () // resultado é sempre 10 porque var não tem escopo de função