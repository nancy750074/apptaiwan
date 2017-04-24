import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';
const MyLove =()=>{
    const{searchbg,searchbg2,textstyle,textstyle1,textstyle2,Sixpicbg,pic1,textstylea,textstyleb}=styles;

    return(
       <View>
        <View style={searchbg}>
                  <Text style={textstyle}>Culture</Text>
        </View>
        <View style={Sixpicbg}>
            <View>
                   <Image source={require('../../src/assets/z.jpg')} 
                   style={pic1} />
                   <Text style={textstylea}>風車</Text>
                   <Text style={textstyleb}>風車以秸稈作支架，紙條作圓形</Text>
                    <Text style={textstyleb}>車輪，下面用泥和紙作鼓。</Text>
            </View>
            <View>    
                   <Image source={require('../../src/assets/c.jpg')} 
                   style={pic1} />
                   <Text style={textstylea}>滾鐵環</Text>
                   <Text style={textstyleb}>將一根鐵條 扭成環狀，再用長柄</Text>
                   <Text style={textstyleb}>的鐵鉤驅動鐵環向前滾動。</Text>
            </View>
           </View>
           <View style={searchbg2}>
                  <Text style={textstyle}>Activity</Text>
        </View>

                 <View style={searchbg}>
                 <Image source={require('../../src/assets/aaa.jpg')} 
                    />
        </View>

        </View>
        
    );
};

const styles = {
    searchbg:{
       
        height:60,
        backgroundColor:'rgb(185,185,185)',
        flexDirection:'row',
    },
      searchbg2:{
       
        height:60,
       marginTop:20,
        backgroundColor:'rgb(185,185,185)',
        flexDirection:'row',
    },
    textstyle:{
        color:'rgb(255,255,255)',
        fontSize:15,
        fontWeight: 'bold',
        marginLeft:25,
        marginTop:20,
    },
    Sixpicbg:{
        flexDirection:'row',
    },
    pic1:{
        width:150,
        height:150,
        marginTop:25,
        marginLeft:25,
    },
    textstylea:{
        color:'rgb(0,0,0)',
        fontSize:15,
        fontWeight: 'bold',
        marginLeft:25,
        marginTop:10,
    },
    textstyleb:{
        color:'rgb(0,0,0)',
        fontSize:10,
        fontWeight: 'bold',
        marginLeft:25,
        marginTop:10,
    },
};

export default MyLove;