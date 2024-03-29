const numero = '596'
const numeroConvertido = parseInt(numero)

console.log(typeof numero)
console.log(typeof numeroConvertido)

// Quiz clase | Métodos bind call y apply

const caricatura = {nombre: 'Vaca y pollito'}

function recuerdo(personaje) {
  console.log(`${this.nombre} era mi caricatura favorita.
  Me encantaba ver las aventuras de ${personaje}`)
}

recuerdo.call(caricatura, 'vaca')
recuerdo.bind(caricatura, 'pollito')
