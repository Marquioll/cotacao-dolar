const url = "https://economia.awesomeapi.com.br/last/USD-BRL";

function buscarCotacao() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dolar = data.USDBRL;

            const valorAtual = parseFloat(dolar.bid);
            const maiorValor = parseFloat(dolar.high);
            const menorValor = parseFloat(dolar.low);

            document.getElementById("valorAtual").textContent =
                `R$ ${valorAtual.toFixed(2)}`;

            document.getElementById("maiorValor").textContent =
                `R$ ${maiorValor.toFixed(2)}`;

            document.getElementById("menorValor").textContent =
                `R$ ${menorValor.toFixed(2)}`;
        })
        .catch(error => {
            console.error("Erro ao buscar cotação:", error);
        });
}

buscarCotacao();