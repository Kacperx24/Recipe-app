import { screen, fireEvent, waitFor } from '@testing-library/react'
import StepList from '../StepList'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from 'src/test-utils'

const mockOnRemoveStep = jest.fn()

const mockSteps = [
	{ name: 'Step 1', point: 1, id: '1' },
	{ name: 'Step 2', point: 2, id: '2' },
]

describe('StepList', () => {
	it('renders correctly', () => {
		renderWithTheme(
			<StepList steps={mockSteps} onRemoveStep={mockOnRemoveStep} />
		)

		mockSteps.forEach(step => {
			expect(screen.getByText(step.name)).toBeInTheDocument()
		})
	})

	it('handles remove step', async () => {
		renderWithTheme(
			<StepList steps={mockSteps} onRemoveStep={mockOnRemoveStep} />
		)

		const removeButtons = screen.getAllByRole('button')

		removeButtons.forEach(async (button, i) => {
			fireEvent.click(button)
			await waitFor(() => {
				expect(mockOnRemoveStep).toHaveBeenCalledWith(mockSteps[i].id)
			})
		})
	})
})
