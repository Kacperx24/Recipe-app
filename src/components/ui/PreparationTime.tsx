import { FC } from 'react'
import styled from 'styled-components'
import { Clock } from 'lucide-react'

import Paragraph from './Paragraph'

interface PreparationTimeProps {
	time: number
}

const PrepTime = styled(Paragraph)`
	color: ${({ theme }) => theme.colors.lightText};
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 14px;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		font-size: 17px;
	}
`

const PreparationTime: FC<PreparationTimeProps> = ({ time }) => {
	return (
		<PrepTime fontWeight={500}>
			<Clock size={17} /> {time}:00
		</PrepTime>
	)
}

export default PreparationTime
