import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	margin-top: 64px;
`

export const Table = styled.table`
	background-color: var(--background);
	font-size: 1rem;
	line-height: 1.5;
	width: 100%;
	border-spacing: 0 8px;

	thead {
		tr th {
			color: var(--text-body);
			padding: 1.25rem 2rem;
			font-weight: normal;
			text-align: left;
		}
	}

	tbody {
		tr {
			border-radius: 5px;	

			& ~ tr {
				margin-top: 8px;
			}
		}

		tr td {
			color: var(--text-body); 
			padding: 1.25rem 2rem;
			background-color: var(--shape);

			&:last-child {
				border-radius: 0px 5px 5px 0px;
			}

			&:first-child {
				border-radius: 5px 0px 0px 5px;
			}

			&.text-bold {
				font-weight: 500;
				color: var(--text-title);
			}

			&.price-positive {
				color: var(--green);
			}

			&.price-negative {
				color: var(--red);

				&::before {
					content: "- ";
				}
			}
		}
	}
`