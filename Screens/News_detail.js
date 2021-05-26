import React, { useFocusEffect, useCallback } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { newsdata } from '../../JsonData/newsjson';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Icon } from 'react-native-elements'
import Share from 'react-native-share';
import { Platform } from 'react-native';


const Newsdetail = ({ navigation }) => {


    return (


        <View>

            <View style={{
                backgroundColor: "#BE1E2D",
                ...ifIphoneX({
                    height: 110,
                    paddingTop: 50
                }, {
                    height: 70,

                }),

                flexDirection: "row"
            }}>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20%"
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('news')}>
                        <Text style={{
                            fontSize: 14,
                            color: "#FAFAFA",
                            fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                        }}>BACK</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60%"
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('newsoverlay')}>
                        <Text style={{
                            color: "#FAFAFA",
                            fontWeight: Platform.OS == "ios" ? "bold" : null,
                            fontSize: 21,
                            fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                        }}>NEWS</Text>
                    </TouchableOpacity>

                </View>

                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20%"
                }}>
                    <TouchableOpacity onPress={() => Share.open({ url: "../../assest/images/letestnews.png" })
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => {
                            err && console.log(err);
                        })}>
                        <Icon
                            name="upload"
                            type="antdesign"
                            color="#FFFFFF"
                            size={19}

                        />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView alwaysBounce={false}
                bounces={false}
                contentContainerStyle={{ flexGrow: 1 }}
                style={{}}>
                <View style={{}}>
                    {newsdata.map((item, i) => {
                        var data = item.img_source
                        var dataid = item.id

                        if (dataid == paramkey || dataid == paramkey) {

                            return (
                                <View>
                                    <View style={{
                                        flexDirection: "row",
                                        paddingLeft: 15,
                                        paddingTop: 25
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                            color: "#707174",
                                            fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                        }}>{item.post_time}</Text>

                                        <Text style={{
                                            fontSize: 12,
                                            color: "#707174",
                                            marginLeft: 10,
                                            fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                        }}>{item.repoter}</Text>

                                    </View>
                                    <View style={{
                                        width: 50,
                                        height: 2,
                                        backgroundColor: "#BE1E2D",
                                        marginLeft: 15,
                                        marginTop: 10
                                    }}>
                                    </View>


                                    <View style={{
                                        marginTop: 15,
                                        paddingLeft: 15
                                    }}>
                                        <Text style={{
                                            fontSize: 25,
                                            color: "#111218",
                                            fontWeight: Platform.OS == "ios" ? "bold" : null,
                                            textTransform: "uppercase",
                                            fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBold",
                                        }}>{item.detail}</Text>
                                    </View>

                                    <View style={{ marginTop: 30 }}>
                                        <Image source={data}
                                            style={{
                                                width: "100%",
                                                height: 210
                                            }} />
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        padding: 21
                                    }}>
                                        <View>
                                            <Image source={require("../../../assest/images/Dark.png")}
                                                style={{ width: 2, height: 16 }} />
                                        </View>
                                        <Text style={{
                                            fontSize: 12,
                                            color: "#707174",
                                            marginLeft: 12,
                                            fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                        }}>Photo Credit:</Text>
                                        <Text style={{
                                            fontSize: 12,
                                            color: "#707174",
                                            fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                        }}>{item.photographer}</Text>
                                    </View>


                                    <View style={{
                                        padding: 21,
                                        paddingTop: -2
                                    }}>
                                        <View>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc}</Text>
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Image source={item.info_img}
                                                style={{
                                                    height: 191,
                                                    width: "100%"
                                                }} />
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc1}</Text>
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc2}</Text>
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc3}</Text>
                                        </View>

                                        <View style={{
                                            marginTop: 30,
                                            alignContent: "center",
                                            justifyContent: "center",
                                            paddingLeft: "15%",
                                            paddingRight: "15%"
                                        }}>
                                            <Text style={{
                                                fontSize: 21,
                                                color: "#111218",
                                                textAlign: "center",
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.Line}</Text>


                                            <View style={{
                                                width: "100%",
                                                height: 2,
                                                backgroundColor: "#BE1E2D",

                                                marginTop: 10
                                            }}>
                                            </View>
                                        </View>


                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc4}</Text>
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc5}</Text>
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc6}</Text>
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: "#111218",
                                                lineHeight: 20,
                                                fontFamily: Platform.OS == "ios" ? "Futura Std" : "FuturaStdBook",
                                            }}>{item.desc7}</Text>
                                        </View>


                                        <View style={{ marginTop: 30, marginBottom: 100 }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <Image source={item.info_img2}
                                                    style={{
                                                        width: "49%",
                                                        height: 119,
                                                        marginRight: 10
                                                    }} />
                                                <Image source={item.info_img3}
                                                    style={{
                                                        width: "49%",
                                                        height: 119
                                                    }} />
                                            </View>
                                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                                <Image source={item.info_img4}
                                                    style={{
                                                        width: "49%",
                                                        height: 119,
                                                        marginRight: 10
                                                    }} />
                                                <Image source={item.info_img5}
                                                    style={{
                                                        width: "49%",
                                                        height: 119
                                                    }} />
                                            </View>
                                        </View>


                                    </View>
                                </View>
                            );
                        }
                    })}

                </View>
            </ScrollView>
        </View>
    );
}

export default Newsdetail;