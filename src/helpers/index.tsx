import { Dispatch, useEffect, useState } from 'react';

export const supportsRendering = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const useLocalState = (defaultValue: string, key: string): [string, Dispatch<string>] => {
  const [value, setValue] = useState(() => {
    const localStorageData = (supportsRendering && window.localStorage.getItem(key)) || null;
    return localStorageData !== null ? JSON.parse(localStorageData) : defaultValue;
  });

  useEffect(() => {
    console.debug(`[Local storage] Storing new value for ${key}:`, value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
