import { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl'

import s from './AddEditCategories.module.scss'
import { Paths } from '@/routing/paths'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IAddEditCategories } from '@/types/Fetch.interface'
import { Popup } from '@/pages/Layout/Popup/Popup'

export const AddEditCategories: FC = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { fetchCreateCategories, fetchEditCategories } = useActions()
	const { items } = useTypedSelector(state => state.categories)

	let title = ''
	let description = ''

	if (id) {
		items.map(el => {
			if (el._id === id) {
				title = el.title
				description = el.description
			}
		})
	}

	const formSubmit = (data: IAddEditCategories) => {
		if (id) {
			fetchEditCategories({ ...data, id })
		} else {
			fetchCreateCategories(data)
		}
		navigate(Paths.categories)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: title,
			description: description,
		},
		mode: 'all',
	})

	return (
		<Popup>
			<h3 className={s.title}>Add/Edit Categories</h3>
			<form onSubmit={handleSubmit(formSubmit)} className={s.form}>
				<FormControl sx={{ marginBlock: 1, maxWidth: 300 }} size='small'>
					<TextField
						id='outlined-basic'
						label='Title'
						variant='outlined'
						{...register('title', {
							required: "Вкажіть ім'я категорії",
						})}
						error={Boolean(errors.title?.message)}
					/>
				</FormControl>
				<FormControl sx={{ marginBlock: 1, maxWidth: 300 }} size='small'>
					<TextField
						id='outlined-basic'
						label='Description'
						variant='outlined'
						{...register('description', {
							required: 'Вкажіть опис категорії',
						})}
						error={Boolean(errors.description?.message)}
					/>
				</FormControl>
				<button type='submit'>{id ? 'Edit' : 'Add'}</button>
			</form>
		</Popup>
	)
}
