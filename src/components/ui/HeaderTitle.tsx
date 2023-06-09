import styled from 'styled-components'

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.dark};
	font-size: 44px;
	font-weight: 700;
	margin-top: 28px;
	font-family: Cabin;

	span {
		color: ${({ theme }) => theme.colors.altText};
		font-family: Cabin;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		font-size: 56px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		font-size: 80px;
	}
`

const HeaderTitle = () => (
	<Title>
		<span>Food </span>Recipes
	</Title>
)

export default HeaderTitle
