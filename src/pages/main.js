import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../assets/css/css';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function Main() {
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de Acesso à Localização',
            message: 'Este aplicativo precisa acessar sua localização.',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          alert('Permissão de Localização negada');
        }
      };
      requestLocationPermission();
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const navigation = useNavigation();
  const viweMaps = () => {
    if (currentLatitude === '' || currentLongitude === '') {
      alert('Não foi possível obter a localização atual');
      return;
    } else {
      navigation.navigate('maps', {
        lat: currentLatitude,
        long: currentLongitude,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/image/maps.png')}
      />
      <Text style={styles.boldText}>Sua localização atual</Text>
      <Text style={styles.text}>Latitude: {currentLatitude}</Text>
      <Text style={styles.text}>Longitude: {currentLongitude}</Text>
      <TouchableOpacity style={styles.button} onPress={callLocation}>
        <Text style={styles.buttonText}>Obter Localização Atual</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={viweMaps}>
        <Text style={styles.buttonText}>Ver Localização no Google Maps</Text>
      </TouchableOpacity>
    </View>
  );
}
