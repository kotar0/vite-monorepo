import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type IGlobalContext = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const GlobalContext = createContext<IGlobalContext | null>(null);

export const SampleGlobalProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  return <GlobalContext.Provider value={{ count, setCount }}>{children}</GlobalContext.Provider>;
};
