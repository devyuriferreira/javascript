let numero = prompt('Digite um numero:');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const text = document.getElementById('texto');

numeroTitulo.innerText = numero;
text.innerText = `Raiz quadrada ${numero ** 0.5}`;
text.innerText = `Arredondamento para baixo ${Math.floor(numero)}`;
text.innerText = `Arredondamento para cima ${Math.ceil(numero)}`;
 