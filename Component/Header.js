import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Icon } from 'react-native-elements'
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 70 : 80;
const APPBAR_RIGHT = Platform.OS === 'ios' ? 70 : 90;
const APPBAR_BOTTOM = Platform.OS === 'ios' ? 70 : 80;




export const HeaderView = () => {
  const navigation = useNavigation();

  return (

    <View style={styles.header}>

      <View style={{
        height: "100%",
        //backgroundColor:"gray",
        alignContent: "flex-end",
        justifyContent: "flex-end"
      }}>
        <View style={{}}>
          <View style={{
            justifyContent: "flex-end",
            height: "100%",
          }}>
            <View style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              height: "100%",
              alignItems: "center",
              justifyContent: "flex-end"

            }}>
              <View style={{
                width: "30%",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
              }}>
                <TouchableOpacity>
                  <Image source={require("../../assest/images/Logo.png")}
                    style={{
                      width: 117,
                      height: 24,
                      resizeMode: "stretch"
                    }} />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </View>

      <View style={styles.leftdiagonal}>
        <Image source={require("../../assest/images/Diagonal.png")}
          style={{
            width: 190,
            height: "170%",
            resizeMode: "contain",
          }} />


      </View>

      <View style={styles.rightdiagonal}>


        {/* <View style={styles.rightcomponant}>
                                <Image source={require("../../assest/images/Diagonal3.png")}
                                      style={styles.rightimage} />
                            </View> */}

        <View style={{ width: 150, height: 120 }}>

          <View style={styles.triangleup}></View>
          <View style={styles.triangledown}></View>

        </View>
      </View>
      <View style={{
        position: "absolute",
        alignContent: "flex-end",

        marginLeft: 20,
        ...ifIphoneX({
          paddingTop: 75

        }, {
          marginTop: 10,

          backgroundColor: "#BE1E2D"
        })
      }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name="navicon"
            type="evilicon"
            size={38}
            color="#FFFFFF"

          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    // top: 20,
    left: 0,
    right: 0,


    //  height: 70,
    backgroundColor: 'pink',
    ...ifIphoneX({
      height: 120,
      marginTop: -20,

    }, {
      // marginTop:-30,
      height: 50,
      // backgroundColor:"#BE1E2D"
    })
  },

  leftdiagonal: {
    position: "absolute",
    justifyContent: "flex-start",
    ...ifIphoneX({
      height: 140,
      paddingTop: 0,
      marginLeft: -30,


    }, {
      paddingTop: 0,
      height: 140,
      marginLeft: -70

    })

  },

  rightdiagonal: {
    position: "absolute",
    marginLeft: "62%",
    // backgroundColor:"gray",
    ...ifIphoneX({
      height: 102,
      width: 200,
      paddingTop: 0,



    }, {
      // paddingTop: 10,
      height: 70,
      paddingLeft: 20,


    })

  },

  rightcomponant: {
    paddingLeft: 22,
    ...ifIphoneX({
      height: 104,
      width: 180,
      paddingLeft: -36,

    }, {
      width: 160,
      height: "100%"

    })

  },

  rightimage: {
    ...ifIphoneX({
      height: "100%",
      width: "150%",
      resizeMode: "contain",
      marginLeft: -5

    }, {
      width: "100%",
      height: "100%",

    })

  },
  triangleup: {
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',


    ...ifIphoneX({
      borderLeftWidth: 90,
      borderRightWidth: 20,
      borderBottomWidth: 120,

    }, {
      borderLeftWidth: 40,
      borderRightWidth: 40,
      borderBottomWidth: 50,

    }),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#BE1E2D',

  },
  triangledown: {
    position: "absolute",


    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    ...ifIphoneX({
      borderLeftWidth: 90,
      borderRightWidth: 30,
      borderBottomWidth: 120,
      marginLeft: 80

    }, {
      borderLeftWidth: 40,
      borderRightWidth: 40,
      borderBottomWidth: 50,
      marginLeft: 39

    }),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#BE1E2D',
    transform: [
      { rotate: '180deg' }
    ]
  }

})


