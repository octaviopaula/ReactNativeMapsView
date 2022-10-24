import React, { useState, useEffect , useRef} from 'react';
import { Text, View, StyleSheet, ImageBackground, } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';
import * as Location from "expo-location";
import * as Permissions from 'expo';

export default function App() {


  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  
  useEffect(()=>{
    (async function(){
        const { status, permissions } = await Permissions.askAsync( Permissions.LOCATION);
        if ( status === 'granted') {
          let Location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true});
          setOrigin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
        } else {
          throw new Error('Location Permissions not granted');
        }
    })();
  },[]);
  return (
    <ImageBackground 
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Mapa<Text style={styles.title2}>View</Text></Text>
      </View>
      <View style={styles.container}>
        <MapView 
        
        style={styles.map}
        initialRegion={origin}
        showsUserLocation={true}

        >
        
      </MapView>
      </View>
       
      <View style={styles.endline}>
        <Text style={styles.title}>Mapa<Text style={styles.title2}>View</Text></Text>     
      </View>
     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,

  },
  header: {
    height: 50,
    backgroundColor: '#555555',
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'tiene',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#37C6F7'
  },
  title2: {
    fontSize: 24,
    fontFamily: 'tiene',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF'
  },
  endline: {
    paddingTop: 10,
    height: 50,
    backgroundColor: '#555555',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  map: {
    height: '100%',
    backgroundColor: 'black',
  
  },
});
