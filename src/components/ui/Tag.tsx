import styled from 'styled-components'

interface TagProps {
	color: string
	alt?: boolean
}

const Tag = styled.label<TagProps>`
	border-radius: 20px;
	padding: 5px 14px;
	font-weight: 400;
	font-size: 13px;
	background-color: ${({ color, alt }) => (alt ? `${color}22` : color)};
	color: ${({ color, alt, theme }) => (alt ? color : theme.colors.altText)};
`
Tag.defaultProps = {
	alt: false,
}

export default Tag
