import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {

	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<>
			<GlobalStyle />

			<Header
				handleOpenNewTransactionModal={handleOpenNewTransactionModal}
			/>

			<Dashboard />

			<NewTransactionModal
				isNewTransactionModalOpen={isNewTransactionModalOpen}
				handleCloseNewTransactionModal={handleCloseNewTransactionModal}
			/>
			
		</>
	);
}