// basico de modulo interno

const meuModulo = require('./meu_modulo');
//deixando constante para não precisar cahmar meuModulo o tempo todo exemplo meuModulo.soma(10,10). só preciso por soma(10, 10) já funfa
const soma = meuModulo.soma;

soma(2, 3);
soma(5, 10);