let entradaTexto = document.querySelector('.input')

let criarElemento = () => {

   // variável para salvar o valor do input
   let valorTarefa = entradaTexto.value;

   // verifica se o campo de texto está vazio
   // Só pode criar a tarefa se o campo não estiver vazio
   if (valorTarefa !== "") {
      let lista = document.querySelector('.list');
      let span = document.createElement('span');

      span.innerText = valorTarefa;

      let novoInput = document.createElement('input');
      novoInput.type = 'checkbox';

      let newLi = document.createElement('li');

      newLi.appendChild(novoInput);
      newLi.appendChild(span);
      lista.append(newLi);

      // Limpa o campo de texto
      entradaTexto.value = "";

      // verifica se o campo do checkbox está marcado
      // se estiver, ele risca a tarefa como concluída
      novoInput.addEventListener('change', () => {
         if (novoInput.checked) {
            span.style.textDecoration = 'line-through';
            alert('Tarefa Concluída!');
         } else {
            span.style.textDecoration = 'none';
         };

      });

   } else {
      alert('Porfavor, digite uma tarefa!');
   };
   
};

// Aqui é verificado para quando apertar o enter, ele crie os elementos
entradaTexto.addEventListener('keyup', (evento) => {
   if (evento.key == 'Enter') {
      criarElemento();
   };
});