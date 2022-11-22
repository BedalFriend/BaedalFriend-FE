import { createContext, useEffect, useState } from 'react';

export const AlarmContext = createContext();

export function AlarmProvider({ children }) {
  const [isDP, setIsDP] = useState(false);

  useEffect(() => {
    if (isDP) {
    } else {
    }
  }, [isDP]);

  return (
    <AlarmContext.Provider value={{ isDP, setIsDP }}>
      {children}
    </AlarmContext.Provider>
  );
}
