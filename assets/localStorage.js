// * Todas as funções relacionadas ao LocalStorage

// Pegando o valor do Local Storage

function localStorage_pegaTarefas() {
  // Busca os dados armazenados no localStorage
  const dadosArmazenados = localStorage.getItem("tarefas");

  // Se não há dados armazenados ou não é uma lista válida, retorna um array vazio
  return dadosArmazenados ? JSON.parse(dadosArmazenados) : [];
}

/**
 * Salvando valor no Local Storage e já codificando
 * @param array lista de tarefas
 */
function localStorage_salvaTarefas(tabela) {
    localStorage.setItem("tarefas", JSON.stringify(tabela));
  }