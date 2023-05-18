import { FC } from 'react'
import styled from 'styled-components'

import { Step } from 'src/types'
import { Paragraph } from '../ui'

interface StepListProps {
	steps: Step[]
}

const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	width: 100%;
	max-width: 480px;
	margin: 25px 0;
`

const Point = styled.span`
	font-weight: 700;
	margin-right: 4px;
`

const StyledParagraph = styled(Paragraph)`
	color: ${({ theme }) => theme.colors.secondaryText};
`

const StepList: FC<StepListProps> = ({ steps }) => {
	return (
		<>
			<Paragraph fontSize={19} fontWeight={600}>
				Steps
			</Paragraph>
			<List>
				{steps?.map(({ point, name, id }) => (
					<StyledParagraph center fontWeight={500} key={id}>
						<Point>{point}.</Point> {name}
					</StyledParagraph>
				))}
			</List>
		</>
	)
}

export default StepList
