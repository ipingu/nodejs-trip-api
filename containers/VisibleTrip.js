import { connect } from 'react-redux'
import { viewTrip, viewPlaces } from '../actions'
import Trip from '../components/Trip'

const getTripPlaces = (trip) => {
{/*}

  should be put in saga

    fetch('http://localhost:3001/trips/59eb7c4c1079661e84418da8/places')
      .then(response => response.json
      .then(data => {
          return data.places
      })
*/}
  return trip.places;
}

const mapStateToProps = state => {
  return {
    places: getTripPlaces(state.trip)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const VisibleTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip)

export default VisibleTrip
