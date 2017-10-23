const initialState = {
  id: undefined,
  places: []
}

const trip = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_TRIP':
      return {...state, id : action.id}
    case 'VIEW_TRIP_PLACES':
      return Object.assign({},
        ...state
      )
    case 'ADD_TRIP_PLACE':
      return {
        ...state,
        places: [...state.places, {id: action.id, name: action.name, summary: action.summary}]
      };
    default:
      return state
  }
}

export default trip
