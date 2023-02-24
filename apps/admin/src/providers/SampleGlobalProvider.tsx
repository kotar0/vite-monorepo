import { createContext, ReactNode, useState } from 'react';
export const GlobalContext = createContext<[number?, any?]>([]);

export const SampleGlobalProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  return <GlobalContext.Provider value={[count, setCount]}>{children}</GlobalContext.Provider>;
};
