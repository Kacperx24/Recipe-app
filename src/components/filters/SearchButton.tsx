import { Search } from 'lucide-react'
import React, { FC } from 'react'
import styled from 'styled-components'

interface SearchButtonProps {
	onUpdate: (value: string) => void
}

const Button = styled.div`
	background-color: ${({ theme }) => theme.colors.altText};
	width: 250px;
	height: 44px;
	padding: 4px 16px;
	border-radius: 8px;
	font-weight: 600;
	box-shadow: 0px 4px 6px #8a8a8a21;
	display: flex;
	align-items: center;
	color: #868686;
	input {
		flex-grow: 1;
		padding: 2px;
		padding-left: 16px;
		margin: 0;
		font-size: 14px;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.secondaryText};
		&::placeholder {
			font-size: 13px;
			color: #868686;
		}
	}
`

const SearchButton: FC<SearchButtonProps> = ({ onUpdate }) => {
	return (
		<Button>
			<Search size={18} />
			<input
				placeholder='Search by recipe name...'
				onChange={e => onUpdate(e.target.value)}
			/>
		</Button>
	)
}

export default SearchButton
