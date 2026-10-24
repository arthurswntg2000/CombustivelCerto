document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("calc-form");
  const inputDistancia = document.getElementById("distancia");
  const inputConsumo = document.getElementById("consumo");
  const inputPreco = document.getElementById("preco");

  const msgErro = document.getElementById("mensagem-erro");
  const areaResultado = document.getElementById("area-resultado");
  const resLitros = document.getElementById("res-litros");
  const resCusto = document.getElementById("res-custo");

  const listaHistorico = document.getElementById("lista-historico");
  const btnLimparHistorico = document.getElementById("btn-limpar-historico");

  // Carrega histórico do localStorage
  let historico = JSON.parse(localStorage.getItem("historicoCombustivel")) || [];
  atualizarHistoricoTela();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Limpa mensagens anteriores
    msgErro.textContent = "";
    areaResultado.classList.add("hidden");

    const distancia = parseFloat(inputDistancia.value);
    const consumo = parseFloat(inputConsumo.value);
    const preco = parseFloat(inputPreco.value);

    // Validação de entrada
    if (isNaN(distancia) || isNaN(consumo) || isNaN(preco)) {
      msgErro.textContent = "Por favor, preencha todos os campos com valores válidos.";
      return;
    }

    if (distancia <= 0 || consumo <= 0 || preco <= 0) {
      msgErro.textContent = "Os valores inseridos devem ser maiores que zero.";
      return;
    }

    // Processamento
    const litrosNecessarios = distancia / consumo;
    const custoTotal = litrosNecessarios * preco;

    // Formatação segura usando textContent
    resLitros.textContent = `Consumo estimado: ${litrosNecessarios.toFixed(2).replace(".", ",")} Litros`;
    resCusto.textContent = `Custo total: R$ ${custoTotal.toFixed(2).replace(".", ",")}`;
    areaResultado.classList.remove("hidden");

    // Guardar no histórico (máximo 5 itens)
    const itemHistorico = `${distancia}km | ${consumo}km/L | R$${preco.toFixed(2)} -> R$${custoTotal.toFixed(2)}`;
    historico.unshift(itemHistorico);
    if (historico.length > 5) {
      historico.pop();
    }

    localStorage.setItem("historicoCombustivel", JSON.stringify(historico));
    atualizarHistoricoTela();
  });

  btnLimparHistorico.addEventListener("click", () => {
    historico = [];
    localStorage.removeItem("historicoCombustivel");
    atualizarHistoricoTela();
  });

  function atualizarHistoricoTela() {
    listaHistorico.textContent = "";

    if (historico.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nenhum cálculo salvo no histórico.";
      listaHistorico.appendChild(li);
      return;
    }

    historico.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item; // Uso seguro de textContent
      listaHistorico.appendChild(li);
    });
  }
});