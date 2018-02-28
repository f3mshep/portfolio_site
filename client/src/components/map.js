import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MapInfoWindow from '../containers/map_info_window'

export default class Map extends Component {

  static defaultProps = {
    center: { lat: 38.05, lng: -122.65 },
    zoom: 8
  }

  createMapOptions(maps){
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      disableDefaultUI: true
    }
  }

render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{key:"AIzaSyAOOEkz0TciO6ysok-yh5wt712hlfxv66A"}}
          options={this.createMapOptions.bind(this)}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <MapInfoWindow
            lat={ 38.05 }
            lng={ -122.65 }
            text={ "Based in the East Bay" }
          />
        </GoogleMapReact>
      </div>
    )
  }
}