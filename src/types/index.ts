export interface FormData {
	title: string
	description: string
	country: string
	preparationTime: number
	ingredients: string[]
	steps: string[]
}

export interface Country {
	value: string
	label: string
	image: string
}
