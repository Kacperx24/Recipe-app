import styled from 'styled-components'

interface TagProps {
	color: string
	variant?: 'primary' | 'secondary'
}

const Tag = styled.label<TagProps>`
	border-radius: 20px;
	padding: 5px 14px;
	font-weight: 400;
	font-size: 13px;
	background-color: ${({ color, variant }) =>
		variant === 'secondary' ? `${color}22` : color};
	color: ${({ color, variant, theme }) =>
		variant === 'secondary' ? color : theme.colors.altText};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		font-size: 14px;
		padding: 5px 16px;
	}
`
Tag.defaultProps = {
	variant: 'primary',
}

export default Tag
