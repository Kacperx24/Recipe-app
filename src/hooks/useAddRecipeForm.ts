import { useForm } from 'react-hook-form'
import { RecipeFormData } from '../types'
import useNotification from './useNotification'
import { useMutation, useQueryClient } from 'react-query'
import { createRecipe } from '../api'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'

const useAddRecipeForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isValid },
	} = useForm<RecipeFormData>()

	const navigate = useNavigate()
	const { showNotification } = useNotification()

	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: createRecipe,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['recipes'] })
			navigate(-1)
			showNotification({
				message: 'Recipe has been added successfully!',
				type: 'success',
			})
		},
	})

	const createNewRecipe = (data: RecipeFormData) => {
		mutation.mutate({ ...data, id: uuid() })
	}

	const onSubmit = (data: RecipeFormData) => {
		createNewRecipe(data)
	}

	const onError = () => {
		showNotification({
			message: 'Form is not completed!',
			type: 'error',
		})
	}

	return {
		register,
		handleSubmit: handleSubmit(onSubmit, onError),
		setValue,
		watch,
		errors,
		isValid,
	}
}

export default useAddRecipeForm
