export interface Pin {
	title: string
	items: PinItem[]
}

export interface PinItem {
	author: string
	authors?: Author[]
	title?: string		//TODO
	article?: string	//TODO
	year: number
}

export interface Author {
	id: string
	name: string
	firstName?: string
	lastName?: string
	isOther?: boolean
}