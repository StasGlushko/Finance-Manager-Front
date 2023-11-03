import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { auth } from '@store/slices/auth/auth.slice'
import { categories } from '@store/slices/categories/categories.slice'
import { operations } from '@store/slices/operations/operations.slice'
import { reports } from '@store/slices/reports/reports.slice';
import {
	fetchRegister,
	fetchLogin,
	fetchAuthMe,
} from '@store/slices/auth/auth.action'
import {
	fetchCategories,
	fetchCreateCategories,
	fetchDeleteCategories,
	fetchEditCategories,
	fetchCategoriesName,
} from '@store/slices/categories/categories.action'
import {
	fetchOperations,
	fetchCreateOperations,
	fetchDeleteOperations,
	fetchEditOperations,
} from '@store/slices/operations/operations.action'

const rootActions = {
	...auth.actions,
	...operations.actions,
	...categories.actions,
	...reports.actions,
	fetchRegister,
	fetchAuthMe,
	fetchLogin,
	fetchCategories,
	fetchCategoriesName,
	fetchCreateCategories,
	fetchDeleteCategories,
	fetchEditCategories,
	fetchOperations,
	fetchCreateOperations,
	fetchDeleteOperations,
	fetchEditOperations,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
