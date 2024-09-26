import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [fromAmount, setFromAmount] = useState(0);
    const [toCurrency, setToCurrency] = useState("NPR");
    const [toAmount, setToAmount] = useState(0);

    return (
        <CurrencyContext.Provider value={{
            fromCurrency, setFromCurrency,
            fromAmount, setFromAmount,
            toCurrency, setToCurrency,
            toAmount, setToAmount
        }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);
