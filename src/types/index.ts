export interface RecipeFormData {
	title: string
	description: string
	country: string
	preparationTime: number
	ingredients: Ingredient[]
	difficulty: Difficulty
	steps: Step[]
}

export interface Recipe {
	title: string
	description: string
	country: string
	preparationTime: number
	ingredients: Ingredient[]
	steps: Step[]
	difficulty: Difficulty
	id: string
}

export interface Country {
	value: string
	label: string
	image: string
}

export interface Ingredient {
	unit: string
	quantity: string
	name: string
	id: string
}

export interface Step {
	point: number
	name: string
	id: string
}

export type Difficulty = 'easy' | 'medium' | 'hard'
