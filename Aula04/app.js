let numero = prompt('Digite um numero:');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const text = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
text.innerHTML = `<p>Raiz quadrada ${numero ** 0.5}</p>`;
text.innerHTML += `<p>${numero} é inteiro:${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
text.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`;
text.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;


// check ! 