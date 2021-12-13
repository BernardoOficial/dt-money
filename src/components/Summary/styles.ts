import styled from "styled-components";

interface cardResumeProps {
	cardIcon: string;
	backgroundColor: string;
	textColor: string;
}

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
`

export const CardResume = styled.section<cardResumeProps>`
	width: 33%;
	max-width: 352px;
	padding: 1.5rem 2rem;
	border-radius: 5px;
	box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.textColor};

	h4 {
		font-size: 1rem;
		line-height: 1.4;
		font-weight: 400;
		margin-bottom: 15px;
		position: relative;

		&::after {
			content: "";
			background-image: url(${(props) => props.cardIcon});
			background-size: 26px 26px;
			background-repeat: no-repeat;
			width: 26px;
			height: 26px;
			font-size: 0;

			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	strong {
		font-size: 2.25rem;
		line-height: 1.4;
		font-weight: 500;
	}

	span {
		font-size: 2.25rem;
		line-height: 1.4;
		font-weight: 400;
	}
`