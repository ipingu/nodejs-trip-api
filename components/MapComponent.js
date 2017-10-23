import React from 'react'
import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer , InfoWindow} from "react-google-maps"
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";


const MapComponent = compose(
  withStateHandlers(() => ({
    isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyACo1v3VDvckZOtTuXI5XmVYIuRP30xKXc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div id="map" />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(41.8507300, -87.6512600),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <div>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >

    <Marker
     position={{ lat: 41.85, lng: -87.65 }}
     onClick={props.onToggleOpen}
   >
     {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
     <div>
       <span>Santa Clara</span><br />
       <span>Recommandation : 9/10</span>
       <p>Enorme coup de coeur sur cette ville, grace au cheval d or qui mange du pain en dormant.</p>
       <span>Voir les 18 photos</span>
       <br />
       <span>Add to wish list</span>
       </div>
     </InfoWindow>}
   </Marker>

   {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>

  {/*<div data-standalone-searchbox="">
   <StandaloneSearchBox
     ref={props.onSearchBoxMounted}
     bounds={props.bounds}
     onPlacesChanged={props.onPlacesChanged}
   >
     <input
       type="text"
       placeholder="Customized your placeholder"
       style={{
         boxSizing: `border-box`,
         border: `1px solid transparent`,
         width: `240px`,
         height: `32px`,
         padding: `0 12px`,
         borderRadius: `3px`,
         boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
         fontSize: `14px`,
         outline: `none`,
         textOverflow: `ellipses`,
       }}
     />
   </StandaloneSearchBox>
   </div>**/}
   </div>
);

export default MapComponent
