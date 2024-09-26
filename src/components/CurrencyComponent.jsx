import CurrencyInfo from "./CurrencyInfo";
import SwapButton from "./SwapButton";
import { useCurrency } from "../context/CurrencyContext";

export default function CurrencyComponent({ currencyList }) {
    const { fromCurrency, toCurrency, setFromCurrency, setToCurrency, fromAmount, setFromAmount, toAmount, setToAmount } = useCurrency();

    return (
        <div className="flex flex-col gap-4 relative">
            <CurrencyInfo
                label="From"
                amount={fromAmount}
                setAmount={setFromAmount}
                currencyList={currencyList}
                currency={fromCurrency}
                setCurrency={setFromCurrency}
            />
            <CurrencyInfo
                label="To"
                amount={toAmount}
                currencyList={currencyList}
                currency={toCurrency}
                setCurrency={setToCurrency}
            />
            <SwapButton />
        </div>
    );
}
