import axios from 'axios'
import { RecipeFormData } from '../types'

interface RecipeFormDataWithId extends RecipeFormData {
	id: string
}

export const createRecipe = async (data: RecipeFormDataWithId) => {
	axios.post('http://localhost:5000/recipes', data)
}
