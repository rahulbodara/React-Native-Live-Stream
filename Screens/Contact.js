import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { HeaderView } from '../Header';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Icon } from 'react-native-elements'



const Contact = ({ navigation }) => {
    const [enable, setEnable] = useState(false)
    const [department, setDepartment] = useState("Select Department")
    // const [color , setColor] = useState("#707174")

    
  const  selectDropdown = (item) => {
        console.log("Value of selected item is",item)
        setDepartment(item)
        setEnable(false)
    }

    const data = [
        {
            departmentType: "Department 1"
        },
        {
            departmentType: "Department 2"
        },
        {
            departmentType: "Department 3"
        },
        
       
    ]

    return (
        <View>
            <ScrollView alwaysBounce={false}
                bounces={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <HeaderView />

                    <View style={{
                        alignItems: "center",
                        ...ifIphoneX({
                            marginTop: 120
                        }, {
                            marginTop: 90
                        })
                    }}>
                        <Text style={{
                            fontSize: 23,
                            fontWeight: Platform.OS == "ios" ? "bold" : null,
                            fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBold",
                        }}>CONTACT US</Text>

                        <Text style={{
                            marginTop: 30,
                            fontSize: 18,
                            color: "#707174",
                            fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                        }}>Address</Text>

                        <Text style={{
                            marginTop: 10,
                            fontSize: 14,
                            textTransform: "uppercase",
                            fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                        }}>Thompson boxing promotions </Text>

                        <Text style={{
                            marginTop: 3,
                            fontSize: 14,
                            textTransform: "uppercase",
                            fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                        }}>282 south Anita drive</Text>


                        <Text style={{
                            marginTop: 3,
                            fontSize: 14, 
                            textTransform: "uppercase",
                            fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                        }}>Orange , ca 92868</Text>

                        <View style={{
                            height: 0.5,
                            backgroundColor: "#707174",
                            width: "90%",
                            marginTop: 25
                        }}></View>

                        <View style={{
                            flexDirection: "row",
                            padding: 25,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <View style={{
                                width: "35%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{
                                    color: "#707174",
                                    fontSize: 14,
                                    fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                                }}>Phone</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontSize: 14,
                                    color: "#111218",
                                    fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                                }}>7149350900</Text>
                            </View>

                            <View style={{
                                width: "35%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{
                                    color: "#707174",
                                    fontSize: 14,
                                    fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                                }}>Fax</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontSize: 14,
                                    color: "#111218",
                                    fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                                }}>7149350600</Text>
                            </View>
                        </View>


                        <View style={{
                            height: 0.5,
                            backgroundColor: "#707174",
                            width: "90%",
                        }}></View>


                        <Text style={{
                            marginTop: 25,
                            fontSize: 20,
                            fontWeight: Platform.OS == "ios" ? "bold" : null,
                            fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBold",
                        }}>EMAIL US</Text>

                        <View style={{
                            height: 50,
                            width: "90%",
                            backgroundColor: "#FFFFFF",
                            marginTop: 15,
                            justifyContent: "center",
                            paddingLeft: 15,
                            shadowColor: "#707174",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            elevation: 1,
                        }}>

                            <TextInput placeholder="* Type your full name"
                                placeholderTextColor="#707174"
                                style={{ fontSize: 12 }}

                            />

                        </View>


                        <View style={{
                            height: 50,
                            width: "90%",
                            backgroundColor: "#FFFFFF",
                            marginTop: 15,
                            justifyContent: "center",
                            paddingLeft: 15,
                            shadowColor: "#707174",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            elevation: 1,
                        }}>

                            <TextInput placeholder="* Your email address"
                                placeholderTextColor="#707174"
                                style={{ fontSize: 12 }}

                            />

                        </View>

                        {/* <TouchableOpacity onPress={()=>setEnable(true)} activeOpacity={0.8}> */}
                        <View style={{
                            height: 50,
                            width: "90%",
                            backgroundColor: "#FFFFFF",
                            marginTop: 15,
                            paddingLeft: 15,
                            justifyContent: "space-between",
                            alignItems:'center',
                            flexDirection: "row",
                            shadowColor: "#707174",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            elevation: 1,
                        }}>
                            <TouchableOpacity onPress={()=>setEnable(true)} activeOpacity={0.8} 
                                            style={{flexDirection: "row",width:"100%"}}>
                            <View style={{
                                width: "80%",
                                 justifyContent: 'center',alignSelf:'center'
                            }}>

                                <Text style={{
                                    fontSize: 12,
                                   //textAlign:'center',
                                    color: "#707174",
                                    fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                                }}>{department}</Text>
                            </View>
                            
                            <View style={{
                                width: "20%",
                                justifyContent: "center"
                            }}>
                                
                                    <Icon
                                        name="chevron-down"
                                        type="evilicon"
                                        size={30}
                                        color="#111218" />
                               
                            </View>
                            </TouchableOpacity>

                        </View>
                      
                        {
                            
                            enable === true ?
                            (

                            
                            
                            <View style={{ width: "90%",height:100,backgroundColor: 'white', paddingTop: 5,marginTop:2}}>
                                    <ScrollView nestedScrollEnabled = {true}>
                                      {
                                            data.map((item)=>{
                                                    
                                                return(

                                                <View style={{  }}>
                                                     <TouchableOpacity onPress={()=>selectDropdown(item.departmentType)  }
                                                                        >
                                                    <Text style={{ paddingLeft: 15, fontSize: 12,paddingTop:5  ,color:"#707174"}}>
                                                        {item.departmentType}
                                                    </Text>
                                                </TouchableOpacity>
                                                <View style={{ borderBottomWidth: 0.5,
                                                             borderBottomColor: '#707174', 
                                                             paddingTop: 5,
                                                              width: "100%", 
                                                              alignSelf: 'center',
                                                              height:15 }} />
                                                </View>
                                               // setColor("#707174")
                                                );

                                                
                                                })
                                        }
                                    </ScrollView>
                            </View>)
                                 : null
                        }
                        <View style={{
                            height: 150,
                            width: "90%",
                            backgroundColor: "#FFFFFF",
                            marginTop: 15,
                            paddingTop: 10,
                            paddingLeft: 8,
                            shadowColor: "rbga(112 , 113 , 116 , 0.3)",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            elevation: 1,
                        }}>

                            <TextInput placeholder="Tell us about you, your business and how we can help you"
                                placeholderTextColor="#707174"
                                style={{ fontSize: 12 }}

                            />

                        </View>

                        <View style={{
                            width: "90%",
                            marginTop: 25,
                            marginBottom: 20
                        }}>
                            <TouchableOpacity onPress={() => navigation.navigate("thankyou")}
                                style={{
                                    height: 40,
                                    backgroundColor: "#BE1E2D",
                                    width: "100%",
                                    borderRadius: 5,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >

                                <Text style={{
                                    color: "#FAFAFA",
                                    fontWeight: Platform.OS == "ios" ? "bold" : null,
                                    fontFamily:"Futura Std",
                                    fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBold",
                                }}>SEND EMAIL</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Contact;