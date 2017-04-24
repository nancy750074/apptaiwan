import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const Culture =()=>{
    const{searchbg,searchbar,iconsearch,textstyle,choosebg,choosebar,textstyle1,textstyle2,Sixpicbg,pic1,textstylea,textstyleb}=styles;

    return(
       <View>
        <View style={searchbg}>
            <View style={searchbar}>
                  <Image source={require('../assets/icon_search.png')} 
                         style={iconsearch} />
                  <Text style={textstyle}>Search</Text>
            </View>
        </View>
        <View style={choosebg}>
            <Text style={textstyle1}>童玩</Text>
            <Text style={textstyle2}>工藝</Text>
            <Text style={textstyle2}>技藝</Text>
        </View>
        <View style={choosebar}>
        </View>
        <View style={Sixpicbg}>
            <View>
                   <Image source={require('../../src/assets/z.jpg')} 
                   style={pic1} />
                   <Text style={textstylea}>風車</Text>
                   <Text style={textstyleb}>風車以秸稈作支架，紙條作圓形</Text>
                    <Text style={textstyleb}>車輪，下面用泥和紙作鼓。</Text>
                   <Image source={require('../../src/assets/x.jpg')} 
                   style={pic1} />
                   <Text style={textstylea}>毽子</Text>
                   <Text style={textstyleb}>是一種用羽毛或紙、布等插在圓</Text>
                   <Text style={textstyleb}>形的底座上做成的遊戲器具。</Text>
            </View>
            <View>    
                   <Image source={require('../../src/assets/c.jpg')} 
                   style={pic1} />
                   <Text style={textstylea}>滾鐵環</Text>
                   <Text style={textstyleb}>將一根鐵條 扭成環狀，再用長柄</Text>
                   <Text style={textstyleb}>的鐵鉤驅動鐵環向前滾動。</Text>
                   <Image source={require('../../src/assets/v.jpg')} 
                   style={pic1} />
                   <Text style={textstylea}>波浪鼓</Text>
                   <Text style={textstyleb}>一根木柱為柄，雙耳繫有繩。有</Text>
                   <Text style={textstyleb}>單個或多個等組合。</Text>

            </View>
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
    searchbar:{
        width:320,
        height:30,
        backgroundColor:'rgb(157,157,157)',
        marginLeft:20,
        marginTop:20,
        flexDirection:'row',
    },
    textstyle:{
        color:'rgb(233,233,233)',
        fontSize:15,
        fontWeight: 'bold',
        marginLeft:8.2,
        marginTop:5,
    },
    iconsearch:{
        width:12.8,
        height:12.8,
        marginLeft:11,
        marginTop:8.5,
    },
    choosebg:{

        height:20,
        backgroundColor:'rgb(185,185,185)',
        flexDirection:'row',
        
        
    },
choosebar:{
        width:25,
        height:5,
        backgroundColor:'rgb(157,157,157)',
        marginLeft:20,
    },
    textstyle1:{
        color:'rgb(233,233,233)',
        fontSize:12,
        fontWeight: 'bold',
      marginLeft:20,
    },
    textstyle2:{
        color:'rgb(233,233,233)',
        fontSize:12,
        fontWeight: 'bold',
       marginLeft:20,
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

export default Culture;