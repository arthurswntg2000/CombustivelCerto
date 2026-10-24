# CombustívelCerto 🚗⛽

> Aplicação web simples para estimativa de consumo e custo financeiro de combustível para viagens.

Projeto desenvolvido para a disciplina de **Desenvolvimento de Sistemas Web (EECP0036)** da Universidade Federal do Maranhão (UFMA), ministrada pelo Prof. Renan Sousa Freire.

Aluno: Arthur Sampaio Pereira

Matrícula: 2023098557

Curso: Engenharia da Computação - UFMA

---

## 📋 Sobre o Projeto

O **CombustívelCerto** é uma ferramenta direta e responsiva voltada para motoristas que desejam planejar os custos de um trajeto. A aplicação calcula o consumo necessário em litros e a despesa total com base na distância informada, na média de consumo do veículo e no preço por litro do combustível.

### Funcionalidades (Faz)
* Recebe a distância (km), média do veículo (km/L) e preço por litro (R$).
* Calcula e exibe o total de combustível em litros e o custo total estimado em reais.
* Valida as entradas para impedir cálculos vazios ou com valores menores/iguais a zero.
* Armazena o histórico das últimas 5 consultas no `localStorage` do navegador.
* Botão dedicado para limpar o histórico de pesquisas.

### Fora de Escopo (Não faz)
* Autenticação/login de utilizadores ou sincronização de dados em nuvem.
* Cálculo automático de rotas via GPS ou integração com mapas.
* Comparação de preços de combustíveis entre postos da região.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação acessível com uso das tags `<header>`, `<main>`, `<section>`, `<form>` e `<label>`.
* **CSS3 Responsivo:** Flexbox e visual moderno adaptável para ecrãs de telemóvel e computador.
* **JavaScript Vanilla (Trilha C - Sem API):** Manipulação de DOM, tratamento de formulários, validações e persistência de dados localmente.
* **Segurança na Inserção de Dados:** Manipulação estrita de elementos com `textContent` para prevenção de vulnerabilidades de XSS.

---

## 🚀 Como Executar o Projeto Localmente

1. Clone este repositório no seu computador:
   ```bash
   git clone [https://github.com/arthurswntg2000/CombustívelCerto.git](https://github.com/arthurswntg2000/CombustívelCerto.git)