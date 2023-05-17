import React, { ReactNode, FC, forwardRef, Ref } from 'react'
import styled from 'styled-components'

interface FilterCardProps {
	children?: ReactNode
	ref: Ref<HTMLDivElement>
}

const Card = styled.div`
	top: 120%;
	position: absolute;
	left: 0px;
	width: 100%;
	box-shadow: 0px 4px 6px #8a8a8a21;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.altText};
	z-index: 100;
	cursor: auto;
`

const FilterCard: FC<FilterCardProps> = forwardRef(({ children }, ref) => {
	return <Card ref={ref}>{children}</Card>
})

export default FilterCard
