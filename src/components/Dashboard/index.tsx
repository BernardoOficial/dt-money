import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Main } from "./styles";

export function Dashboard() {

	return (
		<Main>
			<Summary />
			<TransactionsTable />
		</Main>
	)
}