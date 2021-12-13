import { useTransactions } from "../../hooks/useTransactions";
import { CardResume, Container } from "./styles";

import entradaImg from "../../assets/seta-entradas.svg";
import saidaImg from "../../assets/seta-saidas.svg";
import sifraoImg from "../../assets/sifrao-total.svg";

export function Summary() {

	const { transactions } = useTransactions();

	const totalDeposits = calculateDeposits() || 0;
	const totalWithdrawal = calculateWithdrawal() || 0;
	const total = totalDeposits - totalWithdrawal;

	const formatNumber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
	const formatTotalDeposits = formatNumber.format(totalDeposits);
	const formatTotalWithdrawal = formatNumber.format(totalWithdrawal);
	const formatTotal = formatNumber.format(total);

	const [casIntegerTotalDeposits, casDecimalTotalDeposits] = formatTotalDeposits.split(',');
	const [casIntegerWithdrawal, casDecimalWithdrawal] = formatTotalWithdrawal.split(',');
	const [casIntegerTotal, casDecimalTotal] = formatTotal.split(',');

	function calculateDeposits() {
		return transactions.reduce((acc, transaction) => {
			if(transaction.type === 'deposit') {
				acc += transaction.amount;
			}
			return acc;
		}, 0)
	}
	
	function calculateWithdrawal() {
		return transactions.reduce((acc, transaction) => {
			if(transaction.type === 'withdrawal') {
				acc += transaction.amount;
			}
			return acc;
		}, 0)
	}

	return (
		<Container>
			
			<CardResume
				cardIcon={entradaImg}
				backgroundColor='var(--shape)'
				textColor='var(--text-title)'
			>
				<h4 className="card-icon-entry">Entradas</h4>
				<strong>{casIntegerTotalDeposits}</strong>
				<span>,{casDecimalTotalDeposits}</span>
			</CardResume>
			
			<CardResume
				cardIcon={saidaImg}
				backgroundColor='var(--shape)'
				textColor='var(--text-title)'
			>
				<h4 className="card-icon-output">Saídas</h4>
				<strong>{casIntegerWithdrawal}</strong>
				<span>,{casDecimalWithdrawal}</span>
			</CardResume>
			
			<CardResume
				cardIcon={sifraoImg}
				backgroundColor='var(--green)'
				textColor='var(--text-white)'
			>
				<h4 className="card-icon-total">Total</h4>
				<strong>{casIntegerTotal}</strong>
				<span>,{casDecimalTotal}</span>
			</CardResume>

		</Container>
	)
}