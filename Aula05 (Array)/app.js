// arrays são indexados por elementos, que sempre começam pelo 0, ou seja 10 elementos = 0-9.  Além disso, sempre são separados por virgulas (,).
const nome = 'Yuri';
const alunos = ['Maria','Luiz','Joao'];
//console.log(alunos);
//console.log(alunos[0]);
alunos[0] = 'Thiago'; //alterando valores do arrya, no indice 0.
alunos[3] = 'Joaquim'; //criando novo elemento no array e adicionando um valor a ele, mesmo em uma constante.
alunos.push('Gabriel')// adicionando outro array, no ultimo indice.
alunos.unshift('Mateus');// adicionando array no primeiro indice.
// console.log(alunos.length); descobrindo o tamanho do array.
const removido = alunos.pop(); //armazenando em outra variavel o valor removido com a função pop.
alunos.pop(); //excluindo o ultimo array.
alunos.shift(); //remove o primeiro item do array.
console.log(removido);
console.log(alunos);
console.log(alunos.slice(0, 2)); //escolhendo quais arrays serão exibidos na tela.
console.log(typeof alunos);// verificando o a classificação do array, pórem aparece como um objeto.
console.log(alunos instanceof Array); // descobrindo se é de fato um array.



