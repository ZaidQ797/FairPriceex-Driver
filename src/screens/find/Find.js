import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Dimensions, View, Text, LogBox, ScrollView, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 33.690067;
const LONGITUDE = 73.025502;
const LATITUDE_DELTA = 0.0722;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
LogBox.ignoreAllLogs();
class Find extends Component {
  state = {
    markers: [
      {
        title: '$100',
        coordinates: {
          latitude: 33.690067,
          longitude: 73.025502,
        },
      },
      {
        title: '$9',
        coordinates: {
          latitude: 33.676926,
          longitude: 73.017257,
        },
      },
      {
        title: '$8',
        coordinates: {
          latitude: 33.679211,
          longitude: 73.008993,
        },
      },
    ],
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          mode="DRIVING"
          followUserLocation={true}
          zoomEnabled={true}>
          {this.state.markers.map((marker, index) => (
            <MapView.Marker
              onPress={() => {
                this.gig.open();
              }}
              key={index}
              coordinate={marker.coordinates}>
              <TouchableOpacity
                style={[
                  {
                    height: 50,
                    width: 50,
                    borderRadius: 50 / 2,
                    backgroundColor: 'red',
                    backgroundColor: '#11c240',
                    justifyContent: 'center',
                  },
                ]}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 16,

                    // marginBottom: 10,
                    alignSelf: 'center',
                  }}>
                  {marker.title}
                </Text>
              </TouchableOpacity>
            </MapView.Marker>
          ))}
        </MapView>

        <RBSheet
          ref={categRef => {
            this.gig = categRef;
          }}
          height={600}
          openDuration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginTop: 10,
            },
          }}>
          <ScrollView>
            <View style={{flex: 1}}>
              <View style={{flex: 0.7, paddingBottom: 20}}>
                <Text
                  style={{
                    color: 'black',
                    width: '80%',
                    fontSize: 18,
                    margin: 10,

                    // alignSelf: 'center',
                    //   fontFamily: Fonts.PoppinsRegular,
                  }}>
                  Delivery Detail
                </Text>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginRight: 10,
                    }}>
                    <View>
                      <Entypo
                        color={'blue'}
                        size={25}
                        name={'location-pin'}
                        // style={{alignSelf: 'center'}}
                      />
                      <SimpleLineIcons
                        name="options-vertical"
                        size={15}
                        style={{alignSelf: 'center'}}
                        color={'tomato'}
                      />
                    </View>
                    <Text
                      style={{
                        color: 'blue',
                        fontSize: 13,
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      50
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Entypo
                      color={'tomato'}
                      size={25}
                      name={'location-pin'}
                      // style={{alignSelf: 'center'}}
                    />
                    <Text
                      style={{
                        color: 'tomato',
                        fontSize: 13,
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      50
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        margin: 10,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      21 mi
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        margin: 10,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      31 mins
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        margin: 10,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      large
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'blue',

                        margin: 10,
                        fontSize: 18,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      ${'500'}
                    </Text>
                  </View>
                </View>
                <Divider />

                <View
                  style={{
                    margin: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 14,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      PICKUP
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      {'Delivery Type'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 9,
                        color: 'tomato',
                      }}>
                      After Pickup
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 14,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      PICKUP
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      7:00 PM
                    </Text>
                    <Text
                      style={{
                        fontSize: 9,
                        color: 'tomato',
                      }}>
                      Today
                    </Text>
                  </View>
                </View>
                <Divider />

                <View
                  style={{
                    margin: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'tomato',
                        fontSize: 14,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      ITEMS
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      1 ITEM
                    </Text>
                    <Text
                      style={{
                        fontSize: 9,
                      }}>
                      Quantity
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 14,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      WEIGHT
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      30 Lbs
                    </Text>
                    <Text
                      style={{
                        fontSize: 9,
                        color: 'tomato',
                      }}>
                      Heaviest Items
                    </Text>
                  </View>
                </View>
                <Divider />

                <View
                  style={{
                    margin: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      PAYMENT METHOD
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        resizeMode="contain"
                        style={{
                          height: 37,
                          width: 37,
                        }}
                        source={{
                          uri:
                            'https://icons-for-free.com/iconfiles/png/512/credit+card+debit+card+master+card+icon-1320184902602310693.png',
                        }}
                      />
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          alignSelf: 'center',

                          // alignSelf: 'center',
                          //   fontFamily: Fonts.PoppinsRegular,
                        }}>
                        {'PAYPAL'}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 9,
                        color: 'tomato',
                      }}>
                      {'Paid'}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      DECLARED
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,

                        // alignSelf: 'center',
                        //   fontFamily: Fonts.PoppinsRegular,
                      }}>
                      ${100}
                    </Text>
                    <Text
                      style={{
                        fontSize: 9,
                        color: 'tomato',
                      }}>
                      Total Value
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[
                    styles.btnstyle,
                    {width: '100%', padding: 10, marginTop: 20},
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                      alignSelf: 'center',
                    }}>
                    Track Delivery
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </RBSheet>
      </View>
    );
  }
}

export default Find;
