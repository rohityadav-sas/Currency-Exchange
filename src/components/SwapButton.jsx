import swap from '../assets/swap.svg';
import { useCurrency } from "../context/CurrencyContext";

export default function SwapButton() {
    const { fromCurrency, toCurrency, fromAmount, toAmount, setFromCurrency, setToCurrency, setFromAmount, setToAmount } = useCurrency();
    const handleSwap = () => {
        if (fromCurrency === toCurrency) return;
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    return (
        <div className="border-2 text-white font-bold tracking-wider rounded-xl absolute px-2 py-2 pt-3.5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-600 cursor-pointer hover:bg-blue-700 transition-all">
            <button onClick={handleSwap}>
                <img src={swap} alt="Swap" className="h-6 w-14" />
            </button>
        </div>
    );
}
