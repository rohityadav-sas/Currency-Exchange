import Index from "./components/Index";
import { CurrencyProvider } from './context/CurrencyContext';

export default function App() {
    return (
        <CurrencyProvider>
            <div className="h-screen w-screen bg-[url('./assets/background.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center">
                <Index />
            </div>
        </CurrencyProvider>
    );
}
