import { CardResume, Container } from "./styles";

export function Summary() {

	return (
		<Container>
			
			<CardResume>
				<h4 className="card-icon-entry">Entradas</h4>
				<p>R$ 17.400,00</p>
			</CardResume>
			
			<CardResume>
				<h4 className="card-icon-output">Saídas</h4>
				<p>R$ 1.259,00</p>
			</CardResume>
			
			<CardResume>
				<h4 className="card-icon-total">Total</h4>
				<p>R$ 16.141,00</p>
			</CardResume>

			

		</Container>
	)
}