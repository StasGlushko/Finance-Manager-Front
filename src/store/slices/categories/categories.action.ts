import { createAsyncThunk } from '@reduxjs/toolkit'
import { instanceAxios } from '../../../api/api'
import { ICategoriesRes, IAddEditCategories } from '../../../types/Fetch.interface'

export const fetchCategories = createAsyncThunk<
	ICategoriesRes[],
	null,
	{ rejectValue: string }
>('fetch/categories', async (_, thunkApi) => {
	return await instanceAxios
		.get('categories')
		.then(res => {
			return res.data
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})
export const fetchCategoriesName = createAsyncThunk<
	string[] | [],
	null,
	{ rejectValue: string }
>('fetch/categories-name', async (_, thunkApi) => {
	return await instanceAxios
		.get('categories-name')
		.then(res => {
			return res.data
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})

export const fetchCreateCategories = createAsyncThunk<
	ICategoriesRes,
	IAddEditCategories,
	{ rejectValue: string }
>('create/categories', async ({ title, description }, thunkApi) => {
	return await instanceAxios
		.post('categories', { title, description })
		.then(res => {
			return res.data
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})

export const fetchDeleteCategories = createAsyncThunk<
	{ data: unknown; id: string },
	string,
	{ rejectValue: string }
>('delete/categories', async (id, thunkApi) => {
	return await instanceAxios
		.delete(`categories/${id}`)
		.then(res => {
			return { data: res.data, id }
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})

export const fetchEditCategories = createAsyncThunk<
	IAddEditCategories,
	IAddEditCategories,
	{ rejectValue: string }
>('edit/categories', async ({id, title, description}, thunkApi) => {
	return await instanceAxios
		.patch(`categories/${id}`, {title, description})
		.then(() => {
			return {id, title, description}
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})
