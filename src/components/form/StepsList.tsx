import React, { FC, useEffect, useRef, useState } from 'react'
import { Step } from '../../types'
import styled from 'styled-components'
import Paragraph from '../ui/Paragraph'
import RemoveButton from '../ui/RemoveButton'

interface StepsListProps {
	steps: Step[]
	removeStep: (id: string) => void
	editStep: (id: string, newName: string) => void
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

const StepsList: FC<StepsListProps> = ({ steps, removeStep, editStep }) => {
	const [inputValue, setInputValue] = useState('')
	const [editingStepId, setEditingStepId] = useState<string | null>(null)
	const startEditingStep = (id: string, name: string) => {
		setEditingStepId(id)
		setInputValue(name)
	}

	const stopEditingStep = (id: string) => {
		editStep(id, inputValue)
		setEditingStepId(null)
	}

	return (
		<List>
			{steps.map(({ name, point, id }) => (
				<StepItem>
					<RemoveButton onClick={() => removeStep(id)} />

					<span>{point}.</span>
					{editingStepId === id ? (
						<EditStepInput
							value={inputValue}
							onBlur={() => stopEditingStep(id)}
							onChange={e => setInputValue(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter') {
									stopEditingStep(id)
								}
							}}
						/>
					) : (
						<StepDescription
							fontWeight={500}
							onMouseOver={() => startEditingStep(id, name)}
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
