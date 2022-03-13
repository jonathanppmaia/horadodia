# Curso Java Script Básico
####Cursoemvideo.com - Prof.: Gustavo Guanabara


##Exercício Hora do dia!!

Esse é o resultado da minha primeira prática com Java Script, chamado "hora do dia", que foi baseado no exercício do curso de Java Script Básico - Curso em Video, ministrado pelo Gustavo Guanabara, do módulo de Condições.

O exercício tinha a proposta inicial de informar a hora do dia e alterar a imagem que mostrava o turno, manhã, tarde e noite. Para colocar em prática  tudo que venho aprendendo, decidi aprimorar um pouco o exercício para que uma mensagem fosse informada ( Boa madrugada. Bom dia, Boa Tarde, Boa Noite) junto com a hora automática do sistema e para cada turno o background era alterado.

~~~javascript
// Variáveis para trabalhar com a hora do sistema

  var agora = new Date()
  var horaAtual = agora.getHours()
  var min = agora.getMinutes()
  var sec = agora.getSeconds()

~~~
~~~javascript

// Manipuladores do DOM

  var imagem = window.document.getElementById('bg') // para alterar o fundo do site
  var msg = window.document.getElementById('msg') // para mudar a mensagem
  var msgrel = window.document.getElementById('msgrelogio') //para exibir o relógio

~~~

~~~javascript
// Condição

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

~~~
~~~javascript
// Teste para exibe o relógio com hora atual do sistema (somente horas, sem texto)
  msgrel.innerHTML = agora.toLocaleTimeString(configLocal)

~~~
~~~javascript

// Manipuladores do DOM

 /* Teste para trocar BACKGROUND */

  // horaAtual = 00;   /* Boa madrugada */
  // horaAtual = 6;   /* Bom dia */
  // horaAtual = 12;  /* Boa tarde */
  // horaAtual = 19;  /* Boa noite */


~~~






<div style="display:inline_block">
<img alt="Boa Madrugada" src="https://github.com/jonathanppmaia/horadodia/blob/main/img/prints-da-hora-do-dia_05.png?raw=true" >
</div>
<div style="display:inline_block">
<img alt="Imagem do projeto01" src="https://github.com/jonathanppmaia/horadodia/blob/main/img/prints-da-hora-do-dia_03.png?raw=true" >
</div>
<div style="display:inline_block">
<img alt="Imagem do projeto01" src="https://github.com/jonathanppmaia/horadodia/blob/main/img/prints-da-hora-do-dia_01.png?raw=true" >
</div>
<div style="display:inline_block">
<img alt="Imagem do projeto01" src="https://github.com/jonathanppmaia/horadodia/blob/main/img/prints-da-hora-do-dia_07.png?raw=true ">
</div>


