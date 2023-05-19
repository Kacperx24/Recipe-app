import axios from 'axios'

import { Recipe } from '../types'

export const getRecipes = async () => {
	try {
		const { data } = await axios(`${process.env.REACT_APP_SERVER_URL}/recipes`)
		return data
	} catch (error) {
		console.error('Error fetching recipes:', error)
		throw error
	}
}

export const createRecipe = async (data: Recipe) => {
	try {
		axios.post(`${process.env.REACT_APP_SERVER_URL}/recipes`, data)
	} catch (error) {
		console.error('Error creating recipe:', error)
		throw error
	}
}
