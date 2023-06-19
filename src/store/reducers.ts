import { combineReducers } from '@reduxjs/toolkit'
import { auth } from './slices/auth/auth.slice'
import { categories } from './slices/categories/categories.slice'
import { operations } from './slices/operations/operations.slice'
import { reports } from './slices/reports/reports.slice'

export const rootReducer = combineReducers({
	auth: auth.reducer,
	categories: categories.reducer,
	operations: operations.reducer,
	reports: reports.reducer,
})
