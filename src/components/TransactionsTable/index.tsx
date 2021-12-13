import { useTransactions } from "../../hooks/useTransactions";

import { Container, Table } from "./styles";

export function TransactionsTable() {

	const { transactions } = useTransactions();
	
	function ListHeading() {
		
		if(transactions.length > 0) {
			return (
				<tr>
					<th>Título</th>
					<th>Preço</th>
					<th>Categoria</th>
					<th>Data</th>
				</tr>
			)
		}
		else {
			return (
				<tr>
					<th></th>
					<th></th>
				</tr>
			)
		}
	}

	function ListTransactions() {

		if(transactions.length > 0) {

			return (
				<>
					{transactions.map(item => {

						const amountFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.amount);
						const createAtFormat = new Intl.DateTimeFormat('pt-BR').format(new Date(item.createdAt));

						return (
							<tr key={item.id}>
								<td className="text-bold">{item.title}</td>
								<td className={`${item.type === 'deposit' ? 'price-positive' : 'price-negative' }`}>{amountFormat}</td>
								<td>{item.category}</td>
								<td>{createAtFormat}</td>
							</tr>
						)
					})}
				</>
			)
		}
		else {
			return (
				<tr>
					<td className="text-bold">Sem transações realizadas</td>
					<td></td>
				</tr>
			)
		}
	}

	return (
		<Container>
			
			<Table>
				
				<thead>
					<ListHeading />
				</thead>

				<tbody>
					<ListTransactions />
				</tbody>

			</Table>
			
		</Container>
	)
}