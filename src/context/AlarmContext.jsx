import { createContext, useEffect, useState } from 'react';

export const AlarmContext = createContext();

export function AlarmProvider({ children }) {
  const [isDP, setIsDP] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDP) {
      window.setTimeout(() => {
        setIsDone(true);
      }, 2000);
    } else {
    }
  }, [isDP]);

  useEffect(() => {
    if (isDone) {
      window.setTimeout(() => {
        setIsDP(false);
        setIsDone(false);
      }, 300);
    }
  }, [isDone]);

  return (
    <AlarmContext.Provider value={{ isDP, setIsDP, isDone, setIsDone }}>
      {children}
    </AlarmContext.Provider>
  );
}
