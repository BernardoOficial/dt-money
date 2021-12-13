import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

interface TransactionsProviderData {
	transactions: Transaction[];
	createTransaction: (transaction: Transaction) => void;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsProviderData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get("/transactions")
			.then(response => setTransactions(response.data.transactions))
			.catch(error => console.error(error));
	}, [])

	function createTransaction(transaction: Transaction) {
		setTransactions((currentTransactions) => [...currentTransactions, transaction]);
	}

	return (
		<TransactionsContext.Provider
			value={{ 
				transactions,
				createTransaction
			}}
		>
			{children}
		</ TransactionsContext.Provider>
	)
}

export function useTransactions() {
	const context = useContext(TransactionsContext);
	return context;
}