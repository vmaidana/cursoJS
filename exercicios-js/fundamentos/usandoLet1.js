var numero = 1
{
    let numero = 2 // variável com let tem escopo menos abrangente
    console.log('dentro =', numero) 
    // variáveis com mesmo nome têm valores diferentes e podem coexistir por estarem em blocos diferentes
}
console.log('fora =', numero)