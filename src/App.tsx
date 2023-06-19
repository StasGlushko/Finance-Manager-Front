import {
	CategoryScale,
	Chart,
	LinearScale,
	PointElement,
	LineElement,
	ArcElement,
} from 'chart.js'
import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './routing/router'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement)

export const App: FC = () => {
	return <RouterProvider router={router} />
}
