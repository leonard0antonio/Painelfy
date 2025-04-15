const { createContext } = require("react");
import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const transactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
    useEffect(() => {
      async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();
        setTransactions(data);
      }
  
      loadTransactions();
    }, [])

  return (
    <transactionsContext.Provider value={{ transactions }}>
      {children}
    </transactionsContext.Provider>
  );
}