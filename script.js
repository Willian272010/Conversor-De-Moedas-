function convert() {

    const value = Number(
        document.getElementById("value").value
    );

    const currency =
        document.getElementById("currency").value;

    const result =
        document.getElementById("result");

    if (value <= 0) {

        result.textContent = "Digite um valor válido.";

        return;
    }

    let convertedValue;

    if (currency === "usd") {

        // Cotação de exemplo
        const dollar = 5.40;

        convertedValue = value / dollar;

        result.textContent =
            `US$ ${convertedValue.toFixed(2)}`;

    } else if (currency === "eur") {

        // Cotação de exemplo
        const euro = 6.30;

        convertedValue = value / euro;

        result.textContent =
            `€ ${convertedValue.toFixed(2)}`;
    }

}