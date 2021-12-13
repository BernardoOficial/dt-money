import { ChangeEvent, FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { api } from '../../services/api';
import Modal from 'react-modal';

import { Container, Form, RadioBox } from './styles';

interface NewTransactionModalProps {
	isNewTransactionModalOpen: boolean;
	handleCloseNewTransactionModal: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
	isNewTransactionModalOpen,
	handleCloseNewTransactionModal
}: NewTransactionModalProps) {

	const { transactions, createTransaction } = useTransactions();

	const [titleTransaction, setTitleTransaction] = useState('');
	const [valorTransaction, setValorTransaction] = useState(0);
	const [categoryTransaction, setCategoryTransaction] = useState('');
	const [typeTransaction, setTypeTransaction] = useState('deposit');

	function handleNewTypeTransaction(type: 'deposit' | 'withdrawal') {
		setTypeTransaction(type);
	}

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		let newId = 0;
		let idCreate = false;

		do {
			newId = Math.ceil(Math.random() * 100000);
			const isExist = transactions.find(transaction => transaction.id === newId);
			if(!isExist) { idCreate = true };
		} while(idCreate === false);
		
		const newTransaction = {
			id: newId,
			title: titleTransaction,
			amount: valorTransaction,
			category: categoryTransaction,
			type: typeTransaction,
			createdAt: String(new Date())
		}

		api.post('/transactions', newTransaction)
			.then((response) => {
				setTitleTransaction('');
				setValorTransaction(0);
				setCategoryTransaction('');
				handleCloseNewTransactionModal();
				createTransaction(newTransaction)
			})
			.catch(error => console.error(error))

	}

	function handleSetCategoryTransaction(event: ChangeEvent<HTMLInputElement>) {
		const newCategory = event.target.value;
		setCategoryTransaction(newCategory);
	}

	return (
		<Modal
			isOpen={isNewTransactionModalOpen}
			onRequestClose={handleCloseNewTransactionModal}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>

			<Container>

				<Form onSubmit={handleCreateNewTransaction}>

					<button
						className='new-transaction__close-modal'
						onClick={handleCloseNewTransactionModal}
					></button>

					<h4>Cadastrar transação</h4>

					<input
						type="text"
						placeholder='Título'
						name='titulo'
						value={titleTransaction}
						onChange={event => setTitleTransaction(event.target.value)}
					/>

					<input
						type="number"
						placeholder='Valor'
						name='valor'
						value={valorTransaction}
						onChange={event => setValorTransaction(Number(event.target.value))}
					/>

					<div className='new-transaction__transaction'>

						<RadioBox
							type='button'
							isActive={typeTransaction === 'deposit'}
							activeColor={'#12A454'}
							onClick={() => handleNewTypeTransaction('deposit')}
						>
							<label htmlFor="deposit">
								Entrada
							</label>
						</RadioBox>

						<RadioBox
							type='button'
							isActive={typeTransaction === 'withdrawal'}
							activeColor={'#E52E4D'}
							onClick={() => handleNewTypeTransaction('withdrawal')}
						>
							<label htmlFor="withdrawal">
								Saída
							</label>
						</RadioBox>

					</div>

					<input
						type="text"
						placeholder='Categoria'
						name='categoria'
						value={categoryTransaction}
						onChange={handleSetCategoryTransaction}
					/>

					<button type='submit'>Cadastrar</button>

				</Form>

			</Container>

		</Modal>
	)
}

