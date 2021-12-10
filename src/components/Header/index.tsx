import styled from 'styled-components';
import dtMoneyLogoImg from '../../assets/logo.svg';
import dtMoneyLogoMobileImg from '../../assets/logo-mobile.svg';

import { Container, LogoImage, NewTransaction, Wrapper } from './styles';

export function Header() {

	return (
		<Container>

			<Wrapper>

				<LogoImage>
					<img
						src={dtMoneyLogoImg}
						alt="dt money"
						title='dt money'
						translate='no'
						className="logo-desktop"
					/>
					<img
						src={dtMoneyLogoMobileImg}
						alt="dt money"
						title='dt money'
						translate='no'
						className='logo-mobile'
					/>
				</LogoImage>

				<NewTransaction>
					Nova transação
				</NewTransaction>

			</Wrapper>

		</Container>
	)
}
