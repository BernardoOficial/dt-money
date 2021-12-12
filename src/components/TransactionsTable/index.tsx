import { useEffect } from "react";
import { Container, Table } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {

	useEffect(() => {

		api.get("/transactions")
			.then(response => console.log(response.data))
			.catch(error => console.error(error));

	}, [])

	return (
		<Container>
			
			<Table>
				
				<thead>
					<tr>
						<th>Título</th>
						<th>Preço</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className="text-bold">Desenvolvimento de site</td>
						<td className="price-positive">R$ 12.000,00</td>
						<td>Venda</td>
						<td>13/04/2021</td>
					</tr>
					<tr>
						<td className="text-bold">Desenvolvimento de site</td>
						<td className="price-negative">R$ 5.000,00</td>
						<td>Venda</td>
						<td>13/04/2021</td>
					</tr>
				</tbody>

			</Table>
			
		</Container>
	)
}