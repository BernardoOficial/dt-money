import dtMoneyLogoImg from '../../assets/logo.svg';
import dtMoneyLogoMobileImg from '../../assets/logo-mobile.svg';
import { Container, LogoImage, NewTransaction, Wrapper } from './styles';

interface HeaderProps {
	handleOpenNewTransactionModal: () => void;
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {

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

				<NewTransaction
					onClick={handleOpenNewTransactionModal}
				>
					Nova transação
				</NewTransaction>

			</Wrapper>

		</Container>
	)
}
