import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';


export function App() {

	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<TransactionsProvider>
			<GlobalStyle />

			<Header
				handleOpenNewTransactionModal={handleOpenNewTransactionModal}
			/>

			<Dashboard />

			<NewTransactionModal
				isNewTransactionModalOpen={isNewTransactionModalOpen}
				handleCloseNewTransactionModal={handleCloseNewTransactionModal}
			/>
			
		</TransactionsProvider>
	);
}