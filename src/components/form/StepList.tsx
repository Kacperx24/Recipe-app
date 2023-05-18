import { FC } from 'react'
import styled from 'styled-components'

import { Paragraph, RemoveButton } from '../ui'
import { Step } from 'src/types'

interface StepListProps {
	steps: Step[]
	onRemoveStep: (id: string) => void
}

const List = styled.div`
	margin: 45px auto 0;
	width: 100%;
	max-width: 460px;
`

const StepItem = styled.div`
	margin-bottom: 16px;
	display: flex;
	align-items: center;

	span {
		font-size: 19px;
		font-weight: 500;
		margin-right: 16px;
	}
`

const StepDescription = styled(Paragraph)`
	text-align: left;
`

const StepList: FC<StepListProps> = ({ steps, onRemoveStep }) => {
	return (
		<List>
			{steps.map(({ name, point, id }) => (
				<StepItem key={id}>
					<RemoveButton onClick={() => onRemoveStep(id)} />
					<span>{point}.</span>
					<StepDescription fontWeight={500}>{name}</StepDescription>
				</StepItem>
			))}
		</List>
	)
}

export default StepList
