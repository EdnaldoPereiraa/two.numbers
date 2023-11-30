try {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
  
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Digite números válidos.");
    }
  
    let resultado = numero1 / numero2;
  
    console.log(`O resultado da divisão é: ${resultado.toFixed(2)}`);
  } catch (erro) {
  
    console.error(`Erro: ${erro.message}`);
  } finally {
  
    console.log("Executando o bloco finally.");
  }
  