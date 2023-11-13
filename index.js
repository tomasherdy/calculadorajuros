// Importa o módulo readline-sync para receber entrada do usuário
import entradaDados from 'readline-sync';

// Pede ao usuário para informar o valor devido
let valor = entradaDados.question('Informe o valor devido: R$');

// Verifica se o valor informado é menor ou igual a zero
if (Number(valor) <= 0) {
    console.log('Valor inválido. O valor da dívida deve ser maior que zero.');
} else {
    // Pede ao usuário para informar quantos dias se passaram do vencimento do boleto
    let dias = entradaDados.question('Informe quantos dias se passaram do vencimento do boleto: ');

    // Verifica se o número de dias é igual a zero
    if (Number(dias) === 0) {
        console.log('A pessoa está em dia. Não há juros a serem aplicados.');
    } 
    // Verifica se o número de dias é menor que zero
    else if (Number(dias) < 0) {
        console.log('Número de dias inválido. Deve ser um número válido.');
    } else {
        let juros, valor_juros, valor_total;

        // Verifica se o número de dias é menor ou igual a 15
        if (dias <= 15) {
            juros = 5;
            valor_juros = Number(valor) * 0.05;
        } else {
            juros = 10;
            valor_juros = Number(valor) * 0.1;
        }

        // Calcula o valor total com juros
        valor_total = valor_juros + Number(valor);

        // Imprime os resultados
        console.log('Valor original da dívida: R$ ' + valor);
        console.log('Dias atrasados: ' + dias);
        console.log(`Taxa de juros: ${juros}%`);
        console.log('Valor total com juros: R$' + valor_total);
    }
}
