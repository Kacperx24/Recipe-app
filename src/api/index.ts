import axios from 'axios'
import { RecipeFormData } from '../types'

interface RecipeFormDataWithId extends RecipeFormData {
	id: string
}

export const getRecipes = async () => {
	try {
		const { data } = await axios('http://localhost:5000/recipes')
		return data
	} catch (error) {
		console.error('Error fetching recipes:', error)
		throw error
	}
}

export const createRecipe = async (data: RecipeFormDataWithId) => {
	try {
		axios.post('http://localhost:5000/recipes', data)
	} catch (error) {
		console.error('Error creating recipe:', error)
		throw error
	}
}
