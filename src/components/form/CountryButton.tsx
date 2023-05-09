import styled from 'styled-components'
import { Country } from 'src/types'

interface CountryButtonProps {
	country: Country
	onClick: (country: Country) => void
	active: boolean
}

interface CountryContainerProps {
	active: boolean
}

const CountryContainer = styled.div<CountryContainerProps>`
	opacity: ${({ active }) => (active ? 1 : 0.4)};
	padding: 4px;
	transition: 0.2s;
	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		cursor: pointer;
	}
`

const CountryButton: React.FC<CountryButtonProps> = ({
	country,
	onClick,
	active,
}) => {
	return (
		<CountryContainer active={active} onClick={() => onClick(country)}>
			<img alt={country.label} src={country.image} />
		</CountryContainer>
	)
}

export default CountryButton
