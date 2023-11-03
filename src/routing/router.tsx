import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '@pages/Router-error-page/Error-page'
import { Login } from '@pages/Login/LoginContainer'
import { Register } from '@pages/Register/RegisterContainer'
import { Paths } from './paths'
import { Categories } from '@pages/Categories/CategoriesContainer'
import { AddEditCategories } from '@pages/Popups/AddEditCategories/AddEditCategories'
import { AddEditOperations } from '@pages/Popups/AddEditOperations/AddEditOperations'
import { Operations } from '@pages/Operations/OperationsContainer'
import { Reports } from '@pages/Reports/ReportsContainer'
import { Home } from '@pages/Home/Home'
import { RequireAuth } from '@/hoc/RequireAuth'
import { IsLoading } from '@/hoc/IsLoading'
import { Root } from '@pages/Layout/Root/Root'
import { Loading } from '@/ui/Loading/Loading'

export const router = createBrowserRouter([
	{
		path: Paths.home,
		element: (
			<RequireAuth>
				<Root />
			</RequireAuth>
		),
		errorElement: <ErrorPage />,

		children: [
			{
				element: (
					<IsLoading>
						<Home />
					</IsLoading>
				),
				path: Paths.home,
			},
			{
				path: Paths.categories,
				element: <Categories />,
				children: [
					{
						path: `${Paths.addEdit}/:id`,
						element: <AddEditCategories />,
					},
					{
						path: Paths.addEdit,
						element: <AddEditCategories />,
					},
				],
			},

			{
				path: Paths.operations,
				element: <Operations />,
				children: [
					{
						path: `${Paths.addEdit}/:id`,
						element: <AddEditOperations />,
					},
					{
						path: Paths.addEdit,
						element: <AddEditOperations />,
					},
				],
			},
			{
				path: Paths.reports,
				element: <Reports />,
			},
		],
	},
	{
		path: Paths.login,
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: Paths.register,
		element: <Register />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/loading',
		element: <Loading />,
	},
])
