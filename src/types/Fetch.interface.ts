export interface IAuthRes {
	_id: string
	userName: string
	email: string
	createdAt: string
	updatedAt: string
	__v: number
	token: string
}

export interface IOperationsRes {
	_id: string
	nameCategories: string
	typeOperations: string
	sum: number
	description: string
	date: string
	user: string
	createdAt: string
	updatedAt: string
	__v: number
}

export interface ICategoriesRes {
	_id: string
	title: string
	description: string
	user: string
	createdAt: string
	updatedAt: string
	__v: number
}

export interface IAddEditOperations {
	id?: string
	nameCategories: string
	typeOperations: string
	sum: number
	description: string
	date: string
}


export interface IAddEditCategories {
	id?: string
	title: string
	description: string
}

