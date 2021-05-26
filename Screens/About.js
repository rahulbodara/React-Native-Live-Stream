import React from 'react'
import { Image, Text , View , StatusBar , SafeAreaView, ScrollView } from 'react-native'
import {HeaderView} from '../Header';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={{ backgroundColor }}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

const AboutScreen = () =>{
    return(
        <View style={{height:"100%"}}>
            {/* <MyStatusBar backgroundColor="#BE1E2D" /> */}
            <ScrollView>
            <View style={{height:"100%"}}>
             <View style={{height:430}}>
                    <Image source={require("../../../assest/images/Thompson.png")}
                          style={{marginTop:"10%"}}/>
                    <View style={{position:"absolute" , width:"100%"}}>
                        <HeaderView />
                    </View>
                    <View style={{flexDirection:"row",width:"100%",}}>
                            <View style={{width:"50%"}}>
                                <Image source={require("../../../assest/images/Diagonal3.png")}
                                        style={{height:50,
                                                width:150,
                                                resizeMode:"contain",
                                                marginLeft:"5%"}}/>
                            </View>
                            <View style={{width:"45%",
                                            justifyContent:"flex-end"}}>
                                <Text style={{alignSelf:"flex-end",
                                fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                                               }}>KEN THOMPSON</Text>
                            </View>
                    </View>
                    <View style={{position:"absolute",
                                    marginTop:120,
                                    height:250,
                                    width:"100%",
                                    alignItems:"flex-end",
                                    justifyContent:"center",
                                    flexDirection:"row",
                                    }}>
                        <Text style={{color:"#BE1E2D",
                                        fontSize:45,
                                        textTransform:"uppercase",
                                        fontWeight: Platform.OS == "ios" ? "bold" : null,
                                        fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBold",}}>About</Text>
                        <Text style={{color:"#FFFFFF",
                                        fontSize:70,
                                        fontFamily:"HaveHeartOne",marginLeft:-15}}>Thopmson</Text>
                    </View>

             </View>

             <View style={{padding:30}}>
                 <Text style={{lineHeight:20,
                                fontSize:15,
                                fontFamily: Platform.OS == "ios" ?  "Futura Std" : "FuturaStdBook",
                                }}>In a sea of boxing promoters, Thompson Boxing Promotions 
                                stands out from the rest by consistently delivering high-quality, 
                                action packed fights that thrill the most knowledgable of boxing fans 
                                and turn boxing novices into aficionados. The Southern California based 
                                company was started in May of 2000 bt Ken Thompson, the former President of the 
                                World Boxing Hall of Fame .Thompson Boxing Promotions set out to develop and build 
                                top-tier boxing talent capable of competing for and capturing world titles in the variousIn a sea of boxing promoters, Thompson Boxing Promotions 
                                stands out from the rest by consistently delivering high-quality, 
                                action packed fights that thrill the most knowledgable of boxing fans 
                                and turn boxing novices into aficionados. The Southern California based 
                                company was started in May of 2000 bt Ken Thompson, the former President of the 
                                World Boxing Hall of Fame .Thompson Boxing Promotions set out to develop and build 
                                top-tier boxing talent capable of competing for and capturing world titles in the variousIn a sea of boxing promoters, Thompson Boxing Promotions 
                                stands out from the rest by consistently delivering high-quality, 
                                action packed fights that thrill the most knowledgable of boxing fans 
                                and turn boxing novices into aficionados. The Southern California based 
                                company was started in May of 2000 bt Ken Thompson, the former President of the 
                                World Boxing Hall of Fame .Thompson Boxing Promotions set out to develop and build 
                                top-tier boxing talent capable of competing for and capturing world titles in the various</Text>


               
             </View>


             </View>

             </ScrollView>


        </View>
    );
}

export default AboutScreen;