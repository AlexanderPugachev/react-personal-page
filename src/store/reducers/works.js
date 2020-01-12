import {
	GET_WORKS,
	CHOOSE_WORK
} from "../action";

const initialState = {
	worksList: [],
	chosenWorkId: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_WORKS:
			return {
				...state,
				worksList: action.payload
			}
		case CHOOSE_WORK:
			return {
				...state,
				chosenWorkId: action.payload}
		default:
			return state;
	}
}
