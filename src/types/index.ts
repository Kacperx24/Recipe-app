export interface RecipeFormData {
	title: string
	description: string
	country: string
	preparationTime: number
	ingredients: Ingredient[]
	steps: Step[]
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
