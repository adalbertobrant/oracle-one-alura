/* função para criptografar um texto seguindo as seguintes regras:
	1- apenas letras minúsculas
	2- não pode usar acentos ou caracteres especiais
	3- converter a palavra e desconverter a palavra
	4- chaves de criptografia
	chaves_cripto =} {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'
*/
	
var input = document.querySelector('input');
var texto_cripto;
var button = document.querySelector('button');

function captura_texto(){
  console.log('texto capturado-> '+input.value);
  texto_cripto = criptografa_texto(input.value);
  document.write('<br>' + texto_cripto + '</br>');
  return input.value;
}

function criptografa_texto(texto) {
   var tamanho_texto = texto.length;
     var copia_texto = "";

    for (var i = 0; i < tamanho_texto; i++) {
        if (texto[i] == 'a') {
          copia_texto += 'ai';
        } else if (texto[i] == 'e') {
          copia_texto += 'enter';
      } else if (texto[i] == 'i') {
          copia_texto += 'imes';
      } else if (texto[i] == 'o') {
          copia_texto += 'ober';
      } else if (texto[i] == 'u') {
          copia_texto += 'ufat';
      } else {
        copia_texto += texto[i];
      }
  
}
return copia_texto;
}

