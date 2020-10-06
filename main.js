const itemName = document.getElementById("firstHeading");
const searchQuery = itemName.textContent;

const url = `https://tarkov-price-checker.glitch.me/get-info?q=${encodeURI(searchQuery)}`;

fetch(url, {
    method: "GET",
})
    .then((res) => res.json())
    .then(function (data) {
        const price = document.createElement("div");
        const traderPrice = document.createElement("div");
        const traderName = document.createElement("div");
        const link = document.createElement("a");

        link.href = data[0].link;
        link.target = "_blank";

        price.textContent = `Price: ${formatMoney(data[0].price, 0, data[0].traderPriceCur)}`;
        traderPrice.textContent = `Dealer Price: ${formatMoney(data[0].traderPrice, 0, data[0].traderPriceCur)}`;
        traderName.textContent = `Dealer: ${data[0].traderName}`;
        link.textContent = "Link";
        document.getElementById("bodyContent").prepend(price, traderPrice, traderName, link);
    })
    .catch(function (error) {
        console.log(error);
    });

function formatMoney(amount, decimalCount = 2, currency, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
        let j = i.length > 3 ? i.length % 3 : 0;

        return (
            negativeSign +
            (j ? i.substr(0, j) + thousands : "") +
            i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
            (decimalCount
                ? decimal +
                  Math.abs(amount - i)
                      .toFixed(decimalCount)
                      .slice(2)
                : ' ' + currency)
        );
    } catch (e) {
        console.log(e);
    }
}
