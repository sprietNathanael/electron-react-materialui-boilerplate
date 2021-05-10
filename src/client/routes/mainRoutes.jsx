import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import MachinPage from 'views/Machin/Machin.jsx';
// Views to use for each routes

const dashboardRoutes = [
	{
		path: '/dashboard',
		component: DashboardPage,
	},
	{
		path: '/machin',
		component: MachinPage,
	},
	{
		redirect: true,
		path: '/',
		to: '/dashboard',
	},
];

export default dashboardRoutes;
