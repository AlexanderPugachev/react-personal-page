export const GET_WORKS = 'GET_WORKS'
export const CHOOSE_WORK = 'CHOOSE_WORK'

export const getWorks = (worksList) => ({
	type: GET_WORKS,
	payload: worksList
})
export const chooseWork = (chosenWorkId) => ({
	type: CHOOSE_WORK,
	payload: chosenWorkId
})
