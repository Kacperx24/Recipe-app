import axios from 'axios'

import { Recipe } from '../types'

export const getRecipes = async () => {
	try {
		const { data } = await axios('http://localhost:5000/recipes')
		return data
	} catch (error) {
		console.error('Error fetching recipes:', error)
		throw error
	}
}

export const createRecipe = async (data: Recipe) => {
	try {
		axios.post('http://localhost:5000/recipes', data)
	} catch (error) {
		console.error('Error creating recipe:', error)
		throw error
	}
}
