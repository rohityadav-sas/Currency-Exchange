import { useState } from 'react';

export const useCurrencyState = () => {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [fromAmount, setFromAmount] = useState(0);
    const [toCurrency, setToCurrency] = useState("NPR");
    const [toAmount, setToAmount] = useState(0);

    return {
        fromCurrency, setFromCurrency,
        fromAmount, setFromAmount,
        toCurrency, setToCurrency,
        toAmount, setToAmount,
    };
};
