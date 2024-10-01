import { useMemo } from 'react';

export default function CurrencyInfo({ label, amount = 0, setAmount = null, currencyList, currency, setCurrency }) {
    const isDisabled = label === "To";

    const currencyOptions = useMemo(() => currencyList.map(currency => (
        <option key={currency} value={currency}>{currency}</option>
    )), [currencyList]);

    return (
        <div className="flex text-gray-400 font-bold font-mono bg-white flex-col w-80 sm:w-88 md:w-96 border-2 p-4 rounded-xl">
            <div className="flex justify-between">
                <div>{label}</div>
                <div>Currency Type</div>
            </div>
            <div className="flex justify-between text-black">
                <div>
                    <input
                        type="number"
                        value={amount}
                        className="w-24 bg-white pl-0.5"
                        disabled={isDisabled}
                        onChange={(e) => setAmount && setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <select
                        name="currencyList"
                        id="currencyList"
                        onChange={(e) => setCurrency(e.target.value)}
                        value={currency}
                    >
                        {currencyOptions}
                    </select>
                </div>
            </div>
        </div>
    );
}
