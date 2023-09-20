import { createAsyncThunk } from '@reduxjs/toolkit'
import { instanceAxios } from '../../../api/api'
import { IUserLogin, IUserReg } from '../../../types/UserAuth.interface'
import { IAuthRes } from '../../../types/Fetch.interface'

export const fetchRegister = createAsyncThunk<
	IAuthRes,
	IUserReg,
	{ rejectValue: string }
>('auth/register', async ({ userName, email, password }, thunkApi) => {
	return await instanceAxios
		.post('auth/register', { userName, email, password })
		.then(res => {
			return res.data
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})

export const fetchLogin = createAsyncThunk<
	IAuthRes,
	IUserLogin,
	{ rejectValue: string }
>('auth/login', async ({ email, password }, thunkApi) => {
	return await instanceAxios
		.post('auth/login', { email, password })
		.then(res => {
			return res.data
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})

export const fetchAuthMe = createAsyncThunk<
	IAuthRes,
	unknown,
	{ rejectValue: string }
>('auth/me', async (_, thunkApi) => {
	return await instanceAxios
		.get('auth/me')
		.then(res => {
			return res.data
		})
		.catch(() => {
			return thunkApi.rejectWithValue('Server Error!')
		})
})
