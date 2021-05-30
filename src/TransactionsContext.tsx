import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from './services/api';

export const TransactionContext = createContext<Transaction[]>([]);

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProvidersProps {
    children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProvidersProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}