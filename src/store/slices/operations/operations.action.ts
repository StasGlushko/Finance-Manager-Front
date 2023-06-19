import { createAsyncThunk } from '@reduxjs/toolkit'
import { instanceAxios } from '../../../api/api'
import {
	IOperationsRes,
	IAddEditOperations,
} from '../../../types/Fetch.interface'

export const fetchOperations = createAsyncThunk<
	IOperationsRes[],
	null,
	{ rejectValue: string }
>('fetch/operations', async (_, thunkApi) => {
	return await instanceAxios
		.get('operations')
		.then(res => {
			return res.data
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})

export const fetchCreateOperations = createAsyncThunk<
	IOperationsRes,
	IAddEditOperations,
	{ rejectValue: string }
>(
	'create/operations',
	async (
		{ nameCategories, description, date, sum, typeOperations },
		thunkApi,
	) => {
		return await instanceAxios
			.post('operations', {
				nameCategories,
				description,
				date,
				sum,
				typeOperations,
			})
			.then(res => {
				return res.data
			})
			.catch(() => {
				return thunkApi.rejectWithValue('Server Error!')
			})
	},
)

export const fetchDeleteOperations = createAsyncThunk<
	{ data: unknown; id: string },
	string,
	{ rejectValue: string }
>('delete/operations', async (id, thunkApi) => {
	return await instanceAxios
		.delete(`operations/${id}`)
		.then(res => {
			return { data: res.data, id }
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})

export const fetchEditOperations = createAsyncThunk<
	IAddEditOperations,
	IAddEditOperations,
	{ rejectValue: string }
>(
	'edit/operations',
	async (
		{ id, date, description, nameCategories, sum, typeOperations },
		thunkApi,
	) => {
		return await instanceAxios
			.patch(`operations/${id}`, {
				date,
				description,
				nameCategories,
				sum,
				typeOperations,
			})
			.then(() => {
				return {
					id,
					date,
					description,
					nameCategories,
					sum,
					typeOperations,
				}
			})
			.catch(() => {
				return thunkApi.rejectWithValue('Server Error!')
			})
	},
)
