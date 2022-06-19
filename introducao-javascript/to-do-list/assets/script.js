let adicionarTarefa = () => {
  //criar o marcador
  let marcador = document.createElement("input");
  marcador.classList.add("marcador");
  marcador.setAttribute("type", "checkbox");
  let lista = document.getElementById("list");
  lista.appendChild(marcador);

  //tornar tarefa concluida
  marcador.addEventListener("click", function(event) {
      if(event.target.checked){
        texto.classList.add("concluida");
      }else{
        texto.classList.remove("concluida")
      }
  });

  //criar tag para texto
  let texto = document.createElement("span");
  texto.classList.add("texto");

  //criar espaço entre os textos
  let espaco = document.createElement("br");
  lista.appendChild(texto);
  lista.appendChild(espaco);

  //escrevar na tela
  let tarefa = document.querySelector("#tarefa");
  let valor = tarefa.value;
  texto.innerHTML = valor;
};



