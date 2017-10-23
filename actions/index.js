export const VIEW_TRIP = 'VIEW_TRIP'
export const VIEW_TRIP_PLACES = 'VIEW_TRIP_PLACES'
export const ADD_TRIP_PLACE = 'ADD_TRIP_PLACE'

export const viewTrip = id => {
  return {
    type: VIEW_TRIP,
    id
  }
}

export const viewPlaces = id => {
  return {
    type: VIEW_TRIP_PLACES,
    id
  }
}

export const addPlace = (id, name, summary) => {
  return {
    type: ADD_TRIP_PLACE,
    id,
    name,
    summary
  }
}
