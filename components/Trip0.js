import React from 'react';
import PlaceArticle from './PlaceArticle'
import PlaceForm from './PlaceForm'
import MapComponent from './MapComponent'

class Trip extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        messages: [],
        showForm: true
      };
  }

  componentDidMount() {
    // Load related places for current trip
    fetch('http://localhost:3001/trips/59eb7c4c1079661e84418da8/places')
      .then(response => response.json())
      .then(data => {
        let places = data.places.map((place) => {
          return (
            <PlaceArticle key={place.id} title={place.name} summary={place.summary}/>
          )
        });

        this.setState({messages : places});
      });
  }

   render() {
      return (
         <div>
           <MapComponent/>
           <div id="container">
            <PlaceForm />
            {this.state.messages}
           </div>
         </div>
      );
   }
}
export default Trip;
