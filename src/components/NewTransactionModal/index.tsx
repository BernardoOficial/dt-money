import { useState } from 'react';
import Modal from 'react-modal';
import { Container, Form } from './styles';

interface NewTransactionModalProps {
	isNewTransactionModalOpen: boolean;
	handleCloseNewTransactionModal: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
	isNewTransactionModalOpen,
	handleCloseNewTransactionModal
}: NewTransactionModalProps) {

	const [typeTransaction, setTypeTransaction] = useState('deposit');

	function handleNewTypeTransaction(type: string) {
		setTypeTransaction(type);
	}

	return (
		<Modal
			isOpen={isNewTransactionModalOpen}
			onRequestClose={handleCloseNewTransactionModal}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>

			<Container>

				<Form>

					<button
						className='new-transaction__close-modal'
						onClick={handleCloseNewTransactionModal}
					></button>

					<h4>Cadastrar transação</h4>

					<input
						type="text"
						placeholder='Título'
						name='titulo'
					/>

					<input
						type="number"
						placeholder='Valor'
						name='valor'
					/>

					<div className='new-transaction__transaction'>

						<div
							className={`new-transaction__transaction-field ${typeTransaction === 'deposit' ? 'new-transaction__transaction-field--active' : '' }`}
							onClick={() => handleNewTypeTransaction('deposit')}
						>
							<input
								type="radio"
								name='transaction'
								id='deposit'
								checked={typeTransaction === 'deposit' ? true : false}
							/>
							<label htmlFor="deposit">
								Entrada
							</label>
						</div>

						<div
							className={`new-transaction__transaction-field ${typeTransaction === 'withdrawal' ? 'new-transaction__transaction-field--active' : '' }`}
							onClick={() => handleNewTypeTransaction('withdrawal')}
						>
							<input
								type="radio"
								name='transaction'
								id='withdrawal'
								checked={typeTransaction === 'withdrawal' ? true : false}
							/>
							<label htmlFor="withdrawal">
								Saída
							</label>
						</div>

					</div>


					<input
						type="text"
						placeholder='Categoria'
						name='categoria'
					/>

					<button
						type='submit'
						onClick={() => console.log("oi")}
					>
						Cadastrar
					</button>

				</Form>

			</Container>

		</Modal>
	)
}

