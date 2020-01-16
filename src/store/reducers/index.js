import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import works from './works'

// для подключения новых редьюсеров импортировать и передать в combineReducers

export default combineReducers({
	works,
	form: formReducer
})
