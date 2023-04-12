import styled from 'styled-components'

interface Props {
	color?: 'default' | 'light'
	fontWeight?: 400 | 500 | 600 | 700 | 800
}

const Title = styled.h1<Props>`
	color: ${({ theme }) => theme.colors.primaryText};
	font-size: 44px;
	font-weight: 700;
	margin-top: 28px;
	span {
		color: ${({ theme }) => theme.colors.altText};
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
