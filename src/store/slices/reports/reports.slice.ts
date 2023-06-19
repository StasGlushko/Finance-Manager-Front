import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IOperationsRes } from '../../../types/Fetch.interface'

interface IItem {
	date: string
	msDate: string
	isActive: {
		active: boolean
		is: 'to' | 'from' | ''
	}
}

interface IInitialState {
	from: string
	to: string
	fromItems: IItem[]
	toItems: IItem[]
}

const initialState: IInitialState = {
	from: '',
	to: '',
	fromItems: [],
	toItems: [],
}

export const reports = createSlice({
	name: 'reports',
	initialState,
	reducers: {
		changeTo: (state, action: PayloadAction<string>) => {
			state.to = action.payload
		},
		changeFrom: (state, action: PayloadAction<string>) => {
			state.from = action.payload
		},
		getDates: (state, { payload }: PayloadAction<IOperationsRes[]>) => {
			payload.map(el => {
				const msDate = ''
				const item: IItem = {
					date: el.date,
					msDate,
					isActive: {
						active: false,
						is: '',
					},
				}
				state.fromItems.push(item)
				state.toItems.push(item)
			})
		},
	},
})

export const { actions, reducer } = reports
