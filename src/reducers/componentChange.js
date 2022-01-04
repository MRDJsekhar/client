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
				component: 'DCUMaster'
			};
		}
		case 'sim-master': {
			return {
				...state,
				component: 'SimMaster'
			};
		}
		case 'pt-master' : {
			return {}
		}

		default: {
			return state;
		}
	}
};

export default componentChange;
