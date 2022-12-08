import { createContext, useEffect, useState } from 'react';

export const AlarmContext = createContext();

export function AlarmProvider({ children }) {
  const [isDP, setIsDP] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (isDP) setIsDone(true);
    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [isDP]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (isDone) {
        setIsDP(false);
        setIsDone(false);
      }
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [isDone]);

  return (
    <AlarmContext.Provider value={{ isDP, setIsDP, isDone, setIsDone }}>
      {children}
    </AlarmContext.Provider>
  );
}
