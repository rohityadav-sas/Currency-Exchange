import { useState, useEffect } from 'react';

const useCurrencyInfo = (currency) => {
    const [currencyInfo, setCurrencyInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currency) return;

        const controller = new AbortController();

        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/${currency}`, { signal: controller.signal });
                if (!response.ok) throw new Error('Failed to fetch currency info');

                const data = await response.json();
                setCurrencyInfo(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            }
        };

        fetchCurrencyInfo();

        return () => controller.abort();
    }, [currency]);

    return { currencyInfo, error };
}

export default useCurrencyInfo;
