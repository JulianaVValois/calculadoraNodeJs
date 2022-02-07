const minhaCalculadora = require ('./calculadoraNode')
const inquire = require('inquirer')
const calculadora = minhaCalculadora.calculadora

inquire.prompt([
    {
        name: 'x1',
        message: 'Digite o valor do primeiro dígito:'
    },
    {
        name: 'x2',
        message: 'Digite o valor do segundo dígito:'
    },
    {
        name: 'operacao',
        message: 'Digite qual operação vc quer realizar -> somar, subtrair, multiplicar ou dividir:'
    },
]).then((answers) => {
    let x1 = parseFloat(answers.x1)
    let x2 = parseFloat(answers.x2)
    let operacao = answers.operacao
    calculadora(x1,x2,operacao)
}).catch((err) => console.log(err))