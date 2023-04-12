import React from 'react'
import styled from 'styled-components'
import Paragraph from './ui/Paragraph'
import HeaderTitle from './ui/HeaderTitle'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.secondaryBg};
	padding: 20px 20px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		padding: 30px 30px 40px;

		justify-content: flex-end;
		order: 0;
	}
`

const Description = styled(Paragraph)`
	color: #6b6e77;
	margin: 25px;
	text-align: center;
	max-width: 600px;
	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		font-size: 18px;
		margin: 40px 0 0;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		font-size: 20px;
	}
`
const BtnWrapper = styled.div`
	width: 100%;
	display: flex;
	order: 1;
	justify-content: center;
	button {
		background-color: ${({ theme }) => theme.colors.primaryText};

		a {
			padding: 14px 24px;
			text-decoration: none;
			display: flex;
			align-items: center;
			font-size: 15px;
			gap: 8px;
			color: ${({ theme }) => theme.colors.altText};
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		justify-content: flex-end;
		order: 0;
	}
`
const Header = () => {
	return (
		<Container>
			<BtnWrapper>
				<button>
					<Link to='/form'>
						<Plus size={20} />
						Add recipe
					</Link>
				</button>
			</BtnWrapper>
			<HeaderTitle />
			<Description>
				Discover a World of Flavorful Dishes and Create Culinary Masterpieces in
				Your Own Kitchen!
			</Description>
		</Container>
	)
}

export default Header
