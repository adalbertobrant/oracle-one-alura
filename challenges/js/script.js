/* função para criptografar um texto seguindo as seguintes regras:
	1- apenas letras minúsculas
	2- não pode usar acentos ou caracteres especiais
	3- converter a palavra e desconverter a palavra
	4- chaves de criptografia
	chaves_cripto =} {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'
*/

var input ;
var mensagem ;
var texto_cripto;
var copia_texto;


function captura_texto(){
  input = document.querySelector('.text-area');
  mensagem = document.querySelector('.mensagem');
  texto_cripto = criptografa_texto(input.value);
  mensagem.value = texto_cripto;
  document.querySelector('.mensagem').style.backgroundImage = "none";
  input.value = "";
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

function descriptografa_texto(){
  var copia_texto = mensagem.value;
  copia_texto = copia_texto.replace(/ai/g, 'a');
  copia_texto = copia_texto.replace(/enter/g, 'e');
  copia_texto = copia_texto.replace(/imes/g, 'i');
  copia_texto = copia_texto.replace(/ober/g, 'o');
  copia_texto = copia_texto.replace(/ufat/g, 'u');
  mensagem.value = "";
  input.value = copia_texto;
  mensagem.style.backgroundImage="url(/img/products.svg)";
}

function copiar_texto(){
  if (mensagem.value != ""){
    navigator.clipboard.writeText(mensagem.value);
  }
}



