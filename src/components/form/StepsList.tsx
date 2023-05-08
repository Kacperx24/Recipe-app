import React, { FC, useState } from 'react'
import { Step } from '../../types'
import styled from 'styled-components'
import { Paragraph, RemoveButton } from '../ui'

interface StepsListProps {
	steps: Step[]
	onRemoveStep: (id: string) => void
	onEditStep: (id: string, newName: string) => void
}

const List = styled.div`
	margin: 25px auto 0;
	width: 100%;
	max-width: 460px;
`

const StepItem = styled.div`
	margin-bottom: 10px;
	text-align: left;
	display: flex;
	align-items: center;
	span {
		font-size: 19px;
		margin-right: 10px;
	}
`
const EditStepInput = styled.input`
	background-color: transparent;
	width: 100%;
	font-size: 16px;
	padding: 0;
	border-radius: 0;
	cursor: pointer;
	&:focus {
		cursor: text;
	}
`
const StepDescription = styled(Paragraph)``

const StepsList: FC<StepsListProps> = ({ steps, onRemoveStep, onEditStep }) => {
	const [editedStepValue, setEditedStepValue] = useState('')
	const [editedStepId, setEditedStepId] = useState<string | null>(null)
	const handleStartEditingStep = (id: string, name: string) => {
		setEditedStepId(id)
		setEditedStepValue(name)
	}

	const handleStopEditingStep = (id: string) => {
		onEditStep(id, editedStepValue)
		setEditedStepId(null)
	}

	return (
		<List>
			{steps.map(({ name, point, id }) => (
				<StepItem key={id}>
					<RemoveButton onClick={() => onRemoveStep(id)} />

					<span>{point}.</span>
					{editedStepId === id ? (
						<EditStepInput
							value={editedStepValue}
							onBlur={() => handleStopEditingStep(id)}
							onChange={e => setEditedStepValue(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter') {
									handleStopEditingStep(id)
								}
							}}
						/>
					) : (
						<StepDescription
							fontWeight={500}
							onMouseOver={() => handleStartEditingStep(id, name)}
						>
							{name}
						</StepDescription>
					)}
				</StepItem>
			))}
		</List>
	)
}

export default StepsList
