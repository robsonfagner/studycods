// Funções

// Um conjunto de instruções ou uma pequena parte da aplicação

// function somar(valorUm, valorDois) {
//   return console.log(valorUm + valorDois);
// }

// somar(10, 2);

// const somar = (valorUm, valorDois) => {
//   return console.log(valorUm + valorDois);
// };
// somar(10, 2);

// const somar = (valorUm, valorDois) => console.log(valorUm + valorDois);

// somar(10, 2);

// const somar = (valorUm, valorDois) => {
//   return console.log(valorUm + valorDois);
// };
// somar(10, 2);

// Processar um pagamento
// function forma(formaPagamento) {
//   if (formaPagamento == "Boleto") {
//     return console.log("Imprimir Boleto!");
//   }
//   if (formaPagamento == "Cartão") {
//     const parcela = 5;
//     return console.log("Parcelado em ", parcela);
//   }
// }

// function pagar(formaPagamento) {
//   if (formaPagamento != "Boleto" && formaPagamento != "Cartão") {
//     return console.error("Error, a forma deve ser Boleto ou Cartão");
//   } else {
//     return forma(formaPagamento);
//   }
// }

// pagar("Boleto");

const pagar = (formaPagamento) => {
  if (formaPagamento != "Boleto" && formaPagamento != "Cartão") {
    return console.error("Error, a forma deve ser Boleto ou Cartão");
  } else {
    return forma(formaPagamento);
  }
};

const forma = (formaPagamento) => {
  if (formaPagamento == "Boleto") {
    return console.log("Imprimir Boleto!");
  }
  if (formaPagamento == "Cartão") {
    const parcela = 5;
    return console.log("Parcelado em ", parcela);
  }
};

pagar("Boleto");
