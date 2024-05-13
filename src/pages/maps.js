import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {styles} from '../assets/css/css';
import {View, Text, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const Maps = ({route}) => {
    const {lat, long} = route.params;
    const [latitude, setLatitude] = useState(parseFloat(lat));
    const [longitude, setLongitude] = useState(parseFloat(long));
    const [destinoLat, setDestinoLat] = useState(null);
    const [destinoLon, setDestinoLon] = useState(null);
  
    useEffect(() => {
      if (destinoLat !== null && destinoLon !== null) {
        setLatitude(destinoLat);
        setLongitude(destinoLon);
      }
    }, [destinoLat, destinoLon]);
  
    console.log('lat', latitude);
    console.log('long', longitude);
  
    return (
      <View style={styles.containerMaps}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={false}
          toolbarEnabled={false}
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
          }}>
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title="Meu local"
            description="Localização atual"
          />
        </MapView>
        <View style={styles.search}>
          <GooglePlacesAutocomplete
            placeholder="Para onde vamos?"
            onPress={(data, details = null) => {
              setDestinoLat(details.geometry.location.lat);
              setDestinoLon(details.geometry.location.lng);
            }}
            query={{
              key: 'AIzaSyCxTSg2fBq7-shHa7IbMfjKNQn6UxkIoAc',
              language: 'pt-br',
            }}
            enablePoweredByContainer={false}
            fetchDetails={true}
            styles={{listView: {height: 100}}}
          />
        </View>
      </View>
    );
  };
  
  export default Maps;
  