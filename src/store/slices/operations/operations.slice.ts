import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOperationsRes } from '../../../types/Fetch.interface'
import {
	fetchOperations,
	fetchCreateOperations,
	fetchDeleteOperations,
	fetchEditOperations,
} from './operations.action'

interface IInitialState {
	items: IOperationsRes[] | []
	types: string[]
	isLoading: boolean
}

const initialState: IInitialState = {
	items: [],
	types: ['Deposit', 'Withdrawal', 'Money Transfer', 'Payment', 'Investment'],
	isLoading: false,
}

export const operations = createSlice({
	name: 'operations',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchOperations.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchOperations.fulfilled,
				(state, action: PayloadAction<IOperationsRes[]>) => {
					state.isLoading = false
					state.items = action.payload.reverse()
				},
			)
			.addCase(fetchOperations.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
				state.items = []
			})
			.addCase(fetchCreateOperations.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchCreateOperations.fulfilled,
				(state, action: PayloadAction<IOperationsRes>) => {
					state.isLoading = false
					state.items = [action.payload, ...state.items]
				},
			)
			.addCase(fetchCreateOperations.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
			})
			.addCase(fetchDeleteOperations.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchDeleteOperations.fulfilled, (state, action) => {
				state.isLoading = false
				state.items = state.items.filter(el => el._id !== action.payload.id)
			})
			.addCase(fetchDeleteOperations.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
			})
			.addCase(fetchEditOperations.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchEditOperations.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.items = state.items.map(el => {
					if (el._id === payload.id) {
						return (el = {
							...el,
							nameCategories: payload.nameCategories,
							description: payload.description,
							typeOperations: payload.typeOperations,
							sum: payload.sum,
							date: payload.date,
						})
					}
					return el
				})
			})
			.addCase(fetchEditOperations.rejected, (state, action) => {
				state.isLoading = false
				console.log('error', action.payload)
			})
	},
})

export const { actions, reducer } = operations
