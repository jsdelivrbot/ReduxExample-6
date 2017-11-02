//import _ from 'lodash';
import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        //this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;

// export default (props) => {
//     return (
//         <GoogleMapLoader 
//             containerElement={ <div style={{height: '100%'}} /> }
//             GoogleMapElement={
//                 <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
//             }
//         />
//     );
// }