import styled from 'styled-components'

interface ParagraphProps {
	color?: 'default' | 'light'
	fontWeight?: 400 | 500 | 600 | 700 | 800
	fontSize?: number
	center?: boolean
}

const Paragraph = styled.p<ParagraphProps>`
	color: ${({ color, theme }) =>
		color === 'light' ? theme.colors.lightText : theme.colors.primaryText};
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	text-align: ${({ center }) => (center ? 'center' : 'left')};
`

Paragraph.defaultProps = {
	color: 'default',
	fontWeight: 500,
	fontSize: 16,
	center: false,
}

export default Paragraph
