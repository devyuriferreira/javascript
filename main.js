/* variaveis */
let idade = document.getElementById('idade')
let voto = Number(idade.value)
let res = document.getElementById('res')
function votar () {
    res.innerHTML(`Sua idade é ${idade}`)
if (idade < '16') {
   res.innerHTML('Não vota')
} else if (idade < 18 || idade > 65) {
    res.innerHTML('Voto opcional')
} else {
    res.innerHTML('Voto obrigatorio')
}}
