import { fireEvent, screen } from '@testing-library/react'
import IngredientForm from '../IngredientForm'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from 'src/test-utils'

const mockSetIngredients = jest.fn()

describe('IngredientForm', () => {
	it('renders correctly', () => {
		renderWithTheme(<IngredientForm setIngredients={mockSetIngredients} />)

		expect(screen.getByTestId('quantity-input')).toBeInTheDocument()
		expect(screen.getByTestId('name-input')).toBeInTheDocument()
		expect(screen.getByText('Add')).toBeInTheDocument()
	})

	it('handles input changes', () => {
		renderWithTheme(<IngredientForm setIngredients={mockSetIngredients} />)

		fireEvent.change(screen.getByTestId('quantity-input'), {
			target: { value: 100 },
		})
		fireEvent.change(screen.getByTestId('name-input'), {
			target: { value: 'Test' },
		})

		expect(screen.getByTestId('quantity-input')).toHaveValue(100)
		expect(screen.getByTestId('name-input')).toHaveValue('Test')
	})

	it('handles form submission', () => {
		renderWithTheme(<IngredientForm setIngredients={mockSetIngredients} />)

		fireEvent.change(screen.getByTestId('quantity-input'), {
			target: { value: 100 },
		})
		fireEvent.change(screen.getByTestId('name-input'), {
			target: { value: 'Test' },
		})
		fireEvent.click(screen.getByText('Add'))

		expect(mockSetIngredients).toHaveBeenCalled()
	})
})
