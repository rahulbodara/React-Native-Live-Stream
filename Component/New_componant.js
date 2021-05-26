import React from 'react';
import { Image, 
    Platform, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput,
     TouchableOpacity,
      View } from 'react-native';
import { color } from 'react-native-reanimated';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'
import {newsdata} from '../JsonData/newsjson';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import Share from 'react-native-share';
//import {shareOptions} from '../Authentication/share';


export const NewsScreen = ({naigation}) =>{
    const navigation = useNavigation();
    return(
        
        <View style={{
            width:"100%",
        }}>
            <View style={{
                flexDirection:"row"
            }}>
                <View style={{
                    width:"5%",
                    //marginLeft:"2%"
                }}>
                   <View style={styles.diagonal}/>

                </View>

                <View style={{
                    width:"50%"
                }}>
                     <Text style={
                         styles.titleleft}>LATEST NEWS</Text>
                                   
                </View>

                <View style={{
                    width:"40%",
                    alignItems:"flex-end",
                 }}>
                        <TouchableOpacity onPress={
                            () =>navigation.navigate('news')}>
                                    
                                    <Text style={
                                        styles.titleright
                                        }>VIEW ALL</Text>
                                        
                        </TouchableOpacity>
                </View>
                            
            </View>
{/* Latest News */}
             <View style={styles.viewimage}>
                
                <Image source={
                    require('../../assest/images/letestnews.png')}
                    style={{
                        width:"100%",
                        height:"100%"
                        }}/>
                <View style={{
                        flexDirection:"row",
                        position:"absolute",  
                        padding:"3%",
                        height:"100%",
                        width:"100%",
                }}>
                    
                    <View style={{
                        width:"60%",
                        alignContent:'flex-end',
                        justifyContent:"flex-end"
                    }}>
                         <Text style={
                             styles.waptext
                             }>BRANDON “2 SMOOTH” CRUZ Q & A 
                                             ON UPCOMING 3.2.1. BOXING PPV 
                                                SHOWDOWN WITH ARNOLD DINONG</Text>
                    </View>

                    <View style={{
                        alignContent:"flex-end",
                        justifyContent:"flex-end",
                        alignItems:"flex-end",
                        width:"40%",               
                     }}>

                         <TouchableOpacity onPress={
                             () =>Share.open({url : "../../assest/images/letestnews.png"})
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
            </View>
{/* New Blood*/}
            <View>
                <View>
                    <View style={{
                        flexDirection:"row",
                        marginTop:10    
                    }}>
                         
                        <View style={{
                            width:"50%"
                        }}>
                             <Text style={
                                 [styles.textstyle,
                                 {marginLeft:20,
                                    fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook", }
                                 ]}>New Blood</Text>
                        </View>
                         <View style={{
                             width:"50%",
                             alignItems:"flex-end",
                             paddingRight:20
                        }}>
                                 <TouchableOpacity>
                                        <Text style={styles.textstyle}>10 hours ago</Text>
                                </TouchableOpacity>
                        </View>
                         
                    </View>
                            
                    <View style={{
                        width:'100%',
                        height:1,
                        backgroundColor:"#BE1E2D",
                        marginTop:10,
                    }}></View>
                </View>
{/* News raw View*/}
                        

                <View style={{
                    flexDirection:"row",
                    marginTop:"5%", 
                    width:"99%"
                }} >
               
                    {newsdata.map((item , i) =>{
                         //  console.log(item.source)
                        var data = item.img_source
                        var dataid = item.id
                        console.log(item)
                        if(dataid == "N1" || dataid == "N2")
                        {

                        return(
                            <View style={{
                                width:"50%", 
                                marginRight:"1%"
                            }}>

                                 <Image
                                        source={item.img_source}
                                        style={{ 
                                            width: "100%",
                                            height: 257 ,
                                            resizeMode:"cover"
                                        }}
                                 />

                                <Image source={
                                    require("../../assest/images/Gradient.png")}
                                    style={{
                                        resizeMode:"stretch",
                                        width:"100%",
                                        height:257,
                                        position:"absolute",
                                }}/>

                                <View style={{
                                    position:"absolute",  
                                    padding:"5%",
                                    height:"100%",
                                    width:"100%",
                                    justifyContent:"flex-end",
                                    paddingBottom:"20%",
                                }}>
                                                        
                                         <View style={{
                                            alignItems:"flex-start",
                                            paddingBottom:15,
                                            width:"40%",
                                         }}>
                                                
                                                <TouchableOpacity onPress={
                                                    () =>Share.open({url : item.img})
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
                                        
                                        <View style={{
                                            width:"60%",
                                            alignContent:'flex-end',
                                            justifyContent:"flex-end"}}>
                                                  <Text style={[styles.waptext , {fontWeight: Platform.OS == "ios" ? "bold" : null,}]}>{item.detail}</Text>
                                        </View>
                                                        
                                </View>
                                 <View style={{
                                     flexDirection:"row",
                                     marginTop:'5%'
                                }}>
                                         <View style={{
                                             width:"50%",
                                             alignItems:"center"
                                         }}>
                                                 <Text style={
                                                     [styles.textstyle , 
                                                     ]}
                                                >{item.Name}</Text>
                                        </View>

                                        <View style={{
                                            width:"50%",
                                            alignContent:"center"
                                        }}>
                                                        
                                                <Text style={[styles.textstyle , {marginLeft:10}]}>{item.upload_time}</Text>
                                        </View>
                                </View>

                                <View style={{
                                    width:'100%',
                                    height:1,
                                    backgroundColor:"#BE1E2D",
                                     marginTop:"5%"}}>
                                 </View>
                            </View>
                           );
                         }
                   })}

                 </View>

{/* News Clomn View */}
                <View>
                             
                    <View>
                        <View style={{
                            marginTop:"5%",
                            //marginRight:"4%",
                            marginLeft:"1%"}} >
               
                        {newsdata.map((item , i) =>{
                              console.log(item)
                              var dataid = item.id
                              if(dataid == "N9" || dataid == "N10")
                              {
                          
                         return(
                        <View style={{
                            width:"98%", 
                            flexDirection:"row",
                            marginBottom:"2%",
                            height:115
                        }}>
                            <View style={{
                                width:"20%",
                                height:115
                            }}>
                                <Image source={item.img_source}
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            resizeMode:"stretch"
                                }}/>
                            </View>                    
                            <View style={{
                                height:"93%",
                                width:"80%",
                                justifyContent:"space-between",
                            }}>
                                    <Text style={{
                                        fontSize:14,
                                        paddingLeft:15,
                                        width:"100%",
                                        height:"40%",
                                        marginTop:"5%",
                                        color:"#111218",
                                        fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook", 
                                    }}>{item.detail}</Text>

                                    <View style={{
                                        width:"20%",
                                        height:"20%"
                                    }}>
                                        <TouchableOpacity onPress={
                                            () =>Share.open({url : item.img})
                                                .then((res) => {
                                                   console.log(res);
                                                                })
                                                .catch((err) => {
                                                    err && console.log(err);
                                                 })}>
                                                <Icon 
                                                    name="upload"
                                                    type="antdesign"
                                                    color="#BE1E2D"
                                                    size={19}
                                                />
                                        </TouchableOpacity>
                                    </View> 
                            <View style={{
                                justifyContent:"center" ,
                                width:"100%",
                                height:"20%",
                                paddingLeft:15,
                                flexDirection:"row", 
                                marginTop:"4%"                                        
                            }}>
                                <View style={{
                                    width:"60%",
                                    paddingLeft:"5%"
                                }}>
                                         <Text style={styles.textstyle}>{item.Name}</Text>
                                </View>

                                <View style={{
                                    width:"50%",
                                    alignItems:"flex-end",
                                    paddingRight:"10%"
                                }}>
                                    <Text style={styles.textstyle}>{item.upload_time}</Text>
                                </View>
                            </View>

                            <View style={{
                                width:'100%',
                                height:1,
                                backgroundColor:"#BE1E2D",
                                marginLeft:5,
                            }}></View>
                        </View>
                            
                    </View>
                    );
                     }
                     })}

                </View>
            </View>

        </View>

    </View>

 </View>
       
    );
}

const styles = StyleSheet.create({
    titleleft:{
        color:"#111218",
        fontWeight: Platform.OS == "ios" ? "bold" : null,
        //fontWeight:"bold",
        fontSize:14,
        fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBold",
    },
    titleright:{
        color:'#707174',
        fontSize:12,
        fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
   
    },
    viewimage:{
        width:"100%",
         height:180,
           marginTop:"5%"
    },
    waptext:{
        color:"#FAFAFA",
        alignSelf:"flex-end",
        fontSize:14,
        fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBold",
        fontWeight: Platform.OS == "ios" ? "bold" : null,
        lineHeight:16
    },
    textstyle:{
        color:"#707174",
        fontSize:12,
        fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
    },
    diagonal:{
        transform: [ {rotate: '125deg'} ],
        top: 1,
        width: 22,
        height: 20,
        left:7,
        borderBottomColor: "#BE1E2D",
        borderBottomWidth: 3,
    }
    

})