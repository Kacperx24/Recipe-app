import { FC } from 'react'
import { Step } from 'src/types'
import styled from 'styled-components'
import { Paragraph, RemoveButton } from '../ui'

interface StepsListProps {
	steps: Step[]
	onRemoveStep: (id: string) => void
}

const List = styled.div`
	margin: 25px auto 0;
	width: 100%;
	max-width: 460px;
`

const StepItem = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	span {
		font-size: 19px;
		margin-right: 10px;
	}
`
// const EditStepInput = styled.textarea`
// 	background-color: transparent;
// 	width: 100%;
// 	font-size: 16px;
// 	padding: 0;
// 	border-radius: 0;
// 	resize: none;
// 	cursor: pointer;
// 	&:focus {
// 		cursor: text;
// 	}
// `
const StepDescription = styled(Paragraph)`
	text-align: left;
`

const StepsList: FC<StepsListProps> = ({ steps, onRemoveStep }) => {
	// const [editedStepValue, setEditedStepValue] = useState('')
	// const [editedStepId, setEditedStepId] = useState<string | null>(null)
	// const handleStartEditingStep = (id: string, name: string) => {
	// 	setEditedStepId(id)
	// 	setEditedStepValue(name)
	// }

	// const handleStopEditingStep = (id: string) => {
	// 	console.log('out')
	// 	if (id === editedStepId) {
	// 		onEditStep(id, editedStepValue)
	// 		setEditedStepId(null)
	// 	}
	// }

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

export default StepsList
