import styled from 'styled-components'

interface Props {
	color?: 'default' | 'light'
	fontWeight?: 400 | 500 | 600 | 700 | 800
	fontSize?: number
}

const Paragraph = styled.p<Props>`
	color: ${({ color, theme }) =>
		color === 'light' ? theme.colors.lightText : theme.colors.primaryText};
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	text-align: center;
`

Paragraph.defaultProps = {
	color: 'default',
	fontWeight: 500,
}

export default Paragraph
