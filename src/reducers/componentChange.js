const initialState = {
	component: ''
};

const componentChange = (state = initialState, action) => {
	switch (action.type) {
		case 'meter-master': {
			return {
				...state,
				component: 'MeterMaster'
			};
		}
		case 'dcu-master': {
			return {
				...state,
				component: 'NavBar'
			};
		}
		case 'sim-master': {
			return {
				...state,
				component: 'SimMaster'
			};
		}
		case 'pt-master': {
			return {
				...state,
				component: 'ParameterThresholdpage'
			};
		}
		case 'new-meter': {
			return {
				...state,
				component: 'BasicTabs'
			};
		}
		case 'search': {
			return {
				...state,
				component: 'Search'
			};
		}
		case 'billing-determinants': {
			return {
				...state,
				component: 'BillingDeterminants'
			};
		}
		case 'am-summary': {
			return {
				...state,
				component: 'AMSummary'
			};
		}
		case 'am-installed': {
			return {
				...state,
				component: 'AMInstalled'
			};
		}
		case 'am-communicated': {
			return {
				...state,
				component: 'AMCommunicated'
			};
		}
		case 'am-commissioned': {
			return {
				...state,
				component: 'AMComissioned'
			};
		}

		default: {
			return state;
		}
	}
};

export default componentChange;
