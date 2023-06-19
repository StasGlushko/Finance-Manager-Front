import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategoriesRes } from '../../../types/Fetch.interface'
import { fetchCategoriesName } from './categories.action'
import {
	fetchCategories,
	fetchCreateCategories,
	fetchDeleteCategories,
	fetchEditCategories,
} from './categories.action'

interface IInitialState {
	items: ICategoriesRes[] | []
	categoriesName: string[] | []
	isLoading: boolean
}

const initialState: IInitialState = {
	items: [],
	categoriesName: [],
	isLoading: true,
}

export const categories = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCategories.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchCategories.fulfilled,
				(state, action: PayloadAction<ICategoriesRes[]>) => {
					state.isLoading = false
					state.items = action.payload.reverse()
				},
			)
			.addCase(fetchCategories.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
				state.items = []
			})
			.addCase(fetchCreateCategories.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchCreateCategories.fulfilled,
				(state, action: PayloadAction<ICategoriesRes>) => {
					state.isLoading = false
					state.items = [action.payload, ...state.items]
				},
			)
			.addCase(fetchCreateCategories.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
			})
			.addCase(fetchDeleteCategories.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchDeleteCategories.fulfilled, (state, action) => {
				state.isLoading = false
				state.items = state.items.filter(el => el._id !== action.payload.id)
			})
			.addCase(fetchDeleteCategories.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
			})
			.addCase(fetchEditCategories.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchEditCategories.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.items = state.items.map(el => {
					if (el._id === payload.id) {
						return (el = {
							...el,
							title: payload.title,
							description: payload.description,
						})
					}
					return el
				})
			})
			.addCase(fetchEditCategories.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
			})
			.addCase(fetchCategoriesName.pending, state => {
				state.categoriesName = []
			})
			.addCase(fetchCategoriesName.fulfilled, (state, action) => {
				state.categoriesName = action.payload
			})
			.addCase(fetchCategoriesName.rejected, (state, action) => {
				console.log(action.payload)
			})
	},
})

export const { actions, reducer } = categories
