import { useCurrency } from "../context/CurrencyContext";

export default function ConvertButton({ exchangeRates }) {
    const { fromCurrency, toCurrency, fromAmount, setToAmount } = useCurrency();

    function formatToFourDecimalPlaces(number) {
        const numberStr = number.toString();
        const decimalIndex = numberStr.indexOf('.');
        if (decimalIndex !== -1 && (numberStr.length - decimalIndex - 1) > 4) {
            return number.toFixed(4);
        }
        return number;
    }

    const handleConversion = () => {
        if (!exchangeRates || !fromAmount || !exchangeRates[toCurrency]) return;
        setToAmount(formatToFourDecimalPlaces((Number(exchangeRates[toCurrency]) * Number(fromAmount))));
    };

    return (
        <div className="rounded-md cursor-pointer h-16 text-center text-white bg-blue-600 hover:bg-blue-700 transition-all">
            <button
                className="w-full h-full"
                onClick={handleConversion}
                disabled={!fromAmount || !exchangeRates || !exchangeRates[toCurrency]}
            >
                Convert {fromCurrency} to {toCurrency}
            </button>
        </div>
    );
}
