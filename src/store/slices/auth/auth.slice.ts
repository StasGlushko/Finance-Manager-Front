import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchRegister, fetchLogin, fetchAuthMe } from './auth.action'
import { IAuthRes } from '../../../types/Fetch.interface'

interface IInitialState {
	info: null | unknown
	isAuth: boolean
	isLoading: boolean
	error: null | string
}

const initialState: IInitialState = {
	info: null,
	isAuth: false,
	isLoading: false,
	error: null,
}

export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.isAuth = false
			state.info = null
			window.localStorage.removeItem('token')
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchRegister.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchRegister.fulfilled,
				(state, action: PayloadAction<IAuthRes>) => {
					if ('token' in action.payload) {
						window.localStorage.setItem('token', action.payload.token)
					}
					state.isLoading = false
					state.info = action.payload
					state.isAuth = true
				},
			)
			.addCase(fetchRegister.rejected, state => {
				state.error = 'Register error'
				console.error(state.error)
			})
			.addCase(fetchLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchLogin.fulfilled,
				(state, action: PayloadAction<IAuthRes>) => {
					if ('token' in action.payload) {
						window.localStorage.setItem('token', action.payload.token)
					}
					state.info = action.payload
					state.isLoading = false
					state.isAuth = true
				},
			)
			.addCase(fetchLogin.rejected, state => {
				state.error = 'Login error'
				console.error(state.error);
			})
			.addCase(fetchAuthMe.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchAuthMe.fulfilled,
				(state, action: PayloadAction<IAuthRes>) => {
					state.isLoading = false
					state.info = action.payload
					state.isAuth = true
				},
			)
			.addCase(fetchAuthMe.rejected, state => {
				state.error = 'Auth error'
				console.error(state.error)
			})
	},
})

export const { actions, reducer } = auth
