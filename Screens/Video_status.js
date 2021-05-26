import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

export const Videostatus = () => {
     return (
          <View>
               <View style={{
                    width: '33%',
                    height: 2,
                    backgroundColor: "#BE1E2D",
                    marginLeft: "33%"
               }}>
               </View>
               <View style={{ height: 500 }}>
                    {/* <ScrollView alwaysBounce={false}
                        bounces={false}
                        contentContainerStyle={{flexGrow:1 , paddingBottom:"50%"}}> */}
                    <View>
                         <View style={{ flexDirection: "row" }}>
                              <Image source={require("../../../assest/images/Vedio/l1.png")}
                                   style={{
                                        width: "50%",
                                        height: 125
                                   }} />
                              <Image source={require("../../../assest/images/Vedio/l2.png")}
                                   style={{
                                        width: "50%",
                                        height: 125
                                   }} />
                         </View>

                         <View style={{
                              flexDirection: "row",
                              width: "100%",

                              height: 60,
                              alignItems: "center",

                         }}>
                              <View style={{
                                   width: "45%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 21,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }} >DUTCHOVER</Text>
                              </View>
                              <View style={{
                                   width: "10%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text>vs</Text>
                              </View>
                              <View style={{
                                   width: "45%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 21,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }}>DINOG</Text>
                              </View>

                         </View>
                         <View style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: "#707174",
                              opacity: 0.5
                         }}>
                         </View>

                         <View style={{
                              flexDirection: "row",
                              width: "100%",

                              height: 60,
                              alignItems: "center",

                         }}>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }} >Texas</Text>
                              </View>
                              <View style={{
                                   width: "20%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#707174",
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>Nationality</Text>
                              </View>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>Orthodox</Text>
                              </View>

                         </View>
                         <View style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: "#707174",
                              opacity: 0.5
                         }}>
                         </View>


                         <View style={{
                              flexDirection: "row",
                              width: "100%",

                              height: 60,
                              alignItems: "center",

                         }}>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }} >13</Text>
                              </View>
                              <View style={{
                                   width: "20%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#707174",
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>Wins</Text>
                              </View>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }}>6</Text>
                              </View>

                         </View>
                         <View style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: "#707174",
                              opacity: 0.5
                         }}>
                         </View>

                         <View style={{
                              flexDirection: "row",
                              width: "100%",

                              height: 60,
                              alignItems: "center",

                         }}>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }} >23</Text>
                              </View>
                              <View style={{
                                   width: "20%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#707174",
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>Age</Text>
                              </View>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }}>26</Text>
                              </View>

                         </View>
                         <View style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: "#707174",
                              opacity: 0.5
                         }}>
                         </View>

                         <View style={{
                              flexDirection: "row",
                              width: "100%",

                              height: 60,
                              alignItems: "center",

                         }}>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }} >5,7”</Text>
                              </View>
                              <View style={{
                                   width: "20%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#707174",
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>Height</Text>
                              </View>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>5,9”</Text>
                              </View>

                         </View>
                         <View style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: "#707174",
                              opacity: 0.5
                         }}>
                         </View>


                         <View style={{
                              flexDirection: "row",
                              width: "100%",

                              height: 60,
                              alignItems: "center",

                         }}>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }} >168 lb</Text>
                              </View>
                              <View style={{
                                   width: "20%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#707174",
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>Average Weight</Text>
                              </View>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>180 lb</Text>
                              </View>

                         </View>
                         <View style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: "#707174",
                              opacity: 0.5
                         }}>
                         </View>

                         <View style={{
                              flexDirection: "row",
                              width: "100%",

                              height: 60,
                              alignItems: "center",

                         }}>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }} >Nov. 2016</Text>
                              </View>
                              <View style={{
                                   width: "20%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#707174",
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                   }}>Debut</Text>
                              </View>
                              <View style={{
                                   width: "40%",
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text style={{
                                        fontSize: 14,
                                        color: "#111218",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                   }}>Jul. 2018</Text>
                              </View>

                         </View>
                         <View style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: "#707174",
                              opacity: 0.5
                         }}>
                         </View>
                    </View>


                    {/* </ScrollView> */}
               </View>
               <View style={{ height: 100 }}></View>

          </View>
     );
}