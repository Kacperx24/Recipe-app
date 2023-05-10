import { FC } from 'react'
import styled from 'styled-components'
import Paragraph from './Paragraph'
import { Clock } from 'lucide-react'

interface PreparationTimeProps {
	time: number
}

const PrepTime = styled(Paragraph)`
	color: ${({ theme }) => theme.colors.lightText};
	display: flex;
	align-items: center;
	gap: 6px;
`

const PreparationTime: FC<PreparationTimeProps> = ({ time }) => {
	return (
		<PrepTime fontSize={14} fontWeight={500}>
			<Clock size={16} /> {time}:00
		</PrepTime>
	)
}

export default PreparationTime
