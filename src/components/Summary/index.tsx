import { CardResume, Container } from "./styles";

import entradaImg from "../../assets/seta-entradas.svg";
import saidaImg from "../../assets/seta-saidas.svg";
import sifraoImg from "../../assets/sifrao-total.svg";

export function Summary() {

	return (
		<Container>
			
			<CardResume
				cardIcon={entradaImg}
				backgroundColor='var(--shape)'
				textColor='var(--text-title)'
			>
				<h4 className="card-icon-entry">Entradas</h4>
				<strong>R$ 17.400,00</strong>
			</CardResume>
			
			<CardResume
				cardIcon={saidaImg}
				backgroundColor='var(--shape)'
				textColor='var(--text-title)'
			>
				<h4 className="card-icon-output">Saídas</h4>
				<strong>R$ 1.259,00</strong>
			</CardResume>
			
			<CardResume
				cardIcon={sifraoImg}
				backgroundColor='var(--green)'
				textColor='var(--text-white)'
			>
				<h4 className="card-icon-total">Total</h4>
				<strong>R$ 16.141,00</strong>
			</CardResume>

			

		</Container>
	)
}