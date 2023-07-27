/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, ReactNode } from "react";
import { ICoin } from "@services/interface";

interface GeneralContextProps {
  storeCoins: (coins: ICoin[]) => void;
  coins: ICoin[] | []
}

export const GeneralContext = createContext<GeneralContextProps>({
    storeCoins: () => {},
    coins: []
});

export const GeneralProvider = (props: { children: ReactNode }) => {
  const [coinsState, setCoinsState] = useState<ICoin[] | []>([])

  const storeCoins = (coins: ICoin[]) => {
    setCoinsState(coins)
  };

  return (
    <GeneralContext.Provider value={{ storeCoins, coins: coinsState }}>
      {props.children}
    </GeneralContext.Provider>
  );
};