function carregar() {
  // Variáveis para trabalhar com a hora do sistema

  var agora = new Date()
  var horaAtual = agora.getHours()
  var min = agora.getMinutes()
  var sec = agora.getSeconds()

  // Manipuladores do DOM

  var imagem = window.document.getElementById('bg') // para alterar o fundo do site
  var msg = window.document.getElementById('msg') // para mudar a mensagem
  var msgrel = window.document.getElementById('msgrelogio') //para exibir o relógio

  // Configuração de exibição da data e hora

  var configLocal = 'pt-BR' // Configuração do local

  /* -----------------------
  Teste para trocar BACKGROUND
   ---------------------------*/

  // horaAtual = 00;   /* Boa madrugada */
  // horaAtual = 6;   /* Bom dia */
  // horaAtual = 12;  /* Boa tarde */
  // horaAtual = 19;  /* Boa noite */

  // Condição para horas, minutos e segundos ficarem com 2 digitos 07:07:07

  if (horaAtual < 10) {
    horaAtual = '0' + horaAtual
  }

  if (sec < 10) {
    sec = '0' + sec
  }

  if (min < 10) {
    min = '0' + min
  }

  // Condição para mensagem

  if (horaAtual >= 0 && horaAtual < 5) {
    // BOA MADRUGADA
    msg.innerHTML = 'Boa Madrugada!'
    imagem.className = 'madrugada'
  } else if (horaAtual >= 5 && horaAtual < 12) {
    // BOM DIA
    msg.innerHTML = 'Bom dia!'
    imagem.className = 'manha'
  } else if (horaAtual >= 12 && horaAtual < 18) {
    // BOA TARDE
    msg.innerHTML = 'Boa Tarde!'
    imagem.className = 'tarde'
  } else {
    // BOA NOITE
    msg.innerHTML = 'Boa Noite!'
    imagem.className = 'noite'
  }

  msgrel.innerHTML = `Agora são <strong>${horaAtual}:${min}:${sec}</strong> horas`

  // Teste para exibe o relógio com hora atual do sistema (somente horas, sem texto)
  //msgrel.innerHTML = agora.toLocaleTimeString(configLocal)
}
// Chama a funcao no momento que a pagina é carregada
carregar()

// Segue atualizando a hora chamando a função a cada segundo
setInterval(carregar, 1000)
