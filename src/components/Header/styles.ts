import styled from 'styled-components';

export const Container = styled.header`
	background-color: var(--blue);
	padding: 45px 45px;
	height: 212px;
`

export const Wrapper = styled.div`
	max-width: 1120px;
	width: 100%;
	margin: 0 auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const LogoImage = styled.figure`
	font-size: 0px;

	img {
		width: 100%;
		display: inline-block;

		&.logo-mobile {
			display: none;
		}

		&.logo-desktop {
			display: block;
		}

		@media screen and (max-width: 560px) {
			height: 30px;	
			font-size: 0.9375rem;
		}

		@media screen and (max-width: 414px) {
			&.logo-mobile {
				display: block;
			}

			&.logo-desktop {
				display: none;
			}
		}
	}

`

export const NewTransaction = styled.button`
	width: 195px;
	height: 48px;
	border-radius: 5px;
	background-color: var(--blue-light);
	border: none;

	font-size: 1rem;
	line-height: 1.4;
	font-weight: 600;
	text-align: center;
	color: var(--text-white);

	transition: 0.3s ease-in;

	&:hover {
		transform: scale(0.98);
		opacity: 0.8;
	}

	@media screen and (max-width: 560px) {
		height: 40px;
		width: 170px;
		font-size: 0.9375rem;
	}
`