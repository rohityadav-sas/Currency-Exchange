import CurrencyComponent from "./CurrencyComponent";
import ConvertButton from "./ConvertButton";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { useCurrency } from "../context/CurrencyContext";

export default function Index() {
    const { fromCurrency } = useCurrency();
    let { currencyInfo, error } = useCurrencyInfo(fromCurrency);

    const exchangeRates = currencyInfo?.conversion_rates;
    const currencyList = exchangeRates ? Object.keys(exchangeRates) : [];

    if (error) return <div>Error: {error}</div>;
    if (!exchangeRates) return <div className="text-white text-7xl">Loading...</div>;

    return (
        <div className="flex font-bold font-mono flex-col gap-6 border-2 rounded-xl px-12 py-10 backdrop-blur-sm bg-slate-400 bg-opacity-30 shadow-[0_0px_20px_15px_rgba(0,0,0,0.3),_inset_0_0px_20px_5px_rgba(0,0,0,0.3)]">
            <h1 className="text-3xl text-center text-white">Currency Converter</h1>
            <CurrencyComponent currencyList={currencyList} exchangeRates={exchangeRates} />
            <ConvertButton exchangeRates={exchangeRates} />
        </div>
    );
}
