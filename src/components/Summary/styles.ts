import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
`

export const CardResume = styled.section`
	width: 33%;
	max-width: 352px;
	background-color: var(--shape);
	padding: 1.5rem 2rem;
	border-radius: 5px;
	box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);

	h4 {
		font-size: 1rem;
		line-height: 1.4;
		color: var(--text-title);
		font-weight: 400;
		margin-bottom: 15px;
	}

	p {
		font-size: 2.25rem;
		line-height: 1.4;
		font-weigth: 500;
		color: var(--text-title);
	}
`