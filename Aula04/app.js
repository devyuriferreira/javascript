const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const text = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
text.innerHTML = `<p>Raiz quadrada:${numero +2}</p>`
text.innerHTML = `<p>`

 