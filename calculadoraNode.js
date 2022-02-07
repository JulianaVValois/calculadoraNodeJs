module.exports = {
    calculadora (x1, x2, operacao) {
        switch (operacao) {
            case 'somar':
                console.log(`A soma entre ${x1} e ${x2} é: ${(x1+x2)}`);
                break;
            case 'subtrair':
                console.log(`A subtração entre ${x1} e ${x2} é: ${(x1-x2)}`);
                break;
            case 'multiplicar':
                console.log(`O produto entre ${x1} e ${x2} é: ${(x1*x2)}`);
                break;
            case 'dividir':
                console.log(`A divisão entre ${x1} e ${x2} é: ${(x1/x2)}`);
                break;
            default:
                console.log('Desculpe, essa operação não é válida!')
        }
    }
}