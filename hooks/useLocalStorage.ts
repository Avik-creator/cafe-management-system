import { useState } from 'react';

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const keyExists = (): boolean => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.localStorage.getItem(key) !== null;
    };

    const removeItem = () => {
        try {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
                setStoredValue(initialValue);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue, keyExists, removeItem] as const;
};