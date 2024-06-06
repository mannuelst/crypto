import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Coin, Currency } from "../types";

interface CoinContextType {
    allCoin: Coin[];
    currency: Currency;
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const CoinContext = createContext<CoinContextType | undefined>(undefined);

interface CoinContextProviderProps {
    children: ReactNode;
}

export function CoinContextProvider({ children }: Readonly<CoinContextProviderProps>) {
    const [allCoin, setAllCoin] = useState<Coin[]>([]);
    const [currency, setCurrency] = useState<Currency>({
        name: "usd",
        symbol: "$"
    });

    async function fetchAllCoin() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x_cg_demo_api_key': 'CG-r7P5vRm1WLmWp6orKXwPeSEy'
            }
        };

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data: Coin[] = await response.json();
            setAllCoin(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue: CoinContextType = { allCoin, currency, setCurrency };

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    );
}