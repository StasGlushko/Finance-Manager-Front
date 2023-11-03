import { FC, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import dayjs from 'dayjs'

import { Select, SelectChangeEvent, TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateField } from '@mui/x-date-pickers'

import s from './AddEditOperations.module.scss'
import { Popup } from '@pages/Layout/Popup/Popup'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { useActions } from '@hooks/useActions'
import { Paths } from '@/routing/paths'
import { IAddEditOperations } from '@/types/Fetch.interface'

export const AddEditOperations: FC = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { fetchCreateOperations, fetchEditOperations } = useActions()
	const { items, types } = useTypedSelector(state => state.operations)
	const { categoriesName } = useTypedSelector(state => state.categories)

	let name = ''
	let type = ''
	let sum = 0
	let description = ''
	let date = ''

	if (id) {
		items.map(el => {
			if (el._id === id) {
				name = el.nameCategories
				type = el.typeOperations
				sum = el.sum
				description = el.description
				date = el.date
			}
		})
	}

	const [nameCategories, setNameCategories] = useState<string>(name)

	const handleNameChange = (event: SelectChangeEvent) => {
		setNameCategories(event.target.value)
	}
	const [typeOperations, setTypeOperations] = useState<string>(type)

	const handleTypeChange = (event: SelectChangeEvent) => {
		setTypeOperations(event.target.value)
	}

	const convertToDate = (el: string): string => {
		let date = new Date(el).toLocaleDateString().split('.')

		date = [date[0], date[1]] = [date[1], date[0], date[2]]

		return date.join('/')
	}

	const formSubmit = (data: IAddEditOperations): void => {
		if (id) {
			fetchEditOperations({
				...data,
				date: convertToDate(data.date),
				id,
			})
		} else {
			fetchCreateOperations({
				...data,
				date: convertToDate(data.date),
			})
		}
		navigate(Paths.operations)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		defaultValues: {
			nameCategories: nameCategories,
			typeOperations: typeOperations,
			sum: sum,
			description: description,
			date: date,
		},
		mode: 'all',
	})

	return (
		<Popup>
			<h3 className={s.title}>Add/Edit Operations</h3>
			<form className={s.form} onSubmit={handleSubmit(formSubmit)}>
				<FormControl
					error={Boolean(errors.nameCategories?.message)}
					sx={{ marginBlock: 1, minWidth: 170 }}
					size='small'>
					<InputLabel id='demo-select-small-label'>
						Categories name
					</InputLabel>
					<Select
						{...register('nameCategories', {
							required: 'Вкажіть опис категорії',
						})}
						labelId='demo-select-small-label'
						id='demo-select-small'
						value={nameCategories}
						label='Categories name'
						onChange={handleNameChange}>
						{categoriesName.length > 0 &&
							categoriesName.map(el => (
								<MenuItem key={el} value={el}>
									{el}
								</MenuItem>
							))}
					</Select>
				</FormControl>

				<FormControl
					error={Boolean(errors.typeOperations?.message)}
					sx={{ marginBlock: 1, display: 'block' }}
					size='small'>
					<InputLabel id='demo-select-small-label'>
						Type Operation
					</InputLabel>
					<Select
						{...register('typeOperations', {
							required: 'Вкажіть опис категорії',
						})}
						sx={{ minWidth: 170 }}
						labelId='demo-select-small-label'
						id='demo-select-small'
						value={typeOperations}
						label='Type Operation'
						onChange={handleTypeChange}>
						{types.length > 0 &&
							types.map(el => (
								<MenuItem key={el} value={el}>
									{el}
								</MenuItem>
							))}
					</Select>
				</FormControl>

				<FormControl
					sx={{ marginBlock: 1, minWidth: 170, display: 'block' }}
					size='small'>
					<TextField
						size='small'
						id='outlined-basic'
						label='sum'
						variant='outlined'
						{...register('sum', {
							required: 'Вкажіть опис категорії',
						})}
						error={Boolean(errors.sum?.message)}
						inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
					/>
				</FormControl>

				<FormControl
					sx={{ marginBlock: 1, minWidth: 170, display: 'block' }}
					size='small'>
					<TextField
						size='small'
						id='outlined-basic'
						label='Description'
						variant='outlined'
						{...register('description', {
							required: 'Вкажіть опис категорії',
						})}
						error={Boolean(errors.description?.message)}
					/>
				</FormControl>

				<Controller
					control={control}
					name='date'
					render={({ field }) => (
						<FormControl
							// error={Boolean(fieldState.error?.message)}
							sx={{ marginBlock: 1, minWidth: 170, display: 'block' }}
							size='small'>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateField
									ref={field.ref}
									name={field.name}
									onBlur={field.onBlur}
									value={field.value ? dayjs(field.value) : null}
									required
									onChange={e => {
										field.onChange(e ? e.valueOf() : null)
									}}
								/>
							</LocalizationProvider>
						</FormControl>
					)}
				/>

				<button type='submit'>{id ? 'Edit' : 'Add'}</button>
			</form>
		</Popup>
	)
}
